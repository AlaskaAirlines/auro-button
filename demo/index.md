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

## Default Example

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-button>Primary</auro-button>
  <auro-button variant="secondary">Secondary</auro-button>
  <auro-button variant="tertiary">Tertiary</auro-button>
  <auro-button variant="flat">Tertiary</auro-button>
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
<auro-button variant="flat">Tertiary</auro-button>
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

## Icon Support

Adding icons to the auro-button component is as easy as nesting any other HTML. The [auro-icon component](https://www.alaskaair.com/components/auro/icon) has access to all the icons listed in the [Auro Icons library](https://www.alaskaair.com/icons/usage) for quick and easy use.

Be sure to use the `customColor` attribute on the auro-icon component to allow colors set in your parent element to pass through to the icon.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/icon.html) -->
  <!-- The below content is automatically added from ./../apiExamples/icon.html -->
  <auro-button arialabel="wifi">
    Activate WiFi
    <auro-icon customColor category="in-flight" name="wifi" slot="icon"></auro-icon>
  </auro-button>
  <auro-button variant="secondary" arialabel="arrow-left">
    Previous action
    <auro-icon customcolor category="interface" name="arrow-left" slot="icon"></auro-icon>
  </auro-button>
  <auro-button variant="tertiary" arialabel="heart-filled">
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
<auro-button arialabel="wifi">
  Activate WiFi
  <auro-icon customColor category="in-flight" name="wifi" slot="icon"></auro-icon>
</auro-button>
<auro-button variant="secondary" arialabel="arrow-left">
  Previous action
  <auro-icon customcolor category="interface" name="arrow-left" slot="icon"></auro-icon>
</auro-button>
<auro-button variant="tertiary" arialabel="heart-filled">
  Love this ...
  <auro-icon customcolor category="interface" name="heart-filled" slot="icon"></auro-icon>
</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Shapes and Sizes

Adding icons to the auro-button component is as easy as nesting any other HTML. The [auro-icon component](https://www.alaskaair.com/components/auro/icon) has access to all the icons listed in the [Auro Icons library](https://www.alaskaair.com/icons/usage) for quick and easy use.

Be sure to use the `customColor` attribute on the auro-icon component to allow colors set in your parent element to pass through to the icon.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shapeSize.html) -->
  <!-- The below content is automatically added from ./../apiExamples/shapeSize.html -->
  <div>
    <h2>Rounded Buttons - Light Theme</h2>
  <table class="light-buttons">
    <thead>
      <tr>
        <th>Size</th>
        <th>Primary</th>
        <th>Secondary</th>
        <th>Tertiary</th>
        <th>Ghost</th>
      </tr>
    </thead>
    <tbody>
      <!-- Extra Small -->
      <tr>
        <td>XS</td>
        <td>
          <div>
            <auro-button size="xs" shape="rounded" variant="primary">Primary XS</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="rounded" variant="primary" disabled>Primary XS Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="rounded" variant="primary" loading="true">Primary XS Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="rounded" variant="secondary">Secondary XS</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="rounded" variant="secondary" disabled>Secondary XS Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="rounded" variant="secondary" loading="true">Secondary XS Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="rounded" variant="tertiary">Tertiary XS</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="rounded" variant="tertiary" disabled>Tertiary XS Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="rounded" variant="tertiary" loading="true">Tertiary XS Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="rounded" variant="ghost">Ghost XS</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="rounded" variant="ghost" disabled>Ghost XS Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="rounded" variant="ghost" loading="true">Ghost XS Loading</auro-button>
          </div>
        </td>
      </tr>
      <!-- Small -->
      <tr>
        <td>SM</td>
        <td>
          <div>
            <auro-button size="sm" shape="rounded" variant="primary">Primary SM</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="rounded" variant="primary" disabled>Primary SM Disabled</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="rounded" variant="primary" loading="true">Primary SM Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="rounded" variant="secondary">Secondary SM</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="rounded" variant="secondary" disabled>Secondary SM Disabled</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="rounded" variant="secondary" loading="true">Secondary SM Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="rounded" variant="tertiary">Tertiary SM</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="rounded" variant="tertiary" disabled>Tertiary SM Disabled</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="rounded" variant="tertiary" loading="true">Tertiary SM Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="rounded" variant="ghost">Ghost SM</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="rounded" variant="ghost" disabled>Ghost SM Disabled</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="rounded" variant="ghost" loading="true">Ghost SM Loading</auro-button>
          </div>
        </td>
      </tr>
      <!-- Medium -->
      <tr>
        <td>MD</td>
        <td>
          <div>
            <auro-button size="md" shape="rounded" variant="primary">Primary MD</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="rounded" variant="primary" disabled>Primary MD Disabled</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="rounded" variant="primary" loading="true">Primary MD Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="rounded" variant="secondary">Secondary MD</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="rounded" variant="secondary" disabled>Secondary MD Disabled</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="rounded" variant="secondary" loading="true">Secondary MD Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="rounded" variant="tertiary">Tertiary MD</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="rounded" variant="tertiary" disabled>Tertiary MD Disabled</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="rounded" variant="tertiary" loading="true">Tertiary MD Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="rounded" variant="ghost">Ghost MD</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="rounded" variant="ghost" disabled>Ghost MD Disabled</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="rounded" variant="ghost" loading="true">Ghost MD Loading</auro-button>
          </div>
        </td>
      </tr>
      <!-- Large -->
      <tr>
        <td>LG</td>
        <td>
          <div>
            <auro-button size="lg" shape="rounded" variant="primary">Primary LG</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="rounded" variant="primary" disabled>Primary LG Disabled</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="rounded" variant="primary" loading="true">Primary LG Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="rounded" variant="secondary">Secondary LG</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="rounded" variant="secondary" disabled>Secondary LG Disabled</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="rounded" variant="secondary" loading="true">Secondary LG Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="rounded" variant="tertiary">Tertiary LG</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="rounded" variant="tertiary" disabled>Tertiary LG Disabled</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="rounded" variant="tertiary" loading="true">Tertiary LG Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="rounded" variant="ghost">Ghost LG</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="rounded" variant="ghost" disabled>Ghost LG Disabled</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="rounded" variant="ghost" loading="true">Ghost LG Loading</auro-button>
          </div>
        </td>
      </tr>
      <!-- Extra Large -->
      <tr>
        <td>XL</td>
        <td>
          <div>
            <auro-button size="xl" shape="rounded" variant="primary">Primary XL</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="rounded" variant="primary" disabled>Primary XL Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="rounded" variant="primary" loading="true">Primary XL Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="rounded" variant="secondary">Secondary XL</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="rounded" variant="secondary" disabled>Secondary XL Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="rounded" variant="secondary" loading="true">Secondary XL Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="rounded" variant="tertiary">Tertiary XL</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="rounded" variant="tertiary" disabled>Tertiary XL Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="rounded" variant="tertiary" loading="true">Tertiary XL Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="rounded" variant="ghost">Ghost XL</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="rounded" variant="ghost" disabled>Ghost XL Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="rounded" variant="ghost" loading="true">Ghost XL Loading</auro-button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <h2>Pill Buttons - Light Theme</h2>
  <table class="light-buttons">
    <thead>
      <tr>
        <th>Size</th>
        <th>Primary</th>
        <th>Secondary</th>
        <th>Tertiary</th>
        <th>Ghost</th>
      </tr>
    </thead>
    <tbody>
      <!-- Extra Small -->
      <tr>
        <td>XS</td>
        <td>
          <div>
            <auro-button size="xs" shape="pill" variant="primary">Primary XS</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="pill" variant="primary" disabled>Primary XS Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="pill" variant="primary" loading="true">Primary XS Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="pill" variant="secondary">Secondary XS</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="pill" variant="secondary" disabled>Secondary XS Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="pill" variant="secondary" loading="true">Secondary XS Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="pill" variant="tertiary">Tertiary XS</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="pill" variant="tertiary" disabled>Tertiary XS Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="pill" variant="tertiary" loading="true">Tertiary XS Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="pill" variant="ghost">Ghost XS</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="pill" variant="ghost" disabled>Ghost XS Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="pill" variant="ghost" loading="true">Ghost XS Loading</auro-button>
          </div>
        </td>
      </tr>
      <!-- Small -->
      <tr>
        <td>SM</td>
        <td>
          <div>
            <auro-button size="sm" shape="pill" variant="primary">Primary SM</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="pill" variant="primary" disabled>Primary SM Disabled</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="pill" variant="primary" loading="true">Primary SM Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="pill" variant="secondary">Secondary SM</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="pill" variant="secondary" disabled>Secondary SM Disabled</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="pill" variant="secondary" loading="true">Secondary SM Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="pill" variant="tertiary">Tertiary SM</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="pill" variant="tertiary" disabled>Tertiary SM Disabled</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="pill" variant="tertiary" loading="true">Tertiary SM Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="pill" variant="ghost">Ghost SM</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="pill" variant="ghost" disabled>Ghost SM Disabled</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="pill" variant="ghost" loading="true">Ghost SM Loading</auro-button>
          </div>
        </td>
      </tr>
      <!-- Medium -->
      <tr>
        <td>MD</td>
        <td>
          <div>
            <auro-button size="md" shape="pill" variant="primary">Primary MD</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="pill" variant="primary" disabled>Primary MD Disabled</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="pill" variant="primary" loading="true">Primary MD Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="pill" variant="secondary">Secondary MD</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="pill" variant="secondary" disabled>Secondary MD Disabled</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="pill" variant="secondary" loading="true">Secondary MD Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="pill" variant="tertiary">Tertiary MD</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="pill" variant="tertiary" disabled>Tertiary MD Disabled</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="pill" variant="tertiary" loading="true">Tertiary MD Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="pill" variant="ghost">Ghost MD</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="pill" variant="ghost" disabled>Ghost MD Disabled</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="pill" variant="ghost" loading="true">Ghost MD Loading</auro-button>
          </div>
        </td>
      </tr>
      <!-- Large -->
      <tr>
        <td>LG</td>
        <td>
          <div>
            <auro-button size="lg" shape="pill" variant="primary">Primary LG</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="pill" variant="primary" disabled>Primary LG Disabled</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="pill" variant="primary" loading="true">Primary LG Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="pill" variant="secondary">Secondary LG</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="pill" variant="secondary" disabled>Secondary LG Disabled</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="pill" variant="secondary" loading="true">Secondary LG Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="pill" variant="tertiary">Tertiary LG</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="pill" variant="tertiary" disabled>Tertiary LG Disabled</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="pill" variant="tertiary" loading="true">Tertiary LG Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="pill" variant="ghost">Ghost LG</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="pill" variant="ghost" disabled>Ghost LG Disabled</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="pill" variant="ghost" loading="true">Ghost LG Loading</auro-button>
          </div>
        </td>
      </tr>
      <!-- Extra Large -->
      <tr>
        <td>XL</td>
        <td>
          <div>
            <auro-button size="xl" shape="pill" variant="primary">Primary XL</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="pill" variant="primary" disabled>Primary XL Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="pill" variant="primary" loading="true">Primary XL Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="pill" variant="secondary">Secondary XL</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="pill" variant="secondary" disabled>Secondary XL Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="pill" variant="secondary" loading="true">Secondary XL Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="pill" variant="tertiary">Tertiary XL</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="pill" variant="tertiary" disabled>Tertiary XL Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="pill" variant="tertiary" loading="true">Tertiary XL Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="pill" variant="ghost">Ghost XL</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="pill" variant="ghost" disabled>Ghost XL Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="pill" variant="ghost" loading="true">Ghost XL Loading</auro-button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <h2>Circle Buttons - Light Theme</h2>
  <table class="light-buttons">
    <thead>
      <tr>
        <th>Size</th>
        <th>Primary</th>
        <th>Secondary</th>
        <th>Tertiary</th>
        <th>Flat</th>
        <th>Ghost</th>
      </tr>
    </thead>
    <tbody>
      <!-- Extra Small -->
      <tr>
        <td>XS</td>
        <td>
          <div>
            <auro-button size="xs" shape="circle" variant="primary"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="circle" variant="primary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="circle" variant="secondary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="circle" variant="secondary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="circle" variant="tertiary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="circle" variant="tertiary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="circle" variant="flat"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="circle" variant="flat" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="circle" variant="ghost"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="circle" variant="ghost" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
      </tr>
      <!-- Small -->
      <tr>
        <td>SM</td>
        <td>
          <div>
            <auro-button size="sm" shape="circle" variant="primary"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="circle" variant="primary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="circle" variant="secondary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="circle" variant="secondary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="circle" variant="tertiary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="circle" variant="tertiary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="circle" variant="flat"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="circle" variant="flat" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="circle" variant="ghost"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="circle" variant="ghost" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
      </tr>
      <!-- Medium -->
      <tr>
        <td>MD</td>
        <td>
          <div>
            <auro-button size="md" shape="circle" variant="primary"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="md" shape="circle" variant="primary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="circle" variant="secondary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="md" shape="circle" variant="secondary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="circle" variant="tertiary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="md" shape="circle" variant="tertiary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="circle" variant="flat"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="md" shape="circle" variant="flat" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="circle" variant="ghost"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="md" shape="circle" variant="ghost" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
      </tr>
      <!-- Large -->
      <tr>
        <td>LG</td>
        <td>
          <div>
            <auro-button size="lg" shape="circle" variant="primary"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="circle" variant="primary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="circle" variant="secondary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="circle" variant="secondary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="circle" variant="tertiary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="circle" variant="tertiary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="circle" variant="flat"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="circle" variant="flat" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="circle" variant="ghost"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="circle" variant="ghost" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
      </tr>
      <!-- Extra Large -->
      <tr>
        <td>XL</td>
        <td>
          <div>
            <auro-button size="xl" shape="circle" variant="primary"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="circle" variant="primary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="circle" variant="secondary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="circle" variant="secondary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="circle" variant="tertiary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="circle" variant="tertiary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="circle" variant="flat"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="circle" variant="flat" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="circle" variant="ghost"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="circle" variant="ghost" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- Dark Theme Section -->
  <div style="background-color: #00274a; padding: 20px; margin-top: 30px;">
    <h2 style="color: white;">Rounded Buttons - Dark Theme</h2>
    <table class="dark-buttons">
      <thead>
        <tr>
          <th style="color: white;">Size</th>
          <th style="color: white;">Primary</th>
          <th style="color: white;">Secondary</th>
          <th style="color: white;">Tertiary</th>
          <th style="color: white;">Ghost</th>
        </tr>
      </thead>
      <tbody>
        <!-- Extra Small -->
        <tr>
          <td style="color: white;">XS</td>
          <td>
            <div>
              <auro-button size="xs" shape="rounded" variant="primary" ondark="true">Primary XS</auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="rounded" variant="primary" ondark="true" disabled>Primary XS Disabled</auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="rounded" variant="primary" ondark="true" loading="true">Primary XS Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xs" shape="rounded" variant="secondary" ondark="true">Secondary XS</auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="rounded" variant="secondary" ondark="true" disabled>Secondary XS Disabled</auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="rounded" variant="secondary" ondark="true" loading="true">Secondary XS Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xs" shape="rounded" variant="tertiary" ondark="true">Tertiary XS</auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="rounded" ondark="true" variant="tertiary" disabled>Tertiary XS Disabled</auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="rounded" ondark="true" variant="tertiary" loading="true">Tertiary XS Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xs" shape="rounded" variant="ghost" ondark="true">Ghost XS</auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="rounded" ondark="true" variant="ghost" disabled>Ghost XS Disabled</auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="rounded" ondark="true" variant="ghost" loading="true">Ghost XS Loading</auro-button>
            </div>
          </td>
        </tr>
        <!-- Small -->
        <tr>
          <td style="color: white;">SM</td>
          <td>
            <div>
              <auro-button size="sm" shape="rounded" variant="primary" ondark="true">Primary SM</auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="rounded" variant="primary" ondark="true" disabled>Primary SM Disabled</auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="rounded" variant="primary" ondark="true" loading="true">Primary SM Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="sm" shape="rounded" variant="secondary" ondark="true">Secondary SM</auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="rounded" variant="secondary" ondark="true" disabled>Secondary SM Disabled</auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="rounded" variant="secondary" ondark="true" loading="true">Secondary SM Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="sm" shape="rounded" variant="tertiary" ondark="true">Tertiary SM</auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="rounded" ondark="true" tertiary disabled>Tertiary SM Disabled</auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="rounded" ondark="true" tertiary loading="true">Tertiary SM Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="sm" shape="rounded" variant="ghost" ondark="true">Ghost sm</auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="rounded" ondark="true" variant="ghost" disabled>Ghost sm Disabled</auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="rounded" ondark="true" variant="ghost" loading="true">Ghost sm Loading</auro-button>
            </div>
          </td>
        </tr>
        <!-- Medium -->
        <tr>
          <td style="color: white;">MD</td>
          <td>
            <div>
              <auro-button size="md" shape="rounded" variant="primary" ondark="true">Primary MD</auro-button>
            </div>
            <div>
              <auro-button size="md" shape="rounded" variant="primary" ondark="true" disabled>Primary MD Disabled</auro-button>
            </div>
            <div>
              <auro-button size="md" shape="rounded" variant="primary" ondark="true" loading="true">Primary MD Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="md" shape="rounded" variant="secondary" ondark="true">Secondary MD</auro-button>
            </div>
            <div>
              <auro-button size="md" shape="rounded" variant="secondary" ondark="true" disabled>Secondary MD Disabled</auro-button>
            </div>
            <div>
              <auro-button size="md" shape="rounded" variant="secondary" ondark="true" loading="true">Secondary MD Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="md" shape="rounded" variant="tertiary" ondark="true">Tertiary MD</auro-button>
            </div>
            <div>
              <auro-button size="md" shape="rounded" ondark="true" tertiary disabled>Tertiary MD Disabled</auro-button>
            </div>
            <div>
              <auro-button size="md" shape="rounded" ondark="true" tertiary loading="true">Tertiary MD Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="md" shape="rounded" variant="ghost" ondark="true">Ghost MD</auro-button>
            </div>
            <div>
              <auro-button size="md" shape="rounded" ondark="true" variant="ghost" disabled>Ghost MD Disabled</auro-button>
            </div>
            <div>
              <auro-button size="md" shape="rounded" ondark="true" variant="ghost" loading="true">Ghost MD Loading</auro-button>
            </div>
          </td>
        </tr>
        <!-- Large -->
        <tr>
          <td style="color: white;">LG</td>
          <td>
            <div>
              <auro-button size="lg" shape="rounded" variant="primary" ondark="true">Primary LG</auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="rounded" variant="primary" ondark="true" disabled>Primary LG Disabled</auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="rounded" variant="primary" ondark="true" loading="true">Primary LG Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="lg" shape="rounded" variant="secondary" ondark="true">Secondary LG</auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="rounded" variant="secondary" ondark="true" disabled>Secondary LG Disabled</auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="rounded" variant="secondary" ondark="true" loading="true">Secondary LG Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="lg" shape="rounded" variant="tertiary" ondark="true">Tertiary LG</auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="rounded" variant="tertiary" ondark="true" disabled>Tertiary LG Disabled</auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="rounded" variant="tertiary" ondark="true" loading="true">Tertiary LG Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="lg" shape="rounded" variant="ghost" ondark="true">Ghost LG</auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="rounded" ondark="true" variant="ghost" disabled>Ghost LG Disabled</auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="rounded" ondark="true" variant="ghost" loading="true">Ghost LG Loading</auro-button>
            </div>
          </td>
        </tr>
        <!-- Extra Large -->
        <tr>
          <td style="color: white;">XL</td>
          <td>
            <div>
              <auro-button size="xl" shape="rounded" variant="primary" ondark="true">Primary XL</auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="rounded" variant="primary" ondark="true" disabled>Primary XL Disabled</auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="rounded" variant="primary" ondark="true" loading="true">Primary XL Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xl" shape="rounded" variant="secondary" ondark="true">Secondary XL</auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="rounded" variant="secondary" ondark="true" disabled>Secondary XL Disabled</auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="rounded" variant="secondary" ondark="true" loading="true">Secondary XL Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xl" shape="rounded" variant="tertiary" ondark="true">Tertiary XL</auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="rounded" variant="tertiary" ondark="true" disabled>Tertiary XL Disabled</auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="rounded" variant="tertiary" ondark="true" loading="true">Tertiary XL Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xl" shape="rounded" variant="ghost" ondark="true">Ghost XL</auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="rounded" ondark="true" variant="ghost" disabled>Ghost XL Disabled</auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="rounded" ondark="true" variant="ghost" loading="true">Ghost XL Loading</auro-button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 style="color: white;">Pill Buttons - Dark Theme</h2>
    <table class="dark-buttons">
      <thead>
        <tr>
          <th style="color: white;">Size</th>
          <th style="color: white;">Primary</th>
          <th style="color: white;">Secondary</th>
          <th style="color: white;">Tertiary</th>
          <th style="color: white;">Ghost</th>
        </tr>
      </thead>
      <tbody>
        <!-- Extra Small -->
        <tr>
          <td style="color: white;">XS</td>
          <td>
            <div>
              <auro-button size="xs" shape="pill" variant="primary" ondark="true">Primary XS</auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="pill" variant="primary" ondark="true" disabled>Primary XS Disabled</auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="pill" variant="primary" ondark="true" loading="true">Primary XS Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xs" shape="pill" variant="secondary" ondark="true">Secondary XS</auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="pill" variant="secondary" ondark="true" disabled>Secondary XS Disabled</auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="pill" variant="secondary" ondark="true" loading="true">Secondary XS Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xs" shape="pill" variant="tertiary" ondark="true">Tertiary XS</auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="pill" variant="tertiary" ondark="true" disabled>Tertiary XS Disabled</auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="pill" variant="tertiary" ondark="true" loading="true">Tertiary XS Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xs" shape="pill" variant="ghost" ondark="true">Ghost XS</auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="pill" variant="ghost" ondark="true" disabled>Ghost XS Disabled</auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="pill" variant="ghost" ondark="true" loading="true">Ghost XS Loading</auro-button>
            </div>
          </td>
        </tr>
        <!-- Small -->
        <tr>
          <td style="color: white;">SM</td>
          <td>
            <div>
              <auro-button size="sm" shape="pill" variant="primary" ondark="true">Primary SM</auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="pill" variant="primary" ondark="true" disabled>Primary SM Disabled</auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="pill" variant="primary" ondark="true" loading="true">Primary SM Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="sm" shape="pill" variant="secondary" ondark="true">Secondary SM</auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="pill" variant="secondary" ondark="true" disabled>Secondary SM Disabled</auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="pill" variant="secondary" ondark="true" loading="true">Secondary SM Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="sm" shape="pill" variant="tertiary" ondark="true">Tertiary SM</auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="pill" variant="tertiary" ondark="true" disabled>Tertiary SM Disabled</auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="pill" variant="tertiary" ondark="true" loading="true">Tertiary SM Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="sm" shape="pill" variant="ghost" ondark="true">Ghost SM</auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="pill" variant="ghost" ondark="true" disabled>Ghost SM Disabled</auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="pill" variant="ghost" ondark="true" loading="true">Ghost SM Loading</auro-button>
            </div>
          </td>
        </tr>
        <!-- Medium -->
        <tr>
          <td style="color: white;">MD</td>
          <td>
            <div>
              <auro-button size="md" shape="pill" variant="primary" ondark="true">Primary MD</auro-button>
            </div>
            <div>
              <auro-button size="md" shape="pill" variant="primary" ondark="true" disabled>Primary MD Disabled</auro-button>
            </div>
            <div>
              <auro-button size="md" shape="pill" variant="primary" ondark="true" loading="true">Primary MD Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="md" shape="pill" variant="secondary" ondark="true">Secondary MD</auro-button>
            </div>
            <div>
              <auro-button size="md" shape="pill" variant="secondary" ondark="true" disabled>Secondary MD Disabled</auro-button>
            </div>
            <div>
              <auro-button size="md" shape="pill" variant="secondary" ondark="true" loading="true">Secondary MD Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="md" shape="pill" variant="tertiary" ondark="true">Tertiary MD</auro-button>
            </div>
            <div>
              <auro-button size="md" shape="pill" variant="tertiary" ondark="true" disabled>Tertiary MD Disabled</auro-button>
            </div>
            <div>
              <auro-button size="md" shape="pill" variant="tertiary" ondark="true" loading="true">Tertiary MD Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="md" shape="pill" variant="ghost" ondark="true">Ghost MD</auro-button>
            </div>
            <div>
              <auro-button size="md" shape="pill" variant="ghost" ondark="true" disabled>Ghost MD Disabled</auro-button>
            </div>
            <div>
              <auro-button size="md" shape="pill" variant="ghost" ondark="true" loading="true">Ghost MD Loading</auro-button>
            </div>
          </td>
        </tr>
        <!-- Large -->
        <tr>
          <td style="color: white;">LG</td>
          <td>
            <div>
              <auro-button size="lg" shape="pill" variant="primary" ondark="true">Primary LG</auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="pill" variant="primary" ondark="true" disabled>Primary LG Disabled</auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="pill" variant="primary" ondark="true" loading="true">Primary LG Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="lg" shape="pill" variant="secondary" ondark="true">Secondary LG</auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="pill" variant="secondary" ondark="true" disabled>Secondary LG Disabled</auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="pill" variant="secondary" ondark="true" loading="true">Secondary LG Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="lg" shape="pill" variant="tertiary" ondark="true">Tertiary LG</auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="pill" variant="tertiary" ondark="true" disabled>Tertiary LG Disabled</auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="pill" variant="tertiary" ondark="true" loading="true">Tertiary LG Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="lg" shape="pill" variant="ghost" ondark="true">Ghost LG</auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="pill" variant="ghost" ondark="true" disabled>Ghost LG Disabled</auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="pill" variant="ghost" ondark="true" loading="true">Ghost LG Loading</auro-button>
            </div>
          </td>
        </tr>
        <!-- Extra Large -->
        <tr>
          <td style="color: white;">XL</td>
          <td>
            <div>
              <auro-button size="xl" shape="pill" variant="primary" ondark="true">Primary XL</auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="pill" variant="primary" ondark="true" disabled>Primary XL Disabled</auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="pill" variant="primary" ondark="true" loading="true">Primary XL Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xl" shape="pill" variant="secondary" ondark="true">Secondary XL</auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="pill" variant="secondary" ondark="true" disabled>Secondary XL Disabled</auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="pill" variant="secondary" ondark="true" loading="true">Secondary XL Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xl" shape="pill" variant="tertiary" ondark="true">Tertiary XL</auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="pill" variant="tertiary" ondark="true" disabled>Tertiary XL Disabled</auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="pill" variant="tertiary" ondark="true" loading="true">Tertiary XL Loading</auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xl" shape="pill" variant="ghost" ondark="true">Ghost XL</auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="pill" variant="ghost" ondark="true" disabled>Ghost XL Disabled</auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="pill" variant="ghost" ondark="true" loading="true">Ghost XL Loading</auro-button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 style="color: white;">Circle Buttons - Dark Theme</h2>
    <table class="dark-buttons">
      <thead>
        <tr>
          <th style="color: white;">Size</th>
          <th style="color: white;">Primary</th>
          <th style="color: white;">Secondary</th>
          <th style="color: white;">Tertiary</th>
          <th style="color: white;">Flat</th>
          <th style="color: white;">Ghost</th>
        </tr>
      </thead>
      <tbody>
        <!-- Extra Small -->
        <tr>
          <td style="color: white;">XS</td>
          <td>
            <div>
              <auro-button size="xs" shape="circle" variant="primary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="circle" variant="primary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xs" shape="circle" variant="secondary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="circle" variant="secondary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xs" shape="circle" variant="tertiary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="circle" variant="tertiary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xs" shape="circle" variant="flat" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="circle" variant="flat" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xs" shape="circle" variant="ghost" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="xs" shape="circle" variant="ghost" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
        </tr>
        <!-- Small -->
        <tr>
          <td style="color: white;">SM</td>
          <td>
            <div>
              <auro-button size="sm" shape="circle" variant="primary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="circle" variant="primary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="sm" shape="circle" variant="secondary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="circle" variant="secondary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="sm" shape="circle" variant="tertiary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="circle" variant="tertiary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="sm" shape="circle" variant="flat" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="circle" variant="flat" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="sm" shape="circle" variant="ghost" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="sm" shape="circle" variant="ghost" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
        </tr>
        <!-- Medium -->
        <tr>
          <td style="color: white;">MD</td>
          <td>
            <div>
              <auro-button size="md" shape="circle" variant="primary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="md" shape="circle" variant="primary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="md" shape="circle" variant="secondary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="md" shape="circle" variant="secondary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="md" shape="circle" variant="tertiary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="md" shape="circle" variant="tertiary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="md" shape="circle" variant="flat" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="md" shape="circle" variant="flat" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="md" shape="circle" variant="ghost" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="md" shape="circle" variant="ghost" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
        </tr>
        <!-- Large -->
        <tr>
          <td style="color: white;">LG</td>
          <td>
            <div>
              <auro-button size="lg" shape="circle" variant="primary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="circle" variant="primary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="lg" shape="circle" variant="secondary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="circle" variant="secondary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="lg" shape="circle" variant="tertiary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="circle" variant="tertiary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="lg" shape="circle" variant="flat" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="circle" variant="flat" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="lg" shape="circle" variant="ghost" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="lg" shape="circle" variant="ghost" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
        </tr>
        <!-- Extra Large -->
        <tr>
          <td style="color: white;">XL</td>
          <td>
            <div>
              <auro-button size="xl" shape="circle" variant="primary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="circle" variant="primary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xl" shape="circle" variant="secondary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="circle" variant="secondary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xl" shape="circle" variant="tertiary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="circle" variant="tertiary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xl" shape="circle" variant="flat" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="circle" variant="flat" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
          <td>
            <div>
              <auro-button size="xl" shape="circle" variant="ghost" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
            <div>
              <auro-button size="xl" shape="circle" variant="ghost" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 30px;
      border: none;
    }

    table.light-buttons tr,
    table.light-buttons th,
    table.light-buttons td {
      background-color: #f9f9f9 !important;
    }

    table.dark-buttons,
    table.dark-buttons tr,
    table.dark-buttons th,
    table.dark-buttons td {
      background-color: #00274a !important;
    }

    table div {
      margin: 5px 0;
    }
  </style>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shapeSize.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/shapeSize.html -->

```html
<div>
  <h2>Rounded Buttons - Light Theme</h2>
<table class="light-buttons">
  <thead>
    <tr>
      <th>Size</th>
      <th>Primary</th>
      <th>Secondary</th>
      <th>Tertiary</th>
      <th>Ghost</th>
    </tr>
  </thead>
  <tbody>
    <!-- Extra Small -->
    <tr>
      <td>XS</td>
      <td>
        <div>
          <auro-button size="xs" shape="rounded" variant="primary">Primary XS</auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="rounded" variant="primary" disabled>Primary XS Disabled</auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="rounded" variant="primary" loading="true">Primary XS Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xs" shape="rounded" variant="secondary">Secondary XS</auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="rounded" variant="secondary" disabled>Secondary XS Disabled</auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="rounded" variant="secondary" loading="true">Secondary XS Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xs" shape="rounded" variant="tertiary">Tertiary XS</auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="rounded" variant="tertiary" disabled>Tertiary XS Disabled</auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="rounded" variant="tertiary" loading="true">Tertiary XS Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xs" shape="rounded" variant="ghost">Ghost XS</auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="rounded" variant="ghost" disabled>Ghost XS Disabled</auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="rounded" variant="ghost" loading="true">Ghost XS Loading</auro-button>
        </div>
      </td>
    </tr>
    <!-- Small -->
    <tr>
      <td>SM</td>
      <td>
        <div>
          <auro-button size="sm" shape="rounded" variant="primary">Primary SM</auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="rounded" variant="primary" disabled>Primary SM Disabled</auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="rounded" variant="primary" loading="true">Primary SM Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="sm" shape="rounded" variant="secondary">Secondary SM</auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="rounded" variant="secondary" disabled>Secondary SM Disabled</auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="rounded" variant="secondary" loading="true">Secondary SM Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="sm" shape="rounded" variant="tertiary">Tertiary SM</auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="rounded" variant="tertiary" disabled>Tertiary SM Disabled</auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="rounded" variant="tertiary" loading="true">Tertiary SM Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="sm" shape="rounded" variant="ghost">Ghost SM</auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="rounded" variant="ghost" disabled>Ghost SM Disabled</auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="rounded" variant="ghost" loading="true">Ghost SM Loading</auro-button>
        </div>
      </td>
    </tr>
    <!-- Medium -->
    <tr>
      <td>MD</td>
      <td>
        <div>
          <auro-button size="md" shape="rounded" variant="primary">Primary MD</auro-button>
        </div>
        <div>
          <auro-button size="md" shape="rounded" variant="primary" disabled>Primary MD Disabled</auro-button>
        </div>
        <div>
          <auro-button size="md" shape="rounded" variant="primary" loading="true">Primary MD Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="md" shape="rounded" variant="secondary">Secondary MD</auro-button>
        </div>
        <div>
          <auro-button size="md" shape="rounded" variant="secondary" disabled>Secondary MD Disabled</auro-button>
        </div>
        <div>
          <auro-button size="md" shape="rounded" variant="secondary" loading="true">Secondary MD Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="md" shape="rounded" variant="tertiary">Tertiary MD</auro-button>
        </div>
        <div>
          <auro-button size="md" shape="rounded" variant="tertiary" disabled>Tertiary MD Disabled</auro-button>
        </div>
        <div>
          <auro-button size="md" shape="rounded" variant="tertiary" loading="true">Tertiary MD Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="md" shape="rounded" variant="ghost">Ghost MD</auro-button>
        </div>
        <div>
          <auro-button size="md" shape="rounded" variant="ghost" disabled>Ghost MD Disabled</auro-button>
        </div>
        <div>
          <auro-button size="md" shape="rounded" variant="ghost" loading="true">Ghost MD Loading</auro-button>
        </div>
      </td>
    </tr>
    <!-- Large -->
    <tr>
      <td>LG</td>
      <td>
        <div>
          <auro-button size="lg" shape="rounded" variant="primary">Primary LG</auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="rounded" variant="primary" disabled>Primary LG Disabled</auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="rounded" variant="primary" loading="true">Primary LG Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="lg" shape="rounded" variant="secondary">Secondary LG</auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="rounded" variant="secondary" disabled>Secondary LG Disabled</auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="rounded" variant="secondary" loading="true">Secondary LG Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="lg" shape="rounded" variant="tertiary">Tertiary LG</auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="rounded" variant="tertiary" disabled>Tertiary LG Disabled</auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="rounded" variant="tertiary" loading="true">Tertiary LG Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="lg" shape="rounded" variant="ghost">Ghost LG</auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="rounded" variant="ghost" disabled>Ghost LG Disabled</auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="rounded" variant="ghost" loading="true">Ghost LG Loading</auro-button>
        </div>
      </td>
    </tr>
    <!-- Extra Large -->
    <tr>
      <td>XL</td>
      <td>
        <div>
          <auro-button size="xl" shape="rounded" variant="primary">Primary XL</auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="rounded" variant="primary" disabled>Primary XL Disabled</auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="rounded" variant="primary" loading="true">Primary XL Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xl" shape="rounded" variant="secondary">Secondary XL</auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="rounded" variant="secondary" disabled>Secondary XL Disabled</auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="rounded" variant="secondary" loading="true">Secondary XL Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xl" shape="rounded" variant="tertiary">Tertiary XL</auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="rounded" variant="tertiary" disabled>Tertiary XL Disabled</auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="rounded" variant="tertiary" loading="true">Tertiary XL Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xl" shape="rounded" variant="ghost">Ghost XL</auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="rounded" variant="ghost" disabled>Ghost XL Disabled</auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="rounded" variant="ghost" loading="true">Ghost XL Loading</auro-button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<h2>Pill Buttons - Light Theme</h2>
<table class="light-buttons">
  <thead>
    <tr>
      <th>Size</th>
      <th>Primary</th>
      <th>Secondary</th>
      <th>Tertiary</th>
      <th>Ghost</th>
    </tr>
  </thead>
  <tbody>
    <!-- Extra Small -->
    <tr>
      <td>XS</td>
      <td>
        <div>
          <auro-button size="xs" shape="pill" variant="primary">Primary XS</auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="pill" variant="primary" disabled>Primary XS Disabled</auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="pill" variant="primary" loading="true">Primary XS Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xs" shape="pill" variant="secondary">Secondary XS</auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="pill" variant="secondary" disabled>Secondary XS Disabled</auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="pill" variant="secondary" loading="true">Secondary XS Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xs" shape="pill" variant="tertiary">Tertiary XS</auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="pill" variant="tertiary" disabled>Tertiary XS Disabled</auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="pill" variant="tertiary" loading="true">Tertiary XS Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xs" shape="pill" variant="ghost">Ghost XS</auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="pill" variant="ghost" disabled>Ghost XS Disabled</auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="pill" variant="ghost" loading="true">Ghost XS Loading</auro-button>
        </div>
      </td>
    </tr>
    <!-- Small -->
    <tr>
      <td>SM</td>
      <td>
        <div>
          <auro-button size="sm" shape="pill" variant="primary">Primary SM</auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="pill" variant="primary" disabled>Primary SM Disabled</auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="pill" variant="primary" loading="true">Primary SM Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="sm" shape="pill" variant="secondary">Secondary SM</auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="pill" variant="secondary" disabled>Secondary SM Disabled</auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="pill" variant="secondary" loading="true">Secondary SM Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="sm" shape="pill" variant="tertiary">Tertiary SM</auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="pill" variant="tertiary" disabled>Tertiary SM Disabled</auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="pill" variant="tertiary" loading="true">Tertiary SM Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="sm" shape="pill" variant="ghost">Ghost SM</auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="pill" variant="ghost" disabled>Ghost SM Disabled</auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="pill" variant="ghost" loading="true">Ghost SM Loading</auro-button>
        </div>
      </td>
    </tr>
    <!-- Medium -->
    <tr>
      <td>MD</td>
      <td>
        <div>
          <auro-button size="md" shape="pill" variant="primary">Primary MD</auro-button>
        </div>
        <div>
          <auro-button size="md" shape="pill" variant="primary" disabled>Primary MD Disabled</auro-button>
        </div>
        <div>
          <auro-button size="md" shape="pill" variant="primary" loading="true">Primary MD Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="md" shape="pill" variant="secondary">Secondary MD</auro-button>
        </div>
        <div>
          <auro-button size="md" shape="pill" variant="secondary" disabled>Secondary MD Disabled</auro-button>
        </div>
        <div>
          <auro-button size="md" shape="pill" variant="secondary" loading="true">Secondary MD Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="md" shape="pill" variant="tertiary">Tertiary MD</auro-button>
        </div>
        <div>
          <auro-button size="md" shape="pill" variant="tertiary" disabled>Tertiary MD Disabled</auro-button>
        </div>
        <div>
          <auro-button size="md" shape="pill" variant="tertiary" loading="true">Tertiary MD Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="md" shape="pill" variant="ghost">Ghost MD</auro-button>
        </div>
        <div>
          <auro-button size="md" shape="pill" variant="ghost" disabled>Ghost MD Disabled</auro-button>
        </div>
        <div>
          <auro-button size="md" shape="pill" variant="ghost" loading="true">Ghost MD Loading</auro-button>
        </div>
      </td>
    </tr>
    <!-- Large -->
    <tr>
      <td>LG</td>
      <td>
        <div>
          <auro-button size="lg" shape="pill" variant="primary">Primary LG</auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="pill" variant="primary" disabled>Primary LG Disabled</auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="pill" variant="primary" loading="true">Primary LG Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="lg" shape="pill" variant="secondary">Secondary LG</auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="pill" variant="secondary" disabled>Secondary LG Disabled</auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="pill" variant="secondary" loading="true">Secondary LG Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="lg" shape="pill" variant="tertiary">Tertiary LG</auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="pill" variant="tertiary" disabled>Tertiary LG Disabled</auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="pill" variant="tertiary" loading="true">Tertiary LG Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="lg" shape="pill" variant="ghost">Ghost LG</auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="pill" variant="ghost" disabled>Ghost LG Disabled</auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="pill" variant="ghost" loading="true">Ghost LG Loading</auro-button>
        </div>
      </td>
    </tr>
    <!-- Extra Large -->
    <tr>
      <td>XL</td>
      <td>
        <div>
          <auro-button size="xl" shape="pill" variant="primary">Primary XL</auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="pill" variant="primary" disabled>Primary XL Disabled</auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="pill" variant="primary" loading="true">Primary XL Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xl" shape="pill" variant="secondary">Secondary XL</auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="pill" variant="secondary" disabled>Secondary XL Disabled</auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="pill" variant="secondary" loading="true">Secondary XL Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xl" shape="pill" variant="tertiary">Tertiary XL</auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="pill" variant="tertiary" disabled>Tertiary XL Disabled</auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="pill" variant="tertiary" loading="true">Tertiary XL Loading</auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xl" shape="pill" variant="ghost">Ghost XL</auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="pill" variant="ghost" disabled>Ghost XL Disabled</auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="pill" variant="ghost" loading="true">Ghost XL Loading</auro-button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<h2>Circle Buttons - Light Theme</h2>
<table class="light-buttons">
  <thead>
    <tr>
      <th>Size</th>
      <th>Primary</th>
      <th>Secondary</th>
      <th>Tertiary</th>
      <th>Flat</th>
      <th>Ghost</th>
    </tr>
  </thead>
  <tbody>
    <!-- Extra Small -->
    <tr>
      <td>XS</td>
      <td>
        <div>
          <auro-button size="xs" shape="circle" variant="primary"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="circle" variant="primary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xs" shape="circle" variant="secondary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="circle" variant="secondary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xs" shape="circle" variant="tertiary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="circle" variant="tertiary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xs" shape="circle" variant="flat"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="circle" variant="flat" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xs" shape="circle" variant="ghost"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="xs" shape="circle" variant="ghost" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
    </tr>
    <!-- Small -->
    <tr>
      <td>SM</td>
      <td>
        <div>
          <auro-button size="sm" shape="circle" variant="primary"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="circle" variant="primary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="sm" shape="circle" variant="secondary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="circle" variant="secondary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="sm" shape="circle" variant="tertiary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="circle" variant="tertiary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="sm" shape="circle" variant="flat"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="circle" variant="flat" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="sm" shape="circle" variant="ghost"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="sm" shape="circle" variant="ghost" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
    </tr>
    <!-- Medium -->
    <tr>
      <td>MD</td>
      <td>
        <div>
          <auro-button size="md" shape="circle" variant="primary"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="md" shape="circle" variant="primary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="md" shape="circle" variant="secondary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="md" shape="circle" variant="secondary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="md" shape="circle" variant="tertiary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="md" shape="circle" variant="tertiary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="md" shape="circle" variant="flat"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="md" shape="circle" variant="flat" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="md" shape="circle" variant="ghost"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="md" shape="circle" variant="ghost" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
    </tr>
    <!-- Large -->
    <tr>
      <td>LG</td>
      <td>
        <div>
          <auro-button size="lg" shape="circle" variant="primary"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="circle" variant="primary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="lg" shape="circle" variant="secondary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="circle" variant="secondary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="lg" shape="circle" variant="tertiary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="circle" variant="tertiary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="lg" shape="circle" variant="flat"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="circle" variant="flat" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="lg" shape="circle" variant="ghost"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="lg" shape="circle" variant="ghost" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
    </tr>
    <!-- Extra Large -->
    <tr>
      <td>XL</td>
      <td>
        <div>
          <auro-button size="xl" shape="circle" variant="primary"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="circle" variant="primary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xl" shape="circle" variant="secondary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="circle" variant="secondary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xl" shape="circle" variant="tertiary"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="circle" variant="tertiary" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xl" shape="circle" variant="flat"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="circle" variant="flat" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
      <td>
        <div>
          <auro-button size="xl" shape="circle" variant="ghost"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
        <div>
          <auro-button size="xl" shape="circle" variant="ghost" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<!-- Dark Theme Section -->
<div style="background-color: #00274a; padding: 20px; margin-top: 30px;">
  <h2 style="color: white;">Rounded Buttons - Dark Theme</h2>
  <table class="dark-buttons">
    <thead>
      <tr>
        <th style="color: white;">Size</th>
        <th style="color: white;">Primary</th>
        <th style="color: white;">Secondary</th>
        <th style="color: white;">Tertiary</th>
        <th style="color: white;">Ghost</th>
      </tr>
    </thead>
    <tbody>
      <!-- Extra Small -->
      <tr>
        <td style="color: white;">XS</td>
        <td>
          <div>
            <auro-button size="xs" shape="rounded" variant="primary" ondark="true">Primary XS</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="rounded" variant="primary" ondark="true" disabled>Primary XS Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="rounded" variant="primary" ondark="true" loading="true">Primary XS Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="rounded" variant="secondary" ondark="true">Secondary XS</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="rounded" variant="secondary" ondark="true" disabled>Secondary XS Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="rounded" variant="secondary" ondark="true" loading="true">Secondary XS Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="rounded" variant="tertiary" ondark="true">Tertiary XS</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="rounded" ondark="true" variant="tertiary" disabled>Tertiary XS Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="rounded" ondark="true" variant="tertiary" loading="true">Tertiary XS Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="rounded" variant="ghost" ondark="true">Ghost XS</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="rounded" ondark="true" variant="ghost" disabled>Ghost XS Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="rounded" ondark="true" variant="ghost" loading="true">Ghost XS Loading</auro-button>
          </div>
        </td>
      </tr>
      <!-- Small -->
      <tr>
        <td style="color: white;">SM</td>
        <td>
          <div>
            <auro-button size="sm" shape="rounded" variant="primary" ondark="true">Primary SM</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="rounded" variant="primary" ondark="true" disabled>Primary SM Disabled</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="rounded" variant="primary" ondark="true" loading="true">Primary SM Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="rounded" variant="secondary" ondark="true">Secondary SM</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="rounded" variant="secondary" ondark="true" disabled>Secondary SM Disabled</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="rounded" variant="secondary" ondark="true" loading="true">Secondary SM Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="rounded" variant="tertiary" ondark="true">Tertiary SM</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="rounded" ondark="true" tertiary disabled>Tertiary SM Disabled</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="rounded" ondark="true" tertiary loading="true">Tertiary SM Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="rounded" variant="ghost" ondark="true">Ghost sm</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="rounded" ondark="true" variant="ghost" disabled>Ghost sm Disabled</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="rounded" ondark="true" variant="ghost" loading="true">Ghost sm Loading</auro-button>
          </div>
        </td>
      </tr>
      <!-- Medium -->
      <tr>
        <td style="color: white;">MD</td>
        <td>
          <div>
            <auro-button size="md" shape="rounded" variant="primary" ondark="true">Primary MD</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="rounded" variant="primary" ondark="true" disabled>Primary MD Disabled</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="rounded" variant="primary" ondark="true" loading="true">Primary MD Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="rounded" variant="secondary" ondark="true">Secondary MD</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="rounded" variant="secondary" ondark="true" disabled>Secondary MD Disabled</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="rounded" variant="secondary" ondark="true" loading="true">Secondary MD Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="rounded" variant="tertiary" ondark="true">Tertiary MD</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="rounded" ondark="true" tertiary disabled>Tertiary MD Disabled</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="rounded" ondark="true" tertiary loading="true">Tertiary MD Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="rounded" variant="ghost" ondark="true">Ghost MD</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="rounded" ondark="true" variant="ghost" disabled>Ghost MD Disabled</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="rounded" ondark="true" variant="ghost" loading="true">Ghost MD Loading</auro-button>
          </div>
        </td>
      </tr>
      <!-- Large -->
      <tr>
        <td style="color: white;">LG</td>
        <td>
          <div>
            <auro-button size="lg" shape="rounded" variant="primary" ondark="true">Primary LG</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="rounded" variant="primary" ondark="true" disabled>Primary LG Disabled</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="rounded" variant="primary" ondark="true" loading="true">Primary LG Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="rounded" variant="secondary" ondark="true">Secondary LG</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="rounded" variant="secondary" ondark="true" disabled>Secondary LG Disabled</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="rounded" variant="secondary" ondark="true" loading="true">Secondary LG Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="rounded" variant="tertiary" ondark="true">Tertiary LG</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="rounded" variant="tertiary" ondark="true" disabled>Tertiary LG Disabled</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="rounded" variant="tertiary" ondark="true" loading="true">Tertiary LG Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="rounded" variant="ghost" ondark="true">Ghost LG</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="rounded" ondark="true" variant="ghost" disabled>Ghost LG Disabled</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="rounded" ondark="true" variant="ghost" loading="true">Ghost LG Loading</auro-button>
          </div>
        </td>
      </tr>
      <!-- Extra Large -->
      <tr>
        <td style="color: white;">XL</td>
        <td>
          <div>
            <auro-button size="xl" shape="rounded" variant="primary" ondark="true">Primary XL</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="rounded" variant="primary" ondark="true" disabled>Primary XL Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="rounded" variant="primary" ondark="true" loading="true">Primary XL Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="rounded" variant="secondary" ondark="true">Secondary XL</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="rounded" variant="secondary" ondark="true" disabled>Secondary XL Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="rounded" variant="secondary" ondark="true" loading="true">Secondary XL Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="rounded" variant="tertiary" ondark="true">Tertiary XL</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="rounded" variant="tertiary" ondark="true" disabled>Tertiary XL Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="rounded" variant="tertiary" ondark="true" loading="true">Tertiary XL Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="rounded" variant="ghost" ondark="true">Ghost XL</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="rounded" ondark="true" variant="ghost" disabled>Ghost XL Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="rounded" ondark="true" variant="ghost" loading="true">Ghost XL Loading</auro-button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <h2 style="color: white;">Pill Buttons - Dark Theme</h2>
  <table class="dark-buttons">
    <thead>
      <tr>
        <th style="color: white;">Size</th>
        <th style="color: white;">Primary</th>
        <th style="color: white;">Secondary</th>
        <th style="color: white;">Tertiary</th>
        <th style="color: white;">Ghost</th>
      </tr>
    </thead>
    <tbody>
      <!-- Extra Small -->
      <tr>
        <td style="color: white;">XS</td>
        <td>
          <div>
            <auro-button size="xs" shape="pill" variant="primary" ondark="true">Primary XS</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="pill" variant="primary" ondark="true" disabled>Primary XS Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="pill" variant="primary" ondark="true" loading="true">Primary XS Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="pill" variant="secondary" ondark="true">Secondary XS</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="pill" variant="secondary" ondark="true" disabled>Secondary XS Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="pill" variant="secondary" ondark="true" loading="true">Secondary XS Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="pill" variant="tertiary" ondark="true">Tertiary XS</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="pill" variant="tertiary" ondark="true" disabled>Tertiary XS Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="pill" variant="tertiary" ondark="true" loading="true">Tertiary XS Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="pill" variant="ghost" ondark="true">Ghost XS</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="pill" variant="ghost" ondark="true" disabled>Ghost XS Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="pill" variant="ghost" ondark="true" loading="true">Ghost XS Loading</auro-button>
          </div>
        </td>
      </tr>
      <!-- Small -->
      <tr>
        <td style="color: white;">SM</td>
        <td>
          <div>
            <auro-button size="sm" shape="pill" variant="primary" ondark="true">Primary SM</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="pill" variant="primary" ondark="true" disabled>Primary SM Disabled</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="pill" variant="primary" ondark="true" loading="true">Primary SM Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="pill" variant="secondary" ondark="true">Secondary SM</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="pill" variant="secondary" ondark="true" disabled>Secondary SM Disabled</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="pill" variant="secondary" ondark="true" loading="true">Secondary SM Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="pill" variant="tertiary" ondark="true">Tertiary SM</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="pill" variant="tertiary" ondark="true" disabled>Tertiary SM Disabled</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="pill" variant="tertiary" ondark="true" loading="true">Tertiary SM Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="pill" variant="ghost" ondark="true">Ghost SM</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="pill" variant="ghost" ondark="true" disabled>Ghost SM Disabled</auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="pill" variant="ghost" ondark="true" loading="true">Ghost SM Loading</auro-button>
          </div>
        </td>
      </tr>
      <!-- Medium -->
      <tr>
        <td style="color: white;">MD</td>
        <td>
          <div>
            <auro-button size="md" shape="pill" variant="primary" ondark="true">Primary MD</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="pill" variant="primary" ondark="true" disabled>Primary MD Disabled</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="pill" variant="primary" ondark="true" loading="true">Primary MD Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="pill" variant="secondary" ondark="true">Secondary MD</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="pill" variant="secondary" ondark="true" disabled>Secondary MD Disabled</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="pill" variant="secondary" ondark="true" loading="true">Secondary MD Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="pill" variant="tertiary" ondark="true">Tertiary MD</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="pill" variant="tertiary" ondark="true" disabled>Tertiary MD Disabled</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="pill" variant="tertiary" ondark="true" loading="true">Tertiary MD Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="pill" variant="ghost" ondark="true">Ghost MD</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="pill" variant="ghost" ondark="true" disabled>Ghost MD Disabled</auro-button>
          </div>
          <div>
            <auro-button size="md" shape="pill" variant="ghost" ondark="true" loading="true">Ghost MD Loading</auro-button>
          </div>
        </td>
      </tr>
      <!-- Large -->
      <tr>
        <td style="color: white;">LG</td>
        <td>
          <div>
            <auro-button size="lg" shape="pill" variant="primary" ondark="true">Primary LG</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="pill" variant="primary" ondark="true" disabled>Primary LG Disabled</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="pill" variant="primary" ondark="true" loading="true">Primary LG Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="pill" variant="secondary" ondark="true">Secondary LG</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="pill" variant="secondary" ondark="true" disabled>Secondary LG Disabled</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="pill" variant="secondary" ondark="true" loading="true">Secondary LG Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="pill" variant="tertiary" ondark="true">Tertiary LG</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="pill" variant="tertiary" ondark="true" disabled>Tertiary LG Disabled</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="pill" variant="tertiary" ondark="true" loading="true">Tertiary LG Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="pill" variant="ghost" ondark="true">Ghost LG</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="pill" variant="ghost" ondark="true" disabled>Ghost LG Disabled</auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="pill" variant="ghost" ondark="true" loading="true">Ghost LG Loading</auro-button>
          </div>
        </td>
      </tr>
      <!-- Extra Large -->
      <tr>
        <td style="color: white;">XL</td>
        <td>
          <div>
            <auro-button size="xl" shape="pill" variant="primary" ondark="true">Primary XL</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="pill" variant="primary" ondark="true" disabled>Primary XL Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="pill" variant="primary" ondark="true" loading="true">Primary XL Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="pill" variant="secondary" ondark="true">Secondary XL</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="pill" variant="secondary" ondark="true" disabled>Secondary XL Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="pill" variant="secondary" ondark="true" loading="true">Secondary XL Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="pill" variant="tertiary" ondark="true">Tertiary XL</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="pill" variant="tertiary" ondark="true" disabled>Tertiary XL Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="pill" variant="tertiary" ondark="true" loading="true">Tertiary XL Loading</auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="pill" variant="ghost" ondark="true">Ghost XL</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="pill" variant="ghost" ondark="true" disabled>Ghost XL Disabled</auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="pill" variant="ghost" ondark="true" loading="true">Ghost XL Loading</auro-button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <h2 style="color: white;">Circle Buttons - Dark Theme</h2>
  <table class="dark-buttons">
    <thead>
      <tr>
        <th style="color: white;">Size</th>
        <th style="color: white;">Primary</th>
        <th style="color: white;">Secondary</th>
        <th style="color: white;">Tertiary</th>
        <th style="color: white;">Flat</th>
        <th style="color: white;">Ghost</th>
      </tr>
    </thead>
    <tbody>
      <!-- Extra Small -->
      <tr>
        <td style="color: white;">XS</td>
        <td>
          <div>
            <auro-button size="xs" shape="circle" variant="primary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="circle" variant="primary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="circle" variant="secondary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="circle" variant="secondary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="circle" variant="tertiary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="circle" variant="tertiary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="circle" variant="flat" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="circle" variant="flat" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xs" shape="circle" variant="ghost" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xs" shape="circle" variant="ghost" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
      </tr>
      <!-- Small -->
      <tr>
        <td style="color: white;">SM</td>
        <td>
          <div>
            <auro-button size="sm" shape="circle" variant="primary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="circle" variant="primary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="circle" variant="secondary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="circle" variant="secondary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="circle" variant="tertiary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="circle" variant="tertiary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="circle" variant="flat" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="circle" variant="flat" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="sm" shape="circle" variant="ghost" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="sm" shape="circle" variant="ghost" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
      </tr>
      <!-- Medium -->
      <tr>
        <td style="color: white;">MD</td>
        <td>
          <div>
            <auro-button size="md" shape="circle" variant="primary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="md" shape="circle" variant="primary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="circle" variant="secondary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="md" shape="circle" variant="secondary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="circle" variant="tertiary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="md" shape="circle" variant="tertiary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="circle" variant="flat" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="md" shape="circle" variant="flat" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="md" shape="circle" variant="ghost" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="md" shape="circle" variant="ghost" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
      </tr>
      <!-- Large -->
      <tr>
        <td style="color: white;">LG</td>
        <td>
          <div>
            <auro-button size="lg" shape="circle" variant="primary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="circle" variant="primary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="circle" variant="secondary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="circle" variant="secondary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="circle" variant="tertiary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="circle" variant="tertiary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="circle" variant="flat" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="circle" variant="flat" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="lg" shape="circle" variant="ghost" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="lg" shape="circle" variant="ghost" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
      </tr>
      <!-- Extra Large -->
      <tr>
        <td style="color: white;">XL</td>
        <td>
          <div>
            <auro-button size="xl" shape="circle" variant="primary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="circle" variant="primary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="circle" variant="secondary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="circle" variant="secondary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="circle" variant="tertiary" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="circle" variant="tertiary" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="circle" variant="flat" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="circle" variant="flat" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
        <td>
          <div>
            <auro-button size="xl" shape="circle" variant="ghost" ondark="true"><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
          <div>
            <auro-button size="xl" shape="circle" variant="ghost" ondark="true" disabled><auro-icon slot="icon" customcolor category="interface" name="account-filled" ondark="true"></auro-icon></auro-button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<style>
  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 30px;
    border: none;
  }

  table.light-buttons tr,
  table.light-buttons th,
  table.light-buttons td {
    background-color: #f9f9f9 !important;
  }

  table.dark-buttons,
  table.dark-buttons tr,
  table.dark-buttons th,
  table.dark-buttons td {
    background-color: #00274a !important;
  }

  table div {
    margin: 5px 0;
  }
</style>
```
<!-- AURO-GENERATED-CONTENT:END -->

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
