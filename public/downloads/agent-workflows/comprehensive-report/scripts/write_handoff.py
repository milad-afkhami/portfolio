#!/usr/bin/env python3
"""Wrap a comprehensive report for manual use after chat compaction."""

import os
import sys
import tempfile


PREAMBLE = (
    "# After compaction\n\n"
    "This chat was compacted. The compacted history is already in your context. "
    "Below is the verbatim comprehensive report produced before compaction. "
    "Use both to recover the live thread, decisions and rationale, verified state, "
    "remaining work, and exact resume point. Follow any newer user instructions "
    "if they differ from the report.\n\n"
    "Before resuming substantive work, read in full every document listed under "
    "Required reading in the report, including the current plan and progress/status "
    "documents when applicable. Follow the stated reading order. Do not substitute "
    "the report's summaries, excerpts, or search hits for reading those documents. "
    "Consult Reference material only when needed; this instruction does not require "
    "following every link inside a required document. If a required document cannot "
    "be read, surface that gap before taking an action that depends on it.\n\n"
    "# Comprehensive report (verbatim)\n\n"
)


def main() -> int:
    report = sys.stdin.read()
    if not report.strip():
        print("Refusing to save an empty report", file=sys.stderr)
        return 1

    descriptor, path = tempfile.mkstemp(
        prefix="comprehensive-report-", suffix=".md", dir="/tmp"
    )
    with os.fdopen(descriptor, "w", encoding="utf-8", newline="") as output:
        output.write(PREAMBLE)
        output.write(report)

    print(path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
