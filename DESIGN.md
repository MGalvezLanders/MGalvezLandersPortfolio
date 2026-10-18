---
name: Maximo Galvez Landers — Portfolio
description: Full Stack Developer portfolio built to earn the contact inquiry.
colors:
  circuit-blue: "#2563EB"
  circuit-blue-light: "#60A5FA"
  circuit-blue-muted: "#93C5FD"
  near-black: "#0B1220"
  slate-secondary: "#475569"
  slate-muted: "#94A3B8"
  page-white: "#FFFFFF"
  blueprint-wash: "#F4F7FB"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(3.75rem, 10vw, 10rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.625rem"
    fontWeight: 400
    letterSpacing: "0.3em"
rounded:
  none: "0px"
spacing:
  xs: "1rem"
  sm: "1.5rem"
  md: "2.5rem"
  lg: "4rem"
  section: "8rem"
components:
  button-accent:
    backgroundColor: "transparent"
    textColor: "{colors.near-black}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-accent-hover:
    backgroundColor: "{colors.circuit-blue}"
    textColor: "{colors.page-white}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.near-black}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-ghost-hover:
    backgroundColor: "{colors.near-black}"
    textColor: "{colors.page-white}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  card:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.near-black}"
    rounded: "{rounded.none}"
    padding: "32px"
---

# Design System: Maximo Galvez Landers — Portfolio

## Overview

**Creative North Star: "The Clean Sheet"**

This portfolio argues through what it omits as much as what it includes. The surface is white paper — direct, unhurried, with every element earning its position on the page. White space is not absence here; it is the system's most deliberate signal. A recruiter opening this alongside forty generic portfolios finds a design that knows when to stop.

The system is minimal and personal in equal measure. Geist Sans carries the entire typographic voice — from the tight-tracked all-caps hero name down to subdued body copy — and the hierarchy lives wholly in weight contrast: 700 for identity, 600 for section anchors, 500 for sub-headings, 400 for everything else. JetBrains Mono handles the functional layer: section labels, data annotations, form field markers. No decoration. The type communicates by degree of emphasis, not by variety of faces.

The personal layer earns its presence: the rugby section is not humanizing filler but structural evidence — discipline, team culture, sustained commitment over 13 years. That section reads the same way the whole design reads: confident because it can demonstrate the claim, not because it asserts it.

**Key Characteristics:**
- Zero border radius throughout — every surface is a sharp rectangle
- Single accent color (Circuit Blue) deployed at ≤10% of any given screen
- All interactive depth is reactive, never decorative at rest
- JetBrains Mono labels as the only typographic counterpoint to Geist
- GSAP scroll-reveal animations: power3.out easing, 0.5–0.85s durations, strictly reduced at prefers-reduced-motion

## Colors

A narrow palette of one accent, one ink set, and two surface tones. The restraint is deliberate: the blue's scarcity gives it authority.

### Primary

- **Circuit Blue** (`#2563EB`): The single accent. Used on active borders, interactive highlights, section eyebrow text, the left-bar card marker, and the CTA button fill on hover. Its rarity on any given screen is the point.
- **Circuit Blue Light** (`#60A5FA`): Hover and secondary accent states. Inline text highlights, nav hover color, footer name display. Never used as a fill background.
- **Circuit Blue Muted** (`#93C5FD`): Decorative traces only — scrollbar thumb, faint glow contexts. Not for text or interactive affordances at body scale.

### Neutral

- **Near-Black** (`#0B1220`): Primary text and the ghost button fill on hover. A cool-toned near-black (not pure `#000`) that reads as ink, not void.
- **Slate Secondary** (`#475569`): Secondary body copy, meta text, supporting descriptions. Approximately slate-600.
- **Slate Muted** (`#94A3B8`): Placeholders, timestamps, decorative annotations. Below this, content disappears from the hierarchy.
- **Page White** (`#FFFFFF`): Primary surface and card backgrounds. The main canvas.
- **Blueprint Wash** (`#F4F7FB`): Alternate section background — a barely-there blue-gray that separates sections without breaking the white-paper atmosphere.

### Named Rules

**The One Voice Rule.** Circuit Blue (`#2563EB`) appears on ≤10% of any given screen. Its rarity is the point — every use is a deliberate signal, not ambient decoration.

**The No-Mixed-Ink Rule.** Text never renders as gradient. Stat numbers and headings that need emphasis use solid `circuit-blue`, not the `.text-accent-gradient` utility (which is defined in globals.css but production-prohibited).

**The Contrast Floor Rule.** Circuit Blue Light (`#60A5FA`) and Muted (`#93C5FD`) must never appear as foreground text on Page White — neither passes WCAG AA. All text-role accent usage requires the base `#2563EB`.

## Typography

**Display / Body Font:** Geist (Vercel's humanist sans-serif), with `system-ui, sans-serif` as fallback  
**Label / Mono Font:** JetBrains Mono, with `monospace` as fallback

**Character:** A single-family system where hierarchy is expressed entirely through weight and size — never through a second typeface. Geist reads as precise and modern without being cold. JetBrains Mono provides the functional counterpoint: section numbering, form labels, data annotations. The contrast between the two faces is professional vs. technical, not decorative vs. functional.

### Hierarchy

- **Display** (bold 700, clamp 3.75rem → 10rem, line-height 0.9, tracking −0.04em): Hero name lockup only — `MAXIMO` / `GALVEZ LANDERS`. Sub-unity line-height intentional: the two lines stack as a unit, not as separate lines of text.
- **Headline** (semibold 600, clamp 2.25rem → 4.5rem, line-height 1.2, tracking −0.01em): Section anchors via `SectionTitle` h2. One per section; sets the structural frame.
- **Title** (medium 500, clamp 1.875rem → 3.75rem, line-height 1.2, tracking −0.01em): Sub-headings — featured project h3, education h4, rugby milestone h4. Recedes from Headline without becoming body weight.
- **Body** (regular 400, 1rem/1.125rem, line-height 1.7): Prose descriptions, project summaries, about copy. Measures stay within ~65ch where possible.
- **Label** (JetBrains Mono 400, 0.625rem, uppercase, tracking 0.25–0.4em): Section eyebrows (`"01 / Sobre mí"` format), form field labels, card sub-headers. The 0.3em tracking at 10px maintains legibility at minimal size.

### Named Rules

**The Weight-Only Hierarchy Rule.** The type system uses a single face (Geist) across all display and body roles. All hierarchy lives in weight and size — never in a second typeface. Introducing a second display face (Syne, Playfair, etc.) breaks the system.

**The Tight Display Rule.** Display-role text tracks at −0.04em and sets at line-height 0.9. Any display text that relaxes this tracking or increases this line-height is a regression, not a style choice.

## Layout

The container spans 80rem (1280px) maximum width with fluid horizontal padding: 1.5rem at mobile, 2.5rem at `md` (768px), 4rem at `lg` (1024px+). All sections carry vertical padding of `8rem` (128px) top and bottom. This generous section rhythm is the primary mechanism for visual rest — the sections breathe before they speak.

Page composition alternates between Page White and Blueprint Wash sections: Hero, About, Projects, Rugby, Footer on white; Education and Contact on wash. The ~4% lightness difference is the only vertical zone separator — no explicit divider lines between sections.

Grids are asymmetric on desktop: a dominant column (`1.4fr` or `1.2fr`) paired with a secondary column (`1fr`), reflecting the content hierarchy within each section. No equal-weight two-column grids exist in the layout.

Internal spacing steps: `1rem` (tight inline), `1.5rem` (field pairs), `2rem` (item stacks), `3.5rem` (sub-group gaps), `4rem` (major section-internal divides), `5.5rem` (column separation). The section padding defines the outer frame; internal gaps are always smaller.

At mobile, all multi-column layouts collapse to single column. Container padding shrinks but section vertical rhythm (`py-32`) is preserved.

## Elevation & Depth

Depth is expressed through three stacked mechanisms, none of which requires decoration at rest.

**Tonal layering** is the primary separator: Page White sections alternate with Blueprint Wash sections. The ~4% lightness difference between `#FFFFFF` and `#F4F7FB` registers as a zone shift without a dividing line.

**Structural stroke** is the secondary separator: `1px` borders at `rgba(15, 23, 42, 0.08)` define cards and input containers at rest. The border carries almost no ink weight — a structural hint, not a visible edge.

**Reactive shadow** is the tertiary layer, appearing only on card hover:
```
0 30px 60px -30px rgba(15, 23, 42, 0.12),
0 0 0 1px rgba(37, 99, 235, 0.15)
```
The first shadow is a deep diffuse lift. The second is a 1px Circuit Blue ring — the border color shifts from neutral to accent at the same moment. Together they communicate elevation without any resting-state weight.

### Named Rules

**The Flat-at-Rest Rule.** No component carries a shadow in its default state. Shadows are state indicators, not aesthetic decoration. A card that looks elevated before you touch it has already wasted its most useful signal.

## Shapes

The form language is uniformly sharp: zero border radius on every interactive or container element — buttons, cards, inputs, icon wrappers, chips, select fields. This is not an oversight; it is a consistent stance that aligns with the "clean sheet" metaphor: graph paper, architectural drafting, technical precision.

The 4px radius on the scrollbar thumb is the sole exception — a browser-convention accommodation, not a design decision.

**Recurring geometric motifs:**
- **Accent lines** (`.accent-line`): 1px horizontal rules with a center-fade gradient — transparent → Circuit Blue → transparent. Used to frame sections and divide compositional blocks.
- **Solid divider lines** (`.accent-line-solid`): 1px lines at 18% opacity. Used in the hero as full-width ruled separators between name, role, and bio blocks.
- **Icon containers**: 40×40px square bordered containers holding 18px icons — the square grid echoes the overall sharp geometry.
- **Left accent bars**: 1px × 48px Circuit Blue vertical bar at the inner-left edge of structured content cards — a refined typographic marker for data-heavy blocks.

## Components

### Buttons

Sharp and direct — no radius, uppercase labels, deliberate tracking. Two variants: accent (blue-bordered, fills solid on hover) and ghost (muted border, inverts to near-black on hover).

- **Shape:** Zero radius. Padding 12px × 24px (0.75rem × 1.5rem).
- **Button Accent:** Transparent fill at rest, 1px Circuit Blue border, near-black text, 14px uppercase, tracking 0.2em. Hover: fills Circuit Blue, text shifts to white.
- **Button Ghost:** Transparent fill at rest, 1px `rgba(139,133,144,0.4)` border, near-black text. Hover: fills near-black, text shifts to white, border matches fill.
- **Transition:** `all 200ms` — intentionally fast to feel direct, not animated.
- **Disabled:** 50% opacity, `cursor-not-allowed`.

### Cards / Containers

- **Corner Style:** Zero radius — sharp rectangle.
- **Background:** Page White (`#FFFFFF`).
- **Border:** 1px `rgba(15,23,42,0.08)` at rest. Hover: accent ring `rgba(37,99,235,0.15)` + diffuse shadow.
- **Shadow:** None at rest. Hover: `0 30px 60px -30px rgba(15,23,42,0.12), 0 0 0 1px rgba(37,99,235,0.15)`.
- **Internal Padding:** 24px (compact), 32px (standard), 40px (featured/prominent).
- **Left bar accent:** Optional 1px × 48px Circuit Blue vertical bar at the top-left inner edge for structured data cards.
- **Transition:** `all 300ms`.

### Inputs / Fields

- **Style:** White background, 1px border `rgba(15,23,42,0.08)`, zero radius. Text 14px near-black, placeholder slate-muted.
- **Focus:** Border shifts to Circuit Blue (`#2563EB`), `outline: none`. No glow or ring.
- **Padding:** 12px × 16px (0.75rem × 1rem).
- **Label:** JetBrains Mono 10px uppercase tracking 0.3em, Circuit Blue — rendered above the input.
- **Error:** Toast-based error messaging; no per-field error styling in the system.

### Navigation

A fixed header that transitions between two states: transparent at page top; `bg-primary/85` with `backdrop-blur-md` and a 1px bottom border when scrolled past 32px.

- **Logo (MGL):** Geist display 24px, tracking 0.3em, Circuit Blue Light at rest → Circuit Blue on hover.
- **Nav links:** 14px uppercase, tracking 0.2em, slate-secondary → Circuit Blue Light on hover. Underline indicator animates from width 0 → full on hover (300ms).
- **CTA (Contratame):** Uses `btn-accent` — the page's highest-emphasis inline action.
- **Mobile overlay:** Full-screen takeover with circular clip-path reveal animation from the hamburger position (`circle(0% at 90% 5%)` → `circle(150%)`). Nav links render at display scale (32px Geist) with a 0.08s stagger.

### SectionTitle (Signature Component)

Every section opens with this structural block. It is the typographic frame for the entire page.

- **Eyebrow:** JetBrains Mono 12px, uppercase, tracking 0.3em, Circuit Blue — formatted as `"0N / Label"` (section index + category name).
- **Heading (h2):** Geist semibold 600, clamp 2.25rem → 4.5rem, tracking −0.01em, near-black.
- **Subtitle:** 16px → 18px, regular 400, slate-secondary, max-width 42rem.
- **Accent bar:** `.accent-line` (1px center-fade gradient) at 96px width, 8px top margin.
- **Animation:** Each element — eyebrow, heading, subtitle, accent bar — staggers in on scroll with GSAP `power3.out`, `y: 30 → 0`, `opacity: 0 → 1`, 0.08s stagger per element.

## Do's and Don'ts

### Do:
- **Do** alternate page sections between Page White (`#FFFFFF`) and Blueprint Wash (`#F4F7FB`) to create tonal depth without explicit dividers.
- **Do** use Circuit Blue (`#2563EB`) for active borders, interactive labels, and the CTA fill on hover only — keep its presence at ≤10% of any screen.
- **Do** set display-role text at tracking −0.04em and line-height 0.9; set headline and title roles at tracking −0.01em.
- **Do** use JetBrains Mono exclusively for labels, eyebrows, and data annotations — never for body or heading roles.
- **Do** keep all shapes at zero border radius: buttons, cards, inputs, icon containers — every surface is a sharp rectangle.
- **Do** let shadows appear only as a hover/state response — the `.card-elevated:hover` pattern is the canonical model.
- **Do** let interactive depth resolve in the border first (neutral → accent) before adding shadow weight.

### Don't:
- **Don't** apply gradient text to headings or stat numbers. Use solid Circuit Blue for emphasis; `.text-accent-gradient` is defined but production-prohibited.
- **Don't** introduce a second display typeface. The single-family weight hierarchy is the system's core invariant.
- **Don't** add border-radius to any interactive or container element — even 4px contradicts the form language.
- **Don't** use Circuit Blue Light (`#60A5FA`) or Muted (`#93C5FD`) as foreground text on Page White — neither passes WCAG AA contrast.
- **Don't** add resting-state shadows. Depth emerges from state transitions, not decoration.
- **Don't** use the `.text-accent-gradient` utility in any new component or section.
