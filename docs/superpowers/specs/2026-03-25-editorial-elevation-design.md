# Editorial Elevation: Full Design Pass

**Date:** 2026-03-25
**Approach:** B — Fix all bugs, replace cheap elements, redesign key moments for editorial impact
**Scope:** All pages and shared components

---

## 1. Critical Fix: Homepage Layout Bug

The homepage hero section causes a massive empty gap below it, hiding the services, why-us, marquee, and CTA sections. The root cause is likely CSS positioning (fixed or absolute) on the hero that removes it from normal document flow. Fix: ensure the hero uses normal flow so subsequent sections stack naturally below it.

## 2. Hero Section

- Keep the current staggered fade-up animation
- Replace the scroll indicator (currently icon boxes) with a minimal "Scroll" text label in gold uppercase with a thin animated vertical line below it
- Tighten the subtitle text to a shorter, punchier version
- Ensure the hero occupies full viewport height (`min-h-screen`)

## 3. Stats Bar Redesign

Current: plain text labels with no hierarchy.

New design:
- Dark background (warm-black) with thin gold border top and bottom
- Numbers in large Cormorant Garamond serif, gold color (32px)
- Labels in small uppercase champagne (11px, letter-spacing 2px)
- Vertical gold dividers (1px, 20% opacity) between each stat
- Four stats: "50+" / Curated Venues, "5" / Regions, "72h" / Confirmation, "3" / Venue Types

## 4. Service Cards Redesign

Current: emoji icons (⛪, ✝, 🏛, etc.) with centered layout.

New design:
- Remove all emoji icons
- Replace with italic Roman numeral markers (i, ii, iii, iv, v, vi) in gold serif, positioned top-right of each card
- Thin gold border (1px, 15% opacity) around each card instead of background color
- Small gold horizontal rule (32px wide) at the bottom of each card
- On hover: border transitions to full gold opacity
- Section heading left-aligned instead of centered to break the monotony

## 5. Venue Cards Redesign

Current: dark gradient boxes with venue name overlay — looks empty and unfinished.

New design — typographic composition on light background:
- Thin gold border card on ivory background
- Top row: venue type (e.g., "Church") left-aligned + founding date (e.g., "Est. 1123") right-aligned if `founded` field exists in frontmatter (omit if absent), both in gold uppercase 10px
- Venue name in large Cormorant Garamond serif (26px)
- Short prose excerpt from the venue's markdown body content (13px, slate color)
- Bottom: thin gold rule separator, then location left-aligned and "View →" right-aligned in gold
- On hover: border transitions to gold

## 6. Why Us Section

Current: uniform 2-column grid.

New design:
- Keep the numbered 01–04 format
- Change to alternating layout: odd items left-aligned, even items right-aligned
- Thin gold horizontal rule dividers between items
- Stagger the fade-in animation by 80ms per item for cascade effect

## 7. Agent CTA Section

- Full-bleed warm-black background
- Generous vertical padding (py-32)
- Gold horizontal ornament above heading: thin centered rule (48px) with a small diamond shape
- Center heading in large serif
- CTA buttons centered below

## 8. Venue Marquee

- Keep the infinite scrolling behavior
- Add thin gold rules above and below the marquee
- Slightly reduce font size and increase letter-spacing for editorial feel

## 9. Footer Redesign

Current: multi-column functional layout.

New design — editorial centered layout:
- Single gold horizontal rule at top (48px wide, centered) as entrance marker
- Brand name in large Cormorant Garamond serif, centered
- Tagline "Church & Heritage Venue Brokerage" in small uppercase below
- Navigation links in a single centered line with gold dot (·) separators
- Social links as gold text (not boxed badges)
- Copyright and legal links in very muted text at bottom
- Thin gold border-top separator above the copyright line

## 10. Navigation Refinement

- Reduce nav link font size slightly
- Add subtle gold underline on hover (transform from center, 250ms) instead of color change
- Refine language switcher: smaller, lighter weight, gold separator bar
- Nav scroll effect: keep backdrop blur, refine the border to be more subtle

## 11. Page Headers (All Inner Pages)

All inner pages share a dark header with title and optional subtitle.

Changes:
- Add a thin gold rule (48px) below the header text, centered
- Increase vertical padding for more breathing room
- Ensure consistent heading sizes across pages

## 12. Section Transitions & Spacing

- Vary padding between sections (py-20 to py-32) instead of uniform py-24
- Add thin gold divider ornaments between major sections: centered short horizontal rule (32–48px)
- Create visual rhythm through this variation

## 13. Scroll Animations

- Refine the fade-in-section: stagger children by 80ms for cascade effect
- Keep the 0.6s ease timing and 0.1 threshold
- Ensure reduced-motion still disables all animations

## 14. Button System

- Primary (gold fill): hover → lighten to gold-light, 250ms transition
- Ghost (outline): hover → fill with gold at 8% opacity, 250ms transition
- Both: slight letter-spacing increase on hover (0.5px extra) for a breathing effect

## 15. Contact Page

Current: sparse icon boxes.

New design:
- Replace icon boxes with editorial approach: large serif "Email" and "WeChat" headings with details below
- Add a brief warm sentence of brand voice above the contact methods
- Social links as gold text, not boxed badges
- More generous spacing throughout

## Files Affected

### Components (~13 files)
- `src/components/Nav.astro` — hover styles, font size
- `src/components/LanguageSwitcher.astro` — smaller, lighter weight, gold separator
- `src/components/Hero.astro` — layout fix, scroll indicator redesign
- `src/components/StatsBar.astro` — full redesign with gold numbers
- `src/components/ServiceCard.astro` — emoji removal (remove `icon` prop entirely), Roman numerals, gold borders
- `src/components/VenueCard.astro` — full redesign as typographic card
- `src/components/WhyUs.astro` — alternating layout, gold dividers
- `src/components/VenueMarquee.astro` — gold rules, spacing refinement
- `src/components/AgentCTA.astro` — full-bleed dark, gold ornament
- `src/components/Footer.astro` — editorial centered redesign
- `src/components/GuaranteeBadge.astro` — refine to match new style
- `src/components/ProcessSteps.astro` — spacing and divider refinement
- `src/components/PlatformIcons.astro` — gold text links style

### Layouts (~1 file)
- `src/layouts/PageLayout.astro` — page header gold rule, padding refinement (affects all inner pages)

### Pages (~3 files)
- `src/pages/index.astro` — section spacing variation, services heading alignment, remove icon props from ServiceCard calls
- `src/pages/venues.astro` — updated grid for new card design
- `src/pages/contact.astro` — editorial layout redesign

### Styles (~1 file)
- `src/styles/global.css` — new utility classes, animation refinements, gold ornament styles

### Locale Pages
- `src/pages/zh/` and `src/pages/ja/` — same structural changes cascade through shared components, minimal direct edits needed

## Out of Scope

- No new pages or routes
- No photography or image assets
- No changes to i18n translation strings (only structural/styling changes)
- No changes to venue content markdown files
- No new components — only redesigning existing ones
- No changes to astro.config or build configuration
- No changes to Testimonial.astro (not currently used on any page)
