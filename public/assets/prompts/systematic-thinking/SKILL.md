---
name: systematic-thinking
description: Manually invoked (/systematic-thinking) when the user asks me to fix, improve, ideate on, or find a solution for a prompt, skill, instruction, plan, or piece of writing — so I diagnose the real cause and stress-test side effects instead of patching the symptom. Not for code bugs.
disable-model-invocation: true
---

# Systematic Thinking

## Overview

When the user says "make A never happen again," my reflex is to **add a line** — "never do A" — to the prompt or skill. That fixes the one instance, bloats the text, ignores why A happened, and often breaks other cases. Ten such patches and the skill is unmaintainable, and each patch spawns the next.

**Core principle:** *Diagnose the real cause and stress-test the fix's side effects before changing anything.* Don't patch the symptom, and don't release snakes to kill the rats.

This skill is a **procedure I run visibly**. I present the diagnosis and my recommendation; **the user decides** what to apply.

**Scope:** prompts, skills, instructions, plans, writing, process, config. **Not code bugs** — those are out of scope here by the user's choice.

## The Gate

```
NO CHANGE PROPOSED UNTIL I HAVE NAMED THE ROOT CAUSE
   AND TRACED WHAT THE CHANGE DOES TO THE OTHER CASES
```

Stating the fix before naming the cause is a violation of this skill. If I catch myself writing "I'll just add…", I stop and return to step 2.

## Procedure

I run these in order. Steps 2, 4, and 5 are the core and near-always apply. Steps marked *(conditional)* run only when their predicate is true — I skip them out loud, I don't pad.

**1. Frame the ask precisely.**
Separate the **specific symptom** (the one output/behavior that triggered this) from the **general class** the user actually wants changed. Quote the exact instruction or output in play. State which mode I'm in: *fixing* (something misbehaved) or *ideating* (see Ideation Mode below).

**2. Find the root cause — evidence-linked five whys.**
Chain "why did this happen?" from the proximate fault toward the systemic root, in the prompt/plan/writing itself.
- **Localize first.** Name the specific trigger: which instruction or section produced it, and which input/situation set it off. If you can't localize, gather more of the actual output/context before chaining.
- **Cite evidence at each link.** Ground every "why" in something concrete — the exact wording, the offending output, a conflicting line elsewhere, a missing case. If the next why has no evidence, stop and go find it; don't speculate.
- **Rule out alternatives.** For each proposed cause, name the other things that could produce the same symptom and say why the evidence points here, not there.
- **Branch, don't tunnel.** If more than one cause is independently plausible, keep every evidenced pathway as a set rather than forcing a single root.
- **Counterfactual test — per branch and for the set.** Ask "Would removing this cause actually block the failure?", then "Would removing the whole retained set block it?" Keep only causes that pass their own test.
- **Stop criteria.** Stop a branch only when its cause is evidenced, within my control to change, and *recurrence-preventing* — not blame. If a why bottoms out at "the model just did X," that is not a root; ask **why the prompt allowed or invited X**.
- **Name the countermeasure at the root**, framed as *removing the enabling condition*, not just patching the visible symptom.
- **Guard:** for a genuine one-line defect with no systemic enabler, skip the full chain — say so, and a minimal addition may be the right fix (see "Adding a line is sometimes correct"). Don't invent depth without data, and don't end at blame.

**3. Chesterton's Fence — before I touch any existing line.**
For every instruction I'm about to remove or change, I state **why it is there**. Load-bearing lines were usually added after a past failure. I do not delete or weaken a line whose purpose I can't explain — I find out first.

**4. Generate options, subtraction first.**
Pause the add-reflex. In one line, state the goal and the addition I'm tempted to make — then set it aside until I've done the subtraction pass.
- **Subtraction question first:** what could be **removed, tightened, or edited** to reach the goal with *less* surface area? A conflicting line removed usually beats a new line added.
- **Catalog candidates with evidence, not taste:** conflicting, redundant, over-broad, unused, or actively harmful instructions — and say why each qualifies.
- **Irreversibility guard:** classify each removal as easy- vs. hard-to-restore; identify what depends on the line; **refuse to delete an unproven "mystery" line or a load-bearing control** just to cut size — stage or flag it instead (Chesterton's Fence, enforced at the edit).
- **Produce at least two options** — typically (a) edit/remove the conflicting or root-cause line, (b) add a targeted line, (c) restructure — and prefer removing the safest high-value candidate first, checking nothing needed broke.
- **Preference, not a rule:** prefer the smallest change that dissolves the cause. Adding a line is allowed and sometimes correct — it is just not the default I reach for without this pass. **If I add, I record why removal/edit wouldn't do it.**

**5. Second-order check — "and then what?".**
State the change and its intended **first-order effect**, then trace at least two further orders across the **other** inputs and cases, not just the failing one.
- **For each downstream link, note:** what the effect is, who/what responds (other input types, other instructions, the reader), rough **probability** (high/med/low), **timing** (this reply / next time / only at scale), and whether it **feeds back** into the original problem (reinforcing or counteracting). A fix that invites the next patch is a *reinforcing* loop — flag it.
- **Check the known backfire modes:** does the change **over-trigger** on cases it shouldn't, cause **refusals or brusqueness**, add **bloat**, or **conflict** with an existing line?
- **Scale test:** what if this rule fires on *every* input, not just this one? Mark harms that appear only under repetition.
- **Prune and decide:** drop speculative links that don't change the choice (keep probability + timing on the ones you keep — no far-fetched chains). Where second-order harm exceeds first-order gain, **revise the change or attach a guard.** This is the anti-snake step.

**6. *(conditional)* Systems view.**
Run only if the problem **recurs despite past fixes** or **spans several instructions/skills that interact** — otherwise skip.
- **Map the interacting pieces** and how they feed each other; note **reinforcing loops** (each patch spawning the next) and **delays** (a change whose bad effect only shows up later).
- **Name the archetype if one fits** (only with recurrence evidence): *Fixes That Fail* — a quick fix with a delayed worse side effect; *Shifting the Burden* — a workaround that starves the real fix. If none fits, keep the plain map.
- **Separate the proximate symptom from the structural driver** — the wrong goal, a missing piece of information, or two rules pulling against each other.
- **Rank interventions by leverage, then side effects:** changing the *goal/framing* beats changing a *rule*, which beats a *wording/parameter tweak*. Pick the **highest feasible-leverage single intervention** instead of another local patch, and name the signal you'll watch to confirm it worked.

**7. *(conditional)* Pre-mortem.**
Run before committing a change that is **costly to reverse or broad in blast radius** (e.g., editing a shared skill or a system prompt); skip small, cheaply reversible edits.
- **Past-tense frame:** "It's later; the change shipped and made things *worse*. What happened?" Explaining an already-happened failure beats predicting one.
- **Sweep failure reasons broadly before filtering** — wording, interaction with other rules, wrong assumptions, the cases I didn't test. Second pass: **"what did this change most need to be true that wasn't?"**
- **Prioritize** the top few concrete failure paths by likelihood × impact; drop generic ones that don't bind to *this* change.
- **Invert each into a guard:** name the enabling condition, then the concrete check or wording that would have prevented it, and fold it into the change itself. A pre-mortem that changes nothing is theater.

**8. Present for decision.**
I output a visible diagnosis (see Output Contract) with my recommended option and the exact diff, then let the user choose. I do not silently apply the change.

## Output Contract

When I finish, I present, in this order:

1. **Symptom vs. class** — the specific trigger and the general behavior being targeted.
2. **Root cause** — one or two sentences, evidence-linked (from step 2).
3. **Chesterton notes** — why each touched line exists (if any lines are edited/removed).
4. **Options** — add vs. remove/edit vs. restructure, briefly weighed.
5. **Second-order findings** — what my chosen change does to the other cases.
6. **Recommendation + exact change** — my preferred option, why, and the precise diff.
7. **My preference stated plainly**, so the user can compare it to their own instinct — then they decide.

## Adding a Line Is Sometimes Correct

This is a discipline, not a dogma. When the root-cause step shows the cause is a **genuine gap** — the instruction for this case simply doesn't exist and no existing line conflicts — the right fix is to add one clear line. The discipline is only that I **add after diagnosis, not as the reflex before it**.

## Ideation Mode

When invoked to ideate or find a solution (not fix a defect):
- Step 2 becomes **clarify the real goal and constraints** rather than trace a fault (the five-whys questions still help surface hidden assumptions).
- Steps 4, 5, and 7 apply to candidate ideas: prefer the simplest option, trace second-order effects, pre-mortem the leading candidate.
- For **fully greenfield** work with no existing artifact to improve, prefer **`superpowers:brainstorming`** — this skill is sharpest on *corrective and evaluative* thinking.

## Red Flags — STOP and Return to the Gate

- "I'll just add 'never do X'." / "Quick line to handle this case."
- Proposing a fix before I can state the root cause in one sentence.
- Fixing only the one failing instance and calling it done.
- Adding a line without a subtraction pass (step 4).
- Editing or deleting an existing line without saying why it was there (step 3).
- Treating thoroughness as a reason to skip the second-order check — that check is the point.

**All of these mean: stop, name the cause, trace the consequences.**

## Worked Example

**User:** "You apologized three times in that reply. Stop apologizing so much — fix it in your prompt."

- **Symptom vs. class:** the specific triple-apology vs. "over-hedging in general."
- **Root cause (five whys):** Why 3 apologies? → The reply hedged every uncertain claim. → Why? → An existing line says "acknowledge when you might be wrong." → The apologies are that line over-firing, not a missing "don't apologize" line.
- **Chesterton:** that line exists to prevent overconfident wrong answers — load-bearing, don't delete.
- **Options (subtraction first):** (a) *tighten* the existing line to "acknowledge uncertainty once, briefly" — edits the cause; (b) *add* "never apologize" — the reflex; (c) restructure hedging guidance.
- **Second-order:** option (b) "never apologize" over-triggers — it kills genuine error acknowledgment and reads as brusque when the user is actually owed an apology. Option (a) fixes the class without that harm.
- **Recommendation:** (a). Smaller diff, dissolves the cause, no snake released. Here I'd *edit*, not add.
