---
name: Executive Intelligence Design System
colors:
  surface: '#f9faf6'
  surface-dim: '#d9dad7'
  surface-bright: '#f9faf6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f0'
  surface-container: '#edeeea'
  surface-container-high: '#e7e9e5'
  surface-container-highest: '#e2e3df'
  on-surface: '#1a1c1a'
  on-surface-variant: '#424848'
  inverse-surface: '#2e312f'
  inverse-on-surface: '#f0f1ed'
  outline: '#727878'
  outline-variant: '#c2c8c7'
  surface-tint: '#506261'
  primary: '#051616'
  on-primary: '#ffffff'
  primary-container: '#1a2b2b'
  on-primary-container: '#809392'
  inverse-primary: '#b7caca'
  secondary: '#006a6a'
  on-secondary: '#ffffff'
  secondary-container: '#98f2f1'
  on-secondary-container: '#007070'
  tertiary: '#001811'
  on-tertiary: '#ffffff'
  tertiary-container: '#002f23'
  on-tertiary-container: '#5f9b87'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e6e6'
  primary-fixed-dim: '#b7caca'
  on-primary-fixed: '#0d1e1e'
  on-primary-fixed-variant: '#394a4a'
  secondary-fixed: '#98f2f1'
  secondary-fixed-dim: '#7bd5d5'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f50'
  tertiary-fixed: '#b1efd8'
  tertiary-fixed-dim: '#96d3bd'
  on-tertiary-fixed: '#002118'
  on-tertiary-fixed-variant: '#0d503f'
  background: '#f9faf6'
  on-background: '#1a1c1a'
  surface-variant: '#e2e3df'
typography:
  display-lg:
    fontFamily: manrope
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4rem
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: manrope
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: manrope
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: manrope
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: manrope
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: manrope
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: dmSans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.005em
  body-md:
    fontFamily: dmSans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: 0em
  body-sm:
    fontFamily: dmSans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0em
  label-md:
    fontFamily: dmSans
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-sm:
    fontFamily: dmSans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  container-max: 88rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
---

## Brand & Style

This design system conveys an aura of calm, hyper-competent executive assistance. It blends the structural, laser-focused discipline of developer-first tooling with the effortless spatial clarity of high-end editorial workspaces. The visual signature relies on crisp white backdrops, tinted deep slate structural boundaries, and subtle translucent mint-and-sky accents that denote active machine cognition without visual noise.

Interactions evoke an atmosphere of poise, precision, and frictionless execution. Whitespace acts not merely as padding, but as an active structural element to ease cognitive load. Subtle frosted glass borders and ultra-soft, daylight-calibrated ambient shadows impart an architectural, layered depth suited for high-stakes decision-making and continuous productivity.

## Colors

The palette balances authoritative structure with refreshing, airy accents:

- **Primary (`#1A2B2B`)**: Deep slate teal. Anchors typography, high-priority interactive affordances, and razor-sharp structural outlines. Provides unmatched contrast against light surfaces.
- **Secondary (`#2A8C8C`)**: Polished deep teal. Powers communicative states, active filters, focal icons, interactive hover states, and intelligent synthesis highlights.
- **Tertiary (`#A8E6CF`)**: Soft luminous mint. Reserved for subtle status pills, ambient gradients, AI-generation badges, and translucent frosted highlights.
- **Neutral Surface (`#F8F9F5`)**: Warm alabaster canvas. Provides an organic, paper-like warmth that offsets cold screen glare, framing pure `#FFFFFF` layered cards.
- **Sky Tint (`#B5E1FF`)**: Secondary accent for informational notices, thread branching cues, and contextual timeline markers.

Apply color with high restraint: 85% neutral slate-on-light harmony, 10% secondary teal navigation/action emphasis, and 5% mint/sky kinetic highlights denoting AI activity.

## Typography

The typographic hierarchy pairs the geometric, confident authority of Manrope with the low-contrast, highly legible neutrality of DM Sans.

- **Headlines**: Manrope establishes a structured architectural cadence. Negative letter spacing at scale tightens word shapes, ensuring long executive titles and AI prompt summaries retain an editorial, polished rhythm.
- **Body & Interactive Content**: DM Sans handles analytical responses, conversational threads, metadata streams, and multi-paragraph summaries. Its generous aperture and balanced proportions sustain legibility across complex multi-column dashboard panes.
- **Labels & Microcopy**: Formatted in medium and semibold weights with slight tracking expansion to maintain clarity across dense metadata badges and command palette shortcuts.

## Layout & Spacing

This design system uses an adaptable 12-column structural grid backed by an absolute 8px vertical grid (with half-step 4px increments for tightly-scoped inline items).

- **Desktop (1024px+)**: A persistent 280px left rail for workspaces and sessions, an expandable conversational core (max-width 48rem), and an optional contextual drawer (360px) for file previews and intelligence graphs. Gutters measure 24px (`space-lg`).
- **Tablet (768px – 1023px)**: Left rail collapses to a 64px icon-rail or off-canvas overlay. Conversational viewport fluidly expands to occupy available screen width with 24px margins.
- **Mobile (< 768px)**: Single column with dynamic vertical stacking. Persistent bottom input dock, edge margins pinned at 16px (`gutter-mobile`), with auxiliary drawers transitioning into upward modal sheets.

Vertical rhythm between assistant responses and user interactions follows generous vertical spacing (`space-xl`), creating breathing room between successive conversational turns.

## Elevation & Depth

Depth is established through translucent stacking, frosted blurs, and daylight ambient diffusion rather than heavy physical shadows:

- **Level 0 (Canvas)**: Base background set to `#F8F9F5`. Completely flat and non-distracting.
- **Level 1 (Card & Module Surface)**: Solid `#FFFFFF` or `rgba(255, 255, 255, 0.85)` backed by an 8px blur (`backdrop-filter: blur(8px)`). Framed with a 1px ghost border using `rgba(26, 43, 43, 0.08)`. Shadow: `0 1px 3px rgba(26, 43, 43, 0.04), 0 4px 12px rgba(26, 43, 43, 0.02)`.
- **Level 2 (Active Overlays & Command Bars)**: Floated containers (e.g., chat input docks, toolbars) set to `rgba(255, 255, 255, 0.92)` with 16px blur, framed with `rgba(42, 140, 140, 0.15)`. Shadow: `0 8px 24px rgba(26, 43, 43, 0.06), 0 2px 6px rgba(26, 43, 43, 0.03)`.
- **Level 3 (Modals & Sheets)**: Solid `#FFFFFF` elevated above a backdrop scrim of `rgba(26, 43, 43, 0.35)` with 4px ambient blur. Shadow: `0 20px 48px rgba(26, 43, 43, 0.12), 0 4px 12px rgba(26, 43, 43, 0.04)`.

## Shapes

The geometric framework uses roundedness scale `2` to balance architectural precision with approachability:

- **Base Radius (0.5rem / 8px)**: Buttons, text fields, menu items, dropdown rows, and badge indicators.
- **Large Radius (1rem / 16px)**: Conversational speech bubbles, prompt chips, structured tool cards, and context panels.
- **Extra Large Radius (1.5rem / 24px)**: Floated bottom input capsules, primary workspace container frames, and floating action pods.
- **Pills**: Reserved exclusively for live AI generation status indicators, quick suggestion filters, and count badges.

## Components

### Buttons
- **Primary**: Solid `#1A2B2B` background with `#FFFFFF` text. Micro-transition on hover to `#2A8C8C`. Rounded to `0.5rem`. Height: 40px for standard actions, 32px for compact table/thread actions.
- **Secondary**: Frosted `#FFFFFF` base with 1px `rgba(26, 43, 43, 0.12)` border and `#1A2B2B` text. Hover yields `rgba(168, 230, 207, 0.15)` tinted background.
- **Tertiary / Ghost**: Transparent fill, `#1A2B2B` text, shifting to `rgba(26, 43, 43, 0.05)` fill on interaction.

### Chips & Suggestion Pills
- Sized at 32px height, built with `1rem` corner rounding.
- Background: `rgba(255, 255, 255, 0.8)` with a 1px border of `rgba(26, 43, 43, 0.08)`.
- Hover introduces an interactive glow: border color transitions to `#2A8C8C`, and background takes on a subtle wash of `#B5E1FF` at 15% opacity.

### Conversational Input Dock
- Floating capsule container (`1.5rem` radius) anchored to the viewport bottom with `space-xl` margin.
- Uses `rgba(255, 255, 255, 0.94)` frosted surface with `backdrop-filter: blur(12px)`.
- Border is 1px solid `rgba(26, 43, 43, 0.1)`. Focus within shifts the border to 1.5px `#2A8C8C` with an ambient ring: `0 0 0 3px rgba(168, 230, 207, 0.35)`.
- Includes embedded contextual attachment chips, mode toggles, and an integrated slate send button.

### Cards & Structured Responses
- Pure `#FFFFFF` fill nested on the `#F8F9F5` canvas, rounded to `1rem`.
- Outlined with 1px `rgba(26, 43, 43, 0.06)`.
- Internal sections are separated by hairline borders (`rgba(26, 43, 43, 0.04)`), featuring concise DM Sans body metrics and Manrope section headers.

### Form Inputs & Checkboxes
- **Inputs**: Flat `#FFFFFF` backgrounds with 1px `rgba(26, 43, 43, 0.14)` border, `0.5rem` radius, and 40px height. Placeholder styled in `rgba(26, 43, 43, 0.4)`.
- **Checkboxes & Radios**: 18px square (`0.25rem` radius) or circle. Unchecked: 1.5px border `rgba(26, 43, 43, 0.3)`. Checked: `#1A2B2B` fill with pure white icon glyph.

### AI Thinking & Synthesis Indicator
- A linear pill badge combining `#F8F9F5` base, subtle pulsing shimmer across `#A8E6CF` and `#B5E1FF`, with `#1A2B2B` label text in `label-sm`.