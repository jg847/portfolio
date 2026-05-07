# Jeanpaul Garcia Portfolio

This repo holds a personal portfolio site for Jeanpaul Garcia, aimed at a technical co-founder or early-stage hiring manager who wants to understand the role target and the work quickly. The site is built as a restrained editorial portfolio, with a home page, three fixed project routes, and MDX-backed case studies that keep unknown values visible instead of hiding them behind generic copy.

## Live URL

Pending deployment.

## Tech stack

- Next.js 16 App Router for the site shell, routing, metadata, sitemap, robots, and static generation.
- TypeScript for typed content, shared UI, and route-level safety.
- Tailwind CSS v4 plus a small token layer in `src/styles/tokens.css` for the visual system.
- MDX for the case-study bodies.
- Zod for content shape validation.
- IBM Plex Sans and IBM Plex Mono via `@fontsource` for self-hosted typography.
- ESLint and Prettier for code quality and formatting.

## Run locally

```bash
pnpm install
pnpm dev
```

Other useful checks:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Decisions

- I kept the routing fixed to the three known project pages instead of building a broader dynamic content system. That keeps the code easier to read and matches the actual scope of the portfolio.
- I used MDX for the case studies so the long-form sections can stay content-driven without pushing page structure into raw strings or overcomplicated CMS logic.
- I kept placeholder values visible in the UI when real proof is still missing. That is a better tradeoff than filling holes with vague copy or fake examples.
- I split the site into a shared shell, home-page sections, and a shared case-study scaffold so the design can stay consistent while the proof and assets keep changing.
- I kept the visual system dry and restrained: one token file, one global stylesheet, self-hosted fonts, and no decorative effects that slow scanning.

## What's missing

- Main profile GitHub URL: replace `[GITHUB URL]` with the actual profile or repo URL.
- Newark Housing live and source links: replace `[LIVE_URL_HOUSING]` and `[SOURCE_URL_HOUSING]`.
- Study-Guide Generator live and source links: replace `[LIVE_URL_STUDYGUIDE]` and `[SOURCE_URL_STUDYGUIDE]`.
- Voice Consultant demo and source links: replace `[VOICE_DEMO_URL]` and `[SOURCE_URL_VOICE]`.
- Housing proof details: replace `[LISTING_COUNT]`, `[NEIGHBORHOODS_LIST]`, `[USER QUOTE]`, `[USER NAME]`, and `[USER ROLE]`.
- Study-guide proof detail: replace `[STUDY_GUIDE_TOPICS]` with real sample topics.
- About-section personal details: replace `[MAJOR]` and `[STACK]`.
- Case-study proof media: replace the current hero media placeholders with real screenshots or the recorded demo where available.

## Current structure

- `/` for the editorial home page.
- `/projects/newark-housing` for the hero project case study.
- `/projects/study-guide-generator` for the second project case study.
- `/projects/voice-consultant` for the in-progress voice project case study.

## Notes

The site is intentionally placeholder-safe right now. Missing real values stay visible until they can be replaced with actual links, screenshots, numbers, and quotes.