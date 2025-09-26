<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-button

## Properties

| Property      | Attribute     | Type                                             | Default   | Description                                      |
|---------------|---------------|--------------------------------------------------|-----------|--------------------------------------------------|
| [autofocus](#autofocus)   | `autofocus`   | `boolean`                                        | false     | This Boolean attribute lets you specify that the button should have input focus when the page loads, unless overridden by the user. |
| [disabled](#disabled)    | `disabled`    | `boolean`                                        | false     | If set to true, button will become disabled and not allow for interactions. |
| [fluid](#fluid)       | `fluid`       | `boolean`                                        | false     | Alters the shape of the button to be full width of its parent container. |
| [loading](#loading)     | `loading`     | `boolean`                                        | false     | If set to true button text will be replaced with `auro-loader` and become disabled. |
| [loadingText](#loadingText) | `loadingText` | `string`                                         |           | Sets custom loading text for the `aria-label` on a button in loading state. If not set, the default value of "Loading..." will be used. |
| [onDark](#onDark)      |               | `boolean`                                        | false     | Indicates if the button is rendered in dark mode. |
| [shape](#shape)       |               | `'default', 'rounded', 'pill', 'circle', 'square'` | "rounded" | Defines the shape of the button.                 |
| [size](#size)        |               | `'xs', 'sm', 'md', 'lg', 'xl'`                   | "md"      | Defines the size of the button.                  |
| [static](#static)      | `static`      | `boolean`                                        | false     | If true, the button will be static and not respond to user interactions. |
| [tIndex](#tIndex)      | `tIndex`      | `string`                                         |           | Populates `tabindex` to define the focusable sequence in keyboard navigation. |
| [tabindex](#tabindex)    | `tabindex`    | `string`                                         |           | Populates `tabindex` to define the focusable sequence in keyboard navigation.<br />Must be used with "." to ensure the host element does not retain a reference to the `tabindex` attribute.<br />Example: `<auro-button .tabindex="${this.disabled ? '-1' : '0'}"></auro-button>`. |
| [title](#title)       | `title`       | `string`                                         |           | Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element. |
| [type](#type)        | `type`        | `'submit', 'reset', 'button'`                    |           | The type of button. Matches HTML5 Button Spec.   |
| [value](#value)       | `value`       | `string`                                         |           | Defines the value associated with the button which is submitted with the form data. |
| [variant](#variant)     | `variant`     | `'primary', 'secondary', 'tertiary', 'ghost', 'flat'` | "primary" | Sets the button variant.                         |
<!-- AURO-GENERATED-CONTENT:END -->

# API Examples

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-button>Primary</auro-button>
  <auro-button variant="secondary">Secondary</auro-button>
  <auro-button variant="tertiary">Tertiary</auro-button>
  <auro-button variant="ghost">Ghost</auro-button>
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
<auro-button variant="ghost">Ghost</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/onDark.html) -->
  <!-- The below content is automatically added from ./../apiExamples/onDark.html -->
  <auro-button ondark>Primary</auro-button>
  <auro-button variant="secondary" ondark>Secondary</auro-button>
  <auro-button variant="tertiary" ondark>Tertiary</auro-button>
  <auro-button variant="ghost" ondark>Ghost</auro-button>
  <br /><br/>
  <auro-button ondark shape="circle" size="xl"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button ondark shape="circle" size="lg" variant="secondary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button ondark shape="circle" size="md" variant="tertiary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button ondark shape="circle" size="sm" variant="ghost"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button ondark shape="circle" size="xs" variant="flat"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <br /><br/>
  <auro-button ondark shape="square" size="xl"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button ondark shape="square" size="lg" variant="secondary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button ondark shape="square" size="md" variant="tertiary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button ondark shape="square" size="sm" variant="ghost"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button ondark shape="square" size="xs" variant="flat"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
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
<auro-button variant="ghost" ondark>Ghost</auro-button>
<br /><br/>
<auro-button ondark shape="circle" size="xl"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button ondark shape="circle" size="lg" variant="secondary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button ondark shape="circle" size="md" variant="tertiary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button ondark shape="circle" size="sm" variant="ghost"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button ondark shape="circle" size="xs" variant="flat"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<br /><br/>
<auro-button ondark shape="square" size="xl"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button ondark shape="square" size="lg" variant="secondary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button ondark shape="square" size="md" variant="tertiary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button ondark shape="square" size="sm" variant="ghost"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button ondark shape="square" size="xs" variant="flat"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
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
  <auro-button variant="ghost" disabled>Ghost</auro-button>
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
<auro-button variant="ghost" disabled>Ghost</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabledOnDark.html) -->
  <!-- The below content is automatically added from ./../apiExamples/disabledOnDark.html -->
  <auro-button disabled ondark>Primary</auro-button>
  <auro-button variant="secondary" disabled ondark>Secondary</auro-button>
  <auro-button variant="tertiary" disabled ondark>Tertiary</auro-button>
  <auro-button variant="ghost" disabled ondark>Ghost</auro-button>
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
<auro-button variant="ghost" disabled ondark>Ghost</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Static

The `static` attribute creates a button with no interactivity. When applied, the button becomes non-clickable and serves purely as a visual element. This is useful for displaying button-styled elements that need to appear interactive but should not respond to user input, such as buttons within clickable cards or slides.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/static.html) -->
  <!-- The below content is automatically added from ./../apiExamples/static.html -->
  <auro-button static>Static Primary Button</auro-button>
  <auro-button static variant="secondary">Static Secondary Button</auro-button>
  <auro-button static variant="tertiary">Static Tertiary Button</auro-button>
  <br><br>
  <auro-button static fluid>Static Fluid Button</auro-button>
  <br><br>
  <auro-button static size="xs">XS Static</auro-button>
  <auro-button static size="sm">SM Static</auro-button>
  <auro-button static size="md">MD Static</auro-button>
  <auro-button static size="lg">LG Static</auro-button>
  <auro-button static size="xl">XL Static</auro-button>
  <br><br>
  <auro-button static shape="pill">
    <auro-icon name="home" slot="icon" customColor></auro-icon>
    Static Pill with Icon
  </auro-button>
  <auro-button static shape="circle">
    <auro-icon name="home" customColor></auro-icon>
  </auro-button>
  <auro-button static shape="square">
    <auro-icon name="home" customColor></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/static.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/static.html -->

```html
<auro-button static>Static Primary Button</auro-button>
<auro-button static variant="secondary">Static Secondary Button</auro-button>
<auro-button static variant="tertiary">Static Tertiary Button</auro-button>
<br><br>
<auro-button static fluid>Static Fluid Button</auro-button>
<br><br>
<auro-button static size="xs">XS Static</auro-button>
<auro-button static size="sm">SM Static</auro-button>
<auro-button static size="md">MD Static</auro-button>
<auro-button static size="lg">LG Static</auro-button>
<auro-button static size="xl">XL Static</auro-button>
<br><br>
<auro-button static shape="pill">
  <auro-icon name="home" slot="icon" customColor></auro-icon>
  Static Pill with Icon
</auro-button>
<auro-button static shape="circle">
  <auro-icon name="home" customColor></auro-icon>
</auro-button>
<auro-button static shape="square">
  <auro-icon name="home" customColor></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/staticOnDark.html) -->
  <!-- The below content is automatically added from ./../apiExamples/staticOnDark.html -->
  <auro-button static onDark>Static Primary Button</auro-button>
  <auro-button static variant="secondary" onDark>Static Secondary Button</auro-button>
  <auro-button static variant="tertiary" onDark>Static Tertiary Button</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/staticOnDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/staticOnDark.html -->

```html
<auro-button static onDark>Static Primary Button</auro-button>
<auro-button static variant="secondary" onDark>Static Secondary Button</auro-button>
<auro-button static variant="tertiary" onDark>Static Tertiary Button</auro-button>
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
  <auro-button arialabel="wifi">
    <span>Activate WiFi</span>
    <auro-icon customColor category="in-flight" name="wifi"></auro-icon>
  </auro-button>
  <auro-button variant="secondary" arialabel="arrow-left">
    <span>Previous action</span>
    <auro-icon customcolor category="interface" name="arrow-left" ></auro-icon>
  </auro-button>
  <auro-button variant="tertiary" arialabel="heart-filled">
    <span>Love this ...</span>
    <auro-icon customcolor category="interface" name="heart-filled" ></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/icon.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/icon.html -->

```html
<auro-button arialabel="wifi">
  <span>Activate WiFi</span>
  <auro-icon customColor category="in-flight" name="wifi"></auro-icon>
</auro-button>
<auro-button variant="secondary" arialabel="arrow-left">
  <span>Previous action</span>
  <auro-icon customcolor category="interface" name="arrow-left" ></auro-icon>
</auro-button>
<auro-button variant="tertiary" arialabel="heart-filled">
  <span>Love this ...</span>
  <auro-icon customcolor category="interface" name="heart-filled" ></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Shape <a name="shape"></a>
default - `rounded`

#### Circle

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-circle.html) -->
  <!-- The below content is automatically added from ./../apiExamples/shape-circle.html -->
  <auro-button arialabel="home-filled" shape="circle" size="xl">
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <auro-button arialabel="home-filled" shape="circle" size="lg">
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <auro-button arialabel="home-filled" shape="circle" size="md">
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <auro-button arialabel="home-filled" shape="circle" size="sm">
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <auro-button arialabel="home-filled" shape="circle" size="xs">
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-circle.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/shape-circle.html -->

```html
<auro-button arialabel="home-filled" shape="circle" size="xl">
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button arialabel="home-filled" shape="circle" size="lg">
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button arialabel="home-filled" shape="circle" size="md">
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button arialabel="home-filled" shape="circle" size="sm">
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button arialabel="home-filled" shape="circle" size="xs">
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Square

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-square.html) -->
  <!-- The below content is automatically added from ./../apiExamples/shape-square.html -->
  <auro-button arialabel="home-filled" shape="square" size="xl">
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <auro-button arialabel="home-filled" shape="square" size="lg">
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <auro-button arialabel="home-filled" shape="square" size="md">
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <auro-button arialabel="home-filled" shape="square" size="sm">
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <auro-button arialabel="home-filled" shape="square" size="xs">
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-square.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/shape-square.html -->

```html
<auro-button arialabel="home-filled" shape="square" size="xl">
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button arialabel="home-filled" shape="square" size="lg">
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button arialabel="home-filled" shape="square" size="md">
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button arialabel="home-filled" shape="square" size="sm">
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button arialabel="home-filled" shape="square" size="xs">
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Pill

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-pill.html) -->
  <!-- The below content is automatically added from ./../apiExamples/shape-pill.html -->
  <auro-button shape="pill" size="xl">Primary</auro-button>
  <auro-button shape="pill" size="lg">Primary</auro-button>
  <auro-button shape="pill" size="md">Primary</auro-button>
  <auro-button shape="pill" size="sm">Primary</auro-button>
  <auro-button shape="pill" size="xs">Primary</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-pill.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/shape-pill.html -->

```html
<auro-button shape="pill" size="xl">Primary</auro-button>
<auro-button shape="pill" size="lg">Primary</auro-button>
<auro-button shape="pill" size="md">Primary</auro-button>
<auro-button shape="pill" size="sm">Primary</auro-button>
<auro-button shape="pill" size="xs">Primary</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Toggle Text

The `rounded` attribute supports the ability to hide/show the text of the `auro-button`. This can be done by changing the value of the `iconOnly` attribute. In this example, the text is toggled via `mouseover` and `mouseout` events. The `focusin` and `focusout` events simulate toggling text for keyboard users.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/toggledText.html) -->
  <!-- The below content is automatically added from ./../apiExamples/toggledText.html -->
  <auro-button arialabel="arrow-up" shape="circle" id="toggledTextElem">
    <span>Text is now shown!</span>
    <auro-icon customColor category="interface" name="arrow-up"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/toggledText.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/toggledText.html -->

```html
<auro-button arialabel="arrow-up" shape="circle" id="toggledTextElem">
  <span>Text is now shown!</span>
  <auro-icon customColor category="interface" name="arrow-up"></auro-icon>
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
  <div style="display: flex; justify-content: flex-end; align-items: center; width: 100%">
    <auro-button arialabel="in-flight" shape="circle" id="rightAlignElem">
      <span>Text is now shown!</span>
      <auro-icon customColor category="interface" name="arrow-up"></auro-icon>
    </auro-button>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/roundedRightAlign.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/roundedRightAlign.html -->

```html
<div style="display: flex; justify-content: flex-end; align-items: center; width: 100%">
  <auro-button arialabel="in-flight" shape="circle" id="rightAlignElem">
    <span>Text is now shown!</span>
    <auro-icon customColor category="interface" name="arrow-up"></auro-icon>
  </auro-button>
</div>
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
The size of the button can be set in t-shirt sizes from `xs` to `xl`

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/size.html) -->
  <!-- The below content is automatically added from ./../apiExamples/size.html -->
  <auro-button size="xs">Extra Small</auro-button>
  <auro-button size="sm">Small</auro-button>
  <auro-button size="md">Medium</auro-button>
  <auro-button size="lg">Large</auro-button>
  <auro-button size="xl">Extra Large</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/size.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/size.html -->

```html
<auro-button size="xs">Extra Small</auro-button>
<auro-button size="sm">Small</auro-button>
<auro-button size="md">Medium</auro-button>
<auro-button size="lg">Large</auro-button>
<auro-button size="xl">Extra Large</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Variant <a name="variant"></a>
Auro button can use several different variants, including `primary`, `secondary`, `tertiary`, `ghost`, and `flat`.

The flat variant should only be used for interface elements that should only have a focus style such as close buttons on dialogs and clear buttons on form elements.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant.html) -->
  <!-- The below content is automatically added from ./../apiExamples/variant.html -->
  <auro-button variant="primary">Primary</auro-button>
  <auro-button variant="secondary">Secondary</auro-button>
  <auro-button variant="tertiary">Tertiary</auro-button>
  <auro-button variant="ghost">Ghost</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/variant.html -->

```html
<auro-button variant="primary">Primary</auro-button>
<auro-button variant="secondary">Secondary</auro-button>
<auro-button variant="tertiary">Tertiary</auro-button>
<auro-button variant="ghost">Ghost</auro-button>
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
  <auro-button variant="ghost" fluid>Ghost</auro-button>
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
<auro-button variant="ghost" fluid>Ghost</auro-button>
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
  <auro-button variant="ghost" loading>Ghost</auro-button>
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
<auro-button variant="ghost" loading>Ghost</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/loadingOnDark.html) -->
  <!-- The below content is automatically added from ./../apiExamples/loadingOnDark.html -->
  <auro-button ondark loading>Primary</auro-button>
  <auro-button variant="secondary" ondark loading>Secondary</auro-button>
  <auro-button variant="tertiary" ondark loading>Tertiary</auro-button>
  <auro-button variant="ghost" ondark loading>Ghost</auro-button>
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
<auro-button variant="ghost" ondark loading>Ghost</auro-button>
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

## ARIA Attributes

Any ARIA attributes can be applied directly to the element and will be handled internally:

`<auro-button aria-label="My Button Label">Auro Button</auro-button>`

## Tab Index

For `tabindex`, use `tIndex` instead to avoid duplicated focus interaction.

## Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;

:host {
  --ds-auro-button-border-color: var(--ds-advanced-color-button-primary-border, #{v.$ds-advanced-color-button-primary-border});
  --ds-auro-button-border-inset-color: var(--ds-advanced-color-state-focused-inverse, #{v.$ds-advanced-color-state-focused-inverse});
  --ds-auro-button-container-color: var(--ds-advanced-color-button-primary-background, #{v.$ds-advanced-color-button-primary-background});
  --ds-auro-button-container-image: var(--ds-advanced-color-button-primary-background, #{v.$ds-advanced-color-button-primary-background});
  --ds-auro-button-loader-color: var(--ds-advanced-color-button-primary-text, #{v.$ds-advanced-color-button-primary-text});
  --ds-auro-button-text-color: var(--ds-advanced-color-button-primary-text, #{v.$ds-advanced-color-button-primary-text});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
