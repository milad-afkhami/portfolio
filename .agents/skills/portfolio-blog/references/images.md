# Portfolio blog images

Use this phase only when the current task authorizes image generation through `$omniroute-api`.
Read the canonical OmniRoute instructions at
`/home/milad/Desktop/projects/agent-toolkit/skills/shared/omniroute-api/SKILL.md` before making a
request. Those instructions own the credential, verified endpoint, request shape, and helper
commands. Never print, copy, commit, or place the token in a prompt, script, log, or client code.

## Create a cover that helps the article

Write a prompt in the article run folder that states the article's central metaphor, the intended
audience, the visual style, the subject placement, and safe space for the site's 16:9 crop. Avoid
text in the image unless the text is essential; generated lettering is often unreliable. Use a
distinct conceptual 3D editorial illustration for each new article. Use Milad's likeness only when
the user explicitly asks for it.

The verified route uses the Responses image-generation tool and the helper from the canonical
OmniRoute skill. Keep the original PNG as the lossless source. For an opaque cover, create a local
JPEG delivery copy with the canonical compression helper. Do not promise requested dimensions:
inspect the actual PNG and JPEG dimensions and byte counts.

Store files at:

```text
public/images/blog/<article-slug>-cover.png  # preserved source
public/images/blog/<article-slug>-cover.jpg  # delivery file referenced by frontmatter
```

If the generated source is square, keep the source square and create a reviewed 16:9 delivery
variant only when needed. Do not rely on a default center crop for faces, hands, or a visual punch
line. Check the actual article and listing crops at 1440px and 390px widths. Keep the original
source in the run folder as well so an art revision can be made without recompressing a JPEG.

## Inspect before handoff

Use the image viewer for the source and delivery images, then use the browser preview for the
article/card crop. Confirm that the subject, metaphor, contrast, and any essential lettering remain
understandable in both views. If the delivery JPEG is larger or visibly worse, keep PNG delivery
and record why. A generated image is not finished because the API returned HTTP 200.

Return the prompt path, source and delivery paths, actual dimensions and sizes, and the crop verdict.
If reference-image editing is needed, stop at the documented capability boundary and adapt the
composition or ask for a verified workflow; do not invent an unsupported OmniRoute request shape.
