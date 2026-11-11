---
name: CNC Backup by GPV Solutions
description: Industrial blue. Deep navy field, electric-blue emphasis, white and brushed-steel panels, no machine photography.
colors:
  navy: "#07162B"
  navy-2: "#0B2447"
  navy-glow: "#16335F"
  brand-blue: "#0B5CAD"
  electric: "#2A9DFF"
  electric-deep: "#0A6FD6"
  band-top: "#0F6BD0"
  band-bottom: "#0B4FA3"
  button-top: "#1B86F0"
  button-bottom: "#0A5FC4"
  button-hover-top: "#3A9BFF"
  button-hover-bottom: "#0B6AD8"
  facet-light: "#0B63D6"
  facet-mid: "#0A4AA6"
  facet-dark: "#0B2F73"
  steel: "#DCE3EC"
  steel-light: "#F1F4F8"
  steel-foot-top: "#E4EAF2"
  steel-foot-bottom: "#D2DAE6"
  fleet-wash: "#EAF3FD"
  ground: "#E9EEF4"
  white: "#FFFFFF"
  ink: "#0B1220"
  muted: "#4A566B"
  edge: "#C3CFDF"
  on-navy-lede: "#E3EAF4"
  on-navy-subtitle: "#C9D6EA"
  on-navy-foot: "#C2CCDB"
typography:
  display:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.75rem, 6.4vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.005em"
  page-title:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4rem)"
    fontWeight: 800
    lineHeight: 1
  card-head:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "2.1rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
  band:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0.02em"
  table-head:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.03em"
  doc-heading:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0.02em"
  wordmark:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
  title:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0.01em"
  button:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.03em"
  label:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.04em"
  lede:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  xs: "3px"
  button: "6px"
  sm: "8px"
  panel: "12px"
  card: "14px"
  round: "50%"
spacing:
  xs: "0.25rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  section: "4rem"
  container: "1120px"
components:
  button-primary:
    backgroundColor: "{colors.button-bottom}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "0.9rem 1.5rem 0.9rem 1.75rem"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.button-hover-bottom}"
    textColor: "{colors.white}"
  text-link:
    textColor: "{colors.white}"
    typography: "{typography.label}"
    padding: "1rem 0"
  topbar:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    padding: "0.9rem 1.5rem"
  hero:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    padding: "4.5rem 1.5rem 5rem"
  how-card:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  how-card-head:
    backgroundColor: "{colors.band-bottom}"
    textColor: "{colors.white}"
    typography: "{typography.card-head}"
    padding: "2.1rem 1rem 0.85rem"
  how-card-badge:
    backgroundColor: "{colors.electric-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.round}"
    size: "56px"
  panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "1.5rem"
  panel-band:
    backgroundColor: "{colors.band-bottom}"
    textColor: "{colors.white}"
    typography: "{typography.band}"
    padding: "0.95rem 1.5rem 0.8rem"
  includes-block:
    backgroundColor: "{colors.steel-light}"
    textColor: "{colors.ink}"
    padding: "1.5rem 1.5rem 1.75rem"
  plan-head:
    backgroundColor: "{colors.navy-2}"
    textColor: "{colors.white}"
    typography: "{typography.table-head}"
    padding: "0.9rem 1.25rem 0.8rem"
  plan-head-fleet:
    backgroundColor: "{colors.electric-deep}"
    textColor: "{colors.white}"
  plan-cell-fleet:
    backgroundColor: "{colors.fleet-wash}"
    textColor: "{colors.ink}"
  callout:
    backgroundColor: "{colors.steel-light}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.5rem"
  faq-item:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.9rem 3.5rem 0.9rem 1.1rem"
  footer:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy-foot}"
    padding: "2.5rem 1.5rem 3rem"
---

# Design System: CNC Backup by GPV Solutions

## Overview

**Creative North Star: "The Machined Console"**

The site reads as the control surface of modern manufacturing software, with no machine photography. A deep navy field carries the hero, top bar and footer. Content lives on brushed-steel and white panels that sit on a pale blue-grey ground, capped by blue gradient header bands. Electric blue is the one voice: a single emphasized headline word, the wordmark's "Solutions", hover, and every focus ring.

Density is moderate and plain. Everything sits in a 1120px column. Each topic is one rounded panel with a blue band on top; the hero pairs a caps headline with a steel How it works card that carries a cloud badge. The direction came from the user's reference mockup ("Industrial blue") and replaced an earlier green safety-signage world entirely.

**Key Characteristics:**
- Navy (#07162B) bookends the page (top bar, hero, footer); the working body is a cool grey-blue ground (#E9EEF4).
- Electric blue (#2A9DFF) is rare: one headline word, wordmark accent, focus ring, nav hover on navy.
- White-to-steel gradients and blue gradient bands give a brushed, machined surface without photography.
- Barlow 800 uppercase for every heading and label; Barlow 400 to 600 for messages.
- Diagonal blue facets on the left edge of the hero and page title on wide screens only.
- Soft navy shadows and 6 to 14px radii; no hard edges and no heavy borders.

## Colors

A navy-and-blue palette with cool steel neutrals. Blue is saturated only where it signals; steel and white carry the reading surfaces.

### Primary
- **Brand Blue** (#0B5CAD): links, pictogram strokes, check-mark discs, FAQ plus discs, document h2 top rule.
- **Electric Blue** (#2A9DFF): the emphasized headline word, wordmark accent, focus outlines, hover on dark nav, underline of the hero text link, top of the cloud badge gradient.
- **Electric Deep** (#0A6FD6): Fleet column head, Fleet check marks, bottom of the cloud badge.
- **Band Gradient** (#0F6BD0 to #0B4FA3): the header band on every panel, the How it works head, and the document h2 band; the shared "blue band".
- **Button Gradient** (#1B86F0 to #0A5FC4; hover #3A9BFF to #0B6AD8): primary button only.

### Secondary
- **Navy** (#07162B): top bar, hero, footer, page-title field, and the on-hover link color.
- **Navy 2** (#0B2447): Individual plan column head, Individual check marks, on-navy panels.
- **Navy Glow** (#16335F): radial highlight inside hero and page-title fields.
- **Facet Blues** (#0B63D6, #0A4AA6, #0B2F73): the three diagonal facet bands at the left edge of the hero.

### Neutral
- **Ground** (#E9EEF4): page background.
- **Steel** (#DCE3EC) and **Steel Light** (#F1F4F8): card bottom, includes block, callout, inline code, hover and open FAQ rows.
- **Steel Foot** (#E4EAF2 to #D2DAE6): How it works footer band.
- **Fleet Wash** (#EAF3FD): Fleet column cells.
- **Edge** (#C3CFDF): all 1px borders and dividers.
- **Ink** (#0B1220): body text. **Muted** (#4A566B): secondary descriptions, "no" marks.
- **White** (#FFFFFF): panels, text on navy and blue.
- **On-navy tints** (#E3EAF4 hero lede, #C9D6EA page subtitle, #C2CCDB footer text).

### Named Rules
**The One Voice Rule.** Electric blue appears on one headline word per page plus focus and hover. If a second thing wants electric blue, it takes brand blue or white instead.
**The Fleet Is Electric-Deep Rule.** Fleet in the plan table is identified by electric deep (#0A6FD6) and its wash; Individual stays navy 2. Do not recolor the columns.
**The Blue Band Rule.** A new content topic is a white panel under the blue band gradient; it does not get a new header color.

## Typography

**Display Font:** Barlow (self-hosted 400, 500, 600, 700, 800; fallback system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Barlow, same stack
**Label/Mono Font:** Barlow for labels; inline `code` uses ui-monospace, SF Mono, Menlo.

**Character:** One family, two voices. Barlow 800 in capitals is the machined, signal voice; Barlow at 400 to 600 in sentence case is the plain message voice.

### Hierarchy
- **Display** (800, clamp(2.75rem, 6.4vw, 4.75rem), 1): hero h1, uppercase, balanced wrap, letter-spacing -0.005em.
- **Page Title** (800, clamp(2.5rem, 6vw, 4rem), 1): h1 on support and privacy, uppercase.
- **Card Head** (800, 2.1rem, 1, 0.01em): the single header on the How it works card.
- **Band** (800, 1.45rem, 1.1, 0.02em): panel header bands (1.2rem on mobile). Document h2 is 1.5rem (1.3rem mobile).
- **Table Head** (800, 1.35rem, 1, 0.03em): plan column heads (1.1rem on mobile).
- **Wordmark** (800, 1.5rem, 1, 0.01em): top bar (1.15rem on mobile).
- **Title** (800, 1.15rem, 1.1): step titles; **includes h3** and hours terms 1.1rem and 1rem, same style.
- **Button** (800, 1.1rem, 1, 0.03em): primary button; the text link is 700 at 1.05rem.
- **Label** (700, 0.95rem, 0.04em, uppercase): nav, card footer; 0.85rem on mobile nav and table cell labels.
- **Lede** (400, 1.2rem, 1.55): hero paragraph, 34rem measure (1.1rem mobile).
- **Body** (400, 1.0625rem, 1.6): all prose; documents capped at 44rem.
- **Small** (400, 0.95rem, 1.4): step descriptions, includes descriptions, footer, table notes.

### Named Rules
**The Caps Are Headings Rule.** Uppercase Barlow 800 is for headings, labels and buttons; messages are sentence case at 400 to 600.
**The Ramp Rule.** Reuse a size above before adding a new one.

## Layout

A single 1120px container (1.5rem side padding, 1rem on mobile) holds everything. The hero is a two-column grid (1.1fr headline, 0.9fr card) with a 3.5rem gap, collapsing to one column at 860px with the card capped at 32rem. Panels stack with 3rem between (2rem mobile). Page body top padding is 4rem (2.5rem mobile). Document pages use a title band in navy and a white document panel with a 44rem reading measure.

The plan table uses fixed layout; at 640px it becomes stacked rows with each cell labeled from its data-label. Includes lists go from two columns to one at 640px. Spacing rhythm runs on rem steps (0.25, 0.75, 1, 1.5, 2.5, 4) with 56px as the minimum touch height for the primary button.

The diagonal facets are a wide-screen device: their width is clamp(0px, (100vw - 1120px) / 2 + 16px, 150px), so they vanish when the container fills the viewport.

## Elevation & Depth

Hybrid: soft navy shadows for lift, gradients for material. Panels barely lift; the How it works card and the button lift most.

### Shadow Vocabulary
- **Panel** (`box-shadow: 0 8px 24px rgba(7, 22, 43, 0.08)`): white panels and document body.
- **Card** (`box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.6)`): the How it works card on navy.
- **Button** (`0 6px 16px rgba(10, 95, 196, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)`; hover `0 10px 22px rgba(10, 95, 196, 0.45)` with translateY(-2px); active `0 2px 6px rgba(10, 95, 196, 0.4)` with translateY(1px)).
- **Badge** (`0 0 0 4px #FFFFFF, 0 6px 14px rgba(0, 0, 0, 0.35)`): cloud badge ring.

### Named Rules
**The Soft Navy Rule.** Shadows are diffuse and navy-tinted on light grounds, black on navy. No hard-offset shadows.

## Shapes

Machined but not sharp. Radius steps: 3px (inline code), 6px (button), 8px (callout, FAQ), 12px (panels and document body), 14px (How it works card, with its head and foot following at 14px on the outer corners), 50% (badge, check discs, FAQ discs). Borders are 1px edge (#C3CFDF); the one thick rule is the 3px brand-blue line above document h2s. Panel headers clip inside the panel radius via overflow hidden. The hero facets are a clip-path parallelogram.

## Components

### Buttons
- **Shape:** 6px radius, 56px minimum height.
- **Primary:** vertical blue gradient (#1B86F0 to #0A5FC4), white 800 caps label, down-arrow icon with 3px round stroke; full width on mobile.
- **Hover / Focus:** lighter gradient, lift 2px; active presses 1px; focus is a 3px electric outline offset 3px. Reduced motion removes transforms.
- **Text link:** white caps 700 with a 3px electric underline; hover turns electric.

### Cards / Containers
- **How it works card:** white-to-steel gradient, 14px radius, blue band head with a 56px cloud badge overlapping the top, three icon steps (alternate rows white at 55%), steel foot band. Settles in with an 18px 700ms rise on load.
- **Panel:** white, 1px edge, 12px radius, blue band head, 1.5rem body.
- **Includes block:** steel-light ground, two-column list with brand-blue circular check marks.

### Navigation
Navy top bar, wordmark white with "Solutions" in electric, nav links white 700 caps that turn electric on hover. Footer nav repeats it on navy.

### Plan table
Navy 2 head for Individual, electric deep for Fleet with a fleet-wash column; 1px edge rules; check and dash marks are 24px rounded-square SVG symbols colored by column.

### FAQ and callout
Details rows with 8px radius, 1px edge, a brand-blue disc with plus (minus when open) and a steel-light hover/open fill. Callout is steel-light, 8px radius, 1px edge.

## Do's and Don'ts

### Do:
- **Do** put electric blue (#2A9DFF) on one headline word and on focus rings.
- **Do** build new topics as white 12px panels under the blue band gradient (#0F6BD0 to #0B4FA3).
- **Do** keep headings in Barlow 800 uppercase and messages in Barlow 400 to 600 sentence case.
- **Do** keep text on navy white or one of the on-navy tints, and verify contrast on gradients.
- **Do** keep the facets wide-screen only and honor reduced motion.

### Don't:
- **Don't** return to the green safety-signage world: Barlow Condensed, green bands, 2px ink edges, or a hanging tag with an eyelet.
- **Don't** add machine photography or stock imagery.
- **Don't** use hard-offset shadows or heavy borders; depth is soft and navy.
- **Don't** introduce a second accent hue beside blue.
- **Don't** make a new surface a generic light SaaS feature-card grid.
