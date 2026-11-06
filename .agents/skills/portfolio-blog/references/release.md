# Portfolio production release

This skill is the final gate. A local preview, a successful build, or a prior batch authorization
does not authorize a new production release. Run it only when the user explicitly says to publish,
release, deploy, or ship the named result in the current task.

## Preflight

1. Read the current article, `docs/blog-writing-guide.md`, and the relevant career lifecycle record.
2. Confirm the exact routes, assets, prompt bundles, and compatibility URLs in scope. Keep rejected
   and merely proposed topics out of the release.
3. Check `git status` and the diff. Stop and resolve unexpected or unrelated changes; do not stage
   every untracked file in a portfolio with scratch artifacts.
4. Run the article validator, formatting/lint checks, and the production build. Stop the dev server
   while building because both use `.next`, then restart it for any post-build local checks.
5. Run [the preview phase](../SKILL.md) against the final tree. A broken diagram, missing
   cover, failed copy/download, or overflow is a release failure.

## Publish only the reviewed scope

Use the repository's existing branch, hook, and Vercel workflow. Commit a focused conventional
commit, then push only the explicitly approved branch. Do not force-push, rewrite history, change
branch protection, or publish a package. If the requested release would merge another person's work
or trigger an unknown high-impact side effect, stop and ask before that one-way action.

After the push, verify the deployment status through the available provider check and request each
new production URL. Check the article, listing, Prompt Library page, useful assets/downloads, and
any compatibility URL that was preserved. Record the commit, deployment, status, URLs, and any
follow-up in the canonical lifecycle file and the run checkpoint.

## Report honestly

Say what was built, what was actually observed in production, and what remains uncertain. Never
call a draft published because its route existed on localhost, and never claim an image or download
was reviewed from a tool response without opening the recipient-facing page or file.
