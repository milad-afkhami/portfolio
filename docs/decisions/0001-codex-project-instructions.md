# 0001: Use AGENTS.md as the project instruction entry point

- **Status:** Accepted
- **Date:** 2026-11-09

## Decision

Use the repository-root `AGENTS.md` as the maintained instruction entry point for Codex and other
coding agents. Keep durable project facts and working constraints there, link to deeper subsystem
documentation when needed, and keep unfinished work in `docs/current-work.md`.

Remove the old `.cursor/rules/` directory after migrating the rules that still apply. The migrated
rules are expressed as repository guidance rather than Cursor-specific rule files or prompts.

## Rationale

The project needs one discoverable path for an agent joining from scratch. The old Cursor rules were
fragmented and included stale technology assumptions that contradicted `package.json` and the
current source tree. A single maintained entry point reduces conflicting instructions and gives
verification commands and current state an explicit home.

## Verification

The canonical commands are the scripts in `package.json`: `npm run lint` and `npm run build`.
Documentation changes should be checked against those scripts and the actual `src/` layout whenever
the project changes.
