# Phase 02 Home Page

## Goal
Build the home page so Maya can understand the role and the work immediately, then move from claim into proof without the page collapsing into a generic landing page.

## In scope
- hero band
- transition strip
- Newark Housing feature spread
- Study-Guide Generator block
- Voice Consultant block
- about band
- home-page-only composition tuning across desktop and mobile

## Out of scope
- full case-study internals
- final real screenshots if not available yet
- final real testimonial or listing data if not available yet
- final production performance tuning

## Inputs
- `docs/_specs/02-pages-and-routes.md`
- `docs/_specs/03-design-system.md`
- `docs/_specs/04-content-model.md`

## Implementation checklist

### Hero band
- implement the name, role line, and current-status line
- add the three mono quick-links
- keep the first screen sparse and readable
- leave the right side quiet if extra content weakens scanning

### Transition strip
- add the mono-labeled bridge between hero and project proof
- keep it visually light and structurally useful

### Project 1 feature spread
- implement the largest image-led layout on the page
- include `Try the bot` and `See the case study`
- place proof directly adjacent to the project title and CTA area
- render listing and testimonial placeholders exactly when real data is missing

### Project 2 section
- implement a quieter but still custom-composed layout
- include `Generate a study guide` and `See the case study`
- include screenshot plus one concrete proof detail
- keep proof adjacent to the title and CTA block within the same screen-fold as the project name

### Project 3 section
- implement screenshot or demo preview treatment
- include `Watch the demo` and `See the case study`
- render `in progress` in restrained mono type
- keep proof adjacent to the title and CTA block within the same screen-fold as the project name

### About band
- render the 100 to 150 word paragraph
- include email and GitHub lines
- add optional headshot only if it improves composition
- make the section feel quieter than the project bands

## Deliverables
- complete home page at `/`
- all home-page sections render with real content or exact placeholders
- CTAs use only approved labels
- home page composition reads as editorial and restrained

## Validation during this phase
- home page has one `h1`
- no horizontal scroll at 360px width
- all three project blocks keep proof adjacent to the title and CTA block within the same screen-fold as the project name
- exact placeholder tags remain in place where values are unknown
- no banned words appear in the rendered home page
- keyboard navigation works through all home-page interactive elements
- quick five-second scan of the page clearly communicates role and at least one project

## Exit criteria
- the home page is structurally complete
- the first screen communicates the core promise cleanly
- Newark Housing clearly reads as the hero project
- Projects 2 and 3 feel designed, not like repeated cards
- the page is ready to link into fully built case studies