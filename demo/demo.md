<style>
  .auro_containedButtons {
    display: flex;
    flex-direction: column;
  }
  .auro_containedButtons > * {
    margin-bottom: 1rem;
  }
  .auro_containedButtons > *:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    .auro_containedButtons {
      flex-direction: row;
    }
    .auro_containedButtons > * {
      margin-bottom: 0;
      margin-left: 1rem;
    }
    .auro_containedButtons > *:first-child {
      margin-left: 0;
    }
  }
</style>

# Button

The Auro Design System fully supports a wide range of buttons styles and use cases. The following examples illustrate common button uses followed up by code examples.

See [install instructions](https://www.alaskaair.com/components/auro/button/install) for more information as how to install and full API for the `auro-button` Auro base element.

Illustrated in this example is a stand-alone use of `auro-button`.

## Button use cases

The `auro-button` element should be used in situations where users may:

* submit a form
* begin a new task
* trigger a new UI element to appear on the page
* specify a new or next step in a process

## Buttons are not Hyperlinks

In cases were the action of the button would not fit the criteria above, it is most likely a Hyperlink. In that situation it is recommended that the [auro-hyperlink](https://www.alaskaair.com/components/auro/hyperlink) element be used.

## Default types

<div class="exampleWrapper">
  <auro-button>Primary</auro-button>
  <auro-button disabled>Primary</auro-button>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-button>Primary</auro-button>
  <auro-button disabled>Primary</auro-button>
  ```

</auro-accordion>

<div class="exampleWrapper">
  <auro-button variant="secondary">Secondary</auro-button>
  <auro-button variant="secondary" disabled>Secondary</auro-button>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-button variant="secondary">Secondary</auro-button>
  <auro-button variant="secondary" disabled>Secondary</auro-button>
  ```

</auro-accordion>

<div class="exampleWrapper">
  <auro-button variant="tertiary">Tertiary</auro-button>
  <auro-button variant="tertiary" disabled>Tertiary</auro-button>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-button variant="tertiary">Tertiary</auro-button>
  <auro-button variant="tertiary" disabled>Tertiary</auro-button>
  ```

</auro-accordion>

For default spacing of elements in a row, use the [.auro_containedButtons](https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-auro-css-#{$scope}.auro_containedButtons) predefined selector in the [WC Style Sheets](https://auro.alaskaair.com/webcorestylesheets) lib.

<div class="exampleWrapper auro_containedButtons">
  <auro-button>Primary</auro-button>
  <auro-button variant="secondary">Secondary</auro-button>
  <auro-button variant="tertiary">Tertiary</auro-button>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <div class="exampleWrapper auro_containedButtons">
    <auro-button>Primary</auro-button>
    <auro-button variant="secondary">Secondary</auro-button>
    <auro-button variant="tertiary">Tertiary</auro-button>
  </div>
  ```

</auro-accordion>

## Slim style

Use the `slim` attribute with the `auro-button` element for a slim style with less padding. The slim style is used to establish the lowest level of hierarchy. Slim buttons have the least emphasis and significance on a page.

<div class="exampleWrapper auro_containedButtons">
  <auro-button slim>Primary</auro-button>
  <auro-button slim variant="secondary">Secondary</auro-button>
  <auro-button slim variant="tertiary">Tertiary</auro-button>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <div class="exampleWrapper auro_containedButtons">
    <auro-button slim>Primary</auro-button>
    <auro-button slim variant="secondary">Secondary</auro-button>
    <auro-button slim variant="tertiary">Tertiary</auro-button>
  </div>
  ```

</auro-accordion>

<div class="exampleWrapper auro_containedButtons">
  <auro-button slim>
    Activate WiFi
    <auro-icon style="width: var(--auro-size-md)"
      customSize
      customcolor
      category="in-flight" name="wifi">
    </auro-icon>
  </auro-button>

  <auro-button slim variant="secondary">
    <auro-icon style="width: var(--auro-size-md)"
      customSize
      customcolor
      category="interface" name="arrow-left"></auro-icon>
    Previous action
  </auro-button>

  <auro-button slim variant="tertiary">
    Love this ...
    <auro-icon style="width: var(--auro-size-md)"
      customSize
      customcolor
      category="interface" name="heart-filled"></auro-icon>
  </auro-button>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-button slim>
    Activate WiFi
    <auro-icon style="width: var(--auro-size-md)"
      customSize
      customcolor
      category="in-flight" name="wifi">
    </auro-icon>
  </auro-button>

  <auro-button slim variant="secondary">
    <auro-icon style="width: var(--auro-size-md)"
      customSize
      customcolor
      category="interface" name="arrow-left"></auro-icon>
    Previous action
  </auro-button>

  <auro-button slim variant="tertiary">
    Love this ...
    <auro-icon style="width: var(--auro-size-md)"
      customSize
      customcolor
      category="interface" name="heart-filled"></auro-icon>
  </auro-button>
  ```

</auro-accordion>

## Icon support

Adding icons to the auro-button component is as easy as nesting any other HTML. The [auro-icon component](https://www.alaskaair.com/components/auro/icon) has access to all the icons listed in the [Auro Icons library](https://www.alaskaair.com/icons/usage) for quick and easy use.

Be sure to use the `customColor` attribute on the auro-icon component to allow colors set in your parent element to pass through to the icon.


<div class="exampleWrapper auro_containedButtons">
  <auro-button>
    Activate WiFi
    <auro-icon customColor category="in-flight" name="wifi"></auro-icon>
  </auro-button>

  <auro-button variant="secondary">
    <auro-icon customcolor category="interface" name="arrow-left"></auro-icon>
    Previous action
  </auro-button>

  <auro-button variant="tertiary">
    Love this ...
    <auro-icon customcolor category="interface" name="heart-filled"></auro-icon>
  </auro-button>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-button>
    Activate WiFi
    <auro-icon customColor category="in-flight" name="wifi"></auro-icon>
  </auro-button>

  <auro-button variant="secondary">
    <auro-icon customcolor category="interface" name="arrow-left"></auro-icon>
    Previous action
  </auro-button>

  <auro-button variant="tertiary">
    Love this ...
    <auro-icon customcolor category="interface" name="heart-filled"></auro-icon>
  </auro-button>
  ```

</auro-accordion>



#### Icon only button

Use the `iconOnly` attribute with the `auro-button` element for a style specific to having only an `auro-icon` as the button's content.

Be sure to also use the `customColor` and `customSize` attributes on the `auro-icon` component to allow colors set in your parent element to pass through to the icon.

**Recommended**: We strongly encourage the users of the icon only `auro-button` to use the `aria-label` attribute. Without this attribute, the screenreaders will not properly describe the button content to it's users.

<div class="exampleWrapper auro_containedButtons">
  <auro-button aria-label="home-filled" iconOnly>
    <auro-icon
      customColor
      customSize
      category="interface"
      name="home-filled">
    </auro-icon>
  </auro-button>

  <auro-button aria-label="arrow-left" variant="secondary" iconOnly>
    <auro-icon
      customColor
      customSize
      category="interface"
      name="arrow-left">
    </auro-icon>
  </auro-button>

  <auro-button aria-label="heart-filled" variant="tertiary" iconOnly>
    <auro-icon
      customColor
      customSize
      category="interface"
      name="heart-filled">
    </auro-icon>
  </auro-button>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-button aria-label="home-filled" iconOnly>
    <auro-icon
      customColor
      customSize
      category="interface"
      name="home-filled">
    </auro-icon>
  </auro-button>

  <auro-button aria-label="arrow-left" variant="secondary" iconOnly>
    <auro-icon
      customColor
      customSize
      category="interface"
      name="arrow-left">
    </auro-icon>
  </auro-button>

  <auro-button aria-label="heart-filled" variant="tertiary" iconOnly>
    <auro-icon
      customColor
      customSize
      category="interface"
      name="heart-filled">
    </auro-icon>
  </auro-button>
  ```

</auro-accordion>

#### Icon only button - Slim

Use the `slim` attribute along with `iconOnly` attribute on the `auro-button` element for a slimmer icon only button with less padding.

<div class="exampleWrapper auro_containedButtons">
  <auro-button aria-label="home-filled" iconOnly slim>
    <auro-icon
      customColor
      customSize
      category="interface"
      name="home-filled">
    </auro-icon>
  </auro-button>

  <auro-button aria-label="arrow-left" variant="secondary" iconOnly slim>
    <auro-icon
      customColor
      customSize
      category="interface"
      name="arrow-left">
    </auro-icon>
  </auro-button>

  <auro-button aria-label="heart-filled" variant="tertiary" iconOnly slim>
    <auro-icon
      customColor
      customSize
      category="interface"
      name="heart-filled">
    </auro-icon>
  </auro-button>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-button aria-label="home-filled" iconOnly slim>
    <auro-icon
      customColor
      customSize
      category="interface"
      name="home-filled">
    </auro-icon>
  </auro-button>

  <auro-button aria-label="arrow-left" variant="secondary" iconOnly slim>
    <auro-icon
      customColor
      customSize
      category="interface"
      name="arrow-left">
    </auro-icon>
  </auro-button>

  <auro-button aria-label="heart-filled" variant="tertiary" iconOnly slim>
    <auro-icon
      customColor
      customSize
      category="interface"
      name="heart-filled">
    </auro-icon>
  </auro-button>
  ```

</auro-accordion>

## Fluid

In the following example see how the `fluid` attributes alters the shape of the button to be full width of its parent container.

<div class="exampleWrapper">
  <auro-button fluid>Primary</auro-button>
  <auro-button variant="secondary" fluid>Secondary</auro-button>
  <auro-button variant="tertiary" fluid>Tertiary</auro-button>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-button fluid>Primary</auro-button>
  <auro-button variant="secondary" fluid>Secondary</auro-button>
  <auro-button variant="tertiary" fluid>Tertiary</auro-button>
  ```

</auro-accordion>

## Loading State

Use the `loading` attribute to alter the content to teh shimmering dots to alert the user that the button/form is in an active state. The `loading` attribute will also place the element in a disabled state to keep the user from re-submitting an action.

<div class="exampleWrapper auro_containedButtons">
  <auro-button loading>Primary</auro-button>
  <auro-button variant="secondary" loading>Secondary</auro-button>
  <auro-button variant="tertiary" loading>Tertiary</auro-button>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-button loading>Primary</auro-button>
  <auro-button variant="secondary" loading>Secondary</auro-button>
  <auro-button variant="tertiary" loading>Tertiary</auro-button>
  ```

</auro-accordion>

<div class="exampleWrapper--ondark auro_containedButtons">
  <auro-button ondark loading>Primary</auro-button>
  <auro-button variant="secondary" ondark loading>Secondary</auro-button>
  <auro-button variant="tertiary" ondark loading>Tertiary</auro-button>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-button ondark loading>Primary</auro-button>
  <auro-button variant="secondary" ondark loading>Secondary</auro-button>
  <auro-button variant="tertiary" ondark loading>Tertiary</auro-button>
  ```

</auro-accordion>

## onDark

These examples illustrate the core button types and a `disabled` state on dark backgrounds using the `onDark` attribute.

<div class="exampleWrapper--ondark auro_containedButtons">
  <auro-button ondark>Primary</auro-button>
  <auro-button ondark disabled>Primary</auro-button>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-button ondark>Primary</auro-button>
  <auro-button ondark disabled>Primary</auro-button>
  ```

</auro-accordion>

<div class="exampleWrapper--ondark auro_containedButtons">
  <auro-button variant="secondary" ondark>Secondary</auro-button>
  <auro-button variant="secondary" ondark disabled>Secondary</auro-button>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-button variant="secondary" ondark>Secondary</auro-button>
  <auro-button variant="secondary" ondark disabled>Secondary</auro-button>

  ```

</auro-accordion>

<div class="exampleWrapper--ondark auro_containedButtons">
  <auro-button variant="tertiary" ondark>Tertiary</auro-button>
  <auro-button variant="tertiary" ondark disabled>Tertiary</auro-button>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-button variant="tertiary" ondark>Tertiary</auro-button>
  <auro-button variant="tertiary" ondark disabled>Tertiary</auro-button>

  ```

</auro-accordion>

## Pass a function to button

These examples illustrate a common use case where a user will want to pass a function into a button to support a click event. See the code examples for how this is achieved.

<div class="exampleWrapper auro_containedButtons">
  <auro-button onclick="alert('YOU CLICKED ME!');">Primary</auro-button>
  <auro-button disabled onclick="alert('YOU CLICKED ME!');">Primary</auro-button>
  <auro-button loading onclick="alert('YOU CLICKED ME!');">Primary</auro-button>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-button onclick="alert('YOU CLICKED ME!');">Primary</auro-button>
  <auro-button disabled onclick="alert('YOU CLICKED ME!');">Primary</auro-button>
  <auro-button loading onclick="alert('YOU CLICKED ME!');">Primary</auro-button>

  ```

</auro-accordion>

## Do's and don'ts

Don't combine `disabled` and `loading` attributes on any single instance of `auro-button`. An `auro-button` with `loading` *is* affectively a disabled instance. There is no need for both.

<auro-alerts error noIcon>

  <div class="exampleWrapper">
    <auro-button loading disabled>Primary</auro-button>
  </div>

</auro-alerts>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-button loading disabled>Primary</auro-button>
```
</auro-accordion>

<auro-alerts success noIcon>
  <div class="exampleWrapper">
    <auro-button loading>Primary</auro-button>
  </div>
</auro-alerts>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-button loading>Primary</auro-button>
```
</auro-accordion>

</auro-accordion>
