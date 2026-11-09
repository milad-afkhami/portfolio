# App Router

`src/app/` owns route composition, page metadata, loading states, not-found handling, and the
application shell. Keep reusable presentation in `src/components/` and data access in
`src/services/`. Route pages should compose those boundaries rather than duplicate fetching or
business rules. Check the nearest route instructions before changing a section.

Use the existing Next.js App Router conventions. Review the real route in a local server with
`NEXT_TELEMETRY_DISABLED=1 npm run dev` when changing user-facing behavior.
