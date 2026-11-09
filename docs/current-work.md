# Current work

## Checkpoint

- **Goal:** Replace project-specific Cursor rules with maintained Codex instructions and make the
  repository understandable from its entry points.
- **Changed:** `AGENTS.md`, `README.md`, `docs/decisions/`, and this checkpoint; removed `.cursor/`.
- **Verified:** The instructions match the current Next.js package scripts and `src/` layout.
- **Verified:** `npm run lint` and `npm run build` pass; both report only pre-existing warnings in
  `src/app/about/page.tsx` and `src/components/cards/TestimonialCard.tsx`.
- **Verified:** The reviewed branch was merged into `main` as `2d59670`.
- **Open:** None for this migration.
- **Next:** Start the next task from `README.md`, `AGENTS.md`, and this checkpoint.
