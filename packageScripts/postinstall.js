'use strict';

const chalk = require('chalk');
const pjson = require('../package.json');

console.log(chalk.hex('#f26135')(`

 _______                   __           __ __
|     __|.---.-.--.--.    |  |--.-----.|  |  |.-----.
|__     ||  _  |  |  |    |     |  -__||  |  ||  _  |
|_______||___._|___  |    |__|__|_____||__|__||_____|
               |_____|
 __              _______                    __
|  |_.-----.    |   _   |.--.--.----.-----.|  |
|   _|  _  |    |       ||  |  |   _|  _  ||__|
|____|_____|    |___|___||_____|__| |_____||__|


╭ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ──────────────────────────────╮

        Thanks for installing the latest version
                of `) + chalk.hex('#ffd200').bold(`auro-button v${pjson.version}.`) + chalk.hex('#f26135')(`

        =>  DEPRECATION ALERT! DEPRECATION ALERT! <=`) + chalk.hex('#f26135')(`

        With this release, the `) + chalk.hex('#ffd200').bold(`light DOM version`) + chalk.hex('#f26135')(` of
        auro-button is `) + chalk.hex('#ffd200').bold(`deprecated`) + chalk.hex('#f26135')(`. This feature will be
        removed with the release of
        `) + chalk.hex('#ffd200').bold(`@aurodesignsystem/auro-button v7.0`) + chalk.hex('#f26135')(`.

        =>  DEPRECATION ALERT! DEPRECATION ALERT! <=`) + chalk.hex('#f26135')(`

        With this release, the `) + chalk.hex('#ffd200').bold(`ID property`) + chalk.hex('#f26135')(` of
        auro-button is `) + chalk.hex('#ffd200').bold(`deprecated`) + chalk.hex('#f26135')(`. This feature will be
        removed with the release of
        `) + chalk.hex('#ffd200').bold(`@aurodesignsystem/auro-button v7.0`) + chalk.hex('#f26135')(`.

        See issue https://git.io/JEEYZ

╰─────────────────────────────── ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─╯
`)
);
