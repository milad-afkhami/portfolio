---
name: testing-philosophy
description: >-
  The philosophy for deciding WHAT to test and WHY — confidence over coverage.
  Use whenever writing, reviewing, or planning tests: choosing which cases to
  write, judging whether a test is worth keeping, deciding when a feature is
  "done," or resisting the pull toward coverage-number chasing. This is the
  standard for test *intent*, not test tooling or framework mechanics.
---

# Testing Philosophy — Confidence Over Coverage

The *why* of testing, not the *how*. This decides which cases earn a test, which
don't, and what "done" means. It is framework-agnostic — nothing here depends on a
particular test runner, language, or stack.

The governing idea: **a test exists to buy confidence in a specific risk, not to move
a coverage number.** Every principle below is a consequence of that one.

---

## 1. Confidence over coverage

"Confidence over coverage" is a **tiebreaker, not a licence to test less.** Coverage and
confidence almost never pull in opposite directions, so the default is *both* — thorough
coverage **and** confidence-bearing tests, with a high number of meaningful scenarios per
unit or group of units. The rule only decides the rare case where they genuinely conflict:
there, the test that would catch a real defect wins over the one that merely lifts the
line %.

The question every test must answer is: **"if this broke, would something that matters go
wrong — a wrong result, an unsafe action, leaked or corrupted data?"** A test that can
answer *yes — and I would catch it* has earned its place.

The failure mode to avoid is **coverage theatre: 100% coverage that gives 20% trust** —
tests that each exercise one trivial path, look green, and catch nothing. The fix is *not*
"write fewer tests"; it is "make each test able to fail for a real defect." The goal is
high coverage that *also* carries high confidence — never one traded against the other.

**Optimize for scenarios, not just lines.** For anything with branches or a decision
matrix, write a case per *meaningful scenario* — happy path, each error, each edge, each
state — and don't skip the "obvious" ones either; "it won't break" is how regressions slip
in. "Which scenarios are covered?" is a sharper question than "what's the line %?", but the
honest answer to both should be *high*.

## 2. Test what must never be wrong — target by risk

Your test priorities are your system's **invariants** — the things that, if wrong, break
trust or cause harm. Identify them per project, but they usually fall into these classes:

- **Correctness of consequential outputs** — money, quantities, anything a user or
  downstream system acts on. Assert exact, known-correct values.
- **Safety / guardrails** — refusals, limits, floors, and blocks that must hold
  regardless of any upstream (especially non-deterministic) component. Test them as hard
  gates.
- **Security & isolation** — authz boundaries; one tenant/user must never see or mutate
  another's data. Test the *denial*, not just the allow.
- **Data integrity** — nothing silently dropped, double-counted, or corrupted across a
  write/read cycle.
- **Fail-direction** — where a feature is designed to fail *open* or fail *closed*, the
  test asserts it fails in the *correct* direction, because that's the whole point.

If a change touches one of these, a test is not optional.

## 3. Determinism is a testability contract

You can only assert an exact value if the code produces an exact value. So **push
non-determinism to the edges** and keep the core deterministic:

- **Time** — inject the clock; don't read the wall clock inside logic under test.
- **Randomness** — inject the seed/source.
- **Network & external services** — behind a seam you can swap for a deterministic fake.
- **The fake should be deterministic too**, so you can assert on both its output *and*
  the control flow around it (e.g. prove a guard short-circuited *before* an expensive or
  external call ever ran).

A test that can only assert "it didn't throw" is a smell. If you can't assert a real
value, first ask whether the code should have been more deterministic.

## 4. Assert real values, never tautologies

A test that re-implements the code under test, asserts `x === x`, or mocks the thing
under test until only the mock is exercised gives **false confidence — worse than no
test**, because it reads as protection. Prefer asserting a **known-correct constant** you
derived by hand or from the spec.

Litmus test for any test you write: *if the implementation were subtly wrong, would this
test go red?* If it can't fail, it isn't testing anything — delete it or rewrite it.

## 5. Red first — the failing test catches *your* mistake

Write the test before (or alongside) the implementation, and **value the red state.** A
failing test is not a nuisance to silence; it is the system telling you your
implementation — or your own assumption — is wrong. Read every red as a *discovery about
your own mistake*: decide whether the code or the test is wrong, fix the real cause, get
to green.

This is the entire point of testing as a discipline: it is how you catch yourself before
a user does, so no one has to sit over your shoulder finding what you broke.

## 6. Encode invariants and conventions as tests so they can't rot

Any rule you'd otherwise have to police by hand in review — a format rule, a parity
constraint, a required error shape, a naming or localization rule — should be **enforced
by a test instead of by vigilance.** The test becomes the executable spec.

Rule of thumb: **if you change one of these behaviors on purpose, update its test in the
same commit.** A silent divergence between the rule and its test is itself a bug.

## 7. "Done" requires evidence — tests are necessary but not sufficient

Green unit tests prove the *units*. They do **not** prove the *product* — automated tests
routinely pass while the real thing is broken: wrong wiring, a dead button, a request
that never fires, a layout that never renders. So "done" has two legs:

1. **Automated tests pass** — for all real logic.
2. **A real run of the primary flow** — drive the actual system end-to-end (a real
   browser for a UI, a real CLI session or live API calls against the running server for
   a backend) and *inspect what actually happened* — the output, the errors, the stored
   state — not merely that a call didn't throw.

**No "done" without evidence.** Neither leg substitutes for the other. When a real run is
owed but genuinely can't be performed (missing credentials, an external dependency you
lack), that *blocks* done and is surfaced — never silently marked complete.

## 8. A minimum contract for every boundary

For each externally reachable boundary (an API endpoint, a public handler, a command),
there is a floor of cases that buys real confidence — write these before adding more:

1. **Rejects the unauthenticated / unauthorized caller.**
2. **Rejects invalid input** (validation), with the expected error shape.
3. **The happy path** works end-to-end.
4. **Isolation** — a caller cannot reach another caller's data.

This is the floor for a boundary, not the ceiling. Add beyond it only where a specific
risk justifies it.
