# Portfolio localhost preview

This skill owns the reviewable local state, not publication. Read the article and asset contract
from [portfolio-blog](../SKILL.md), then run the real app.

## Start and preserve the local review

Use the normal server on port 4000:

```bash
NEXT_TELEMETRY_DISABLED=1 npm run dev
```

Before starting, check whether port 4000 already serves this checkout. Do not start a second Next
process against the same `.next` directory. If the app has changed substantially, restart it so
removed routes and new MDX files are not stale. Keep any existing user browser tabs; if using the
real-browser connector, close only tabs created by this run.

Open the actual routes in a verified browser or viewer, not only a terminal URL or an inline tool
image. For an article use `/blog/<slug>` and `/blog`; for a reusable skill also use `/prompts/<slug>`
and `/prompts`. For article-specific files, open the linked `/assets/blog/<slug>/...` URLs.

## Check what the reader receives

At desktop (1440px) and mobile (390px), observe:

- title, summary, date, reading time, headings, lists, tables, code/prompt blocks, and cover crop;
- no broken images, horizontal document overflow, hydration errors, or uncaught page errors;
- Mermaid diagrams at the actual rendered size, with labels that a reader can follow;
- copy buttons returning exactly the displayed source text;
- Prompt Library links, source/adaptation labels, downloads, and article backlinks;
- image and ZIP downloads returning the intended bytes and useful filenames.

Check one failure or missing-state path when the change adds a consequential interaction. For a
static article, a direct route, card route, and download/copy path are enough. Do not call a page
ready because a build passed; the recipient view is the acceptance evidence.

## Save the handoff

Write a small JSON or Markdown result in `.scratchpad/<run>/` with the routes, viewport sizes,
observed results, screenshots if available, and remaining limits. Report the exact localhost URLs
to the user. Local review and production release are separate decisions; do not run a release just
because these checks pass.
