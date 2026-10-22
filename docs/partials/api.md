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


## Property and attribute examples

### Tab index

Use `tIndex` to set the button's position in the keyboard tab order, such as `-1` to remove it from the tab order. Don't use `tabindex`: it's deprecated, and a `tabindex` attribute on the host element can add a second tab stop for keyboard users.

### Inverse

On dark backgrounds, set `appearance="inverse"` to switch to colors designed for them.

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

Use the `disabled` attribute to turn the button off. A disabled button is shown in a muted style and can't be clicked or reached with the keyboard.

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

Use the `static` attribute to show the button's styling without any button behavior. A static button can't be focused, doesn't submit a native `<form>`, and isn't announced as a button by screen readers. When the button sits inside another clickable element, such as a linked card or slide, use a static button.

A static button renders a `<span>`, where screen readers don't reliably read an accessible name, so give the clickable element that contains it a name instead. A static `circle` or `square` button doesn't need an `ariaLabel` slot.

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

Use the `size` attribute to set the button's height, padding, and label text size, from `xs` (smallest) to `xl` (largest). The default is `md`.

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

Use the `shape` attribute to set the button's outline: `rounded` (the default), `pill`, `circle`, or `square`.

Use `rounded` or `pill` for buttons with a text label. They grow to fit their content.

Use `circle` or `square` for a single icon or for short text, such as a count. These shapes always have equal width and height. Text shows only when no icon is slotted; otherwise, only the icon shows. An `<auro-icon>`, `<svg>`, or `<img>` counts as an icon whether it's slotted directly or wrapped in another element. The button sizes a slotted icon to the icon size and fills an `<svg>` with the button's text color, but it can't resize an icon inside a wrapper or recolor an `<img>`, so slot the icon directly. Because an icon or a number alone doesn't say what the button does, give these buttons an accessible name with the `ariaLabel` slot or the `aria-label` attribute. A static button is the exception; see [Static](#static).

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

#### Show text on hover and focus

To show a label next to an icon only when people point at or focus the button, switch `shape` between `circle` and `pill`. A `circle` button hides its label and shows only the icon; a `pill` button shows both. This example switches on `mouseover` and `mouseout` for mouse users, and on `focusin` and `focusout` for keyboard users. The label stays visible while the button is hovered or focused, and hides only when it's neither. Screen readers still read the hidden label, so the button doesn't need an `ariaLabel` slot.

Use `<auro-icon>` for the icon in this pattern. A `circle` or `square` button sizes a slotted `<svg>` to the icon size and fills it with the button's text color, but `rounded` and `pill` buttons leave its size and fill alone, so the `<svg>` changes size and color when the shape changes. To keep a slotted `<svg>` the same in both shapes, set its size with page CSS and give it a `fill` attribute.

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

#### Circle with text

Use short text, such as a count, in place of an icon, and describe the button in the `ariaLabel` slot.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-circle-text.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-circle-text.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Circle with an SVG

To use your own graphic in place of an Auro icon, put an `<svg>` directly in the button. The button sizes it to match an Auro icon at the same button size and fills it with the button's text color, unless the `<svg>` sets its own `fill`. Set `aria-hidden="true"` on the `<svg>` so screen readers skip it, and describe the button in the `ariaLabel` slot.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-circle-svg.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-circle-svg.html) -->
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

Use the `variant` attribute to set the button's visual emphasis. Use `primary` (the default) for the single most important action in a view, `secondary` for supporting actions, and `tertiary`, `ghost`, or `flat` for progressively quieter actions.

`flat` shows only the label, with no background or border. Use it only for `circle` or `square` buttons that need no visible styling until they have focus, such as the close button on a dialog or the clear button in a form field. A flat button with a `rounded` or `pill` shape doesn't currently show a focus ring.

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

Use the `fluid` attribute to stretch the button to fill the full width of its container.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/fluid.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/fluid.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Right aligned

When a button that shows text on hover and focus is right-aligned, it grows and shrinks from its right edge. Like the earlier example, this one switches `shape` between `circle` and `pill` on `mouseover` and `mouseout` for mouse users, and on `focusin` and `focusout` for keyboard users.

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

### Loading state

While work is in progress, such as after a form is submitted, use the `loading` attribute. It replaces the label with an animated loading indicator and turns the button off, so people can't submit the same action twice. The button keeps its width, so the layout doesn't shift. Use the `ariaLabel.loading` slot to tell screen reader users what's happening.

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

## Slot examples

### Icons

To show an icon from the Auro icons library, put an `<auro-icon>` in the button next to the label. Set `customColor` on the `<auro-icon>` so the icon uses the button's text color.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/icon.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/icon.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Accessible names

#### `ariaLabel` slots

Use the `ariaLabel` slot to give screen reader users a more descriptive name than the visible label, and the `ariaLabel.loading` slot to tell them what's happening while the button is loading.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-label.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### `aria-labelledby`

Set `aria-labelledby` to the ID of another element whose text names the button. The attribute is moved from `<auro-button>` to the inner button element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-labeledby.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-labeledby.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## CSS shadow part examples

### Button

The `button` part is the inner `<button>` element (a `<span>` when `static` is set).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/part_button.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/part_button.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Content wrapper

The `contentWrapper` part is the element wrapping all of the button's content. It's hidden, but still takes up space, while the button is loading.

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

The `text` part is the element wrapping the button's label.

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

The `loader` part is the loading indicator shown while `loading` is set.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/part_loader.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/part_loader.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common usage patterns

### Run a function on click

To run your own code when people click the button, listen for its `click` event, as this example does with `onclick`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/pass-function.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/pass-function.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Dos and don'ts

Don't set `disabled` and `loading` on the same button. A loading button is already turned off, so `disabled` isn't needed.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/do-and-dont.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/do-and-dont.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle with CSS custom properties

To restyle the button, change the values of these custom properties.

<!-- Remove section if component does not have any component specific tokens -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->