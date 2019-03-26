# Orion Design System React Example App

The purpose of this document is to illustrate a bootstrap environment using Create-React-App and all currently available Orion Design System resources.

## Create React App

Install create-react-app globally

```
$ npm i create-react-app -g
```

To start your own project, use create-react-app to bootstrap a new build

```
$ create-react-app my-project
```

Once the bootstrap app has been created, `cd/` in to the new project directory and start the server

```
$ npm start
```

## ODS Design Tokens

Design Tokens are required to drive the overall UI of the Orion Design System. These set-up instructions will address building tokens as Sass variables and native CSS Custom Properties.

It is recommended to create a `sass/` directory within the `src/` directory of your project and place all Sass resources in there.

```
$ npm i @alaskaairux/orion-design-tokens -D
```

The dependency on Style Dictionary will be addressed with the installation of ODS Design Tokens.

It's recommended to create a `./scripts` directory to house all the related configurations and script instructions.

Create `./scripts/tokensConfig.json` add the following:

```
{
  "source": [ "./node_modules/@alaskaair/orion-design-tokens/**/*.json" ],
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

In `./scripts` create `styleDictionary.js` and add the following:

```
// Required dependency
const StyleDictionary = require('style-dictionary').extend('./scripts/tokensConfig.json');

// Style Dictionary build function
StyleDictionary.buildAllPlatforms();
```

It is important that Style Dictionary run prior to any Webpack configuration. In `package.json` update the build step to include the new `styleDictionary.js` file:

```
"scripts": {
  "buildTokens": "node scripts/styleDictionary.js",
  "start": "npm run buildTokens | react-scripts start",
  "build": "npm run buildTokens | react-scripts build",
},
```

These files SHOULD NOT be committed to version control. Update `.gitignore` with the following:

```
# Sass resources
_Token*.scss
```

## Build Sass pipeline

To use Sass, simply install the node dependency:

```
$ npm i node-sass -D
```

Now that Sass is installed, update `App.css` to be `./sass/app.scss` and include the new Token files created in the previous, step:

```
@import "./tokenVariables";
@import "./tokenProperties";
```

Update `App.js` to reference the renamed css file:

```
import './sass/app.scss';
```

#### Note:

In this scenario, it is suggested that Sass variables are used within the scope of the project, but CSS custom properties are required for the styling of ODS Components.

If the use of CSS custom properties are being considered, an additional step using PostCSS to required for legacy browser support. PostCSS is not required for the user of ODS Components as this requirement is addressed within the scope of the component.

## Orion Web Core Style Sheets (OWCSS)

OWCSS's role is to provide all the base resources necessary to bootstrap a new project. All information about OWCSS and how to use it's API can be found in [Github](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets).

```
$ npm i @alaskaairux/orion-web-core-style-sheets -D
```

### Install custom fonts

All information regarding OWCSS and custom fonts can be found in [Github](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/blob/master/docs/howToUseFonts.md). To use custom fonts, the font files need to be copied from the npm location and into the scope of the project in order for React to pick up these resources. To address this step, update `package.json` to use `copyfiles`.

```
$ npm i copyfiles -D
```

Update `package.json` with the following:

```
"scripts": {
  "copyfiles": "copyfiles -f ./node_modules/@alaskaairux/orion-web-core-style-sheets/fonts/*.* ./src/fonts",
  "start": "npm run copyfiles | npm run buildTokens | react-scripts start",
  "build": "npm run copyfiles | npm run buildTokens | react-scripts build"
},
```

Again, do not add these build resources to the project's version control. Update `.gitignore` with the following:

```
# OWCSS resources
fonts/
```

### Use custom fonts

With the custom fonts installed, making use of them in CSS only requires the inclusion of the `@font` rules from the OWCSS lib. To do this, include the
`_fonts.scss` file from the OWCSS npm like so:

```
@import "~@alaskaairux/orion-web-core-style-sheets/fonts";
```

To validate that custom fonts are working, update `index.css` to `index.scss` and update the following code:

```scss
@import "./sass/tokenVariables";
@import "./sass/tokenProperties";

body {
  margin: 0;
  padding: 0;
  font-family: $font-family-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Baseline CSS

It is most common in projects to use a reset or normalize process. Orion's OWCSS project easily supports these scenarios by adding the following lines of code to the `app.scss` file:

```scss
@import "~@alaskaair/orion-web-core-style-sheets/normalize";
@import "~@alaskaair/orion-web-core-style-sheets/baseline";
```

There is a dependency at this time to use the standard set of breakpoints as provided by the OWCSS lib:

```scss
@import "~@alaskaair/orion-web-core-style-sheets/breakpoints";
```

If interested, there is a growing standard of utility selectors that can be used with projects as well.

```scss
@import "~@alaskaair/orion-web-core-style-sheets/utilityClasses";
```

<!-- ## SVG Icons

At this point in the project, SVG Icons are not a dependency, but it's a good time to [install](... ).

See [Github]( ... ) for full API instructions.

When using the ODS icons with this tool, keep in mind that the return from the npm is a string containing all the HTML for the SVG. Use will require a process to convert this string to DOM. For example, in this React project I am using `html-react-parser`:

```js
{htmlParser(chevronleft.svg)}
```

Referencing the object and the SVG string within the `htmlParser()` function will return the string as DOM and render within the browser. 

 -->

## Install ODS Component

ODS Components are fully contained Native Web Component resources. To start, update the project to use the \<ods-button> component.

```
$ npm i @alaskaairux/ods-button
```

Update `./src/App.js` to make use of the dependency:

```js
import "@alaskaairux/ods-button/ods-button";
```

Then update the `App` component in the `./src/App.js` file:

```js
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ods-button string="hello world" />
        </header>
      </div>
    );
  }
}
```

## Progressive Web App

It is highly suggested that all apps are setup to take advantage of the service worker architecture. To ensure that this new app is applicable to be a Progressive Web App, make this update in `./src/index.js`:

```
serviceWorker.unregister();

to

serviceWorker.register();
```

To test that this new service worker is indeed working, it is required to build the project as services workers do not work in the dev environment for various reasons.

Once am optimized build as been created, `cd/` into the `./build` directory and run any simple server to serve up the app. Keep in mind that service workers require a `https://` connection, but this does not apply to `localhost`.

Be sure to update `public/manifest.json` per the project as well.

## Accessibility and performance testing

To view accessibility and performance testing results:

```
$ npm run build

$ npm run httpserve
```

When browser opens, open the Chrome Inspector, click the `Audits` tab and click `Run audits`
