# CLAUDE.md

Guidance for AI agents working in **this fork**. Read this before `AGENTS.md`.

## What this repo is

A Rentman fork of [zendesk/copenhagen_theme](https://github.com/zendesk/copenhagen_theme),
running the Rentman Zendesk Help Center (Support Center) theme.

### Branches

| Branch | What it is |
|---|---|
| **`rentman2026`** | **The live Support Center theme.** All work happens here. Treat it as production. |
| `master` | A clean mirror of the upstream Zendesk Copenhagen theme — the source for pulling in Zendesk's own improvements. No Rentman code. |
| `rentman` | The previous Support Center, replaced in early 2026. Historical reference only; don't commit to it. |

Feature branches for larger work branch off `rentman2026` and merge back into it (see
*Verifying changes*).

### Pulling in Zendesk's upstream improvements

`master` is refreshed from [zendesk/copenhagen_theme](https://github.com/zendesk/copenhagen_theme)
(GitHub's "Sync fork" does it), then merged into `rentman2026`. A read-only `upstream`
remote is configured locally for inspecting what's available.

The catch: **upstream commits its built files too**, so an upstream merge touches
`style.css` and `script.js` — exactly where the Rentman customizations live. Never
resolve those conflicts by taking upstream's side wholesale; that's the same trap as
running the build. Rentman's blocks are the `rm-`-prefixed rules at the end of
`style.css` and must survive intact.

Always dry-run before merging, which costs nothing and lists the conflicts:

```bash
git merge-tree --write-tree --name-only origin/rentman2026 upstream/master
```

An upstream sync is a deliberate project — propose it, don't fold it into unrelated work,
and verify it via a test theme in Zendesk before it goes live.

## The one rule that matters: never run the build

`AGENTS.md` (inherited from upstream) says *"Do not edit `script.js`, `style.css`, or
files in `assets/` directly — they are generated."* **That is inverted in this fork.**

In `rentman2026`, the generated files **are** the source of truth. Every Rentman
customization — ~59 commits of it — lives in `style.css`, `script.js`, `templates/*.hbs`
and `manifest.json`. The SCSS in `styles/` and the JS in `src/` were never updated to
match.

Therefore:

- **Never run `yarn build`, `yarn start`, or `rollup`.** Rollup regenerates `style.css`
  and `script.js` from `styles/` and `src/`, which would silently erase all Rentman
  styling and behaviour.
- Node, yarn and zcli are deliberately not installed on this machine. Leave it that way
  unless we consciously migrate the customizations back into `styles/` and `src/`.
- Ignore the `yarn`-based commands in `AGENTS.md`. The rest of `AGENTS.md` (Curlybars
  template semantics, directory map, theme settings) is still accurate and useful.

## Where to make changes

| Change | File |
|---|---|
| Page structure / markup | `templates/*.hbs` (Curlybars — a Handlebars subset) |
| Styling | `style.css` |
| Front-end behaviour | `script.js` (ES2015 only — no newer syntax) |
| Theme settings exposed in Zendesk admin | `manifest.json` |

### Content that is NOT in this repo

Some visible text and links come from Zendesk **dynamic content** items, referenced in
templates as `{{dc 'name'}}`. They are edited in Zendesk Guide admin, per locale — not
here, and not by an agent. Known items:

| Item | What it renders |
|---|---|
| `hp_hero_jumpto` | Every pill in the homepage hero row (Changelog, API Docs, Academy, Services, Community) |
| `hp_hero_onboarding` | The "New to Rentman? Start here →" CTA beside the pills |
| `support_center_notification` | The site-wide notification bar |

Because each locale holds its own copy, these drift out of sync between languages. If a
request is "change that link/label in the hero", the answer is usually a dynamic content
edit, not a code change — say so rather than hardcoding it into the template.

A feature usually touches all of the relevant files above — e.g. the Spotlight bar was
`home_page.hbs` + `style.css` + `manifest.json`.

## House conventions

**CSS** — append new rules to the **end** of `style.css`, under a banner comment:

```css
/* ── Spotlight (homepage promos: betas, events) ─────────────── */
.rm-section--spotlight { background: #fff; padding: 32px 0; }
```

- Prefix every custom class with `rm-`, BEM-ish (`.rm-spotlight-card__icon`,
  `.rm-spotlight-tag--beta`).
- One rule per line, declarations inline — match the surrounding minified-ish style.
- Brand colours in use: `#FF5E1D` (Rentman orange), `#202121` (near-black),
  `#F5F0EB` (sand), `#e5e5e5` (borders).

**Settings** — new theme settings go in `manifest.json` so content can be edited in the
Zendesk admin UI instead of in code. Keep the template reading from the setting rather
than hard-coding copy.

**Commits** — one file per commit, message `Update <file> <what changed>`
(e.g. `Update style.css Add Spotlight Bar`). This is a carry-over from editing via the
GitHub web UI; keep it for a consistent history, but grouping one feature into a single
commit is fine too — say which you're doing.

## Publishing to the live Help Center

There is **no automatic deploy**. Pushing to `rentman2026` does not change the live site.
Publishing is a separate, deliberate step: Kenneth imports/updates the theme in the
Zendesk Guide admin UI. So pushing is safe on its own — but say clearly when a change is
pushed-but-not-yet-published.

## Verifying changes

There is no local preview — that would need zcli plus a build, and the build is off
limits. Instead:

**Small changes** (a CSS tweak, a copy change, an extra link) — reason through the
Curlybars semantics, check the change against sibling templates that already do the same
thing, and preview CSS/markup in isolation in a scratch HTML file where that helps.

**Larger changes** (new sections, template restructuring, anything touching several
pages) — push a branch off `rentman2026` and import it as a **separate test theme** in
Zendesk Guide. That gives a real preview against real Help Center data without touching
the published theme. Merge into `rentman2026` once it looks right. Suggest this route
whenever a change is big enough that reading the diff isn't convincing on its own.

Be conservative either way: a broken template ships to a live customer-facing site.

## Customer-facing copy

Any user-visible text follows the Rentman tone of voice — consult the
`shared-references` skill before writing it.

---

@AGENTS.md
