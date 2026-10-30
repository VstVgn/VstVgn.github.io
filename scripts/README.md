# Annual journal-metrics update

Run this after the new annual impact factors and rankings are published.

## 1. Generate a review file

```powershell
node scripts/update-journal-metrics.mjs
```

This fetches candidate values for IF, JCR, and 新锐分区 and writes
`scripts/journal-metrics-review.json`. It does **not** change the website.

Open the review file and verify every candidate against the linked source page.
If any journal reports an error, do not apply the report; rerun later or correct
the source/parser first.

## 2. Apply the reviewed values

```powershell
node scripts/update-journal-metrics.mjs --apply
```

Applying a complete report updates `journalMetrics` in `site.js`, refreshes the
script cache version on all pages, and updates the bilingual “Last updated” text
on the homepage.

## 3. Verify before publishing

```powershell
node --check site.js
git diff --check
git diff
```

The source site is third-party and may change its HTML layout. The script stops
instead of guessing whenever a value cannot be parsed. Always review the report
before using `--apply`.
