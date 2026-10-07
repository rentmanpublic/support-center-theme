# Translations for the New to Rentman page

These files are the **source of record** for the localised copy on
`templates/custom_pages/new_to_rentman.hbs`. They are not read at runtime —
the template carries the translations inline as `{{#is help_center.locale}}`
chains, because Zendesk's `{{t}}` helper only resolves its own built-in keys
and cannot read custom keys from `translations/`.

| File | What it is |
|---|---|
| `vocabulary.json` | Product, tier and add-on naming per locale. Products (Inventory, Crew, Organize), tiers (Essential, Standard, Pro) and Platform are never translated. Source: rentman.io pricing pages. |
| `translations.json` | All strings, all locales, in one file |
| `nl/de/fr/es/it.json` | One locale each, for handing to a reviewer |

## Conventions

- **Formality:** informal in nl, de, es and it; `vous` in fr. Taken from the
  wording already published on the live Help Center.
- **In-app UI names are translated** (Crew rates, Document Template Library,
  Scan Return). Verified against the published Help Center article titles.
- **Article link labels are not in these files.** They are the published
  Help Center titles, fetched per locale by article ID, and the hrefs use
  `/hc/{{help_center.locale}}/articles/<id>` so Zendesk resolves the right
  translation. Re-fetch them if an article is retitled.

## Known gaps

`35600301773970` (How to Plan Your Rentman Implementation) has no translation
in any locale, so both links to it are wrapped in `{{#is help_center.locale 'en-us'}}`
and the Implementation Guide button becomes primary elsewhere. Three further
articles have no Italian translation and send `it` to the English article
rather than a 404:
`13793720770194`, `13724369155218`, `14829964454546`.

Remove those guards once the articles are translated.
