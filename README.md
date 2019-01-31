# ODS Stateless Components

Orion Design System Stateless Components are framework agnostic reusable UI components intended for use across all internal and external facing applications across all if IT and ecommerce at Alaska Airlines.

Contained within this repository will be the resourced needed to build and deploy individual component and element resources as they pertain to the Orion Design System (ODS)

Please see all other documentation in regards to contributing, code of conduct and software license agreements of use.

## Install development resources

For install and setup instructions, please see `PROJECT_SETUP.md` and `TECH_DETAILS.md` documents.

## Element or Component?

The difference between an element or a component is mainly for semantics and reference. Regardless of naming, there is no difference in development.

* Element: Stand-alone UI that is unable to individually complete a task. E.g. a button. Alone a button cannot complete a task unless it is associated with another context.
* Component: UI that is comprised of two or more elements and is able to individually complete a task. E.g. a button and a text element in conjunction would make a component.


## What defines the shape of a element or component?

One of the main goals of the ODS Stateless Component Design System is to not only produce reusable UI components to be used in the web space, but to also define the shape of the component in a way that this information is useful to other platforms.

Within the `./src/` directory for each component there will be a `[ods-component].json` file. It is the intent of this file to describe the shape of the component and in turn it will define the variables to be used when building the Sass for the component itself.


## Iron icons

`iron-icons` is a utility import that includes the definition for the iron-icon element, `iron-iconset-svg` element, as well as an import for the default icon set.

Icon icons are not used for Orion purposes. This is a utility only used for the purposes of the demo within each component directory.

See [demo](https://www.webcomponents.org/element/@polymer/iron-icons/demo/demo/index.html)
