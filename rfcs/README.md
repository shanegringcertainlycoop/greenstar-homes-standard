# RFCs — proposing substantive changes to the standard

> **DRAFT — pending ratification by the GreenHome Institute** (see
> [GOVERNANCE.md](../GOVERNANCE.md)).

Small fixes go straight to a pull request. But changes that move the
certifiable bar — new requirements, changed thresholds, level reassignments,
new badges, retired requirements — deserve a written case before anyone argues
over wording. That's an RFC (request for comments), the same mechanism Rust,
Python, and other open projects use to evolve deliberately.

## The process

1. **Discuss first (optional but wise).** Float the idea in
   [Discussions](../../../discussions) to find prior art and early objections.
2. **Write the RFC.** Copy [`0000-template.md`](0000-template.md) to
   `rfcs/0000-my-proposal.md` (leave the number as 0000) and fill it in.
3. **Open a pull request** containing just the RFC file. The PR is the public
   comment period — expect and welcome pushback; revise the RFC in place.
4. **Committee review.** At its next meeting the Standard Committee accepts,
   rejects, or requests changes. Accepted RFCs are merged with the next free
   number and labeled `accepted`.
5. **Implementation.** An accepted RFC becomes one or more pull requests
   editing the actual requirement files, linked back to the RFC.
6. **Ratification.** The change becomes certifiable when the Institute
   publishes it in a numbered release. The CHANGELOG entry links the RFC.

An accepted RFC is a decision *to make the change*, not the change itself.
A rejected RFC stays in the repository history — future proposers should find
it and address why it failed.

## What makes a strong RFC

- A real problem observed in the field, with evidence
- The specific requirement text you propose, written as it would appear
- Honest costs: what it adds to a project budget, and who bears it
- Interaction analysis: which existing requirements, levels, and badges it touches
- What you considered and rejected
