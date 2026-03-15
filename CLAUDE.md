## Design Context

### Users
Wedding agents, photography studios, and destination wedding planners — primarily from mainland China, Hong Kong, and Japan — who need to book photogenic British churches and heritage venues for their clients. They arrive seeking reliable UK access and leave feeling that these venues are extraordinary and that every logistical detail will be handled invisibly. Secondary users are couples browsing directly.

### Brand Personality
**Prestigious. Discreet. Effortless.**
The brand speaks with quiet authority — never flashy, never loud. It communicates exclusivity through restraint. The tone is confident and direct, as though the reader is already a valued partner being given privileged access.

### Aesthetic Direction
- **Visual tone:** Ultra-luxury minimalism with warm metallics. Ivory, warm blacks, and gold — no other accent colors. Heavy whitespace. Light font weights. Serif-forward headings (Cormorant Garamond for English, Noto Serif SC/JP for CJK).
- **Emotion:** Excitement and wonder — "These venues are incredible." Visitors should feel discovery, visual delight, and anticipation.
- **References:** The restrained elegance of Aman Resorts, the editorial clarity of Cereal Magazine, the quiet confidence of The Row.
- **Anti-references:** No bright colors, no playful illustrations, no busy layouts, no stock photography aesthetic, no generic wedding template design.
- **Theme:** Dark mode hero/nav/footer (warm-black), light mode content sections (ivory/mist). Not a toggle — intentional contrast.

### Design Principles
1. **Less is the luxury.** Every element earns its place. Whitespace is a design feature, not empty space. Remove before adding.
2. **Gold is earned.** The gold accent (#B8965A) appears only at moments of importance — CTAs, active states, key labels. Overuse dilutes its power.
3. **Typography carries the weight.** With no photography, the serif type and generous spacing must do the work of communicating prestige. Letter-spacing, line-height, and font weight are primary design tools.
4. **Invisible complexity.** The site serves three languages with distinct typographic needs (CJK-aware sizing, locale-specific fonts). This complexity should be invisible to the user — every locale should feel native, not translated.
5. **Motion with purpose.** Animations are subtle entrance cues (fade-up, scroll-reveal), never decorative. They guide attention, not demand it. Transitions are smooth (200–300ms) and never jarring.

### Tech Stack
- **Framework:** Astro 6 (static site generation)
- **Styling:** Tailwind CSS 4 with custom theme tokens in `src/styles/global.css`
- **Fonts:** Google Fonts, loaded conditionally per locale
- **i18n:** 3 locales (en, zh, ja) with translations in `src/i18n/ui.ts`
- **Deployment:** GitHub Pages with custom domain (luxurylondonweddings.co.uk)

### Color Tokens
| Name | Hex | Role |
|------|-----|------|
| ivory | #FAF8F5 | Primary light background |
| champagne | #E8DDD3 | Secondary text, muted accents |
| gold | #B8965A | Primary accent — CTAs, borders, highlights |
| gold-light | #D4B87A | Hover states for gold |
| dark | #1A1A1A | Primary text color |
| slate | #3D3D3D | Body text |
| mist | #F0EDE8 | Subtle background variation |
| warm-black | #0F0E0D | Dark sections (hero, nav, footer) |
