# ods-button / auro-button

`<ods-button>` and `<auro-button>` are wrapper components for an HTML `<button>` element containing styling and behavior.

## Docs

All information regarding Project Setup, Technical Details, Tests and information regarding Auro Stateless Components can be found in the [./docs](https://github.com/AlaskaAirlines/OrionStatelessComponents__docs) repository.

## Deprecated

During the transition from Orion to Auro, there will be specific actions taken to address a clean transition and proper deprecation of Orion resources.

1. `<ods-button>` will continue to be supported until an official EOL has been communicated
1. [Alternate build solutions](#alternate-build-solutions) are no longer supported and will be removed with next MAJOR release

# New features

1. A new component `<auro-hyperlink>` is available that only consumes Auro resources to ensure a minimum weight and clean transition process for engineers
1. See [Auro API](#auro-properties) for new Auro component

## Install

```shell
$ npm i @alaskaairux/ods-button
```

### Design Token CSS Custom Property dependency

The use of any Auro Component has a dependency on the [Auro Design Tokens (npm install)](https://www.npmjs.com/package/@alaskaairux/orion-design-tokens). See repository and API information [here](https://github.com/AlaskaAirlines/OrionDesignTokens).

For additional details in regards to using Auro Design Tokens with components, please see [./docs/TECH_DETAILS.md](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/TECH_DETAILS.md)

### CSS Custom Property fallbacks

CSS Custom Properties are not supported in older browsers. For this, fallback properties are pre-generated and included with the npm. Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS Custom Properties, legacy browsers will require updated components with pre-generated fallback properties.


### Define dependency in project component

Define the component dependency within each component that is using the `<ods-button>` or `<auro-button>` components.

```javascript
import "@alaskaairux/ods-button";

or

import "@alaskaairux/ods-button/dist/auro-button";
```

**Reference component in HTML**

```html
<ods-button>Hello World!</ods-button>

<auro-button>Hello World!</auro-button>
```

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use. 

**NOTE:** Be sure to replace `:version` in the URL with the version of the asset you want. 

### Using Orion assets

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-design-tokens@:version/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-web-core-style-sheets@:version/dist/bundled/essentials.css" />

<script src="https://unpkg.com/@alaskaairux/ods-button@:version/dist/polyfills.js"></script>
<script src="https://unpkg.com/@alaskaairux/ods-button@:version/dist/ods-button__bundled.js"></script>
```

### Using Auro assets

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-design-tokens@:version/dist/tokens/CSSTokenProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-web-core-style-sheets@:version/dist/bundled/baseline.css" />

<script src="https://unpkg.com/@alaskaairux/ods-button@:version/dist/polyfills.js"></script>
<script src="https://unpkg.com/@alaskaairux/ods-button@:version/dist/auro-button__bundled.js"></script>
```

### polyfills.js

The `polyfills.js` is packaged with this component, but **IT IS NOT NEEDED** to load a polyfill per component. The `polyfills.js` will work for all additional components added to the project. 
      

## Element ods-button / auro-button

### Styling

<span style="color: red"><b>DEPRECATED: only available on ods-button</b></span>

Option(s) for component customization

| Selector | Type | State | Description |
|----|----|----|---|
| ::part() | pseudo-element | experimental | Update shadowDOM CSS from outside the component |

### Button use cases

The `<ods-button>` or `<auro-button>` elements should be used in situations where users may:

* submit a form
* begin a new task
* trigger a new UI element to appear on the page
* specify a new or next step in a process

### Buttons are not Hyperlinks

In cases were the action of the button would not fit the criteria above, it is most likely a Hyperlink. In that situation it is recommended that the `<auro-hyperlink>` element be used.

`<ods-hypelrink>` supports the options of `role=button`. This has been __deprecated__ and is not supported with `<auro-hyperlink>`.

### Responsive support

`<auro-button>` is responsive by default. The button will assume 100% of the width of its container for views less than [auro_breakpoint--sm](https://alaskaairlines.github.io/OrionWebCoreStyleSheets/#responsive-mixin-auro_breakpoint--sm).

Beyond that breakpoint `<auro-button>` will assume the width of the content or a min-width of 8.75rem, which ever is greater.

<span style="color: red"><b>Only supported with ods-button</b></span>

If the desired appearance of the `<ods-button>` is to responsive within a given space, then the use of the `responsive` attribute is required on the `<ods-element>`.

If the desired appearance of the `<auro-button>` is to be placed in the reverse direction of natural content, then the attributes of `responsive` and `reverse` are needed on the `<auro-button>` element.

### Multiple buttons

When the UI requires the use of multiple buttons within the same space, with the use of the [Auro Web Core Style Sheets](https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-auro-css-#{$scope}.auro_containedButtons), and the `auro_containedButtons` .


### Light DOM Support
`<ods-button-light>` and `<auro-button-light>` are included in this package for [light DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom#lightdom) support.

To pass content to the \<auro-button-light>, use the content prop.

```html
<ods-button-light content="Default value"></ods-button-light>
```

or

```html
<auro-button-light content="Default value"></auro-button-light>
```

### Orion Properties:

| Attribute | Value type | Description |
|----|----|----|
| arialabel | string | Populates the `aria-label` attribute that is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. If there is visible text labeling the element, use `aria-labelledby` instead. |
| arialabelledby | string | Populates the `aria-labelledby` attribute that establishes relationships between objects and their label(s), and its value should be one or more element IDs, which refer to elements that have the text needed for labeling. List multiple element IDs in a space delimited fashion. |
| autofocus | boolean | This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it |
| buttontype | string | Type of button defines the visual styling. <br/>Option(s): `primary`, `secondary`. Default value is `primary`. |
| condensed | boolean | Reduces left/right padding to fit button in condensed spaces |
| disabled | boolean | If set to true button will become disabled and not allow for interactions. <br/>Default value is `false`. |
| flowtype | string | Sets display type to represent the flow options. Options: `complete`
| form | string | The form element that the button is associated with (its form owner). The value of the attribute must be the id attribute of a `<form>` element in the same document |
| formaction | string | Specifies the URL of the file that will process the input control when the form is submitted. The formaction attribute overrides the `action` attribute of the `<form>` element |
| formenctype| string | If the button is a submit button, this attribute specifies the type of content that is used to submit the form to the server. |
| formmethod | string | If the button is a submit button, this attribute specifies the HTTP method that the browser uses to submit the form. |
| formnovalidate | boolean | If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner. |
| formtarget | string | If the button is a submit button, this attribute is a name or keyword indicating where to display the response that is received after submitting the form. Options: `_self`, `_blank`, `_parent`, `_top:` |
| id | string | Set the unique ID of an element. |
| isactive | boolean | If set to true button will appear in active state. <br/>Default value is `false`. |
| name | string | The name of the button, which is submitted with the form data. |
| responsive | boolean | Sets the UI of the button to be responsive within its given container. |
| reverse | boolean | Required to be paired with `responsive`, but sets the placement in the reverse direction of natural content. |
| svgIconLeft | string | Pass in SVG string for icon to appear on the LEFT |
| svgIconRight | string | Pass in SVG string for icon to appear on the RIGHT |
| title | string | Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element. |
| theme | string | Sets theme of element; option: `classic` |
| type | string | The type of the button. Possible values are: `submit`, `reset`, `button` |
| value | string | Defines the value associated with the button which is submitted with the form data. |

### Auro Properties:

| Attribute | Value type | Description |
|----|----|----|
| autofocus | boolean | This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it |
| formnovalidate | boolean |If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner. |
| ondark | boolean | Set value for on-dark version of auro-button |
| secondary | boolean | Set value for secondary version of auro-button |
| tertiary | boolean | Set value for tertiary version of auro-button |
| arialabel | string | Populates the `aria-label` attribute that is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. If there is visible text labeling the element, use `aria-labelledby` instead. |
| arialabelledby | string | Populates the `aria-labelledby` attribute that establishes relationships between objects and their label(s), and its value should be one or more element IDs, which refer to elements that have the text needed for labeling. List multiple element IDs in a space delimited fashion. |
| form | string | The form element that the button is associated with (its form owner). The value of the attribute must be the id attribute of a `<form>` element in the same document |
| formaction | string | Specifies the URL of the file that will process the input control when the form is submitted. The formaction attribute overrides the `action` attribute of the `<form>` element |
| formenctype | string | If the button is a submit button, this attribute specifies the type of content that is used to submit the form to the server. |
| formmethod | string | If the button is a submit button, this attribute specifies the HTTP method that the browser uses to submit the form. |
| formtarget | string | If the button is a submit button, this attribute is a name or keyword indicating where to display the response that is received after submitting the form. Options: `_self`, `_blank`, `_parent`, `_top:` |
| id | string | Set the unique ID of an element. |
| name | string | The name of the button, which is submitted with the form data. |
| title | string | Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element. |
| type | string | The type of the button. Possible values are: `submit`, `reset`, `button` |
| value | string | Defines the value associated with the button which is submitted with the form data. |


### API Code Examples for auro-button

![](https://raw.githubusercontent.com/AlaskaAirlines/OrionStatelessComponents__ods-button/master//assets/auro-button.png)

```html
<auro-button>Default state</auro-button>
<auro-button secondary>Secondary Default state</auro-button>
<auro-button tertiary>Tertiary default state</auro-button>
```

![](https://raw.githubusercontent.com/AlaskaAirlines/OrionStatelessComponents__ods-button/master//assets/auro-buttonOndark.png)

```html
<auro-button ondark>Default state</auro-button>
<auro-button secondary ondark>Secondary Default state</auro-button>
<auro-button tertiary ondark>Tertiary default state</auro-button>
```

### API Code Examples for ods-button

![](https://raw.githubusercontent.com/AlaskaAirlines/OrionStatelessComponents__ods-button/master/assets/default.png)

```html
<ods-button>default</ods-button>
```

![](https://raw.githubusercontent.com/AlaskaAirlines/OrionStatelessComponents__ods-button/master//assets/secondary.png)

```html
<ods-button buttontype="secondary">secondary</ods-button>
```

![](https://raw.githubusercontent.com/AlaskaAirlines/OrionStatelessComponents__ods-button/master//assets/isactive.png)

```html
<ods-button isactive>is active</ods-button>
```

![](https://raw.githubusercontent.com/AlaskaAirlines/OrionStatelessComponents__ods-button/master//assets/complete.png)

```html
<ods-button flowtype="complete"> complete </ods-button>
```

![](https://raw.githubusercontent.com/AlaskaAirlines/OrionStatelessComponents__ods-button/master//assets/disabled.png)

```html
<ods-button disabled>disabled</ods-button>
```

![](https://raw.githubusercontent.com/AlaskaAirlines/OrionStatelessComponents__ods-button/master//assets/classic.png)

```html
<ods-button theme="classic">classic default</ods-button>
```

![](https://raw.githubusercontent.com/AlaskaAirlines/OrionStatelessComponents__ods-button/master//assets/classicSecondary.png)

```html
<ods-button buttontype="secondary" theme="classic">classic secondary</ods-button>
```

![](https://raw.githubusercontent.com/AlaskaAirlines/OrionStatelessComponents__ods-button/master//assets/classicSecondaryDisabled.png)

```html
<ods-button disabled buttontype="secondary" theme="classic">disabled classic secondary</ods-button>
```

### Contextual component

<span style="color: red"><b>Only supported with ods-button</b></span>

A special case scenario for responsiveness. The `<ods-button>` element is built to handle responsive situations when it is the only element within a block. If the `<ods-button>` element is used within context of another element, then it's the responsibility of the parent element to dictate the responsiveness of the `<ods-button>`.

In this scenario, set the `context` of the element to be `true`.

```html
<ods-button context="true">Default state; context true</ods-button>
```

## Alternate build solutions <span style="color: red">(deprecated)</span>

Why would you need this? With all Auro custom elements the CSS for the element is embedded within the shadow DOM of the custom element. If your development environment is not allowing for the use of shadow DOM elements, the CSS for each element is distributed via additional resources within the npm package.

[Read more about how to use alternate CSS build resources](https://github.com/AlaskaAirlines/OrionStatelessComponents__docs/blob/master/src/ALT_BUILD.md)

<span style="color: red"><b>THIS PROCESS IS DEPRECATED! ALL SUPPORT WILL BE REMOVED WITH NEXT MAJOR RELEASE!</b></span>

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](.github/CONTRIBUTING.md) for this project. Please make sure to **pay special attention** to the [conventional commits](.github/CONTRIBUTING.md#conventional-commits) section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open three different shell sessions. One is for the Gulp tasks, the second is for a series of npm tasks and the last is to run the Polymer server.

```shell
// shell terminal one
$ gulp dev

// shell terminal two
$ npm run dev

// shell terminal three
polymer serve
```

------

#### Status badges

[![Build Status](https://travis-ci.org/AlaskaAirlines/ods-button.svg?branch=master)](https://travis-ci.org/AlaskaAirlines/ods-button)
![npm (scoped)](https://img.shields.io/npm/v/@alaskaairux/ods-button.svg?color=orange)
![NPM](https://img.shields.io/npm/l/@alaskaairux/ods-button.svg?color=blue)
