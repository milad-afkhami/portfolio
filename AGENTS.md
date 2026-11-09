# Portfolio project instructions

This repository contains Milad Afkhami's public portfolio, built with Next.js App Router,
React, TypeScript, Tailwind CSS, DaisyUI, and MDX. Start with [README.md](README.md) for the
project purpose, boundaries, structure, and common commands. Use the [project-conventions skill](.agents/skills/project-conventions/SKILL.md) for code-specific conventions.

## Working rules

- Inspect the relevant files, current diff, and existing checks before changing behavior.
- Ask a focused clarification only when a material ambiguity would change the implementation;
  otherwise make the smallest justified decision and record it when it is durable.
- Prefer an established, maintained dependency for generic behavior when it fits the existing
  stack. Keep custom code for project-specific behavior or when a dependency would add needless
  complexity.
- Keep user-facing changes simple, usable, responsive, and accessible. Use Tailwind and DaisyUI
  for styling and add restrained CSS transitions or micro-interactions where they improve feedback.
- Keep components focused. Put project-specific business logic in `src/helpers/` when it is too
  complex or repetitive for a component, and generic reusable utilities in `src/utils/`.
- Keep data access and external integrations in `src/services/`; services may transform external
  data and enforce application-level rules before data reaches components.
- Follow the existing TypeScript conventions. Use explicit, meaningful names for fixed values;
  prefer string-valued enums only when an enum is clearer than a union or constant map.
- Organize new files with the existing layout: `src/app/` for routes, `src/components/` for
  reusable UI (grouped by domain where useful), `src/configs/` for configuration,
  `src/constants/` for constants and enums, `src/data/` for mostly static data, `src/docs/` for
  project notes, `src/hooks/` for hooks, `src/services/` for integrations, `src/types/` for
  shared types, `src/helpers/` for domain helpers, and `src/utils/` for generic utilities.
- Do not add a new abstraction or directory solely to satisfy a template. Keep documentation
  close to the subsystem it describes and link to it from the project entry point.
- Do not expose secrets in the repository. Use environment variables and existing credential
  helpers for integrations.

## Verification

Run the narrowest relevant checks while working, then run the canonical checks before handing off:

```bash
npm run lint
npm run build
```

Use `NEXT_TELEMETRY_DISABLED=1 npm run dev` on port 4000 for browser review. Stop the dev server
before `npm run build` because both use `.next`. Report any stale documentation or check command
that you discover, establish the command from `package.json`, and update the maintained entry point.

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

Keep stable project facts, rationale, and contracts in the nearest maintained project document.
Link durable documentation from `README.md` or this file, and check claims against the code and
package scripts rather than treating prose as a substitute for inspection.
