<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-button

## Properties

| Property         | Attribute        | Type      | Default   | Description                                      |
|------------------|------------------|-----------|-----------|--------------------------------------------------|
| [ariaexpanded](#ariaexpanded)   | `ariaexpanded`   | `boolean` |           | Populates the `aria-expanded` attribute that indicates whether the element,<br />or another grouping element it controls, is currently expanded or collapsed.<br />This is an optional attribute for buttons. |
| [ariahidden](#ariahidden)     | `ariahidden`     | `string`  |           | Populates the `aria-hidden` attribute to hide the button from a11y API. |
| [arialabel](#arialabel)      | `arialabel`      | `string`  |           | Populates the `aria-label` attribute that is used to define a string that labels the current element.<br />Use it in cases where a text label is not visible on the screen.<br />If there is visible text labeling the element, use `aria-labelledby` instead. |
| [arialabelledby](#arialabelledby) | `arialabelledby` | `string`  |           | Populates the `aria-labelledby` attribute that establishes relationships between objects and their label(s),<br />and its value should be one or more element IDs, which refer to elements that have the text needed for labeling.<br />List multiple element IDs in a space delimited fashion. |
| [autofocus](#autofocus)      | `autofocus`      | `boolean` | false     | This Boolean attribute lets you specify that the button should have input focus when the page loads, unless overridden by the user. |
| [disabled](#disabled)       | `disabled`       | `boolean` | false     | If set to true, button will become disabled and not allow for interactions. |
| [fluid](#fluid)          | `fluid`          | `boolean` | false     | Alters the shape of the button to be full width of its parent container. |
| [iconOnly](#iconOnly)       | `iconOnly`       | `boolean` | false     | DEPRECATED - use shape="window-shape".           |
| [loading](#loading)        | `loading`        | `boolean` | false     | If set to true button text will be replaced with `auro-loader` and become disabled. |
| [loadingText](#loadingText)    | `loadingText`    | `string`  |           | Sets custom loading text for the `aria-label` on a button in loading state. If not set, the default value of "Loading..." will be used. |
| [onDark](#onDark)         | `onDark`         | `boolean` | false     | Set value for on-dark version of auro-button.    |
| [rounded](#rounded)        | `rounded`        | `boolean` | false     | DEPRECATED - use shape="circle".                 |
| [secondary](#secondary)      | `secondary`      | `boolean` | false     | DEPRECATED                                       |
| [shape](#shape)          | `shape`          | `string`  | "rounded" | Sets the shape of the buttons. Possible values are: `rounded`, `circle`, `pill`, `window-pane`. |
| [size](#size)           | `size`           | `string`  | "md"      | Sets the size of the buttons. Possible values are: `xs`, `sm`, `md`, `lg`, `xl`. |
| [slim](#slim)           | `slim`           | `boolean` | false     | DEPRECATED                                       |
| [tIndex](#tIndex)         | `tIndex`         | `string`  |           | Populates `tabIndex` to define the focusable sequence in keyboard navigation. |
| [tertiary](#tertiary)       | `tertiary`       | `boolean` | false     | DEPRECATED                                       |
| [title](#title)          | `title`          | `string`  |           | Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element. |
| [type](#type)           | `type`           | `string`  |           | The type of the button. Possible values are: `submit`, `reset`, `button`. |
| [value](#value)          | `value`          | `string`  |           | Defines the value associated with the button which is submitted with the form data. |
| [variant](#variant)        | `variant`        | `string`  |           | Sets button variant option. Possible values are: `secondary`, `tertiary`, `flat`. |

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

## Disabled <a name="disabled"></a>
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

## Shape <a name="shape"></a>
You can set the button's shape using the shape attribute.
- `rounded` is the default shape, which is a rectangle with slightly rounded corners.
- `pill` creates a long, pill-shaped button with no corners.
- `circle` is used for **icon-only** buttons with a circular shape.
- `window-pane` is also for **icon-only** buttons, featuring a slightly tall, oval shape.

#### rounded
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

#### window-pane

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-window-pane.html) -->
  <!-- The below content is automatically added from ./../apiExamples/shape-window-pane.html -->
  <auro-button aria-label="home-filled" shape="window-pane">
    <auro-icon customColor category="interface" name="home-filled" slot="icon"></auro-icon>
  </auro-button>
  <auro-button aria-label="arrow-left" variant="secondary" shape="window-pane">
    <auro-icon customColor category="interface" name="arrow-left" slot="icon"></auro-icon>
  </auro-button>
  <auro-button aria-label="heart-filled" variant="tertiary" shape="window-pane">
    <auro-icon customColor category="interface" name="heart-filled" slot="icon"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-window-pane.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/shape-window-pane.html -->

```html
<auro-button aria-label="home-filled" shape="window-pane">
  <auro-icon customColor category="interface" name="home-filled" slot="icon"></auro-icon>
</auro-button>
<auro-button aria-label="arrow-left" variant="secondary" shape="window-pane">
  <auro-icon customColor category="interface" name="arrow-left" slot="icon"></auro-icon>
</auro-button>
<auro-button aria-label="heart-filled" variant="tertiary" shape="window-pane">
  <auro-icon customColor category="interface" name="heart-filled" slot="icon"></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Circle

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-circle.html) -->
  <!-- The below content is automatically added from ./../apiExamples/shape-circle.html -->
  <auro-button aria-label="arrow-up" shape="circle">
    <auro-icon customColor category="interface" name="arrow-up" slot="icon"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-circle.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/shape-circle.html -->

```html
<auro-button aria-label="arrow-up" shape="circle">
  <auro-icon customColor category="interface" name="arrow-up" slot="icon"></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Pill

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-pill.html) -->
  <!-- The below content is automatically added from ./../apiExamples/shape-pill.html -->
  <auro-button aria-label="arrow-up" shape="pill">
    Primary
  </auro-button>
  <auro-button aria-label="in-flight" shape="pill">
    Back to Top
    <auro-icon customColor category="interface" name="arrow-up" slot="icon"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-pill.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/shape-pill.html -->

```html
<auro-button aria-label="arrow-up" shape="pill">
  Primary
</auro-button>
<auro-button aria-label="in-flight" shape="pill">
  Back to Top
  <auro-icon customColor category="interface" name="arrow-up" slot="icon"></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Toggle Text

The `rounded` attribute supports the ability to hide/show the text of the `auro-button`. This can be done by changing the value of the `iconOnly` attribute. In this example, the text is toggled via `mouseover` and `mouseout` events. The `focusin` and `focusout` events simulate toggling text for keyboard users.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/toggledText.html) -->
  <!-- The below content is automatically added from ./../apiExamples/toggledText.html -->
  <auro-button aria-label="arrow-up" shape="circle" id="toggledTextElem">
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
<auro-button aria-label="arrow-up" shape="circle" id="toggledTextElem">
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
    toggledTextElem.shape = "pill";
  });

  toggledTextElem.addEventListener('mouseout', () => {
    toggledTextElem.shape = "circle";
  });

  // The focusin and focusout events are to simulate toggling text for keyboard users
  toggledTextElem.addEventListener('focusin', () => {
    toggledTextElem.shape = "pill";
  });

  toggledTextElem.addEventListener('focusout', () => {
    toggledTextElem.shape = "circle";
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
  <auro-button aria-label="in-flight" shape="circle" id="rightAlignElem" style="float: right;">
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
<auro-button aria-label="in-flight" shape="circle" id="rightAlignElem" style="float: right;">
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
    rightAlignElem.shape = "pill";
  });

  rightAlignElem.addEventListener('mouseout', () => {
    rightAlignElem.shape = "circle";
  });

  // The focusin and focusout events are to simulate toggling text for keyboard users
  rightAlignElem.addEventListener('focusin', () => {
    rightAlignElem.shape = "pill";
  });

  rightAlignElem.addEventListener('focusout', () => {
    rightAlignElem.shape = "circle";
  });
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Size <a name="size"></a>
The size of the button can be set using the `size` attribute. There are five options available, and the default value is `md`.
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/size.html) -->
  <!-- The below content is automatically added from ./../apiExamples/size.html -->
  <table>
    <thead>
      <tr>
        <th>Size \ Shape</th>
        <th>rounded</th>
        <th>pill</th>
        <th>circle</th>
        <th>window-pane</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>xs</th>
        <td><auro-button size="xs" shape="rounded">xs & rounded</auro-button></td>
        <td><auro-button size="xs" shape="pill">xs & pill</auro-button></td>
        <td>
          <auro-button size="xs" shape="circle"
            ><auro-icon
              customcolor
              category="interface"
              name="heart-filled"
              slot="icon"
            ></auro-icon
          ></auro-button>
        </td>
        <td>
          <auro-button size="xs" shape="window-pane"
            ><auro-icon
              customcolor
              category="interface"
              name="heart-filled"
              slot="icon"
            ></auro-icon
          ></auro-button>
        </td>
      </tr>
      <tr>
        <th>sm</th>
        <td><auro-button size="sm" shape="rounded">sm & rounded</auro-button></td>
        <td><auro-button size="sm" shape="pill">sm & pill</auro-button></td>
        <td>
          <auro-button size="sm" shape="circle"
            ><auro-icon
              customcolor
              category="interface"
              name="heart-filled"
              slot="icon"
            ></auro-icon
          ></auro-button>
        </td>
        <td>
          <auro-button size="sm" shape="window-pane"
            ><auro-icon
              customcolor
              category="interface"
              name="heart-filled"
              slot="icon"
            ></auro-icon
          ></auro-button>
        </td>
      </tr>
      <tr>
        <th><b>md</b> (default)</th>
        <td><auro-button size="md" shape="rounded">md & rounded</auro-button></td>
        <td><auro-button size="md" shape="pill">md & pill</auro-button></td>
        <td>
          <auro-button size="md" shape="circle"
            ><auro-icon
              customcolor
              category="interface"
              name="heart-filled"
              slot="icon"
            ></auro-icon
          ></auro-button>
        </td>
        <td>
          <auro-button size="md" shape="window-pane"
            ><auro-icon
              customcolor
              category="interface"
              name="heart-filled"
              slot="icon"
            ></auro-icon
          ></auro-button>
        </td>
      </tr>
      <tr>
        <th>lg</th>
        <td><auro-button size="lg" shape="rounded">lg & rounded</auro-button></td>
        <td><auro-button size="lg" shape="pill">lg & pill</auro-button></td>
        <td>
          <auro-button size="lg" shape="circle"
            ><auro-icon
              customcolor
              category="interface"
              name="heart-filled"
              slot="icon"
            ></auro-icon
          ></auro-button>
        </td>
        <td>
          <auro-button size="lg" shape="window-pane"
            ><auro-icon
              customcolor
              category="interface"
              name="heart-filled"
              slot="icon"
            ></auro-icon
          ></auro-button>
        </td>
      </tr>
      <tr>
        <th>xl</th>
        <td><auro-button size="xl" shape="rounded">xl & rounded</auro-button></td>
        <td><auro-button size="xl" shape="pill">xl & pill</auro-button></td>
        <td>
          <auro-button size="xl" shape="circle"
            ><auro-icon
              customcolor
              category="interface"
              name="heart-filled"
              slot="icon"
            ></auro-icon
          ></auro-button>
        </td>
        <td>
          <auro-button size="xl" shape="window-pane"
            ><auro-icon
              customcolor
              category="interface"
              name="heart-filled"
              slot="icon"
            ></auro-icon
          ></auro-button>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/size.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/size.html -->

```html
<table>
  <thead>
    <tr>
      <th>Size \ Shape</th>
      <th>rounded</th>
      <th>pill</th>
      <th>circle</th>
      <th>window-pane</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>xs</th>
      <td><auro-button size="xs" shape="rounded">xs & rounded</auro-button></td>
      <td><auro-button size="xs" shape="pill">xs & pill</auro-button></td>
      <td>
        <auro-button size="xs" shape="circle"
          ><auro-icon
            customcolor
            category="interface"
            name="heart-filled"
            slot="icon"
          ></auro-icon
        ></auro-button>
      </td>
      <td>
        <auro-button size="xs" shape="window-pane"
          ><auro-icon
            customcolor
            category="interface"
            name="heart-filled"
            slot="icon"
          ></auro-icon
        ></auro-button>
      </td>
    </tr>
    <tr>
      <th>sm</th>
      <td><auro-button size="sm" shape="rounded">sm & rounded</auro-button></td>
      <td><auro-button size="sm" shape="pill">sm & pill</auro-button></td>
      <td>
        <auro-button size="sm" shape="circle"
          ><auro-icon
            customcolor
            category="interface"
            name="heart-filled"
            slot="icon"
          ></auro-icon
        ></auro-button>
      </td>
      <td>
        <auro-button size="sm" shape="window-pane"
          ><auro-icon
            customcolor
            category="interface"
            name="heart-filled"
            slot="icon"
          ></auro-icon
        ></auro-button>
      </td>
    </tr>
    <tr>
      <th><b>md</b> (default)</th>
      <td><auro-button size="md" shape="rounded">md & rounded</auro-button></td>
      <td><auro-button size="md" shape="pill">md & pill</auro-button></td>
      <td>
        <auro-button size="md" shape="circle"
          ><auro-icon
            customcolor
            category="interface"
            name="heart-filled"
            slot="icon"
          ></auro-icon
        ></auro-button>
      </td>
      <td>
        <auro-button size="md" shape="window-pane"
          ><auro-icon
            customcolor
            category="interface"
            name="heart-filled"
            slot="icon"
          ></auro-icon
        ></auro-button>
      </td>
    </tr>
    <tr>
      <th>lg</th>
      <td><auro-button size="lg" shape="rounded">lg & rounded</auro-button></td>
      <td><auro-button size="lg" shape="pill">lg & pill</auro-button></td>
      <td>
        <auro-button size="lg" shape="circle"
          ><auro-icon
            customcolor
            category="interface"
            name="heart-filled"
            slot="icon"
          ></auro-icon
        ></auro-button>
      </td>
      <td>
        <auro-button size="lg" shape="window-pane"
          ><auro-icon
            customcolor
            category="interface"
            name="heart-filled"
            slot="icon"
          ></auro-icon
        ></auro-button>
      </td>
    </tr>
    <tr>
      <th>xl</th>
      <td><auro-button size="xl" shape="rounded">xl & rounded</auro-button></td>
      <td><auro-button size="xl" shape="pill">xl & pill</auro-button></td>
      <td>
        <auro-button size="xl" shape="circle"
          ><auro-icon
            customcolor
            category="interface"
            name="heart-filled"
            slot="icon"
          ></auro-icon
        ></auro-button>
      </td>
      <td>
        <auro-button size="xl" shape="window-pane"
          ><auro-icon
            customcolor
            category="interface"
            name="heart-filled"
            slot="icon"
          ></auro-icon
        ></auro-button>
      </td>
    </tr>
  </tbody>
</table>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Fluid <a name="fluid"></a>
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

## Loading State <a name="loading"></a>
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

### Loading text <a name="loadingText"></a>
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

## ARIA attributes
Instead of using `aria-*` attributes, use `aria*` (without the hyphen) to properly bind ARIA attributes.

For `tabindex`, use `tIndex` instead to avoid duplicated focus interaction.

## Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/tokens.scss -->

```scss
@import "./../node_modules/@aurodesignsystem/design-tokens/dist/auro-classic/SCSSVariables";
@import "./../node_modules/@aurodesignsystem/design-tokens/dist/alaska/SCSSVariables--alaska";

:host {
  --ds-auro-button-border-color: var(--ds-advanced-color-button-primary-border, #{$ds-advanced-color-button-primary-border});
  --ds-auro-button-border-inset-color: var(--ds-advanced-color-state-focused-inverse, #{$ds-advanced-color-state-focused-inverse});
  --ds-auro-button-container-color: var(--ds-advanced-color-button-primary-background, #{$ds-advanced-color-button-primary-background});
  --ds-auro-button-container-image: var(--ds-advanced-color-button-primary-background, #{$ds-advanced-color-button-primary-background});
  --ds-auro-button-loader-color: var(--ds-advanced-color-button-primary-text, #{$ds-advanced-color-button-primary-text});
  --ds-auro-button-text-color: var(--ds-advanced-color-button-primary-text, #{$ds-advanced-color-button-primary-text});
  --ds-auro-button-tap-color: transparent;
}
```
<!-- AURO-GENERATED-CONTENT:END -->
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/themeSupport.html) -->
  <!-- The below content is automatically added from ./../apiExamples/themeSupport.html -->
  <style>
    #restyledButton {
      --ds-auro-button-container-image: var(--ds-advanced-color-accents-accent1);
      --ds-auro-button-container-color: var(--ds-advanced-color-accents-accent1);
      --ds-auro-button-border-color: var(--ds-advanced-color-accents-accent2);
      --ds-auro-button-text-color: var(--ds-color-alert-warning-default);
    }
  </style>
  <auro-button shape="pill" id="restyledButton">
    Restyled Button
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/themeSupport.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/themeSupport.html -->

```html
<style>
  #restyledButton {
    --ds-auro-button-container-image: var(--ds-advanced-color-accents-accent1);
    --ds-auro-button-container-color: var(--ds-advanced-color-accents-accent1);
    --ds-auro-button-border-color: var(--ds-advanced-color-accents-accent2);
    --ds-auro-button-text-color: var(--ds-color-alert-warning-default);
  }
</style>
<auro-button shape="pill" id="restyledButton">
  Restyled Button
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
