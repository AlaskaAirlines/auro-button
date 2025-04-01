<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-button

## Attributes

| Attribute | Type     | Description                      |
|-----------|----------|----------------------------------|
| [id](#id)      | `String` | Set the unique ID of an element. |

## Properties

| Property         | Attribute        | Type      | Default | Description                                      |
|------------------|------------------|-----------|---------|--------------------------------------------------|
| [arialabel](#arialabel)      | `arialabel`      | `String`  |         | Populates the `aria-label` attribute that is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. If there is visible text labeling the element, use `aria-labelledby` instead. |
| [arialabelledby](#arialabelledby) | `arialabelledby` | `String`  |         | Populates the `aria-labelledby` attribute that establishes relationships between objects and their label(s), and its value should be one or more element IDs, which refer to elements that have the text needed for labeling. List multiple element IDs in a space delimited fashion. |
| [autofocus](#autofocus)      | `autofocus`      | `Boolean` | false   | This Boolean attribute lets you specify that the button should have input focus when the page loads, unless overridden by the user |
| [disabled](#disabled)       | `disabled`       | `Boolean` | false   | If set to true button will become disabled and not allow for interactions |
| [fluid](#fluid)          | `fluid`          | `Boolean` | false   | Alters the shape of the button to be full width of its parent container |
| [iconOnly](#iconOnly)       | `iconOnly`       | `Boolean` | false   | If set to true, the button will contain an icon with no additional content |
| [loading](#loading)        | `loading`        | `Boolean` | false   | If set to true button text will be replaced with `auro-loader` and become disabled |
| [onDark](#onDark)         | `onDark`         | `Boolean` | false   | Set value for on-dark version of auro-button     |
| [ready](#ready)          | `ready`          | `Boolean` | false   | When false the component API should not be called. |
| [rounded](#rounded)        | `rounded`        | `Boolean` | false   | If set to true, the button will have a rounded shape |
| [secondary](#secondary)      | `secondary`      | `Boolean` | false   | DEPRECATED                                       |
| [slim](#slim)           | `slim`           | `Boolean` | false   | Set value for slim version of auro-button        |
| [tertiary](#tertiary)       | `tertiary`       | `Boolean` | false   | DEPRECATED                                       |
| [title](#title)          | `title`          | `String`  |         | Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element. |
| [type](#type)           | `type`           | `String`  |         | The type of the button. Possible values are: `submit`, `reset`, `button` |
| [value](#value)          | `value`          | `String`  |         | Defines the value associated with the button which is submitted with the form data. |
| [variant](#variant)        | `variant`        | `String`  |         | Sets button variant option. Possible values are: `secondary`, `tertiary` |

## Events

| Event              | Type               | Description                                      |
|--------------------|--------------------|--------------------------------------------------|
| `auroButton-ready` | `CustomEvent<any>` | Notifies that the component has finished initializing. |

## Slots

| Name   | Description                               |
|--------|-------------------------------------------|
|        | Default slot for the text of the button.  |
| [icon](#icon) | Slot to provide auro-icon for the button. |

## CSS Shadow Parts

| Part     | Description                |
|----------|----------------------------|
| [button](#button) | Apply CSS to HTML5 button. |
| [icon](#icon)   | Apply CSS to icon slot.    |
| [loader](#loader) | Apply CSS to auro-loader.  |
| [text](#text)   | Apply CSS to text slot.    |
<!-- AURO-GENERATED-CONTENT:END -->

# API Examples

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-button>Primary</auro-button>
  <auro-button variant="secondary">Secondary</auro-button>
  <auro-button variant="tertiary">Tertiary</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-button>Primary</auro-button>
<auro-button variant="secondary">Secondary</auro-button>
<auro-button variant="tertiary">Tertiary</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/onDark.html) -->
  <!-- The below content is automatically added from ./../apiExamples/onDark.html -->
  <auro-button ondark>Primary</auro-button>
  <auro-button variant="secondary" ondark>Secondary</auro-button>
  <auro-button variant="tertiary" ondark>Tertiary</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/onDark.html -->

```html
<auro-button ondark>Primary</auro-button>
<auro-button variant="secondary" ondark>Secondary</auro-button>
<auro-button variant="tertiary" ondark>Tertiary</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Disabled

This example demonstrates `auro-button` in it's `disabled` state.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled.html) -->
  <!-- The below content is automatically added from ./../apiExamples/disabled.html -->
  <auro-button disabled>Primary</auro-button>
  <auro-button variant="secondary" disabled>Secondary</auro-button>
  <auro-button variant="tertiary" disabled>Tertiary</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disabled.html -->

```html
<auro-button disabled>Primary</auro-button>
<auro-button variant="secondary" disabled>Secondary</auro-button>
<auro-button variant="tertiary" disabled>Tertiary</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabledOnDark.html) -->
  <!-- The below content is automatically added from ./../apiExamples/disabledOnDark.html -->
  <auro-button disabled ondark>Primary</auro-button>
  <auro-button variant="secondary" disabled ondark>Secondary</auro-button>
  <auro-button variant="tertiary" disabled ondark>Tertiary</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabledOnDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disabledOnDark.html -->

```html
<auro-button disabled ondark>Primary</auro-button>
<auro-button variant="secondary" disabled ondark>Secondary</auro-button>
<auro-button variant="tertiary" disabled ondark>Tertiary</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slim Style

Use the `slim` attribute with the `auro-button` element for a slim style with less padding. The slim style is used to establish the lowest level of hierarchy. Slim buttons have the least emphasis and significance on a page.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/slim.html) -->
  <!-- The below content is automatically added from ./../apiExamples/slim.html -->
  <auro-button slim>Primary</auro-button>
  <auro-button slim variant="secondary">Secondary</auro-button>
  <auro-button slim variant="tertiary">Tertiary</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/slim.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/slim.html -->

```html
<auro-button slim>Primary</auro-button>
<auro-button slim variant="secondary">Secondary</auro-button>
<auro-button slim variant="tertiary">Tertiary</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Icon Support

Adding icons to the auro-button component is as easy as nesting any other HTML. The auro-icon component 
has access to all the icons listed in the Auro Icons library 
for quick and easy use.

Be sure to use the customColor attribute on the `auro-icon` component to allow colors set in your parent element to pass through to the icon and `slot=icon` to properly place the `auro-icon` within the button.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/icon.html) -->
  <!-- The below content is automatically added from ./../apiExamples/icon.html -->
  <auro-button aria-label="wifi">
    Activate WiFi
    <auro-icon customColor category="in-flight" name="wifi" slot="icon"></auro-icon>
  </auro-button>
  <auro-button variant="secondary" aria-label="arrow-left">
    Previous action
    <auro-icon customcolor category="interface" name="arrow-left" slot="icon"></auro-icon>
  </auro-button>
  <auro-button variant="tertiary" aria-label="heart-filled">
    Love this ...
    <auro-icon customcolor category="interface" name="heart-filled" slot="icon"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/icon.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/icon.html -->

```html
<auro-button aria-label="wifi">
  Activate WiFi
  <auro-icon customColor category="in-flight" name="wifi" slot="icon"></auro-icon>
</auro-button>
<auro-button variant="secondary" aria-label="arrow-left">
  Previous action
  <auro-icon customcolor category="interface" name="arrow-left" slot="icon"></auro-icon>
</auro-button>
<auro-button variant="tertiary" aria-label="heart-filled">
  Love this ...
  <auro-icon customcolor category="interface" name="heart-filled" slot="icon"></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Icon Only Button

Use the `iconOnly` attribute with the `auro-button` element for a style specific to having only an `auro-icon` as the button's content.

Be sure to use the `customColor` attribute on the `auro-icon` component to allow colors set in your parent element to pass through to the icon.

**Recommended**: We strongly encourage the users of the icon only `auro-button` to use the `aria-label` attribute. Without this attribute, the screenreaders will not properly describe the button content to it's users.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/iconOnly.html) -->
  <!-- The below content is automatically added from ./../apiExamples/iconOnly.html -->
  <auro-button aria-label="home-filled" iconOnly>
    <auro-icon customColor category="interface" name="home-filled" slot="icon"></auro-icon>
  </auro-button>
  <auro-button aria-label="arrow-left" variant="secondary" iconOnly>
    <auro-icon customColor category="interface" name="arrow-left" slot="icon"></auro-icon>
  </auro-button>
  <auro-button aria-label="heart-filled" variant="tertiary" iconOnly>
    <auro-icon customColor category="interface" name="heart-filled" slot="icon"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/iconOnly.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/iconOnly.html -->

```html
<auro-button aria-label="home-filled" iconOnly>
  <auro-icon customColor category="interface" name="home-filled" slot="icon"></auro-icon>
</auro-button>
<auro-button aria-label="arrow-left" variant="secondary" iconOnly>
  <auro-icon customColor category="interface" name="arrow-left" slot="icon"></auro-icon>
</auro-button>
<auro-button aria-label="heart-filled" variant="tertiary" iconOnly>
  <auro-icon customColor category="interface" name="heart-filled" slot="icon"></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Icon Only Button - Slim Style

Use the `slim` attribute along with `iconOnly` attribute on the `auro-button` element for a slimmer icon only button with less padding.

Be sure to use the `customColor` and `customSize` attributes on the `auro-icon` component, as well as add `height` and `width` styles to the `auro-icon` component to allow colors set in your parent element to pass through to the icon.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/iconOnlySlim.html) -->
  <!-- The below content is automatically added from ./../apiExamples/iconOnlySlim.html -->
  <auro-button aria-label="home-filled" iconOnly slim>
    <auro-icon customColor category="interface" name="home-filled" slot="icon"></auro-icon>
  </auro-button>
  <auro-button aria-label="arrow-left" variant="secondary" iconOnly slim>
    <auro-icon customColor category="interface" name="arrow-left" slot="icon"></auro-icon>
  </auro-button>
  <auro-button aria-label="heart-filled" variant="tertiary" iconOnly slim>
    <auro-icon customColor category="interface" name="heart-filled" slot="icon"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/iconOnlySlim.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/iconOnlySlim.html -->

```html
<auro-button aria-label="home-filled" iconOnly slim>
  <auro-icon customColor category="interface" name="home-filled" slot="icon"></auro-icon>
</auro-button>
<auro-button aria-label="arrow-left" variant="secondary" iconOnly slim>
  <auro-icon customColor category="interface" name="arrow-left" slot="icon"></auro-icon>
</auro-button>
<auro-button aria-label="heart-filled" variant="tertiary" iconOnly slim>
  <auro-icon customColor category="interface" name="heart-filled" slot="icon"></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Rounded

Use the `rounded` attribute for an `auro-button` with rounded corners.

#### No Text

Use the `rounded` attribute in conjunction with the `iconOnly` attribute for an `auro-button` that has an `auro-icon` and no text.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/rounded.html) -->
  <!-- The below content is automatically added from ./../apiExamples/rounded.html -->
  <auro-button aria-label="arrow-up" rounded iconOnly>
    <auro-icon customColor category="interface" name="arrow-up" slot="icon"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/rounded.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/rounded.html -->

```html
<auro-button aria-label="arrow-up" rounded iconOnly>
  <auro-icon customColor category="interface" name="arrow-up" slot="icon"></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### With Text

This example demonstrates a `rounded` `auro-button` with text and an `auro-icon`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/roundedTextWithIcon.html) -->
  <!-- The below content is automatically added from ./../apiExamples/roundedTextWithIcon.html -->
  <auro-button aria-label="in-flight" rounded>
    Back to Top
    <auro-icon customColor category="interface" name="arrow-up" slot="icon"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/roundedTextWithIcon.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/roundedTextWithIcon.html -->

```html
<auro-button aria-label="in-flight" rounded>
  Back to Top
  <auro-icon customColor category="interface" name="arrow-up" slot="icon"></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Text Only

A `rounded` `auro-button` with text only.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/roundedTextOnly.html) -->
  <!-- The below content is automatically added from ./../apiExamples/roundedTextOnly.html -->
  <auro-button aria-label="arrow-up" rounded>
    Primary
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/roundedTextOnly.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/roundedTextOnly.html -->

```html
<auro-button aria-label="arrow-up" rounded>
  Primary
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Toggle Text

The `rounded` attribute supports the ability to hide/show the text of the `auro-button`. This can be done by changing the value of the `iconOnly` attribute. In this example, the text is toggled via `mouseover` and `mouseout` events. The `focusin` and `focusout` events simulate toggling text for keyboard users.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/toggledText.html) -->
  <!-- The below content is automatically added from ./../apiExamples/toggledText.html -->
  <auro-button aria-label="arrow-up" rounded iconOnly id="toggledTextElem">
    Text is now shown!
    <auro-icon customColor category="interface" name="arrow-up" slot="icon"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/toggledText.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/toggledText.html -->

```html
<auro-button aria-label="arrow-up" rounded iconOnly id="toggledTextElem">
  Text is now shown!
  <auro-icon customColor category="interface" name="arrow-up" slot="icon"></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/toggledText.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/toggledText.js -->

```js
export function toggledTextExample() {
  const toggledTextElem = document.querySelector('#toggledTextElem');

  // The mouseover and mouseout events are to simulate toggling text for mouse users
  toggledTextElem.addEventListener('mouseover', () => {
    toggledTextElem.iconOnly = false;
  });

  toggledTextElem.addEventListener('mouseout', () => {
    toggledTextElem.iconOnly = true;
  });

  // The focusin and focusout events are to simulate toggling text for keyboard users
  toggledTextElem.addEventListener('focusin', () => {
    toggledTextElem.iconOnly = false;
  });

  toggledTextElem.addEventListener('focusout', () => {
    toggledTextElem.iconOnly = true;
  });
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Right Aligned

This example shows a `rounded` `auro-button` that is right-aligned, demonstrating how the button starts from the right and grows/shrinks from right to left when using the `toggleText` attribute in conjuction with the `mouseover` and `mouseout` events. The `focusin` and `focusout` events simulate toggling text for keyboard users.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/roundedRightAlign.html) -->
  <!-- The below content is automatically added from ./../apiExamples/roundedRightAlign.html -->
  <auro-button aria-label="in-flight" rounded iconOnly id="rightAlignElem" style="float: right;">
    Text is now shown!
    <auro-icon customColor category="interface" name="arrow-up" slot="icon"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/roundedRightAlign.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/roundedRightAlign.html -->

```html
<auro-button aria-label="in-flight" rounded iconOnly id="rightAlignElem" style="float: right;">
  Text is now shown!
  <auro-icon customColor category="interface" name="arrow-up" slot="icon"></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/roundedRightAlign.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/roundedRightAlign.js -->

```js
export function roundedRightAlignExample() {
  const rightAlignElem = document.querySelector('#rightAlignElem');

  // The mouseover and mouseout events are to simulate toggling text for mouse users
  rightAlignElem.addEventListener('mouseover', () => {
    rightAlignElem.iconOnly = false;
  });

  rightAlignElem.addEventListener('mouseout', () => {
    rightAlignElem.iconOnly = true;
  });

  // The focusin and focusout events are to simulate toggling text for keyboard users
  rightAlignElem.addEventListener('focusin', () => {
    rightAlignElem.iconOnly = false;
  });

  rightAlignElem.addEventListener('focusout', () => {
    rightAlignElem.iconOnly = true;
  });
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Fluid

In the following example see how the `fluid` attributes alters the shape of the button to be full width of its parent container.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/fluid.html) -->
  <!-- The below content is automatically added from ./../apiExamples/fluid.html -->
  <auro-button fluid>Primary</auro-button>
  <auro-button variant="secondary" fluid>Secondary</auro-button>
  <auro-button variant="tertiary" fluid>Tertiary</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/fluid.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/fluid.html -->

```html
<auro-button fluid>Primary</auro-button>
<auro-button variant="secondary" fluid>Secondary</auro-button>
<auro-button variant="tertiary" fluid>Tertiary</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Loading State

Use the `loading` attribute to alter the content to the shimmering dots to alert the user that the button/form is in an active state. The `loading` attribute will also place the element in a disabled state to keep the user from re-submitting an action.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/loading.html) -->
  <!-- The below content is automatically added from ./../apiExamples/loading.html -->
  <auro-button loading>Primary</auro-button>
  <auro-button variant="secondary" loading>Secondary</auro-button>
  <auro-button variant="tertiary" loading>Tertiary</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/loading.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/loading.html -->

```html
<auro-button loading>Primary</auro-button>
<auro-button variant="secondary" loading>Secondary</auro-button>
<auro-button variant="tertiary" loading>Tertiary</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/loadingOnDark.html) -->
  <!-- The below content is automatically added from ./../apiExamples/loadingOnDark.html -->
  <auro-button ondark loading>Primary</auro-button>
  <auro-button variant="secondary" ondark loading>Secondary</auro-button>
  <auro-button variant="tertiary" ondark loading>Tertiary</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/loadingOnDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/loadingOnDark.html -->

```html
<auro-button ondark loading>Primary</auro-button>
<auro-button variant="secondary" ondark loading>Secondary</auro-button>
<auro-button variant="tertiary" ondark loading>Tertiary</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Loading text

To provide a custom loading message for assistive technologies, use the `loadingText` attribute. If not provided, the default message will be "Loading...".

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/loadingText.html) -->
  <!-- The below content is automatically added from ./../apiExamples/loadingText.html -->
  <auro-button loading loadingText="Custom loading text">Primary</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/loadingText.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/loadingText.html -->

```html
<auro-button loading loadingText="Custom loading text">Primary</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/tokens.scss -->

```scss
@import "./../node_modules/@aurodesignsystem/design-tokens/dist/auro-classic/SCSSVariables";

:host {
  --ds-auro-button-border-color: var(--ds-color-container-ui-primary-default-default, #{$ds-color-container-ui-primary-default-default});
  --ds-auro-button-border-inset-color: var(--ds-color-border-emphasis-inverse, #{$ds-color-border-emphasis-inverse});
  --ds-auro-button-container-color: var(--ds-color-container-ui-primary-default-default, #{$ds-color-container-ui-primary-default-default});
  --ds-auro-button-container-image: var(--ds-color-container-ui-primary-default-default, #{$ds-color-container-ui-primary-default-default});
  --ds-auro-button-loader-color: var(--ds-color-utility-navy-default, #{$ds-color-utility-navy-default});
  --ds-auro-button-text-color: var(--ds-color-text-primary-inverse, #{$ds-color-text-primary-inverse});
  --ds-auro-button-tap-color: transparent;
}
```
<!-- AURO-GENERATED-CONTENT:END -->
