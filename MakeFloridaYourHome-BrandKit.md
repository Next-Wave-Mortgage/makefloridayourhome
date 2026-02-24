# Make Florida Your Home — Brand Kit

**Brand:** Make Florida Your Home (by Next Wave Mortgage, LLC)
**Website:** makefloridayourhome.com

---

## 1. Logo

- **Mark:** Circular dark green badge with a white palm tree silhouette
- **Wordmark:** "MAKE FLORIDA YOUR HOME" (small caps, green) above "NEXT WAVE" (bold, dark green) with "MORTGAGE" below in smaller weight
- **Usage:** Always pair the palm tree mark with the wordmark. Maintain clear space equal to the height of the palm tree icon on all sides.

---

## 2. Color Palette

### Primary Colors

| Name             | Hex       | RGB              | Usage                                      |
|------------------|-----------|------------------|---------------------------------------------|
| **Brand Green**  | `#006948` | `0, 105, 72`     | Primary CTA buttons, links, accent text, logo |
| **Dark Green**   | `#2E4136` | `46, 65, 54`     | Headings, nav links, primary body text      |

### Secondary Colors

| Name              | Hex       | RGB              | Usage                                      |
|-------------------|-----------|------------------|---------------------------------------------|
| **Teal Accent**   | `#00BDA5` | `0, 189, 165`    | Secondary accent, hover states, highlights  |
| **Green Tint**    | `#F2FAF6` | `242, 250, 246`  | Section backgrounds, card fills, subtle tint|

### Neutrals

| Name              | Hex       | RGB              | Usage                                      |
|-------------------|-----------|------------------|---------------------------------------------|
| **White**         | `#FFFFFF` | `255, 255, 255`  | Page background, button text               |
| **Charcoal**      | `#333333` | `51, 51, 51`     | Footer background                          |
| **Mid Gray**      | `#ABACAC` | `171, 172, 172`  | Muted/secondary text, subtle borders       |
| **Border Gray**   | `#DCDFDD` | `220, 223, 221`  | Card borders, dividers                     |
| **Black**         | `#000000` | `0, 0, 0`        | Rare — some body text contexts             |

### Accent (Third-Party)

| Name              | Hex       | Usage                                      |
|-------------------|-----------|---------------------------------------------|
| **Review Gold**   | `#FFB800` | Star ratings (Google, Zillow review badges) |

---

## 3. Typography

### Font Stack

```
font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
```

System font stack — no custom web font loaded. Renders as **San Francisco** on Apple devices, **Segoe UI** on Windows, and **Roboto** on Android/Chrome OS.

### Type Scale

| Element      | Size   | Weight | Color           | Notes                              |
|-------------|--------|--------|-----------------|------------------------------------|
| **H1**      | 42px   | 700    | Dark Green `#2E4136` | Page hero headings                |
| **H2**      | 36px   | 700    | Dark Green `#2E4136` | Section headings. First keyword often set in Brand Green for emphasis. |
| **H3**      | 22px   | 700    | Dark Green `#2E4136` | Card titles, sub-section headings |
| **Body**    | 16px   | 400    | Dark Green `#2E4136` | Paragraph text                    |
| **Nav Link**| 15px   | 700    | Dark Green `#2E4136` | Top navigation items              |
| **Small**   | 14px   | 400    | Mid Gray `#ABACAC`   | Captions, disclaimers             |

### Heading Accent Pattern

Section headings use a **split-color** technique: the first keyword is rendered in **Brand Green (`#006948`)** while the rest stays in **Dark Green (`#2E4136`)**. Examples:
- "**Trusted** by Our Clients"
- "**Confidence** Comes With Knowing Your Options"
- "**Does** Make Florida Your Home Do?"

---

## 4. Buttons & CTAs

### Primary Button (CTA)

```css
background-color: #006948;
color: #FFFFFF;
font-size: 17px;
font-weight: 700;
border-radius: 6px;
border: 1.5px solid #006948;
padding: 13px 24px 13px 24px;
```

- Always includes a **right-arrow circle icon** (→) for action CTAs
- Used for: "Get Pre-Approved", "Check My Eligibility", "Schedule Now", "See Latest Updates"

### Secondary / Outline Button

- White background with **Brand Green** text and **Green Tint** border
- Used for feature link cards and navigation tiles

### Button Sizing

| Context         | Font Size | Padding              |
|----------------|-----------|----------------------|
| **Nav CTA**    | 16px      | `10px 16px 8px`     |
| **Page CTA**   | 17px      | `13px 60px 13px 24px` (with arrow icon space) |

---

## 5. Layout & Spacing Patterns

### Grid
- **Two-column card grids** for feature sections, FAQ, and article listings
- Cards use `border: 1px solid #DCDFDD` with generous internal padding
- Consistent ~24px–32px gap between grid items

### Section Backgrounds
- Alternating between **White (`#FFFFFF`)** and **Green Tint (`#F2FAF6`)** to create visual separation
- Full-width CTA banner bars use **Dark Green (`#2E4136`)** background with white text

### Cards
- White background with light gray border (`#DCDFDD`)
- Left green accent border on hover/featured states (3–4px, Brand Green)
- Rounded corners (small, ~4–6px)

### Photo Treatment
- Team/expert photos framed with a **Dark Green (`#2E4136`) border accent** on one corner (typically top-left or bottom-left)
- Name badges overlay the photo with Brand Green background and white text

---

## 6. Iconography

- **Style:** Line-art / outlined icons in **Brand Green (`#006948`)**
- **Contexts:** Feature cards, service listings, nav link tiles
- Icons are placed inside subtle circular or rounded containers
- Consistent stroke weight across all icons
- Examples: house icon, dollar sign, magnifying glass, clipboard, calendar

---

## 7. Voice & Tone

| Attribute        | Description                                                  |
|-----------------|--------------------------------------------------------------|
| **Trustworthy** | Emphasis on real reviews, ratings (4.9 Google, 4.8 Zillow), BBB accreditation |
| **Reassuring**  | "No credit pull. No obligation." — removes friction and anxiety |
| **Expert**      | Positions team as Florida-specialized mortgage experts        |
| **Clear**       | Straightforward language, no jargon. Short, scannable copy   |
| **Action-Oriented** | Every section drives toward a clear next step (check eligibility, schedule a consult) |

### Key Messaging Pillars
1. **Florida-specific expertise** — county-by-county knowledge
2. **Down payment assistance** — unlocking grants and programs
3. **First-time buyer focus** — simplifying the process
4. **No-pressure approach** — free consults, no credit pull to start

---

## 8. UI Component Patterns

### Testimonial Cards
- Client photo (circular), name, 5-star gold rating
- Italic quote text with **bold keywords** for emphasis
- Displayed in a 3-column row

### FAQ Accordion
- Two-column layout
- Dark Green chevron toggle icon
- Bold question text, expandable answer

### CTA Banners
- Full-width dark strip (`#2E4136` or `#006948`)
- White headline + Primary button side-by-side
- Used to break up content sections and drive action

### Article/Resource Cards
- Thumbnail image (left), category label (small caps, Brand Green), bold title, description
- Green circular arrow button (→) on the right edge

---

## 9. Do's and Don'ts

### Do
- Use Brand Green for all interactive elements (links, buttons, icons)
- Maintain the split-color heading pattern for section titles
- Keep CTA language action-oriented and benefit-focused
- Use the Green Tint background to create breathing room between sections
- Include social proof (reviews, ratings, BBB badge) prominently

### Don't
- Use colors outside the defined palette
- Apply Brand Green to large background areas (reserve for accents and CTAs)
- Use decorative or novelty fonts — stick to the system font stack
- Clutter pages — maintain generous whitespace
- Use aggressive sales language — the tone is helpful, not pushy
