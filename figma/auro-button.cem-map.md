# auro-button — code-side map (from CEM)

Scope: attributes and slots only.

## Attributes

| attribute | kind | values | default | flags |
|---|---|---|---|---|
| `appearance` | enum | `default`, `inverse` | default | inherited from AuroElement |
| `autofocus` | boolean |  | false |  |
| `disabled` | boolean |  | false |  |
| `fluid` | boolean |  | false |  |
| `loading` | boolean |  | false |  |
| `shape` | enum | `rounded`, `pill`, `circle`, `square` | rounded | inherited from AuroElement |
| `size` | enum | `xs`, `sm`, `md`, `lg`, `xl` | md | inherited from AuroElement |
| `static` | boolean |  | false |  |
| `tindex` | number |  |  |  |
| `title` | string |  |  |  |
| `type` | enum | `submit`, `reset`, `button` |  |  |
| `variant` | enum | `primary`, `secondary`, `tertiary`, `ghost`, `flat` | primary |  |
| `loadingtext` | string |  | Loading... | deprecated |
| `ondark` | boolean |  | false | deprecated, inherited from AuroElement |
| `tabindex` | string |  |  | deprecated |

## Slots

| slot | description |
|---|---|
| `(default)` | The button's visible label: text, an icon (an `<auro-icon>`, an `<svg>`, or an `<img>`), or both. Set `aria-hidden="true"` on a slotted `<svg>`, and `alt=""` on a slotted `<img>`, so screen readers skip it and read only the button's name. In `circle` and `square` buttons, an icon wrapped in another element still counts as the icon, but only an icon slotted directly is sized to the icon size. |
| `ariaLabel` | Text read by screen readers in place of the visible label, for example "Save to favorites". Needed when a `circle` or `square` button shows only an icon or a count, unless the host has an `aria-label` or text visually hidden beside the icon already says what the button does. Without it, screen readers read the host's `aria-label`, or the visible label if there's none. |
| `ariaLabel.loading` | Text read by screen readers in place of the visible label while the button is loading, for example "Saving your changes". Defaults to "Loading...". |
