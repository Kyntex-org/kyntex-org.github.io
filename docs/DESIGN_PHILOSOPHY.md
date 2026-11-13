# Kyntex design philosophy

**Quiet precision.** Kyntex should feel like a carefully made instrument: calm to use, clear to read, and considered in every detail. Premium quality comes from proportion, material honesty, consistent behavior, and restraint.

Owner-selected accent: **Muted jade — `#91B5A6`**. Established November 12, 2026.

This is the shared reference for the band, companion app, website, and brand materials. Product requirements and metric definitions remain in their owning repositories. This document defines the intended direction; it does not claim that every existing screen or asset has already migrated.

## What we are expressing

Kyntex helps athletes understand how they move. The product should communicate thoughtful engineering without making the athlete navigate the engineering.

The current app provides a useful foundation: prominent measurements, personal comparisons, fine dividers, direct controls, and little visual clutter. The current monochrome logo adds a strong, balanced silhouette and deliberate negative space. Preserve these qualities as the product develops.

The experience should feel **precise, composed, tactile, and trustworthy**. Each screen, interaction, photograph, and physical detail should make the product easier to understand.

## Principles

### 1. Give attention a clear destination

Lead with the most useful information or action. In the app, a real measurement and its context take precedence over decoration. On the website, the actual band and its value to the athlete take precedence over technical architecture.

Use hierarchy, alignment, and spacing to make the next step apparent. Group related information; avoid giving every section the same visual weight. One clear primary action per task or section is usually enough.

### 2. Make precision understandable

Pair numbers with units, time context, and the relevant personal reference. Separate measured information, estimates, unavailable values, and sample data. An empty state is more credible than an invented score, progress percentage, or comparison.

Charts should answer a question. Start from a neutral series and emphasize a selected point or a defined comparison. Explain the emphasis in words. The brand accent must never imply that a higher load is healthier, safer, or a target to achieve.

### 3. Refine the fundamentals

Make the typography, spacing, hit areas, edges, and transitions consistent before adding visual effects. Prefer an open layout and fine dividers to repeated bordered cards. Use containers when they express a real boundary, such as an input, sheet, or separate task.

Premium does not require metallic gradients, glow, glass effects, animated noise, ornamental gauges, or excessive tracking. A detail earns its place by improving understanding, interaction, or the presentation of the real product.

### 4. Show the real product

Use photographs of the actual Kyntex band, its fit, materials, fastening, and use in training. Give the product room to be seen. Skin, fabric, and material texture should look natural.

Use genuine app screens with sample information clearly identified where applicable. Reference products can inform a photography brief or explain a form factor; another brand's product must not stand in for Kyntex. Concept studies and renders must be identified as such.

### 5. Build confidence through behavior

Connection, recording, pause, synchronization, calibration, and error states should be unambiguous. Pending means pending; a successful-looking animation is not confirmation. Keep recovery actions visible and explain what the user can do next.

Respect the athlete's attention and data. Favor a useful workout experience and understandable review over extra dashboards, alerts, accounts, or collection for its own sake.

## Color system

The foundation is **black, white, and neutral charcoal**, with muted jade as the signature accent. Deep navy and electric blue belong to earlier app iterations; they are not the default for new brand work. Existing implementation values are migration work, not competing brand standards.

| Role | Token | Value | Application |
| --- | --- | --- | --- |
| Main background | `background` | `#07090C` | Primary dark canvas |
| Secondary surface | `surface` | `#141419` | Inputs, sheets, necessary grouping |
| Raised surface | `surfaceRaised` | `#1D1D23` | Selected or elevated controls |
| Subtle divider | `divider` | `#303037` | Nonessential separators; not a focus indicator |
| Primary text | `textPrimary` | `#FFFFFF` | Main content and measurements |
| Secondary text | `textSecondary` | `#B7B7BD` | Supporting information |
| Muted text | `textMuted` | `#8E8E98` | Less prominent, still readable labels |
| Brand accent | `accent` | `#91B5A6` | A deliberate action, selection, link, or data emphasis |
| Text on accent | `onAccent` | `#07090C` | Labels on jade-filled controls |
| Caution | `caution` | `#E0B45C` | Attention required, with a label or symbol |
| Destructive/error | `destructive` | `#FF6B6B` | Errors and destructive actions, with context |

Let neutral colors occupy most of a composition. Jade should remain a useful point of emphasis; do not tint every icon, heading, border, chart, or background with it. Keep the logo monochrome.

The app can retain a white primary control with dark text where it gives the clearest hierarchy. The website can use a jade primary control with dark text. Share the hierarchy and color roles across platforms rather than forcing identical controls.

**Contrast:** calculated solid-color ratios are approximately 8.89:1 for jade against `background` and 8.19:1 against `surface`. White against jade is only 2.24:1: use dark text on jade fills. Transparency, gradients, disabled states, and real imagery change the result and must be checked in context. Essential control boundaries need more contrast than a decorative divider.

## Logo

Use the current [black-and-white Kyntex logo](https://github.com/Kyntex-org/.github/blob/main/profile/assets/kyntex-logo.jpg). Preserve the supplied proportions, symbol, and wordmark. Do not stretch, redraw, recolor, add a glow, or combine it with the retired colored identity.

Use black artwork on a light field or a faithful white reversal on a dark field. Keep a clear, uncluttered area around the artwork; as a working minimum, allow space equal to the diameter of the symbol's central circle. The current JPG includes background and margins: inspect its visible size instead of treating the full image box as the artwork. Do not recreate a logo from a font to compensate for a low-resolution asset.

The logo establishes identity at entry points, navigation, and brand surfaces. It need not be repeated on every app screen. A future vector master should reproduce the approved artwork faithfully and become the asset source after approval.

## Typography and layout

- Use the native system sans serif in the app. Use a clean system sans-serif stack on the web until a dedicated typeface is explicitly chosen. The logo is artwork, not a font specification.
- Make key numbers prominent and use tabular or monospaced digits for changing values. Keep labels quieter, with units and comparisons close to the value.
- Prefer regular and medium weights for prose and headings; use semibold when a measurement or action needs emphasis. Avoid hairline numerals and crowded, tightly tracked body copy.
- Use sentence case for interface copy. Reserve small uppercase text for short metadata or a deliberate brand label, rather than placing an eyebrow above every section.
- Build spacing from a 4-unit rhythm, with 8-unit intervals for major relationships. Allow optical adjustments. Native controls can keep their platform proportions; an editorial web headline should not dictate the app's type scale.
- Aim for web body text of 16–18px and supporting text of at least 14px. Native text should use semantic styles and Dynamic Type. Do not shrink essential information to fit a composition.
- Use modest, consistent corner radii for interactive surfaces. Photography and editorial web sections may use square edges. Fine dividers and alignment should do most of the organizational work.

## Motion and interaction

Motion explains a state change, spatial relationship, or response to an action. Keep it brief, controlled, and interruptible. Avoid continuous ambient motion, repeated entrance sequences, bounce for decoration, or delaying access to content.

Honor Reduce Motion. Content and state must remain understandable without animation. Provide visible keyboard focus, descriptive VoiceOver labels, meaningful units, sufficiently large touch targets, and layouts that work at accessibility text sizes. A color change alone is never the only state signal.

## Product, app, and website

**Band:** pursue a coherent silhouette, considered fit, consistent finishes, discreet branding, and practical details. Show and validate the actual prototype; do not imply production materials, comfort, durability, water resistance, or battery performance before they are established.

**App:** foreground the current session, its state, and the athlete's own context. A strong measurement, a clear comparison, and a few supporting facts are preferable to a wall of equal-weight cards. Keep detailed explanations available through progressive disclosure. Distinguish missing data from zero, and incomplete or sample sessions from normal recordings.

**Website:** make the band the hero. Use real product and on-body photography, a concise value statement, and a clear demo/contact path while the product is a prototype. Keep deeper engineering in its own navigation destination. Add purchasing only when availability, price, fulfillment, and support details are established.

Shared identity does not mean identical layouts: the website introduces the product; the app helps someone use and understand it.

## Voice

Write with calm confidence. Be specific, concise, and human. Say what the product does today and distinguish development goals from available capabilities. Use "Understand how you move" as the organizing idea.

Avoid exaggerated performance claims, luxury superlatives, pressure to train harder, and medical or injury-prediction promises. Keep required product disclaimers intact. Descriptive comparisons should help an athlete interpret a session, not prescribe a training decision.

## Review questions

Before accepting a design, check:

1. Is the main purpose and next action obvious?
2. Is the visual hierarchy built from content, typography, and spacing?
3. Is `#91B5A6` used deliberately, with readable contrast and an explicit meaning?
4. Are the product, logo, screenshots, and claims authentic?
5. Are missing, pending, failed, incomplete, and sample states represented honestly?
6. Does it work with a keyboard, VoiceOver, reduced motion, and larger text?
7. Does every visual detail improve the experience?

## Maintaining this reference

Change brand decisions here first and update [the shared color tokens](https://github.com/Kyntex-org/.github/blob/main/design/tokens.json) in the same change. Implementation guides should link here and contain platform-specific behavior only, not a second palette or philosophy. Design exploration pages and old screenshots are evidence of exploration, not current instructions.

This reference supersedes the visual direction in the October 27, 2026 iOS redesign spec, implementation plan, and agent prompts. Those overlapping documents have been removed from the active technical repository. Their useful metric-presentation and behavior requirements are consolidated in its `docs/design/IOS_INTERFACE.md`; historical commits and screenshots remain available as evidence.
