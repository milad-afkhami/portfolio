---
name: html-presentation-kit
description: >-
  Build an HTML slide presentation (English LTR or Persian RTL) from a small
  source file. A bundled engine supplies keyboard shortcuts, fragments,
  overview, presenter view, fit-to-window scaling, embedded fonts and icons, Tailwind,
  and print CSS that exports one slide per 16:9 PDF page. Manual invocation
  only: use when the user explicitly invokes /html-presentation-kit or
  $html-presentation-kit, or asks by name to use the presentation kit. Do not
  auto-trigger it just because someone mentions slides or a talk.
disable-model-invocation: true
---

# HTML Presentation Kit

You write only the part of a deck that is specific to it: a config block, a theme, and the slides. `scripts/build.py` wraps that source with everything else — runtime, engine CSS, Tailwind, fonts, icons — and produces one self-contained `.html` file (and a PDF). Never hand-write the runtime, the shortcuts or the print CSS, and never copy the engine into a deck. If the engine lacks something, fix it in the kit.

Paths below are relative to this skill's directory. Resolve it once (for example `KIT=<dir containing this SKILL.md>`) and call `python3 "$KIT/scripts/build.py"`.

## Workflow

1. **Pin down the brief.** Topic, audience, language (`en` or `fa`), rough length, and the content itself. If the user gave you the material, use it and don't ask again. If something essential is missing (who is this for, what should they walk away with), ask in plain text with two example answers per question.

2. **Outline in chat before building.** Unless the user handed you final slide-by-slide content or told you to just build it, write the deck out as a plain outline first: one short block per slide with the real headline and the actual copy, not labels. Get a yes, then build. A text outline is cheap to change; a rendered deck is not.

3. **Design with the frontend-design skill.** Invoke it before writing any theme: on Claude Code, `/frontend-design:frontend-design` via the Skill tool; on Codex, `$frontend-design`. Feed it the brief and these constraints, and let it produce the token plan (palette, type roles, layout idea, one signature element):
   - The canvas is a fixed 1280×720 slide, not a scrolling web page, and it has to look right printed.
   - Palette → the seven `--deck-*` color tokens (see reference). Check text contrast on both `--deck-bg` and `--deck-surface`.
   - Fonts: **English decks** use the bundled Latin faces — Nunito (default body), Lexend, Lora — with JetBrains Mono for code. Another open-licensed face is fine if the design calls for it: download its woff2 next to the source and declare it in `extraFonts`. **Persian decks use Vazirmatn** for all text; icon glyphs use the bundled icon fonts. Don't add a second Latin font for English words inside Persian text.
   - Spend the boldness in one place: one signature treatment repeated across the deck, not a new idea on every slide.
   - Icons: use the bundled **Phosphor Icons** fonts for common symbols. Choose icons that clarify the content, with a consistent style (regular, bold, fill, or duotone; thin/light also available). See **Icons** in `reference.md` for markup and local name lookup; no CDN or setup is needed.

4. **Write the source**: `<name>.slides.html` in the user's working directory (or wherever they asked). Start from `examples/example-en.slides.html` or `examples/example-fa.slides.html`, and read `reference.md` for the config keys, primitives, tokens and rules. Keep the source readable: one `<section class="slide">` per slide, speaker notes in `<aside class="notes">` wherever they help.

5. **Build and check**:
   ```bash
   python3 "$KIT/scripts/build.py" talk.slides.html --check --png <scratch-dir>/pages
   ```
   This writes `talk.html` and `talk.pdf` next to the source. It reports three kinds of problem:
   - content that spills off the slide, gets clipped in its box, or runs into the slide number or footer;
   - fonts that failed to load;
   - a PDF that doesn't have exactly one 960×540 pt page per slide.

   Into the `--png` folder it writes one PNG per page plus `talk-sheet.png`, a contact sheet with every page on one image. A non-zero exit means something needs fixing. Fix it in the source and rebuild. Pages are 960×540 at the default `--dpi 72`; rebuild with `--dpi 144` when you need to zoom into a page, for example to check Persian bidi.

6. **Look at it.** Open the contact sheet with your image viewer, then zoom into any page that looks off. `--check` catches overflow, not ugliness. Look for:
   - cramped or empty slides;
   - weak contrast;
   - headings that wrap badly;
   - in Persian decks, English words or numbers landing on the wrong side of punctuation.

   If a browser tool is available (Playwright, chrome-bridge), also exercise the live deck once: arrows, fragments, `O`, `?`. Some tools block `file://`; serve the folder with `python3 -m http.server` if so.

7. **Hand over** the `.html` and `.pdf` paths. Tell the user the presenting keys in one line (`?` shows them all, `S` opens presenter view) and that Ctrl+P in Chrome prints the same one-page-per-slide PDF.

When the user asks for changes, edit the `.slides.html` source and rebuild. Never edit the generated `.html`: the next build overwrites it.

## Rules that keep decks from breaking

- **The slide is 1280×720 px.** Size everything in px (or `em`/`rem`). Never use `vw`/`vh`/`%`-of-viewport units or Tailwind responsive prefixes (`sm:`, `md:`, `lg:` …) inside slides. They respond to the browser window, not the slide, so the deck would look different on screen, on a phone and in the PDF.
- **No `position: fixed` inside slides**, and nothing that relies on scrolling. Content that doesn't fit gets cut off, so split the slide instead of shrinking the text below ~20px.
- **Density:** one idea per slide, about 6 lines of body text at most. The headline states the point; it isn't a label for the topic.
- **Assets:** local images (`<img src="img/x.png">`, CSS `url(...)`) are inlined as data URIs at build time. Remote URLs are not, so they break offline and may be missing from the PDF. Download them first.
- **Icons:** prefer the bundled library over drawing common symbols from scratch with SVG or omitting a useful icon because sourcing one is tedious. Use custom SVG for actual diagrams, bespoke artwork, or a symbol the library lacks. Verify icon names against the bundled CSS; don't invent them. The build embeds the icon font automatically for the `ph` / `ph-*` style classes used in the source, including in Persian decks; Vazirmatn remains the text font.
- **Cascade:** the deck's own `<style>` is unlayered, so its rules beat both the kit's primitives and Tailwind utilities. That is fine for tokens and one-off classes. If you want Tailwind classes to be able to override a deck class, put the class in `@layer components { … }`.
- **Class names:** the kit's primitives are listed in `reference.md`. Don't invent classes that shadow Tailwind utilities (`ring`, `shadow`, `border`, `outline`, `blur`, `invert`, `hidden`, `container`, `columns` …; `table` is fine, it is the kit's own primitive), because the utility applies too. The build warns when it spots one.

## Persian (RTL) decks

Only the slide content is Persian. As in PowerPoint, the presenting tool stays English and LTR in every deck: help, presenter view, overview, counter, progress bar, slide numbers (Latin digits, bottom right) and the navigation keys (→ is always next). Don't try to localize or mirror any of it.

Set `"lang": "fa"` in the config. The build then sets the slide content to `dir="rtl"`, switches it to Vazirmatn, and runs an **automatic bidi pass**:
- Latin runs inside Persian text (e.g. `Next.js`, `C++`, `React (v18)`, `Tailwind CSS`) are wrapped in `<bdi>`, so trailing punctuation and brackets stay on the correct side.
- Space-separated digit groups (phone numbers) are pinned left-to-right, so `۰۹۳۹ ۲۸۴ ۰۷۴۹` doesn't come out with its groups reversed.
- Signed numbers (`+۲۲٪`, `-38%`) are pinned left-to-right, so the sign stays in front of the number.
- Short runs (up to about 28 characters) are kept from breaking across lines.

The pass skips `code`, `pre`, `kbd`, and anything carrying a `dir` attribute or the class `no-bidi`. So write mixed Persian and English inline, naturally. Only step in when:
- **A whole line or block is English** (a quote, an email address on its own line): give its element `dir="ltr"`.
- **An inline span mixes scripts in a way the pass can't guess**, e.g. an English phrase with Persian inside it: wrap it yourself in `<bdi>` or `<span dir="ltr">`.

Also for RTL:
- **Use logical direction only.** Engine CSS already does. In your theme and Tailwind classes use `ms-/me-/ps-/pe-/start-/end-/text-start/text-end/border-s/border-e`, never `ml-/mr-/pl-/pr-/left-/right-/text-left/text-right`.
- **No letter-spacing on Persian text.** It breaks the letter joins. The engine forces it to 0 in RTL decks, so don't fight it with `tracking-*`.
- **Write proper Persian.** Use the zero-width non-joiner (نیم‌فاصله, U+200C) in words like `می‌شود`, `پیشنهاد‌ها` and `ارائه‌ی`; Persian punctuation `،` `؛` `؟`; and Persian `ی`/`ک` rather than the Arabic `ي`/`ك`. Digits are rendered exactly as you type them, so pick one style (Persian `۱۲۳` or Latin `123`) and stay consistent within a deck.
- **Give Latin filenames** to the output (`proposal-acme.pdf`); Persian filenames get mangled in messengers and email.

## Printing and PDF

`build.py --pdf` (implied by `--png`) prints through headless Chrome, which honors `@page { size: 1280px 720px }`. Playwright's `save_as_pdf` ignores that page size and adds white bands, so don't use it. In a normal browser, Chrome's Ctrl+P → "Save as PDF" gives the same output, with fragments expanded and the on-screen controls hidden. Firefox handles custom page sizes poorly and isn't supported for printing.
