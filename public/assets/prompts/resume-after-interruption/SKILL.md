---
name: resume-after-interruption
description: Use when the user directly invokes $resume-after-interruption as an instruction. Do not trigger from mentions, quotations, questions, negations, interruptions, or ordinary requests to resume or continue.
---

# Resume after interruption

## Invocation gate

Apply this skill only when the user uses `$resume-after-interruption` as a direct instruction to activate it. Merely containing the name does not count. Mentions, quotations, questions about the skill, and negations are not invocations. An interrupted response, unfinished work, or an ordinary request to resume, continue, pick up, or finish does not invoke it.

| User message | Invoke? |
|---|---|
| `$resume-after-interruption` | Yes |
| `Use $resume-after-interruption to finish this task` | Yes |
| `Continue the previous task` | No |
| A new message after an interrupted turn | No |
| `What does $resume-after-interruption do?` | No |
| `Do not use $resume-after-interruption` | No |

**Common mistake:** Treating an interruption or a mention of the skill as an invocation. Only a direct user instruction to activate it is a trigger.

A response cut off mid-work is unfinished by default. Do not assert completion without proving it.

## Contract

Reconstruct → name the exact resume point → finish every remaining part → claim completion only with evidence.

## 1. Reconstruct

- Re-read the original request, the last response, and the last tool results. Identify the exact stopping point and every remaining requirement.
- Check whether the last action landed. Inspect relevant files, `git status`, diffs, recent commits, or external state before acting so work is neither skipped nor repeated.
- Inspect task state and background jobs: plans, TODO or status documents, processes, servers, and commands that may still be running.
- Use the original request as the completion checklist; interruption does not shrink its scope.

Do not read or write `MEMORY.md` or anything in a `memory/` directory.

If the state remains genuinely ambiguous after inspection, ask one specific question instead of guessing or declaring completion.

## 2. Name the resume point

Give a concrete one- or two-line update: what landed, what was in progress, and what remains. Example: `Did A and B; was mid-C; D and E remain.`

## 3. Continue

Do the next unfinished action immediately. Do not restart, re-plan, or re-summarize. Preserve established decisions, values, and file locations; re-read them instead of asking again. Finish every remaining part, not only the last visible action.

## 4. Completion gate

For every part of the original request, cite fresh proof such as a passing command, inspected output, diff, commit, or file location. No evidence for a requirement means the task is not complete; keep working.

Treat these thoughts as warnings to inspect reality and continue: `looks already done`, `nothing seems remaining`, `let me just summarize`, `start over to be safe`, `re-run everything`, or `ask what I was doing`.
