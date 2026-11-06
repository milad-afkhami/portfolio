# Portfolio project instructions

This repository contains Milad Afkhami's public portfolio. Project-local skills live under
`.agents/skills/`; keep them here and do not copy them into `agent-toolkit` or a global skills
directory.

Before writing or revising a blog, read [`docs/blog-writing-guide.md`](docs/blog-writing-guide.md).
For topic selection and release state, read the canonical lifecycle file at
`/home/milad/Desktop/projects/career-development/research/portfolio-blogs.yml` when it is
available. A concern, idea, or source article is input, not automatic permission to create a
public route. Record whether the topic was selected, proposed, or rejected.

The single local workflow skill is [portfolio-blog](.agents/skills/portfolio-blog/SKILL.md). Invoke
`$portfolio-blog` for the complete flow: selection, writing, optional OmniRoute art, localhost
review, and an explicitly approved production release.

Use `NEXT_TELEMETRY_DISABLED=1 npm run dev` on port 4000 for review. Stop the dev server before
`npm run build` because both use `.next`. Do not publish to `main` merely because a local preview
passes; production release is a separate, explicitly authorized action.

Never read or write `MEMORY.md` or a `memory/` directory. Keep secrets out of the repository and
use the OmniRoute skill's credential helper rather than copying its token into scripts or files.
