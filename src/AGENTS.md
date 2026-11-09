# Source map

`src/` contains the portfolio application. Read the nearest child `AGENTS.md` before changing a
subsystem. Keep route composition in `app/`, reusable UI in `components/`, static content in
`data/`, integration boundaries in `services/`, and shared behavior in `hooks/`, `types/`, and
`utils/`. Preserve the separation between public content data and rendering code.

Run `npm run lint` after source changes. Run `npm run build` when changes affect routes, rendering,
data loading, or the production bundle.
