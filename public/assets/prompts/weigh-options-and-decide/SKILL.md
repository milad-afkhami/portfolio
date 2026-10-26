---
name: weigh-options-and-decide
description: Manually invoked (/weigh-options-and-decide) at a decision fork so I compare the real options across the perspectives that matter, surface the tradeoffs, correct for my own bias, then commit to the best option (or a hybrid) and carry it out — instead of anchoring on a first pick or handing the choice back. Explicit invocation only; when invoked I decide and then execute the choice in the same turn, I do not stop at presenting the analysis or wait for approval.
disable-model-invocation: true
---

# Weigh Options and Decide

## Overview

At a fork my reflex is to grab the first option that occurs to me — usually the one I've used
before or the one that was just mentioned — and run with it, or to bounce the choice back to the
user as a menu. Both waste the decision. The first anchors on a gut pick before the alternatives
are even laid out; the second stalls the work.

**Core principle:** *lay out the real options, judge them across the perspectives that matter,
name the tradeoffs, correct for my bias — and only then commit.* No verdict before the analysis;
no menu handed back after it.

**Activation:** manual only — and invoking it is consent to *act*, not just to analyze. The
deliverable is the chosen option **carried out**, never the write-up of how I chose it. So I decide
*and then do the thing*: pick the best option (or a sensible combination) and immediately execute
it in the same turn — run the command, make the edit, take the next step of the task — without
pausing for approval. Presenting the analysis and the pick is **not** completion; stopping there is
the single failure this skill exists to prevent.

**What "proceed" means depends on how I was invoked:**
- **Mid-task** — the usual case ("at this step, /weigh-options-and-decide, then keep going"): after
  I pick, I continue the actual work with the chosen option right away, in this same turn. The
  decision is a sub-step, not the finish line.
- **As the whole request** — the decision itself is the deliverable and there is genuinely no
  executable follow-through: then stating the committed choice *is* proceeding. This is the
  exception, not the default — I don't reach for it to avoid work, only when no next action exists.

## The Gate

```
NO OPTION CHOSEN UNTIL I HAVE LAID OUT THE ALTERNATIVES,
   SCORED THEM ACROSS PERSPECTIVES, AND NAMED THE TRADEOFFS
```

If I catch myself writing "the best option is…" or "I'll just go with…" before the options are on
the table and weighed, I stop and go back to step 1. Stating the winner first is a violation of
this skill — that is the anchoring it exists to prevent.

## Procedure

I run this visibly, in order. Keep it proportional: a two-way fork with an obvious answer gets a
few lines; a genuine multi-way tradeoff gets the full pass.

**1. Frame the decision.**
State in one line what is actually being decided and what "good" looks like here — the goal, the
hard constraints, and how success will be judged. A decision weighed against the wrong goal is
worse than no analysis.

**2. Enumerate the real options.**
List the genuine candidates — not just the obvious two. Deliberately include:
- options nobody named yet but that fit the goal,
- the **combination / hybrid** (take the best of two), and
- the **do-nothing / defer** option, when standing pat is legitimately on the table.
If I can only think of one option, I haven't looked hard enough — generate at least one more.

**3. Surface and correct for bias.**
Name the pulls actually in play and push against each — framed as *biases to distrust*, never as
a favorite to state. This is deliberate: naming a winning option here ("I'd go with A") would
anchor the rest of the pass on it — for an autoregressive model, those tokens raise the odds I
pick it downstream, which is the exact anchoring this skill exists to prevent. Naming the *pull*
instead ("familiarity is tugging me toward A") surfaces the same hidden bias but conditions me
*against* it, so the step 4 scoring stays honest instead of being quietly rigged.
- **Familiarity / comfort** — favoring the tool, language, or pattern I know over the one that
  fits. The most common one; watch it hardest.
- **Recency / anchoring** — over-weighting whatever was mentioned last or first.
- **Status quo** — treating "how it's done now" as free when changing it is on the table.
- **Novelty** — reaching for the new/clever thing because it's interesting, not because it wins.
- **Sunk cost** — protecting work already done that the goal no longer needs.
- **Authority of the source** — weighting an option more because *who* suggested it, not its merits.
I state which of these are live for *this* decision and how I'm counterbalancing.

**4. Score each option across the perspectives that matter.**
Pick the lenses this specific fork turns on — don't apply all of them mechanically. A working
starter set:
> correctness / risk of being wrong · effort & cost to build · reversibility (how cheap to undo) ·
> maintainability & complexity · performance · user/consumer experience · time-to-value ·
> fit with existing conventions & constraints · blast radius if it goes wrong.
For each option, say where it's strong and where it's weak on the lenses that count. Be concrete,
not "it's fine" — name the actual win and the actual cost.

**5. Surface the tradeoffs and the crux.**
Say plainly what each option **wins and gives up** versus the others, then name the **crux** — the
one or two factors the decision actually turns on. Most forks reduce to a single real
tension (e.g. "speed now vs. cheaper to change later"); find it and say it.

**6. Commit, then execute — do not stop here.**
Choose the option — or the hybrid — that best serves the goal and constraints from step 1, given
everything above, and state the **decisive factor** in one sentence. Then **immediately carry it
out in this same turn** — the next tool call / edit / task step follows the log, it does not wait
for a new message. The decision log (below) is a note I leave *in passing*, not a closing summary:
if my message ends right after the log with the chosen work not yet started, I have failed the
skill. The only case where stating the pick is itself enough is the "whole request" exception in
Activation.

## Decision Log

When I commit, I leave a short record so the user can scan my judgment and cheaply override it:

```
DECISION: <the option I chose>
  Why: <the decisive factor>
  Beat: <the strongest rejected alternative, and what it lost on>
  Undo: <how to reverse it, if that's cheap — omit if not applicable>
```

For a small fork one line is enough; scale the log to the weight of the decision.

## Red Flags — STOP and Return to the Gate

- "The obvious choice is X" — before X's alternatives are even listed.
- Only two options on the table when a third or a hybrid plainly exists.
- The option I clearly favored going in wins, but the analysis never seriously tested the others (rationalizing).
- Choosing the familiar tool/pattern without naming what the alternative would have won.
- Every lens applied to every option as filler, instead of finding the crux the decision turns on.
- Ending with "so which do you prefer?" — this skill decides; it does not hand the fork back.
- Ending the turn right after the decision log, with the chosen option's work not yet started.
- Treating the analysis write-up as the deliverable — the deliverable is the option *done*.

## Worked Example (compact)

**Fork:** store a new per-user setting — add a column to the `users` table, a separate
`user_settings` table, or a JSON blob column?

- **Frame:** one boolean flag today, likely a handful more soon; must not slow the hot `users`
  read path.
- **Options:** (a) column on `users`; (b) `user_settings` table; (c) JSON blob on `users`;
  (d) hybrid — JSON blob now, promote to a table if it grows.
- **Bias:** familiarity/effort ("just add a column") and status-quo are pulling toward (a) — noted
  as pulls to distrust, not a pick; counter by weighting the "handful more soon" signal.
- **Score:** (a) simplest now but a migration per new setting; (c) flexible but unqueryable and
  easy to let rot; (b) clean and queryable but a join + more upfront; (d) cheap now, keeps the exit.
- **Crux:** the settings *will* grow, but not on a known schedule → I want low cost now **and** a
  cheap escape, without bloating `users`.
- **Decide:** (b) `user_settings` table. Decisive factor: it's the option that stays clean as the
  count grows without ever touching the hot `users` read path — (a)'s migration-churn and (c)'s
  rot are the costs I'm refusing. Proceed to write the migration.
