# auro-button


### Properties & Attributes

| Properties | Attributes | Type | Default | Description  |
| --- | --- | --- | --- | --- |
formAssociated |  |  |  | Enables form association for this element.
form |  |  |  | Returns the form element that this button is associated with.
currentAriaLabel |  |  |  | Returns the current value of the projected `aria-label` attribute or undefined if not set. The `aria-label` attribute is for internal use only.
currentAriaLabelledBy |  |  |  | Returns the current value of the projected `aria-labelledby` attribute or undefined if not set.
iconOnly |  |  |  | Whether or not the button is set to an icon-only shape.
_renderTag |  |  |  | Renders the tag for the component.
autofocus | autofocus | boolean | false | This Boolean attribute lets you specify that the button should have input focus when the page loads, unless overridden by the user.
disabled | disabled | boolean | false | If set to true, button will become disabled and not allow for interactions.
loading | loading | boolean | false | If set to true button text will be replaced with `auro-loader` and become disabled.
static | static | boolean | false | If true, the button will be static and not respond to user interactions.
size |  | 'xs', 'sm', 'md', 'lg', 'xl' | "md" | Defines the size of the button.
shape |  | 'default', 'rounded', 'pill', 'circle', 'square' | "rounded" | Defines the shape of the button.
fluid | fluid | boolean | false | Alters the shape of the button to be full width of its parent container.
loadingText | loadingText | string |  | DEPRECATED - Use `slot="ariaLabel.loading"` instead.
variant | variant | 'primary', 'secondary', 'tertiary', 'ghost', 'flat' | "primary" | Sets the button variant.
type | type | 'submit', 'reset', 'button' |  | The type of button. Matches HTML5 Button Spec.
onDark |  | boolean |  | DEPRECATED - use `appearance` property
appearance |  | 'default', 'inverse' |  | Defines whether the button will be on lighter or darker backgrounds.
layout |  | boolean |  | Override layout since it isn't used in this component.
tIndex | tIndex | string |  | Populates `tabindex` to define the focusable sequence in keyboard navigation.
tabindex | tabindex | string |  | Populates `tabindex` to define the focusable sequence in keyboard navigation.<br>Must be used with "." to ensure the host element does not retain a reference to the `tabindex` attribute.<br>Example: `<auro-button .tabindex="${this.disabled ? '-1' : '0'}"></auro-button>`.
title | title | string |  | Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element.
value | value | string |  | Defines the value associated with the button which is submitted with the form data.


### Methods

| Name | Parameters | Return | Description |
| --- | --- | --- | --- |
register | `name` (string) - The name of element that you want to register to. |  | This will register this element with the browser.


    