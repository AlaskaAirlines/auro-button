# ODS Stateless Component Development Details

Building the JavaScript and CSS for the components requires a handful of processing events in order to produce the desired code needed per component that meets the needs of the current state of browser support.

## Browser Support Matrix

Alaska Airlines currently supports the following browsers for the delivery of Polymer Stateless Components.

#### Browsers that engineers are required to dev and test against:

| Browser | Version | Operating System |
|------|------|------|
| Chrome | Current release | Windows, macOS, iOS, Android |
| Safari | Current release | macOS, iOS |
| Firefox | Current release | Windows, macOS, Android |
| Edge | Current release | Windows 10 |
| Internet Explorer | 11 | Windows 7, Windows 8, Windows 10 |
| Internet Explorer | 10 | Windows 7, Windows 8 |

#### Browser support for HTML Web Components

| Feature | Chrome | Opera | Safari | Firefox | Edge | IE
|----|----|----|----|----|----|----|
| HTML Templates | Stable | Stable | Stable | Stable | Stable | Polyfill |
| Custom Elements | Stable | Stable | Stable | Stable | Polyfill | Polyfill |
| Shadow DOM | Stable | Stable | Stable | Stable | Polyfill | Polyfill |
| ES Modules | Stable | Stable | Stable | Stable | Stable | Polyfill |

#### Browser support for CSS Custom Properties (variables)

| Browser | Version | Custom Selectors |
|------|------|------|
| Chrome | Current release | Yes |
| Safari | Current release | Yes |
| Firefox | Current release | Yes |
| Edge | Current release | Yes |
| Internet Explorer | 11 | No* |
| Internet Explorer | 10 | No* |

\* Fallback CSS is required to support browser

## Polymer Development

Developing and rendering components require Polymer resources. In order to easily support this in a development environment it is suggested that developers install the Polymer-CLI for local use.

| Dependency | info |
|----|----|
| Polymer-CLI | [npm install](https://www.npmjs.com/package/polymer-cli)

To start a local component server:

```
$ polymer serve
```

## Custom fonts

Building components requires local access to custom web fonts. After installing the Orion Web Core Stylesheet(OWCSS) npm, the following script is needed to copy fonts from the npm package and onto the scope of the element / component in development.

```
$ npm run copyfiles
```

| Dependency | info |
|---|---|
| Orion Web Core Stylesheets | [npm install](https://itsals.visualstudio.com/Orion%20Design%20System/_packaging?_a=package&feed=as.com-npm&package=%40alaskaair%2Forion-web-core-style-sheets&protocolType=Npm&version=0.1.1412915) |
| copyfiles | [npm install](https://www.npmjs.com/package/copyfiles) |

This function is included as part of the `gulp build` and `gulp watch` processes per component.

## Building resources from Orion Design Tokens

Every project is mandated to generate **Token CSS Custom Properties** and **Token Sass Variables** from the **Design Tokens** and include these into the main Sass file.

This is necessary as each component references these global Custom Properties directly and many of the featured of OWCSS require information from the Sass variables. When the Orion Design Tokens are updated, these values will influence the nested Web Components within the scope of the project as well as any project scoped Sass.

This process is represented in the `demo/` section of this project.

### Style Dictionary scripts and config settings

Building out Sass Variables and CSS Custom Properties from Design Token JSON files is a key dependency for any CSS development. The following command has a dependency on `./scripts/tokenScript.js` all related `./scripts/*Config.json` files.

| Command | Description |
|----|----|
| `$ npm run build-tokens` | References JSON files within project and transpiles into CSS/Sass resources per the config file*† |

\* Each JSON file must have an individual config for individual resource building.

† Function is included as part of the `gulp build` and `gulp watch` processes.

| Dependency | info |
|---|---|
| Orion Design Tokens | [npm install](https://itsals.visualstudio.com/Orion%20Design%20System/_packaging?_a=package&feed=as.com-npm&package=%40alaskaair%2Forion-design-tokens&protocolType=Npm&version=0.2.1412909) |
| Style Dictionary | [npm install](https://www.npmjs.com/package/style-dictionary) |

## Component CSS

Polymer Components are JavaScript modules that produce HTML Web Components. A feature of Web Components is encapsulated CSS, meaning that CSS needs to be written directly into the module itself.

Using Sass and other techniques makes this undesirable to edit directly within the scope of the component JS file. To assist with this, the following script will process CSS resources into a JavaScript module that can be imported into the component.

| Dependency | info |
|---|---|
| WC Sass Render | [npm install](https://itsals.visualstudio.com/Orion%20Design%20System/_packaging?_a=package&feed=as.com-npm&package=%40alaskaair%2Forion-design-tokens&protocolType=Npm&version=0.2.1412909) |

| Command | Description |
|----|----|
| `$ npm run sass-render` | Converts CSS or Sass to JavaScript module |

## Component Demo

For the purpose of demonstrating an element or component the demo requires all the same dependencies that other projects do. This includes Design Tokens, OWCSS breakpoints; fonts; normalize; baseline and utility classes.

Having these resources as dependencies allows for independent development and release cycles between dependencies and individual components.

The best way to address this within demos per element or component is to have a `style.scss` file in the `demo/` directory that will process all the necessary dependencies into usable CSS at the page level.

OWCSS resources have a dependency on Sass variables while components use Custom CSS Properties. It is important to have both these files generated and used in a project.

In the demo `index.html` simply `<link>` the stylesheet as with any project.

```html
<link rel="stylesheet" type="text/css" href="css/style.css">
```

## Gulp Script API

The following is a list of Gulp tasks as defined in `[ods-component]/gulpfile.js`

| Task | Description |
|----|----|
| copy:fonts | Copy files from npm to local resources |
| build:tokens | Builds out CSS resources necessary for local development |
| process:demo | Build CSS from Sass for component demo |
| process:src | Build all CSS resources needed for production deployment and browser testing |
| process:dev | Build minimal CSS resources needed for local development |
| sass:watch | Watcher for building CSS resources from Sass files |
| build | Main task to run all build tasks |
| dev | Main task to run all development tasks |
