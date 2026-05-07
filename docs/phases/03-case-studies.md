# Phase 03 Case Studies

## Goal
Build the three project pages so they prove the work is real, show decision-making clearly, and surface limitations honestly.

## In scope
- shared case-study page structure
- `/projects/newark-housing`
- `/projects/study-guide-generator`
- `/projects/voice-consultant`
- next-project navigation
- tech notes presentation
- limitations visibility on every case study

## Out of scope
- final asset replacement if media is still pending
- final Lighthouse optimization pass
- README polish

## Inputs
- `docs/_specs/02-pages-and-routes.md`
- `docs/_specs/04-content-model.md`
- `docs/_specs/05-technical-implementation.md`

## Implementation checklist

### Shared case-study template
- build the intro block with title, summary, CTA row, and hero screenshot
- include `Try it` or demo CTA plus `Source on GitHub`
- build reusable sections for Problem, Decisions, What Shipped, Limitations, Tech Notes, and Next Project
- keep the text column readable and within prose width constraints

### Newark Housing page
- implement the hero project case study first
- make the proof strongest here
- render listing/testimonial placeholders exactly if real values are missing
- ensure limitations are specific and visible

### Study-Guide Generator page
- implement the second project using the same system
- keep the proof concrete even if values are placeholders
- ensure the decision entries explain tradeoffs instead of restating features

### Voice Consultant page
- implement the in-progress project with a demo-first proof treatment
- keep `in progress` visible and restrained
- support demo media cleanly without autoplay
- preserve the same credibility pattern as the other case studies

### Tech notes and next-project nav
- render structured tech notes with stack, model, hosting, and cost
- add optional implementation note only if it helps credibility
- wire footer next-project navigation across all three pages

## Deliverables
- three working case-study routes
- shared case-study layout and reusable supporting components
- visible limitations section on every project page
- structured tech notes on every project page

## Validation during this phase
- each case-study page has one `h1`
- intro block contains the required CTA pair and hero media
- every case-study page has exactly 3 decisions
- limitations section is present and not buried
- tech notes include stack, model, hosting, and cost on every case-study page
- exact placeholder tags remain visible where case-study values are still unknown
- next-project links work
- no banned CTA language appears

## Exit criteria
- all project routes render cleanly
- each page communicates problem, decisions, shipped work, and limitations
- the shared template is stable enough that remaining changes are content and polish, not structure
- the case-study set reinforces the home page instead of contradicting it