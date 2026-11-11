---
name: CNC Backup (GPV Solutions)
description: Shop-floor safety signage for an offline-tolerant CNC file backup app.
colors:
  safety-yellow: "#FFD100"
  ink: "#111111"
  white: "#FFFFFF"
  notice-blue: "#0B5CAD"
  notice-wash: "#E6EFF9"
  concrete: "#E2E2DC"
  muted-graphite: "#4A4A44"
  foot-text: "#D8D8D2"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.5rem, 9vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "2rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "0.1em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.06em"
  body:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
  lede:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  sm: "3px"
  md: "6px"
  lg: "14px"
  tag-inner: "10px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.safety-yellow}"
    typography: "{typography.title}"
    rounded: "{rounded.sm}"
    padding: "0.9rem 1.5rem 0.9rem 1.75rem"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  sign-header:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.safety-yellow}"
    typography: "{typography.headline}"
    padding: "0.7rem 3rem 0.55rem"
  sign-panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "0"
    padding: "1.5rem"
  tag-head:
    backgroundColor: "{colors.notice-blue}"
    textColor: "{colors.white}"
    rounded: "10px 10px 0 0"
  pictogram:
    backgroundColor: "{colors.safety-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    size: "64px"
  callout:
    backgroundColor: "{colors.notice-wash}"
    textColor: "{colors.ink}"
    padding: "1rem 1.5rem"
---

# Design System: CNC Backup (GPV Solutions)

## Overview

**Creative North Star: "The Posted Sign"**

The site is the sign a machinist already trusts: a safety-yellow field, ink-black header bands, white message panels, and a concrete ground. Every surface is a piece of posted signage, either a banner (black band, yellow signal word), a panel (white, 3px black edge), or a tag (the hanging hero card). It is loud on purpose, legible at arm's length on a shop-floor phone, and it carries one cool voice, NOTICE blue, reserved for Fleet and for informational notices.

Density is moderate and blocky. Content sits in a single 1120px column of stacked signs, each with a banner and a body. Hierarchy comes from contrast between condensed caps signal words and plain Barlow messages, not from decoration. The hazard stripe is the seam where the page changes register (above the hero, above the footer).

The system rejects the SaaS default: dark-navy hero, blue button, grid of rounded feature cards.

**Key Characteristics:**
- Yellow, ink, white, concrete as the base; one blue for a single meaning
- Condensed uppercase signal words over a humanist sans message
- 3px ink edges and square-cornered panels; small radii only on controls and tags
- Hazard stripe as the only ornamental pattern
- Pictograms boxed in 3px black on yellow

## Colors

A signage palette: saturated yellow field, near-black structure, white message surfaces, a grey-green concrete ground, and one NOTICE blue.

### Primary
- **Safety Yellow** (#FFD100): Hero field, page-title field, plan-table Individual header, pictogram tiles, hazard stripe, and signal text on ink (wordmark, sign banners, button label). Hover state fill for open FAQ rows.

### Secondary
- **NOTICE Blue** (#0B5CAD): Fleet identity (tag header, Fleet column header), links, and focus rings on light surfaces. Its meaning is "notice / Fleet", nothing else.
- **Notice Wash** (#E6EFF9): Fleet table column tint and the callout background.

### Neutral
- **Ink** (#111111): Text, top bar, banners, 3px edges, primary button fill.
- **White** (#FFFFFF): Message panels, tag body, document body, nav text on ink.
- **Concrete** (#E2E2DC): Page ground, tag footer, inline code chips.
- **Muted Graphite** (#4A4A44): Secondary descriptions and "no" table cells.
- **Foot Text** (#D8D8D2): Body copy on the ink footer.

### Named Rules
**The One Notice Rule.** Blue means Fleet or informational notice. Do not use it as a general accent or decoration; yellow carries emphasis.
**The Ink-On-Yellow Rule.** Text on yellow is ink, text on ink is yellow or white, text on blue is white. Yellow is never a text color on white or concrete.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, sans-serif), self-hosted weights 600, 700, 800
**Body Font:** Barlow (with system-ui stack), self-hosted weights 400, 500, 600

**Character:** Condensed uppercase signal words, widely tracked, over a plain, readable message face. It reads as stencil-adjacent signage without a novelty face.

### Hierarchy
- **Display** (800, clamp(3.5rem, 9vw, 6rem), 0.9, -0.01em, caps): Hero h1; page-title h1 uses clamp(3rem, 8vw, 5rem).
- **Headline** (800, 2rem, 1.05, 0.1em, caps): Sign banners and plan-table column heads (1.5rem on small screens); tag header at 2.25rem with 0.14em.
- **Title** (800, 1.5rem, 1, 0.06em, caps): Button label, "includes" heading (0.08em), step titles at 1.35rem, document h2 at 1.9rem.
- **Body** (400, 1.0625rem, 1.6): Messages; lede at 1.25rem/1.5, max 34rem; document text capped at 44rem.
- **Label** (700, 1.05-1.25rem, 0.06-0.08em, caps): Nav links, text link, hours terms, mobile table cell labels (0.95rem, graphite).

### Named Rules
**The Signal Word Rule.** Barlow Condensed is only for short signal words (headings, nav, buttons, labels), always uppercase. Sentences are always Barlow.
**The Message Weight Rule.** Weight 600 in Barlow marks the key term in a row (plan row labels, list item leads); secondary lines are 400 in graphite.

## Layout

One centered column, max-width 1120px, side padding 1.5rem (1rem under 640px). Pages stack: top bar, hazard stripe, yellow field (hero or page title), then a series of signs (white panels) separated by 4rem (2.5rem on mobile). The hero is a 1.1fr / 0.9fr two-column grid with a 3.5rem gap that collapses to one column at 860px, with the tag capped at 30rem. The "includes" list is two columns, one under 640px. Document pages put text in a white panel with the prose measure capped at 44rem.

Spacing is rem-based and loose, with common steps of 0.75, 1, 1.5, 2.5, 4rem. Touch targets are generous: button min-height 56px, nav links padded to roughly 44px+ tall. The plan table reflows under 640px into stacked rows with a two-column Individual/Fleet pair, each cell labelled via data attributes.

## Elevation & Depth

Mostly flat: depth is carried by 3px ink edges and color blocking. Soft shadows appear in exactly two places, objects that are physically picked up or hung: the primary button and the hanging tag.

### Shadow Vocabulary
- **Button rest** (`box-shadow: 0 6px 14px rgba(17,17,17,0.28)`): primary button; lifts to `0 10px 20px rgba(17,17,17,0.3)` on hover, drops to `0 2px 6px` on press.
- **Tag hang** (`box-shadow: 0 18px 32px rgba(17,17,17,0.25)`): hero tag only.

### Named Rules
**The Flat Sign Rule.** Panels, banners, tables, and callouts get a border, never a shadow. Only the button and the tag may cast one.

## Shapes

Square and blocky. Panels, banners, details rows, and callouts have 0 radius with a 3px ink edge (2px for FAQ rows and table rules, 6px for heavy document section dividers). Controls get a 3px radius, pictograms and check marks 3-6px, the hanging tag 14px (10px inner header and footer), with a circular grommet hole. The hazard stripe is a -45deg 16px ink/yellow repeating gradient, 16px tall. The recurring silhouette is a bordered rectangle with a black banner on top; banners carry two small round rivets at the ends.

## Components

### Buttons
- **Shape:** Slightly squared (3px radius), 56px minimum height.
- **Primary:** Ink fill, yellow Barlow Condensed 800 1.5rem caps label with a square-capped 3px-stroke arrow icon; padding 0.9rem 1.5rem 0.9rem 1.75rem.
- **Hover / Focus:** Label turns white, lifts 2px with a larger shadow (160ms, cubic-bezier(0.16, 1, 0.3, 1)); press sinks 1px. Focus ring is 3px, offset 3px, blue on light surfaces, ink on the yellow hero, yellow on ink bands. Full-width on mobile. Motion is disabled under reduced-motion.
- **Text link:** Condensed caps 700 1.25rem, ink, 3px underline that turns white on hover over yellow.

### Sign (panel with banner)
White panel, 3px ink edge, ink banner with a yellow condensed caps heading and rivets; body padding 1.5rem. The default container for every content block.

### Hanging Tag (signature)
White, 3px ink edge, 14px radius, hung from a yellow grommet by a black strap, with a NOTICE-blue header band, three pictogram steps separated by 2px ink rules, and a concrete footer with an inset 3px top rule. On load it swings and settles (1100ms) and does not repeat.

### Pictogram
64px square, yellow, 3px ink border, 6px radius, 40px ink line SVG (2.2 stroke, round caps).

### Plan Table
Fixed layout; Individual header in yellow, Fleet header in blue/white; Fleet cells tinted notice-wash; 2px ink row rules. Yes/no states are inline SVG marks (filled ink square with yellow check; outlined graphite square with dash), recolored blue/white in the Fleet column. Meaning is never carried by color alone.

### Navigation
Ink top bar; yellow wordmark (800, 1.5rem, 0.06em caps); nav links white condensed caps that turn yellow on hover. Footer repeats nav in yellow, turning white on hover, under a hazard stripe.

### FAQ Details
2px ink border, white; summary in Barlow 600 with a square ink plus/minus tile (yellow glyph); open or hovered summary fills yellow; answer separated by a 2px rule.

### Callout
3px ink edge, notice-wash fill, 1rem 1.5rem padding.

## Do's and Don'ts

### Do:
- **Do** build new content as a sign: ink banner with yellow caps heading over a white panel with a 3px ink edge.
- **Do** keep text pairings to ink on yellow, yellow or white on ink, white on blue.
- **Do** reserve NOTICE blue for Fleet and notices, and keep focus rings visible (3px, offset 3px).
- **Do** use inline SVG pictograms boxed in 3px ink.
- **Do** keep controls at 56px or taller on touch screens and respect reduced-motion.

### Don't:
- **Don't** use a dark-navy hero with a blue button, or a grid of rounded feature cards.
- **Don't** set sentences or paragraphs in Barlow Condensed or in caps.
- **Don't** add shadows to panels, banners, or tables.
- **Don't** use yellow as text on white or concrete.
- **Don't** repeat the hazard stripe inside content; it marks page seams only.

### Not canonized (build carries as-is)
The PRODUCT.md navy (#0F172A) and blue (#2563EB) incumbent no longer exists in the build and is superseded. The one-off rivet gradient greys (#8A8A84, #3A3A36) are decoration, not tokens.
