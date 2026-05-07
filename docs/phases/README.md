# Implementation Phases

This folder breaks the build into implementation phases we can execute in order.

Use these files as the working plan while building:

1. `01-foundation.md`
2. `02-home-page.md`
3. `03-case-studies.md`
4. `04-assets-and-polish.md`
5. `05-validation-and-ship.md`

How to use them:

- Treat each phase file as an execution checklist, not just a summary.
- Finish the exit criteria of the current phase before moving to the next one.
- If a later phase is blocked by missing real content, keep moving with exact placeholders from the brief.
- The specs in `docs/_specs` remain the source of truth when a phase plan is too compressed.

Working order:

1. build the app shell and content plumbing
2. build the home page composition
3. build the three case-study pages
4. add final media and polish visual/details
5. run production validation and ship checks

Definition of success for this folder:

- each phase has a clear goal
- each phase states what is in and out of scope
- each phase includes explicit validations
- each phase ends with concrete exit criteria
- the full set can be used directly during implementation without reopening the brief for every decision