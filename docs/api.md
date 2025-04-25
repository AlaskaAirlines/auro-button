# auro-button

## Properties

| Property         | Attribute        | Type      | Default   | Description                                      |
|------------------|------------------|-----------|-----------|--------------------------------------------------|
| `ariaexpanded`   | `ariaexpanded`   | `boolean` |           | Populates the `aria-expanded` attribute that indicates whether the element,<br />or another grouping element it controls, is currently expanded or collapsed.<br />This is an optional attribute for buttons. |
| `ariahidden`     | `ariahidden`     | `string`  |           | Populates the `aria-hidden` attribute to hide the button from a11y API. |
| `arialabel`      | `arialabel`      | `string`  |           | Populates the `aria-label` attribute that is used to define a string that labels the current element.<br />Use it in cases where a text label is not visible on the screen.<br />If there is visible text labeling the element, use `aria-labelledby` instead. |
| `arialabelledby` | `arialabelledby` | `string`  |           | Populates the `aria-labelledby` attribute that establishes relationships between objects and their label(s),<br />and its value should be one or more element IDs, which refer to elements that have the text needed for labeling.<br />List multiple element IDs in a space delimited fashion. |
| `autofocus`      | `autofocus`      | `boolean` | false     | This Boolean attribute lets you specify that the button should have input focus when the page loads, unless overridden by the user. |
| `disabled`       | `disabled`       | `boolean` | false     | If set to true, button will become disabled and not allow for interactions. |
| `fluid`          | `fluid`          | `boolean` | false     | Alters the shape of the button to be full width of its parent container. |
| `iconOnly`       | `iconOnly`       | `boolean` | false     | DEPRECATED - use shape="window-shape".           |
| `loading`        | `loading`        | `boolean` | false     | If set to true button text will be replaced with `auro-loader` and become disabled. |
| `loadingText`    | `loadingText`    | `string`  |           | Sets custom loading text for the `aria-label` on a button in loading state. If not set, the default value of "Loading..." will be used. |
| `onDark`         | `onDark`         | `boolean` | false     | Set value for on-dark version of auro-button.    |
| `rounded`        | `rounded`        | `boolean` | false     | DEPRECATED - use shape="circle".                 |
| `secondary`      | `secondary`      | `boolean` | false     | DEPRECATED                                       |
| `shape`          | `shape`          | `string`  | "rounded" | Sets the shape of the buttons. Possible values are: `rounded`, `circle`, `pill`, `window-pane`. |
| `size`           | `size`           | `string`  | "md"      |                                                  |
| `slim`           | `slim`           | `boolean` | false     | DEPRECATED                                       |
| `tIndex`         | `tIndex`         | `string`  |           | Populates `tabIndex` to define the focusable sequence in keyboard navigation. |
| `tertiary`       | `tertiary`       | `boolean` | false     | DEPRECATED                                       |
| `title`          | `title`          | `string`  |           | Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element. |
| `type`           | `type`           | `string`  |           | The type of the button. Possible values are: `submit`, `reset`, `button`. |
| `value`          | `value`          | `string`  |           | Defines the value associated with the button which is submitted with the form data. |
| `variant`        | `variant`        | `string`  |           | Sets button variant option. Possible values are: `secondary`, `tertiary`, `flat`. |

## Slots

| Name   | Description                               |
|--------|-------------------------------------------|
|        | Default slot for the text of the button.  |
| `icon` | Slot to provide auro-icon for the button. |

## CSS Shadow Parts

| Part     | Description                |
|----------|----------------------------|
| `button` | Apply CSS to HTML5 button. |
| `icon`   | Apply CSS to icon slot.    |
| `loader` | Apply CSS to auro-loader.  |
| `text`   | Apply CSS to text slot.    |
