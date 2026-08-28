# auro-button

The `<auro-button>` element creates an interactive, accessible button for triggering
actions such as submitting a form, starting a task, or advancing a step in a flow.

**Key capabilities**
- **Variants** — `primary`, `secondary`, `tertiary`, `ghost`, and `flat`.
- **Shapes & sizes** — `rounded`, `pill`, `circle`, or `square` in five sizes (`xs`–`xl`).
- **Loading state** — replaces the label with an `auro-loader` and disables interaction.
- **HTML5 form association** — participates in forms and supports `submit` / `reset` types.

**Example**
```html
<auro-button variant="primary">Submit</auro-button>
```

### Properties & Attributes

| Properties     | Attributes   | Modifiers | Type                                                        | Default     | Description                                                                                                                                                                                                                                                                          |
| -------------- | ------------ | --------- | ----------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| appearance     | appearance   |           | "default" \| "inverse"                                      | `default`   | Defines whether the button will be on lighter or darker backgrounds.                                                                                                                                                                                                                 |
| autofocus      | autofocus    |           | boolean                                                     | `false`     | This Boolean attribute lets you specify that the button should have input focus when the page loads, unless overridden by the user.                                                                                                                                                  |
| buttonHref     | buttonhref   |           | string                                                      | `undefined` | When set, renders the button as an anchor (`<a>`) pointing to this URL. This exposes the `link` CSS part in place of `button`. Security: the value is used as an `href` without scheme sanitization — do not pass untrusted input, as `javascript:` URLs will execute on activation. |
| buttonRel      | buttonrel    |           | string                                                      | `undefined` | Sets the `rel` of the generated link (e.g. `noopener noreferrer`). Only applies when `buttonHref` is set.                                                                                                                                                                            |
| buttonTarget   | buttontarget |           | string                                                      | `undefined` | Sets the `target` of the generated link (e.g. `_blank`, `_self`). Only applies when `buttonHref` is set. When using `_blank`, also set `buttonRel="noopener noreferrer"` to prevent reverse tabnabbing.                                                                              |
| disabled       | disabled     |           | boolean                                                     | `false`     | If set to true, button will become disabled and not allow for interactions.                                                                                                                                                                                                          |
| fluid          | fluid        |           | boolean                                                     | `false`     | Alters the shape of the button to be full width of its parent container.                                                                                                                                                                                                             |
| formAssociated |              | readonly  | boolean                                                     |             | Enables form association for this element.                                                                                                                                                                                                                                           |
| layout         | layout       |           | string                                                      | `default`   | Override layout since it isn't used in this component.                                                                                                                                                                                                                               |
| loading        | loading      |           | boolean                                                     | `false`     | If set to true button text will be replaced with `auro-loader` and become disabled.                                                                                                                                                                                                  |
| shape          | shape        |           | "rounded" \| "pill" \| "circle" \| "square"                 | `rounded`   | Defines the shape of the button.                                                                                                                                                                                                                                                     |
| size           | size         |           | "xs" \| "sm" \| "md" \| "lg" \| "xl"                        | `md`        | Defines the size of the button.                                                                                                                                                                                                                                                      |
| static         | static       |           | boolean                                                     | `false`     | If true, the button will be static and not respond to user interactions.                                                                                                                                                                                                             |
| tabindex       | tabindex     |           | string                                                      |             | Populates `tabindex` to define the focusable sequence in keyboard navigation.<br>Must be used with "." to ensure the host element does not retain a reference to the `tabindex` attribute.<br>Example: `<auro-button .tabindex="${this.disabled ? '-1' : '0'}"></auro-button>`.      |
| tIndex         | tIndex       |           | string                                                      |             | Populates `tabindex` to define the focusable sequence in keyboard navigation.                                                                                                                                                                                                        |
| title          | title        |           | string                                                      |             | Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element.                                                                                                                                                                   |
| type           | type         |           | "submit" \| "reset" \| "button"                             |             | The type of button. Matches HTML5 Button Spec.                                                                                                                                                                                                                                       |
| value          | value        |           | string                                                      |             | Defines the value associated with the button which is submitted with the form data.                                                                                                                                                                                                  |
| variant        | variant      |           | "primary" \| "secondary" \| "tertiary" \| "ghost" \| "flat" | `primary`   | Sets the button variant.                                                                                                                                                                                                                                                             |
| loadingText    | loadingText  |           | string                                                      |             | DEPRECATED - Use `slot="ariaLabel.loading"` instead.                                                                                                                                                                                                                                 |
| onDark         | ondark       |           | boolean                                                     | `false`     | DEPRECATED - use `appearance` attribute.                                                                                                                                                                                                                                             |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name              | Description                                                                    |
| ----------------- | ------------------------------------------------------------------------------ |
| (default)         | Default slot for the text of the button.                                       |
| ariaLabel         | Use this slot to pass an aria-label to the HTML5 button.                       |
| ariaLabel.loading | Use this slot to pass an aria-label to the HTML5 button when in loading state. |

### CSS Shadow Parts

| Name           | Description                                                                             |
| -------------- | --------------------------------------------------------------------------------------- |
| button         | Apply CSS to HTML5 button.                                                              |
| contentWrapper | Apply CSS to the span wrapping the button content.                                      |
| link           | Apply CSS to the anchor (`<a>`) rendered in place of `button` when `buttonHref` is set. |
| loader         | Apply CSS to auro-loader.                                                               |
| text           | Apply CSS to text slot.                                                                 |

### CSS Custom Properties

| Name                                                           | Description                                                            |
| -------------------------------------------------------------- | ---------------------------------------------------------------------- |
| --ds-advanced-color-button-flat-text                           | Text color of the flat variant.                                        |
| --ds-advanced-color-button-flat-text-disabled                  | Text color of the flat variant (disabled).                             |
| --ds-advanced-color-button-flat-text-hover                     | Text color of the flat variant (hover).                                |
| --ds-advanced-color-button-flat-text-inverse                   | Text color of the flat variant (inverse).                              |
| --ds-advanced-color-button-flat-text-inverse-disabled          | Text color of the flat variant (inverse, disabled).                    |
| --ds-advanced-color-button-flat-text-inverse-hover             | Text color of the flat variant (inverse, hover).                       |
| --ds-advanced-color-button-ghost-background-hover              | Background color of the ghost variant (hover).                         |
| --ds-advanced-color-button-ghost-background-inverse-hover      | Background color of the ghost variant (inverse, hover).                |
| --ds-advanced-color-button-ghost-text                          | Text color of the ghost variant.                                       |
| --ds-advanced-color-button-ghost-text-inverse                  | Text color of the ghost variant (inverse).                             |
| --ds-advanced-color-button-primary-background                  | Background color of the primary variant.                               |
| --ds-advanced-color-button-primary-background-disabled         | Background color of the primary variant (disabled).                    |
| --ds-advanced-color-button-primary-background-hover            | Background color of the primary variant (hover).                       |
| --ds-advanced-color-button-primary-background-inverse          | Background color of the primary variant (inverse).                     |
| --ds-advanced-color-button-primary-background-inverse-disabled | Background color of the primary variant (inverse, disabled).           |
| --ds-advanced-color-button-primary-background-inverse-hover    | Background color of the primary variant (inverse, hover).              |
| --ds-advanced-color-button-primary-border                      | Border color of the primary variant.                                   |
| --ds-advanced-color-button-primary-border-disabled             | Border color of the primary variant (disabled).                        |
| --ds-advanced-color-button-primary-border-hover                | Border color of the primary variant (hover).                           |
| --ds-advanced-color-button-primary-border-inverse              | Border color of the primary variant (inverse).                         |
| --ds-advanced-color-button-primary-border-inverse-disabled     | Border color of the primary variant (inverse, disabled).               |
| --ds-advanced-color-button-primary-border-inverse-hover        | Border color of the primary variant (inverse, hover).                  |
| --ds-advanced-color-button-primary-text                        | Text color of the primary variant.                                     |
| --ds-advanced-color-button-primary-text-inverse                | Text color of the primary variant (inverse).                           |
| --ds-advanced-color-button-secondary-background                | Background color of the secondary variant.                             |
| --ds-advanced-color-button-secondary-background-disabled       | Background color of the secondary variant (disabled).                  |
| --ds-advanced-color-button-secondary-background-hover          | Background color of the secondary variant (hover).                     |
| --ds-advanced-color-button-secondary-background-inverse-hover  | Background color of the secondary variant (inverse, hover).            |
| --ds-advanced-color-button-secondary-border                    | Border color of the secondary variant.                                 |
| --ds-advanced-color-button-secondary-border-disabled           | Border color of the secondary variant (disabled).                      |
| --ds-advanced-color-button-secondary-border-hover              | Border color of the secondary variant (hover).                         |
| --ds-advanced-color-button-secondary-border-inverse            | Border color of the secondary variant (inverse).                       |
| --ds-advanced-color-button-secondary-border-inverse-disabled   | Border color of the secondary variant (inverse, disabled).             |
| --ds-advanced-color-button-secondary-text                      | Text color of the secondary variant.                                   |
| --ds-advanced-color-button-secondary-text-hover                | Text color of the secondary variant (hover).                           |
| --ds-advanced-color-button-secondary-text-inverse              | Text color of the secondary variant (inverse).                         |
| --ds-advanced-color-button-tertiary-background                 | Background color of the tertiary variant.                              |
| --ds-advanced-color-button-tertiary-background-hover           | Background color of the tertiary variant (hover).                      |
| --ds-advanced-color-button-tertiary-background-inverse         | Background color of the tertiary variant (inverse).                    |
| --ds-advanced-color-button-tertiary-background-inverse-hover   | Background color of the tertiary variant (inverse, hover).             |
| --ds-advanced-color-button-tertiary-text                       | Text color of the tertiary variant.                                    |
| --ds-advanced-color-button-tertiary-text-inverse               | Text color of the tertiary variant (inverse).                          |
| --ds-advanced-color-state-focused                              | Focus indicator color (shared state design token).                     |
| --ds-advanced-color-state-focused-inverse                      | Focus indicator color on dark backgrounds (shared state design token). |
| --ds-auro-button-border-color                                  | Border color of the button.                                            |
| --ds-auro-button-border-inset-color                            | Inset border color of the button.                                      |
| --ds-auro-button-container-color                               | Container background color of the button.                              |
| --ds-auro-button-container-image                               | Container background image of the button.                              |
| --ds-auro-button-loader-color                                  | Color of the loading indicator.                                        |
| --ds-auro-button-tap-color                                     | Tap highlight color of the button.                                     |
| --ds-auro-button-text-color                                    | Text color of the button.                                              |
| --ds-auro-icon-size                                            | Size of an icon rendered inside the button.                            |
| --ds-basic-color-texticon-disabled                             | Disabled text/icon color (shared design token).                        |
| --ds-basic-color-texticon-inverse-disabled                     | Disabled text/icon color on dark backgrounds (shared design token).    |
| --ds-size-100                                                  | Spacing/size scale token `--ds-size-100` (shared design token).        |
| --ds-size-150                                                  | Spacing/size scale token `--ds-size-150` (shared design token).        |
| --ds-size-200                                                  | Spacing/size scale token `--ds-size-200` (shared design token).        |
| --ds-size-300                                                  | Spacing/size scale token `--ds-size-300` (shared design token).        |
| --ds-size-400                                                  | Spacing/size scale token `--ds-size-400` (shared design token).        |
| --ds-size-50                                                   | Spacing/size scale token `--ds-size-50` (shared design token).         |
| --ds-size-500                                                  | Spacing/size scale token `--ds-size-500` (shared design token).        |