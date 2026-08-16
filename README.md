# GreenStar Homes Certification — The Open Standard

![Version](https://img.shields.io/badge/standard-Manual%20v4-059669) ![License](https://img.shields.io/badge/license-CC%20BY--SA%204.0-2563eb) [![Validate standard](https://github.com/shanegringcertainlycoop/greenstar-homes-standard/actions/workflows/validate.yml/badge.svg)](https://github.com/shanegringcertainlycoop/greenstar-homes-standard/actions/workflows/validate.yml)

This repository is the open, forkable text of the **GreenStar Homes Certification**
standard (Manual v4), a residential green-building certification run by the
[GreenHome Institute](https://greenhomeinstitute.org), a 501(c)(3) nonprofit.

**54 requirements · 5 pillars · 4 levels · 16 badges**

The standard's distinguishing strength is existing homes — renovations, retrofits,
and gut rehabs are first-class paths alongside new construction.

## The open model

The rulebook is open: read it, use it on any project, fork it for your housing
program. What's paid is verification — third-party inspection by a GreenHome
Inspector and certification by the Institute. Fees fund the nonprofit mission.

## Formats

| Format | Where |
|---|---|
| Browsable reference | https://standard.greenstarhomes.org/standard |
| This repo (markdown) | [`standard/`](standard/) |
| One plain-text document | https://standard.greenstarhomes.org/llms-full.txt |
| Structured JSON | https://standard.greenstarhomes.org/standard.json |
| Working checklist (spreadsheet) | linked from https://standard.greenstarhomes.org |

## Contribute

- **Something wrong or unclear?** [Open an issue](../../issues).
- **Have a concrete improvement?** Fork the repo and submit a pull request against
  the requirement file you'd change — see [CONTRIBUTING.md](CONTRIBUTING.md).
- **Adapting the standard for your program or municipality?** Fork away — and tell
  us; we'd love to point to your work.

## Structure

- [`levels.md`](levels.md) — the four certification levels
- [`standard/`](standard/) — one folder per pillar, **one file per requirement**
- [`badges.md`](badges.md) — the optional achievement badges
- [`standard.json`](standard.json) — machine-readable snapshot
- [`CHANGELOG.md`](CHANGELOG.md) — release-level history of the standard
- [`ADOPTERS.md`](ADOPTERS.md) — programs and projects building on the standard
- [`CITATION.cff`](CITATION.cff) — how to cite the standard in research

## Change history

Two levels of changelog:

- **Overall**: [`CHANGELOG.md`](CHANGELOG.md) tracks versioned manual releases.
- **Per credit**: every requirement is its own file, so its git history is its
  complete changelog — click **History** on any requirement file, or follow the
  "Change history" link at the bottom of each one.

Regenerate the export from the live standard with `node scripts/export.mjs`.

## Program

Certification inquiries: https://greenhomeinstitute.org/green-building-certification-inquiry-form/
· Program site: https://greenstarhomes.org · Contact: info@greenhomeinstitute.org
