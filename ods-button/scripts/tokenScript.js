console.log('Build started...');
console.log('\n==============================================');

// Required dependency
const tokenConfig = require('style-dictionary').extend('./scripts/tokenConfig.json');
const buttonConfig = require('style-dictionary').extend('./scripts/buttonConfig.json');
const dotsConfig = require('style-dictionary').extend('./scripts/dotsConfig.json');

// Style Dictionary build function
tokenConfig.buildAllPlatforms();
buttonConfig.buildAllPlatforms();
dotsConfig.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');
