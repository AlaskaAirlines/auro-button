# package.json API

The following is a list of npm scripts as defined in `[ods-component]/package.json`

| Task | Description |
|----|----|
| build | Main task to run all build tasks |
| buildTokens | Builds out CSS resources necessary for local development |
| copyFonts | Copy files from npm to local resources |
| copyResources | Dist build step to copy ./README.md to ./dist |
| cssLint | CSS linter |
| dev | Runs development environment |
| dist | Prepares files for packaging distribution |
| distJS | Copies JS files from `./src` directory to `./dist` |
| distTokens | Builds out CSS resources based on custom Style Dictionary rules |
| jsonLint | JSON linter |
| sassRender | Builds `*-css.js` files from Sass/CSS dev files |
| sassRender-w | Watches Sass/CSS files to re-render `*-css-js` files in dev mode |
| stylefluxCanonical | Processes alternate processed CSS import file with canonical CSS properties |
| stylefluxVariable | Processes alternate processes CSS import file with CSS Custom Properties |
| sweep | Removes all dynamic build resources from local repo |
