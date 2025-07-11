<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Button

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
`<auro-button>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose being a clickable element to trigger a specific action.
<!-- AURO-GENERATED-CONTENT:END -->

## Auro-Button use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
The auro-button element should be used in situations where users may:

* submit a form
* begin a new task
* trigger a new UI element to appear to the page
* specificy a new or next step in a process
<!-- AURO-GENERATED-CONTENT:END -->

## Buttons are not Hyperlinks

In cases were the action of the button would not fit the criteria above, it is most likely a Hyperlink. In that situation it is recommended that the [auro-hyperlink](https://www.alaskaair.com/components/auro/hyperlink) element be used.

## Default Examples

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
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/iconButtons.html) -->
  <!-- The below content is automatically added from ./../apiExamples/iconButtons.html -->
  <auro-button shape="circle" size="xl"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button shape="circle" size="lg" variant="secondary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button shape="circle" size="md" variant="tertiary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button shape="circle" size="sm" variant="ghost"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button shape="circle" size="xs" variant="flat"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <br /><br/>
  <auro-button shape="square" size="xl"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button shape="square" size="lg" variant="secondary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button shape="square" size="md" variant="tertiary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button shape="square" size="sm" variant="ghost"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button shape="square" size="xs" variant="flat"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/iconButtons.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/iconButtons.html -->

```html
<auro-button shape="circle" size="xl"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button shape="circle" size="lg" variant="secondary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button shape="circle" size="md" variant="tertiary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button shape="circle" size="sm" variant="ghost"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button shape="circle" size="xs" variant="flat"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<br /><br/>
<auro-button shape="square" size="xl"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button shape="square" size="lg" variant="secondary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button shape="square" size="md" variant="tertiary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button shape="square" size="sm" variant="ghost"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button shape="square" size="xs" variant="flat"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## On Dark

These examples illustrate the core button types and a `disabled` state on dark backgrounds using the `onDark` attribute.

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
  <auro-button shape="square" size="xl"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button shape="square" size="lg" variant="secondary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button shape="square" size="md" variant="tertiary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button shape="square" size="sm" variant="ghost"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
  <auro-button shape="square" size="xs" variant="flat"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
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
<auro-button shape="square" size="xl"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button shape="square" size="lg" variant="secondary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button shape="square" size="md" variant="tertiary"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button shape="square" size="sm" variant="ghost"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
<auro-button shape="square" size="xs" variant="flat"><auro-icon customColor category="interface" name="heart-filled"></auro-icon></auro-button>
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

## Icon Support

Adding icons to the auro-button component is as easy as nesting any other HTML. The [auro-icon component](https://www.alaskaair.com/components/auro/icon) has access to all the icons listed in the [Auro Icons library](https://www.alaskaair.com/icons/usage) for quick and easy use.

Be sure to use the `customColor` attribute on the auro-icon component to allow colors set in your parent element to pass through to the icon.

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

## Shape <a name="shape"></a>
The button comes with several different shapes available, `pill`, `rounded`, `circle`, and `square`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape.html) -->
  <!-- The below content is automatically added from ./../apiExamples/shape.html -->
  <auro-button shape="rounded">Rounded Button</auro-button>
  <auro-button shape="pill">Pill Button</auro-button>
  <auro-button shape="circle">
    <auro-icon customcolor category="interface" name="account-filled" ondark="true"></auro-icon>
  </auro-button>
  <auro-button shape="square">
    <auro-icon customcolor category="interface" name="account-filled" ondark="true"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/shape.html -->

```html
<auro-button shape="rounded">Rounded Button</auro-button>
<auro-button shape="pill">Pill Button</auro-button>
<auro-button shape="circle">
  <auro-icon customcolor category="interface" name="account-filled" ondark="true"></auro-icon>
</auro-button>
<auro-button shape="square">
  <auro-icon customcolor category="interface" name="account-filled" ondark="true"></auro-icon>
</auro-button>
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

## Pass a Function to Button

These examples illustrate a common use case where a user will want to pass a function into a button to support a click event. See the code examples for how this is achieved.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/passFunction.html) -->
  <!-- The below content is automatically added from ./../apiExamples/passFunction.html -->
  <auro-button onclick="alert('YOU CLICKED ME!');">Primary</auro-button>
  <auro-button disabled onclick="alert('YOU CLICKED ME!');">Primary</auro-button>
  <auro-button loading onclick="alert('YOU CLICKED ME!');">Primary</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/passFunction.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/passFunction.html -->

```html
<auro-button onclick="alert('YOU CLICKED ME!');">Primary</auro-button>
<auro-button disabled onclick="alert('YOU CLICKED ME!');">Primary</auro-button>
<auro-button loading onclick="alert('YOU CLICKED ME!');">Primary</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Do's and don'ts

Don't combine `disabled` and `loading` attributes on any single instance of `auro-button`. An `auro-button` with `loading` *is* affectively a disabled instance. There is no need for both.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/doAndDont.html) -->
  <!-- The below content is automatically added from ./../apiExamples/doAndDont.html -->
  <auro-alert type="error" noIcon>
    <auro-button loading disabled>Primary</auro-button>
  </auro-alert>
  <auro-alert type="success" noIcon style="padding-top: 5px;">
    <auro-button loading>Primary</auro-button>
  </auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/doAndDont.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/doAndDont.html -->

```html
<auro-alert type="error" noIcon>
  <auro-button loading disabled>Primary</auro-button>
</auro-alert>
<auro-alert type="success" noIcon style="padding-top: 5px;">
  <auro-button loading>Primary</auro-button>
</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-button` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroButton.register(name)` method and pass in a unique name.

```js
import { AuroButton } from './src/auro-button.js';

AuroButton.register('custom-button');
```

This will create a new custom element that you can use in your HTML that will function identically to the `<auro-button>` element.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../apiExamples/custom.html -->
  <custom-button>Primary</custom-button>
  <custom-button variant="secondary">Secondary</custom-button>
  <custom-button variant="tertiary">Tertiary</custom-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/custom.html -->

```html
<custom-button>Primary</custom-button>
<custom-button variant="secondary">Secondary</custom-button>
<custom-button variant="tertiary">Tertiary</custom-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
