# auro-button

## Properties

| Property      | Attribute     | Type                                             | Default   | Description                                      |
|---------------|---------------|--------------------------------------------------|-----------|--------------------------------------------------|
| `autofocus`   | `autofocus`   | `boolean`                                        | false     | This Boolean attribute lets you specify that the button should have input focus when the page loads, unless overridden by the user. |
| `disabled`    | `disabled`    | `boolean`                                        | false     | If set to true, button will become disabled and not allow for interactions. |
| `fluid`       | `fluid`       | `boolean`                                        | false     | Alters the shape of the button to be full width of its parent container. |
| `loading`     | `loading`     | `boolean`                                        | false     | If set to true button text will be replaced with `auro-loader` and become disabled. |
| `loadingText` | `loadingText` | `string`                                         |           | Sets custom loading text for the `aria-label` on a button in loading state. If not set, the default value of "Loading..." will be used. |
| `onDark`      | `ondark`      | `boolean`                                        | false     | Indicates if the button is rendered in dark mode. |
| `shape`       | `shape`       | `'default', 'rounded', 'pill', 'circle', 'square'` | "rounded" | Defines the shape of the button.                 |
| `size`        | `size`        | `'xs', 'sm', 'md', 'lg', 'xl'`                   | "md"      | Defines the size of the button.                  |
| `static`      | `static`      | `boolean`                                        | false     | If true, the button will be static and not respond to user interactions. |
| `tIndex`      | `tIndex`      | `string`                                         |           | Populates `tabindex` to define the focusable sequence in keyboard navigation. |
| `tabindex`    | `tabindex`    | `string`                                         |           | Populates `tabindex` to define the focusable sequence in keyboard navigation.<br />Must be used with "." to ensure the host element does not retain a reference to the `tabindex` attribute.<br />Example: `<auro-button .tabindex="${this.disabled ? '-1' : '0'}"></auro-button>`. |
| `title`       | `title`       | `string`                                         |           | Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element. |
| `type`        | `type`        | `'submit', 'reset', 'button'`                    |           | The type of button. Matches HTML5 Button Spec.   |
| `value`       | `value`       | `string`                                         |           | Defines the value associated with the button which is submitted with the form data. |
| `variant`     | `variant`     | `'primary', 'secondary', 'tertiary', 'ghost', 'flat'` | "primary" | Sets the button variant.                         |

## Methods

| Method                        | Type       |
|-------------------------------|------------|
| `resetLayoutClasses`          | `(): void` |
| `resetShapeClasses`           | `(): void` |
| `updateComponentArchitecture` | `(): void` |
