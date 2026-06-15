---
name: Solvera
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#58413f'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#8c716e'
  outline-variant: '#e0bfbc'
  surface-tint: '#ac322e'
  primary: '#690008'
  on-primary: '#ffffff'
  primary-container: '#8b1a1a'
  on-primary-container: '#ff9a91'
  inverse-primary: '#ffb3ac'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#30312e'
  on-tertiary: '#ffffff'
  tertiary-container: '#474744'
  on-tertiary-container: '#b6b5b1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb3ac'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#8a1a1a'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-lg:
    fontFamily: Space Mono
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -1px
  headline-lg-mobile:
    fontFamily: Space Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Mono
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Courier Prime
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
  label-sm:
    fontFamily: Courier Prime
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.2'
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1200px
---

## Brand & Style

This design system establishes a "Noir Investigative" aesthetic for a school class environment. The brand personality is inquisitive, authoritative, and intellectual, transforming academic tasks into "case files" and students into "agents." 

The visual style is a hybrid of **Modern Minimalism** and **Tactile Retro**. It utilizes high-contrast typography and a structured, document-based layout to mimic the feel of a vintage detective agency while maintaining the usability of a modern SaaS platform. The emotional response is one of intrigue and focus—designed to make learning feel like uncovering a series of high-stakes mysteries.

**Key Visual Principles:**
- **The Dossier Effect:** Information is grouped in containers that look like physical manila folders or classified documents.
- **Redacted Accents:** Strategic use of black bars and thick underlines for emphasis.
- **Atmospheric Depth:** Subtle grain textures and paper-like backgrounds to prevent a flat digital feel.

## Colors

The palette is derived from classic film noir and vintage forensic documents. 

- **Primary (#8B1A1A):** A deep, dried-blood red used for high-priority calls to action, "Top Secret" stamps, and critical alerts.
- **Secondary (#1A1A1A):** An "Inky Black" used for heavy headers, sidebar backgrounds, and "redacted" UI elements.
- **Tertiary/Surface (#F9F7F2):** A warm, parchment-toned cream. This serves as the primary background color to reduce eye strain and provide a tactile, paper-like feel.
- **Neutral (#4A4A4A):** A leaden grey used for secondary text and supporting icons, ensuring deep contrast against the cream surface.

Functional colors (Success/Warning) should be used sparingly, often tinted with black to keep them within the moody atmospheric spectrum.

## Typography

The typography system relies on a high-contrast pairing between technical monospaced fonts and clean, modern sans-serifs.

- **Space Mono (Headlines):** Used for titles and "Case Numbers." Its geometric, technical nature suggests code-breaking and forensic precision.
- **Hanken Grotesk (Body):** A highly legible, modern sans-serif. It provides the "professional" balance to the more eccentric typewriter fonts, ensuring that educational content is easy to digest.
- **Courier Prime (Labels):** Reserved for "Metadata," "Timestamps," and "Status Indicators." It mimics a manual typewriter, giving the impression of notes typed by a detective in the field.

**Stylistic Rule:** Use all-caps for labels and small metadata to reinforce the "classified document" aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy that resembles an open case file or a series of folders on a desk. 

- **Grid:** A 12-column grid for desktop, collapsing to 4 columns for mobile. 
- **Margins:** Large, generous outer margins on desktop create a "centered document" feel, isolating the content as the primary focus.
- **Rhythm:** Spacing is strictly based on a 4px baseline. Components use larger gaps (24px - 32px) to simulate separate pieces of paper or evidence being laid out side-by-side.
- **Reflow:** On mobile, complex side-by-side data tables should transform into vertical "Index Cards" to maintain the metaphor.

## Elevation & Depth

This design system avoids modern soft shadows in favor of **Tonal Layering** and **Hard Offsets.**

- **Stacked Surfaces:** Depth is achieved by placing Tertiary (Cream) surfaces on top of Secondary (Black) backgrounds.
- **Hard Shadows:** If a shadow is required for a floating element (like a modal), use a sharp, 100% opacity offset shadow (e.g., 4px down, 4px right) in Black, rather than a soft blur. This mimics the look of paper stacked on a table.
- **Dividers:** Use thick 2px or 4px black lines to separate sections, reminiscent of editorial layouts and newspaper clippings.
- **Backdrop:** Use a very subtle noise texture or a scan-line overlay on the primary background to add a tactile, grainy quality.

## Shapes

The shape language is strictly **Sharp (0px)**. 

To evoke the feeling of cut paper, folders, and official forms, all buttons, containers, and inputs must have square corners. 

**Exceptions:** 
- **The "Rubber Stamp":** Status badges (e.g., "COMPLETED," "URGENT") can have a very slight 2px roundness and a distressed border to look like an ink stamp.
- **Magnifying Elements:** Profile pictures or specific "evidence" icons may use circular frames to mimic the view through a magnifying glass.

## Components

- **Buttons:** Rectangular with no radius. Primary buttons are solid Black with Cream text. On hover, they shift to Primary Red. They should have a 2px black border with a 4px offset "hard shadow" to make them look like physical keys.
- **Input Fields:** Styled as underlined blanks rather than boxes where possible, or boxes with a 1px solid black border. Labels should appear in Courier Prime above the field.
- **Cards (Case Files):** A Cream background with a thick Black top-border. Include a "Tab" element on the top left (like a folder tab) containing the category name in small-caps Courier.
- **Chips (Evidence Tags):** Small, sharp-edged boxes with a "punched hole" graphic on one side, making them look like evidence tags. Use a monospaced font for the tag text.
- **Lists:** Bullet points are replaced with "Checklist" boxes or small magnifying glass icons.
- **Progress Bars:** Designed to look like a "filling ink" tube or a series of redacted blocks that disappear as the task is completed.