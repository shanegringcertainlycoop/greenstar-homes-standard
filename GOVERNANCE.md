# Governance

> **DRAFT — pending ratification by the GreenHome Institute.** This document
> proposes how changes to the standard are reviewed and ratified. Until the
> Institute adopts it (with names attached), the Institute's existing internal
> process governs, and this draft describes the intended destination.

## Principles

1. **The Institute decides; the process is public.** The GreenHome Institute, a
   501(c)(3) nonprofit, has final authority over what enters the certifiable
   standard. What this repository adds is visibility: every proposal, argument,
   and decision happens where anyone can read it.
2. **Evidence over authority.** Changes are argued from building science,
   codes, measured results, and field experience — not from who proposes them.
   A homeowner with a well-documented problem outranks an unsupported opinion
   from anyone.
3. **Certifications are stable.** Projects certify against a tagged release.
   Nothing merged to `main` changes what an in-flight project must do.

## Roles

- **Contributors** — anyone. Open issues, join discussions, submit pull
  requests. No membership required.
- **Maintainers** — day-to-day stewards of the repository. Triage issues,
  request evidence, merge editorial changes, keep CI green. Maintainers are
  named in this file when ratified.
- **Standard Committee** — reviews substantive changes and recommends
  ratification. Proposed composition (five seats):
  - Chair: GreenHome Institute staff *(name TBD)*
  - One certified GreenHome Inspector / rater *(name TBD)*
  - One builder or remodeler active in the program *(name TBD)*
  - One building-science or public-health professional *(name TBD)*
  - One at-large seat: homeowner, housing program, or municipal partner *(name TBD)*
- **The Institute's board** — ratifies releases on the Committee's
  recommendation and holds final authority.

## What kind of change is it?

| Class | Examples | Path | Decided by |
|---|---|---|---|
| **Editorial** | Typos, broken links, formatting, clearer wording with identical meaning | Pull request | Maintainer merge |
| **Clarification** | Resolving ambiguity in how a requirement applies; added guidance or examples | Pull request with reasoning | Maintainer merge + Committee review at next meeting |
| **Substantive** | Changing what a project must do: thresholds, new/removed requirements, level changes, new badges | RFC first — see [rfcs/README.md](rfcs/README.md) | Committee recommendation → Institute ratification |
| **Errata** | A published error with health/safety or certification-fairness impact | Fast track — see [ERRATA.md](ERRATA.md) | Institute, out of cycle |

When in doubt, open it as an issue and a maintainer will classify it.

## Cadence

- **Committee review**: quarterly, public minutes posted to Discussions.
- **Releases**: the Institute ratifies accepted substantive changes into a
  numbered manual release **annually each January** (v4.1.0, v5.0.0…), unless
  there is nothing to release. Errata may produce out-of-cycle patch releases
  at any time.
- **Versioning**: releases follow semantic-version spirit — *patch* for errata
  and editorial, *minor* for clarifications and additive badges, *major* when
  the certifiable bar moves.

## Amending this document

Governance changes follow the substantive path: RFC, Committee review,
Institute ratification.
