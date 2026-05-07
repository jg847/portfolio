# Build Brief — Jeanpaul Portfolio Site

A complete, hand-to-an-agent specification for building a personal portfolio site for an aspiring AI Product Engineer. This brief is the contract: every decision below is locked. The agent's job is to execute, not to redesign.

---

## 0. How to use this brief

Hand this entire document to a coding agent (Claude Code, Cursor, etc.) along with a single instruction: *"Read this brief end-to-end before writing code. Then build the site exactly as specified. Use clearly-marked [PLACEHOLDER] tags for any value that isn't provided. Do not invent content."*

The brief is intentionally opinionated. Sections labeled **Locked** must not be changed. Sections labeled **Configurable** can be adjusted, but only with a written justification.

---

## 1. Project context (Locked)

**Owner.** Jeanpaul Garcia, undergraduate at New Jersey Institute of Technology (NJIT). Email: `jg847@njit.edu`.

**Goal.** A personal portfolio site that converts one specific reader from "tab-scanning my candidate list" into "I want to talk to this person" inside 60 seconds.

**Stage.** Intermediate. The site must look and feel like work shipped by a serious junior engineer with taste — not by an established senior, and not by a bootcamp template.

**Reading audience (the one specific person the site is written for).**
A technical co-founder at a seed or Series A startup hiring product-minded engineer. She is on her laptop between meetings, burning through 25–50 portfolios in one session, 10-20 seconds per tab.

**The promise (above-the-fold claim).**
*"I build useful AI tools and ship them."*

Everything on the site exists to make that claim believable in under ten seconds.

---

## 2. The four locked decisions from prior steps

### 2.1 Vibe — Creator-structured, Everyman-voiced (Locked)

**Creator runs the structure.** Process is visible. Every project shows the made thing, the decisions behind it, what was tried, what was cut. The proof is the work itself, not credentials.

**Everyman runs the voice.** Plain-spoken, first-person, no marketing-ese, no posturing. The site reads like a real person typing in their own voice — like a careful Craigslist listing from a real carpenter, not a personal-brand consultant.

**Shadow to avoid.** Everyman dominating the *visuals* through friendly lifestyle cues, cozy branding, staged personality photography, or illustration-heavy treatment tips the site into "tutor" or "wellness coach" register. Creator structure must hold the visuals; Everyman is voice-only.

### 2.2 Look — Creator structure with Editorial Luxury layout (Locked)

Modern neo-grotesque type, monospace accents, off-white background, single muted accent color, and a strict underlying grid. The layout should borrow from editorial luxury: deliberate pacing, generous whitespace, strong image-to-copy rhythm, and a more composed page silhouette than a default SaaS landing page. Visually adjacent to: Vercel, Anthropic, Aesop's restraint, and high-end editorial product pages — but with plain-spoken copy on top instead of brand theater.

**Important constraint:** Editorial Luxury applies to layout rhythm and composition, not ornament. It must still read fast, feel engineered, and preserve the Creator + Everyman balance.

**One direction explicitly ruled out:** Brutalist Interface (loud, hostile to scanning).

### 2.3 Proof — three chatbot projects, ordered (Locked)

1. **Newark Housing Chatbot** — hero project. 
2. **Study-Guide Generator** — second project. 
3. **Voice Consultant** — third project. ]

### 2.4 Persuasion moves used — and not used (Locked)

**Used:** Authority-through-work (visible decisions and method notes), Reciprocity (clickable live apps, no email gates), Social Proof (specific real quotes from real users), Liking (plain-spoken voice).

**Not used:** Scarcity (no fake urgency), claimed Authority (no fake credentials), decorative adjectives ("innovative," "cutting-edge," "powerful").

---

## 3. Role (for the agent)

Act as a senior front-end engineer building a personal portfolio for a junior AI product engineer. You produce production-ready, accessible, fast-loading code. You write copy in the brand's locked voice. You do not invent features, achievements, content, quotes, numbers, or claims. Where data is missing, you insert clearly-marked `[PLACEHOLDER]` tags and continue.

You are not a designer adding flourishes. You are an engineer executing a fixed spec.

---

## 4. Scope

### 4.1 Build

- **Home page** (`/`)
- **Three project case study pages**:
  - `/projects/newark-housing`
  - `/projects/study-guide-generator`
  - `/projects/voice-consultant`
- **Not-found experience** (implemented with Next.js `not-found.tsx`, serving the 404 response) — minimal, on-voice
- `robots.txt`, `sitemap.xml`, `favicon.ico` (use a simple geometric mark, not a photo)
- `README.md` for the repo (audience: Maya looking at the source code)

### 4.2 Do not build

- Blog
- Newsletter signup or email capture form
- Contact form (use a `mailto:` link)
- Dark mode toggle (out of scope for v1)
- Analytics that requires consent banners
- Any "share to social" buttons
- Any third-party chat widget
- Loading screens, splash pages, or hero animations

---

## 5. Tech stack (Configurable, with default)

**Default stack:** Next.js 15+ App Router with TypeScript, Tailwind CSS, MDX for case studies, and deployment on Vercel.

Why Next.js: it is the requested framework, fits a portfolio that mixes static content with polished routing and metadata, works cleanly with MDX case-study pages, and is easy to deploy and maintain on Vercel.

**Appropriate stack details:**
- Next.js App Router with static rendering wherever possible
- TypeScript
- Tailwind CSS
- MDX for long-form project write-ups
- Vercel for deployment
- ESLint + Prettier

**Acceptable alternative:** None unless the owner changes the brief in writing.

**Do not use:** WordPress, Wix, Squarespace, page-builders, plain HTML without a build system, or any framework that adds >100KB of client JS for a static portfolio.

**Required dev hygiene:**
- Versioned in a public GitHub repo
- TypeScript on
- Prettier + ESLint configured
- One single CSS source of truth (Tailwind config + a small `tokens.css`)
- No inline styles, no `!important`, no CSS-in-JS

---

## 6. Constraints

### 6.1 Voice and tone (Locked)

**Allowed:**
- Plain-spoken first-person
- Short declarative sentences
- Occasional sentence fragments for rhythm
- Em-dashes used sparingly
- Specific numbers, specific places, specific decisions

**Banned words and phrases (do not use anywhere on the site):**
- "innovative," "cutting-edge," "powerful," "robust," "scalable," "leverage," "synergy," "passionate about," "crafting," "delightful," "best-in-class," "world-class," "next-generation," "transform," "revolutionize," "seamless," "intuitive"
- "I'm a developer who loves..."
- "Welcome to my portfolio"
- "Let's connect," "Get in touch," "Reach out"
- "Currently seeking opportunities"
- "Stay tuned"

**Banned formatting:**
- Emojis anywhere on the site
- Exclamation marks (zero, site-wide, except in real quoted user content)
- ALL CAPS for emphasis
- Animated text, typewriter effects

**Honesty rules (Locked):**
- Do not invent quotes, numbers, achievements, traffic, users, or claims
- If a value is missing, use a clearly-marked `[PLACEHOLDER]` tag
- Do not write a "fake" testimonial as filler — leave the slot empty until a real one exists
- Limitations and what doesn't work must be visible on each case study page

### 6.2 Visual system (Locked)

**Type.**
- Display + body: **IBM Plex Sans** (`@fontsource/ibm-plex-sans` — weights 400, 600, 700)
- Technical metadata: **IBM Plex Mono** (weight 400 only)
- No third typeface

**Type scale (rem on a 16px base):**
- H1: 3.5rem / 56px / line-height 1.05 / weight 700 / letter-spacing -0.02em
- H2: 1.75rem / 28px / line-height 1.2 / weight 600
- H3: 1.25rem / 20px / line-height 1.3 / weight 600
- Body: 1.0625rem / 17px / line-height 1.55 / weight 400
- Small: 0.875rem / 14px / line-height 1.45
- Mono caption: 0.8125rem / 13px / line-height 1.4 / weight 400 / letter-spacing 0

**Color tokens (commit to these in CSS):**

```css
:root {
  --bg:         #FAFAF8;  /* page background, off-white */
  --ink:        #0F0F0F;  /* primary text */
  --accent:     #4A7C59;  /* moss green; links, tags, small emphasis */
  --accent-dk:  #3F6B4C;  /* darker moss for body-text link contrast */
  --muted:      #6B6B6B;  /* metadata, captions */
  --hairline:   #E8E6E0;  /* dividers, card borders */
  --hover:      #F2F0EA;  /* subtle hover background */
}
```

No additional colors. No gradients. No semi-transparent overlays. No blur filters.

**Color usage rules.**
- The page should read mostly as `--bg` and `--ink`, with `--accent` used sparingly for links, tags, active states, and small moments of emphasis
- Do not build large accent-colored panels or tinted section backgrounds; the premium feel should come from restraint, not color blocking
- Let `--hairline` do more work than filled surfaces: dividers, frames, image edges, and quiet structural boundaries
- `--muted` is for metadata only. Do not use it for long paragraphs or anything critical to comprehension
- The overall impression should be dry, calm, and expensive in the editorial sense, not branded, playful, or app-marketing heavy

**Spacing.**
8px base unit. Use only this scale: `4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128`. No other values.

**Spacing rhythm.**
- Default to more breathing room than a typical SaaS landing page
- Use `128` and `96` for major section separations, especially from hero to first project and between major home-page bands
- Use `64` and `48` for internal section structure, image-to-copy relationships, and case-study subsections
- Use `24` and `16` for compact UI spacing only: navigation, metadata rows, buttons, and tags
- Avoid stacking too many equal gaps in sequence; vary spacing deliberately so the page feels composed rather than templated

**Layout.**
- 12-column grid on desktop (≥ 1024px), gutter 24px
- Max content width 1120px, centered
- Prose width capped at 680px (case study text columns)
- Project galleries can extend wider (up to 1120px)
- Editorial Luxury layout rhythm: asymmetric section pacing is allowed, but scanning must stay easy and the grid must remain visible underneath
- Use composition, whitespace, and image scale to create the premium feel instead of extra decoration
- Prefer a few strong compositional moves per page: offset image-and-copy pairings, deliberate empty space, and clear banding between sections
- Do not let asymmetry obscure hierarchy. Maya should still understand the page in one fast top-to-bottom pass

**Imagery.**
- Imagery should feel precise, quiet, and editorial. It exists to support the work, not to decorate the page.
- Prioritize large, well-cropped product screenshots with clean negative space around them
- Real product screenshots only for project proof (PNG or WebP)
- Consistent framing: same device frame across projects, same aspect ratio per type (UI shots 16:10, mobile 9:16)
- Screenshots may be shown full-bleed within the content column or in disciplined asymmetrical layouts, but alignment must still resolve to the grid
- Simple borders: 1px `--hairline`; shadows, if used at all, must be extremely faint and structural rather than atmospheric; no rounded corners > 8px
- Process artifacts (wireframes, sketches, diagrams, notes) are welcome where they earn their place and should be treated like archival inserts, not stickers
- Allowed photography: one optional headshot only, off-white or similarly neutral background, no filter, square or near-square crop, direct and restrained rather than casual or lifestyle-driven
- If a headshot is absent, the layout should still feel complete without replacing it with filler imagery

**Banned visual patterns:**
- Glassmorphism, frosted glass, backdrop blur
- Gradients of any kind
- Dark hero with neon accents
- Autoplay video, parallax scroll, scroll-jacking
- Hero illustrations, mascots, cartoon characters
- Stock photography
- Lifestyle photography, desk-flatlay filler, coffee-shop portraits, or any image used only to imply taste
- Decorative emojis
- Floating chat widgets

**Motion.**
- Subtle fades on initial paint (≤ 200ms)
- Underline-on-hover for links
- Project card hover: background shifts to `--hover`, no transform
- That is the entire motion budget. No more.

### 6.3 Accessibility (Locked)

- WCAG AA contrast minimum on all text. Use `--accent-dk` for body-sized links (~17px) to maintain contrast on `--bg`.
- All non-decorative images have meaningful `alt` text
- Decorative images use `alt=""`
- Keyboard-navigable end to end with visible focus states (2px solid `--accent`, 2px offset)
- Semantic HTML: `<header>`, `<main>`, `<article>`, `<section>`, `<footer>`. No `<div>`-only structures.
- Heading hierarchy: one `<h1>` per page, no skipped levels
- Skip-to-main-content link for keyboard users
- `prefers-reduced-motion` disables fades

### 6.4 Performance budget (Locked)

- Lighthouse Performance ≥ 95 on home page
- Lighthouse Accessibility = 100
- Lighthouse Best Practices ≥ 95
- LCP < 1.5s on a clean 4G connection
- Total page weight < 300KB on home, < 500KB on case study pages
- Zero render-blocking third-party scripts
- Images served as WebP with PNG fallback, lazy-loaded below fold
- Self-host fonts via `@fontsource/ibm-plex-sans` and `@fontsource/ibm-plex-mono`. No Google Fonts CDN.

### 6.5 Mobile (Locked)

- Site fully usable at 360px viewport width
- No horizontal scroll at any breakpoint
- Tap targets ≥ 44×44px
- Type stays at body-readable sizes (16–17px) on mobile

---

## 7. Page structure

### 7.1 Home page (`/`) — section by section

```
┌─────────────────────────────────────────────────┐
│ HEADER (sticky, 64px tall)                      │
│ Jeanpaul [LAST NAME]    work · about · email →  │
├─────────────────────────────────────────────────┤
│                                                 │
│ HERO BAND (above the fold)                      │
│                                                 │
│ Left 7 cols:                                    │
│ Jeanpaul [LAST NAME].                           │
│ AI product engineer. I build small, useful      │
│ AI tools and ship them.                         │
│                                                 │
│ Currently at NJIT, building in public.          │
│                                                 │
│ housing bot · study-guide · voice consultant    │
│                                                 │
│ Right 5 cols:                                   │
│ short mono note / availability / location       │
│ or left intentionally quiet if that scans       │
│ better                                          │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│ TRANSITION STRIP                                │
│ mono label + one plain line:                    │
│ Each one is live. You can try it now. ↓         │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│ PROJECT 1 — Newark Housing (HERO)               │
│                                                 │
│ Large image-led layout.                         │
│                                                 │
│ Left or top:                                    │
│ [SCREENSHOT: chat flow, 16:10]                  │
│                                                 │
│ Right or bottom block:                          │
│ Newark Housing                                  │
│ A chatbot that helps NJIT students and recent   │
│ grads find housing in Newark.                   │
│                                                 │
│ [Try the bot →]   [See the case study →]        │
│                                                 │
│ Indexed [LISTING_COUNT] active listings across  │
│ [NEIGHBORHOODS_LIST].                           │
│                                                 │
│ "[USER QUOTE]"                                  │
│ — [USER NAME], [USER ROLE]                      │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│ PROJECT 2 — Study-Guide Generator               │
│ Same system, but with a quieter asymmetrical    │
│ layout. Keep proof adjacent and visible.        │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│ PROJECT 3 — Voice Consultant (in progress)      │
│ Same system, demo video instead of live app.    │
│ Mark "in progress" in restrained mono type.    │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│ ABOUT BAND                                      │
│ Two-column composition if space allows:         │
│ one prose block + one optional headshot or      │
│ quiet contact block                             │
│                                                 │
│ Email: jg847@njit.edu                           │
│ GitHub: [GITHUB_URL]                            │
│                                                 │
├─────────────────────────────────────────────────┤
│ FOOTER                                          │
│ Jeanpaul [LAST NAME] · 2026 · source on GitHub  │
└─────────────────────────────────────────────────┘
```

**Home-page composition notes.**
- The home page should feel like an editorial profile with product proof embedded into it, not a generic startup landing page
- Let the hero breathe. Do not crowd the first screen with cards, badges, or decorative UI
- Project 1 should feel like the feature spread: largest image, strongest proof, most visual weight
- Projects 2 and 3 can be slightly quieter, but they must still feel designed, not collapsed into identical cards
- Use asymmetry across sections, not chaos within sections

**Hero copy template (verbatim):**

> Jeanpaul Garcia.
> AI product engineer. I build useful AI tools and ship them.
> Currently at NJIT, building in public.

**Hero quick-links: three monospaced text links separated by middle dots, anchoring to the three project sections.**

### 7.2 Project case study pages — section by section

Each `/projects/<slug>` page follows this structure:

```
┌─────────────────────────────────────────────────┐
│ HEADER (same as home, with active state)        │
├─────────────────────────────────────────────────┤
│                                                 │
│ PROJECT TITLE                                   │
│ One-line description.                           │
│                                                 │
│ [Try it →]   [Source on GitHub →]               │
│                                                 │
│ [HERO SCREENSHOT]                               │
│                                                 │
├─────────────────────────────────────────────────┤
│ PROBLEM                                         │
│ One paragraph, plain language.                  │
├─────────────────────────────────────────────────┤
│ DECISIONS                                       │
│ 3 specific decisions, ~3 sentences each.        │
│ Each titled with the decision in plain English. │
├─────────────────────────────────────────────────┤
│ WHAT SHIPPED                                    │
│ Sample outputs / screenshots / demo video.      │
├─────────────────────────────────────────────────┤
│ LIMITATIONS                                     │
│ One paragraph, honest about what doesn't work.  │
├─────────────────────────────────────────────────┤
│ TECH NOTES                                      │
│ Mono-formatted: stack, model, hosting, cost.    │
├─────────────────────────────────────────────────┤
│ FOOTER (with link to next project)              │
└─────────────────────────────────────────────────┘
```

---

## 8. Acceptance criteria

The build is not done until all of these pass:

1. **Five-second test.** A stranger looking at the home page for five seconds can correctly state (a) what role this person is targeting and (b) at least one specific thing they have built.
2. **Proof adjacency.** Every project block has its proof — live link, screenshot, and one specific number or quote — visible within the same screen-fold as the project name.
3. **Voice consistency.** No banned words appear anywhere on the site. Every paragraph could plausibly come from a real undergraduate, not a template.
4. **CTA discipline.** Every action button is a verb in plain English. Specifically allowed: "Try the bot," "Generate a study guide," "Watch the demo," "Email me," "See the code," "See the case study." Specifically banned: "Learn more," "Get in touch," "Let's chat," "Discover," "Explore."
5. **Performance.** Lighthouse score ≥ 95 across Performance, Best Practices, SEO. Accessibility = 100. Run on the production deploy, not localhost.
6. **Mobile.** Site is fully usable at 360px width. No horizontal scroll at any breakpoint. All tap targets ≥ 44×44px.
7. **Placeholder discipline.** Where any value is unknown — last name, GitHub URL, real user quote, listing count — the page contains a clearly-marked `[PLACEHOLDER]` tag. No invented data anywhere.
8. **Repository quality.** GitHub repo has a serious README that explains what the site is, who it's for, and how it's built. Maya may open the repo. The README is half the authority proof.
9. **Honesty surface.** Every case study page has a visible "Limitations" section that names something the project does not do well. No exceptions.

---

## 9. Examples (the most important section)

### 9.1 Acceptable hero copy

> Jeanpaul Garcia. AI product engineer. I build useful AI tools and ship them. Currently at NJIT, building in public.

### 9.2 Unacceptable hero copy

> Hi! 👋 I'm a passionate AI engineer crafting cutting-edge solutions at the intersection of technology and impact. Welcome to my portfolio!

### 9.3 Acceptable project description

> A chatbot that helps NJIT students and recent grads find housing in Newark. It indexes [LISTING_COUNT] active listings across the Ironbound, University Heights, Ferry Street, and Downtown neighborhoods, and answers questions like "show me 2BR under $1800 within 15 minutes of campus."

### 9.4 Unacceptable project description

> Leveraging cutting-edge AI to revolutionize the housing search experience for students. Powered by state-of-the-art language models for unparalleled accuracy.

### 9.5 Acceptable case study "decisions" entry

> **Switched from raw scraping to a hybrid pipeline.**
> I started by scraping Craigslist directly. The data was stale within 12 hours and roughly 30% of listings were duplicates or scams. I switched to pulling from a verified-listings API and supplementing it with a smaller scraped feed, flagged in the UI as "unverified." That cut the false-positive rate to under 5% in my own testing.

### 9.6 Unacceptable case study entry

> Using state-of-the-art retrieval techniques, I built a powerful, robust system that delivers accurate, scalable housing recommendations to delighted users.

### 9.7 Acceptable limitations section

> The bot only covers Newark right now — Jersey City and Hoboken would be the next addition but the listing pipelines are different in each city, so I left it scoped. Listings refresh once a day, which means a unit posted this morning may not appear until tomorrow. The bot does not handle photos yet; it answers in text only.

### 9.8 Unacceptable limitations section

> *(section omitted, or filled with "future enhancements include...")*

### 9.9 Acceptable about paragraph

> I'm a junior at NJIT studying [MAJOR]. I got into AI because I wanted to build things that solve problems I actually have — the housing bot started because finding an apartment near campus was a mess. I work mostly in [STACK]. I'm looking for an early role at a small team where I can ship and learn fast. If that's you, my email is below.

### 9.10 Unacceptable about paragraph

> I'm a passionate AI enthusiast on a mission to leverage cutting-edge technology to create meaningful impact. With expertise across the full AI stack, I thrive at the intersection of innovation and execution. Let's connect!

---

## 10. Required `[PLACEHOLDER]` tags

The agent must use these exact bracketed tags wherever a real value is missing. Do not invent.

- `[LAST NAME]` — for hero, header, footer
- `[GITHUB URL]` — for header, about, footer, and repo/source references that point to the main GitHub profile or site repo
- `[LINKEDIN URL]` — optional; omit cleanly if absent
- `[HEADSHOT URL]` — optional; about section ships without it if absent
- `[MAJOR]` — for about paragraph
- `[STACK]` — primary tools (e.g., "Python, TypeScript, React")
- `[LISTING_COUNT]` — housing bot specific number
- `[NEIGHBORHOODS_LIST]` — comma-separated Newark neighborhoods covered
- `[USER NAME]`, `[USER ROLE]`, `[USER QUOTE]` — housing bot real testimonial
- `[STUDY_GUIDE_TOPICS]` — three sample topics (e.g., "organic chemistry, US Civil War, SAT vocabulary")
- `[VOICE_DEMO_URL]` — Loom or YouTube link for voice consultant demo
- `[LIVE_URL_HOUSING]`, `[LIVE_URL_STUDYGUIDE]` — production URLs
- `[SOURCE_URL_HOUSING]`, `[SOURCE_URL_STUDYGUIDE]`, `[SOURCE_URL_VOICE]` — project-specific source code URLs used by the `Source on GitHub` case-study CTA

---

## 11. Three-week build timeline (Configurable)

**Week 1 — Foundation.** Repo, Next.js App Router + TypeScript + Tailwind setup, design tokens in CSS, base layout, header, hero, footer, about section, single project block (housing) with placeholder proof. Mobile-responsive. Deploy preview to Vercel.

**Week 2 — Project breadth.** Project blocks 2 and 3 on home. Three case study pages with placeholder content where real proof is still pending. Empty-state polish: each `[PLACEHOLDER]` is visible but doesn't break layout.

**Week 3 — Polish and replace placeholders.** Drop in real screenshots, real listing count, real user quote, real demo video. Accessibility audit (axe-core or Lighthouse). Performance pass. Copy editing pass against the banned-words list. Deploy to production. Run the studio review (Section 12).

---

## 12. Studio review — pass before shipping

Before declaring v1 complete, run all of these and write down the answer:

- **Five-second test.** Show the home page to a friend for five seconds. Hide it. Ask: who is this for? They should answer something close to "an AI product engineer applying for early-stage startup roles."
- **Archetype identification.** Show the same friend the page for 15 seconds. Ask: how does this person come across? Acceptable answers cluster around "careful," "honest," "shows the work." Failure answers: "academic," "consultant," "designer-y," "tutor."
- **Voice check.** Open the site and search the source HTML for any banned word from Section 6.1. Zero hits is the only acceptable result.
- **Proof adjacency.** For each project, screenshot the page at viewport sizes 360, 768, 1280, 1920. The project name and at least one piece of proof (live link, screenshot, number, or quote) must coexist in every screenshot.
- **CTA audit.** List every button label on the site. Each one must be a plain-English verb phrase from the allowed list in Section 8.4.
- **Reciprocity check.** From the home page, count clicks to actually use one of the products. Required: ≤ 1 click for at least the hero project.

If any of these fail, do not ship. Iterate.

---

## 13. README requirements (for the GitHub repo)

The repo's `README.md` should be written for two readers: future-you, and a hiring manager (Maya) who clicked through from the live site. Include:

- One-paragraph description of what the site is and who it's for
- Live URL
- Tech stack (one line each)
- How to run locally (`pnpm install`, `pnpm dev`)
- A section called "Decisions" listing 3–5 specific choices made during the build, in the same plain-spoken voice as the site itself
- A section called "What's missing" listing the current placeholders and what would replace them

The README is itself a piece of authority proof. Treat it as a deliverable, not a generated stub.

---

## 14. What the agent should ask before starting

If any of these are unclear, the agent must ask before writing code:

- The GitHub username (for repo URL and links)
- Preferred deployment platform if not Vercel
- Whether a headshot will be included (and if so, the source file)
- Whether the site should use MDX-based case studies or a plain content-directory approach inside Next.js

The agent should not invent answers to these and proceed quietly.

---

## 15. The single guiding principle

If a decision is not specified above, fall back to this: *"Maya is scanning. Will this make her stop scrolling and click — or will it slow her down or make her think 'overselling'?"* Optimize for the first; cut the second.

---

*End of brief.*