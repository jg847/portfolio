# Phase 01 Foundation

## Goal
Set up the Next.js portfolio repo so later page work happens inside the right architecture, design tokens, and content structure instead of being retrofitted later.

## In scope
- scaffold the Next.js 15 App Router project
- add TypeScript, Tailwind, ESLint, and Prettier
- set up `globals.css` and `tokens.css`
- install and wire IBM Plex Sans and IBM Plex Mono
- create the base app shell
- implement shared header, footer, and skip link
- establish the content/data structure for site data and the chosen fixed-route, MDX-backed project-content approach
- create metadata baseline for the app
- create placeholder-safe content loading patterns

## Out of scope
- full home-page composition
- finished case-study pages
- final screenshots and real media
- final copy replacement for placeholders
- production Lighthouse pass

## Inputs
- `docs/_specs/01-foundation.md`
- `docs/_specs/03-design-system.md`
- `docs/_specs/04-content-model.md`
- `docs/_specs/05-technical-implementation.md`

## Implementation checklist

### Repo and tooling
- create the Next.js app with App Router enabled
- configure TypeScript if not already present
- add Tailwind CSS
- add ESLint and Prettier config files
- confirm no inline styles, no `!important`, and no CSS-in-JS enter the codebase

### Styling foundation
- create `src/styles/tokens.css`
- define the locked color tokens there
- define typography tokens or utilities that map to the brief
- import global styles in the root layout
- wire reduced-motion handling for the allowed fade behavior

### App shell
- create `src/app/layout.tsx`
- create shared `Header`, `Footer`, and `SkipLink` components
- add semantic landmarks in the layout shell
- make the header sticky and minimal
- include footer support for source-on-GitHub link

### Routing and metadata baseline
- create route files for home, not-found, sitemap, and robots
- create the three fixed project routes
- add default metadata scaffolding for the site

### Content plumbing
- create shared site data source
- create project content source structure for the chosen fixed-route, MDX-backed content approach
- define project schema or TypeScript shape
- make placeholder strings render cleanly without breaking layout

## Deliverables
- running Next.js app scaffold
- working global layout shell
- reusable site chrome components
- design-token foundation in CSS
- content/data structure ready for page implementation

## Validation during this phase
- app runs locally without errors
- lint passes
- typecheck passes
- production build passes
- root layout renders with skip link, header, main, and footer
- fonts load from local/package setup, not a remote CDN
- placeholder values do not crash rendering

## Exit criteria
- the repo architecture matches the technical spec
- shared shell components are stable enough to reuse across all pages
- the design system has a single CSS source of truth in place
- the content model exists and is ready for home and case-study rendering
- no architectural decisions from later phases need to be pulled forward to continue