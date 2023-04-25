# auro-button

## Attributes

| Attribute | Type     | Description                      |
|-----------|----------|----------------------------------|
| `id`      | `String` | Set the unique ID of an element. |

## Properties

| Property         | Attribute        | Type      | Default | Description                                      |
|------------------|------------------|-----------|---------|--------------------------------------------------|
| `arialabel`      | `arialabel`      | `String`  |         | Populates the `aria-label` attribute that is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. If there is visible text labeling the element, use `aria-labelledby` instead. |
| `arialabelledby` | `arialabelledby` | `String`  |         | Populates the `aria-labelledby` attribute that establishes relationships between objects and their label(s), and its value should be one or more element IDs, which refer to elements that have the text needed for labeling. List multiple element IDs in a space delimited fashion. |
| `autofocus`      | `autofocus`      | `Boolean` | false   | This Boolean attribute lets you specify that the button should have input focus when the page loads, unless overridden by the user |
| `disabled`       | `disabled`       | `Boolean` | false   | If set to true button will become disabled and not allow for interactions |
| `iconOnly`       | `iconOnly`       | `Boolean` | false   | If set to true, the button will contain an icon with no additional content |
| `loading`        | `loading`        | `Boolean` | false   | If set to true button text will be replaced with `auro-loader` and become disabled |
| `ondark`         | `ondark`         | `Boolean` | false   | Set value for on-dark version of auro-button     |
| `ready`          | `ready`          | `Boolean` | false   | When false the component API should not be called. |
| `secondary`      | `secondary`      | `Boolean` | false   | Set value for secondary version of auro-button   |
| `slim`           | `slim`           | `Boolean` | false   | Set value for slim version of auro-button        |
| `svgIconLeft`    | `svgIconLeft`    | `String`  |         | **DEPRECATED** Use auro-icon                     |
| `svgIconRight`   | `svgIconRight`   | `String`  |         | **DEPRECATED** Use auro-icon                     |
| `tertiary`       | `tertiary`       | `Boolean` | false   | Set value for tertiary version of auro-button    |
| `title`          | `title`          | `String`  |         | Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element. |
| `type`           | `type`           | `String`  |         | The type of the button. Possible values are: `submit`, `reset`, `button` |
| `value`          | `value`          | `String`  |         | Defines the value associated with the button which is submitted with the form data. |

## Events

| Event              | Type               | Description                                      |
|--------------------|--------------------|--------------------------------------------------|
| `auroButton-ready` | `CustomEvent<any>` | Notifies that the component has finished initializing. |

## Slots

| Name | Description                  |
|------|------------------------------|
|      | Provide text for the button. |
