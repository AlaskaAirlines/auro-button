# auro-button

An accessible button that lets people take an action, such as submitting a form,
starting a task, or moving to the next step in a flow. It's the standard button for
Auro interfaces.

**Key capabilities**
- **Variants**: five levels of visual emphasis, from `primary` (the main action on the
  page) through `secondary`, `tertiary`, and `ghost`, down to `flat` (text only).
- **Shapes & sizes**: `rounded` or `pill` for text buttons, and `circle` or `square` for
  icon-only buttons, each in five sizes (`xs`–`xl`).
- **Light & dark backgrounds**: `appearance="inverse"` switches to colors designed for
  dark backgrounds.
- **Loading state**: swaps the label for a loading indicator and blocks clicks while
  work is in progress, without changing the button's width.
- **Forms**: `type="submit"` submits the form the button is placed in, and `type="reset"`
  resets an `<auro-form>`.

**Example**
```html
<auro-button variant="primary">Submit</auro-button>
```

### Properties & Attributes

| Properties     | Attributes  | Modifiers | Type                                                        | Default      | Description                                                                                                                                                                                                                                                                                                 |
| -------------- | ----------- | --------- | ----------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance     | appearance  |           | "default" \| "inverse"                                      | `default`    | Matches the component's colors to the background it sits on. Use `inverse` on dark backgrounds and `default` on light ones.                                                                                                                                                                                 |
| autofocus      | autofocus   |           | boolean                                                     | `false`      | Moves keyboard focus to the button when the page loads. Use sparingly: moving focus without warning can disorient keyboard and screen reader users.                                                                                                                                                         |
| disabled       | disabled    |           | boolean                                                     | `false`      | Turns the button off. A disabled button is shown in a muted style and can't be clicked or reached with the keyboard.                                                                                                                                                                                        |
| fluid          | fluid       |           | boolean                                                     | `false`      | Stretches the button to fill the full width of its container.                                                                                                                                                                                                                                               |
| formAssociated |             | readonly  | boolean                                                     |              | Enables form association, so the button can take part in the form it's placed in.                                                                                                                                                                                                                           |
| loading        | loading     |           | boolean                                                     | `false`      | Shows a loading indicator in place of the label and blocks clicks until it is turned off. The button keeps its width, so the layout doesn't shift. Use the `ariaLabel.loading` slot to tell screen reader users what is happening.                                                                          |
| shape          | shape       |           | "rounded" \| "pill" \| "circle" \| "square"                 | `rounded`    | Sets the button's shape. Use `rounded` (the default) or `pill` for buttons with a text label, and `circle` or `square` for icon-only buttons. Icon-only buttons need a text alternative in the `ariaLabel` slot.                                                                                            |
| size           | size        |           | "xs" \| "sm" \| "md" \| "lg" \| "xl"                        | `md`         | Sets the button's size, from `xs` (smallest) to `xl` (largest). Size controls the button's height, padding, and label text size.                                                                                                                                                                            |
| static         | static      |           | boolean                                                     | `false`      | Displays the button's styling without any button behavior. A static button can't be clicked or focused, and screen readers don't announce it as a button. Use it when the button sits inside another clickable element, such as a linked card.                                                              |
| tIndex         | tindex      |           | number                                                      |              | Sets the button's position in the keyboard tab order (the inner element's `tabindex`). Use `-1` to remove the button from the tab order. Most buttons don't need this. Ignored when `static` is set.                                                                                                        |
| title          | title       |           | string                                                      |              | Text shown as a browser tooltip when a mouse pointer rests on the button. Keyboard and touch users never see it, so don't use it for essential information.                                                                                                                                                 |
| type           | type        |           | "submit" \| "reset" \| "button"                             |              | Sets what the button does in a form. `submit` submits the form the button is placed in, whether it's a native `<form>` or an `<auro-form>`. `reset` resets the fields of an `<auro-form>`, but has no effect in a native `<form>`. Leave it unset, or use `button`, when the button runs its own action.    |
| variant        | variant     |           | "primary" \| "secondary" \| "tertiary" \| "ghost" \| "flat" | `primary`    | Sets the button's visual emphasis. Use `primary` for the single most important action in a view, `secondary` for supporting actions, and `tertiary`, `ghost`, or `flat` for progressively quieter actions. `flat` shows only the label, with no background or border.                                       |
| loadingText    | loadingtext |           | string                                                      | `Loading...` | Deprecated: Use `slot="ariaLabel.loading"` instead.                                                                                                                                                                                                                                                         |
| onDark         | ondark      |           | boolean                                                     | `false`      | Deprecated: Use `appearance="inverse"` instead.                                                                                                                                                                                                                                                             |
| tabindex       | tabindex    |           | string                                                      |              | Deprecated: Use `tIndex` instead.<br>Sets the button's position in the keyboard tab order. Must be set as a property (with a leading `.` in Lit templates) so the `tabindex` attribute isn't left on the host element.<br>Example: `<auro-button .tabindex="${this.disabled ? '-1' : '0'}"></auro-button>`. |

### Methods

| Name     | Parameters                                                                      | Return | Description                                                                                                                                                                         |
| -------- | ------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| focus    | `options` (FocusOptions) - The options passed to the inner element's `focus()`. | void   | Moves keyboard focus to the inner `<button>` element, or to the inner `<a>` element when `buttonHref` is set. Does nothing when `static` is set or before the button first renders. |
| register | `name` (string) - The tag name to register the element under.                   |        | Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-button` on the same page.                         |

### Slots

| Name              | Description                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| (default)         | The button's visible label: text, an icon, or both.                                                                                               |
| ariaLabel         | Text read by screen readers in place of the visible label. Needed for icon-only buttons (`circle` or `square` shape), which have no visible text. |
| ariaLabel.loading | Text read by screen readers while the button is loading, for example "Saving your changes". Defaults to "Loading...".                             |

### CSS Shadow Parts

| Name           | Description                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| button         | The inner `<button>` element (a `<span>` when `static` is set).                                          |
| contentWrapper | The element wrapping all of the button's content. It is hidden, but still takes up space, while loading. |
| loader         | The loading indicator shown while `loading` is set.                                                      |
| text           | The element wrapping the button's label.                                                                 |

### CSS Custom Properties

| Name                                | Description                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------- |
| --ds-auro-button-border-color       | Border color of the button.                                                  |
| --ds-auro-button-border-inset-color | Color of the inner ring shown when the button has keyboard focus.            |
| --ds-auro-button-container-color    | Background color of the button.                                              |
| --ds-auro-button-container-image    | Background image layered over the background color, used for gradient fills. |
| --ds-auro-button-loader-color       | Color of the loading indicator.                                              |
| --ds-auro-button-tap-color          | Highlight color shown briefly when the button is tapped on a touch screen.   |
| --ds-auro-button-text-color         | Color of the button's label text.                                            |