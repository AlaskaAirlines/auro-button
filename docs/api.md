# auro-button

## Attributes

| Attribute | Type      | Description                   |
|-----------|-----------|-------------------------------|
| `fixed`   | `Boolean` | uses px values instead of rem |

## Properties

| Property         | Attribute        | Type      | Description                                      |
|------------------|------------------|-----------|--------------------------------------------------|
| `arialabel`      | `arialabel`      | `Boolean` | Populates the `aria-label` attribute that is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. If there is visible text labeling the element, use `aria-labelledby` instead. |
| `arialabelledby` | `arialabelledby` | `Boolean` | Populates the `aria-labelledby` attribute that establishes relationships between objects and their label(s), and its value should be one or more element IDs, which refer to elements that have the text needed for labeling. List multiple element IDs in a space delimited fashion. |
| `autofocus`      | `autofocus`      | `Boolean` | This Boolean attribute lets you specify that the button should have input focus when the page loads, unless overridden by the user |
| `disabled`       | `disabled`       | `Boolean` | If set to true button will become disabled and not allow for interactions |
| `id`             | `id`             | `Boolean` | Set the unique ID of an element.                 |
| `loading`        | `loading`        | `Boolean` | If set to true button text will be replaced with `auro-loader` and become disabled |
| `ondark`         | `ondark`         | `Boolean` | Set value for on-dark version of auro-button     |
| `secondary`      | `secondary`      | `Boolean` | Set value for secondary version of auro-button   |
| `svgIconLeft`    | `svgIconLeft`    | `Boolean` | **DEPRECATED** Use auro-icon                     |
| `svgIconRight`   | `svgIconRight`   | `Boolean` | **DEPRECATED** Use auro-icon                     |
| `tertiary`       | `tertiary`       | `Boolean` | Set value for tertiary version of auro-button    |
| `title`          | `title`          | `Boolean` | Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element. |
| `type`           | `type`           | `Boolean` | The type of the button. Possible values are: `submit`, `reset`, `button` |
| `value`          | `value`          | `Boolean` | Defines the value associated with the button which is submitted with the form data. |

## Methods

| Method         | Type          |
|----------------|---------------|
| `ariaDisabled` | `(): boolean` |

## Slots

| Name | Description                  |
|------|------------------------------|
|      | Provide text for the button. |
