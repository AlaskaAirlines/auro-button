# \<ods-button>

[![Build Status](https://travis-ci.org/AlaskaAirlines/OrionStatelessComponents__ods-button.svg?branch=master)](https://travis-ci.org/AlaskaAirlines/OrionStatelessComponents__ods-button)
![npm (scoped)](https://img.shields.io/npm/v/@alaskaairux/ods-button.svg?color=orange)
![NPM](https://img.shields.io/npm/l/@alaskaairux/ods-button.svg?color=blue)

Orion Design System Button element, clickable elements used to perform an action.

\<ods-button> is a wrapper component for a HTML \<button> element containing styling and behavior. The content of a button is to be passed in via the `string` attribute. See below for examples of use.

## Install

```
$ npm i @alaskaairux/ods-button
```

### Step by step Orion dependency instructions

To build an app from the ground up using the Orion Design system and all it's individual resources, see this [step by step](https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-button/blob/master/examples/create-react-app-example.md) build example doc. 

### Design Token CSS Custom Property dependency

The use of any ODS Component has a dependency on the [ODS Design Tokens](https://www.npmjs.com/package/@alaskaairux/orion-design-tokens). See repository and API information [here](https://github.com/AlaskaAirlines/OrionDesignTokens).

Orion Web Components have a dependency specifically on the generation of **CSS Custom Properties** from the Orion Design Tokens package. Consider the following example config for Design Token generation. 

```
{
  "source": [ "./node_modules/@alaskaairux/orion-design-tokens/**/*.json" ],
  "platforms": {
    "scss": {
      "transformGroup": "scss",
      "buildPath": "./src/sass/",
      "files": [
        {
          "destination": "_TokenVariables.scss",
          "format": "scss/variables"
        }
      ]
    },
    "css": {
      "transformGroup": "scss",
      "buildPath": "./src/sass/",
      "files": [
        {
          "destination": "_TokenProperties.scss",
          "format": "css/variables"
        }
      ]
    }
  }
}
```

In the project's primary Sass output file, consider the following imports example:

```
@import "./tokenVariables";
@import "./tokenProperties";
```

CSS Custom Properties should be fully printed out into the global stylesheet of the project. 

### CSS Custom Property fallbacks

In older browsers where CSS Custom Properties are not supported, fallback properties are pre-generated and included with the npm. Any update to the Orion Design Tokens will be immediately reflected with supporting browsers. Legacy browsers will need updated components with pre-generated fallback properties. 

### Define dependency in project component 

Define the component dependency within each component that is using the \<ods-button> component.

**Define component dependency**

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

#### Contextual button

A special case scenario for responsiveness. The \<ods-button> element is built to handle responsive situations when it is the only element within a block. If the \<ods-button> element is used within context of another element, then it's the responsibility of the parent element to dictate the responsiveness of the \<ods-element>.

In this scenario, simply set the `context` of the element to be `true`.

```
<ods-button string="Default state; context true" context="true"></ods-button>
```
