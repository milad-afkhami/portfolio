# Portfolio writing guide

Read this file before writing or revising a portfolio article. It contains Milad's editorial decisions. Article selection and current progress live in the career workspace's `research/portfolio-blogs.yml`; this guide is not a second status tracker.

## Choose only selected topics

Write from the selected article queue. An agent's suggested topic is not a user selection. Record its origin separately and wait for selection before writing it. A request for the next batch does not permit silently filling the batch with unselected ideas. If the selected queue cannot fill the requested number, state that gap and ask about additional topics.

Preserve rejected topics in the research catalogue for history, but remove their article routes and unused assets from the review batch. Do not reintroduce a rejected idea under a different title. A request to consider a project article permits researching and proposing it; it does not make an unreviewed topic selected for a full article.

## Explain the subject in ordinary language

These are knowledge-sharing blog posts, not instructions to an employee or policy documents for an agent. Start with the useful idea, a concrete example, or a real problem. Explain how it works and why it matters.

Use first person for an actual author experience or a meaningful personal view. Do not repeat “I want,” “I would,” or “I expect” as the frame for every paragraph. Avoid manufacturing personal stories to make prose sound human. Keep hypothetical examples clearly hypothetical without repeating the same disclaimer throughout the post.

Prefer names the reader understands: “example request,” “example comparison,” “what the program should do,” and “what the check showed.” Do not dress these up as “bounded invocation,” “illustrative decision record,” or other internal process terms. Keep necessary technical terms and explain them when they matter.

Keep the article's real point in view. For `weigh-options-and-decide`, that point is comparing real alternatives across the relevant considerations before recommending a choice, rather than listing options and guessing a favorite. Following through is part of the skill, but it should not crowd out the comparison. For `request-user-action`, the point is letting a long-running agent ask for a needed manual action and resume, instead of abandoning the task or wasting time trying to work around the missing action.

## Use the length the idea needs

There is no target word count or minimum number of sections. Develop the point completely, then stop. Remove repeated caveats, repeated conclusions, generic advice and side topics that do not help the reader understand the main idea. Some articles need a detailed walkthrough; others are complete in a few clear sections.

Keep citations and meaningful evidence limits when trimming. Do not turn an association into a causal claim or a proposed method into a completed experiment. A single well-placed qualification is usually better than repeating it in every section.

## Consider diagrams deliberately

During outlining, ask whether a diagram would make a relationship, sequence, decision, architecture or change easier to understand. Remember Mermaid; do not omit it merely because prose is easier to generate. Choose freely, with no per-article quota. Several articles in a batch may benefit; others may need no diagram.

Choose the format for the explanation: flowcharts for decisions/processes, sequence diagrams for interactions, state diagrams for changing states, mind maps for a useful hierarchy, and other supported Mermaid formats when appropriate. Avoid turning every explanation into the same flowchart. Diagrams should add understanding rather than repeat an adjacent list.

Use standard `mermaid` fences with the existing hand-drawn Warm paper renderer and peach `#f6be89`. Preserve its single palette. Inspect labels and the actual rendering at desktop and mobile widths; source syntax alone is insufficient.

Continue to number article H2 and H3 headings. Use lists, tables, code and emphasis for meaning, not to meet a formatting quota.

## Put reusable prompts in the Prompt Library

The Prompt Library is the main place to read/copy a reusable prompt and download it as a skill. Tool articles explain its purpose, use, limits and examples, then link to the relevant prompt page. The prompt page links back to the article.

Keep complete source and required files available. A skill needing scripts or sibling skills needs a complete ZIP with the relative paths intact. Label an original source snapshot and a reader adaptation honestly. Do not silently change the author's canonical skill while preparing a blog download.

An example request should contain the task-specific brief, not repeat the skill's own instructions. For the presentation kit, the audience, subject and desired outcome can be a few lines. Design/build/export/checking behavior belongs in the skill. If a real gap is found there, propose or make the explicitly authorized source change at its canonical toolkit location, then refresh the downloadable copy.

Do not add a worksheet or a tiny Markdown download merely to make the article look practical. Keep a file only if readers gain something useful to run, edit, present or install that is awkward to supply directly in the article. A short comparison or competence list belongs in the post.

## Use public names for public assets

- Article-specific files: `public/assets/blog/<article-slug>/`, available at `/assets/blog/<article-slug>/`.
- Reusable prompt/skill files: `public/assets/prompts/<skill-slug>/`, available at `/assets/prompts/<skill-slug>/`.
- Existing article/card cover images keep the established `/images/blog/<article-slug>-cover.jpg` convention and 16:9 presentation.

Never expose research IDs such as `B07` or `I039` in public asset URLs. Keep only files the article or prompt page actually needs. Put supporting runtime files inside a complete downloadable bundle when they do not need separate public URLs. Preserve already published download URLs as compatibility copies where removing them would break readers' links; new material uses the paths above.

## Show an example worth looking at

A presentation article needs an attractive, substantive presentation, not a slide-engine primitive catalogue. Use real content that teaches or tells a coherent story. The editable source, live deck and PDF should agree. Inspect every exported slide and the article's previews. Name a constructed example honestly and do not invent a client engagement or performance result.

Keep useful conceptual 3D cover art distinct across articles. Milad's figure or likeness appears only on explicit request. Preserve PNG sources and inspect compressed delivery images and the actual crop. For review in Ghostty, present verified local browser pages; do not claim a tool image was visible to the user.

## Verify and keep one current checkpoint

Check the actual article, prompt page, downloads, copy controls, links and diagrams at desktop and mobile sizes. Preserve exact source bytes in copy/download references; use literal `text` fences when formatting Markdown source would alter it. Keep native figure/image markup for inline article images where the shared MDX wrapper would produce invalid HTML. Stop the owned dev server during a production build because it shares `.next`.

Update the canonical lifecycle at meaningful milestones, with the actual remaining work and next action. Do not overwrite current state with historical scratch generators. Local review permission is separate from publication permission. Keep app contracts and unrelated content unchanged.
