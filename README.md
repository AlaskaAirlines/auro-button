# auro-button

`<auro-button>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of containing styling and behavior.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-button/testPublish.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-button/actions/workflows/testPublish.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@alaskaairux/auro-button?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@alaskaairux/auro-button)
[![License](https://img.shields.io/npm/l/@alaskaairux/auro-button?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @alaskaairux/auro-button
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-button>` component.

```javascript
import "@alaskaairux/auro-button";
```

**Reference component in HTML**

```html
<auro-button>Hello World</auro-button>
```

## CDN Use

In cases where the project is not able to process JS assets, there are pre-processed assets available for use.

### Install

Include the following example HTML code in the `<head>` element of your page.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@alaskaairux/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@alaskaairux/webcorestylesheets@latest/dist/bundled/essentials.css" />

<script src="https://cdn.jsdelivr.net/npm/@alaskaairux/auro-button@latest/dist/auro-button__bundled.js" type="module"></script>
```

**NOTE:** Be sure to replace `@latest` in the URL with the version of the asset you want. @latest is NOT aware of any MAJOR releases, use at your own risk.

## Responsive support

`<auro-button>` is responsive by default. The button will assume 100% of the width of its container for views less than [auro_breakpoint--sm](https://alaskaairlines.github.io/WebCoreStyleSheets/#responsive-mixin-auro_breakpoint--sm).

Beyond that breakpoint `<auro-button>` will assume the width of the content or a min-width of `8.75rem`, which ever is greater.

If the desired appearance of the `<auro-button>` is to be placed in the reverse direction of natural content, then the attributes of `responsive` and `reverse` are needed on the `<auro-button>` element.

## Multi button support

When the UI requires the use of multiple buttons within the same space, with the use of the [Auro Web Core Style Sheets](https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-auro-css-#{$scope}.auro_containedButtons), and the `auro_containedButtons` .

## Light DOM Support
`<auro-button-light>` are included in this package for [light DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom#lightdom) support.

To pass content to the <auro-button-light>, use the content prop.

```html
<auro-button-light content="Default value"></auro-button-light>
```

### Native form attribute support

The auro-button shadow DOM web component does not support all the native form attributes that a `<button>` element would. But the light DOM version does. These attributes require access to the full light DOM.

* form
* formaction
* formenctype
* formmethod
* formtarget
* formnovalidate

## auro-button use cases

The `<auro-button>` element should be used in situations where users may:

* submit a form
* begin a new task
* trigger a new UI element to appear on the page
* specify a new or next step in a process

## API Code Examples

Default auro-button

```html
<auro-button>Primary</auro-button>
<auro-button disabled>Primary</auro-button>
```

```html
<auro-button secondary>Secondary</auro-button>
<auro-button secondary disabled>Secondary</auro-button>
```

```html
<auro-button tertiary>Tertiary</auro-button>
<auro-button tertiary disabled>Tertiary</auro-button>
```

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/getting-started/developers/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open three different shell sessions. One is for the **Gulp tasks**, the second is for a series of **npm tasks** and the last is to run the **Polymer server**.

**Peer dependency:** Please make sure Polymer is installed globally in order to run the Polymer server. See [Auro Component Development Details](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/TECH_DETAILS.md) for more information.

```shell
// shell terminal one
$ npm run dev

// shell terminal two
$ npm run serve
```

Open [localhost:8000](http://localhost:8000/)

### Testing
Automated tests are required for every Auro component. See `.\test\auro-button.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.

### Demo deployment

To deploy a demo version of the component for review, run `npm run demo:build` to create a `./build` directory that can be pushed to any static server.
