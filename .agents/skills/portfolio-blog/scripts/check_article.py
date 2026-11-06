#!/usr/bin/env python3
"""Check the stable contract for one portfolio blog MDX file."""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path


REQUIRED = (
    "title",
    "description",
    "summary",
    "date",
    "readingTime",
    "category",
    "quality",
    "coverImage",
    "tags",
)


def parse_frontmatter(source: str) -> dict[str, str]:
    match = re.match(r"\A---\s*\n(.*?)\n---\s*(?:\n|\Z)", source, re.DOTALL)
    if not match:
        raise ValueError("frontmatter must start and end with ---")
    values: dict[str, str] = {}
    last_key: str | None = None
    for line in match.group(1).splitlines():
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        key, separator, value = line.partition(":")
        if not separator:
            if last_key:
                values[last_key] += f" {line.strip()}"
                continue
            raise ValueError(f"frontmatter line has no colon: {line}")
        cleaned = value.strip()
        if len(cleaned) >= 2 and cleaned[0] == cleaned[-1] and cleaned[0] in {'"', "'"}:
            cleaned = cleaned[1:-1]
        last_key = key.strip()
        values[last_key] = cleaned
    return values


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("article", type=Path)
    parser.add_argument("--repo-root", type=Path, default=None)
    parser.add_argument("--strict", action="store_true", help="require the current article asset convention")
    args = parser.parse_args()

    article = args.article.resolve()
    repo = (args.repo_root or article.parents[3]).resolve()
    source = article.read_text(encoding="utf-8")
    errors: list[str] = []
    warnings: list[str] = []
    try:
        frontmatter = parse_frontmatter(source)
    except ValueError as error:
        result = {"article": str(article), "errors": [str(error)], "warnings": []}
        print(json.dumps(result, indent=2))
        return 1

    missing = [key for key in REQUIRED if key not in frontmatter]
    errors.extend(f"missing frontmatter: {key}" for key in missing)

    slug = article.stem
    expected_cover = f"/images/blog/{slug}-cover.jpg"
    actual_cover = frontmatter.get("coverImage", "")
    if actual_cover != expected_cover:
        message = f"coverImage should be {expected_cover} for a new article"
        (errors if args.strict else warnings).append(message)
    cover_path = repo / "public" / actual_cover.lstrip("/")
    if not cover_path.is_file():
        errors.append(f"delivery cover is missing: {cover_path}")
    source_cover = (repo / "public" / expected_cover.lstrip("/")).with_suffix(".png")
    if not source_cover.is_file():
        (errors if args.strict else warnings).append(f"preserved PNG source is missing: {source_cover}")

    heading_lines = [line for line in source.splitlines() if re.match(r"^#{2,3} ", line)]
    unnumbered = [line for line in heading_lines if not re.match(r"^#{2,3} \d+(?:\.\d+)*\. ", line)]
    if unnumbered:
        warnings.append(f"{len(unnumbered)} H2/H3 headings are not explicitly numbered")
    if "```mermaid" in source:
        warnings.append("Mermaid is present; inspect the rendered diagram at desktop and mobile widths")
    if re.search(r"/downloads/(?:ai-series|agent-workflows)/[^\s)]+", source):
        warnings.append("article references a legacy download path; confirm compatibility or migrate it")
    if re.search(r"(?:/assets|/images)/[^\s)]*/(?:B\d+|I\d+)(?:/|[-_])", source):
        errors.append("public asset path exposes an internal tracking ID")

    result = {
        "article": str(article),
        "slug": slug,
        "frontmatter": frontmatter,
        "errors": errors,
        "warnings": warnings,
    }
    print(json.dumps(result, indent=2))
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
