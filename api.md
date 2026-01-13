<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-button

### Properties & Attributes

| Properties     | Attributes  | Modifiers | Type                                                | Default       | Description                                                                                                                                                                                                                                                                     |
| -------------- | ----------- | --------- | --------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance     | appearance  |           | string                                              | `default`     | Defines whether the button will be on lighter or darker backgrounds.                                                                                                                                                                                                            |
| autofocus      | autofocus   |           | boolean                                             | `false`       | This Boolean attribute lets you specify that the button should have input focus when the page loads, unless overridden by the user.                                                                                                                                             |
| disabled       | disabled    |           | boolean                                             | `false`       | If set to true, button will become disabled and not allow for interactions.                                                                                                                                                                                                     |
| fluid          | fluid       |           | boolean                                             | `false`       | Alters the shape of the button to be full width of its parent container.                                                                                                                                                                                                        |
| formAssociated |             | readonly  | boolean                                             |               | Enables form association for this element.                                                                                                                                                                                                                                      |
| layout         | layout      |           | string                                              | `{'default'}` | Override layout since it isn't used in this component.                                                                                                                                                                                                                          |
| loading        | loading     |           | boolean                                             | `false`       | If set to true button text will be replaced with `auro-loader` and become disabled.                                                                                                                                                                                             |
| loadingText    | loadingText |           | string                                              |               | DEPRECATED - Use `slot="ariaLabel.loading"` instead.                                                                                                                                                                                                                            |
| onDark         | ondark      |           | boolean                                             | `false`       | DEPRECATED - use `appearance` property                                                                                                                                                                                                                                          |
| shape          | shape       |           | string                                              | `rounded`     | Defines the shape of the button.                                                                                                                                                                                                                                                |
| size           | size        |           | string                                              | `md`          | Defines the size of the button.                                                                                                                                                                                                                                                 |
| static         | static      |           | boolean                                             | `false`       | If true, the button will be static and not respond to user interactions.                                                                                                                                                                                                        |
| tabindex       | tabindex    |           | string                                              |               | Populates `tabindex` to define the focusable sequence in keyboard navigation.<br>Must be used with "." to ensure the host element does not retain a reference to the `tabindex` attribute.<br>Example: `<auro-button .tabindex="${this.disabled ? '-1' : '0'}"></auro-button>`. |
| tIndex         | tIndex      |           | string                                              |               | Populates `tabindex` to define the focusable sequence in keyboard navigation.                                                                                                                                                                                                   |
| title          | title       |           | string                                              |               | Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element.                                                                                                                                                              |
| type           | type        |           | `submit`, `reset`, `button`                         |               | The type of button. Matches HTML5 Button Spec.                                                                                                                                                                                                                                  |
| value          | value       |           | string                                              |               | Defines the value associated with the button which is submitted with the form data.                                                                                                                                                                                             |
| variant        | variant     |           | `primary`, `secondary`, `tertiary`, `ghost`, `flat` | `primary`     | Sets the button variant.                                                                                                                                                                                                                                                        |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |
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
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/inverseAppearance.html) -->
  <!-- The below content is automatically added from ./../apiExamples/inverseAppearance.html -->
  <auro-button appearance="inverse">Primary</auro-button>
  <auro-button variant="secondary" appearance="inverse">Secondary</auro-button>
  <auro-button variant="tertiary" appearance="inverse">Tertiary</auro-button>
  <auro-button variant="ghost" appearance="inverse">Ghost</auro-button>
  <br /><br/>
  <auro-button appearance="inverse" shape="circle" size="xl"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button appearance="inverse" shape="circle" size="lg" variant="secondary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button appearance="inverse" shape="circle" size="md" variant="tertiary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button appearance="inverse" shape="circle" size="sm" variant="ghost"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button appearance="inverse" shape="circle" size="xs" variant="flat"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <br /><br/>
  <auro-button appearance="inverse" shape="square" size="xl"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button appearance="inverse" shape="square" size="lg" variant="secondary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button appearance="inverse" shape="square" size="md" variant="tertiary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button appearance="inverse" shape="square" size="sm" variant="ghost"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button appearance="inverse" shape="square" size="xs" variant="flat"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/inverseAppearance.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/inverseAppearance.html -->

```html
<auro-button appearance="inverse">Primary</auro-button>
<auro-button variant="secondary" appearance="inverse">Secondary</auro-button>
<auro-button variant="tertiary" appearance="inverse">Tertiary</auro-button>
<auro-button variant="ghost" appearance="inverse">Ghost</auro-button>
<br /><br/>
<auro-button appearance="inverse" shape="circle" size="xl"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button appearance="inverse" shape="circle" size="lg" variant="secondary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button appearance="inverse" shape="circle" size="md" variant="tertiary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button appearance="inverse" shape="circle" size="sm" variant="ghost"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button appearance="inverse" shape="circle" size="xs" variant="flat"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<br /><br/>
<auro-button appearance="inverse" shape="square" size="xl"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button appearance="inverse" shape="square" size="lg" variant="secondary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button appearance="inverse" shape="square" size="md" variant="tertiary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button appearance="inverse" shape="square" size="sm" variant="ghost"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button appearance="inverse" shape="square" size="xs" variant="flat"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
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
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabledInverseAppearance.html) -->
  <!-- The below content is automatically added from ./../apiExamples/disabledInverseAppearance.html -->
  <auro-button disabled appearance="inverse">Primary</auro-button>
  <auro-button variant="secondary" disabled appearance="inverse">Secondary</auro-button>
  <auro-button variant="tertiary" disabled appearance="inverse">Tertiary</auro-button>
  <auro-button variant="ghost" disabled appearance="inverse">Ghost</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabledInverseAppearance.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disabledInverseAppearance.html -->

```html
<auro-button disabled appearance="inverse">Primary</auro-button>
<auro-button variant="secondary" disabled appearance="inverse">Secondary</auro-button>
<auro-button variant="tertiary" disabled appearance="inverse">Tertiary</auro-button>
<auro-button variant="ghost" disabled appearance="inverse">Ghost</auro-button>
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
    <auro-icon category="interface" name="home-filled" slot="icon" customColor></auro-icon>
    Static Pill with Icon
  </auro-button>
  <auro-button static shape="circle">
    <auro-icon category="interface" name="home-filled" customColor></auro-icon>
  </auro-button>
  <auro-button static shape="square">
    <auro-icon category="interface" name="home-filled" customColor></auro-icon>
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
  <auro-icon category="interface" name="home-filled" slot="icon" customColor></auro-icon>
  Static Pill with Icon
</auro-button>
<auro-button static shape="circle">
  <auro-icon category="interface" name="home-filled" customColor></auro-icon>
</auro-button>
<auro-button static shape="square">
  <auro-icon category="interface" name="home-filled" customColor></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/staticInverseAppearance.html) -->
  <!-- The below content is automatically added from ./../apiExamples/staticInverseAppearance.html -->
  <auro-button static appearance="inverse">Static Primary Button</auro-button>
  <auro-button static variant="secondary" appearance="inverse">Static Secondary Button</auro-button>
  <auro-button static variant="tertiary" appearance="inverse">Static Tertiary Button</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/staticInverseAppearance.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/staticInverseAppearance.html -->

```html
<auro-button static appearance="inverse">Static Primary Button</auro-button>
<auro-button static variant="secondary" appearance="inverse">Static Secondary Button</auro-button>
<auro-button static variant="tertiary" appearance="inverse">Static Tertiary Button</auro-button>
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
  <auro-button>
    <span slot="ariaLabel">wifi</span>
    <span>Activate WiFi</span>
    <auro-icon customColor category="in-flight" name="wifi"></auro-icon>
  </auro-button>
  <auro-button variant="secondary">
    <span slot="ariaLabel">arrow-left</span>
    <span>Previous action</span>
    <auro-icon customcolor category="interface" name="arrow-left" ></auro-icon>
  </auro-button>
  <auro-button variant="tertiary">
    <span slot="ariaLabel">heart-filled</span>
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
<auro-button>
  <span slot="ariaLabel">wifi</span>
  <span>Activate WiFi</span>
  <auro-icon customColor category="in-flight" name="wifi"></auro-icon>
</auro-button>
<auro-button variant="secondary">
  <span slot="ariaLabel">arrow-left</span>
  <span>Previous action</span>
  <auro-icon customcolor category="interface" name="arrow-left" ></auro-icon>
</auro-button>
<auro-button variant="tertiary">
  <span slot="ariaLabel">heart-filled</span>
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
  <auro-button shape="circle" size="xl">
    <span slot="ariaLabel">home-filled</span>
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <auro-button shape="circle" size="lg">
    <span slot="ariaLabel">home-filled</span>
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <auro-button shape="circle" size="md">
    <span slot="ariaLabel">home-filled</span>
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <auro-button shape="circle" size="sm">
    <span slot="ariaLabel">home-filled</span>
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <auro-button shape="circle" size="xs">
    <span slot="ariaLabel">home-filled</span>
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-circle.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/shape-circle.html -->

```html
<auro-button shape="circle" size="xl">
  <span slot="ariaLabel">home-filled</span>
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button shape="circle" size="lg">
  <span slot="ariaLabel">home-filled</span>
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button shape="circle" size="md">
  <span slot="ariaLabel">home-filled</span>
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button shape="circle" size="sm">
  <span slot="ariaLabel">home-filled</span>
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button shape="circle" size="xs">
  <span slot="ariaLabel">home-filled</span>
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Square

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-square.html) -->
  <!-- The below content is automatically added from ./../apiExamples/shape-square.html -->
  <auro-button shape="square" size="xl">
    <span slot="ariaLabel">home-filled</span>
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <auro-button shape="square" size="lg">
    <span slot="ariaLabel">home-filled</span>
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <auro-button shape="square" size="md">
    <span slot="ariaLabel">home-filled</span>
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <auro-button shape="square" size="sm">
    <span slot="ariaLabel">home-filled</span>
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <auro-button shape="square" size="xs">
    <span slot="ariaLabel">home-filled</span>
    <auro-icon customColor category="interface" name="home-filled"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-square.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/shape-square.html -->

```html
<auro-button shape="square" size="xl">
  <span slot="ariaLabel">home-filled</span>
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button shape="square" size="lg">
  <span slot="ariaLabel">home-filled</span>
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button shape="square" size="md">
  <span slot="ariaLabel">home-filled</span>
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button shape="square" size="sm">
  <span slot="ariaLabel">home-filled</span>
  <auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button shape="square" size="xs">
  <span slot="ariaLabel">home-filled</span>
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

## Toggle Text

The `rounded` attribute supports the ability to hide/show the text of the `auro-button`. This can be done by changing the value of the `iconOnly` attribute. In this example, the text is toggled via `mouseover` and `mouseout` events. The `focusin` and `focusout` events simulate toggling text for keyboard users.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/toggledText.html) -->
  <!-- The below content is automatically added from ./../apiExamples/toggledText.html -->
  <auro-button shape="circle" id="toggledTextElem">
    <span slot="ariaLabel">arrow-up</span>
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
<auro-button shape="circle" id="toggledTextElem">
  <span slot="ariaLabel">arrow-up</span>
  <span>Text is now shown!</span>
  <auro-icon customColor category="interface" name="arrow-up"></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/toggledText.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/toggledText.js -->

```js
export function toggledTextExample() {
  const toggledTextElem = document.querySelector("#toggledTextElem");

  // The mouseover and mouseout events are to simulate toggling text for mouse users
  toggledTextElem.addEventListener("mouseover", () => {
    toggledTextElem.shape = "pill";
  });

  toggledTextElem.addEventListener("mouseout", () => {
    toggledTextElem.shape = "circle";
  });

  // The focusin and focusout events are to simulate toggling text for keyboard users
  toggledTextElem.addEventListener("focusin", () => {
    toggledTextElem.shape = "pill";
  });

  toggledTextElem.addEventListener("focusout", () => {
    toggledTextElem.shape = "circle";
  });
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Right Aligned

This example shows a `rounded` `auro-button` that is right-aligned, demonstrating how the button starts from the right and grows/shrinks from right to left when using the `toggleText` attribute in conjuction with the `mouseover` and `mouseout` events. The `focusin` and `focusout` events simulate toggling text for keyboard users.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/roundedRightAlign.html) -->
  <!-- The below content is automatically added from ./../apiExamples/roundedRightAlign.html -->
  <div style="display: flex; justify-content: flex-end; align-items: center; width: 100%">
    <auro-button shape="circle" id="rightAlignElem">
      <span slot="ariaLabel">in-flight</span>
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
  <auro-button shape="circle" id="rightAlignElem">
    <span slot="ariaLabel">in-flight</span>
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
  const rightAlignElem = document.querySelector("#rightAlignElem");

  // The mouseover and mouseout events are to simulate toggling text for mouse users
  rightAlignElem.addEventListener("mouseover", () => {
    rightAlignElem.shape = "pill";
  });

  rightAlignElem.addEventListener("mouseout", () => {
    rightAlignElem.shape = "circle";
  });

  // The focusin and focusout events are to simulate toggling text for keyboard users
  rightAlignElem.addEventListener("focusin", () => {
    rightAlignElem.shape = "pill";
  });

  rightAlignElem.addEventListener("focusout", () => {
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
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/loadingInverseAppearance.html) -->
  <!-- The below content is automatically added from ./../apiExamples/loadingInverseAppearance.html -->
  <auro-button appearance="inverse" loading>Primary</auro-button>
  <auro-button variant="secondary" appearance="inverse" loading>Secondary</auro-button>
  <auro-button variant="tertiary" appearance="inverse" loading>Tertiary</auro-button>
  <auro-button variant="ghost" appearance="inverse" loading>Ghost</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/loadingInverseAppearance.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/loadingInverseAppearance.html -->

```html
<auro-button appearance="inverse" loading>Primary</auro-button>
<auro-button variant="secondary" appearance="inverse" loading>Secondary</auro-button>
<auro-button variant="tertiary" appearance="inverse" loading>Tertiary</auro-button>
<auro-button variant="ghost" appearance="inverse" loading>Ghost</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## ARIA Support

#### Aria Label

Accessible text may be provided through the `ariaLabel` or `ariaLabel.loading` slots.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/ariaLabel.html) -->
  <!-- The below content is automatically added from ./../apiExamples/ariaLabel.html -->
  <auro-button>
    <span slot="ariaLabel">My Button Label</span>
    Auro Button
  </auro-button>
  <auro-button loading>
    <span slot="ariaLabel.loading">My Loading Button Label</span>
    Auro Button
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/ariaLabel.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/ariaLabel.html -->

```html
<auro-button>
  <span slot="ariaLabel">My Button Label</span>
  Auro Button
</auro-button>
<auro-button loading>
  <span slot="ariaLabel.loading">My Loading Button Label</span>
  Auro Button
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Aria Labelledby

The component supports both the `aria-labelledby` attribute for accessibility.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/ariaLabelledby.html) -->
  <!-- The below content is automatically added from ./../apiExamples/ariaLabelledby.html -->
  <auro-button aria-labelledby="button-label">
    Auro Button
    <label id="button-label" class="util_displayHiddenVisually">My Button Label</label>
  </auro-button>
  <style>
    .util_displayHiddenVisually {
      clip: rect(1px, 1px, 1px, 1px);
      width: 1px;
      height: 1px;
      padding: 0;
      border: 0;
    }
  </style>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/ariaLabelledby.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/ariaLabelledby.html -->

```html
<auro-button aria-labelledby="button-label">
  Auro Button
  <label id="button-label" class="util_displayHiddenVisually">My Button Label</label>
</auro-button>
<style>
  .util_displayHiddenVisually {
    clip: rect(1px, 1px, 1px, 1px);
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
  }
</style>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

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
