---
name: distinctive-interface-design
description: >-
  Use when creating or reshaping a product interface with Claude or Codex and the result must feel
  product-specific rather than like a generic AI interface. The skill forces a product brief,
  distinct visual thesis, structurally divergent concepts, deliberate selection, rendered inspection,
  UX and accessibility critique, and revision. It is portable, does not depend on frontend-design,
  and preserves familiar interaction behavior where that improves usability.
---

# Distinctive interface design

Create an interface whose visual identity follows the product's users, content, domain, and behavior.
Preserve clarity, usability, accessibility, responsiveness, trust, and maintainability. Do not treat
"creative," "premium," "modern," "beautiful," "minimal," or "distinctive" as design direction, and
do not invoke `frontend-design` as a prerequisite.

This skill owns visual divergence and rendered verification. Continue to apply the repository's
normal UX, product, accessibility, and implementation rules. When `frontend-ux` is active, use it for
journey and interaction obligations and use this skill for product-specific visual direction and
anti-fixation.

This workflow is a process and evidence upgrade, not a guarantee of more novel pixels. A strong
visual-design guide can produce a similar result, especially when the product brief already implies
a recognizable metaphor. Report that outcome honestly. The claim to test is whether this workflow
increases the number of genuinely different concepts considered and improves product-specific fit
without regressing usability or accessibility.

## 1. Establish the product brief

Inspect the repository, existing product, assets, content, routes, and technical constraints before
proposing visual styling. If a required fact is missing, state the assumption and use the least risky
interpretation.

Record:

- primary users, context, expertise, constraints, and accessibility needs;
- highest-value user jobs and the key flow to optimize;
- domain vocabulary, objects, data, states, and meaningful metaphors;
- emotional or behavioral outcome the product should create;
- brand, legal, technical, content, localization, performance, and responsive constraints;
- interaction invariants that should remain conventional or predictable;
- success criteria for task clarity, accessibility, trust, distinctiveness, coherence, and cost.

List visual defaults to test rather than inherit: generic card grids, dashboard sidebars, hero
gradients, glassmorphism, rounded white cards, default sans-serif typography, purple/blue accent
gradients, excessive pills, decorative blobs, arbitrary asymmetry, stock-dashboard charts, and any
other pattern that the brief does not justify. This list is a test list, not a ban list.

### Product UI hierarchy guardrail

First classify the work as a product interface, menu/catalog, operational tool, or marketing/editorial
page. Product interfaces and menus must open on the object or task people came to use. Do not turn them
into landing pages.

- Do not add a giant greeting, manifesto, poetic slogan, invented weather/date context, or “hero”
  paragraph unless the product brief explicitly requires that content.
- Do not let a display headline consume the first viewport. As a default, keep page titles to a
  restrained scale and keep the primary list, menu, search, form, or action visible without scrolling.
- Put real product content in the first viewport: menu items, records, controls, prices, statuses,
  or the next action. A decorative headline is not product content.
- Never invent a person’s name, mood, time of day, weather, or promotional claim to make a screen feel
  designed. Use supplied content or a plain, useful label.
- Treat a hero as an explicit product requirement, not the default opening composition. If the work is
  a marketing or editorial page, say so in the brief and justify the hero; otherwise omit it.

Before implementation, answer: “What can the user see and do in the first viewport?” If the answer is
mostly a large message, decorative image, or mood-setting copy, reduce the headline and move the real
task or objects upward. Distinctiveness should come from information hierarchy, content framing,
typography in service of scanning, domain-specific states, and meaningful materials—not from scale
alone.

## 2. Define a product-specific direction

Derive a short design thesis that explains why the interface should look and behave this way for this
product. Specify:

- one primary visual idea and two supporting ideas;
- qualities to emphasize and qualities to avoid;
- typography tied to content, reading conditions, and hierarchy;
- layout and composition tied to attention and information structure;
- color, material, imagery, icon, and motion strategies tied to product meaning;
- familiar conventions retained for learnability and elements allowed to be unusual;
- behavior in narrow viewports, themes, zoom, high contrast, keyboard use, reduced motion, empty,
  error, loading, and long-content states.

Give a product reason for every nontrivial visual choice. Reject choices that are only adjectives or
fashion references.

## 3. Generate genuinely different concepts

Run a divergent pass before production UI code. Produce 3–6 concepts. Each must change at least two
structural dimensions such as information architecture, composition, navigation model, density,
typography family, content framing, or interaction model. Five color variants of one layout do not
count.

For each concept provide its thesis, primary flow, information hierarchy, rough layout, type/color/
spacing/shape/imagery/motion decisions, product-specific rationale, rejected defaults, and risks to
usability, accessibility, trust, responsiveness, implementation, and content scalability. Include the
smallest rendered slice that would test it.

At least one concept must use a non-obvious but product-relevant analogy or domain behavior. At least
one must be generated without a supplied visual reference. Treat references as evidence about
specific properties such as composition, rhythm, material, type, motion, or information density;
do not copy their surface style.

When independent tool calls or agents are available, generate concepts independently before
comparing them. Do not let the first concept become the template for the others.

## 4. Select deliberately

Score concepts side by side from 1–5 and explain each score:

- task clarity and learnability: 25%;
- accessibility and input robustness: 20%;
- product-specific fit and meaning: 20%;
- distinctiveness from defaults and from the other concepts: 15%;
- coherence across states and responsive sizes: 10%;
- implementation and maintenance cost: 10%.

Select one concept, or combine only compatible parts. Record rejected concepts and why they lost. Do
not select a concept because it looks most impressive in one hero screenshot.

Run an anti-fixation check before implementation. Describe how the selected concept differs from the
first concept in structure, type, composition, and interaction. If it does not differ, create another
concept family and repeat selection.

## 5. Implement a complete vertical slice

Implement the smallest complete slice that proves the direction: real or representative content,
the primary task, navigation, feedback, and at least one non-happy state. Use a compact token layer
for type, color, spacing, shape, elevation, motion, and breakpoints.

Preserve semantic HTML, accessible names and roles, keyboard operation, focus visibility, visible
status, error recovery, text alternatives, and non-color cues. Do not use motion required to
understand or complete a task. Keep controls and interaction behavior familiar when novelty would
add cognitive cost.

## 6. Inspect the rendered result

Render and inspect the actual application. Capture target desktop and mobile sizes, supported themes,
and reduced motion. Inspect the primary flow plus navigation, loading, empty, error, overflow,
long-content, focus, hover, pressed, disabled, and validation states.

Check the rendered result rather than trusting source code or a textual description. Record concrete
defects with location, observed behavior, likely cause, and severity. If rendering tools are
unavailable, state the limitation and do not claim visual verification.

## 7. Run independent critiques

Keep these passes separate until synthesis:

1. **UX/usability:** task hierarchy, terminology, predictability, consistency, feedback, error
   prevention, recognition versus recall, and user control.
2. **Accessibility:** keyboard path, focus order and visibility, contrast, target size, zoom/reflow,
   semantics, text alternatives, reduced motion, and status announcements. Check WCAG 2.2 AA where
   applicable.
3. **Distinctiveness/coherence:** whether the visual decisions express the product, whether the
   interface remains recognizable without its brand name, whether unrelated screens feel like one
   product, and whether generic AI defaults returned.
4. **Implementation:** component/token reuse, responsive behavior, performance, content scalability,
   and maintenance cost when the change is substantial.

Label each finding blocker, high, medium, low, or accepted tradeoff. Visual novelty never waives an
accessibility or task-critical defect.

## 8. Revise and stop

Fix blockers, accessibility/task failures, hierarchy and comprehension, product-specific visual gaps,
then polish. Re-render affected states and rerun relevant critiques. Stop when acceptance criteria are
met, remaining issues are explicit, and additional novelty would add risk without clear product value.

Report the selected concept, product evidence, distinctive decisions, rejected defaults, rendered
states inspected, critique findings and fixes, assumptions, remaining risks, and comparison with a
baseline when one exists.

Never claim guaranteed originality. Distinctiveness is a testable design hypothesis and must be
checked against comparable outputs as well as usability and accessibility evidence.

## Validation mode

For a consequential or repeated workflow, compare this process with the current baseline on at least
three unrelated product briefs. Keep model, model snapshot, content, tool budget, viewport, and
technical stack constant. Blind reviewers to the workflow condition.

Record, for each condition:

- number of concept families before selection and whether their structure actually differs;
- product-specific fit, intentionality, originality, and cross-brief distinguishability ratings;
- task completion, critical errors, recovery, keyboard path, reflow, contrast, and reduced-motion
  results;
- implementation time, revision count, one-off exceptions, and unresolved defects.

Do not call the treatment better because its prose is more thorough or because one hero screenshot
looks more unusual. If both workflows produce similarly distinctive results, report parity and keep
the simpler workflow for that task. If the treatment increases novelty while harming task success,
accessibility, coherence, or cost, reject the change and revise the direction.
