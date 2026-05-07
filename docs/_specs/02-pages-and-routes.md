# 02 Pages And Routes

## Route map

- `/`: home page
- `/projects/newark-housing`: hero case study
- `/projects/study-guide-generator`: secondary case study
- `/projects/voice-consultant`: in-progress case study
- Next.js `not-found.tsx`: minimal not-found experience returning the 404 response
- `/robots.txt`
- `/sitemap.xml`
- `/favicon.ico`

## Shared shell requirements

### Header
- Sticky, 64px tall
- Contains name, work link, about link, and email CTA
- Keeps active-state treatment on project pages
- Must remain minimal and not become a utility bar

### Footer
- Contains name, year, and source-on-GitHub link
- Project pages include a next-project link
- Tone stays plain and light

### Accessibility shell
- Include skip link
- Semantic landmarks on every page
- One `h1` per page
- Keyboard-visible focus states everywhere

## Home page spec

### Goal
Make the role and the work legible immediately, then move the viewer from hero statement into proof.

### Section order
1. Header
2. Hero band
3. Transition strip
4. Project 1 feature spread
5. Project 2 proof block
6. Project 3 proof block
7. About band
8. Footer

### Hero band
Left-heavy composition by default.

Required content:
- name
- role statement
- one-line current status
- quick-links to the three project sections

Optional right-side content:
- quiet mono note
- location or status line
- intentional empty space if that scans better

What the hero must not include:
- badges
- stats wall
- social icon cluster
- decorative illustration
- extra CTA clutter

### Transition strip
A short mono-labeled bridge from claim to proof.

Purpose:
- reset pacing
- cue that live work follows
- make the first project feel intentional rather than abruptly stacked

### Project 1: Newark Housing
This is the feature spread on the home page.

Required elements above the fold of that section:
- large screenshot
- project title
- one-line description
- primary CTA: `Try the bot`
- secondary CTA: `See the case study`
- proof block with listing count and neighborhoods
- testimonial block if real quote exists, otherwise visible placeholders

Layout note:
- this block carries the most visual weight on the page
- image and proof should read as one unit

### Project 2: Study-Guide Generator
Required elements:
- screenshot
- project title
- one-line description
- primary CTA: `Generate a study guide`
- secondary CTA: `See the case study`
- one concrete proof detail using real data or placeholders
- proof must remain adjacent to the title and CTA block within the same screen-fold as the project name

Layout note:
- quieter than project 1
- still custom-composed, not a generic repeating card

### Project 3: Voice Consultant
Required elements:
- screenshot or demo preview
- project title
- one-line description
- primary CTA: `Watch the demo`
- secondary CTA: `See the case study`
- visible `in progress` status in restrained mono text
- one concrete proof detail or artifact, likely demo video or screenshots
- proof must remain adjacent to the title and CTA block within the same screen-fold as the project name

Layout note:
- same visual system as other project sections
- must not feel unfinished just because the product is in progress

### About band
Required elements:
- one paragraph, 100 to 150 words
- email line
- GitHub line
- optional headshot only if it helps the composition

Layout note:
- should feel quieter after the project sections
- can be two-column on larger screens

## Case study page spec

### Goal
Show that the work is real, the decisions were intentional, and the limitations are understood.

### Required section order
1. Header
2. Intro block with title, description, `Try it` or demo CTA, `Source on GitHub` link, and hero screenshot
3. Problem
4. Decisions
5. What shipped
6. Limitations
7. Tech notes
8. Footer with next project link

### Decisions section
- exactly 3 decisions
- each decision title written in plain English
- each entry about 3 sentences
- must explain tradeoffs, not just features

### Limitations section
- must be visible on every case study page
- names what does not work well yet
- no vague future-roadmap filler

### Tech notes section
Mono-formatted summary of:
- stack
- model
- hosting
- cost
- any relevant implementation note that helps credibility

## 404 page spec
- minimal
- on-voice
- one clear action back to useful content
- no jokes that dilute the brand

## CTA inventory
Allowed button and link language:
- `Try the bot`
- `Generate a study guide`
- `Watch the demo`
- `Email me`
- `Source on GitHub`
- `See the code`
- `See the case study`

Do not introduce generic CTA language such as:
- `Learn more`
- `Get in touch`
- `Let's chat`
- `Discover`
- `Explore`