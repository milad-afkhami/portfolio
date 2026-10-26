---
name: browser-use
description: >-
  Drive the user's real, everyday Chrome (their logins, cookies, and fingerprint) via the
  chrome-bridge MCP — read pages, snapshot their structure, click/fill/hover, run JavaScript, and
  navigate, WITHOUT stealing window focus and WITHOUT a debugger banner. Use this whenever the user
  says "browser use" / "use my browser" /
  "in my chrome", wants you to act as themselves on a logged-in site (their Gmail, dashboards,
  university/application portals, internal tools), needs to get past a Cloudflare/login wall, or
  needs real JavaScript run against a live page. Also the tool the web-access skill delegates to at
  its top rung. Prefer this over Playwright/Chrome-DevTools whenever the task needs the user's real
  session or must not disturb what they're doing on screen.
---

# browser-use — drive the user's real Chrome (chrome-bridge)

`chrome-bridge` is a tiny MCP + Chrome extension that operates the user's **actual everyday browser**.
Because it's their real profile, they're already logged in everywhere and Cloudflare/Turnstile treats
it as a trusted human. Two properties make it pleasant and worth reaching for:

- **Never steals focus.** Every tool acts on a tab in the background — it never raises/activates a tab
  or window. You can work while the user keeps doing their thing on screen.
- **No debugger banner.** JS runs via `chrome.scripting` in the page's MAIN world, so there's no
  "started debugging this browser" bar (which can trip anti-bot checks and is just annoying).

## Tools (all `mcp__chrome-bridge__*`)

**Every tab-targeting tool requires an explicit `tabId` — there is no active-tab fallback.** A call
without a `tabId` errors instead of touching whatever tab the user happens to be on, so you can never
accidentally hijack the page they're working in. Get a `tabId` from **`list_tabs`** (to drive a tab
that's already open) or **`open_tab`** (to start fresh), then thread it through every call. Only
`list_tabs` and `open_tab` take no `tabId` (`cookies` takes `tabId` **or** `url`; `network_capture`'s
`tabId` is an optional filter). **Default for fresh work: `open_tab` first** — only reach into an
existing tab (by its `list_tabs` id) when the user wants you to act on something already open.

**Read & understand**
- **`list_tabs`** → `[{tabId, url, title, active}]`. Start here to find the tab you want; pass its
  `tabId` to the other tools. Read-only; never changes focus.
- **`read {tabId, selector?, format?}`** → page content as `text` (default), `html`, or `markdown`
  (clean main/article content — best for reading an article without HTML bloat). Optional CSS
  `selector`. Static function (no eval) so it works **everywhere**, including strict-CSP sites.
- **`snapshot {tabId, selector?, interactiveOnly?}`** → an indented accessibility outline of the
  interactive elements with stable refs, e.g. `- button "Sign in" [ref=e7]`. **This is your default
  for "what can I do on this page".** Cheap on tokens vs raw HTML, and you feed the refs straight to
  `click`/`fill`/`hover`. No eval → works on strict-CSP sites too. `interactiveOnly:false` also lists
  headings/landmarks.
- **`cookies {tabId|url}`** → cookies incl. httpOnly (which `exec` can't read). Read-only.
- **`exec {code, tabId}`** → runs `code` as an async function body (use `return`/`await`) and returns
  its JSON value. Reach for it for **custom scraping/computation or `fetch(...)`** — for plain clicking
  and typing, prefer `click`/`fill`. Blocked by strict CSP (see below).

**Act** (all run in the background — no focus change, no banner)
- **`click {ref?|selector?, tabId}`** → click by snapshot `ref` (preferred) or CSS selector.
- **`fill {ref?|selector?, value, submit?, tabId}`** → set an input/textarea/contenteditable (uses
  the native setter + fires input/change, so React/Vue notice); `submit:true` presses Enter / submits
  the form.
- **`hover {ref?|selector?, tabId}`** → real pointer/mouse-over to open hover menus and tooltips.
  Opens **JS-driven** menus (`onmouseenter`/`onmouseover`, React/Vue); a **pure-CSS `:hover`** menu
  won't open (synthetic events can't drive CSS `:hover`) — for those, act on the target directly.
- **`navigate {url, tabId}`** → point an existing tab at a URL in the background. To start fresh work,
  `open_tab` (optionally with the `url`) instead of navigating a tab the user is using.
- **`open_tab {url?, active?, newWindow?, incognito?}`** / **`close_tab {tabId}`** → open a tab
  (background by default) or a new window; `incognito:true` = isolated cookie jar (logged out). Drive
  several tabs in parallel by their `tabId`. **This is how you start fresh work without disturbing the
  user's tabs.**

**Wait, capture, upload**
- **`wait_for {tabId, selector?, text?, gone?, timeoutMs?}`** → poll in-page until a selector appears
  (or disappears with `gone:true`), `text` shows up, or (with neither) loading finishes. Use this
  after `navigate`/`click` on dynamic pages instead of guessing.
- **`screenshot {tabId}`** → a PNG image. If that tab isn't frontmost it briefly flashes to front to
  render, then restores focus — the *only* tool that touches focus, and only for a moment.
- **`network_capture {action, tabId?}`** → `start` then `stop` for requests
  (url/method/type/status/timing) via webRequest — no banner, no response bodies (use `exec`+`fetch`).
- **`console_capture {action, tabId}`** → `start` then `stop` for console logs + uncaught errors
  (`{level, text, t}`). No banner; the hook resets on full navigation.
- **`upload_file {selector, filePaths[], tabId}`** → set a file `<input>`'s files (absolute paths).
  The one tool that uses the debugger (browsers allow no other way), so it briefly shows the
  "debugging this browser" bar, then detaches. Set the input, then trigger the form's submit.

## How to work well — the agent loop

**First, get a tab to work in.** `open_tab` for fresh work (background by default — doesn't disturb the
user), or `list_tabs` to find an existing tab the user asked you to act on. Everything below takes that
`tabId` explicitly — there is no active-tab fallback, so passing the wrong (or no) `tabId` acts on the
wrong tab or errors, never silently on the user's page.

The core loop for driving a page: **`snapshot` → act by `ref` (`click`/`fill`/`hover`) → `wait_for` →
`snapshot` again.** You never have to guess selectors or dump HTML.

- **Understand with `snapshot`, read prose with `read`.** `snapshot` tells you what's clickable;
  `read` (esp. `format:"markdown"`) is for consuming content. Only fall back to `read {format:"html"}`
  when you need exact markup.
- **Act with `click`/`fill`/`hover`, not hand-written JS.** Take a `snapshot`, then
  `click {tabId, ref:"e7"}` or `fill {tabId, ref:"e12", value:"…", submit:true}`. Refs come from the
  most recent snapshot of that page — re-`snapshot` after a navigation or big DOM change before reusing
  refs. Use a CSS `selector` instead of a `ref` when you already know it.
- **Save `exec` for logic.** Custom scraping, computed values, `fetch(...)` — things click/fill can't
  express. For plain interaction, the dedicated tools are simpler and (unlike `exec`) work on
  strict-CSP sites.
- **Wait with `wait_for`, don't sleep-guess.** After `navigate`/`click`, `wait_for` a selector or text
  that marks the page ready, then proceed.
- **Debugging a page?** `console_capture` + `network_capture` around an action show you the errors and
  requests it produced.

## The one real limit — strict-CSP sites and `exec`

Only **`exec`** is limited: it runs arbitrary JS via MAIN-world `new Function`, which a page's
`Content-Security-Policy` can forbid (notably **GitHub, Google**, some banks). Symptom: `exec` returns
`null` there even though the code is fine. **Everything else still works** — `read`, `snapshot`,
`click`, `fill`, `hover`, `wait_for`, `navigate`, `list_tabs` all use static functions (no eval). So on
a strict-CSP page, snapshot-and-click your way through instead of `exec`. If you genuinely need custom
JS there, that's the tradeoff for "no banner" — say so rather than silently returning null.

## Walls, logins, and captchas

- Because it's the real profile, **login-walled pages just work** (the user is signed in) and
  **Cloudflare/Turnstile usually passes** automatically.
- **A real captcha still needs a human.** Navigate there, then hand off cleanly with the sibling
  **[`request-user-action`](../request-user-action/SKILL.md)** skill. Its CAPTCHA
  wrapper is **`../web-access/captcha-wait.sh`**, resolved relative to this `SKILL.md`; run it through
  the shell tool as a tracked background process. It beeps once and shows a modal ("Raise Chrome" /
  "Done — I solved it"). When the user clicks Done the task completes and re-invokes you; re-`read`
  the page to confirm the wall cleared. If the helper can't launch (no graphical session/`zenity`),
  ask the user in chat to solve it and reply "done". Never pretend a wall was passed.

## Operational notes

- **The extension must be connected.** Its toolbar popup shows ✅/❌ and a Reconnect button. If a tool
  returns *"extension not connected"*, ask the user to check the popup (or click Reconnect). It
  auto-connects and self-heals via an alarm, so this is rare.
- **First call right after reloading the extension or restarting can fail — just retry once.** The
  socket reconnects within a few seconds.
- **One browser at a time.** Multi-*tab* is fine (target by `tabId`); for many isolated contexts in
  parallel, that's a job for Playwright, not this.
- Setup/design reference: `~/Desktop/projects/chrome-bridge/` (README + server + extension).

## Privacy — this is the user's real browser

You can see and act on every open tab, including personal ones (email, banking, private docs). Touch
only what the task needs, prefer opening/using a scratch tab over running code on their personal tabs,
don't read or echo unrelated tabs' contents, and clean up tabs you open.
