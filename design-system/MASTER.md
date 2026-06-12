# Christo Thomas Portfolio Design System

## Source

Generated from the `ui-ux-pro-max` design-system query:

`developer portfolio software developer data analyst AI-assisted builder`

The query recommended a portfolio-grid pattern, dark developer styling, neutral surfaces, strong accessibility, and fast-loading project-first presentation. This system adapts that guidance for a personal developer/data analyst portfolio that must support both dark and light modes.

## Product Positioning

This is a professional portfolio for a software developer, data analyst, and AI-assisted builder. The design should feel mature, technical, trustworthy, and easy for recruiters to scan.

Primary audience:
- Recruiters reviewing fit quickly
- Hiring managers evaluating project clarity
- Technical peers checking execution quality

Core impression:
- Practical builder
- Clear communicator
- Data-aware developer
- Calm and reliable operator

## Visual Direction

Use a premium editorial portfolio style with Swiss-inspired spacing and a restrained bento grid. The page should feel personal and designed, but not like a generic SaaS landing page.

Keep:
- Deep navy and warm orange identity
- Clean editorial typography
- Clear project-card hierarchy
- Card grids that feel structured, not decorative
- One subtle hero motion/signal element

Avoid:
- Heavy gradients
- Glassmorphism
- Cyberpunk effects
- Animated blobs or particles
- Custom cursors
- Loud neon glows
- Over-rounded cards
- Generic marketing copy

## Color System

Dark mode is the primary brand expression. Light mode must remain polished and accessible.

Dark roles:
- Background: deep navy / near-black
- Surface: solid navy panels
- Elevated surface: slightly lighter navy
- Text: cool off-white
- Muted text: blue-gray
- Accent: warm orange
- Secondary accent: restrained cool blue/cyan
- Border: low-opacity blue-gray

Light roles:
- Background: warm off-white
- Surface: white / warm paper
- Text: charcoal navy
- Muted text: slate
- Accent: grounded blue or warm orange depending on section
- Border: subtle charcoal alpha

Rules:
- Use semantic CSS variables instead of raw colors in component rules.
- Accent color should guide attention, not dominate the page.
- Preserve contrast of normal text at 4.5:1 minimum.
- Do not rely on color alone for meaning.

## Typography

Current stack:
- Display/headings: Space Grotesk
- Body/UI: IBM Plex Sans
- Technical labels: system monospace fallback when useful

Rules:
- Use large, confident headings with tight line-height.
- Body text should stay at 16px or above.
- Keep paragraph line-height between 1.55 and 1.8.
- Keep labels small but readable and uppercase only for metadata.
- Control line length: 60-75 characters on desktop, 35-60 on mobile.

## Layout

Use a centered max-width shell and section rhythm that creates clear scanning stops.

Breakpoints:
- 375px: single-column mobile, generous tap targets, no horizontal overflow
- 768px: tablet layout, still content-first
- 1024px: allow selected two-column grids where readable
- 1440px: full editorial layout with strong whitespace

Rules:
- Mobile-first readability wins over decorative layout.
- Project cards should be scannable without hover.
- Bento/stat cards should support proof, not visual clutter.
- Keep contact CTA obvious and near the end.

## Components

Hero:
- Name, role, positioning, CTA, and proof points must be immediately visible.
- Motion graphic should be decorative only and `aria-hidden`.
- CTA hierarchy: one primary, one secondary, one tertiary.

Project cards:
- Must show project type, title, summary, stack, challenge, impact, and link.
- Challenge and impact should be visually separated.
- Link text should describe the destination.

Experience and education:
- Use clear timeline/card structure.
- Dates and locations should read as metadata, not decorative badges.

Skills:
- Group by capability.
- Use compact tags without overwhelming the section.
- AI-assisted builder copy should communicate ownership, not hype.

Contact:
- Make email, phone, LinkedIn, GitHub, and resume easy to scan and keyboard-accessible.
- Maintain visible focus states.

## Motion

Use motion sparingly.

Allowed:
- Page/section reveal with transform and opacity
- Button/card hover and active states
- One subtle hero signal graphic
- Theme transition

Avoid:
- Particles
- Custom cursors
- Endless animated blobs
- Large parallax
- Layout/property animation

Rules:
- Prefer transform and opacity only.
- Keep interaction transitions between 150ms and 300ms.
- Respect `prefers-reduced-motion`.

## Accessibility QA

Required checks:
- Skip link exists and is focusable.
- Interactive elements have visible focus states.
- Links and buttons are keyboard reachable.
- Touch targets are at least 44px tall where practical.
- No horizontal overflow at 375px, 768px, 1024px, or 1440px.
- Motion has reduced-motion fallback.
- SVG icons used in contact links are decorative with accessible text nearby.

## Anti-Pattern Watchlist

If the site starts to feel dull:
- Add contrast through hierarchy and spacing before adding effects.
- Use one accent moment rather than many glows.

If the site starts to feel noisy:
- Remove background animation first.
- Reduce shadows and glow.
- Make project content more structured instead of adding decoration.

If the site starts to feel generic:
- Keep Christo's concrete proof points visible.
- Keep project challenge/impact language specific.
- Preserve the personal developer/data analyst positioning.
