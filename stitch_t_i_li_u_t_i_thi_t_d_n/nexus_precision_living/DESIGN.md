---
name: Nexus Precision Living
colors:
  surface: '#faf8fe'
  surface-dim: '#dad9df'
  surface-bright: '#faf8fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f8'
  surface-container: '#eeedf3'
  surface-container-high: '#e9e7ed'
  surface-container-highest: '#e3e2e7'
  on-surface: '#1a1b1f'
  on-surface-variant: '#5d3f3c'
  inverse-surface: '#2f3034'
  inverse-on-surface: '#f1f0f5'
  outline: '#926f6b'
  outline-variant: '#e6bdb8'
  surface-tint: '#c00017'
  primary: '#be0017'
  on-primary: '#ffffff'
  primary-container: '#e5252a'
  on-primary-container: '#ffffff'
  inverse-primary: '#ffb4ac'
  secondary: '#5f5e60'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfe1'
  on-secondary-container: '#636264'
  tertiary: '#be002b'
  on-tertiary: '#ffffff'
  tertiary-container: '#e71d3d'
  on-tertiary-container: '#ffffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ac'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#93000f'
  secondary-fixed: '#e4e2e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1b1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#ffdad9'
  tertiary-fixed-dim: '#ffb3b2'
  on-tertiary-fixed: '#410008'
  on-tertiary-fixed-variant: '#92001f'
  background: '#faf8fe'
  on-background: '#1a1b1f'
  surface-variant: '#e3e2e7'
  surface-canvas: '#FFFFFF'
  surface-subtle: '#F5F5F7'
  surface-glass: rgba(255, 255, 255, 0.72)
  surface-glass-tint: rgba(245, 245, 247, 0.8)
  glass-border: rgba(255, 255, 255, 0.6)
  glass-border-dark: rgba(0, 0, 0, 0.08)
  ink-primary: '#1D1D1F'
  ink-secondary: '#6E6E73'
  ink-tertiary: '#86868B'
  ink-inverse: '#FFFFFF'
  nexus-glow: rgba(229, 37, 42, 0.28)
  status-success: '#34C759'
  status-warning: '#FF9500'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.025em
  headline-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 25px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.005em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.06em
  price-hero:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  price-card:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: -0.015em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system establishes an e-commerce flagship experience for official Magic home appliances. The visual narrative combines Apple-grade industrial precision with the vibrant, technological energy of the brand's signature crimson aesthetic.

### Target Audience & Emotional Intent
- **Audience:** Modern homeowners, design-conscious urban professionals, and technology enthusiasts seeking certified, durable, high-performance smart appliances.
- **Tone:** Pristine, authoritative, technologically advanced, and effortlessly effortless.
- **Emotional Response:** Confidence in craftsmanship, sensory delight through luminous frosted materials, and absolute clarity during product evaluation and checkout.

### Aesthetic Direction: Precision Glassmorphism & High-Tech Minimalism
The design system fuses ultra-clean negative space with multi-layered translucency:
- **Optical Glass Layers:** Utilizing `backdrop-filter: blur(24px) saturate(180%)` to capture background luminosity while keeping foreground typography crisp.
- **Precision Metallic Accents:** Sub-pixel hairline borders (`rgba(255, 255, 255, 0.65)` in light mode or micro-specular chrome reflections) deliver tactile industrial authenticity.
- **Dynamic Chromatic Energy:** The dominant stark white and neutral aluminum palettes are strategically energized by vivid scarlet and crimson accents, reserved exclusively for decisive conversion moments, system statuses, and brand landmarks.

## Colors

The palette is engineered around deliberate chromatic restraint. Pure canvas whites and Apple-inspired aluminum neutrals form over 85% of the visual surface area, allowing product photography and the brand's vivid red hues to command immediate attention.

### Color Hierarchy & Roles
- **Primary (`#E5252A`):** The definitive Nexus crimson. Employed strictly for core conversion triggers (Primary CTAs, "Mua Ngay" buttons, key active states, and verified official badges).
- **Secondary (`#1D1D1F`):** Deep Obsidian. Serves as high-contrast structural text, dark-mode elements, solid utility chips, and authoritative hardware headers.
- **Tertiary (`#FF334B`):** Radiant Scarlet. Applied for secondary interactive hovers, promotional tags, energetic gradient stops, and real-time AI status indicators.
- **Neutral (`#86868B`):** Architectural graphite. Balances structural borders, secondary icons, metadata captions, and inactive tabs.

### Glass & Material Formulas
- **Standard Floating Glass:** Background `rgba(255, 255, 255, 0.72)` combined with backdrop blur `24px`, saturation `180%`, and a 1px composite outline of `rgba(255, 255, 255, 0.8)`.
- **Contrast Scrim Glass:** Background `rgba(245, 245, 247, 0.82)` with identical optical filters for layered flyouts, sticky matrices, and modal headers over imagery.

## Typography

The typographic system relies on **Inter** configured with tight tracking and balanced vertical metrics to evoke the optical qualities of Apple’s SF Pro Display and Text engine.

### Layout & Sizing Rules
- **Display & Headlines:** Headings use medium-to-bold weights with negative tracking (`-0.015em` to `-0.03em`) to anchor product features with cinematic authority.
- **Body & Microcopy:** Normal weights with zero or slightly positive tracking maintain crisp legibility through frosted translucent panels and high-DPI displays.
- **Vietnamese Diacritic Handling:** Line heights are kept relaxed (`1.4` to `1.5` on body text) to accommodate stacked tones in Vietnamese diacritics without vertical clipping.
- **Numeric & Pricing Figures:** Price tokens feature tabular numeral alignment (`font-variant-numeric: tabular-nums`) ensuring flawless vertical alignment in spec comparison tables and cart sheets.

## Layout & Spacing

The layout is built on a responsive 12-column fluid grid system that supports structured Bento box showcases, product matrices, and spacious editorial galleries.

### Grid & Breakpoints
- **Desktop (≥ 1280px):** 12-column grid, max-width `1360px`, `gutter: 1.5rem`, `margin: 2rem`. Bento items span 3, 4, 6, 8, or 12 columns with generous breathing space.
- **Tablet (768px – 1279px):** 8-column grid, `gutter: 1rem`, `margin: 1.5rem`. Multi-card carousels shift into balanced 2-column or 4-column structures.
- **Mobile (< 768px):** 4-column grid, `gutter-mobile: 0.75rem`, `margin-mobile: 1rem`. Bento grids collapse into vertical narrative cards or horizontal touch swiping ribbons.

### Spacing Philosophy
Consistent multiples of 4px and 8px govern internal card padding and micro-distances. Component groups utilize `space-md` (16px) internally, while major section blocks breathe through `space-xl` (40px) and `space-2xl` (64px) intervals to project an expansive, high-end showroom atmosphere.

## Elevation & Depth

Visual hierarchy uses frosted glass refraction, subtle inner highlights, and ambient feather shadows rather than heavy physical drops.

### Elevation Levels

1. **Flat / Base Layer (Canvas):**
   - Solid `#FFFFFF` or `#F5F5F7` surface. No elevation.

2. **Level 1 — Frosted Containers & Bento Panels:**
   - Background: `rgba(255, 255, 255, 0.75)`.
   - Backdrop Filter: `blur(20px) saturate(180%)`.
   - Border: `1px solid rgba(255, 255, 255, 0.65)` layered with `inset 0 1px 0 0 rgba(255, 255, 255, 0.9)`.
   - Shadow: `0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02)`.

3. **Level 2 — Floating Navigation & Sticky Controls:**
   - Background: `rgba(255, 255, 255, 0.82)`.
   - Backdrop Filter: `blur(24px) saturate(190%)`.
   - Border: `1px solid rgba(0, 0, 0, 0.06)`.
   - Shadow: `0 10px 30px -5px rgba(0, 0, 0, 0.06), 0 4px 10px -2px rgba(0, 0, 0, 0.03)`.

4. **Level 3 — Modals, Quick-View & Flying AI Cart Panels:**
   - Background: `rgba(255, 255, 255, 0.92)`.
   - Backdrop Filter: `blur(32px) saturate(200%)`.
   - Shadow: `0 24px 60px -12px rgba(0, 0, 0, 0.14), 0 8px 20px -4px rgba(0, 0, 0, 0.06)`.

5. **Signature Red Luminescence (Interactive Highlight):**
   - Active brand triggers and primary focal items leverage an energetic sub-surface glow: `box-shadow: 0 8px 24px -4px rgba(229, 37, 42, 0.35)`.

## Shapes

The design system enforces curvature inspired by Apple's squircle geometric language, generating a sleek, organic, and friendly feel.

### Corner Radius System
- **Core Radius (`roundedness: 2` / 0.5rem - 8px):** Input fields, inline badges, rating tags, and small dropdown items.
- **Large Radius (`rounded-lg` / 1rem - 16px):** Standard product cards, Bento secondary tiles, nested media containers, and modal action groups.
- **Extra Large Radius (`rounded-xl` / 1.5rem - 24px):** Primary Bento hero showcases, full-bleed promotional banners, and floating checkout drawers.
- **Pill Formats (`rounded-full`):** Global primary CTA buttons, floating status pills, notification badges, and the sticky Chat AI FAB.

## Components

### Buttons
- **Primary Action (Brand Crimson):**
  - Background: Linear gradient `135deg, #FF334B 0%, #E5252A 100%`.
  - Content: Pure White (`#FFFFFF`), `font-weight: 600`, `letter-spacing: -0.01em`.
  - Border: None, with shadow: `0 4px 14px rgba(229, 37, 42, 0.35)`.
  - Shape: Fully pill-shaped (`rounded-full`), height: 44px (desktop) / 48px (touch target mobile).
  - Hover: Opacity `0.94`, translation `-1px`, shadow expansion `0 6px 20px rgba(229, 37, 42, 0.45)`.
- **Secondary (Frosted Glass / Ghost):**
  - Background: `rgba(255, 255, 255, 0.8)`.
  - Backdrop Blur: `12px`.
  - Border: `1px solid rgba(0, 0, 0, 0.08)`.
  - Color: `#1D1D1F`.
  - Hover: Background `rgba(245, 245, 247, 0.95)`, border `rgba(0, 0, 0, 0.15)`.

### Product Cards & Bento Tiles
- **Structure:** Encased in frosted containers (`rounded-xl`, 20px padding) on `#F5F5F7` background.
- **Image Staging:** Products sit on neutral seamless backdrops with gentle soft bottom ambient reflections.
- **Badge Accents:** "Magic Official" and "Chính Hãng" micro-pills placed top-left with translucent red backgrounds (`rgba(229, 37, 42, 0.1)`) and sharp crimson text (`#E5252A`).
- **Interaction:** Smooth scale uplift (`scale(1.015)`) with shadow bloom on cursor hover.

### Chips & Filter Pills
- Inactive: Background `rgba(0, 0, 0, 0.04)`, text `#6E6E73`, border `1px solid transparent`.
- Active: Background `#1D1D1F`, text `#FFFFFF`, shadow `0 2px 8px rgba(0, 0, 0, 0.15)`.
- Filter Count / Tech Tags: Inset background `rgba(255, 255, 255, 0.2)` when active.

### Inputs & Quantity Pickers
- **Input Fields:**
  - Background: `rgba(255, 255, 255, 0.85)`.
  - Border: `1px solid rgba(0, 0, 0, 0.1)`.
  - Radius: 12px (`0.75rem`).
  - Focus: Border `#E5252A`, box-shadow `0 0 0 4px rgba(229, 37, 42, 0.15)`.
  - Typography: 15px `Inter`, text `#1D1D1F`, placeholder `#86868B`.
- **Stepper Counter:** Compact frosted capsule housing minus/plus icons with haptic snap feedback.

### Checkboxes & Radios
- Size: 20px x 20px.
- Unchecked: 1.5px border `rgba(0, 0, 0, 0.2)` on glass white.
- Checked: `#E5252A` solid background with a crisp white centered checkmark, complemented by a soft red glow.

### Specialized Commerce Components
- **Bento Specification Matrix:** Alternating rows of light frosted glass with sub-pixel horizontal dividers (`rgba(0, 0, 0, 0.04)`), featuring sticky product head headers for multi-model appliance comparison.
- **Nexus AI Shopping Assist Card:** Floating conversational window styled in ultra-pure glass (`rgba(255, 255, 255, 0.88)`), displaying dynamic typing animation, product recommendation carousels, and dual direct-purchase triggers (`[Xem Chi Tiết]` / `[Mua Ngay]`).
- **Vietnam Localized Trust Badges:** Frosted banner segment incorporating 100% genuine guarantees, direct Zalo hotline assistance, and instant express delivery markers.