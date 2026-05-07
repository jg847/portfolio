# Phase 05 Validation And Ship

## Goal
Verify the built site against the brief and declare it done only when the production deploy passes the required quality gates.

## In scope
- lint, typecheck, and production build
- production deploy validation
- Lighthouse checks
- accessibility checks
- mobile and breakpoint checks
- studio review checks
- README completion

## Out of scope
- new feature work
- redesigning page structure unless validation reveals a failing requirement

## Inputs
- `docs/_specs/06-delivery-and-qa.md`
- `docs/_specs/07-open-questions.md`
- `brief.md`

## Validation checklist

### Engineering checks
- run lint
- run typecheck
- run production build
- confirm the final route set is correct

### Lighthouse checks on production deploy
- Performance >= 95
- Best Practices >= 95
- SEO >= 95
- Accessibility = 100

### Accessibility checks
- keyboard pass across the full site
- visible focus states everywhere
- heading hierarchy review
- alt text review
- reduced-motion review

### Responsive checks
- check 360, 768, 1280, and 1920 widths
- confirm no horizontal scroll
- confirm tap targets remain at least 44x44
- confirm proof adjacency survives at all required widths

### Voice and proof checks
- search rendered HTML for banned words
- review CTA inventory against the approved list
- verify every project shows proof near its title
- verify every case study has a visible Limitations section that names what the project does not do well
- verify placeholders remain exact where data is missing

### README checks
- confirm README explains what the site is
- confirm README explains who it is for
- confirm README explains how it is built
- confirm README includes the live URL
- confirm README includes local run instructions
- confirm README includes a `Decisions` section
- confirm README includes a `What's missing` section

## Ship criteria
The site ships only when:
- the production deploy passes the Lighthouse thresholds
- the home page passes the five-second test standard
- the archetype reads as careful, honest, and shows the work
- the reciprocity check is met for at least the hero project
- the README is complete enough to act as authority proof
- any missing real values are shown with exact placeholders, not invented substitutes

## Failure handling
If this phase finds a failure:
- fix the smallest slice that addresses the failing requirement
- rerun the narrowest relevant check first
- rerun the production validation if the failure affects ship criteria

## Final output of this phase
- production-ready portfolio
- verified deploy URL
- completed README
- recorded ship checklist results