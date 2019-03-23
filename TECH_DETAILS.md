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

## Iron icons

`iron-icons` is a Polymer utility that includes the definition for the `iron-iconset-svg` element, as well as an import for the default icon set.

Icon icons are **not used** for Orion purposes. This is a utility only used for the purposes of the **demo** within each component directory.

See [demo](https://www.webcomponents.org/element/@polymer/iron-icons/demo/demo/index.html)

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

## Accessibility and testing

Development of components requires a fine attention to details in regards to conforming to accessibility regulations. For more information on how to best use Aria rules, please be sure to review this document by the [Google Chrome team](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules).

### Accessibility testing

When building new components, it is required that the component be reviewed using the latest tooling to assess accessibility compliance.

Each project component is set up to use [pa11y](https://www.npmjs.com/package/pa11y) during the development process. 

| Command | Description |
|----|----|
| `$ npm run dev` | Runs `npm-watch pa11y` |

The `pa11y` script will output an error report to `./pa11yReport.json` if detected.

### Google Chrome Inspector 

Built within Google's Chrome inspector is an **audit** tab that will run the Lighthouse performance tool. Uncheck all the audits except for **Accessbility**, choose either Desktop or Mobile and run the audit. Lighthouse will return a detailed report about the accessibility performance of the component. 

Also within Google's Chrome inspector is the **Accessibility** tab. This view will give individual results on the accessibility of the element you have selected. 

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
| copyFonts | Copy files from npm to local resources |
| buildTokens | Builds out CSS resources necessary for local development |
| processDemo | Build CSS from Sass for component demo |
| processSrc | Build all CSS resources needed for production deployment and browser testing |
| processDev | Build minimal CSS resources needed for local development |
| sassWatch | Watcher for building CSS resources from Sass files |
| build | Main task to run all build tasks |
| dev | Main task to run all development tasks |

## package.json API

The following is a list of npm scripts as defined in `[ods-component]/package.json`

| Task | Description |
|----|----|
| set-patch-root | Updates the root package.json semver |
| set-patch-src | Updates the ./src package.json semver |
| changelog | Generates the build changelog based on Git commits |
| copyReadme | Dist build step to copy ./README.md to ./dist |
| concat | Concatinates the generated changelong with the readme file | 
| prepare | Checks for outdated npm packages |
| npmOutdated | Script to run ncu package |
| npmOutdatedUpdate | Script to run `ncu -u` command |
| copyFonts | Copy files from npm to local resources |
| buildTokens | Builds out CSS resources necessary for local development |
| distTokens | Builds out CSS resources based on custom Style Dictionary rules | 
| sassRender | Builds `*-css.js` files from Sass/CSS dev files | 
| sassRender-w | Watches Sass/CSS files to re-render `*-css-js` files in dev mode |
| cssLint | CSS linter | 
| jsonLint | JSON linter |
| pa11y | Runs accessibility testing tool |
| build | Main task to run all build tasks |
| dist | Prepares files for packaging distribution |
| buildDist | Copies source files from `./src` directory to `./dist` | 
| buildDistLocal | Same as `buildDist`, but syntax is slightly different | 
| clean | Removes all dynamic build resources from local repo | 
