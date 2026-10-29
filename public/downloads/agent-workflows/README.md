# Agent workflow source pack

Source snapshot accompanying Milad Afkhami's AI engineering articles, 2026-10-26. Independent Judgment updated from the global instructions on 2026-10-29.

## Contents

- autohelm/SKILL.md — full original prompt, unchanged.
- systematic-thinking/SKILL.md — full original prompt, unchanged.
- resume-after-interruption/SKILL.md — full original prompt, unchanged.
- wrapup/SKILL.md — full original chain entry point, unchanged.
- save-context-for-compact/SKILL.md — first wrapup dependency, unchanged.
- comprehensive-report/SKILL.md and scripts/write_handoff.py — last wrapup dependency and helper, unchanged.
- independent-judgment.md — exact Independent Judgment section from my global instructions.
- browser-use/SKILL.md — standalone reader adaptation matching the inspected Chrome Bridge implementation.
- browser-use-original.md — full original browser instruction file for provenance. Its universal focus/banner and login claims are broader than current behavior; use the reader version with the article's explicit implementation limits.

## Use

Place the named skill folders under the skills directory supported by your agent, preserving sibling relationships. Read the skill before invoking it explicitly by name. These are instructions; they do not install a runner, grant permissions, or change your existing project rules. For a one-off session you can instead paste the complete relevant instruction body into the agent's context and explicitly ask it to apply that procedure to a bounded task. The YAML at the top is skill metadata, not a task brief.

Wrapup is a multi-file chain. Install wrapup, save-context-for-compact and comprehensive-report together as siblings, retaining comprehensive-report/scripts/write_handoff.py. It commits and pushes after checkpointing; use it only in a repository and release scope where that action is authorized. The helper requires Python 3 with its standard library. Installing only wrapup/SKILL.md leaves its required dependencies missing.

Independent Judgment is a standing instruction section, not a manually invoked skill. Add that section to the instruction file your agent reads for the relevant project or shared scope.

Chrome Bridge is separate software. Its repository and installation guide are at https://github.com/milad-afkhami/chrome-bridge-extension . Get the source code from that repository; the browser article links to the commit discussed there. Node.js and npm are needed for its server; load its extension folder through Chrome's Load unpacked flow and register server/index.js as a local stdio MCP server using your client's supported configuration.

These snapshots expose the actual prompts behind the essays, including their original wording. They are not claims of measured reliability. The article demonstrations remain hypothetical. No global instruction file or installed skill has been changed by preparing this pack.
