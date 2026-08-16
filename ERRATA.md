# Errata policy

> **DRAFT — pending ratification by the GreenHome Institute** (see
> [GOVERNANCE.md](GOVERNANCE.md)).

Software projects patch security holes out of cycle; a building standard owes
the same urgency to published errors that could affect **health, safety, or
certification fairness**. This is the promise: such errors do not wait for the
next annual release.

## What qualifies as errata

- **Health/safety**: a published threshold, procedure, or reference that is
  wrong in a way that could harm occupants if followed (e.g., an incorrect
  radon action level, a ventilation rate below code minimums, an outdated
  combustion-safety procedure).
- **Certification fairness**: an error that makes a requirement impossible to
  satisfy as written, self-contradictory, or materially different from what
  the Institute actually verifies — so projects are being judged against text
  that doesn't mean what it says.

Everything else — improvements, tightenings, clarifications — follows the
normal governance paths, no matter how good the idea is.

## How to report

Open a **Requirement problem** issue and select severity
**"Health or safety implication (needs fast-track errata)"**, or email
info@greenhomeinstitute.org with "GreenStar errata" in the subject if the
matter shouldn't be public before review.

## The fast track

1. **Acknowledge** — a maintainer confirms receipt and classification within
   **5 business days**.
2. **Assess** — the Institute (with Committee input as needed) confirms whether
   the report qualifies as errata. If it doesn't, it converts to a normal
   issue with an explanation.
3. **Correct** — confirmed errata are fixed on `main` and published as an
   out-of-cycle **patch release** (e.g., v4.0.1) with a CHANGELOG entry
   explaining the error, the correction, and the effective date.
4. **Notify** — the Institute informs active GreenHome Inspectors and
   in-flight registered projects. Projects mid-certification are assessed
   against the corrected text where the correction is less stringent, and
   given a documented transition where it is more stringent.

## Record

All ratified errata are listed in [CHANGELOG.md](CHANGELOG.md) under their
patch release, permanently — a standard that hides its corrections doesn't
deserve trust in its claims.
