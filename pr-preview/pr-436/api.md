<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-button

An accessible button that lets people take an action, such as submitting a form,
starting a task, or moving to the next step in a flow. It's the standard button for
Auro interfaces.

**Key capabilities**
- **Variants**: `variant` sets five levels of visual emphasis, from `primary` (the main
  action on the page) through `secondary`, `tertiary`, and `ghost`, down to `flat` (text only).
- **Shapes and sizes**: `shape` sets `rounded` or `pill` for text buttons, and `circle` or
  `square` for an icon or short text, such as a count; `size` sets five sizes (`xs`–`xl`).
- **Light and dark backgrounds**: `appearance="inverse"` switches to colors designed for
  dark backgrounds.
- **Loading state**: `loading` swaps the label for a loading indicator and blocks clicks
  while work is in progress, without changing the button's width.
- **Forms**: `type="submit"` submits the form the button is placed in, and `type="reset"`
  resets an `<auro-form>`.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-button variant="primary"&gt;Submit&lt;/auro-button&gt;</code></pre>

### Properties & Attributes

| Properties     | Attributes  | Modifiers | Type                                                        | Default      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------- | ----------- | --------- | ----------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance     | appearance  |           | "default" \| "inverse"                                      | `default`    | Sets the component's colors for the background it sits on. Use `inverse` on dark backgrounds and `default` on light ones.                                                                                                                                                                                                                                                                                                                                                   |
| autofocus      | autofocus   |           | boolean                                                     | `false`      | Moves keyboard focus to the button when the page loads. Use sparingly: moving focus without warning can disorient keyboard and screen reader users.                                                                                                                                                                                                                                                                                                                         |
| disabled       | disabled    |           | boolean                                                     | `false`      | Turns the button off. A disabled button is shown in a muted style and can't be clicked or reached with the keyboard.                                                                                                                                                                                                                                                                                                                                                        |
| fluid          | fluid       |           | boolean                                                     | `false`      | Stretches the button to fill the full width of its container.                                                                                                                                                                                                                                                                                                                                                                                                               |
| formAssociated |             | readonly  | boolean                                                     |              | Checks whether the button can take part in a form. It always returns true, which turns on form association for `auro-button`.                                                                                                                                                                                                                                                                                                                                               |
| loading        | loading     |           | boolean                                                     | `false`      | Shows a loading indicator in place of the label and blocks clicks until it's turned off. The button keeps its width, so the layout doesn't shift. Use the `ariaLabel.loading` slot to tell screen reader users what's happening.                                                                                                                                                                                                                                            |
| shape          | shape       |           | "rounded" \| "pill" \| "circle" \| "square"                 | `rounded`    | Sets the button's shape. Use `rounded` (the default) or `pill` for buttons with a text label, and `circle` or `square` for an icon (an `<auro-icon>`, an `<svg>`, or an `<img>`) or short text, such as a count. When an icon is slotted, `circle` and `square` buttons show only the icon and visually hide any text beside it, so they need an accessible name from the `ariaLabel` slot or the `aria-label` attribute unless that hidden text says what the button does. |
| size           | size        |           | "xs" \| "sm" \| "md" \| "lg" \| "xl"                        | `md`         | Sets the button's size, from `xs` (smallest) to `xl` (largest). Size controls the button's height, padding, and label text size.                                                                                                                                                                                                                                                                                                                                            |
| static         | static      |           | boolean                                                     | `false`      | Displays the button's styling without any button behavior. A static button can't be focused, doesn't submit a native `<form>`, and isn't announced as a button by screen readers. When the button sits inside another clickable element, such as a linked card, use a static button. Give that element an accessible name, because a name set on a static button isn't reliably read.                                                                                       |
| tIndex         | tindex      |           | number                                                      |              | Sets the button's position in the keyboard tab order (the inner element's `tabindex`). Use `-1` to remove the button from the tab order. Ignored when `static` is set.                                                                                                                                                                                                                                                                                                      |
| title          | title       |           | string                                                      |              | Sets the tooltip text the browser shows when a mouse pointer rests on the button, such as more detail about what the button does (the `title` attribute). Keyboard and touch users never see it, so don't use it for essential information.                                                                                                                                                                                                                                 |
| type           | type        |           | "submit" \| "reset" \| "button"                             |              | Sets what the button does in a form. `submit` submits the form the button is placed in, whether it's a native `<form>` or an `<auro-form>`, and `reset` resets the fields of an `<auro-form>` but has no effect in a native `<form>`. When the button runs its own action, leave it unset or use `button`.                                                                                                                                                                  |
| variant        | variant     |           | "primary" \| "secondary" \| "tertiary" \| "ghost" \| "flat" | `primary`    | Sets the button's visual emphasis. Use `primary` for the single most important action in a view, `secondary` for supporting actions, and `tertiary`, `ghost`, or `flat` for progressively quieter actions. `flat` shows only the label, with no background or border. A flat button with a `rounded` or `pill` shape doesn't currently show a focus ring, so use `flat` only with `circle` or `square`.                                                                     |
| loadingText    | loadingtext |           | string                                                      | `Loading...` | Deprecated: Use `slot="ariaLabel.loading"` instead.<br>Sets the text screen readers announce while the button is loading.                                                                                                                                                                                                                                                                                                                                                   |
| onDark         | ondark      |           | boolean                                                     | `false`      | Deprecated: Use `appearance="inverse"` instead.<br>Switches the component to colors designed for dark backgrounds.                                                                                                                                                                                                                                                                                                                                                          |
| tabindex       | tabindex    |           | string                                                      |              | Deprecated: Use `tIndex` instead.<br>Sets the button's position in the keyboard tab order. Set it as a property, with a leading `.` in Lit templates, because a `tabindex` attribute on the host element can add a second tab stop.                                                                                                                                                                                                                                         |

### Methods

| Name     | Parameters                                                                      | Return | Description                                                                                                                                                                                                                                                                 |
| -------- | ------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| focus    | `options` (FocusOptions) - The options passed to the inner element's `focus()`. | void   | Moves keyboard focus to the inner `<button>` element, or to the inner `<a>` element when `auro-hyperlink` renders the button as a link. Does nothing before the button first renders, when `static` is set, or when `disabled` or `loading` turns off the inner `<button>`. |
| register | `name` (string) - The tag name to register the element under.                   |        | Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-button` on the same page.                                                                                                                 |

### Slots

| Name              | Description                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (default)         | The button's visible label: text, an icon (an `<auro-icon>`, an `<svg>`, or an `<img>`), or both. Set `aria-hidden="true"` on a slotted `<svg>`, and `alt=""` on a slotted `<img>`, so screen readers skip it and read only the button's name. In `circle` and `square` buttons, an icon wrapped in another element still counts as the icon, but only an icon slotted directly is sized to the icon size. |
| ariaLabel         | Text read by screen readers in place of the visible label, for example "Save to favorites". Needed when a `circle` or `square` button shows only an icon or a count, unless the host has an `aria-label` or text visually hidden beside the icon already says what the button does. Without it, screen readers read the host's `aria-label`, or the visible label if there's none.                         |
| ariaLabel.loading | Text read by screen readers in place of the visible label while the button is loading, for example "Saving your changes". Defaults to "Loading...".                                                                                                                                                                                                                                                        |

### CSS Shadow Parts

| Name           | Description                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------------------- |
| button         | The inner `<button>` element (a `<span>` when `static` is set).                                                       |
| contentWrapper | The element wrapping all of the button's content. It's hidden, but still takes up space, while the button is loading. |
| loader         | The loading indicator shown while `loading` is set.                                                                   |
| text           | The element wrapping the button's label.                                                                              |

### CSS Custom Properties

| Name                                | Description                                                                                                                                                                            |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --ds-auro-button-border-color       | Border color of a `secondary` button, and of the thin outer edge of the focus ring on a `primary` button. Other variants don't show a border.                                          |
| --ds-auro-button-border-inset-color | Color of the inner ring shown when the button has focus.                                                                                                                               |
| --ds-auro-button-container-color    | Background color of the button. The `flat` variant doesn't use it.                                                                                                                     |
| --ds-auro-button-container-image    | Color of a layer painted over the background color, which hides it. When you change `--ds-auro-button-container-color`, set this to the same value. The `flat` variant doesn't use it. |
| --ds-auro-button-loader-color       | Color of the loading indicator.                                                                                                                                                        |
| --ds-auro-button-text-color         | Color of the button's label text. The `flat` variant doesn't use it.                                                                                                                   |
<!-- AURO-GENERATED-CONTENT:END -->

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

<pre class="language-html"><code class="language-html">&lt;auro-button&gt;Primary&lt;/auro-button&gt;
&lt;auro-button variant="secondary"&gt;Secondary&lt;/auro-button&gt;
&lt;auro-button variant="tertiary"&gt;Tertiary&lt;/auro-button&gt;
&lt;auro-button variant="ghost"&gt;Ghost&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Tab index

Use `tIndex` to set the button's position in the keyboard tab order, such as `-1` to remove it from the tab order. Don't use `tabindex`: it's deprecated, and a `tabindex` attribute on the host element can add a second tab stop for keyboard users.

### Inverse

On dark backgrounds, set `appearance="inverse"` to switch to colors designed for them.

<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/inverse.html) -->
<!-- The below content is automatically added from ./../apiExamples/inverse.html -->
<auro-button appearance="inverse">Primary</auro-button>
<auro-button variant="secondary" appearance="inverse">Secondary</auro-button>
<auro-button variant="tertiary" appearance="inverse">Tertiary</auro-button>
<auro-button variant="ghost" appearance="inverse">Ghost</auro-button>
<br /><br/>
<auro-button appearance="inverse" shape="circle" size="xl">
<span slot="ariaLabel">Save to favorites</span>
<auro-icon customColor category="interface" name="heart-filled"></auro-icon>
</auro-button>
<auro-button appearance="inverse" shape="circle" size="lg" variant="secondary">
<span slot="ariaLabel">Save to favorites</span>
<auro-icon customColor category="interface" name="heart-filled"></auro-icon>
</auro-button>
<auro-button appearance="inverse" shape="circle" size="md" variant="tertiary">
<span slot="ariaLabel">Save to favorites</span>
<auro-icon customColor category="interface" name="heart-filled"></auro-icon>
</auro-button>
<auro-button appearance="inverse" shape="circle" size="sm" variant="ghost">
<span slot="ariaLabel">Save to favorites</span>
<auro-icon customColor category="interface" name="heart-filled"></auro-icon>
</auro-button>
<auro-button appearance="inverse" shape="circle" size="xs" variant="flat">
<span slot="ariaLabel">Save to favorites</span>
<auro-icon customColor category="interface" name="heart-filled"></auro-icon>
</auro-button>
<br /><br/>
<auro-button appearance="inverse" shape="square" size="xl">
<span slot="ariaLabel">Save to favorites</span>
<auro-icon customColor category="interface" name="heart-filled"></auro-icon>
</auro-button>
<auro-button appearance="inverse" shape="square" size="lg" variant="secondary">
<span slot="ariaLabel">Save to favorites</span>
<auro-icon customColor category="interface" name="heart-filled"></auro-icon>
</auro-button>
<auro-button appearance="inverse" shape="square" size="md" variant="tertiary">
<span slot="ariaLabel">Save to favorites</span>
<auro-icon customColor category="interface" name="heart-filled"></auro-icon>
</auro-button>
<auro-button appearance="inverse" shape="square" size="sm" variant="ghost">
<span slot="ariaLabel">Save to favorites</span>
<auro-icon customColor category="interface" name="heart-filled"></auro-icon>
</auro-button>
<auro-button appearance="inverse" shape="square" size="xs" variant="flat">
<span slot="ariaLabel">Save to favorites</span>
<auro-icon customColor category="interface" name="heart-filled"></auro-icon>
</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/inverse.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button appearance="inverse"&gt;Primary&lt;/auro-button&gt;
&lt;auro-button variant="secondary" appearance="inverse"&gt;Secondary&lt;/auro-button&gt;
&lt;auro-button variant="tertiary" appearance="inverse"&gt;Tertiary&lt;/auro-button&gt;
&lt;auro-button variant="ghost" appearance="inverse"&gt;Ghost&lt;/auro-button&gt;
&#10;&lt;br /&gt;&lt;br/&gt;
&#10;&lt;auro-button appearance="inverse" shape="circle" size="xl"&gt;
  &lt;span slot="ariaLabel"&gt;Save to favorites&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button appearance="inverse" shape="circle" size="lg" variant="secondary"&gt;
  &lt;span slot="ariaLabel"&gt;Save to favorites&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button appearance="inverse" shape="circle" size="md" variant="tertiary"&gt;
  &lt;span slot="ariaLabel"&gt;Save to favorites&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button appearance="inverse" shape="circle" size="sm" variant="ghost"&gt;
  &lt;span slot="ariaLabel"&gt;Save to favorites&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button appearance="inverse" shape="circle" size="xs" variant="flat"&gt;
  &lt;span slot="ariaLabel"&gt;Save to favorites&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&#10;&lt;br /&gt;&lt;br/&gt;
&#10;&lt;auro-button appearance="inverse" shape="square" size="xl"&gt;
  &lt;span slot="ariaLabel"&gt;Save to favorites&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button appearance="inverse" shape="square" size="lg" variant="secondary"&gt;
  &lt;span slot="ariaLabel"&gt;Save to favorites&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button appearance="inverse" shape="square" size="md" variant="tertiary"&gt;
  &lt;span slot="ariaLabel"&gt;Save to favorites&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button appearance="inverse" shape="square" size="sm" variant="ghost"&gt;
  &lt;span slot="ariaLabel"&gt;Save to favorites&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button appearance="inverse" shape="square" size="xs" variant="flat"&gt;
  &lt;span slot="ariaLabel"&gt;Save to favorites&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Disabled

Use the `disabled` attribute to turn the button off. A disabled button is shown in a muted style and can't be clicked or reached with the keyboard.

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

<pre class="language-html"><code class="language-html">&lt;auro-button disabled&gt;Primary&lt;/auro-button&gt;
&lt;auro-button variant="secondary" disabled&gt;Secondary&lt;/auro-button&gt;
&lt;auro-button variant="tertiary" disabled&gt;Tertiary&lt;/auro-button&gt;
&lt;auro-button variant="ghost" disabled&gt;Ghost&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled-inverse.html) -->
<!-- The below content is automatically added from ./../apiExamples/disabled-inverse.html -->
<auro-button disabled appearance="inverse">Primary</auro-button>
<auro-button variant="secondary" disabled appearance="inverse">Secondary</auro-button>
<auro-button variant="tertiary" disabled appearance="inverse">Tertiary</auro-button>
<auro-button variant="ghost" disabled appearance="inverse">Ghost</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disabled-inverse.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button disabled appearance="inverse"&gt;Primary&lt;/auro-button&gt;
&lt;auro-button variant="secondary" disabled appearance="inverse"&gt;Secondary&lt;/auro-button&gt;
&lt;auro-button variant="tertiary" disabled appearance="inverse"&gt;Tertiary&lt;/auro-button&gt;
&lt;auro-button variant="ghost" disabled appearance="inverse"&gt;Ghost&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Static

Use the `static` attribute to show the button's styling without any button behavior. A static button can't be focused, doesn't submit a native `<form>`, and isn't announced as a button by screen readers. When the button sits inside another clickable element, such as a linked card or slide, use a static button.

A static button renders a `<span>`, where screen readers don't reliably read an accessible name, so give the clickable element that contains it a name instead. A static `circle` or `square` button doesn't need an `ariaLabel` slot.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/static.html) -->
<!-- The below content is automatically added from ./../apiExamples/static.html -->
<auro-button static>Static primary button</auro-button>
<auro-button static variant="secondary">Static secondary button</auro-button>
<auro-button static variant="tertiary">Static tertiary button</auro-button>
<br><br>
<auro-button static fluid>Static fluid button</auro-button>
<br><br>
<auro-button static size="xs">Extra small static</auro-button>
<auro-button static size="sm">Small static</auro-button>
<auro-button static size="md">Medium static</auro-button>
<auro-button static size="lg">Large static</auro-button>
<auro-button static size="xl">Extra large static</auro-button>
<br><br>
<auro-button static shape="pill">
<auro-icon category="interface" name="home-filled" customColor></auro-icon>
    Static pill with icon
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

<pre class="language-html"><code class="language-html">&lt;auro-button static&gt;Static primary button&lt;/auro-button&gt;
&lt;auro-button static variant="secondary"&gt;Static secondary button&lt;/auro-button&gt;
&lt;auro-button static variant="tertiary"&gt;Static tertiary button&lt;/auro-button&gt;
&#10;&lt;br&gt;&lt;br&gt;
&#10;&lt;auro-button static fluid&gt;Static fluid button&lt;/auro-button&gt;
&#10;&lt;br&gt;&lt;br&gt;
&#10;&lt;auro-button static size="xs"&gt;Extra small static&lt;/auro-button&gt;
&lt;auro-button static size="sm"&gt;Small static&lt;/auro-button&gt;
&lt;auro-button static size="md"&gt;Medium static&lt;/auro-button&gt;
&lt;auro-button static size="lg"&gt;Large static&lt;/auro-button&gt;
&lt;auro-button static size="xl"&gt;Extra large static&lt;/auro-button&gt;
&#10;&lt;br&gt;&lt;br&gt;
&#10;&lt;auro-button static shape="pill"&gt;
  &lt;auro-icon category="interface" name="home-filled" customColor&gt;&lt;/auro-icon&gt;
  Static pill with icon
&lt;/auro-button&gt;
&#10;&lt;auro-button static shape="circle"&gt;
  &lt;auro-icon category="interface" name="home-filled" customColor&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&#10;&lt;auro-button static shape="square"&gt;
  &lt;auro-icon category="interface" name="home-filled" customColor&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/static-inverse.html) -->
<!-- The below content is automatically added from ./../apiExamples/static-inverse.html -->
<auro-button static appearance="inverse">Static primary button</auro-button>
<auro-button static variant="secondary" appearance="inverse">Static secondary button</auro-button>
<auro-button static variant="tertiary" appearance="inverse">Static tertiary button</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/static-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/static-inverse.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button static appearance="inverse"&gt;Static primary button&lt;/auro-button&gt;
&lt;auro-button static variant="secondary" appearance="inverse"&gt;Static secondary button&lt;/auro-button&gt;
&lt;auro-button static variant="tertiary" appearance="inverse"&gt;Static tertiary button&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Size

Use the `size` attribute to set the button's height, padding, and label text size, from `xs` (smallest) to `xl` (largest). The default is `md`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/size.html) -->
<!-- The below content is automatically added from ./../apiExamples/size.html -->
<auro-button size="xs">Extra small</auro-button>
<auro-button size="sm">Small</auro-button>
<auro-button size="md">Medium</auro-button>
<auro-button size="lg">Large</auro-button>
<auro-button size="xl">Extra large</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/size.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/size.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button size="xs"&gt;Extra small&lt;/auro-button&gt;
&lt;auro-button size="sm"&gt;Small&lt;/auro-button&gt;
&lt;auro-button size="md"&gt;Medium&lt;/auro-button&gt;
&lt;auro-button size="lg"&gt;Large&lt;/auro-button&gt;
&lt;auro-button size="xl"&gt;Extra large&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Shape

Use the `shape` attribute to set the button's outline: `rounded` (the default), `pill`, `circle`, or `square`.

Use `rounded` or `pill` for buttons with a text label. They grow to fit their content.

Use `circle` or `square` for a single icon or for short text, such as a count. These shapes always have equal width and height. Text shows only when no icon is slotted; otherwise, only the icon shows. An `<auro-icon>`, `<svg>`, or `<img>` counts as an icon whether it's slotted directly or wrapped in another element. The button sizes a slotted icon to the icon size and fills an `<svg>` with the button's text color, but it can't resize an icon inside a wrapper or recolor an `<img>`, so slot the icon directly. Because an icon or a number alone doesn't say what the button does, give these buttons an accessible name with the `ariaLabel` slot or the `aria-label` attribute. A static button is the exception; see [Static](#static).

#### Rounded

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-rounded.html) -->
<!-- The below content is automatically added from ./../apiExamples/shape-rounded.html -->
<auro-button shape="rounded" size="xl">Primary</auro-button>
<auro-button shape="rounded" size="lg">Primary</auro-button>
<auro-button shape="rounded" size="md">Primary</auro-button>
<auro-button shape="rounded" size="sm">Primary</auro-button>
<auro-button shape="rounded" size="xs">Primary</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-rounded.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/shape-rounded.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button shape="rounded" size="xl"&gt;Primary&lt;/auro-button&gt;
&lt;auro-button shape="rounded" size="lg"&gt;Primary&lt;/auro-button&gt;
&lt;auro-button shape="rounded" size="md"&gt;Primary&lt;/auro-button&gt;
&lt;auro-button shape="rounded" size="sm"&gt;Primary&lt;/auro-button&gt;
&lt;auro-button shape="rounded" size="xs"&gt;Primary&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Show text on hover and focus

To show a label next to an icon only when people point at or focus the button, switch `shape` between `circle` and `pill`. A `circle` button hides its label and shows only the icon; a `pill` button shows both. This example switches on `mouseover` and `mouseout` for mouse users, and on `focusin` and `focusout` for keyboard users. The label stays visible while the button is hovered or focused, and hides only when it's neither. Screen readers still read the hidden label, so the button doesn't need an `ariaLabel` slot.

Use `<auro-icon>` for the icon in this pattern. A `circle` or `square` button sizes a slotted `<svg>` to the icon size and fills it with the button's text color, but `rounded` and `pill` buttons leave its size and fill alone, so the `<svg>` changes size and color when the shape changes. To keep a slotted `<svg>` the same in both shapes, set its size with page CSS and give it a `fill` attribute.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/toggled-text.html) -->
<!-- The below content is automatically added from ./../apiExamples/toggled-text.html -->
<auro-button shape="circle" id="toggledTextElem">
<span>Back to top</span>
<auro-icon customColor category="interface" name="arrow-up"></auro-icon>
</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/toggled-text.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/toggled-text.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button shape="circle" id="toggledTextElem"&gt;
  &lt;span&gt;Back to top&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="arrow-up"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/toggled-text.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/toggled-text.js -->

<pre class="language-js"><code class="language-js">export function toggledTextExample() {
  const toggledTextElem = document.querySelector("#toggledTextElem");
&#10;  // Track hover and focus separately so the label stays visible while either is active
  let isHovered = false;
  let hasFocus = false;
&#10;  const updateShape = () =&gt; {
    toggledTextElem.shape = isHovered || hasFocus ? "pill" : "circle";
  };
&#10;  // The mouseover and mouseout events are to simulate toggling text for mouse users
  toggledTextElem.addEventListener("mouseover", () =&gt; {
    isHovered = true;
    updateShape();
  });
&#10;  toggledTextElem.addEventListener("mouseout", () =&gt; {
    isHovered = false;
    updateShape();
  });
&#10;  // The focusin and focusout events are to simulate toggling text for keyboard users
  toggledTextElem.addEventListener("focusin", () =&gt; {
    hasFocus = true;
    updateShape();
  });
&#10;  toggledTextElem.addEventListener("focusout", () =&gt; {
    hasFocus = false;
    updateShape();
  });
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Pill

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

<pre class="language-html"><code class="language-html">&lt;auro-button shape="pill" size="xl"&gt;Primary&lt;/auro-button&gt;
&lt;auro-button shape="pill" size="lg"&gt;Primary&lt;/auro-button&gt;
&lt;auro-button shape="pill" size="md"&gt;Primary&lt;/auro-button&gt;
&lt;auro-button shape="pill" size="sm"&gt;Primary&lt;/auro-button&gt;
&lt;auro-button shape="pill" size="xs"&gt;Primary&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Circle

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-circle.html) -->
<!-- The below content is automatically added from ./../apiExamples/shape-circle.html -->
<auro-button shape="circle" size="xl">
<span slot="ariaLabel">Go to the home page</span>
<auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button shape="circle" size="lg">
<span slot="ariaLabel">Go to the home page</span>
<auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button shape="circle" size="md">
<span slot="ariaLabel">Go to the home page</span>
<auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button shape="circle" size="sm">
<span slot="ariaLabel">Go to the home page</span>
<auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button shape="circle" size="xs">
<span slot="ariaLabel">Go to the home page</span>
<auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-circle.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/shape-circle.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button shape="circle" size="xl"&gt;
  &lt;span slot="ariaLabel"&gt;Go to the home page&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="home-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button shape="circle" size="lg"&gt;
  &lt;span slot="ariaLabel"&gt;Go to the home page&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="home-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button shape="circle" size="md"&gt;
  &lt;span slot="ariaLabel"&gt;Go to the home page&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="home-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button shape="circle" size="sm"&gt;
  &lt;span slot="ariaLabel"&gt;Go to the home page&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="home-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button shape="circle" size="xs"&gt;
  &lt;span slot="ariaLabel"&gt;Go to the home page&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="home-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Circle with text

Use short text, such as a count, in place of an icon, and describe the button in the `ariaLabel` slot.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-circle-text.html) -->
<!-- The below content is automatically added from ./../apiExamples/shape-circle-text.html -->
<auro-button shape="circle" size="xl">
<span slot="ariaLabel">View cart, 1 item</span>
    1
</auro-button>
<auro-button shape="circle" size="lg">
<span slot="ariaLabel">View cart, 1 item</span>
    1
</auro-button>
<auro-button shape="circle" size="md">
<span slot="ariaLabel">View cart, 1 item</span>
    1
</auro-button>
<auro-button shape="circle" size="sm">
<span slot="ariaLabel">View cart, 1 item</span>
    1
</auro-button>
<auro-button shape="circle" size="xs">
<span slot="ariaLabel">View cart, 1 item</span>
    1
</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-circle-text.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/shape-circle-text.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button shape="circle" size="xl"&gt;
  &lt;span slot="ariaLabel"&gt;View cart, 1 item&lt;/span&gt;
  1
&lt;/auro-button&gt;
&lt;auro-button shape="circle" size="lg"&gt;
  &lt;span slot="ariaLabel"&gt;View cart, 1 item&lt;/span&gt;
  1
&lt;/auro-button&gt;
&lt;auro-button shape="circle" size="md"&gt;
  &lt;span slot="ariaLabel"&gt;View cart, 1 item&lt;/span&gt;
  1
&lt;/auro-button&gt;
&lt;auro-button shape="circle" size="sm"&gt;
  &lt;span slot="ariaLabel"&gt;View cart, 1 item&lt;/span&gt;
  1
&lt;/auro-button&gt;
&lt;auro-button shape="circle" size="xs"&gt;
  &lt;span slot="ariaLabel"&gt;View cart, 1 item&lt;/span&gt;
  1
&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Circle with an SVG

To use your own graphic in place of an Auro icon, put an `<svg>` directly in the button. The button sizes it to match an Auro icon at the same button size and fills it with the button's text color, unless the `<svg>` sets its own `fill`. Set `aria-hidden="true"` on the `<svg>` so screen readers skip it, and describe the button in the `ariaLabel` slot.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-circle-svg.html) -->
<!-- The below content is automatically added from ./../apiExamples/shape-circle-svg.html -->
<auro-button shape="circle" size="xl">
<span slot="ariaLabel">Add a passenger</span>
<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
<path d="M11 5h2v14h-2zM5 11h14v2H5z" />
</svg>
</auro-button>
<auro-button shape="circle" size="lg">
<span slot="ariaLabel">Add a passenger</span>
<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
<path d="M11 5h2v14h-2zM5 11h14v2H5z" />
</svg>
</auro-button>
<auro-button shape="circle" size="md">
<span slot="ariaLabel">Add a passenger</span>
<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
<path d="M11 5h2v14h-2zM5 11h14v2H5z" />
</svg>
</auro-button>
<auro-button shape="circle" size="sm">
<span slot="ariaLabel">Add a passenger</span>
<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
<path d="M11 5h2v14h-2zM5 11h14v2H5z" />
</svg>
</auro-button>
<auro-button shape="circle" size="xs">
<span slot="ariaLabel">Add a passenger</span>
<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
<path d="M11 5h2v14h-2zM5 11h14v2H5z" />
</svg>
</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-circle-svg.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/shape-circle-svg.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button shape="circle" size="xl"&gt;
  &lt;span slot="ariaLabel"&gt;Add a passenger&lt;/span&gt;
  &lt;svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"&gt;
    &lt;path d="M11 5h2v14h-2zM5 11h14v2H5z" /&gt;
  &lt;/svg&gt;
&lt;/auro-button&gt;
&lt;auro-button shape="circle" size="lg"&gt;
  &lt;span slot="ariaLabel"&gt;Add a passenger&lt;/span&gt;
  &lt;svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"&gt;
    &lt;path d="M11 5h2v14h-2zM5 11h14v2H5z" /&gt;
  &lt;/svg&gt;
&lt;/auro-button&gt;
&lt;auro-button shape="circle" size="md"&gt;
  &lt;span slot="ariaLabel"&gt;Add a passenger&lt;/span&gt;
  &lt;svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"&gt;
    &lt;path d="M11 5h2v14h-2zM5 11h14v2H5z" /&gt;
  &lt;/svg&gt;
&lt;/auro-button&gt;
&lt;auro-button shape="circle" size="sm"&gt;
  &lt;span slot="ariaLabel"&gt;Add a passenger&lt;/span&gt;
  &lt;svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"&gt;
    &lt;path d="M11 5h2v14h-2zM5 11h14v2H5z" /&gt;
  &lt;/svg&gt;
&lt;/auro-button&gt;
&lt;auro-button shape="circle" size="xs"&gt;
  &lt;span slot="ariaLabel"&gt;Add a passenger&lt;/span&gt;
  &lt;svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"&gt;
    &lt;path d="M11 5h2v14h-2zM5 11h14v2H5z" /&gt;
  &lt;/svg&gt;
&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Square

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-square.html) -->
<!-- The below content is automatically added from ./../apiExamples/shape-square.html -->
<auro-button shape="square" size="xl">
<span slot="ariaLabel">Go to the home page</span>
<auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button shape="square" size="lg">
<span slot="ariaLabel">Go to the home page</span>
<auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button shape="square" size="md">
<span slot="ariaLabel">Go to the home page</span>
<auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button shape="square" size="sm">
<span slot="ariaLabel">Go to the home page</span>
<auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<auro-button shape="square" size="xs">
<span slot="ariaLabel">Go to the home page</span>
<auro-icon customColor category="interface" name="home-filled"></auro-icon>
</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-square.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/shape-square.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button shape="square" size="xl"&gt;
  &lt;span slot="ariaLabel"&gt;Go to the home page&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="home-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button shape="square" size="lg"&gt;
  &lt;span slot="ariaLabel"&gt;Go to the home page&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="home-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button shape="square" size="md"&gt;
  &lt;span slot="ariaLabel"&gt;Go to the home page&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="home-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button shape="square" size="sm"&gt;
  &lt;span slot="ariaLabel"&gt;Go to the home page&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="home-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button shape="square" size="xs"&gt;
  &lt;span slot="ariaLabel"&gt;Go to the home page&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="home-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Variant

Use the `variant` attribute to set the button's visual emphasis. Use `primary` (the default) for the single most important action in a view, `secondary` for supporting actions, and `tertiary`, `ghost`, or `flat` for progressively quieter actions.

`flat` shows only the label, with no background or border. Use it only for `circle` or `square` buttons that need no visible styling until they have focus, such as the close button on a dialog or the clear button in a form field. A flat button with a `rounded` or `pill` shape doesn't currently show a focus ring.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant.html) -->
<!-- The below content is automatically added from ./../apiExamples/variant.html -->
<auro-button variant="primary">Primary</auro-button>
<auro-button variant="secondary">Secondary</auro-button>
<auro-button variant="tertiary">Tertiary</auro-button>
<auro-button variant="ghost">Ghost</auro-button>
<auro-button variant="flat" shape="circle">
<span slot="ariaLabel">Save to favorites</span>
<auro-icon customColor category="interface" name="heart-filled"></auro-icon>
</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/variant.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button variant="primary"&gt;Primary&lt;/auro-button&gt;
&lt;auro-button variant="secondary"&gt;Secondary&lt;/auro-button&gt;
&lt;auro-button variant="tertiary"&gt;Tertiary&lt;/auro-button&gt;
&lt;auro-button variant="ghost"&gt;Ghost&lt;/auro-button&gt;
&lt;auro-button variant="flat" shape="circle"&gt;
  &lt;span slot="ariaLabel"&gt;Save to favorites&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Fluid

Use the `fluid` attribute to stretch the button to fill the full width of its container.

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

<pre class="language-html"><code class="language-html">&lt;auro-button fluid&gt;Primary&lt;/auro-button&gt;
&lt;auro-button variant="secondary" fluid&gt;Secondary&lt;/auro-button&gt;
&lt;auro-button variant="tertiary" fluid&gt;Tertiary&lt;/auro-button&gt;
&lt;auro-button variant="ghost" fluid&gt;Ghost&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Right aligned

When a button that shows text on hover and focus is right-aligned, it grows and shrinks from its right edge. Like the earlier example, this one switches `shape` between `circle` and `pill` on `mouseover` and `mouseout` for mouse users, and on `focusin` and `focusout` for keyboard users.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/right-align.html) -->
<!-- The below content is automatically added from ./../apiExamples/right-align.html -->
<div style="display: flex; justify-content: flex-end; align-items: center; width: 100%">
<auro-button shape="circle" id="rightAlignElem">
<span>Back to top</span>
<auro-icon customColor category="interface" name="arrow-up"></auro-icon>
</auro-button>
</div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/right-align.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/right-align.html -->

<pre class="language-html"><code class="language-html">&lt;div style="display: flex; justify-content: flex-end; align-items: center; width: 100%"&gt;
  &lt;auro-button shape="circle" id="rightAlignElem"&gt;
    &lt;span&gt;Back to top&lt;/span&gt;
    &lt;auro-icon customColor category="interface" name="arrow-up"&gt;&lt;/auro-icon&gt;
  &lt;/auro-button&gt;
&lt;/div&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/right-align.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/right-align.js -->

<pre class="language-js"><code class="language-js">export function roundedRightAlignExample() {
  const rightAlignElem = document.querySelector("#rightAlignElem");
&#10;  // Track hover and focus separately so the label stays visible while either is active
  let isHovered = false;
  let hasFocus = false;
&#10;  const updateShape = () =&gt; {
    rightAlignElem.shape = isHovered || hasFocus ? "pill" : "circle";
  };
&#10;  // The mouseover and mouseout events are to simulate toggling text for mouse users
  rightAlignElem.addEventListener("mouseover", () =&gt; {
    isHovered = true;
    updateShape();
  });
&#10;  rightAlignElem.addEventListener("mouseout", () =&gt; {
    isHovered = false;
    updateShape();
  });
&#10;  // The focusin and focusout events are to simulate toggling text for keyboard users
  rightAlignElem.addEventListener("focusin", () =&gt; {
    hasFocus = true;
    updateShape();
  });
&#10;  rightAlignElem.addEventListener("focusout", () =&gt; {
    hasFocus = false;
    updateShape();
  });
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Loading state

While work is in progress, such as after a form is submitted, use the `loading` attribute. It replaces the label with an animated loading indicator and turns the button off, so people can't submit the same action twice. The button keeps its width, so the layout doesn't shift. Use the `ariaLabel.loading` slot to tell screen reader users what's happening.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/loading.html) -->
<!-- The below content is automatically added from ./../apiExamples/loading.html -->
<auro-button loading>
<span slot="ariaLabel.loading">Saving your changes</span>
    Primary
</auro-button>
<auro-button variant="secondary" loading>
<span slot="ariaLabel.loading">Saving your changes</span>
    Secondary
</auro-button>
<auro-button variant="tertiary" loading>
<span slot="ariaLabel.loading">Saving your changes</span>
    Tertiary
</auro-button>
<auro-button variant="ghost" loading>
<span slot="ariaLabel.loading">Saving your changes</span>
    Ghost
</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/loading.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/loading.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button loading&gt;
  &lt;span slot="ariaLabel.loading"&gt;Saving your changes&lt;/span&gt;
  Primary
&lt;/auro-button&gt;
&lt;auro-button variant="secondary" loading&gt;
  &lt;span slot="ariaLabel.loading"&gt;Saving your changes&lt;/span&gt;
  Secondary
&lt;/auro-button&gt;
&lt;auro-button variant="tertiary" loading&gt;
  &lt;span slot="ariaLabel.loading"&gt;Saving your changes&lt;/span&gt;
  Tertiary
&lt;/auro-button&gt;
&lt;auro-button variant="ghost" loading&gt;
  &lt;span slot="ariaLabel.loading"&gt;Saving your changes&lt;/span&gt;
  Ghost
&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/loading-inverse.html) -->
<!-- The below content is automatically added from ./../apiExamples/loading-inverse.html -->
<auro-button appearance="inverse" loading>
<span slot="ariaLabel.loading">Saving your changes</span>
    Primary
</auro-button>
<auro-button variant="secondary" appearance="inverse" loading>
<span slot="ariaLabel.loading">Saving your changes</span>
    Secondary
</auro-button>
<auro-button variant="tertiary" appearance="inverse" loading>
<span slot="ariaLabel.loading">Saving your changes</span>
    Tertiary
</auro-button>
<auro-button variant="ghost" appearance="inverse" loading>
<span slot="ariaLabel.loading">Saving your changes</span>
    Ghost
</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/loading-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/loading-inverse.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button appearance="inverse" loading&gt;
  &lt;span slot="ariaLabel.loading"&gt;Saving your changes&lt;/span&gt;
  Primary
&lt;/auro-button&gt;
&lt;auro-button variant="secondary" appearance="inverse" loading&gt;
  &lt;span slot="ariaLabel.loading"&gt;Saving your changes&lt;/span&gt;
  Secondary
&lt;/auro-button&gt;
&lt;auro-button variant="tertiary" appearance="inverse" loading&gt;
  &lt;span slot="ariaLabel.loading"&gt;Saving your changes&lt;/span&gt;
  Tertiary
&lt;/auro-button&gt;
&lt;auro-button variant="ghost" appearance="inverse" loading&gt;
  &lt;span slot="ariaLabel.loading"&gt;Saving your changes&lt;/span&gt;
  Ghost
&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slot examples

### Icons

To show an icon from the Auro icons library, put an `<auro-icon>` in the button next to the label. Set `customColor` on the `<auro-icon>` so the icon uses the button's text color.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/icon.html) -->
<!-- The below content is automatically added from ./../apiExamples/icon.html -->
<auro-button>
<span>Activate Wi-Fi</span>
<auro-icon customColor category="in-flight" name="wifi"></auro-icon>
</auro-button>
<auro-button variant="secondary">
<span>Previous action</span>
<auro-icon customcolor category="interface" name="arrow-left" ></auro-icon>
</auro-button>
<auro-button variant="tertiary">
<span>Add to favorites</span>
<auro-icon customcolor category="interface" name="heart-filled" ></auro-icon>
</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/icon.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/icon.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button&gt;
  &lt;span&gt;Activate Wi-Fi&lt;/span&gt;
  &lt;auro-icon customColor category="in-flight" name="wifi"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button variant="secondary"&gt;
  &lt;span&gt;Previous action&lt;/span&gt;
  &lt;auro-icon customcolor category="interface" name="arrow-left" &gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;
&lt;auro-button variant="tertiary"&gt;
  &lt;span&gt;Add to favorites&lt;/span&gt;
  &lt;auro-icon customcolor category="interface" name="heart-filled" &gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Accessible names

#### <a name="ariaLabel"></a>`ariaLabel`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a> slots

Use the `ariaLabel` slot to give screen reader users a more descriptive name than the visible label, and the `ariaLabel.loading` slot to tell them what's happening while the button is loading.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label.html) -->
<!-- The below content is automatically added from ./../apiExamples/aria-label.html -->
<auro-button>
<span slot="ariaLabel">Pay for your trip</span>
    Pay
</auro-button>
<auro-button loading>
<span slot="ariaLabel.loading">Paying for your trip</span>
    Pay
</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-label.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/aria-label.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button&gt;
  &lt;span slot="ariaLabel"&gt;Pay for your trip&lt;/span&gt;
  Pay
&lt;/auro-button&gt;
&#10;&lt;auro-button loading&gt;
  &lt;span slot="ariaLabel.loading"&gt;Paying for your trip&lt;/span&gt;
  Pay
&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### `aria-labelledby`

Set `aria-labelledby` to the ID of another element whose text names the button. The attribute is moved from `<auro-button>` to the inner button element.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-labeledby.html) -->
<!-- The below content is automatically added from ./../apiExamples/aria-labeledby.html -->
<span id="button-label" class="util_displayHiddenVisually">Pay for your trip</span>
<auro-button aria-labelledby="button-label">Pay</auro-button>
<style>
    .util_displayHiddenVisually {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
</style>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-labeledby.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/aria-labeledby.html -->

<pre class="language-html"><code class="language-html">&lt;span id="button-label" class="util_displayHiddenVisually"&gt;Pay for your trip&lt;/span&gt;
&lt;auro-button aria-labelledby="button-label"&gt;Pay&lt;/auro-button&gt;
&#10;&lt;style&gt;
  .util_displayHiddenVisually {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
&lt;/style&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## CSS shadow part examples

### Button

The `button` part is the inner `<button>` element (a `<span>` when `static` is set).

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/part_button.html) -->
<!-- The below content is automatically added from ./../apiExamples/part_button.html -->
<auro-button id="part-button-example">Primary</auro-button>
<style>
    #part-button-example::part(button) {
      background-color: white;
      background-image: none;
      color: #333;
      border: 1px solid #119933
    }
</style>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/part_button.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/part_button.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button id="part-button-example"&gt;Primary&lt;/auro-button&gt;
&lt;style&gt;
  #part-button-example::part(button) {
    background-color: white;
    background-image: none;
    color: #333;
    border: 1px solid #119933
  }
&lt;/style&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Content wrapper

The `contentWrapper` part is the element wrapping all of the button's content. It's hidden, but still takes up space, while the button is loading.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/part_content-wrapper.html) -->
<!-- The below content is automatically added from ./../apiExamples/part_content-wrapper.html -->
<auro-button id="part-content-wrapper-example">Primary</auro-button>
<style>
    #part-content-wrapper-example::part(contentWrapper) {
      background-color: white;
      background-image: none;
      color: #333;
      border: 1px solid #119933
    }
</style>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/part_content-wrapper.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/part_content-wrapper.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button id="part-content-wrapper-example"&gt;Primary&lt;/auro-button&gt;
&lt;style&gt;
  #part-content-wrapper-example::part(contentWrapper) {
    background-color: white;
    background-image: none;
    color: #333;
    border: 1px solid #119933
  }
&lt;/style&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Text

The `text` part is the element wrapping the button's label.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/part_text.html) -->
<!-- The below content is automatically added from ./../apiExamples/part_text.html -->
<auro-button id="part-text-example">Primary</auro-button>
<style>
    #part-text-example::part(text) {
      background-color: white;
      background-image: none;
      color: #333;
      border: 1px solid #119933
    }
</style>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/part_text.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/part_text.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button id="part-text-example"&gt;Primary&lt;/auro-button&gt;
&lt;style&gt;
  #part-text-example::part(text) {
    background-color: white;
    background-image: none;
    color: #333;
    border: 1px solid #119933
  }
&lt;/style&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Loader

The `loader` part is the loading indicator shown while `loading` is set.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/part_loader.html) -->
<!-- The below content is automatically added from ./../apiExamples/part_loader.html -->
<auro-button id="part-loader-example" loading>
<span slot="ariaLabel.loading">Saving your changes</span>
    Primary
</auro-button>
<style>
    #part-loader-example::part(loader) {
      background-color: white;
      background-image: none;
      color: #333;
      border: 1px solid #119933
    }
</style>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/part_loader.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/part_loader.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button id="part-loader-example" loading&gt;
  &lt;span slot="ariaLabel.loading"&gt;Saving your changes&lt;/span&gt;
  Primary
&lt;/auro-button&gt;
&lt;style&gt;
  #part-loader-example::part(loader) {
    background-color: white;
    background-image: none;
    color: #333;
    border: 1px solid #119933
  }
&lt;/style&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common usage patterns

### Run a function on click

To run your own code when people click the button, listen for its `click` event, as this example does with `onclick`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/pass-function.html) -->
<!-- The below content is automatically added from ./../apiExamples/pass-function.html -->
<auro-button onclick="alert('You clicked me!');">Primary</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/pass-function.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/pass-function.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button onclick="alert('You clicked me!');"&gt;Primary&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Dos and don'ts

Don't set `disabled` and `loading` on the same button. A loading button is already turned off, so `disabled` isn't needed.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/do-and-dont.html) -->
<!-- The below content is automatically added from ./../apiExamples/do-and-dont.html -->
<auro-alert type="error" noIcon>
<p><strong>Don't:</strong> set <code>disabled</code> and <code>loading</code> on the same button.</p>
<auro-button loading disabled>
<span slot="ariaLabel.loading">Saving your changes</span>
      Primary
</auro-button>
</auro-alert>
<auro-alert type="success" noIcon style="padding-top: 5px;">
<p><strong>Do:</strong> set only <code>loading</code>.</p>
<auro-button loading>
<span slot="ariaLabel.loading">Saving your changes</span>
      Primary
</auro-button>
</auro-alert>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/do-and-dont.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/do-and-dont.html -->

<pre class="language-html"><code class="language-html">&lt;auro-alert type="error" noIcon&gt;
  &lt;p&gt;&lt;strong&gt;Don't:&lt;/strong&gt; set &lt;code&gt;disabled&lt;/code&gt; and &lt;code&gt;loading&lt;/code&gt; on the same button.&lt;/p&gt;
  &lt;auro-button loading disabled&gt;
    &lt;span slot="ariaLabel.loading"&gt;Saving your changes&lt;/span&gt;
    Primary
  &lt;/auro-button&gt;
&lt;/auro-alert&gt;
&lt;auro-alert type="success" noIcon style="padding-top: 5px;"&gt;
  &lt;p&gt;&lt;strong&gt;Do:&lt;/strong&gt; set only &lt;code&gt;loading&lt;/code&gt;.&lt;/p&gt;
  &lt;auro-button loading&gt;
    &lt;span slot="ariaLabel.loading"&gt;Saving your changes&lt;/span&gt;
    Primary
  &lt;/auro-button&gt;
&lt;/auro-alert&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

To restyle the button, change the values of these custom properties.

<!-- Remove section if component does not have any component specific tokens -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
&#10;:host {
  --ds-auro-button-border-color: var(--ds-advanced-color-button-primary-border, #{v.$ds-advanced-color-button-primary-border});
  --ds-auro-button-border-inset-color: var(--ds-advanced-color-state-focused-inverse, #{v.$ds-advanced-color-state-focused-inverse});
  --ds-auro-button-container-color: var(--ds-advanced-color-button-primary-background, #{v.$ds-advanced-color-button-primary-background});
  --ds-auro-button-container-image: var(--ds-advanced-color-button-primary-background, #{v.$ds-advanced-color-button-primary-background});
  --ds-auro-button-loader-color: var(--ds-advanced-color-button-primary-text, #{v.$ds-advanced-color-button-primary-text});
  --ds-auro-button-text-color: var(--ds-advanced-color-button-primary-text, #{v.$ds-advanced-color-button-primary-text});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->