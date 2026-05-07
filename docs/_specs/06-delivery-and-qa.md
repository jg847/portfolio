# 06 Delivery And QA

## Implementation sequence

### Phase 1: Foundation
- scaffold Next.js app
- add Tailwind, ESLint, Prettier, fonts, and tokens
- build global layout shell
- implement header, footer, skip link, and metadata baseline
- set up content structure for site data and project MDX

### Phase 2: Home page
- implement hero band
- implement transition strip
- build Newark Housing feature spread
- build Study-Guide and Voice Consultant sections
- build about band
- tune desktop and mobile composition

### Phase 3: Case study pages
- build shared case-study layout
- implement all three project pages
- wire next-project navigation
- render tech notes and limitations cleanly

### Phase 4: Assets and polish
- add screenshots, demo media, and favicon
- replace placeholders with real values where available
- tighten spacing, type, and imagery presentation
- review CTA language and voice

### Phase 5: Validation
- run lint, typecheck, and production build
- run Lighthouse on deployed site
- run keyboard and focus pass
- test 360, 768, 1280, and 1920 widths
- run studio review checks from the brief

## Acceptance checklist

### Messaging
- first screen communicates role and work clearly
- no banned words appear in the rendered site
- CTAs use allowed plain-English labels

### Proof
- each project has adjacent proof
- Newark Housing has the strongest proof density
- limitations section exists on every case study page
- exact placeholder tags remain in place where data is missing

### Design
- layout feels editorial and restrained
- no gradients, blur, or decorative effects
- imagery is real and consistent
- asymmetry supports scanning rather than obscuring it

### Accessibility
- one `h1` per page
- semantic landmarks present
- focus styles visible
- contrast passes AA
- reduced motion respected

### Performance
- no heavy client bundle introduced unnecessarily
- fonts are self-hosted
- below-fold media is lazy-loaded
- Lighthouse Performance, Best Practices, and SEO are at least 95 on the production deploy
- Lighthouse Accessibility is 100 on the production deploy

## Studio review checklist
- five-second test
- archetype identification test
- voice check against banned terms
- proof adjacency screenshots at key widths
- CTA audit
- reciprocity click check

## Definition of done
The portfolio is done when:
- the brief requirements are implemented
- the production deploy passes validation, including Lighthouse Performance, Best Practices, and SEO at 95 or higher and Accessibility at 100
- missing real content is either supplied or represented with exact placeholders
- the README explains what the site is, who it's for, how it's built, and what is still missing

## Recommended working order inside the repo
1. global shell
2. home page composition
3. shared project content model
4. case study template
5. per-project content
6. SEO and assets
7. README
8. production validation