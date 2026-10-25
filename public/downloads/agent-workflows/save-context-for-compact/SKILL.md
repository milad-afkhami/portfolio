---
name: save-context-for-compact
description: >-
  Do not invoke this on your own. Use it only when the user explicitly invokes
  `save-context-for-compact` by name, asks to run it, or as the first step of the
  explicitly invoked wrapup skill. Never infer it from mentions of saving context, checkpointing,
  persisting knowledge, compacting, or wrapping up. When invoked, persist the
  conversation's durable knowledge into the current project's own docs so it
  survives /compact. Do not read a transcript or suggest a compaction boundary.
---

# Save context for compact

## Why this exists

Long sessions accumulate knowledge that lives only in the chat: decisions and
the reasoning behind them, values and identifiers you looked up, tasks you
finished, tasks still pending, questions you're waiting on, and corrections the
user made. When the conversation is compacted (or a new session starts), a
summary keeps the gist but loses specifics — exact numbers, the *why* behind a
choice, the half-finished task, the thing that was decided and then reversed.

The job of this skill is to move that durable knowledge **out of the transcript
and into the project's own files**, so the work survives compaction.

## Scope: persistence only

The user is about to run `/compact`, which compacts the conversation as a whole.
There is no boundary to pick, so there is nothing to recommend and no reason to
read the transcript tail. Your job starts and ends with getting the durable
knowledge into the docs — do that well and stop. If what the user actually wants
is a "Summarize up to here" boundary recommendation, that's a different job from
this one: say so and let them decide, rather than improvising a boundary mid-run.

Never read or write `MEMORY.md`, and never use a memory directory as a checkpoint
destination. Persist only into the current project's ordinary documentation.

## The one principle: delta, not dump

Do **not** re-summarize the whole conversation into a file. That produces bloated,
duplicated, drifting docs. Instead capture the **delta** — the things that are
true in the conversation but *not yet written down anywhere* — and fix anything
in the docs the conversation has since made stale. A good checkpoint is small:
it adds what's missing and corrects what's wrong.

## Workflow

### 1. Decide what's worth keeping

Sweep the conversation for durable knowledge across these categories — they're a
checklist so no kind of knowledge gets forgotten:

- **Decisions** — what was chosen, and *why* (the rationale is the part a summary
  most often drops and the part hardest to reconstruct later).
- **Facts & data** — values, IDs, numbers, file paths, names, dates, config that
  were established or looked up.
- **Constraints & requirements** — deadlines, limits, rules the work must respect.
- **Tasks** — done, in progress, and explicitly pending / next.
- **Open questions** — unknowns, things to confirm, blockers waiting on someone.
- **Corrections & supersessions** — "X was wrong, it's actually Y"; "we dropped
  approach A for B." These are high value *and* dangerous: the old version often
  still sits in a doc and must be updated or removed, not just appended to.
- **User preferences & conventions** — how the user wants things done, naming,
  style, tools — anything that should shape future work.
- **Discrepancies** — inconsistencies you noticed between sources/files that
  aren't resolved yet.

Skip the ephemeral: transient chatter, intermediate states already superseded,
and anything the reader could re-derive trivially from the code or files.

### 2. Find where knowledge already lives

Adapt to the repository — don't impose a filename. Look at what's already there
and use it:

- Living-state docs: `STATUS.md`, `HANDOFF.md`, `NOTES.md`, `TODO.md`, a
  `docs/` folder, a plan/roadmap file, a `CHANGELOG.md`.
- Orientation docs: `README.md`, `CLAUDE.md` / `AGENTS.md`, an `INDEX`.

Identify the natural home for each piece of the delta (a decision may belong in
the plan; a looked-up value in a data/reference doc; a next-step in the task
list). If the project has a clear "read this first" doc, keep it current.

If **no** suitable place exists, create one handoff doc — named and placed to fit
the repo's conventions (e.g. `STATUS.md` at root, or `docs/HANDOFF.md` if the
project keeps docs in `docs/`). Tell the user what you created and why.

### 3. Write the delta

For each item: is it already captured accurately? Then skip it. Missing? Add it
in its natural home. Present in the docs but now **stale/superseded**? Update or
delete the old version in place — don't leave both the old and new sitting there
contradicting each other.

Rules that keep the docs trustworthy:

- **Verify before you write.** Don't record a file path, value, or decision
  without confirming it's still current — a checkpoint that enshrines a stale
  claim is worse than no checkpoint. If you're unsure, check, or mark it clearly
  as unconfirmed.
- **One fact, one place.** Duplication is how docs drift. Cross-reference instead
  of copying.
- **Absolute dates.** Convert "today", "tomorrow", "last week" to real dates so
  they still mean something after time passes.
- **Dense and scannable.** Short lines, status markers, grouped by category. This
  is a working handoff, not prose.
- **Leave immutable files alone.** Never edit verbatim transcriptions, generated
  files, vendored code, or anything the repo marks as not-to-be-edited.

### 4. Never commit

Write the files and stop there. Do **not** run git, do **not** stage, do **not**
offer to commit — many repos aren't even git repositories, and committing is the
user's call, not this skill's. If the user wants a commit, they'll ask.

### 5. Second pass (do not skip)

Re-read the conversation once more with fresh eyes, asking two questions:

1. **What did I miss?** A decision buried in the middle, a value mentioned once, a
   task quietly dropped, a preference stated in passing.
2. **What did I just write that contradicts another file?** New content that
   conflicts with an existing doc, or two docs that now disagree.

This pass reliably catches things the first pass doesn't — a decision that
silently obsoleted an older file, a date that two documents now report
differently. Fix what it finds. When there's a genuine unresolved contradiction
you can't settle, surface it explicitly as an open question rather than papering
over it.

### 6. Report back

Tell the user, briefly:
- **What was captured and where** (which files got what).
- **Anything flagged** — open questions, unresolved discrepancies, things you
  marked unconfirmed.
- A one-line all-clear to run `/compact`.

**Report the substance, not the process.** The user knows which command they ran,
so explaining what this skill is — that it only persists, that it doesn't pick a
boundary and why — tells them nothing they didn't already know. The same goes for
announcing non-actions: "nothing was committed" reports the absence of a thing
nobody asked for. Both are dead weight, and they show up in every single run. Say
what landed in the files and what still needs attention; that's the whole report.

**If the delta is empty, say so and stop.** Sometimes everything is already
captured — a checkpoint ran recently, or the session just didn't produce durable
knowledge. That's a success, not an invitation to pad: name what you verified in
a line or two and finish. Manufacturing a fuller report to look busy is exactly
the bloat the delta principle exists to prevent.

Keep it short — the value is in the files, not in a long recap.
