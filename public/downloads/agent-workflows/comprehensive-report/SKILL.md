---
name: comprehensive-report
description: >-
  Do NOT invoke this on your own. It may run in EXACTLY two situations and no
  others: (1) the user explicitly types /comprehensive-report or asks by name to
  "run the comprehensive-report skill", or (2) as step 3 of the /wrapup chain
  (invoked by the wrapup skill). In every other case do nothing — never
  auto-trigger it because the user asks for a report, summary, status, progress,
  recap, or handoff, or mentions compacting, summarizing, or wrapping up; answer
  normally and let the user decide whether to invoke it. When it does run, it
  produces an in-chat report (progress + current state + next steps) focused on
  the live working thread so a fresh context can resume after a compact, ending
  with a "WE SHOULD RESUME HERE:" anchor. In-chat reply plus a temporary file
  containing the same report beneath a post-compaction note; for persistence
  into project docs use save-context-for-compact.
---

# Comprehensive Report

Reply **directly in the chat** (also save a verbatim copy in a temporary file). Write a working handoff, not an
executive summary: assume the next assistant has this report but not the conversation.
It should be able to tell what happened, why, what is true now, and exactly where to
resume. Do not rely on project docs or a previous wrapup step to supply missing context.

**Detailed and comprehensive is the default**, both when invoked directly and through
`/wrapup`; the user does not need to request extra detail. Prefer preserving relevant
context over brevity. A general preference for concise replies must not reduce this
handoff to a status summary. Follow an explicit request to shorten this particular
report, while still preserving the information needed to resume safely.

## Prepare for coverage

Before drafting, review the available conversation, including any supplied compaction
summary, and build an internal inventory of the substantive workstreams, user requests
and corrections, decisions and their reasons, artifacts, verification, and unresolved
or parked work. Cover earlier relevant work as well as the latest action. Do not scope
the report only to the last exchange, the final implementation, or the files committed.

Use that inventory to draft the report below. Preserve conclusions from investigation
and discussion even when they produced no code. Carry forward still-relevant context
from before an earlier compaction when it is available. If context or evidence is
missing, name the gap and how to recover it; do not invent details or imply that the
report covers unavailable history.

For a substantial thread, use this structure and include only sections with relevant
content:

## Live thread — where we are right now

Lead with the latest substantive action and its result. State whether work is complete,
in progress, blocked, or awaiting a user decision. Name any half-finished action or
verification. If `/wrapup` invoked this report, include the commit/push result and the
working-tree state, distinguishing unrelated changes from this thread's work.

## Objective and constraints

State the user's intended outcome, agreed scope, and what counts as done. Preserve
task-specific preferences, constraints, and corrections that affect how work should
continue, including changes to the original request.

## Progress — what happened and why

Cover each meaningful workstream with the outcome, the decision or correction that led
to it, and the concrete artifact or environment affected. Include alternatives that
were explicitly rejected or deferred when their rationale matters for future work.
For each workstream, make its status clear: completed, partial, blocked, or parked.
Retain failed approaches and their causes when forgetting them would lead to repeated
work; summarize their lesson rather than replaying every attempt.

## Current state — evidence and details to keep

Give the exact identifiers a future assistant would need: relevant file paths, branches,
commits, MRs/PRs, deployments, issue links, configuration values, or commands. Report
verification with the actual checks and results, and distinguish observed facts from
assumptions. Preserve non-obvious gotchas, user corrections, and conventions that would
prevent repeated mistakes. Include relevant failures, checks not yet run, and limits
of successful checks. Omit secrets and repetitive raw output; retain exact details
whose absence would force the next assistant to repeat investigation or ask the user.

## Documents to read before resuming

Classify the documents mentioned in the report by their role in continuing the work:

- **Required reading — read in full before resuming work:** list the current plan
  and progress/status documents for the active work, plus any specification or
  decision document whose requirements govern the next action. Give each document's
  exact path or URL, why it is required, and the reading order when it matters.
- **Reference material — consult when needed:** list lookup guides, background
  material, historical or superseded plans, and other documents mentioned only to
  show where information lives. Explain when each is useful; mentioning a document
  does not by itself make it required reading.

Include an explicit instruction to read every required document in full before
resuming substantive work; excerpts, search hits, and this report's summary do not
replace that reading. This requirement applies to the listed documents, not
recursively to every link inside them. If a required document cannot be read, surface
the gap before taking an action that depends on it. Identify required reading from
the actual task and current documents, not filenames alone. If none is required,
say so without inventing documents or turning reference material into prerequisites.

## Next steps

List required actions in order, with the first action concrete enough to perform.
Separate optional or explicitly parked work from required work. Identify any dependency
or decision waiting on the user. If nothing is pending, say so; do not invent a task.

Scale the detail to the work, not to a word quota. A multi-step project needs more than
a few status sentences; a tiny completed task does not need padded headings. Before
sending, check the draft against the coverage inventory: every substantive item must
be represented, or deliberately omitted because it no longer affects continuation.
Check especially for earlier workstreams, user corrections, decision rationale,
unfinished actions, and parked requests. Then check whether a reader with no transcript
can locate the work, understand the decisions and verification, and take the next action
without asking for a recap. Fill omissions before delivering; links to files or project
docs supplement the report, but do not replace the relevant explanation in it.

End with a single anchor line addressed to your future self:

`WE SHOULD RESUME HERE: <the exact next action, or "Nothing pending; await a new task" if complete>`

## Deliver the report

Draft the complete report once, including the anchor line. Pass that exact text on
stdin to [`scripts/write_handoff.py`](scripts/write_handoff.py), using a quoted
here-document or another method that does not expand shell syntax in the report.
The script creates a private, uniquely named file under `/tmp`. It contains a
short note addressed to the agent after compaction, followed by the report text
unchanged. The note instructs the next agent to read the report's required documents
in full before resuming substantive work, while consulting reference material only
as needed. Read it back and check that its report portion matches the draft.
Fix any mismatch before presenting a path.

In the user-facing reply, show the **entire report first**, then give the file's
absolute path. The user will compact the chat and provide that path to the agent
later; do not compact the chat or load the file into another conversation yourself.
