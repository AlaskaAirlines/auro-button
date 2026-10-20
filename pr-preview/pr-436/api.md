<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-button

An accessible button that lets people take an action, such as submitting a form,
starting a task, or moving to the next step in a flow. It's the standard button for
Auro interfaces.

**Key capabilities**
- **Variants**: five levels of visual emphasis, from `primary` (the main action on the
  page) through `secondary`, `tertiary`, and `ghost`, down to `flat` (text only).
- **Shapes & sizes**: `rounded` or `pill` for text buttons, and `circle` or `square` for
  an icon or a short count, each in five sizes (`xs`–`xl`).
- **Light & dark backgrounds**: `appearance="inverse"` switches to colors designed for
  dark backgrounds.
- **Loading state**: swaps the label for a loading indicator and blocks clicks while
  work is in progress, without changing the button's width.
- **Forms**: `type="submit"` submits the form the button is placed in, and `type="reset"`
  resets an `<auro-form>`.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-button variant="primary"&gt;Submit&lt;/auro-button&gt;</code></pre>

### Properties & Attributes

| Properties     | Attributes  | Modifiers | Type                                                        | Default      | Description                                                                                                                                                                                                                                                                                                                               |
| -------------- | ----------- | --------- | ----------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance     | appearance  |           | "default" \| "inverse"                                      | `default`    | Matches the component's colors to the background it sits on. Use `inverse` on dark backgrounds and `default` on light ones.                                                                                                                                                                                                               |
| autofocus      | autofocus   |           | boolean                                                     | `false`      | Moves keyboard focus to the button when the page loads. Use sparingly: moving focus without warning can disorient keyboard and screen reader users.                                                                                                                                                                                       |
| disabled       | disabled    |           | boolean                                                     | `false`      | Turns the button off. A disabled button is shown in a muted style and can't be clicked or reached with the keyboard.                                                                                                                                                                                                                      |
| fluid          | fluid       |           | boolean                                                     | `false`      | Stretches the button to fill the full width of its container.                                                                                                                                                                                                                                                                             |
| formAssociated |             | readonly  | boolean                                                     |              | Checks whether the button takes part in the form it's placed in. Always true, which turns on form association for `auro-button`.                                                                                                                                                                                                          |
| loading        | loading     |           | boolean                                                     | `false`      | Shows a loading indicator in place of the label and blocks clicks until it is turned off. The button keeps its width, so the layout doesn't shift. Use the `ariaLabel.loading` slot to tell screen reader users what is happening.                                                                                                        |
| shape          | shape       |           | "rounded" \| "pill" \| "circle" \| "square"                 | `rounded`    | Sets the button's shape. Use `rounded` (the default) or `pill` for buttons with a text label, and `circle` or `square` for a single icon or short text, such as a count. `circle` and `square` show text only when no icon is slotted and the text isn't wrapped in an element, and they need a text alternative in the `ariaLabel` slot. |
| size           | size        |           | "xs" \| "sm" \| "md" \| "lg" \| "xl"                        | `md`         | Sets the button's size, from `xs` (smallest) to `xl` (largest). Size controls the button's height, padding, and label text size.                                                                                                                                                                                                          |
| static         | static      |           | boolean                                                     | `false`      | Displays the button's styling without any button behavior. A static button can't be clicked or focused, and screen readers don't announce it as a button. Use it when the button sits inside another clickable element, such as a linked card.                                                                                            |
| tIndex         | tindex      |           | number                                                      |              | Sets the button's position in the keyboard tab order (the inner element's `tabindex`). Use `-1` to remove the button from the tab order. Most buttons don't need this. Ignored when `static` is set.                                                                                                                                      |
| title          | title       |           | string                                                      |              | Text shown as a browser tooltip when a mouse pointer rests on the button. Keyboard and touch users never see it, so don't use it for essential information.                                                                                                                                                                               |
| type           | type        |           | "submit" \| "reset" \| "button"                             |              | Sets what the button does in a form. `submit` submits the form the button is placed in, whether it's a native `<form>` or an `<auro-form>`. `reset` resets the fields of an `<auro-form>`, but has no effect in a native `<form>`. Leave it unset, or use `button`, when the button runs its own action.                                  |
| variant        | variant     |           | "primary" \| "secondary" \| "tertiary" \| "ghost" \| "flat" | `primary`    | Sets the button's visual emphasis. Use `primary` for the single most important action in a view, `secondary` for supporting actions, and `tertiary`, `ghost`, or `flat` for progressively quieter actions. `flat` shows only the label, with no background or border.                                                                     |
| loadingText    | loadingtext |           | string                                                      | `Loading...` | Deprecated: Use `slot="ariaLabel.loading"` instead.<br>Sets the text screen readers announce while the button is loading.                                                                                                                                                                                                                 |
| onDark         | ondark      |           | boolean                                                     | `false`      | Deprecated: Use `appearance="inverse"` instead.<br>Switches the component to colors designed for dark backgrounds.                                                                                                                                                                                                                        |
| tabindex       | tabindex    |           | string                                                      |              | Deprecated: Use `tIndex` instead.<br>Sets the button's position in the keyboard tab order. Must be set as a property (with a leading `.` in Lit templates) so the `tabindex` attribute isn't left on the host element.<br>Example: `<auro-button .tabindex="${this.disabled ? '-1' : '0'}"></auro-button>`.                               |

### Methods

| Name     | Parameters                                                    | Return | Description                                                                                                                                                 |
| -------- | ------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-button` on the same page. |

### Slots

| Name              | Description                                                                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (default)         | The button's visible label: text, an icon, or both.                                                                                                                               |
| ariaLabel         | Text read by screen readers in place of the visible label. Needed for `circle` and `square` buttons, whose icon or short text, such as a count, doesn't say what the button does. |
| ariaLabel.loading | Text read by screen readers while the button is loading, for example "Saving your changes". Defaults to "Loading...".                                                             |

### CSS Shadow Parts

| Name           | Description                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| button         | The inner `<button>` element (a `<span>` when `static` is set).                                          |
| contentWrapper | The element wrapping all of the button's content. It is hidden, but still takes up space, while loading. |
| loader         | The loading indicator shown while `loading` is set.                                                      |
| text           | The element wrapping the button's label.                                                                 |

### CSS Custom Properties

| Name                                | Description                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------- |
| --ds-auro-button-border-color       | Border color of the button.                                                  |
| --ds-auro-button-border-inset-color | Color of the inner ring shown when the button has keyboard focus.            |
| --ds-auro-button-container-color    | Background color of the button.                                              |
| --ds-auro-button-container-image    | Background image layered over the background color, used for gradient fills. |
| --ds-auro-button-loader-color       | Color of the loading indicator.                                              |
| --ds-auro-button-tap-color          | Highlight color shown briefly when the button is tapped on a touch screen.   |
| --ds-auro-button-text-color         | Color of the button's label text.                                            |
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

Use `tIndex` to set the button's position in the keyboard tab order, such as `-1` to remove it from the tab order. Don't use `tabindex`: it's deprecated, and on the host element it adds a second tab stop for keyboard users.

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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/inverse.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button appearance="inverse"&gt;Primary&lt;/auro-button&gt;
&lt;auro-button variant="secondary" appearance="inverse"&gt;Secondary&lt;/auro-button&gt;
&lt;auro-button variant="tertiary" appearance="inverse"&gt;Tertiary&lt;/auro-button&gt;
&lt;auro-button variant="ghost" appearance="inverse"&gt;Ghost&lt;/auro-button&gt;
&#10;&lt;br /&gt;&lt;br/&gt;
&#10;&lt;auro-button appearance="inverse" shape="circle" size="xl"&gt;&lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;&lt;/auro-button&gt;
&lt;auro-button appearance="inverse" shape="circle" size="lg" variant="secondary"&gt;&lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;&lt;/auro-button&gt;
&lt;auro-button appearance="inverse" shape="circle" size="md" variant="tertiary"&gt;&lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;&lt;/auro-button&gt;
&lt;auro-button appearance="inverse" shape="circle" size="sm" variant="ghost"&gt;&lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;&lt;/auro-button&gt;
&lt;auro-button appearance="inverse" shape="circle" size="xs" variant="flat"&gt;&lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;&lt;/auro-button&gt;
&#10;&lt;br /&gt;&lt;br/&gt;
&#10;&lt;auro-button appearance="inverse" shape="square" size="xl"&gt;&lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;&lt;/auro-button&gt;
&lt;auro-button appearance="inverse" shape="square" size="lg" variant="secondary"&gt;&lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;&lt;/auro-button&gt;
&lt;auro-button appearance="inverse" shape="square" size="md" variant="tertiary"&gt;&lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;&lt;/auro-button&gt;
&lt;auro-button appearance="inverse" shape="square" size="sm" variant="ghost"&gt;&lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;&lt;/auro-button&gt;
&lt;auro-button appearance="inverse" shape="square" size="xs" variant="flat"&gt;&lt;auro-icon customColor category="interface" name="heart-filled"&gt;&lt;/auro-icon&gt;&lt;/auro-button&gt;</code></pre>
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

Use the `static` attribute to show the button's styling without any button behavior. A static button can't be clicked or focused, and screen readers don't announce it as a button. Use it when the button sits inside another clickable element, such as a linked card or slide.

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
<auro-icon category="interface" name="home-filled" customColor></auro-icon>
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

<pre class="language-html"><code class="language-html">&lt;auro-button static&gt;Static Primary Button&lt;/auro-button&gt;
&lt;auro-button static variant="secondary"&gt;Static Secondary Button&lt;/auro-button&gt;
&lt;auro-button static variant="tertiary"&gt;Static Tertiary Button&lt;/auro-button&gt;
&#10;&lt;br&gt;&lt;br&gt;
&#10;&lt;auro-button static fluid&gt;Static Fluid Button&lt;/auro-button&gt;
&#10;&lt;br&gt;&lt;br&gt;
&#10;&lt;auro-button static size="xs"&gt;XS Static&lt;/auro-button&gt;
&lt;auro-button static size="sm"&gt;SM Static&lt;/auro-button&gt;
&lt;auro-button static size="md"&gt;MD Static&lt;/auro-button&gt;
&lt;auro-button static size="lg"&gt;LG Static&lt;/auro-button&gt;
&lt;auro-button static size="xl"&gt;XL Static&lt;/auro-button&gt;
&#10;&lt;br&gt;&lt;br&gt;
&#10;&lt;auro-button static shape="pill"&gt;
  &lt;auro-icon category="interface" name="home-filled" customColor&gt;&lt;/auro-icon&gt;
  Static Pill with Icon
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
<auro-button static appearance="inverse">Static Primary Button</auro-button>
<auro-button static variant="secondary" appearance="inverse">Static Secondary Button</auro-button>
<auro-button static variant="tertiary" appearance="inverse">Static Tertiary Button</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/static-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/static-inverse.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button static appearance="inverse"&gt;Static Primary Button&lt;/auro-button&gt;
&lt;auro-button static variant="secondary" appearance="inverse"&gt;Static Secondary Button&lt;/auro-button&gt;
&lt;auro-button static variant="tertiary" appearance="inverse"&gt;Static Tertiary Button&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Size

Use the `size` attribute to set the button's height, padding, and label text size, from `xs` (smallest) to `xl` (largest). The default is `md`.

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

<pre class="language-html"><code class="language-html">&lt;auro-button size="xs"&gt;Extra Small&lt;/auro-button&gt;
&lt;auro-button size="sm"&gt;Small&lt;/auro-button&gt;
&lt;auro-button size="md"&gt;Medium&lt;/auro-button&gt;
&lt;auro-button size="lg"&gt;Large&lt;/auro-button&gt;
&lt;auro-button size="xl"&gt;Extra Large&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Shape

Use the `shape` attribute to set the button's outline: `rounded` (the default), `pill`, `circle`, or `square`.

Use `rounded` or `pill` for buttons with a text label. They grow to fit their content.

Use `circle` or `square` for a single icon or short text, such as a count. These shapes always have equal width and height. Text shows only when no icon is slotted and the text isn't wrapped in an element; otherwise, only the icon shows. Because an icon or a number alone doesn't say what the button does, give these buttons an accessible name with the `ariaLabel` slot or the `aria-label` attribute.

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

To show a label next to an icon only when people point at or focus the button, switch `shape` between `circle` and `pill`. A `circle` button hides its label and shows only the icon; a `pill` button shows both. This example switches on `mouseover` and `mouseout` for mouse users, and on `focusin` and `focusout` for keyboard users.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/toggled-text.html) -->
<!-- The below content is automatically added from ./../apiExamples/toggled-text.html -->
<auro-button shape="circle" id="toggledTextElem">
<span slot="ariaLabel">Back to top</span>
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
  &lt;span slot="ariaLabel"&gt;Back to top&lt;/span&gt;
  &lt;span&gt;Back to top&lt;/span&gt;
  &lt;auro-icon customColor category="interface" name="arrow-up"&gt;&lt;/auro-icon&gt;
&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/toggled-text.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/toggled-text.js -->

<pre class="language-js"><code class="language-js">export function toggledTextExample() {
  const toggledTextElem = document.querySelector("#toggledTextElem");
&#10;  // The mouseover and mouseout events are to simulate toggling text for mouse users
  toggledTextElem.addEventListener("mouseover", () =&gt; {
    toggledTextElem.shape = "pill";
  });
&#10;  toggledTextElem.addEventListener("mouseout", () =&gt; {
    toggledTextElem.shape = "circle";
  });
&#10;  // The focusin and focusout events are to simulate toggling text for keyboard users
  toggledTextElem.addEventListener("focusin", () =&gt; {
    toggledTextElem.shape = "pill";
  });
&#10;  toggledTextElem.addEventListener("focusout", () =&gt; {
    toggledTextElem.shape = "circle";
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

Use short text, such as a count, in place of an icon. Put the text directly in the button, not inside another element, and describe the button in the `ariaLabel` slot.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/shape-circle-text.html) -->
<!-- The below content is automatically added from ./../apiExamples/shape-circle-text.html -->
<auro-button shape="circle" size="xl">
<span slot="ariaLabel">1 item in your cart</span>
    1
</auro-button>
<auro-button shape="circle" size="lg">
<span slot="ariaLabel">1 item in your cart</span>
    1
</auro-button>
<auro-button shape="circle" size="md">
<span slot="ariaLabel">1 item in your cart</span>
    1
</auro-button>
<auro-button shape="circle" size="sm">
<span slot="ariaLabel">1 item in your cart</span>
    1
</auro-button>
<auro-button shape="circle" size="xs">
<span slot="ariaLabel">1 item in your cart</span>
    1
</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/shape-circle-text.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/shape-circle-text.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button shape="circle" size="xl"&gt;
  &lt;span slot="ariaLabel"&gt;1 item in your cart&lt;/span&gt;
  1
&lt;/auro-button&gt;
&lt;auro-button shape="circle" size="lg"&gt;
  &lt;span slot="ariaLabel"&gt;1 item in your cart&lt;/span&gt;
  1
&lt;/auro-button&gt;
&lt;auro-button shape="circle" size="md"&gt;
  &lt;span slot="ariaLabel"&gt;1 item in your cart&lt;/span&gt;
  1
&lt;/auro-button&gt;
&lt;auro-button shape="circle" size="sm"&gt;
  &lt;span slot="ariaLabel"&gt;1 item in your cart&lt;/span&gt;
  1
&lt;/auro-button&gt;
&lt;auro-button shape="circle" size="xs"&gt;
  &lt;span slot="ariaLabel"&gt;1 item in your cart&lt;/span&gt;
  1
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

`flat` shows only the label, with no background or border. Use it only for controls that need no visible styling until they have focus, such as the close button on a dialog or the clear button in a form field.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant.html) -->
<!-- The below content is automatically added from ./../apiExamples/variant.html -->
<auro-button variant="primary">Primary</auro-button>
<auro-button variant="secondary">Secondary</auro-button>
<auro-button variant="tertiary">Tertiary</auro-button>
<auro-button variant="ghost">Ghost</auro-button>
<auro-button variant="flat">Flat</auro-button>
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
&lt;auro-button variant="flat"&gt;Flat&lt;/auro-button&gt;</code></pre>
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
<span slot="ariaLabel">Back to top</span>
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
    &lt;span slot="ariaLabel"&gt;Back to top&lt;/span&gt;
    &lt;span&gt;Back to top&lt;/span&gt;
    &lt;auro-icon customColor category="interface" name="arrow-up"&gt;&lt;/auro-icon&gt;
  &lt;/auro-button&gt;
&lt;/div&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/right-align.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/right-align.js -->

<pre class="language-js"><code class="language-js">export function roundedRightAlignExample() {
  const rightAlignElem = document.querySelector("#rightAlignElem");
&#10;  // The mouseover and mouseout events are to simulate toggling text for mouse users
  rightAlignElem.addEventListener("mouseover", () =&gt; {
    rightAlignElem.shape = "pill";
  });
&#10;  rightAlignElem.addEventListener("mouseout", () =&gt; {
    rightAlignElem.shape = "circle";
  });
&#10;  // The focusin and focusout events are to simulate toggling text for keyboard users
  rightAlignElem.addEventListener("focusin", () =&gt; {
    rightAlignElem.shape = "pill";
  });
&#10;  rightAlignElem.addEventListener("focusout", () =&gt; {
    rightAlignElem.shape = "circle";
  });
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Loading state

Use the `loading` attribute while work is in progress, such as after a form is submitted. It replaces the label with an animated loading indicator and turns the button off, so people can't submit the same action twice. The button keeps its width, so the layout doesn't shift. Use the `ariaLabel.loading` slot to tell screen reader users what's happening.

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

<pre class="language-html"><code class="language-html">&lt;auro-button loading&gt;Primary&lt;/auro-button&gt;
&lt;auro-button variant="secondary" loading&gt;Secondary&lt;/auro-button&gt;
&lt;auro-button variant="tertiary" loading&gt;Tertiary&lt;/auro-button&gt;
&lt;auro-button variant="ghost" loading&gt;Ghost&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/loading-inverse.html) -->
<!-- The below content is automatically added from ./../apiExamples/loading-inverse.html -->
<auro-button appearance="inverse" loading>Primary</auro-button>
<auro-button variant="secondary" appearance="inverse" loading>Secondary</auro-button>
<auro-button variant="tertiary" appearance="inverse" loading>Tertiary</auro-button>
<auro-button variant="ghost" appearance="inverse" loading>Ghost</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/loading-inverse.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/loading-inverse.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button appearance="inverse" loading&gt;Primary&lt;/auro-button&gt;
&lt;auro-button variant="secondary" appearance="inverse" loading&gt;Secondary&lt;/auro-button&gt;
&lt;auro-button variant="tertiary" appearance="inverse" loading&gt;Tertiary&lt;/auro-button&gt;
&lt;auro-button variant="ghost" appearance="inverse" loading&gt;Ghost&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slot examples

### Icons

To show an icon from the Auro icons library, put an `<auro-icon>` in the button next to the label. Set `customColor` on the `<auro-icon>` so the icon uses the button's text color.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/icon.html) -->
<!-- The below content is automatically added from ./../apiExamples/icon.html -->
<auro-button>
<span>Activate WiFi</span>
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
  &lt;span&gt;Activate WiFi&lt;/span&gt;
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

#### ariaLabel slots

Use the `ariaLabel` slot to give screen reader users a more descriptive name than the visible label, and the `ariaLabel.loading` slot to tell them what's happening while the button is loading.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label.html) -->
<!-- The below content is automatically added from ./../apiExamples/aria-label.html -->
<auro-button>
<span slot="ariaLabel">Pay for your trip</span>
    Pay
</auro-button>
<auro-button loading>
<span slot="ariaLabel.loading">Processing your payment</span>
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
  &lt;span slot="ariaLabel.loading"&gt;Processing your payment&lt;/span&gt;
  Pay
&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### aria-labelledby

Set `aria-labelledby` to the ID of another element whose text names the button. The attribute is moved from `<auro-button>` to the inner button element.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-labeledby.html) -->
<!-- The below content is automatically added from ./../apiExamples/aria-labeledby.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-labeledby.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/aria-labeledby.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button aria-labelledby="button-label"&gt;
  Auro Button
  &lt;label id="button-label" class="util_displayHiddenVisually"&gt;My Button Label&lt;/label&gt;
&lt;/auro-button&gt;
&#10;&lt;style&gt;
  .util_displayHiddenVisually {
    clip: rect(1px, 1px, 1px, 1px);
    width: 1px;
    height: 1px;
    padding: 0;
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

### Link

The `link` part is the inner `<a>` element, rendered in place of `button` when `auro-hyperlink` uses `auro-button` to draw a button-styled link. `buttonHref` is internal to `auro-hyperlink`, so you'll usually style a link through `auro-hyperlink` instead.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/part_link.html) -->
<!-- The below content is automatically added from ./../apiExamples/part_link.html -->
<auro-button id="part-link-example" buttonHref="/test">Primary</auro-button>
<style>
    #part-link-example::part(link) {
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/part_link.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/part_link.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button id="part-link-example" buttonHref="/test"&gt;Primary&lt;/auro-button&gt;
&lt;style&gt;
  #part-link-example::part(link) {
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
<auro-button id="part-loader-example" loading>Primary</auro-button>
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

<pre class="language-html"><code class="language-html">&lt;auro-button id="part-loader-example" loading&gt;Primary&lt;/auro-button&gt;
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

To run your own code when people click the button, listen for its `click` event, as these examples do with `onclick`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/pass-function.html) -->
<!-- The below content is automatically added from ./../apiExamples/pass-function.html -->
<auro-button onclick="alert('YOU CLICKED ME!');">Primary</auro-button>
<auro-button disabled onclick="alert('YOU CLICKED ME!');">Primary</auro-button>
<auro-button loading onclick="alert('YOU CLICKED ME!');">Primary</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/pass-function.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/pass-function.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button onclick="alert('YOU CLICKED ME!');"&gt;Primary&lt;/auro-button&gt;
&lt;auro-button disabled onclick="alert('YOU CLICKED ME!');"&gt;Primary&lt;/auro-button&gt;
&lt;auro-button loading onclick="alert('YOU CLICKED ME!');"&gt;Primary&lt;/auro-button&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Do's and don'ts

Don't set `disabled` and `loading` on the same button. A loading button is already turned off, so `disabled` adds nothing.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/do-and-dont.html) -->
<!-- The below content is automatically added from ./../apiExamples/do-and-dont.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/do-and-dont.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/do-and-dont.html -->

<pre class="language-html"><code class="language-html">&lt;auro-alert type="error" noIcon&gt;
  &lt;auro-button loading disabled&gt;Primary&lt;/auro-button&gt;
&lt;/auro-alert&gt;
&lt;auro-alert type="success" noIcon style="padding-top: 5px;"&gt;
  &lt;auro-button loading&gt;Primary&lt;/auro-button&gt;
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