# Semantic Release Automated Changelog

## [9.3.3](https://github.com/AlaskaAirlines/auro-button/compare/v9.3.2...v9.3.3) (2025-05-02)


### Bug Fixes

* misc fix to force release font changes ([ba45cca](https://github.com/AlaskaAirlines/auro-button/commit/ba45cca27723dd524df7484f10c77d59106d6f8f))

## [9.3.2](https://github.com/AlaskaAirlines/auro-button/compare/v9.3.1...v9.3.2) (2025-05-01)


### Bug Fixes

* update SCSS token formatting ([35489ef](https://github.com/AlaskaAirlines/auro-button/commit/35489eff0fd8f7425cd0cefcf239dabdacc34856))

## [9.3.1](https://github.com/AlaskaAirlines/auro-button/compare/v9.3.0...v9.3.1) (2025-04-14)


### Bug Fixes

* use correct text token name in disabled state [#309](https://github.com/AlaskaAirlines/auro-button/issues/309) ([17834e4](https://github.com/AlaskaAirlines/auro-button/commit/17834e45c2f062a1dfe64ff2b2fb6738940c931b))

# [9.3.0](https://github.com/AlaskaAirlines/auro-button/compare/v9.2.0...v9.3.0) (2025-04-10)


### Features

* update to use new alaska theme tokens [#301](https://github.com/AlaskaAirlines/auro-button/issues/301) ([3841eb0](https://github.com/AlaskaAirlines/auro-button/commit/3841eb099f08122b7bb768838c7a13b022dd015a))


### Performance Improvements

* update dependencies and tsconfig ([988bcf0](https://github.com/AlaskaAirlines/auro-button/commit/988bcf03a37cc41ae5764c7ccdd58b9dad39895b))

# [9.2.0](https://github.com/AlaskaAirlines/auro-button/compare/v9.1.1...v9.2.0) (2025-04-07)


### Features

* add aria-label for loading state ([8a6605e](https://github.com/AlaskaAirlines/auro-button/commit/8a6605e030966ba6c3bc30fc1ae04becde85da3f))

## [9.1.1](https://github.com/AlaskaAirlines/auro-button/compare/v9.1.0...v9.1.1) (2025-04-02)


### Bug Fixes

* adjust forcus-ring radius ([7742729](https://github.com/AlaskaAirlines/auro-button/commit/7742729396b83a4c44ae889d94b5aa9003474907))
* make focus ring's position fit inside of the button ([e46930f](https://github.com/AlaskaAirlines/auro-button/commit/e46930f40d773cd8c43bc5a08793262ce0bbc046))
* remove outline transition on rounded button ([10e8370](https://github.com/AlaskaAirlines/auro-button/commit/10e8370254eb738d04a8d8e5faa5d2ca3593a44a))
* update focus-ring thickness per Figma, remove outline ([07f4f8b](https://github.com/AlaskaAirlines/auro-button/commit/07f4f8b78b78073258b68ffb6faf2aeee60b907b))


### Performance Improvements

* replace `:after` with `outline` due to position mismatch issue ([39630bc](https://github.com/AlaskaAirlines/auro-button/commit/39630bcbf7a841f6ec9f387b4caf1cf16ad5438b))

# [9.1.0](https://github.com/AlaskaAirlines/auro-button/compare/v9.0.0...v9.1.0) (2025-03-28)


### Features

* add aria-expanded ([e75beaf](https://github.com/AlaskaAirlines/auro-button/commit/e75beaf8ddbc18c84e5de3b4d4cc2edec319dca5))

# [9.0.0](https://github.com/AlaskaAirlines/auro-button/compare/v8.2.4...v9.0.0) (2025-02-28)


* feat!: move peer dependencies to "real" dependencies ([20ffc3c](https://github.com/AlaskaAirlines/auro-button/commit/20ffc3ccc7995d647df43336871fcda3f472d35f))


### BREAKING CHANGES

* last change was breaking _on a patch version_ because of peer dependencies

Summary:
  Our current build process relies on peer dependencies being present, but
  the peer dependency pipeline is causing far more issues than it's worth.
  Why not just make them regular dependencies? This is what this PR does :)

## [8.2.4](https://github.com/AlaskaAirlines/auro-button/compare/v8.2.3...v8.2.4) (2025-02-08)


### Performance Improvements

* update dependencies ([e1300a2](https://github.com/AlaskaAirlines/auro-button/commit/e1300a2dfdb80914bfa24ddd2117ba03517f6c66))
* update mixin to support new WCSS spec ([a474990](https://github.com/AlaskaAirlines/auro-button/commit/a474990d50bf16effc06095b709c80573f554584))
* update nested dep on auro loader ([77080d7](https://github.com/AlaskaAirlines/auro-button/commit/77080d79dceeda9a61109aacf0e0afcc3be90902))

## [8.2.3](https://github.com/AlaskaAirlines/auro-button/compare/v8.2.2...v8.2.3) (2025-01-14)


### Bug Fixes

* add form awareness support to button ([1cc962a](https://github.com/AlaskaAirlines/auro-button/commit/1cc962a14e1372616a3856d32e85c9513c93a88c))
* add null handling when attachInternals is not available ([43479dd](https://github.com/AlaskaAirlines/auro-button/commit/43479dd18deffda4e05ebba65cae0483f09cd918))
* better null handling on form ([ec6545c](https://github.com/AlaskaAirlines/auro-button/commit/ec6545c1adc67ce65ca6cc2ba815a5c88a00a002))
* make surfaceSubmitEvent use this.form ([009d205](https://github.com/AlaskaAirlines/auro-button/commit/009d205d94a7be2b6ae4996d05947c7d973af606))
* use older method of declaring static properties ([d6dbe17](https://github.com/AlaskaAirlines/auro-button/commit/d6dbe177addb8fb332883079466a199a58a1ecda))
* use requestSubmit and update test ([aff2768](https://github.com/AlaskaAirlines/auro-button/commit/aff2768099bd3d492603f87a1deb57623d49edf2))

## [8.2.2](https://github.com/AlaskaAirlines/auro-button/compare/v8.2.1...v8.2.2) (2024-12-20)


### Performance Improvements

* update node to version 22 ([45bdd43](https://github.com/AlaskaAirlines/auro-button/commit/45bdd43d493ae7326669f314e6b978e431d04293))

## [8.2.1](https://github.com/AlaskaAirlines/auro-button/compare/v8.2.0...v8.2.1) (2024-12-19)


### Performance Improvements

* add class for auro-button with correct pattern auroButton [#282](https://github.com/AlaskaAirlines/auro-button/issues/282) ([6a0e67e](https://github.com/AlaskaAirlines/auro-button/commit/6a0e67ec2b06f44142a7eba2c27b3e0edbf113e4))

# [8.2.0](https://github.com/AlaskaAirlines/auro-button/compare/v8.1.3...v8.2.0) (2024-11-15)


### Features

* update auro-library to 3.0.1 ([9d58b78](https://github.com/AlaskaAirlines/auro-button/commit/9d58b787c830c947a5899b9a865c5ebbba8ac0da))


### Performance Improvements

* update library to 3.0.2 ([478b6de](https://github.com/AlaskaAirlines/auro-button/commit/478b6deb10012d0d028aa143fc2886db6d243f7c))

## [8.1.3](https://github.com/AlaskaAirlines/auro-button/compare/v8.1.2...v8.1.3) (2024-11-05)


### Bug Fixes

* register default component on index page [#173](https://github.com/AlaskaAirlines/auro-button/issues/173) ([fd0bc01](https://github.com/AlaskaAirlines/auro-button/commit/fd0bc017453eb12afe49b0534f2a7221513a0368))


### Performance Improvements

* update dependencies ([b1b21ea](https://github.com/AlaskaAirlines/auro-button/commit/b1b21eae9a8ec4ddb0775d85dcf203b4489b7d6a))
* update rollup config ([37244c7](https://github.com/AlaskaAirlines/auro-button/commit/37244c7825b45c4373972a35c50177d23227b1f8))
* update to support latest version of auro-icon ([50693bd](https://github.com/AlaskaAirlines/auro-button/commit/50693bd45bd05a4446fd337cc8c24f16cca2bdcd))

## [8.1.2](https://github.com/AlaskaAirlines/auro-button/compare/v8.1.1...v8.1.2) (2024-10-31)


### Performance Improvements

* update dependencies ([b3e2d31](https://github.com/AlaskaAirlines/auro-button/commit/b3e2d31918659ac3a873967bcfdeeeae3e53be2a))

## [8.1.1](https://github.com/AlaskaAirlines/auro-button/compare/v8.1.0...v8.1.1) (2024-10-30)


### Bug Fixes

* limit auro-library version to patch updates ([e4a5bf4](https://github.com/AlaskaAirlines/auro-button/commit/e4a5bf4aaa87ee65ff49940005ca0aaaba16483d))
* re-run build ([025974a](https://github.com/AlaskaAirlines/auro-button/commit/025974a0f77576688ed216f89c6faf777f5fdfa7))
* rollback auro-library to fix generateDoc scripting ([dc20179](https://github.com/AlaskaAirlines/auro-button/commit/dc20179c4e0d91761c37ef5a2c53c56864cb019b))

# [8.1.0](https://github.com/AlaskaAirlines/auro-button/compare/v8.0.1...v8.1.0) (2024-10-23)


### Bug Fixes

* added upgraded version file from build ([e36577b](https://github.com/AlaskaAirlines/auro-button/commit/e36577b4643e79f3ba7a9aedcfe0ea0c8b6df831))


### Features

* **api:** add register static method [#267](https://github.com/AlaskaAirlines/auro-button/issues/267) ([b60a17e](https://github.com/AlaskaAirlines/auro-button/commit/b60a17e3bbb49a339b53ef86ae4f072e51203daf))


### Performance Improvements

* update dependency versions ([24e654b](https://github.com/AlaskaAirlines/auro-button/commit/24e654bf4aec33ca0cd6abdd2fcaea6419be57a3))

## [8.0.1](https://github.com/AlaskaAirlines/auro-button/compare/v8.0.0...v8.0.1) (2024-10-08)


### Bug Fixes

* make auro-library a normal dep instead of devDep ([2d8e89d](https://github.com/AlaskaAirlines/auro-button/commit/2d8e89d4ba415fe38875849df41e659bda4c8009))

# [8.0.0](https://github.com/AlaskaAirlines/auro-button/compare/v7.3.0...v8.0.0) (2024-09-25)


### Bug Fixes

* resolve color theming issues [#253](https://github.com/AlaskaAirlines/auro-button/issues/253) ([2e57c03](https://github.com/AlaskaAirlines/auro-button/commit/2e57c0339e1900ec4ac0359b1465139443fdad0e))


### Performance Improvements

* refactor custom component registration config ([7ea8420](https://github.com/AlaskaAirlines/auro-button/commit/7ea8420974586375f1143c33c4715b50a9195924))
* update file extension and names ([ca89972](https://github.com/AlaskaAirlines/auro-button/commit/ca89972a4e1bca0a772e7ac914f51cd9939f8c5b))
* use latest versions of dependencies ([8af1108](https://github.com/AlaskaAirlines/auro-button/commit/8af1108c0532aed24945330ce2e9f65eaa912301))


### BREAKING CHANGES

* trigger major release for color theming support #229

# [7.3.0](https://github.com/AlaskaAirlines/auro-button/compare/v7.2.10...v7.3.0) (2024-09-10)


### Bug Fixes

* **flat:** change width CSS rules to 'unset' for the flat variant ([610dd4b](https://github.com/AlaskaAirlines/auro-button/commit/610dd4bdbb542a0626e8473f170e7d050485f2d4))
* **flat:** correct colors in ondark flat variant ([2e34651](https://github.com/AlaskaAirlines/auro-button/commit/2e346513fb460e3f66e2e9ab6db9f7e87c00ac5f))
* **flat:** remove focus border from flat variant ([1b6acb7](https://github.com/AlaskaAirlines/auro-button/commit/1b6acb71a2bd985a0c1de54c4f0902b083fe4a2d))


### Features

* **flat:** add new flat variant for use in auro-components ([afb87d3](https://github.com/AlaskaAirlines/auro-button/commit/afb87d3899294df7a7f8afad6e4c502b72ac2869))
* force new feature release ([ec4c6f1](https://github.com/AlaskaAirlines/auro-button/commit/ec4c6f1db4c1960da0751cd61171fdb10a1dee0b))
* **themes:** update styles to support component themes [#243](https://github.com/AlaskaAirlines/auro-button/issues/243) ([acc481e](https://github.com/AlaskaAirlines/auro-button/commit/acc481e3960118b7e8de73518c3e14a8c09e5529))


### Performance Improvements

* **flat:** use the correct new tokens for the flat variant [#252](https://github.com/AlaskaAirlines/auro-button/issues/252) ([349edc3](https://github.com/AlaskaAirlines/auro-button/commit/349edc363758ea31a17d091004e954b26e47c8fa))
* **loader:** use beta version of loader as direct dependency ([7e925af](https://github.com/AlaskaAirlines/auro-button/commit/7e925af32611874fd3740f185d7185c0f0ae3797))
* update design tokens and eslint config ([cfefc60](https://github.com/AlaskaAirlines/auro-button/commit/cfefc6056f0829233ea486b2cc74ccd3118c4c27))

## [7.2.10](https://github.com/AlaskaAirlines/auro-button/compare/v7.2.9...v7.2.10) (2024-07-08)


### Bug Fixes

* **hover:** remove disabled hover UI [#256](https://github.com/AlaskaAirlines/auro-button/issues/256) ([13fd26b](https://github.com/AlaskaAirlines/auro-button/commit/13fd26bdc068d6ee8bc35dba993bb8e400148d37))

## [7.2.9](https://github.com/AlaskaAirlines/auro-button/compare/v7.2.8...v7.2.9) (2024-02-23)


### Performance Improvements

* **deps:** update dependencies ([0ee9a47](https://github.com/AlaskaAirlines/auro-button/commit/0ee9a47866ea09eaa5067162babcb1e94d95318b))
* **min:** update min js example system ([0225d9b](https://github.com/AlaskaAirlines/auro-button/commit/0225d9bab815e4f5b2788161221480998755d37d))

## [7.2.8](https://github.com/AlaskaAirlines/auro-button/compare/v7.2.7...v7.2.8) (2024-02-20)


### Performance Improvements

* **docs:** add custom registration example to index page ([31a7bd6](https://github.com/AlaskaAirlines/auro-button/commit/31a7bd6de507d5bc6254f4b49b18a94978974d44))

## [7.2.7](https://github.com/AlaskaAirlines/auro-button/compare/v7.2.6...v7.2.7) (2024-02-14)


### Bug Fixes

* **slim:** render icon in icononly slim example [#245](https://github.com/AlaskaAirlines/auro-button/issues/245) ([380e8c0](https://github.com/AlaskaAirlines/auro-button/commit/380e8c0f073253c48af5f21995206c12f020101c))


### Performance Improvements

* **demo:** update demofile name ([f11d9c5](https://github.com/AlaskaAirlines/auro-button/commit/f11d9c5625d3ffc8087c28beec1b32052ae86337))
* **examples:** update references to example files ([47bff95](https://github.com/AlaskaAirlines/auro-button/commit/47bff950e69fb18aa8b736ce8a57299aa8de1ecd))
* **jsdocs:** update event jsdocs ([954dbb4](https://github.com/AlaskaAirlines/auro-button/commit/954dbb44a0e0588ca2f55e0945e7c0890c01dc43))
* **styles:** update styles for icon only buttons ([99f5488](https://github.com/AlaskaAirlines/auro-button/commit/99f548812bebd5f56a32757fd2c1d9d4379835a9))
* update dependencies ([83b4486](https://github.com/AlaskaAirlines/auro-button/commit/83b44863b0836b13a3ce55c5d0724c3cd4faba7a))

## [7.2.6](https://github.com/AlaskaAirlines/auro-button/compare/v7.2.5...v7.2.6) (2024-02-01)


### Performance Improvements

* update auro dependencies ([b8c2884](https://github.com/AlaskaAirlines/auro-button/commit/b8c28840d4fc683805c5ec2cdadc44cd1d69e25b))

## [7.2.5](https://github.com/AlaskaAirlines/auro-button/compare/v7.2.4...v7.2.5) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([a2aece9](https://github.com/AlaskaAirlines/auro-button/commit/a2aece9dd7d42ecbd3846199973f649708dce74b))
* **cdn:** update links from unpkg to jsdelivr ([b15f865](https://github.com/AlaskaAirlines/auro-button/commit/b15f86500632c7d5fe80068510ae98f91988ca65))

## [7.2.4](https://github.com/AlaskaAirlines/auro-button/compare/v7.2.3...v7.2.4) (2024-01-22)


### Bug Fixes

* update incorrect lit-element refs ([77cb193](https://github.com/AlaskaAirlines/auro-button/commit/77cb1930268c0b3c2082f0677856986ae86a0192))


### Performance Improvements

* update dependencies ([1afa2d1](https://github.com/AlaskaAirlines/auro-button/commit/1afa2d1a8f807d3ef879aca38102e93424f20b0c))
* update to auro-loader@latest ([89b2e57](https://github.com/AlaskaAirlines/auro-button/commit/89b2e5743584e3239c8feb77d3ba1760b00d3f29))

## [7.2.3](https://github.com/AlaskaAirlines/auro-button/compare/v7.2.2...v7.2.3) (2024-01-11)


### Performance Improvements

* update repo to support SSR ([cfab5ea](https://github.com/AlaskaAirlines/auro-button/commit/cfab5ea7521b2a9b862b2f4e3a49f2e27de89b5e))

## [7.2.2](https://github.com/AlaskaAirlines/auro-button/compare/v7.2.1...v7.2.2) (2024-01-02)


### Bug Fixes

* **demo:** update surge demo branch ([5393ed9](https://github.com/AlaskaAirlines/auro-button/commit/5393ed910993367821755f86992b5b8934e1f6bf))
* **marked:** update marked package to script ([9ad605c](https://github.com/AlaskaAirlines/auro-button/commit/9ad605cb9692c62ea3e8316582767171a539afd2))
* **tokens:** replace invalid tokens [#229](https://github.com/AlaskaAirlines/auro-button/issues/229) ([7652913](https://github.com/AlaskaAirlines/auro-button/commit/76529134ead49c665518f4466d67c7c1eafa7c45))


### Performance Improvements

* **accordion:** use new version of accordion ([eba6c1e](https://github.com/AlaskaAirlines/auro-button/commit/eba6c1ea0a465f3bf3dddce759a57e5c426d27c2))
* **alert:** update to use auro-alert ([e18015c](https://github.com/AlaskaAirlines/auro-button/commit/e18015c6bab2257735779bd83147d6899bb8eaa8))
* **deps:** update dependencies ([7daaf28](https://github.com/AlaskaAirlines/auro-button/commit/7daaf28390f087294df95dcb35f945d5228901ff))
* **eslint:** install auro eslint rules ([d9fd3ed](https://github.com/AlaskaAirlines/auro-button/commit/d9fd3ed7f433934d3dab5f854c11d34c31c0acf7))
* **focus:** remove focus-visible support ([c0511e5](https://github.com/AlaskaAirlines/auro-button/commit/c0511e5ed3f43b847f761a088918f07f14f89057))
* **hover:** update hover css rules ([f64446d](https://github.com/AlaskaAirlines/auro-button/commit/f64446d555f138eb795b6641433fc5891812ba1f))
* **hover:** update secondary hover color [#227](https://github.com/AlaskaAirlines/auro-button/issues/227) ([1eff68d](https://github.com/AlaskaAirlines/auro-button/commit/1eff68d28089c0f83d6d25a732fc5e8d9f8692b2))
* **hover:** update tertiary hover color [#236](https://github.com/AlaskaAirlines/auro-button/issues/236) ([2d346fa](https://github.com/AlaskaAirlines/auro-button/commit/2d346fa931391c8acdfcaa54c91549982351dd2d))
* **jsdocs:** update jsdocs ([ebec779](https://github.com/AlaskaAirlines/auro-button/commit/ebec779f8069e521690bdaca623003a81d085e00))
* **node:** update to support node 20 ([816d29e](https://github.com/AlaskaAirlines/auro-button/commit/816d29e6f46d6718f5ff61588edd6baed3da5561))
* **tokens:** add css fallbacks for tokens [#229](https://github.com/AlaskaAirlines/auro-button/issues/229) ([423502b](https://github.com/AlaskaAirlines/auro-button/commit/423502be316e9b595790c006eae2c2fbb9acc291))
* **token:** update design token names [#229](https://github.com/AlaskaAirlines/auro-button/issues/229) ([f94ab5d](https://github.com/AlaskaAirlines/auro-button/commit/f94ab5dfd58c789efd3b4818b36af47cfa918fcc))

## [7.2.1](https://github.com/AlaskaAirlines/auro-button/compare/v7.2.0...v7.2.1) (2023-10-02)


### Performance Improvements

* **class:** add class to span wrapping around content [#233](https://github.com/AlaskaAirlines/auro-button/issues/233) ([43436b2](https://github.com/AlaskaAirlines/auro-button/commit/43436b29f1bd36e1bc7bc753e55c0e6a9257afc6))

# [7.2.0](https://github.com/AlaskaAirlines/auro-button/compare/v7.1.1...v7.2.0) (2023-07-14)


### Features

* **template:** use correctly named CSS part attributes [#225](https://github.com/AlaskaAirlines/auro-button/issues/225) ([a69eebc](https://github.com/AlaskaAirlines/auro-button/commit/a69eebc941fda4400102391982e1a1f8048e3078))


### Performance Improvements

* **cssparts:** add css parts to shadow DOM content [#225](https://github.com/AlaskaAirlines/auro-button/issues/225) ([312bd39](https://github.com/AlaskaAirlines/auro-button/commit/312bd39dabb26bf76a18dcb807f25dd08723b519))

## [7.1.1](https://github.com/AlaskaAirlines/auro-button/compare/v7.1.0...v7.1.1) (2023-07-13)


### Bug Fixes

* **lit:** update references to lit classes [#223](https://github.com/AlaskaAirlines/auro-button/issues/223) ([879ceef](https://github.com/AlaskaAirlines/auro-button/commit/879ceef67e03b4d83d3d4eaf5748ae34bb58dafc))

# [7.1.0](https://github.com/AlaskaAirlines/auro-button/compare/v7.0.1...v7.1.0) (2023-07-11)


### Bug Fixes

* **animation:** fix hide/show text animation on rounded button ([0378046](https://github.com/AlaskaAirlines/auro-button/commit/0378046ded92cbecf2ebc86a095a52274fe4deec))


### Features

* **rounded:** implement new rounded button [#212](https://github.com/AlaskaAirlines/auro-button/issues/212) ([838a186](https://github.com/AlaskaAirlines/auro-button/commit/838a18665921f7c20a8ea43821078d8cd1b2b2c7))


### Performance Improvements

* **stylelint:** update to modern stylelint practices ([750dc5d](https://github.com/AlaskaAirlines/auro-button/commit/750dc5d11bdfd844012f15e485204d9fda36dec5))

## [7.0.1](https://github.com/AlaskaAirlines/auro-button/compare/v7.0.0...v7.0.1) (2023-06-06)


### Performance Improvements

* **deps:** update project dependencies ([1b93ca5](https://github.com/AlaskaAirlines/auro-button/commit/1b93ca52e9ef6a05c3701cf73153a1c1a6c99c81))

# [7.0.0](https://github.com/AlaskaAirlines/auro-button/compare/v6.6.0...v7.0.0) (2023-06-06)


### Code Refactoring

* **es5:** remove legacy features and build support [#204](https://github.com/AlaskaAirlines/auro-button/issues/204) ([c0348c4](https://github.com/AlaskaAirlines/auro-button/commit/c0348c46f5b06d35d7417f4fff61a37d32b89340))
* **id:** remove internal ID support [#130](https://github.com/AlaskaAirlines/auro-button/issues/130) ([1d8d16c](https://github.com/AlaskaAirlines/auro-button/commit/1d8d16ceb179c88fe67f9c1057cd424155f5f2d9))


### Features

* add multiple updates [#206](https://github.com/AlaskaAirlines/auro-button/issues/206) ([449c0c4](https://github.com/AlaskaAirlines/auro-button/commit/449c0c4b78450358e676cd87a84c0b7518091a18))
* **enum:** add variants support [#160](https://github.com/AlaskaAirlines/auro-button/issues/160) ([05509b8](https://github.com/AlaskaAirlines/auro-button/commit/05509b8bfcfe931118eeae97afe8f749af77645b))
* **ondark:** update background values [#156](https://github.com/AlaskaAirlines/auro-button/issues/156) ([b6ef5f8](https://github.com/AlaskaAirlines/auro-button/commit/b6ef5f8216b2d2bdba438d8bc052d64db882e72c))


### Performance Improvements

* **focus-visible:** remove support for polyfill [#208](https://github.com/AlaskaAirlines/auro-button/issues/208) ([5f0f8d1](https://github.com/AlaskaAirlines/auro-button/commit/5f0f8d1f339168011166f4fa1eceb0fcc56d7ca2))
* **icon:** remove internal icon placement support [#209](https://github.com/AlaskaAirlines/auro-button/issues/209) ([eec81f6](https://github.com/AlaskaAirlines/auro-button/commit/eec81f674e964f2b220748143dcd3f70df1f4a03))


### BREAKING CHANGES

* This commit includes an update to the
npm namespace to @aurodesignsystem.

Changes to be committed:
new file:   .github/CODEOWNERS
deleted:    .github/ISSUE_TEMPLATE/audit.md
deleted:    .github/ISSUE_TEMPLATE/bug_report.md
new file:   .github/ISSUE_TEMPLATE/bug_report.yml
deleted:    .github/ISSUE_TEMPLATE/develop-design-story.md
deleted:    .github/ISSUE_TEMPLATE/feature_request.md
new file:   .github/ISSUE_TEMPLATE/feature_request.yml
deleted:    .github/ISSUE_TEMPLATE/general-support.md
new file:   .github/ISSUE_TEMPLATE/general-support.yml
deleted:    .github/ISSUE_TEMPLATE/new_wc.md
deleted:    .github/ISSUE_TEMPLATE/parent-design-story.md
deleted:    .github/ISSUE_TEMPLATE/review-design-story.md
deleted:    .github/ISSUE_TEMPLATE/symbol-design-story.md
deleted:    .github/ISSUE_TEMPLATE/user-story.md
modified:   .github/settings.yml
modified:   .github/workflows/testPublish.yml
modified:   .gitignore
new file:   .husky/pre-commit
modified:   .npmignore
modified:   index.js
deleted:    karma.conf.js
modified:   package-lock.json
* **icon:** This commit will remove all legacy support
for placement of icons within the element other than supporting
icons as slotted content.

Changes to be committed:
modified:   docs/api.md
modified:   src/auro-button.js
modified:   src/style.scss
* **id:** This commit will remove all support for
ID attribute reflection from the parent element to the inner
button element.

Changes to be committed:
modified:   src/auro-button.js
modified:   test/auro-button.test.js
modified:   packageScripts/postinstall.js
* **es5:** This commit removes all legacy es6 build process
including light-dom support, fixed CSS, non CSS variable support,
and es5 bundling.

Changes to be committed:
modified:   README.md
deleted:    babel.config.js
deleted:    demo/alert.js
modified:   demo/demo.md
modified:   demo/index.html
deleted:    demo/sass/style.scss
deleted:    index.html
modified:   package-lock.json
modified:   package.json
modified:   packageScripts/postinstall.js
modified:   rollup.config.js
modified:   scripts/postCss.js
deleted:    scripts/removeNonRemPlugin.js
deleted:    src/auro-button-light.js
modified:   src/auro-button.js
deleted:    src/es5.js
deleted:    src/style-fixed.scss
deleted:    src/style-ld.scss

# [6.6.0](https://github.com/AlaskaAirlines/auro-button/compare/v6.5.0...v6.6.0) (2023-04-12)


### Features

* **icononly:** add icon only version of component [#199](https://github.com/AlaskaAirlines/auro-button/issues/199) ([69be06f](https://github.com/AlaskaAirlines/auro-button/commit/69be06f4a3aa77117ae4ba5d37120dc4229f7c57))

# [6.5.0](https://github.com/AlaskaAirlines/auro-button/compare/v6.4.0...v6.5.0) (2023-02-13)


### Features

* **ready:** notify readiness of the component [#190](https://github.com/AlaskaAirlines/auro-button/issues/190) ([f80799d](https://github.com/AlaskaAirlines/auro-button/commit/f80799d41240a432ed13f153abec5c631578852a))


### Performance Improvements

* **release:** update semantic release version [#190](https://github.com/AlaskaAirlines/auro-button/issues/190) ([ad22ada](https://github.com/AlaskaAirlines/auro-button/commit/ad22adab763f4e44c1a07c7e5d5ac63c904dff7f))

# [6.4.0](https://github.com/AlaskaAirlines/auro-button/compare/v6.3.8...v6.4.0) (2022-09-14)


### Bug Fixes

* **inline:** update to better center content within button [#164](https://github.com/AlaskaAirlines/auro-button/issues/164) ([4335b6d](https://github.com/AlaskaAirlines/auro-button/commit/4335b6d7004e9042aba6b45cd657bc0abd64a89a))


### Features

* **css:** update tertiary background color ([615d5d6](https://github.com/AlaskaAirlines/auro-button/commit/615d5d6606e3325e6b254911a3fe1ff6aed5d371))
* **slim:** add new feature attribute [#159](https://github.com/AlaskaAirlines/auro-button/issues/159) ([ef661ac](https://github.com/AlaskaAirlines/auro-button/commit/ef661ac375fbf054e4df39e0110b2cfde377219b))

## [6.3.8](https://github.com/AlaskaAirlines/auro-button/compare/v6.3.7...v6.3.8) (2022-03-15)


### Bug Fixes

* **token:** update element to support new hover color [#153](https://github.com/AlaskaAirlines/auro-button/issues/153) ([5282bd7](https://github.com/AlaskaAirlines/auro-button/commit/5282bd74dd9c075463881bb765a5ebdf5d994134))

## [6.3.7](https://github.com/AlaskaAirlines/auro-button/compare/v6.3.6...v6.3.7) (2022-01-19)


### Bug Fixes

* **version:** remove version from DOM ([d91e614](https://github.com/AlaskaAirlines/auro-button/commit/d91e614f1e0b5018279522432619cb39df9f366b))

## [6.3.6](https://github.com/AlaskaAirlines/auro-button/compare/v6.3.5...v6.3.6) (2021-08-26)


### Bug Fixes

* **notice:** update postinstall message to communicate deprecation of id prop ([fceb348](https://github.com/AlaskaAirlines/auro-button/commit/fceb348036d76f471c26576b2356d83905edbb91))

## [6.3.5](https://github.com/AlaskaAirlines/auro-button/compare/v6.3.4...v6.3.5) (2021-08-17)


### Bug Fixes

* **notice:** update packing postinistall to alert users of next MAJOR release ([f0a6103](https://github.com/AlaskaAirlines/auro-button/commit/f0a610381001a79fb06695de0f6c3baef7c77d72))

## [6.3.4](https://github.com/AlaskaAirlines/auro-button/compare/v6.3.3...v6.3.4) (2021-06-23)


### Bug Fixes

* allow wider range of lit-html versions [#127](https://github.com/AlaskaAirlines/auro-button/issues/127) ([7ec7463](https://github.com/AlaskaAirlines/auro-button/commit/7ec7463466b526620abd816c2c3e828f542c2649))

## [6.3.3](https://github.com/AlaskaAirlines/auro-button/compare/v6.3.2...v6.3.3) (2021-06-15)


### Bug Fixes

* **build:** add lit-help as dependency [#108](https://github.com/AlaskaAirlines/auro-button/issues/108) ([da4edec](https://github.com/AlaskaAirlines/auro-button/commit/da4edec51e7cb1d50f7d6a2f09f60144960f1b07))

## [6.3.2](https://github.com/AlaskaAirlines/auro-button/compare/v6.3.1...v6.3.2) (2021-05-27)


### Bug Fixes

* default boolean props to false [#121](https://github.com/AlaskaAirlines/auro-button/issues/121) ([0e19faf](https://github.com/AlaskaAirlines/auro-button/commit/0e19fafbe0aaa3ce7fcfb5b6e09921b2a59711dd))

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
