# NileBit Labs Design System

## Design Principles

- Whitespace first: every section needs room to breathe before it needs decoration.
- Typography over decoration: hierarchy, rhythm, and strong copy carry the interface.
- One primary action per section: secondary actions must stay visually secondary.
- Real content over filler: never add unsupported claims, fake logos, or generic case studies.
- Consistency beats novelty: reusable patterns should win over one-off visual ideas.
- Purposeful motion only: fade, slide, subtle scale, stagger, and hover are enough.
- Premium is restraint: no overloaded technology walls, flashy parallax, or ornamental objects.
- Kampala roots, global delivery: present the company honestly and confidently.

## Typography

| Token | Use |
| --- | --- |
| `text-display-xl` | Rare campaign-level display text |
| `text-display-lg` | Homepage hero display |
| `text-display-md` | Large metrics or major statements |
| `text-heading-1` | Page titles |
| `text-heading-2` | Section titles |
| `text-heading-3` | Subsection titles |
| `text-heading-4` | Card titles |
| `text-body-lg` | Leading section copy |
| `text-body` | Default prose |
| `text-body-sm` | Supporting copy |
| `text-caption` | Metadata and compact labels |
| `text-eyebrow` | Section eyebrow labels |
| `text-cta` | CTA labels |
| `text-code` | Code and technical snippets |

## Spacing and Layout

- Page containers use `Container` with `content`, `page`, or `wide` sizes.
- Section spacing uses `Section` with `sm`, `md`, or `lg`.
- Cards use `p-card`.
- Page gutters use `px-layout-sm md:px-layout-md lg:px-layout-lg`.
- Readable copy should stay inside `max-w-readable`.
- Page content should stay inside `max-w-page`; exceptional media can use `max-w-wide`.

## Color Tokens

- `background`: charcoal base.
- `surface`: standard panel surface.
- `surface-elevated`: raised panel surface.
- `border`: subtle separation.
- `heading`: primary white text.
- `body-color`: readable body text.
- `muted`: secondary text.
- `primary`: NileBit orange.
- `primary-hover`: orange hover state.
- `primary-light`: low-emphasis orange surface.
- `success`, `warning`, `error`: semantic states only.
- `code-background`: technical snippets.

## Component System

Reusable primitives live in `components/ui/design-system.tsx`:

- `Button`
- `TextLink`
- `Tag`
- `Badge`
- `Card`
- `Section`
- `Container`
- `Divider`
- `Stat`
- `Feature`
- `SectionHeader`
- `CTA`
- `Input`
- `Textarea`
- `Label`
- `Select`
- `Checkbox`
- `AccordionItem`
- `Quote`
- `Metric`
- `Pill`
- `Avatar`

## Iconography

- Preferred library: `lucide-react`.
- Standard sizes: 16, 20, and 24 px.
- Standard stroke width: `1.75`.
- Icons must be paired with text or have an accessible label.
- Icons should not be mixed with other libraries in new work.

## Animation

- Allowed: fade, slide, subtle scale, stagger, and hover.
- Disallowed: floating objects, unnecessary parallax, heavy glow motion, and motion that distracts from content.
- All motion must respect `prefers-reduced-motion`.

## Image Standards

- Use `next/image`.
- Project images should use stable aspect ratios and `image-frame`.
- Team images should use square or circular crops with real alt text.
- Hero images must clarify the message; avoid generic atmospheric stock imagery.
- Decorative images must have empty alt text.
