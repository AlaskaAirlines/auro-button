# Semantic Release Automated Changelog

## [6.3.1](https://github.com/AlaskaAirlines/auro-button/compare/v6.3.0...v6.3.1) (2021-05-24)


### Bug Fixes

* prevent errors with createElement [#112](https://github.com/AlaskaAirlines/auro-button/issues/112) ([4c49880](https://github.com/AlaskaAirlines/auro-button/commit/4c4988027b8f293f3122b96d444be73e8c2c39aa))

# [6.3.0](https://github.com/AlaskaAirlines/auro-button/compare/v6.2.0...v6.3.0) (2021-05-19)


### Features

* **version:** add support to display version in element [#114](https://github.com/AlaskaAirlines/auro-button/issues/114) ([9f3fbdf](https://github.com/AlaskaAirlines/auro-button/commit/9f3fbdf52152b4db1a1e59b10d637e13e0bd71c3))

# [6.2.0](https://github.com/AlaskaAirlines/auro-button/compare/v6.1.0...v6.2.0) (2021-03-05)


### Features

* apply focus-visible polyfill to shadow root ([0ffcb44](https://github.com/AlaskaAirlines/auro-button/commit/0ffcb443c8a0329070dd5de7b2e5f74944d605fa))

# [6.1.0](https://github.com/AlaskaAirlines/auro-button/compare/v6.0.1...v6.1.0) (2021-03-02)


### Features

* add new loading state ([ebe9afe](https://github.com/AlaskaAirlines/auro-button/commit/ebe9afee6642c3d4054e121a3d8e538135260487))

## [6.0.1](https://github.com/AlaskaAirlines/auro-button/compare/v6.0.0...v6.0.1) (2021-01-30)


### Bug Fixes

* [#95](https://github.com/AlaskaAirlines/auro-button/issues/95) Missing conditional check ([2fb749d](https://github.com/AlaskaAirlines/auro-button/commit/2fb749d981744664b3ba3ccf626a7770fdcdc5f4))

# [6.0.0](https://github.com/AlaskaAirlines/auro-button/compare/v5.3.1...v6.0.0) (2020-12-24)


### Features

* add support for rollup bundle ([3c4ff2e](https://github.com/AlaskaAirlines/auro-button/commit/3c4ff2e608c63ee6a6a6aa04b6c14f63147ea25f))


### BREAKING CHANGES

* This update will update how bundled resources
are used, removing support for pollyfill.js

## [5.3.1](https://github.com/AlaskaAirlines/auro-button/compare/v5.3.0...v5.3.1) (2020-11-20)


### Bug Fixes

* [#89](https://github.com/AlaskaAirlines/auro-button/issues/89) add missing HCM focus outline ([e070f42](https://github.com/AlaskaAirlines/auro-button/commit/e070f425997a2684d0a3f53842a9ad6da22360b4))
* update to 3.0 core packages ([37704b4](https://github.com/AlaskaAirlines/auro-button/commit/37704b408434f2421bda49c4f8b1d53bb47f73c0))

# [5.3.0](https://github.com/AlaskaAirlines/auro-button/compare/v5.2.0...v5.3.0) (2020-11-04)


### Features

* add fixed feature ([5ed6c27](https://github.com/AlaskaAirlines/auro-button/commit/5ed6c279995661678985bf0df694a006da5cf855))

# [5.2.0](https://github.com/AlaskaAirlines/auro-button/compare/v5.1.2...v5.2.0) (2020-10-31)


### Features

* move from travis to GHA ([39294af](https://github.com/AlaskaAirlines/auro-button/commit/39294af55f4a61f24a5202a809d8b429e96dfc27))

## [5.1.2](https://github.com/AlaskaAirlines/auro-button/compare/v5.1.1...v5.1.2) (2020-09-08)


### Bug Fixes

* add reflect to properties ([3e2df64](https://github.com/AlaskaAirlines/auro-button/commit/3e2df6409070b4334a80249aee937244d90fcdf5))

## [5.1.1](https://github.com/AlaskaAirlines/auro-button/compare/v5.1.0...v5.1.1) (2020-08-26)


### Bug Fixes

* update support of SVG in the slot ([8f28aeb](https://github.com/AlaskaAirlines/auro-button/commit/8f28aeb015edf91bc101363a89904536aee41511))

# [5.1.0](https://github.com/AlaskaAirlines/auro-button/compare/v5.0.0...v5.1.0) (2020-08-25)


### Features

* add icon support ([9047363](https://github.com/AlaskaAirlines/auro-button/commit/904736329f5f7ac6000849d5afe83131c60c7c33))

# [5.0.0](https://github.com/AlaskaAirlines/auro-button/compare/v4.7.1...v5.0.0) (2020-08-25)


### Bug Fixes

* address issues with unsupoprted shadow DOM attributes ([4ad5483](https://github.com/AlaskaAirlines/auro-button/commit/4ad5483388df68e30e588f7a2b42e14d2347e0db))


### Documentation

* update README ([0dc2901](https://github.com/AlaskaAirlines/auro-button/commit/0dc2901c3ace8211685b114872b7a5c94a232644))


### BREAKING CHANGES

* trigger to release next major version
* this update removes native button form attributes as
they are unable to be used outside the scope of the shadow DOM
