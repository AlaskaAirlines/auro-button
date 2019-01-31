# Project Setup

To view and/or develop with the element/component, it is required to install the Polymer CLI and run the element/app locally.

## Install the Polymer-CLI

First, make sure to have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed.

```
$ npm polymer-cli -g
```

## Install dependencies

To install the necessary dependencies per the individual element/component, run:

```
$ npm i
```

## Preview resources

Prior to starting the server, UI dependencies must be built.

```
$ gulp build  // builds font, tokens and initial Sass resources
$ npm run sass-render
$ polymer serve
```

## Development

When actively developing component resources, the following watchers are necessary.

```
$ gulp dev // watches and rebuilds development resources
$ npm run tokens // watches token resources to build development resources
```

The Polymer server is required for building browser resources

```
$ polymer serve
```

Once the server is loaded, it will be viewable at:

```
http://127.0.0.1:8081
```

## Resource prep

Prior to completing work and submitting a pull request, be sure to address the following steps to ensure that all proper resources have been generated.

```
$ gulp build
$ npm run sass-render
```
