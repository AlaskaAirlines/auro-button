// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

const fs = require('fs');
const json = require('../package.json');
const version = json.version;

fs.writeFileSync('./src/version.js', `export default '${version}'`);

console.log(`\nGenerating version v${version} reference file \n`)
