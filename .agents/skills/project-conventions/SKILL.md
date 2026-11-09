---
name: project-conventions
description: Apply repository-wide implementation standards for this portfolio while deferring subsystem-specific rules to the nearest AGENTS.md.
---

# Project conventions

Use this skill for application code changes. Before editing, read the nearest `AGENTS.md` for the
subsystem you are entering; it owns local file placement, contracts, templates, and behavior. This
skill contains only cross-cutting standards.

## Source of truth

This is a Next.js App Router application using React 18, TypeScript, Tailwind CSS, DaisyUI, MDX,
and npm. The actual `package.json`, source tree, and existing neighboring code take precedence over
copied examples or generic assumptions. Do not introduce Vite, React Router, Jotai, Yarn-only
commands, or another technology unless the repository adopts it explicitly.

## Dependencies

Before implementing generic behavior, check whether a maintained dependency already fits the
existing stack. Prefer an established library for common UI, forms, state, icons, visualization, or
utility behavior when it reduces complexity. Keep custom code for project-specific behavior.

## Scope and interaction

Include relevant features and interactions when they serve the requested outcome; do not add
unrelated scope. Ask a clarification only when the answer would materially change the
implementation. Otherwise make a reasonable decision, inspect the result, and continue through the
authorized task. Once the task is complete, report the result and verification instead of waiting
for unspecified next steps.

## Verification

Run the narrowest relevant check while working. Before handoff, run:

```bash
npm run lint
npm run build
```

Treat lint errors as blockers. Report existing warnings and unrelated findings separately. For
user-facing changes, use `NEXT_TELEMETRY_DISABLED=1 npm run dev` on port 4000 and inspect the real
recipient view at desktop and mobile widths.
