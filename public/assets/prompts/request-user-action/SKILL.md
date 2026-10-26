---
name: request-user-action
description: >-
  Pause an in-progress task for a concrete manual user action by showing an audible desktop dialog
  with completion and cancellation buttons, then resume from the response. Use when work is actively
  blocked on something only the user can do outside chat, such as solving a CAPTCHA, approving a
  device prompt, signing in, reconnecting hardware, or checking a physical result. Do not use for
  ordinary questions, choices, permission requests, or status updates.
---

# Request a manual user action

Use this handoff only after reaching a real manual-action boundary. The dialog is meant to release
the agent's turn while keeping the task resumable; it is not a substitute for asking the user a
question in chat.

## Handoff workflow

1. Tell the user briefly what needs doing, where to do it, and why the task is paused.
2. Resolve `scripts/request-user-action.sh` relative to this `SKILL.md` and invoke it through the
   host's shell tool. Pass a short title and self-contained instructions. The helper plays an
   attention sound, then waits in a desktop dialog without repeatedly notifying the user.
3. Let the shell call yield or run as a tracked background session if the host supports that. Keep
   the process observable so its completion resumes the agent; do not detach it with `nohup` or an
   untracked bare `&`.
4. Interpret the result and continue:

   - Exit `0`, stdout `COMPLETED`: re-check the external state before claiming success, then resume.
   - Exit `2`, stdout `CANCELLED`: stop waiting and explain what remains blocked.
   - Exit `10`, stdout beginning `ALTERNATE:`: perform the named alternate action if it is safe and
     already in scope, then show the dialog again if the original manual action is still required.
   - Exit `3` or `64`: the dialog could not be shown or the invocation was invalid. Ask in chat for
     the same action and tell the user to reply when done. Do not retry the desktop alert in a loop.

The normal invocation is:

```bash
bash /absolute/path/to/request-user-action/scripts/request-user-action.sh \
  --title "Action needed" \
  --message "Complete the required action, then return here." \
  --done-label "Completed" \
  --cancel-label "Can't complete"
```

Use `--extra-label "Open target"` only when the caller has a meaningful alternate action to handle.
The helper reports that choice; it does not execute commands or open resources itself.

## Boundaries

- Make the message specific enough that the user does not need to return to chat to understand it.
- One notification is enough. Do not add polling alerts, recurring sounds, or automatic timeouts.
- A click on the completion button is a signal to verify and continue, not proof that the external
  action succeeded.
- The click does not authorize unrelated work, destructive actions, purchases, submissions, or
  other consequential mutations.
- Never put secrets, tokens, or sensitive page contents in the dialog title or message.
