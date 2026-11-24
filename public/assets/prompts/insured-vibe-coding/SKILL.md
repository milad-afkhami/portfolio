---
name: insured-vibe-coding
description: >-
  Feature-build loop for from-scratch projects that keeps you on-track and self-correcting:
  maintain a current-state kanban so no session loses the thread, build phase by phase,
  write tests, then verify the user experience and run planned real-app QA.
---

# Insured Vibe Coding

A loop for building features on a from-scratch project **without losing the thread**
and **without the user having to police your work**. The name is the point: tests
and planned QA are the *insurance* on vibe coding — the mechanism by which **you find
your own mistakes before the user does**, so they don't have to sit over your shoulder
telling you what you broke.

This skill is only the *process*. It assumes a **spec/PRD already exists** for the
work — you are not writing one here. It deliberately does **not** repeat what other
skills already own: architecture and library choices, the testing philosophy (the
**`testing-philosophy`** skill — confidence over coverage), PRD authoring, "how it was
built" / decision write-ups, or basic hygiene
(verify-before-commit, green bar, small commits, style). Lean on those where relevant.
Here, your job is to run the on-track, self-verifying loop. Product UX is part of
that verification: a working implementation can still fail the person's task.

## Lean on your other skills — invoke them yourself

Running this loop *is* your standing instruction to reach for the right specialized
skills on your own. Don't wait for the user to name them; the whole point is that they
shouldn't have to.

- **Invoke the superpowers plugin skills yourself** as the work calls for them, rather
  than waiting to be asked:
  - **`writing-plans`** to turn the existing spec into an implementation plan before you
    build a phase — this is the normal pre-build step, since the PRD already exists.
  - **`brainstorming`** only when a *phase* has a genuine design question the PRD
    leaves open (two viable approaches, an unspecified interaction). Brainstorm *that*
    gap — don't re-open a settled spec as a blanket step.
  - **`test-driven-development`** while you build, and **`systematic-debugging`** the
    moment something misbehaves.
- **For deciding *what* to test and *why*, follow the `testing-philosophy` skill** —
  confidence over coverage. It owns the test-intent standard this loop leans on; invoke
  it whenever you're choosing which cases to write or judging whether a test earns its keep.
- **For UI or a changed user-facing flow, apply
  [`frontend-ux`](../frontend-ux/SKILL.md) automatically.** It owns task design,
  understandable copy, rendered craft and actual shared/exported outcomes. Use it
  inside this loop, with this phase's existing plan and QA ledger; do not start a
  second process or wait for the user to name it. It works without Impeccable or
  frontend-design installed and routes to them when relevant and available.
- **For new or reshaped visual direction, use `frontend-design` when available**
  (or Impeccable's applicable design workflow). Carry the concrete design choices
  into the build and inspect the rendered result against them. Invocation alone
  does not satisfy design review. Local fixes preserve the existing design system
  and do not need a new aesthetic proposal.

## First run in a project: register yourself

The single biggest failure mode of any "use this process from now on" instruction is
that ~20 prompts later a fresh session has no memory of it. The host's project instruction file is
reloaded every session, so that's where the instruction has to live.

**On your first use in a project, make sure the relevant root instruction file points at
this skill**: use `CLAUDE.md` for Claude Code and `AGENTS.md` for Codex. If the project uses both
hosts, update both files; otherwise do not create a file for a host the project does not use.

```markdown
## Development process

For all feature work, use the `insured-vibe-coding` skill.
```

If a `## Development process` (or similar) section already exists, add the one line
there instead of duplicating. If the directive is already present, do nothing. This
is what makes the process stick without the user restating it every session.

## The one artifact you own: a current-state kanban

You maintain exactly **one** document: a kanban of **current state** — where the build
is *right now*, so any session (or a fresh you) can resume in seconds. It is **not** a
log of how things were built and **not** a record of decisions — those belong to other
skills. Keep it lean; stale detail is worse than none.

- **Location:** `docs/insured-vibe-coding/kanban.md` (create if missing; adapt to the
  repo's docs convention if it has one).
- **Update it twice per phase:** when you pick the phase up (→ Doing) and when you
  finish it (→ Done, with the next action named). The test-of-a-good-kanban is: if you
  were replaced mid-build, could a fresh agent read only this file and know exactly
  what to do next?

Template:

```markdown
# Build kanban — <project>

_Last updated: <date>. Next action: <the very next concrete step>._

## Doing
- <phase> — <one line: what's in flight / where it's blocked>

## Todo
- <phase> — <one line>
- <phase> — <one line>

## Done
- <phase> — tests: <pass/loc> · QA: <plan file> <n✅/n rows +evidence, or "no UI — N/A">
```

## The loop (one phase at a time)

Work **one phase at a time**. A phase is the unit you build, prove, and mark Done as a
whole — size it to the work: sometimes a phase is a single feature, sometimes it's a
group of related features, a page, or a route. Pick the granularity that worked well in
practice — a complete, provable chunk — deliberately *not* micro-increments (one
function or component at a time crawls) and *not* the whole project at once (the thread
gets too long for the tests and QA to catch anything). If a phase is genuinely large,
break it into a few tracked sub-tasks on the kanban — but the unit you build-test-QA and
mark Done is the phase.

For each phase:

1. **Track.** Move the phase to **Doing** in the kanban and write the next action.
2. **Shape the affected experience.** For UI/user-flow work, read frontend-ux and
   put its task contract in the existing phase plan: job/outcome, normal entry,
   named object/state, meaningful decision, visible result, next responsible role,
   and later retrieval/resolution. Check that the necessary model/commands exist;
   a proposed or blocked state without its required exit is unfinished work.
   For connected features, critique a visual/interactive example of the journey and its final reward/artifact
   before broad implementation. A local correction needs only its affected
   context and acceptance criteria. Backend work with no user-facing effect
   skips this step. Respect settled scope; this is neither PRD authoring nor an
   automatic owner-approval pause.
3. **Implement** the phase against the spec and experience decisions. Challenge
   material conflicts with the intended outcome; do not reproduce confusing
   configuration merely because the API/spec contains those options.
4. **Test — this is the insurance.**
   **First, enumerate the scenarios; then write a test for each.** For anything testable,
   before you write assertions, list out *every* scenario it should cover — happy path,
   each branch, each error/edge/state. Write that list first as pending test stubs
   (`it.todo(...)` / `test.skip(...)` / your runner's equivalent), or, if that's awkward,
   as a throwaway scratch checklist. This enumeration step is the whole point: it is what
   stops vibe coding from silently forgetting half the scenarios — the failure where the
   code *looks* tested but whole branches never were. Then fill in one real test per line
   until nothing is left pending. The enumeration is **disposable**: once every scenario
   has a real test, the test file *is* the list, so delete any scratch doc — do not
   maintain a parallel scenario list that will drift out of sync with the tests.

   Then write the tests. A failing test is **not** a nuisance to silence — it is the
   system telling you your implementation (or your own assumption) is wrong. Treat every
   red as a *discovery about your own mistake*: read it, decide whether the code or the
   test is wrong, fix the real cause, and get to green. This is the whole reason the loop
   exists — it's how you catch yourself instead of shipping the mistake to the user. Write
   the tests that would actually fail if the behavior were wrong; skip ones that can't
   fail. How much to test depends on the phase — see "How much to test" below:
   **backend/logic work gets the most aggressive coverage** (the tests carry the
   confidence there, since browser QA can't "look at" internal logic), while frontend work splits the
   load between focused behavior tests and the real-app QA pass.

   Choose the required test layer before filling in the cases:
   - A changed API, command, persistence, or service boundary needs an integration
     test through that boundary. Cover unauthorized access, invalid input, the happy
     path, and isolation where applicable; assert persisted state or side effects.
     Unit tests alone do not satisfy this requirement.
   - A phase that adds or changes user-facing behavior or a user flow needs a committed
     E2E spec (normally Playwright) for the primary journey and each changed state or
     branch. A one-off browser session or a QA-plan row does not substitute for the
     rerunnable spec. Purely visual or copy-only local corrections may rely on the
     planned QA row when no executable behavior changed.
   - Pure internal logic still needs focused unit tests for every meaningful branch,
     edge, and error state.

   The test file is the durable scenario list: do not leave the phase green with
   pending E2E or integration stubs.
5. **Planned QA pass** (below) — for any phase that touches UI or a user-facing flow.
   Automated tests routinely pass while the real app is broken — wrong wiring, a dead
   button, a layout that never renders, a request that never fires. Driving the *real*
   app is what catches that class of bug, and a QA row only closes on evidence the real
   system was exercised — never on a mocked test. Include the affected function,
   visual craft, task/copy clarity and final-artifact judgments from frontend-ux;
   an operable control can fail the other dimensions. Reassess the connected
   journey after related fixes, rather than only closing the old finding list.

   The E2E spec proves rerunnable functional behavior; this QA pass still owes the
   rendered UI, transitions, copy clarity, visual craft, and generated-artifact checks
   that executable assertions cannot judge.
6. **Track.** Move the phase to **Done** (note tests + QA result) and set the next
   action. Then take the next phase.

## The planned QA pass — written first, then executed

This must be **deliberate and documented**, never an ad-hoc "let me just click around."
Writing the scenarios first is what stops the pass from collapsing into "I already know
what it would do" — the exact rationalization that lets QA quietly not happen.

### The list is the single point of failure — build it from promises, not memory

The pass can fail in two ways: a missing scenario, or a weakly graded row that
passes despite a visible defect. A complete list of successful clicks can still
miss confusing navigation, unnatural copy, missing icons or unreadable exports.
Write observable rejection criteria as well as expected success. Three disciplines
put a net under the list:

- **Enumerate from what the feature promises a *user*, not from what you remember building.** Walk
  the capability as the person using it — every action they physically take and every result they
  should see is a row, including the ones no spec spells out: *the field accepts what I type*, *it
  actually persisted*, *doing it again is fine*, *the empty/slow case*. A promise you don't turn
  into a row is a hole you've hidden from yourself.
- **You test what you depend on.** Any capability you use to *reach* the real test — logging in,
  seeding, navigating there — is itself under test, because a real user drives it too. Never
  certify a feature *through* an unverified capability: if login is how you got in, login owes its
  own rows. (Treating login as mere setup is exactly why its frozen fields were never tested at all.)
- **Then make the list survive one independent "what did this forget?" pass** before you drive it —
  fresh eyes whose only job is to name the row that's missing and the result that was assumed
  rather than observed. Inline for a small phase; a subagent that did **not** author the list for a
  large one. This is the net under your own imagination.

For a substantial UI phase, this pass also challenges the journey and its grading:
could the listed rows all pass while someone still cannot find the task,
understand its labels, or identify the achievement? Require a design critique,
not only additional functional cases. For a substantial connected flow, run the
frontend-ux independent goal-based pass against the live app before handoff; give
the reviewer goals/fixtures rather than the builder's click sequence or green ledger.
Record observed task/object/next-action facts, failure/interleaving evidence and
findings in this same QA document. For a local fix, keep review to the affected
context. A reviewer or executor must inspect the actual evidence; a skill name,
CSS class, screenshot path or checklist count is not a quality observation.

**First, does this phase owe a real-app pass?** Answer one question and log the answer:
*does the phase render or change any UI, or add/alter a user-facing flow?*

- **No — internal logic with no user-facing change.** There's no affected app surface to drive; the automated tests are
  the whole safety net (see "How much to test"). Note *"no UI surface — QA N/A"* on the
  phase and move on. Don't manufacture ceremony for a pure-logic change.
- **Yes, including backend changes that alter the visible flow.** A real-app QA
  pass is **owed**, and the phase is not Done without it. Continue.

This gate is the proportionality valve: it's what keeps the machinery below off small
backend changes, so answering "no" honestly is fine — but it's an explicit, logged answer,
not a silent skip.

**Step 1 — write the test-case document first**, at
`docs/insured-vibe-coding/test-plans/<phase>.md`, before you drive anything. Enumerate
real scenarios — happy path, empty/loading/error states, validation, edge cases, and
anything the automated tests *couldn't* cover (real navigation, real network, real
rendering). Include the affected frontend-ux dimensions in this same document;
do not create another UX ledger. Each row names its kind, a clear expected result
and what would fail it, and starts unrun (⬜). Include only dimensions affected by
this phase; artifact checks apply when something is generated or shared.

```markdown
# QA plan — <phase>

App under test: <url / how to run it>

| # | Kind / scenario | Goal or steps | Expected result / rejection criteria | Status |
|---|-----------------|---------------|--------------------------------------|--------|
| 1 | Function: submits valid form | <rendered actions> | Persisted once; truthful success; fail on wrong or duplicate state | ⬜ |
| 2 | Visual: result at phone size | Inspect saved screen | Readable grouping and actual glyphs; fail on missing icon/cropping/crowding | ⬜ |
| 3 | Clarity: reach the task | Start at ordinary entry with the task goal | Visible cues predict destination/action; record ambiguities and route knowledge | ⬜ |
| 4 | Artifact, if applicable | Open actual downloaded output | Matches occasion/preview; readable identity/values and intentional composition | ⬜ |

<!-- Status: ⬜ not run · ✅ pass (+evidence) · ❌ fail (+repro)
     · 🚫 N/A (reason) · ⛔ blocked: <what's needed> -->
```

**Step 2 — execute it against the *running* app, preferably in a subagent.** For a web UI
drive it with **Playwright** (or your stack's browser-driving equivalent); for a non-web
app use the equivalent real harness (a real CLI session, real API calls against the running
server). Two things make this real rather than theater:

- **For substantial phases, prefer a dedicated QA subagent.** Hand it the running app (url / how to run) plus the
  scenario doc, and have it drive each row and return the filled table + evidence paths +
  any ❌ repros. This keeps the browser/log dump out of your main context, and the executor
  grades against the *written scenarios* rather than its own memory of what it built. Use one
  subagent per independent scenario group for a large phase. Drive a small,
  bounded phase inline when independent execution adds no concrete benefit;
  also use inline execution if delegation or browser access is unavailable.
  The same written scenarios and actual rendered evidence are required either way.
- **Inspect what actually happened** — the rendered UI, the console for errors, and the
  network/output — not just that a click didn't throw.
- **Grade the intended dimension.** Follow named steps for functional checks. For
  clarity assessment, begin with a task goal and normal entry; record competing
  cues and whether implementation/route knowledge supplied the answer. This is
  expert/model assessment, not proof of unaided human comprehension. Inspect
  actual screen glyphs and downloaded files for visual/artifact rows; DOM or
  metadata alone cannot close them. Exercise changed states, including errors while
  a modal is open, later edits during a pending save, and context changes while
  requests complete when those properties exist. Apply frontend-ux's conditional
  interaction checks rather than adding generic rows. Read localized sentences with
  real values.

**A row closes ✅ only on evidence that the *real running system* was exercised for it.**
This is the whole point: the Status column has to be able to come back *false*, the way a
red test can. If a row can be marked green from your own head, it isn't QA.

- **✅ requires a real run that exercises the capability the way a user reaches it.** For a
  rendered surface that means driving the **rendered UI itself** — typing into the field, clicking
  the button, reading what appears — *not* an HTTP/end-to-end call underneath it: the server layer
  can be perfectly green while the UI is frozen and unusable (a real, shipped example). Use the
  running-server/API layer to *set up* state or to *confirm a side effect*, never as the proof that
  the user-facing capability itself works. **A mocked or unit test does not close a QA row.** Cite
  *assertion-specific* evidence — a persistence claim proven by the stored row, a "no console
  errors" claim by the console capture — not a generic screenshot that merely looks green.
- **❌** records the repro, then you fix and re-run.
- **🚫** is a scenario that genuinely doesn't apply, with the reason.
- **⛔** is a scenario you *can't* run because it needs something you don't have (credentials,
  an authorized external target, a paid resource). **⛔ blocks Done and is surfaced to the
  user** — never a silent pass. Do not invent a "gated / skip / operator-only" status that
  quietly closes the obligation; that is exactly the escape hatch this section exists to shut.

A phase isn't Done until its automated tests are green **and** every owed QA row is ✅ or a
logged 🚫 — with no ⬜ or ⛔ left open. And never round a partial pass up to "works" or
"comprehensive": that verdict is earned only at zero-open, and while anything is unverified,
blocked, or ❌ the honest report is the ledger itself — *N verified, M still unverified/blocked* —
not a confident green.

Record functional verification, rendered craft, expert clarity review, and any
required human/device/platform acceptance distinctly. Model critique is not user
research. Fix ordinary visible/copy defects before owner handoff; do not classify
them as subjective acceptance. Human studies and new approval rounds are not
automatic requirements: follow the spec and actual risk, and disclose what was
not observed. An optional external study is not an invented blocker; an explicitly
required acceptance gate stays open until satisfied.

## How much to test — aggressively; the tests are the insurance

Vibe coding moves fast over a lot of code you did not hand-write line by line, so the
tests are what stand between you and shipping your own mistakes. **Test hard — this is
where the aggression belongs.** Aim for high coverage *and* a high number of meaningful
scenarios per unit or group of units; the loop is only as safe as the net under it.

> The general test-*intent* principles — target-by-risk, determinism, no-tautologies,
> evidence-gated "done" — live in the **`testing-philosophy`** skill; invoke it. What
> *this* section owns is **how much**: the coverage discipline this loop depends on.

**"Confidence over coverage" is a tiebreaker, not an excuse to under-test.** Coverage and
confidence almost never conflict, so pursue *both*; confidence only wins the rare genuine
conflict. The failure mode to avoid is **coverage theatre** — tests that each walk one
trivial path, look green, and catch nothing. The fix is not *fewer* tests; it is tests
that can actually fail for a real defect. Every test earns its place by being able
to catch a real mistake. Coverage and passing-test counts cannot establish total
confidence, usability, or user acceptance; the relevant evidence above is still owed.

- **Optimize for scenarios, not lines.** For anything with branches or a decision
  matrix, write a case per *meaningful scenario* — happy path, each error/edge, each
  state — not per line. The question is "which scenarios are covered," never "what's
  the line %."
- **Don't skip the trivial things either.** "It's obvious, it won't break" is how
  regressions slip in. Cover them too — just never let that padding stand in for the
  scenario tests that actually carry the confidence.
- **The confidence bar differs by layer:**
  - **Backend / business logic → aggressive.** Unit *and* integration tests, every
    meaningful branch, edge, and error path. There's no visual QA to fall back on, so
    the tests are the whole safety net — invest accordingly.
  - **Frontend → split the load.** Focused tests for component behavior and logic;
    let the planned real-app QA pass (step 5) carry rendering, wiring, and flows that
    are cheaper to verify by driving the app than by mocking.

## What this skill does not do

- **No PRD/spec authoring, no "how it was built" or decision docs.** A spec already
  exists on invocation; the narrative/decision docs belong to other skills. Your only
  doc is the kanban (plus the per-phase QA plans).
- **No re-teaching** of library-first choices, architecture, the regression-testing
  rationale, or commit/style hygiene — other skills own those.
