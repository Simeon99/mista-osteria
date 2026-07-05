---
name: Mista Osteria
description: Editorial one-page site for an Italian osteria, built around 72-hour dough fermentation and wood-fired craft
colors:
  terracotta: "#a56d33"
  terracotta-deep: "#8a5726"
  terracotta-soft: "#c9945f"
  flour-white: "#fcf7f3"
  flour-tint: "#f5ede3"
  roasted-umber: "#2b2018"
  ash-umber: "#6e6053"
  flour-hairline: "#e7ddd1"
  oven-char: "#1c140d"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.25rem, 4vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.875rem, 2.5vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.15
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.01em"
rounded:
  pill: "9999px"
  lg: "28px"
  md: "24px"
  sm: "16px"
spacing:
  container-max: "1320px"
  section-y: "6rem"
  section-y-lg: "8rem"
  gap-md: "2.5rem"
  gap-lg: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.terracotta-deep}"
    textColor: "{colors.flour-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.terracotta}"
  button-primary-on-dark:
    backgroundColor: "{colors.flour-white}"
    textColor: "{colors.roasted-umber}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
---

# Design System: Mista Osteria

## 1. Overview

**Creative North Star: "The Wood-Fired Editorial"**

Mista Osteria reads like a magazine spread built around a single subject: dough, fire, and the three days between them. The system is editorial-restrained (one accent, generous whitespace, a serif/sans pairing doing the work) but every design decision ultimately points back to the physical craft (the 72-hour fermentation, the wood oven, the Italian-sourced ingredients). Warmth comes from photography, named ingredients, and the terracotta accent, never from decoration for its own sake.

This system explicitly rejects the generic AI-marketing playbook: no purple/blue gradients, no tiny uppercase eyebrow labels stacked above every section, no identical three-card grids, no gradient text, no glassmorphism used as decoration, no hero-metric stat blocks. It also rejects both directions of restaurant cliché: no red-and-white checkered-tablecloth kitsch, and no sterile chain-restaurant polish. It should read as one real, specific, family-run place.

**Key Characteristics:**
- One accent color (terracotta) carrying warmth across the entire page, light and dark sections alike
- Flat surfaces by default; depth comes from photography and whitespace, not shadows
- Large soft-radius photo panels (28px) as the dominant visual device, never a grid of identical cards
- A single deliberate dark inversion at the very end (final CTA + footer), not scattered dark sections
- Serif display type used sparingly and always with a reason (headlines, category names), never as body text

## 2. Colors

The palette is a single warm hue family (terracotta) stretched across three depths, set against flour-white and roasted-umber neutrals. Nothing outside that hue appears anywhere on the page.

### Primary
- **Terracotta** (#a56d33): The one accent. Used for icons, borders, large decorative text (italic emphasis words), and hover states. Never used for small body-size text directly (fails AA at that size against flour-white).
- **Terracotta Deep** (#8a5726): The accessible working shade of the accent. Every button background and any small accent-colored text on a light background uses this, not the lighter primary. ~5.6:1 contrast against Flour White.
- **Terracotta Soft** (#c9945f): The accent's on-dark register. Used for small text and links inside the Oven Char footer/CTA block, where the primary or deep shades would be too dark to read. ~6.8:1 contrast against Oven Char.

### Neutral
- **Flour White** (#fcf7f3): Page background for every light section. Warm off-white, never pure white.
- **Flour Tint** (#f5ede3): A half-step deeper than Flour White. Used only to lift the Fermentation section and bordered info cards slightly off the page background, staying within the same light theme family.
- **Roasted Umber** (#2b2018): Primary text color. Warm near-black, never pure black. ~14.6:1 contrast against Flour White.
- **Ash Umber** (#6e6053): Secondary/muted text (subheads, descriptions, captions). ~5.6:1 contrast against Flour White, still comfortably AA.
- **Flour Hairline** (#e7ddd1): The only border/divider color. Used at low visual weight, never as a decorative stripe.
- **Oven Char** (#1c140d): The single dark surface on the page, reserved for the final CTA + footer block. Warm near-black, not pure black. ~16.8:1 contrast for Flour White text against it.

### Named Rules
**The One Fire Rule.** Terracotta, in one of its three depths, is the only accent color on the page. It never shares a section with a second hue. Deep for anything read at small size, primary for anything decorative or large, soft only on the dark footer.

**The Single Inversion Rule.** The page is light-themed from hero through the location section, without exception. Exactly one deliberate switch to Oven Char happens once, at the very end (final CTA + footer), and never reverts. No section before it goes dark, and nothing after it returns to light.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia, serif fallback)
**Body Font:** Manrope (with system-ui, sans-serif fallback)

**Character:** An editorial serif built for headlines and category names, paired with a clean geometric-humanist sans for everything meant to be read quickly (body copy, prices, navigation, buttons). The pairing is a genuine contrast pair, not two similar sans-serifs; the serif never appears in a paragraph of body text, and the sans never appears in a headline.

### Hierarchy
- **Display** (400, `clamp(2.25rem, 4vw, 3.75rem)`, 1.05 line-height, -0.01em tracking): Hero H1 only. Two lines max. One word may be set in italic for emphasis (same family, never a mixed-family flourish).
- **Headline** (400, `clamp(1.875rem, 2.5vw, 2.25rem)`, 1.15 line-height): Section H2s (Istaknuta jela, Poreklo namirnica, 72 sata, Sto vas čeka, the final CTA).
- **Title** (400, 1.125rem, 1.3 line-height, italic where used as a category label): Dish names, category sub-labels ("Pica", "Sa roštilja"), triptych step names.
- **Body** (400, 1rem–1.125rem, 1.6 line-height, Manrope): Paragraphs and descriptions. Capped around 46-60ch measure per section, never a full-width paragraph.
- **Label** (600, 0.875rem, 0.01em tracking, Manrope): Buttons, nav links, prices, small meta text.

### Named Rules
**The No-Mixed-Emphasis Rule.** Emphasis inside a headline is italic or bold of the same Cormorant Garamond family. Never drop a sans word into a serif headline or vice versa for "interest."

**The Zero-Eyebrow Rule.** No small uppercase tracked label sits above section headlines. The headline and its one-sentence body do the introducing; if a section needs a category marker, it is a normal-case italic sub-heading inline in the content (like "Pica" / "Sa roštilja"), never a decorative eyebrow above the H2.

## 4. Elevation

The system is flat by default. Surfaces sit directly on the page background with no ambient shadow; hierarchy comes from whitespace, photography, and the light/dark section split, not from elevation. There is exactly one deliberate exception: the offset second photo in the Featured Dishes section (the smaller image layered in front of the larger one) carries a soft, ink-tinted shadow to sell the physical layering of that specific composition. It is not a reusable card-elevation pattern.

### Shadow Vocabulary
- **Offset-photo shadow** (`box-shadow: 0 20px 45px -20px rgba(43, 32, 24, 0.35)`): Tinted to Roasted Umber, never pure black. Used only where one photo is deliberately layered in front of another (currently: Featured Dishes' offset image pair). Do not apply to buttons, info cards, or the navbar.

### Named Rules
**The Flat-By-Default Rule.** No card, button, or panel gets a resting shadow. If something needs to feel "lifted," that is a signal to use photography, whitespace, or the offset-layering pattern above, not `box-shadow`.

## 5. Components

Interactive elements stay quiet at rest and become tactile the moment they're touched: no loud hover states, but every pressable element visibly compresses on press (`scale(0.97)`), confirming the tap registered.

### Buttons
- **Shape:** Full pill (`rounded-full`, 9999px). The only radius used for anything clickable.
- **Primary (light sections):** Terracotta Deep background (#8a5726), Flour White text, `14px 28px` padding, Label typography (600 weight). Hover shifts to Terracotta primary (#a56d33); press scales to 0.97 over 150ms ease-out.
- **Primary (on Oven Char):** Inverts to Flour White background with Roasted Umber text, since Terracotta Deep would be too close to the dark background to read as a button. Same pill shape, same press behavior.
- **Icon-only (nav hamburger/close):** No background at rest; `scale(0.90)` on press. Same tactile-on-press rule applies even without a visible resting state.

### Cards / Containers
- **Corner style:** Large soft radius (28px) for anything containing a full photo (hero image, banners, photo-duo grid). Medium (24px) for secondary/smaller photo tiles. Small (16px, `rounded-2xl`) for compact icon tiles (the fermentation triptych).
- **Background:** Bordered info cards (e.g. the Location hours/address card) use Flour Tint background with a 1px Flour Hairline border. No shadow.
- **Border:** Flour Hairline (#e7ddd1) only, always 1px, always full-perimeter. Never a colored side-stripe.
- **Internal padding:** 32-40px (`p-8`/`p-10`) for bordered info cards.

### Image Panel
The dominant visual device on the page: a full-bleed photo inside a large-radius rounded container (28px), `object-cover`, no border, no shadow (except the one offset-layering exception above). Used for the hero image, the Featured Dishes photos, the Poreklo namirnica banner, the Fermentation crumb macro, and the Location photo pair. This is the system's signature component; reach for it before reaching for a bordered card.

### Section Header
Every section title is a vertical stack: Headline, then a one-sentence Body directly beneath it, both left-aligned (or centered only in the Fermentation section, as a deliberate variation). Never a left-headline / right-paragraph split layout, and never an eyebrow above it.

### Icon + Label Row
Used for ingredient facts (Poreklo namirnica) and contact details (Location card): a Phosphor icon (regular weight, 20-22px, Terracotta primary color) beside a Title-weight label and an Ash Umber description line beneath. No background, no border, no card wrapper around the row.

### Navigation
Sticky top bar, Flour White at 95% opacity with backdrop blur, 1px Flour Hairline bottom border, 64-72px tall. Desktop nav links are Label typography, Roasted Umber, hover to Terracotta Deep with a color-only transition (no motion). Mobile collapses to a full-screen Flour White drawer with staggered link entrance (45ms between items) and the same pill CTA button at the bottom.

## 6. Do's and Don'ts

### Do:
- **Do** keep the entire page on one accent hue (terracotta, in its three depths) — the One Fire Rule.
- **Do** use Terracotta Deep (#8a5726), not primary Terracotta (#a56d33), for any button or small text that needs AA contrast on Flour White.
- **Do** keep every section flat; reach for whitespace or an image panel before reaching for a shadow.
- **Do** use the 28px-radius image panel as the default way to show a photo full-bleed.
- **Do** give every pressable element a `scale(0.97)` (or `0.90` for icon buttons) press state.
- **Do** stack section headers vertically (headline, then one-sentence body), left-aligned by default.

### Don't:
- **Don't** introduce a second accent hue anywhere, including the footer or hover states.
- **Don't** add a shadow to a button, card, or navbar; the one offset-photo exception is not a precedent.
- **Don't** stack a small uppercase tracked "eyebrow" label above a section headline — the Zero-Eyebrow Rule.
- **Don't** use identical three-card grids for menu items, ingredients, or anything else; the page's whole point is to avoid that AI-generic template.
- **Don't** use gradient text, glassmorphism as decoration, or a hero-metric stat block anywhere.
- **Don't** reach for checkered-tablecloth or clip-art restaurant kitsch, and don't over-polish into sterile chain-restaurant stock photography either — this is one real, specific place.
- **Don't** invert a second section to dark. The Oven Char background is reserved for the final CTA + footer block only, once, at the very end.
