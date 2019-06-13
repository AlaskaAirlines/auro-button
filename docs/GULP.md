# Gulp Script API

The following is a list of Gulp tasks as defined in `[ods-component]/gulpfile.js`

| Task | Description |
|----|----|
| copyFonts | Copy files from npm to local resources |
| buildTokens | Builds out CSS resources necessary for local development |
| distTokens | Builds Design Tokens to meet dist spec |
| processDemo | Build CSS from Sass for component demo |
| processSrc | Build all CSS resources needed for production deployment and browser testing |
| processImportsCanonical | Process Sass to create canonical resource |
| processImportsVariable | Process Sass to create variable resource |
| processDev | Build minimal CSS resources needed for local development |
| reprocessClean | Re-processes style_clean.scss file to replace `:host` with `&` for static output |
| sassWatch | Watcher for building CSS resources from Sass files |
| build | Main task to run all build tasks |
| dev | Main task to run all development tasks |
