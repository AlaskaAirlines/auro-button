<img src="https://resource.alaskaair.net/-/media/2C1969F8FB244C919205CD48429C13AC" alt="Orion Design System Logo" title="Be the change you want to see" width="125" align="right" />

[![Build Status](https://travis-ci.org/AlaskaAirlines/OrionStatelessComponents__ods-button.svg?branch=master)](https://travis-ci.org/AlaskaAirlines/OrionStatelessComponents__ods-button)
![npm (scoped)](https://img.shields.io/npm/v/@alaskaairux/ods-button.svg?color=orange)
![NPM](https://img.shields.io/npm/l/@alaskaairux/ods-button.svg?color=blue)

# \<ods-button>

\<ods-button> is a wrapper component for a HTML \<button> element containing styling and behavior.

## Docs

All information regarding Project Setup, Technical Details, Tests and information regarding ODS Stateless Components can be found in the [./docs](/docs/) directory of this repository.

## Install

```shell
$ npm i @alaskaairux/ods-button
```

### Design Token CSS Custom Property dependency

The use of any ODS Component has a dependency on the [ODS Design Tokens](https://www.npmjs.com/package/@alaskaairux/orion-design-tokens). See repository and API information [here](https://github.com/AlaskaAirlines/OrionDesignTokens).

For additional details in regards to using Orion Design Tokens with components, please see [./docs/TECH_DETAILS.md](/docs/TECH_DETAILS.md)

### CSS Custom Property fallbacks

CSS Custom Properties are not supported in older browsers. For this, fallback properties are pre-generated and included with the npm. Any update to the Orion Design Tokens will be immediately reflected with browsers that support CSS Custom Properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Define the component dependency within each component that is using the \<ods-button> component.

```javascript
import "@alaskaairux/ods-button/dist/ods-button";
```

**Reference component in HTML**

```html
<ods-button>Hello World</ods-button>
```

## Element \<ods-button>

```javascript
class OdsButton extends LitElement
```

### Styling

Option(s) for component customization

| Selector | Type | State | Description |
|----|----|----|---|
| ::part() | pseudo-element | experimental | Update shadowDOM CSS from outside the component; see [./docs/customization.md](/docs/customization.md) |

### Button use cases

The \<ods-button> element should be used in situations where users may:

* submit a form
* begin a new task
* trigger a new UI element to appear on the page
* specify a new or next step in a process

### Buttons are not Hyperlinks

In cases were the action of the button would not fit the criteria above, it is most likely a Hyperlink. In that situation it is recommended that the \<ods-hyperlink> element be used with options of `role=button` configuration for visual appearance over functional use.

### Responsive state:

The \<ods-button> element will respond without context settings as expected. Within context of another component, set `context` flag to `true` and \<ods-button> will adapt to contextual shape. By default,  \<ods-button> will constrain visible characters when text exceeds available visual space.

### Properties:

| Attribute | Value type | Description |
|----|----|----|
| arialabel | string | Populates the `aria-label` attribute that is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. If there is visible text labeling the element, use `aria-labelledby` instead. |
| arialabelledby | string | Populates the `aria-labelledby` attribute that establishes relationships between objects and their label(s), and its value should be one or more element IDs, which refer to elements that have the text needed for labeling. List multiple element IDs in a space delimited fashion. |
| autofocus | boolean | This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it |
| buttontype | string | Type of button defines the visual styling. <br/>Option(s): `primary`, `secondary`. Default value is `primary`. |
| condensed | boolean | Reduces left/right padding to fit button in condensed spaces |
| disabled | boolean | If set to true button will become disabled and not allow for interactions. <br/>Default value is `false`. |
| form | string | The form element that the button is associated with (its form owner). The value of the attribute must be the id attribute of a `<form>` element in the same document |
| formaction | string | Specifies the URL of the file that will process the input control when the form is submitted. The formaction attribute overrides the `action` attribute of the `<form>` element |
| formenctype| string | If the button is a submit button, this attribute specifies the type of content that is used to submit the form to the server. |
| formmethod | string | If the button is a submit button, this attribute specifies the HTTP method that the browser uses to submit the form. |
| formnovalidate | boolean | If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner. |
| formtarget | string | If the button is a submit button, this attribute is a name or keyword indicating where to display the response that is received after submitting the form. Options: `_self`, `_blank`, `_parent`, `_top:` |
| id | string | Set the unique ID of an element. |
| isactive | boolean | If set to true button will appear in active state. <br/>Default value is `false`. |
| name | string | The name of the button, which is submitted with the form data. |
| outercontext | boolean | Context defines responsiveness of element. Set to true, element will always be 100% and respond to parent context shape. <br/>Default value is `false`. |
| title | string | Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element. |
| type | string | The type of the button. Possible values are: `submit`, `reset`, `button` |
| value | string | Defines the value associated with the button which is submitted with the form data. |

### API Code Examples

Default button

```html
<ods-button>Hello World</ods-button>
```

Default button with disabled state set to `true`

```html
<ods-button disabled>hello world</ods-button>
```

Default button with active state set to `true`

```html
<ods-button isactive>hello world</ods-button>
```

Secondary button

```html
<ods-button buttontype="secondary">hello world</ods-button>
```

Secondary button with disabled state set to `true`

```html
<ods-button buttontype="secondary" disabled>hello world</ods-button>
```

Secondary button with active state set to `true`

```html
<ods-button active buttontype="secondary">hello world</ods-button>
```

### Custom callbacks

Button(React support) with `ref` for passing in an event, [see notes](/docs/CALLBACK.md)

```html
<ods-button ref={this.event}>hello world</ods-button>
```

### Contextual component

A special case scenario for responsiveness. The \<ods-button> element is built to handle responsive situations when it is the only element within a block. If the \<ods-button> element is used within context of another element, then it's the responsibility of the parent element to dictate the responsiveness of the \<ods-element>.

In this scenario, simply set the `context` of the element to be `true`.

```html
<ods-button context="true">Default state; context true</ods-button>
```

## Alternate build solutions

Included with the distributed npm are two additional directories, `./altImportsCanonical` and `./altImportsVariable`.

| directory | description |
|---|---|
| altImportsCanonical† | Sass using canonical values within the scope of the file |
| altImportsVariable* | Sass using CSS Custom Properties within the scope of the file |

† Using canonical CSS properties breaks inheritance chain from Orion Design Tokens

\* Orion Design Tokens are required to import any file using CSS Custom Properties. Also see Orion Design Tokens [pre-processed resources](https://github.com/AlaskaAirlines/OrionDesignTokens#install-pre-processed-resources). PostCSS using `postcss-custom-properties` will need to be added to your project if you are supporting legacy browsers.

Within the respective directories is the `style_clean.scss` file.

```bash
├── altImports
|  ├── canonical
|  |  ├── style.css
|  |  └── style_clean.scss
|  └── variable
|     ├── style.css
|     └── style_clean.scss
```

It is highly recommended that you import the `style_clean.scss` this into a name-space as not to create style collisions. For example:

```scss
.ods-button {
  @import "./node_modules/@alaskaairux/ods-button/altImportsVariable/style_clean.scss";
}
```

This pattern will produce all the selectors within `style_clean.scss` with the prefixed selector.

```scss
.ods-button .button {
  display: var(--ods-button-display);
  font-family: var(--ods-button-font-family);
  border-width: var(--ods-button-border-width);
  border-radius: var(--ods-button-border-radius);
  ...
}
```

**Warning!** Using the canonical CSS will break the chain of using Design Tokens. If Tokens are updated, this will require the update of the components and their canonical output. Use with caution.

##

Alaska Airlines Orion Design System<br>
Copyright 2019 Alaska Airlines, Inc. or its affiliates. All Rights Reserved.
