# 03 Design System

## Visual intent
The site should feel like a restrained editorial profile with product proof embedded into it.

Keywords:
- calm
- precise
- composed
- dry
- credible
- premium through restraint

It should not feel like:
- a startup template
- a marketing landing page
- a design portfolio with decorative flourishes
- a tutor or personal-brand website

## Typography

### Fonts
- IBM Plex Sans: 400, 600, 700
- IBM Plex Mono: 400
- No third typeface

### Scale
- H1: 3.5rem / line-height 1.05 / weight 700 / tracking -0.02em
- H2: 1.75rem / line-height 1.2 / weight 600
- H3: 1.25rem / line-height 1.3 / weight 600
- Body: 1.0625rem / line-height 1.55 / weight 400
- Small: 0.875rem / line-height 1.45
- Mono caption: 0.8125rem / line-height 1.4 / weight 400

## Color system

### Tokens
- `--bg`: `#FAFAF8`
- `--ink`: `#0F0F0F`
- `--accent`: `#4A7C59`
- `--accent-dk`: `#3F6B4C`
- `--muted`: `#6B6B6B`
- `--hairline`: `#E8E6E0`
- `--hover`: `#F2F0EA`

Use only these tokens for site color. No additional colors, gradients, semi-transparent overlays, or blur filters.

### Usage rules
- Most of the page should read as off-white and ink
- Accent appears in small doses only
- Avoid large color blocks and tinted sections
- Use hairlines, frames, and spacing more than filled surfaces
- `--muted` is for metadata and support text, not core copy

## Spacing

### Scale
Only use:
- 4
- 8
- 16
- 24
- 32
- 48
- 64
- 96
- 128

### Rhythm
- Major home-page separations use 96 or 128
- Section internals use 48 or 64
- Compact UI spacing uses 16 or 24
- Avoid repeated equal spacing that makes the page feel templated

## Layout

### Grid
- 12-column grid on desktop at `>= 1024px`
- 24px gutters
- 1120px max width, centered
- 680px max prose width

### Composition rules
- Use asymmetry across sections, not chaos within sections
- Prefer one strong compositional move per section
- Keep the underlying grid visible in how things align
- Let empty space carry weight
- Project 1 gets the largest visual treatment
- Projects 2 and 3 should vary in arrangement while staying within the same system

## Imagery
- Real product screenshots only for proof
- Large, well-cropped screenshots are preferred
- Consistent device framing and aspect ratios by type
- Process artifacts can appear as archival support material
- One optional headshot only, restrained and neutral
- No filler lifestyle imagery
- No stock photography

### Image presentation rules
- Use 1px hairline borders
- Rounded corners max 8px
- If a shadow is used, it must be faint and structural
- No dramatic overlays or visual effects

## Motion
- Initial fade only, max 200ms
- Link underline on hover
- Project card hover only changes background to `--hover`
- `prefers-reduced-motion` disables fades

## Interaction rules
- Focus state: 2px solid accent, 2px offset
- Tap targets at least 44x44
- Links in body copy use `--accent-dk` for contrast
- No fancy interaction patterns that slow scanning

## Banned patterns
- glassmorphism
- gradients
- neon dark hero
- blur effects
- parallax
- scroll-jacking
- autoplay video
- hero illustrations
- mascots
- cartoon characters
- decorative emojis
- floating widgets

## Page-level design notes

### Home page
- Hero should breathe
- Avoid clutter in the first screen
- First project should read as a feature spread
- About band should calm the page down before the footer

### Case studies
- Prioritize readability over novelty
- Support process credibility with screenshots and notes
- Make limitations feel deliberate and visible, not buried