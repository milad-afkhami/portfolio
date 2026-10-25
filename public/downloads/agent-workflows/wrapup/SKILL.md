---
name: wrapup
description: >-
  Manual invocation ONLY — run this exclusively when the user explicitly invokes `/wrapup`
  or asks by name to "run the wrapup skill". Do NOT auto-trigger it, and do NOT infer it from
  the user merely mentioning saving context, committing, pushing, compacting, wrapping up,
  checkpointing, or writing a report. A session wrap-up chain that, in this exact order,
  (1) runs the save-context-for-compact skill, (2) commits this session's changes and pushes,
  (3) runs the comprehensive-report skill.
---

# Wrapup

Do these in order. Finish each before starting the next.

1. Read the sibling [`save-context-for-compact`](../save-context-for-compact/SKILL.md) skill and follow it. Do not do this step from memory.
2. Commit this session's changes and push.
3. Read the sibling [`comprehensive-report`](../comprehensive-report/SKILL.md) skill and follow it. Do not do this step from memory. Use its detailed, comprehensive default and complete its coverage check; the user does not need to ask for extra detail. Cover all substantive work in the live thread, including relevant earlier decisions and unfinished work, not just the commit/push result. Completing step 1 does not reduce the detail required here.
