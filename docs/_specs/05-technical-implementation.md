# 05 Technical Implementation

## Stack
- Next.js 15+ App Router
- TypeScript
- Tailwind CSS
- MDX for case studies
- Vercel deployment
- ESLint and Prettier

## Build strategy
- Prefer static rendering everywhere possible
- Keep client JavaScript minimal
- Use server components by default
- Only add client components when interaction genuinely requires it

## Suggested app structure

```text
src/
  app/
    layout.tsx
    page.tsx
    not-found.tsx
    robots.ts
    sitemap.ts
    projects/
      newark-housing/page.tsx
      study-guide-generator/page.tsx
      voice-consultant/page.tsx
  components/
    layout/
    home/
    projects/
    ui/
  content/
    projects/
    site.ts
  lib/
    content/
    seo/
    utils/
  styles/
    globals.css
    tokens.css
```

## Required component set

### Layout components
- `SiteShell`
- `Header`
- `Footer`
- `SkipLink`
- `SectionLabel` or equivalent mono label component

### Home page components
- `HeroBand`
- `TransitionStrip`
- `FeaturedProject`
- `ProjectFeatureBlock`
- `AboutBand`

### Case study components
- `CaseStudyHero`
- `DecisionList`
- `ShippedGallery`
- `LimitationsBlock`
- `TechNotes`
- `NextProjectNav`

### Shared UI components
- `LinkButton`
- `TextLink`
- `ImageFrame`
- `QuoteBlock`
- `MetadataList`

## Content loading
- Store case studies in MDX files keyed by slug
- Store shared site data separately so name, links, email, and about copy stay centralized
- Validate content shape with TypeScript or schema validation
- Make placeholder-friendly content rendering explicit so missing values do not break layout

## Styling strategy
- Tailwind for utilities and layout
- `tokens.css` for CSS custom properties and shared design tokens
- Keep one source of truth for color, spacing, and typography
- No inline styles
- No `!important`
- No CSS-in-JS

## Fonts
- Self-host IBM Plex Sans and IBM Plex Mono
- Use package-based local loading, not Google Fonts CDN
- Preload only what materially helps LCP

## Images and media
- Use Next image optimization where it supports the asset flow cleanly
- Prefer WebP for production assets with PNG fallback where needed
- Lazy-load below-the-fold assets
- Keep image sizes constrained to the performance budget
- Demo video should not autoplay

## SEO and metadata
- Add route-level metadata for home and each case study
- Provide page titles and descriptions that state the project plainly
- Generate sitemap and robots files from the app layer
- Use favicon that matches the brief: simple geometric mark
- Open Graph images can be simple and typographic; do not overdesign them

## Accessibility implementation notes
- Semantic landmarks in app layout and page sections
- Keyboard-visible focus state built into shared link and button styles
- Headings must be authored in order
- Alt text required for non-decorative imagery
- Respect reduced motion in CSS

## Performance guardrails
- Home page total weight target under 300KB
- Case study pages under 500KB
- Avoid third-party scripts unless strictly necessary
- Avoid large UI libraries
- No animation libraries unless a clear need appears later

## Testing and verification targets
- lint
- typecheck
- build
- Lighthouse on production deploy
- manual keyboard pass
- manual mobile viewport checks

## Content-driven routing decision
Use a fixed route set for the three known projects even if content is MDX-backed. This keeps routing simple while still allowing MDX for the case-study body.

## Risks to watch
- building too many reusable abstractions before the layouts exist
- drifting into a generic card-based home page
- overusing accent color or decorative UI
- adding client-side motion that harms performance
- allowing placeholders to collapse layout or read like errors