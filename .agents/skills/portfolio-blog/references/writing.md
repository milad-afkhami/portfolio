# Portfolio blog writing

Read [`docs/blog-writing-guide.md`](../../../../docs/blog-writing-guide.md) first. When available,
read the career lifecycle and the selected idea's detailed source section before drafting. Keep
selection and lifecycle state in the career workspace; do not make this skill a second tracker.

## Source and selection

- Keep a short run note with the input, selection origin, source files, and claims that still need
  support. An assistant suggestion is not a user selection. Rejected ideas stay rejected.
- For research, use the primary source and state the reading limit. An association is not a causal
  claim, and a proposed method is not a completed experiment.
- For a project or skill, explain the useful capability and reader result rather than reproducing
  the project's operating manual. Inspect the implementation when the article makes a technical
  claim. Do not expose private incidents, credentials, endpoints, or source bundles that the user
  did not authorize.
- Mark invented scenarios as hypothetical once, close to the example. Do not manufacture personal
  anecdotes, measurements, or client results to make the prose sound personal.

## Prose and structure

Start with the useful idea, a concrete problem, or a result. Write for a reader learning something,
not for an employee being instructed. Use ordinary words and explain technical terms when they
matter. Use first person for a real experience or meaningful view; do not frame every paragraph as
“I want,” “I would,” or “I expect.” Prefer “example request,” “example comparison,” and “what the
check showed” over internal process labels.

Use the length the idea needs. Remove repeated caveats, repeated conclusions, generic advice, and
side topics. Make abstract barriers concrete before explaining what AI changes. Keep the existing
frontmatter shape and explicitly numbered `##`/`###` headings. A useful article may be short.

For a new MDX file, verify at least these fields:

```yaml
title: "..."
description: "..."
summary: "..."
date: "YYYY-MM-DD"
readingTime: "... min"
category: "AI Engineering"
quality: "medium"
coverImage: "/images/blog/<slug>-cover.jpg"
tags: ["..."]
```

## Diagrams, code, and source material

During outlining, decide whether a diagram adds understanding. Use Mermaid when a relationship,
decision, architecture, interaction, or change is clearer visually; omit it when a paragraph or
table is clearer. Choose the format deliberately: flowchart for a process, state diagram for
changing states, sequence diagram only when the interaction detail helps, and a table for a simple
comparison. Use standard `mermaid` fences and the existing hand-drawn Warm paper renderer. Inspect
the rendered diagram at desktop and mobile widths; valid syntax alone is not enough.

Use code or prompt blocks when the reader can run, adapt, or compare them. Preserve exact source
text with literal `text` fences when Markdown formatting would change it. For a skill article,
keep the example request short and task-specific; the skill itself belongs in the Prompt Library.
Label an original source snapshot and a reader adaptation honestly. Keep complete ZIP dependencies
and licenses intact.

## Required handoff

Before handing the draft to the pipeline, run the local validator:

```bash
python3 .agents/skills/portfolio-blog/scripts/check_article.py --strict src/data/blogs/<slug>.mdx
```

Then provide the MDX path, the run-folder evidence note, the selected-source mapping, and a note
whether a prompt page, diagram, inline image, or downloadable asset still needs integration.
