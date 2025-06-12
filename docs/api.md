# auro-button

## Properties

| Property         | Attribute        | Type                                     | Default   | Description                                      |
|------------------|------------------|------------------------------------------|-----------|--------------------------------------------------|
| `ariaexpanded`   | `ariaexpanded`   | `boolean`                                |           | Populates the `aria-expanded` attribute that indicates whether the element,<br />or another grouping element it controls, is currently expanded or collapsed.<br />This is an optional attribute for buttons. |
| `ariahidden`     | `ariahidden`     | `string`                                 |           | Populates the `aria-hidden` attribute to hide the button from a11y API. |
| `arialabel`      | `arialabel`      | `string`                                 |           | Populates the `aria-label` attribute that is used to define a string that labels the current element.<br />Use it in cases where a text label is not visible on the screen.<br />If there is visible text labeling the element, use `aria-labelledby` instead. |
| `arialabelledby` | `arialabelledby` | `string`                                 |           | Populates the `aria-labelledby` attribute that establishes relationships between objects and their label(s),<br />and its value should be one or more element IDs, which refer to elements that have the text needed for labeling.<br />List multiple element IDs in a space delimited fashion. |
| `autofocus`      | `autofocus`      | `boolean`                                | false     | This Boolean attribute lets you specify that the button should have input focus when the page loads, unless overridden by the user. |
| `disabled`       | `disabled`       | `boolean`                                | false     | If set to true, button will become disabled and not allow for interactions. |
| `fluid`          | `fluid`          | `boolean`                                | false     | Alters the shape of the button to be full width of its parent container. |
| `loading`        | `loading`        | `boolean`                                | false     | If set to true button text will be replaced with `auro-loader` and become disabled. |
| `loadingText`    | `loadingText`    | `string`                                 |           | Sets custom loading text for the `aria-label` on a button in loading state. If not set, the default value of "Loading..." will be used. |
| `onDark`         | `onDark`         | `boolean`                                | false     | Indicates if the button is rendered in dark mode. |
| `shape`          |                  | `'default', 'rounded', 'pill', 'circle'` | "rounded" | Defines the shape of the button.                 |
| `size`           |                  | `'xs', 'sm', 'md', 'lg', 'xl'`           | "md"      | Defines the size of the button.                  |
| `tIndex`         | `tIndex`         | `string`                                 |           | Populates `tabIndex` to define the focusable sequence in keyboard navigation. |
| `title`          | `title`          | `string`                                 |           | Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element. |
| `type`           | `type`           | `string`                                 |           | The type of the button. Possible values are: `submit`, `reset`, `button`. |
| `value`          | `value`          | `string`                                 |           | Defines the value associated with the button which is submitted with the form data. |
| `variant`        | `variant`        | `string`                                 |           | Sets button variant option. Possible values are: `secondary`, `tertiary`. |
