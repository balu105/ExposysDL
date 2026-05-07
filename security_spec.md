# Security Specification for Exposys Data Labs

## Data Invariants
- `contact_submissions`: Anyone can create a message (public form). No reads/updates/deletes allowed for public.
- `project_proposals`: Anyone can submit a proposal (public form with payment). No reads/updates/deletes allowed for public.
- `freelancer_applications`: Anyone can submit an application (public form with payment). No reads/updates/deletes allowed for public.
- `workshop_registrations`: Anyone can register for a workshop (public form). No reads/updates/deletes allowed for public.

## The "Dirty Dozen" Payloads (Denial Tests)

1. **Identity Spoofing**: Attempting to set `submittedAt` to a future date or a plain string instead of server timestamp.
2. **Resource Poisoning**: Sending a 1MB string as `name` in `contact_submissions`.
3. **Ghost Field Injection**: Adding `isVerified: true` to a proposal to try and bypass manual review.
4. **ID Poisoning**: Attempting to create a document with a 2KB-long string ID.
5. **PII Leakage**: Attempting to list all `contact_submissions` as an unauthenticated user.
6. **State Shortcut**: Attempting to update a proposal status to "Approved" directly from the client.
7. **Type Mismatch**: Sending `totalBudget` as a string instead of a number.
8. **Orphaned Write**: Creating a team member without a valid proposal ID (not applicable here as team is nested).
9. **Email Spoofing**: Submitting with an email but without verification (rules should ensure structure).
10. **Shadow Update**: Changing the `paymentId` of an existing proposal.
11. **Budget Overflow**: Sending negative values for budget items.
12. **System Field Tampering**: Overwriting `createdAt` during an update (updates are disabled).

## The Test Runner (Logic Check)
All public writes must pass `isValid[Entity]()` which checks for:
- Required keys exist.
- No unexpected keys.
- Types and sizes are bounded.
- Timestamps are `request.time`.
