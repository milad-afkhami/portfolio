# Portfolio project instructions

This repository contains Milad Afkhami's public portfolio, built with Next.js App Router,
React, TypeScript, Tailwind CSS, DaisyUI, and MDX. Start with [README.md](README.md) for the
project purpose, boundaries, structure, and common commands. For code changes, read the nearest
`AGENTS.md` in the subtree you are entering; those files own subsystem-specific conventions.

## Repository-wide rules

- Inspect the relevant files, current diff, and existing checks before changing behavior.
- Ask a focused clarification only when a material ambiguity would change the implementation;
  otherwise make the smallest justified decision and continue.
- Do not expose secrets in the repository. Use environment variables and existing credential
  helpers for integrations.
- Do not add a new abstraction or directory solely to satisfy a template. Keep durable
  documentation near the subsystem it describes.

## Verification

Run the narrowest relevant checks while working, then run the canonical checks before handing off:

```bash
npm run lint
npm run build
```

Use `NEXT_TELEMETRY_DISABLED=1 npm run dev` on port 4000 for browser review. Stop the dev server
before `npm run build` because both use `.next`. Establish commands from `package.json` when
repository documentation disagrees with the code.

## Blog workflow

Before writing or revising a blog, read [`docs/blog-writing-guide.md`](docs/blog-writing-guide.md).
For topic selection and release state, read the canonical lifecycle file at
`/home/milad/Desktop/projects/career-development/research/portfolio-blogs.yml` when available.
A concern, idea, or source article is input, not automatic permission to create a public route;
record whether the topic was selected, proposed, or rejected. The local workflow skill is
[portfolio-blog](.agents/skills/portfolio-blog/SKILL.md). Use it for selection, writing, optional
OmniRoute art, localhost review, and an explicitly approved production release.

Do not publish to `main` merely because a local preview passes; production release is a separate,
explicitly authorized action.

## Documentation maintenance

Keep each fact in the nearest document that owns it. Root guidance should describe repository-wide
constraints; subsystem `AGENTS.md` files should describe local boundaries and checks. Link to a
more specific document instead of duplicating its rules.
