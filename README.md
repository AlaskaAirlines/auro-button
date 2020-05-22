# ods-button / auro-button

`<ods-button>` and `<auro-button>` are wrapper components for an HTML `<button>` element containing styling and behavior.

## Install

[![Build Status](https://img.shields.io/travis/AlaskaAirlines/ods-button.svg?branch=master&style=for-the-badge)](https://travis-ci.org/github/AlaskaAirlines/ods-button)
[![See it on NPM!](https://img.shields.io/npm/v/@alaskaairux/ods-button.svg?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@alaskaairux/ods-button)
[![License](https://img.shields.io/npm/l/@alaskaairux/orion-design-tokens.svg?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @alaskaairux/ods-button
```

### Design Token CSS Custom Property dependency

The use of any Auro Component has a dependency on the [Auro Design Tokens (npm install)](https://www.npmjs.com/package/@alaskaairux/orion-design-tokens). See repository and API information [here](https://github.com/AlaskaAirlines/OrionDesignTokens).

For additional details in regards to using Auro Design Tokens with components, please see [./docs/TECH_DETAILS.md](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/TECH_DETAILS.md)

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

**NOTE:** Be sure to replace `:version` in the URL with the version of the asset you want. The first fully stable version is v4.4.4.

### Using Orion assets

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-design-tokens@:version/dist/tokens/CSSTokenProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-web-core-style-sheets@:version/dist/bundled/baseline.css" />

<script src="https://unpkg.com/@alaskaairux/ods-button@:version/dist/polyfills.js"></script>
<script src="https://unpkg.com/@alaskaairux/ods-button@:version/dist/ods-button__bundled.js"></script>
```

### Using Auro assets

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-design-tokens@:version/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-web-core-style-sheets@:version/dist/bundled/essentials.css" />

<script src="https://unpkg.com/@alaskaairux/ods-button@:version/dist/polyfills.js"></script>
<script src="https://unpkg.com/@alaskaairux/ods-button@:version/dist/auro-button__bundled.js"></script>
```

### polyfills.js

The `polyfills.js` is packaged with this component, but **IT IS NOT NEEDED** to load a polyfill per component. The `polyfills.js` will work for all additional components added to the project.

### IE11 Support

**Displaimer:** While these components are supported in IE, there may be issues with loading the [web components polyfill](https://www.webcomponents.org/polyfills). Please consult their documentation when supporting IE11. 

## Deprecated

During the transition from Orion to Auro, there will be specific actions taken to address a clean transition and proper deprecation of Orion resources.

1. `<ods-button>` will continue to be supported until an official EOL has been communicated
1. [Alternate build solutions](#alternate-build-solutions) are no longer supported and will be removed with next MAJOR release

## Responsive support

`<auro-button>` is responsive by default. The button will assume 100% of the width of its container for views less than [auro_breakpoint--sm](https://alaskaairlines.github.io/WebCoreStyleSheets/#responsive-mixin-auro_breakpoint--sm).

Beyond that breakpoint `<auro-button>` will assume the width of the content or a min-width of `8.75rem`, which ever is greater.

<span style="color: #df0b37"><b>Only supported with ods-button</b></span>

If the desired appearance of the `<ods-button>` is to responsive within a given space, then the use of the `responsive` attribute is required on the `<ods-element>`.

If the desired appearance of the `<auro-button>` is to be placed in the reverse direction of natural content, then the attributes of `responsive` and `reverse` are needed on the `<auro-button>` element.

## Multiple buttons

When the UI requires the use of multiple buttons within the same space, with the use of the [Auro Web Core Style Sheets](https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-auro-css-#{$scope}.auro_containedButtons), and the `auro_containedButtons` .


## Light DOM Support

`<ods-button-light>` and `<auro-button-light>` are included in this package for [light DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom#lightdom) support.

To pass content to the \<auro-button-light>, use the content prop.

```html
<ods-button-light content="Default value"></ods-button-light>
```

or

```html
<auro-button-light content="Default value"></auro-button-light>
```

## Orion Button Properties:

For a full listing of the [Orion Button API](https://auro.alaskaair.com/components/ods/button/api)

## Auro Button Properties:

For a full listing of the [Auro Button API](https://auro.alaskaair.com/components/auro/button/api)

## API Code Examples

For full API examples, see the [ods-button demo page](https://alaskaairlines.github.io/ods-button/).

## Contextual component

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
$ npm run serve
```

Open [localhost:3001](http://localhost:3001/)
