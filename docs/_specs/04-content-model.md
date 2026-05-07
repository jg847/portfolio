# 04 Content Model

## Content strategy
The site should read like a real person explaining real work. Copy exists to support the proof, not overshadow it.

## Global content rules
- Do not invent content
- Use exact placeholder tags from the brief when data is missing
- Keep sentences short and plain
- Avoid banned words and generic portfolio phrases
- Keep proof specific: numbers, places, decisions, limits

## Placeholder inventory
Use these exact strings when real data is missing:

- `[LAST NAME]`
- `[GITHUB URL]`
- `[LINKEDIN URL]`
- `[HEADSHOT URL]`
- `[MAJOR]`
- `[STACK]`
- `[LISTING_COUNT]`
- `[NEIGHBORHOODS_LIST]`
- `[USER NAME]`
- `[USER ROLE]`
- `[USER QUOTE]`
- `[STUDY_GUIDE_TOPICS]`
- `[VOICE_DEMO_URL]`
- `[LIVE_URL_HOUSING]`
- `[LIVE_URL_STUDYGUIDE]`
- `[SOURCE_URL_HOUSING]`
- `[SOURCE_URL_STUDYGUIDE]`
- `[SOURCE_URL_VOICE]`

## Home page content model

### Header
- display name
- work anchor link
- about anchor link
- email CTA

### Hero
- full name
- role line
- current status line
- project quick-links
- optional right-column note

### Project blocks
Each project block should support:
- slug
- title
- one-line description
- status
- primary CTA label and URL
- secondary CTA label and URL
- hero image
- hero image alt text
- proof detail line
- optional quote block
- optional supporting metadata

### About band
- paragraph copy
- email
- GitHub URL
- optional headshot URL
- optional LinkedIn URL

## Case study content model
Each case study should support:
- slug
- title
- one-line summary
- live/demo URL
- source URL
- hero image
- hero image alt text
- problem paragraph
- three decisions
- shipped artifacts list
- limitations paragraph
- tech notes object
- next project slug

### Tech notes shape
Tech notes should be structured so required fields cannot be omitted accidentally.

Required fields:
- stack
- model
- hosting
- cost

Optional field:
- additional implementation note

### Decision item shape
Each decision should include:
- title
- context
- reason for change or choice
- outcome or tradeoff

## Suggested content source structure
Use a content-driven setup so the UI can map over data consistently.

Suggested shape:

- `src/content/site.ts` or equivalent for global site data
- `src/content/projects/*.mdx` for case studies
- `src/content/home-projects.ts` or derived metadata for home page feature blocks

## Voice guardrails
Do not use:
- hype language
- generic mission statements
- empty adjectives
- vague future-facing filler

Prefer:
- specifics
- tradeoffs
- ordinary language
- honest limitations

## Asset checklist
Needed before final polish:
- housing hero screenshot
- study-guide screenshot
- voice consultant demo or screenshots
- optional headshot
- favicon source
- real testimonial for housing, if available
- real listing count and neighborhoods

## Content dependencies to resolve or represent with placeholders
- GitHub URL
- live housing URL
- live study-guide URL
- voice demo URL
- housing source URL
- study-guide source URL
- voice consultant source URL
- major
- stack wording
- any real testimonial data

If any of these are still missing at ship time, render the exact placeholder tags from the brief instead of inventing content or blocking the release.