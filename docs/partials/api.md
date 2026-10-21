<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


## Property & Attribute Examples

### Tab Index

For `tabindex`, use `tIndex` instead to avoid duplicated focus interaction.

### Inverse

For dark backgrounds, the `inverse` attribute can be applied.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/inverse.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/inverse.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Disabled

The button can be disabled with the `disabled` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled-inverse.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled-inverse.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Static

The `static` attribute creates a button with no interactivity. When applied, the button becomes non-clickable and serves purely as a visual element. This is useful for displaying button-styled elements that need to appear interactive but should not respond to user input, such as buttons within clickable cards or slides.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/static.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/static.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/static-inverse.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/static-inverse.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Size

The size of the button can be set in t-shirt sizes from `xs` to `xl`

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/size.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/size.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Shape 

The `shape` attribute defines the shape the button should be.

If no `shape` attribute is provided, the button will default to `rounded`.

Available options are:
- `rounded`
- `pill`
- `circle`
- `square`

The `rounded` and `pill` shapes are flexible and can hold any amount of information

The `circle` and `square` shapes are always equal dimensions. These shapes support either an icon or short text such as a count (e.g. `1`). Text is only displayed when no icon is slotted; otherwise only the icon is shown. An `<auro-icon>`, `<svg>`, or `<img>` counts as an icon whether it's slotted directly or wrapped in another element. The button sizes an icon to the icon size and fills an `<svg>` with the button text color, but it can't resize an icon inside a wrapper or recolor an `<img>`. Slot the icon directly so it matches the button. A number alone is rarely a meaningful accessible name, so provide one with the `aria-label` attribute or the `ariaLabel` slot.

#### Rounded

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-rounded.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-rounded.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Rounded - Toggle Text

A `circle` or `square` button holds an icon or short text such as a count. When an icon is slotted, it shows the icon and hides any text beside it, while a `pill` or `rounded` button shows the text next to the icon. To hide and show the text, change the `shape` attribute between these values. In this example, the button switches between `circle` and `pill` on `mouseover` and `mouseout` events. The `focusin` and `focusout` events simulate toggling text for keyboard users. The text stays visible while the button is either hovered or focused, and hides only when neither is true. Screen readers still read the hidden text, so the button doesn't need an `ariaLabel` slot.

Use `<auro-icon>` for the icon in this pattern. A `circle` or `square` button sizes a slotted `<svg>` to the icon size and fills it with the button text color, but `rounded` and `pill` buttons leave the svg's own size and fill alone. So a slotted `<svg>` changes size and color when the shape changes. To keep a slotted `<svg>` the same in both shapes, set its size with page CSS and give it a `fill` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/toggled-text.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/toggled-text.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/toggled-text.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Pill

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-pill.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-pill.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Circle

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-circle.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-circle.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Circle - Text

The `circle` and `square` shapes can display short text, such as a count, in place of an icon.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-circle-text.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-circle-text.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Square

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-square.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-square.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Variant

Auro button can use several different variants, including `primary`, `secondary`, `tertiary`, `ghost`, and `flat`.

The flat variant should only be used for interface elements that should only have a focus style such as close buttons on dialogs and clear buttons on form elements.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Fluid

In the following example see how the `fluid` attributes alters the shape of the button to be full width of its parent container.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/fluid.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/fluid.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Right Aligned

This example shows a right-aligned `auro-button` that switches `shape` between `circle` and `pill` on `mouseover` and `mouseout` events. Because the button is right-aligned, it grows and shrinks from right to left as the text is shown and hidden. The `focusin` and `focusout` events simulate toggling text for keyboard users.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/right-align.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/right-align.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/right-align.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Loading State

Use the `loading` attribute to alter the content to the shimmering dots to alert the user that the button/form is in an active state. The `loading` attribute will also place the element in a disabled state to keep the user from re-submitting an action.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/loading.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/loading.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/loading-inverse.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/loading-inverse.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Slot Examples

### Icon Support

Adding icons to the auro-button component is as easy as nesting any other HTML. The auro-icon component 
has access to all the icons listed in the Auro Icons library 
for quick and easy use.

Be sure to use the customColor attribute on the `auro-icon` component to allow colors set in your parent element to pass through to the icon and `slot=icon` to properly place the `auro-icon` within the button.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/icon.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/icon.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### ARIA Support

#### Aria Label

Accessible text may be provided through the `ariaLabel` or `ariaLabel.loading` slots.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-label.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Aria Labelledby

The component supports both the `aria-labelledby` attribute for accessibility.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-labeledby.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-labeledby.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## CSS Shadow Part Examples

### Button

For buttons without a `buttonHref` attribute, the `button` part will be available.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/part_button.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/part_button.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Content Wrapper

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/part_content-wrapper.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/part_content-wrapper.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Text

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/part_text.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/part_text.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Loader

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/part_loader.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/part_loader.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common Usage Patterns & Functional Examples

### Pass a Function to Button

These examples illustrate a common use case where a user will want to pass a function into a button to support a click event. See the code examples for how this is achieved.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/pass-function.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/pass-function.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Do's and don'ts

Don't combine `disabled` and `loading` attributes on any single instance of `auro-button`. An `auro-button` with `loading` *is* affectively a disabled instance. There is no need for both.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/do-and-dont.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/do-and-dont.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- Remove section if component does not have any component specific tokens -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->