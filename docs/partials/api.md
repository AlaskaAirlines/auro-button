<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

# API Examples

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Disabled

This example demonstrates `auro-button` in it's `disabled` state.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabled.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabledOnDark.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabledOnDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Slim Style

Use the `slim` attribute with the `auro-button` element for a slim style with less padding. The slim style is used to establish the lowest level of hierarchy. Slim buttons have the least emphasis and significance on a page.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/slim.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/slim.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Icon Support

Adding icons to the auro-button component is as easy as nesting any other HTML. The auro-icon component
has access to all the icons listed in the Auro Icons library
for quick and easy use.

Be sure to use the customColor attribute on the `auro-icon` component to allow colors set in your parent element to pass through to the icon and `slot=icon` to properly place the `auro-icon` within the button.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/icon.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/icon.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Icon Only Button

Use the `iconOnly` attribute with the `auro-button` element for a style specific to having only an `auro-icon` as the button's content.

Be sure to also use the `customColor` and `customSize` attributes on the `auro-icon` component to allow colors set in your parent element to pass through to the icon.

**Recommended**: We strongly encourage the users of the icon only `auro-button` to use the `aria-label` attribute. Without this attribute, the screenreaders will not properly describe the button content to it's users.


<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/iconOnly.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/iconOnly.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Icon Only Button - Slim Style

Use the `slim` attribute along with `iconOnly` attribute on the `auro-button` element for a slimmer icon only button with less padding.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/iconOnlySlim.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/iconOnlySlim.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Rounded

Use the `rounded` attribute for an `auro-button` with rounded corners.

### No Text

Use the `rounded` attribute in conjunction with the `iconOnly` attribute for an `auro-button` that has an `auro-icon` and no text.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/rounded.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/rounded.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### With Text

This example demonstrates a `rounded` `auro-button` with text and an `auro-icon`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/roundedTextWithIcon.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/roundedTextWithIcon.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Text Only

A `rounded` `auro-button` with text only.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/roundedTextOnly.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/roundedTextOnly.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Toggle Text

The `rounded` attribute supports the ability to hide/show the text of the `auro-button`. This can be done by changing the value of the `iconOnly` attribute. In this example, the text is toggled via `mouseover` and `mouseout` events. The `focusin` and `focusout` events simulate toggling text for keyboard users.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/toggledText.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/toggledText.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/toggledText.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Right Aligned

This example shows a `rounded` `auro-button` that is right-aligned, demonstrating how the button starts from the right and grows/shrinks from right to left when using the `toggleText` attribute in conjuction with the `mouseover` and `mouseout` events. The `focusin` and `focusout` events simulate toggling text for keyboard users.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/roundedRightAlign.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/roundedRightAlign.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/roundedRightAlign.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Fluid

In the following example see how the `fluid` attributes alters the shape of the button to be full width of its parent container.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/fluid.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/fluid.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Loading State

Use the `loading` attribute to alter the content to teh shimmering dots to alert the user that the button/form is in an active state. The `loading` attribute will also place the element in a disabled state to keep the user from re-submitting an action.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/loading.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/loading.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/loadingOnDark.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/loadingOnDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

