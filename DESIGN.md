---
version: "alpha"
name: Portfolio Editorial
description: Warm editorial minimalism for a developer portfolio — paper, ink, and a single clay accent.
colors:
  primary: "#1A1C1E"
  on-primary: "#F7F5F2"
  secondary: "#6C7278"
  tertiary: "#B8422E"
  on-tertiary: "#FFFFFF"
  neutral: "#F7F5F2"
  surface: "#FFFFFF"
  surface-raised: "#EFEBE5"
  border: "#E2DDD5"
  night: "#141516"
  night-raised: "#1C1E20"
  night-border: "#2A2D30"
  night-ink: "#EDEAE5"
  night-secondary: "#9AA0A6"
  clay-soft: "#D9614A"
typography:
  h1:
    fontFamily: Public Sans
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.03em
  h2:
    fontFamily: Public Sans
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.02em
  h3:
    fontFamily: Public Sans
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: -0.01em
  body-md:
    fontFamily: Public Sans
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: Public Sans
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.6
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.14em
  code:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.75
rounded:
  sm: 4px
  md: 8px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 112px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
  button-primary-dark:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 12px
  button-accent-hover:
    backgroundColor: "{colors.clay-soft}"
    textColor: "{colors.primary}"
  button-accent:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.sm}"
    padding: 12px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 12px
  nav-link:
    textColor: "{colors.secondary}"
    typography: "{typography.body-sm}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 24px
  card-dark:
    backgroundColor: "{colors.night-raised}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.md}"
    padding: 24px
  badge:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 4px
  badge-dark:
    backgroundColor: "{colors.night-raised}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.sm}"
    padding: 4px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 12px
  input-dark:
    backgroundColor: "{colors.night-raised}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.sm}"
    padding: 12px
  page-light:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
  page-dark:
    backgroundColor: "{colors.night}"
    textColor: "{colors.night-ink}"
  nav-link-dark:
    textColor: "{colors.night-secondary}"
    typography: "{typography.body-sm}"
  divider:
    backgroundColor: "{colors.border}"
  divider-dark:
    backgroundColor: "{colors.night-border}"
---

## Overview

Warm editorial minimalism. The interface should read like a well-set broadsheet
or a contemporary gallery wall label: quiet, confident, and mostly empty space.
Paper and ink do the work; a single clay accent carries every interactive
signal. Nothing glows, nothing floats, nothing is decorated for its own sake.

The page is a document first and a product second. Content sits on a visible
grid, separated by hairline rules rather than drop shadows, and sections are
numbered like chapters.

This direction deliberately replaces the default AI-portfolio look — indigo
gradient blobs, glassy cards, oversized rounded corners — which makes every
developer site interchangeable.

## Colors

Two neutrals, one accent, one warm paper base. Color is never used to decorate;
it marks state.

- **Primary (#1A1C1E):** Deep ink. Headlines, body text, and the fill of the
  primary button. Also the dark-mode page background inverted.
- **Secondary (#6C7278):** Cool slate for metadata, captions, borders on
  neutral surfaces, and inactive navigation.
- **Tertiary (#B8422E):** "Clay". The only driver for interaction — link hover,
  section eyebrows, focus rings, the active filter tab. If it is clay, it is
  clickable or it is a marker. Nothing else.
- **Neutral (#F7F5F2):** Warm limestone page base. Softer than pure white and
  noticeably less blue than a default gray.
- **Surface (#FFFFFF):** Cards and inputs lift off the paper by a half-step of
  lightness plus a hairline border — never by a shadow.
- **Night (#141516):** Dark-mode base. Not black; a warm charcoal so ink-on-night
  text never vibrates.

Accent discipline: at most one clay element per viewport region. A page with two
competing clay blocks has no focal point.

## Typography

One humanist sans for nearly everything, one geometric sans for labels, one
monospace for code. No display serif, no gradient headline text.

- **Public Sans** — headings and body. Tight, negative tracking on large sizes
  (`-0.03em` at 64px) so the headline sets as a block.
- **Space Grotesk** — uppercase eyebrows and section counters. Always tracked
  out to `0.14em` and set small (12px). This is the interface's one "voice".
- **JetBrains Mono** — the code sample and tabular numbers only.

Type scale is a short ramp: 64 / 36 / 20 / 16 / 14 / 12. Do not invent sizes
between the steps. Body copy never exceeds ~68 characters per line.

## Layout

A 12-column grid inside a 1152px container, 24px gutters, 32px page padding
below 640px.

- Vertical rhythm is built from an 8px base. Section padding is generous:
  `112px` desktop, `80px` mobile.
- Sections are separated by full-bleed 1px rules, not by background color
  blocks. Alternating section backgrounds are forbidden — the page keeps one
  continuous paper tone.
- Asymmetry is intentional: text columns occupy 7 of 12, visuals 5 of 12, and
  the visual is aligned to the top rule rather than optically centered.
- Section eyebrows carry a two-digit counter (`01`, `02`, …) sitting in the left
  margin of the heading group.

## Elevation & Depth

There is effectively no elevation. Depth is implied by hairlines and tone shifts.

- Cards: 1px `border` + `surface` fill. No `box-shadow`.
- Modal: the single exception — a soft, wide shadow is allowed because the
  overlay already separates it from the page.
- Hover: a border darkens to `secondary`, or the surface steps from `surface` to
  `surface-raised`. Never translate, never scale, never add a glow.
- Forbidden: blurred gradient orbs, colored glows, `backdrop-blur` glass cards,
  floating animation loops.

## Shapes

Sharp and architectural. Corner radius is `4px` on controls and `8px` on
containers; nothing is fully round except avatars and status dots.

- Buttons and inputs: `4px`.
- Cards, panels, the code window: `8px`.
- Pills and chips: `4px` — a chip is a small box, not a lozenge.
- Dividers and markers: 1px lines, square 8px markers on the timeline.

## Components

- **Primary button** — ink fill, paper text, `4px`. Hover flips the fill to clay.
  This inverts on dark mode: paper fill, ink text.
- **Secondary button** — transparent surface, 1px border, ink text. Hover darkens
  the border to ink.
- **Nav link** — 14px slate text, no underline by default. Active section is ink
  weight 600 plus a 2px clay underline sitting 6px below the baseline.
- **Filter tabs** — an underline tab group, not a segmented pill track. The
  active tab is ink text with a 2px clay underline.
- **Card** — surface fill, hairline border, `8px`. Image sits flush at the top.
  Hover darkens the border; the image may scale 1.03 inside a clipped frame and
  nothing else moves.
- **Chip** — `4px`, hairline border, 12px text, slate. Never filled with color.
- **Input** — surface fill, hairline border, `4px`, ink text. Focus is a 2px clay
  ring with a 1px offset, never a blue browser glow.
- **Timeline marker** — 8px square, clay for the current role, slate for history.

## Do's and Don'ts

**Do**

- Let whitespace carry the layout. When in doubt, remove a border, not add one.
- Use clay for exactly one thing per region: the link, the active tab, the marker.
- Set labels in Space Grotesk caps and let them stay quiet at 12px.
- Keep body text at 16px/1.7 with a max measure of 68 characters.
- Make every interactive element reachable and visible with a keyboard focus ring.

**Don't**

- Don't use gradient text, glass panels, blur orbs, or animated blobs.
- Don't use rounded-2xl/3xl on cards or buttons.
- Don't introduce a second accent color — no teal, no violet, no emerald.
- Don't use dropshadows on cards, nav, or chips.
- Don't center-align body paragraphs or hero subcopy longer than two lines.
