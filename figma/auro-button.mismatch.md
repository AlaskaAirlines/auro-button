<!-- build-mismatch:begin summary -->
# auro-button — what matches by name and what does not, before translate

Sources: CEM from `origin/main` (auro-button.cem-map.json) and Figma component set **Button** (node 25502:3539). Pairing: exact name equality after lowercasing and trimming, and nothing else. This is the gap before `auro-button.translate.md`: nothing from that file is applied or noted here, and every item in PART 2 and PART 3 gets a row in it. Scope: attributes and slots only.

Matched by name: 5 of 14 Figma properties (`Variant`, `State`, `Appearance`, `Size`, `Shape`), with 2 extra state blocks. Design-related code attributes with no Figma counterpart: **2 of 8**; functionality-related ones are listed separately in PART 3 (1 of 1) (3 more excluded as deprecated or private, 3 more not bound because their category is not ui and they are not design-related). Figma properties with no code counterpart: **9 of 14**.
<!-- build-mismatch:end summary -->

<!-- build-mismatch:begin addressed -->
# PART 1 — Matched by name (before translate)

6 of 9 bindable attributes (15 in the CEM; 3 deprecated or private excluded; 3 not ui and not design-related left out) and 0 of 3 slots match a Figma property by name. An attribute can appear more than once if more than one Figma property matches it.

### Attributes

| attribute | matched to | Figma option -> code value | code values NOT covered | flags |
|---|---|---|---|---|
| `variant` | Figma **Variant** (variant) | Primary = `primary`, Secondary = `secondary`, Tertiary = `tertiary`, Ghost = `ghost`, Flat = `flat` | _none_ |  |
| `appearance` | Figma **Appearance** (variant) | Default = `default`, Inverse = `inverse` | _none_ | inherited from AuroElement |
| `size` | Figma **Size** (variant) | xl = `xl`, lg = `lg`, md = `md`, sm = `sm`, xs = `xs` | _none_ | inherited from AuroElement |
| `shape` | Figma **Shape** (variant) | Rounded = `rounded`, Pill = `pill`, Square = `square`, Circle = `circle` | _none_ | inherited from AuroElement |
| `loading` | Figma **State** = Loading (own block) | bare `loading` attribute | n/a |  |
| `disabled` | Figma **State** = Disabled (own block) | bare `disabled` attribute | n/a |  |

### Slots

_none_

### Figma blocks (name matches only)

- `variant: { 'State': 'Default' }` (baseline, no added attribute)
- `variant: { 'State': 'Loading' }` + bare `loading`
- `variant: { 'State': 'Disabled' }` + bare `disabled`

Every block also carries the 4 non-state matches above.
<!-- build-mismatch:end addressed -->

<!-- build-mismatch:begin not-addressed -->
# PART 2 — NOT matched by name (before translate)

Everything below has no Figma counterpart with an equal name. Each item has a row in `auro-button.translate.md` (mapped, `n/a` or `TBD`); build-translate adds the missing ones.

## Design-related code attributes with no Figma counterpart

| attribute | kind / values | default | flags |
|---|---|---|---|
| `fluid` | boolean | false |  |
| `type` | `submit`, `reset`, `button` |  |  |

## Code attributes excluded by rule (deprecated or private)

| attribute | kind / values | flags |
|---|---|---|
| `loadingtext` | string | deprecated |
| `ondark` | boolean | deprecated, inherited from AuroElement |
| `tabindex` | string | deprecated |

## Code attributes not bound (category is not ui and not design-related)

| attribute | category | kind / values | flags |
|---|---|---|---|
| `autofocus` | behavior | boolean |  |
| `static` | behavior | boolean |  |
| `tindex` | a11y | number |  |

## Code slots with no Figma counterpart

- `(default)`
- `ariaLabel`
- `ariaLabel.loading`

## Code enum values with no Figma counterpart (on paired properties)

_none_

## Figma properties with no code counterpart

| Figma property | type | options / default | why |
|---|---|---|---|
| Label | TEXT | Button label | no CEM attribute or slot with this name |
| ⮑ Icon Right Type | INSTANCE_SWAP | 20658:35554 | no CEM attribute or slot with this name |
| ⮑ Icon Left Type | INSTANCE_SWAP | 20658:35554 | no CEM attribute or slot with this name |
| Icon Left | BOOLEAN | false | no CEM attribute or slot with this name |
| Icon Right | BOOLEAN | false | no CEM attribute or slot with this name |
| ⮑ Number Label | TEXT | 10 | no CEM attribute or slot with this name |
| Show Num Label | BOOLEAN | false | no CEM attribute or slot with this name |
| Icon | BOOLEAN | true | no CEM attribute or slot with this name |
| ⮑ Icon type | INSTANCE_SWAP | 20658:35554 | no CEM attribute or slot with this name |

## Figma variant options with no code counterpart (all variant properties)

- State = Hover
- State = Focused
<!-- build-mismatch:end not-addressed -->

<!-- build-mismatch:begin functionality -->
# PART 3 — Functionality-related, NOT matched by name (before translate)

Not design-related: these do not change how the component looks or a state shown in Figma (behaviour, accessibility, form, validation, browser hints). They are not part of the 100% design target.

| attribute | kind / values | default | flags |
|---|---|---|---|
| `title` | string |  |  |
<!-- build-mismatch:end functionality -->
