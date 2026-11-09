---
name: project-conventions
description: Apply this portfolio's component, TypeScript, service, helper, folder, styling, dependency, and interaction conventions when creating or changing code in this repository.
---

# Project conventions

Use this skill when a task creates or changes application code. Read the relevant section before
editing and inspect the existing neighboring code before applying a template.

## Stack and verification

This is a Next.js App Router application using React 18, TypeScript, Tailwind CSS, DaisyUI, MDX,
and npm. Do not assume the old Cursor rule's Vite, React Router, Jotai, or Yarn examples apply.
Use the scripts in `package.json` as the source of truth:

```bash
npm run lint
npm run build
```

Use `NEXT_TELEMETRY_DISABLED=1 npm run dev` for local review on port 4000. Stop the dev server
before building because both use `.next`.

## Choosing dependencies

Before writing generic behavior, check whether a maintained package already fits the existing stack.
Prefer existing libraries for common UI, forms, state, icons, data visualization, and utility needs.
Use custom code when the behavior is project-specific or a dependency would add needless complexity.

## File placement

- `src/app/`: routes and App Router pages.
- `src/components/`: reusable UI, grouped by domain where useful.
- `src/configs/`: application configuration.
- `src/constants/`: fixed constants and enums.
- `src/data/`: mostly static or rarely changing data.
- `src/docs/`: source-adjacent project notes.
- `src/hooks/`: custom React hooks.
- `src/services/`: external data access, transformations, and application rules at integration boundaries.
- `src/types/`: shared TypeScript types.
- `src/helpers/`: project-specific logic that is too complex or repetitive for a component but is not generic.
- `src/utils/`: generic reusable utilities.

Do not create an abstraction or directory only to satisfy a template. Keep documentation beside the
subsystem it describes and link it from `README.md` or `AGENTS.md` when it is durable knowledge.

## Components and styling

Keep components focused. Use this shape as a starting point, then match the surrounding code:

```tsx
import type { ReactElement } from "react";

type Props = {};

/** Describe behavior that is not already clear from the code. */
export default function SomeComponent(_props: Props): ReactElement {
  return <div>Some Component</div>;
}
```

Use Tailwind and DaisyUI for styling. Prefer simple, clean layouts and restrained CSS transitions,
hover states, and micro-interactions when they improve feedback without reducing usability.

## Types, constants, and enums

Use explicit, meaningful names for fixed values. Prefer a string-valued enum only when it is clearer
than a union or constant map:

```ts
type UserAvatar = {
  id: number;
  url: string;
};

enum UserRole {
  Admin = "ADMIN",
  User = "USER",
}
```

Keep storage keys, query keys, and DOM IDs grouped by purpose and use descriptive names:

```ts
export const STORAGE_KEY_ACCESS_TOKEN = "ACCESS_TOKEN";
export const QUERY_KEY_PAGE = "page";
export const DOM_ID_SOME_ELEMENT = "some-id";
```

## Helpers and services

Helpers isolate domain-specific logic from UI components. Do not put generic utilities in helpers;
put those in `src/utils/`.

Services are the boundary between the application and external systems. They may map request and
response shapes, convert naming conventions, and enforce integration-specific rules before returning
data to components. Keep service result types explicit:

```ts
type Params = { a: string; b: string };
type Result = { c: number; d: string };

export default async function getSomethingService(params: Params): Promise<Result> {
  // Call the integration, transform its response, and return the app-facing shape.
  return { c: Number(params.a), d: params.b };
}
```

## Interaction and ambiguity

Ask a focused clarification only when a material ambiguity would change the implementation. Otherwise
make the smallest justified decision, inspect the result, and continue. Do not stop after generating
requirements or code to ask for unspecified “next steps.”

## Additional conventions carried from the former project rules

### Clarification and scope

Ask questions only when the missing answer would materially change the implementation. Otherwise
make a reasonable decision, inspect the result, and continue through the authorized task. Include
relevant features and interactions when they serve the requested outcome; do not add unrelated
scope. Once the requested work is complete, report the result and verification instead of waiting
for unspecified next steps.

### Component, type, constant, and enum choices

Keep component props explicit and add `PropsWithChildren` when a component is an HOC that forwards
children. Use short comments only for behavior that the code does not make clear. Use enums for a
fixed set of related constants when an enum communicates the domain better than a union or constant
map. Keep constants grouped by purpose, such as storage keys, query parameters, and DOM IDs.

### Helpers, services, and boundaries

Use helpers for project-specific business logic that is too complex or repetitive for a component
but too specific for a shared utility. Keep generic functions in `src/utils/`. Services mediate
external APIs and other integrations: they may transform naming conventions and response shapes,
adjust data for the UI, and enforce integration-level rules before returning an app-facing result.
Do not bypass an existing service boundary from a component without a concrete reason.

### Styling and technology accuracy

Use Tailwind CSS and DaisyUI for styling in this repository. The actual `package.json`, source tree,
and existing code take precedence over copied examples or generic stack assumptions. Do not import
Vite, React Router, Jotai, Yarn-only commands, or other technologies unless the repository adopts
them explicitly.

### Linting and completion

Run `npm run lint` after code changes and before handoff. Treat warnings as findings to report, and
fix errors before considering the task complete. Run `npm run build` for changes that affect the
application build or when the project instructions require the canonical checks.
