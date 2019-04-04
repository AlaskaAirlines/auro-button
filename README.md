# \<ods-button>

[![Build Status](https://travis-ci.org/AlaskaAirlines/OrionStatelessComponents__ods-button.svg?branch=master)](https://travis-ci.org/AlaskaAirlines/OrionStatelessComponents__ods-button)
![npm (scoped)](https://img.shields.io/npm/v/@alaskaairux/ods-button.svg?color=orange)
![NPM](https://img.shields.io/npm/l/@alaskaairux/ods-button.svg?color=blue)

\<ods-button> is a wrapper component for a HTML \<button> element containing styling and behavior. The content of a button is to be passed in via the `string` attribute. See below for examples of use.

## Docs

All information regarding Project Setup, Technical Details, Tests and information regarding ODS Stateless Components can be found in the [./docs](/docs/) directory of this repository. 

## Install

```
$ npm i @alaskaairux/ods-button
```

### Design Token CSS Custom Property dependency

The use of any ODS Component has a dependency on the [ODS Design Tokens](https://www.npmjs.com/package/@alaskaairux/orion-design-tokens). See repository and API information [here](https://github.com/AlaskaAirlines/OrionDesignTokens).

For additional details in regards to using Orion Design Tokens with components, please see [./docs/TECH_DETAILS.md](/docs/TECH_DETAILS.md)

### CSS Custom Property fallbacks

CSS Custom Properties are not supported in older browsers. For this, fallback properties are pre-generated and included with the npm. Any update to the Orion Design Tokens will be immediately reflected with browsers that support CSS Custom Properties, legacy browsers will require updated components with pre-generated fallback properties. 

### Define dependency in project component 

Define the component dependency within each component that is using the \<ods-button> component.

```
import "@alaskaairux/ods-button/ods-button";
```

**Reference component in HTML**

```
<ods-button string="hello world" />
```

## Element \<ods-button>

```
class OdsButton extends LitElement
```

### Styling:

There are no styling modification options for this element.

### Button use cases

The \<ods-button> element should be used in situations where users may:

* submit a form
* begin a new task
* trigger a new UI element to appear on the page
* specify a new or next step in a process

### Buttons are not Hyperlinks

In cases were the action of the button would not fit the criteria above, it is most likely a Hyperlink. In that situation it is recommended that the \<ods-hyperlink> element be used with options of `role=button` configuration for visual appearance over functional use.

### Responsive state:

The \<ods-button> element will respond without context settings as expected. Within context of another component, set `context` flag to `true` and \<ods-button> will adapt to contextual shape.

### Properties:

| Attribute | value type | Description |
|----|----|----|
| string | string | Value entered as string will be displayed as string value within the button element |
| context | boolean | Context defines responsiveness of element. Set to true, element will always be 100% and respond to parent context shape. <br/>Default value is `false`. |
| type | string | Type of button defines the visual styling. <br/>Option(s): `primary`, `secondary`. Default value is `primary`.  |
| disabled | boolean | If set to true button will become disabled and not allow for interactions. <br/>Default value is `false`.  |
| active | boolean | If set to true button will appear in active state. <br/>Default value is `false`. |

### API Code Examples

Default button

```
<ods-button string="hello world"></ods-button>
```

Default button with disabled state set to `true`

```
<ods-button disabled="true" string="hello world"></ods-button>
```

Default button with active state set to `true`

```
<ods-button active="true" string="hello world"></ods-button>
```

Secondary button

```
<ods-button type="secondary" string="hello world"></ods-button>
```

Secondary button with disabled state set to `true`

```
<ods-button type="secondary" disabled="true" string="hello world"></ods-button>
```

Secondary button with active state set to `true`

```
<ods-button active="true" type="secondary" string="hello world"></ods-button>
```

#### Contextual component

A special case scenario for responsiveness. The \<ods-button> element is built to handle responsive situations when it is the only element within a block. If the \<ods-button> element is used within context of another element, then it's the responsibility of the parent element to dictate the responsiveness of the \<ods-element>.

In this scenario, simply set the `context` of the element to be `true`.

```
<ods-button string="Default state; context true" context="true"></ods-button>
```

## Alternate build solutions 

Included with the distributed npm are two additional directories, `./altImportsCanonical` and `./altImportsVariable`.

| directory | description |
|---|---|
| altImportsCanonical | Sass/CSS is using canonical values within the scope of the file |
| altImportsVariable* | Sass/CSS is using CSS Custom Properties within the scope of the file |

\* Orion Design Tokens are required to import any file using CSS Custom Properties. Also see Orion Design Tokens [pre-processed resources](https://github.com/AlaskaAirlines/OrionDesignTokens#install-pre-processed-resources). PostCSS using `postcss-custom-properties` will need to be added to your project if you are supporting legacy browsers.

Within the respective directories are two files, `style.css` and `style_clean.scss`

```
├── altImportsCanonical
|  ├── style.css
|  └── style_clean.scss
├── altImportsVariable
|  ├── style.css
|  └── style_clean.scss
```

These files can be imported directly into the scope of your project's CSS. It is highly recommended that you use the `style_clean.scss` file and import this into a name-space as not to create style collisions. For example:

```
.ods-button {
  @import "~@alaskaairux/ods-button/altImportsVariable/style_clean.scss";
}
```

This pattern will produce all the selectors within `style_clean.scss` with the prefixed selector. 

```
.ods-button .button {
  ...
}
```

**Warning!** Using the canonical CSS will break the chain of using Design Tokens. If Tokens are updated, this will require the update of the components and their canonical output. Use with caution. 

## 

Alaska Airlines Orion Design System<br>
Copyright 2019 Alaska Airlines, Inc. or its affiliates. All Rights Reserved.
