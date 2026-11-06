---
name: portfolio-blog
description: Create or revise a portfolio blog from an idea, concern, source, project, or skill, generate reviewed art, show it on localhost, and release it only after explicit approval.
---

# Portfolio blog

Use this single skill for the complete workflow. Do not ask the user to invoke separate writing,
image, preview, or release skills. The supporting procedures are in [references/writing.md](references/writing.md),
[references/images.md](references/images.md), [references/preview.md](references/preview.md), and
[references/release.md](references/release.md); read the relevant reference while carrying out that phase.

## 1. Understand the input and protect selection

The input may be a concern, idea, existing blog, research source, project, skill, or revision request.
Classify it before creating a route:

- For an idea or concern, check the selected-topic record at
  `/home/milad/Desktop/projects/career-development/research/portfolio-blogs.yml`. An assistant
  suggestion is not a selection. A rejected idea stays rejected.
- For a source article or research claim, preserve its actual evidence and reading limits. Do not
  turn a quotation into Milad's experience, an association into causation, or a proposal into a
  completed result.
- For a project or skill, explain the reader-facing capability and result. Inspect source code when
  making a technical claim, but keep private operations, credentials, endpoints, and operating
  manuals out of the public article.
- For a revision, inspect the current route, source, asset, and requested outcome before editing.

Create one run folder at `.scratchpad/<date>-<slug>/` containing the input, selection origin,
source/evidence notes, decisions, and a current checkpoint. Do not run historical generators over
the current lifecycle file.

## 2. Write the article

Read `docs/blog-writing-guide.md` and then the relevant source material. Write a knowledge-sharing
article in ordinary language, using first person only for a real experience or meaningful view. Do
not repeat “I want,” “I would,” or “I expect” as a template. Use the length the idea needs; remove
repetition, generic advice, and side topics.

Use the existing MDX frontmatter and numbered H2/H3 headings. A new article normally needs:

```text
src/data/blogs/<slug>.mdx
public/images/blog/<slug>-cover.png
public/images/blog/<slug>-cover.jpg
```

Decide deliberately whether a Mermaid diagram helps. Use a flowchart for a process, a state diagram
for changing states, a sequence diagram only when interaction detail helps, and a table for a simple
comparison. Use the existing hand-drawn Warm paper renderer and inspect the actual result at desktop
and mobile widths. Use code or prompt blocks when readers can run or adapt them.

For a reusable prompt or skill, add the Prompt Library entry, a short task-specific example, a
complete source bundle with licenses and relative paths, and an article backlink. Use
`public/assets/prompts/<skill-slug>/` for reusable files and `public/assets/blog/<article-slug>/`
for article-specific files. Never expose tracking IDs in public URLs.

Run the local contract check before moving on:

```bash
python3 .agents/skills/portfolio-blog/scripts/check_article.py --strict src/data/blogs/<slug>.mdx
```

## 3. Generate and review the cover

When the current task authorizes `$omniroute-api`, read its canonical skill and use its verified
Responses image helper. Keep the PNG source, create a JPEG delivery copy for opaque art, and record
actual dimensions and byte counts. The API returning HTTP 200 is not visual verification.

Prompt for a distinct conceptual editorial image with safe space for the site's 16:9 crop. Use
Milad's likeness only when explicitly requested. Inspect the source and delivery image, then inspect
the real article and listing crops at 1440px and 390px. Do not trust a default center crop for faces,
hands, or essential lettering. If the task does not explicitly authorize OmniRoute, prepare the
image prompt and stop before the external generation call.

## 4. Show the real recipient view

Run the existing Next app on port 4000 with `NEXT_TELEMETRY_DISABLED=1 npm run dev`. Check that the
server belongs to this checkout and do not start a second process against the same `.next` folder.
Open the actual article and listing in a browser or viewer; for reusable skills also open `/prompts`,
the prompt detail page, and every linked download.

At 1440px and 390px, check the title, summary, cover, headings, tables, code, diagrams, links, copy
buttons, downloads, broken images, horizontal overflow, hydration errors, and uncaught page errors.
Save the routes, viewports, observations, screenshots, and remaining limits in the run checkpoint.
The user reviews this local result before release.

## 5. Release only after explicit approval

Local review, a successful build, or a previous batch approval does not publish this run. Release
only when the user explicitly says to publish, release, deploy, or ship this named result.

Before release, inspect the exact diff, keep rejected/proposed topics out, stop the dev server during
the production build, run the validator and repository checks, and rerun the recipient-facing checks.
Commit only the reviewed scope using the existing workflow. Push only the authorized branch. Never
force-push, rewrite history, or change repository protection.

After deployment, verify the live article, listing, Prompt Library, assets, downloads, and preserved
compatibility URLs. Update the lifecycle record and checkpoint with the commit, deployment, URLs,
and observed result. Report what was actually checked.
