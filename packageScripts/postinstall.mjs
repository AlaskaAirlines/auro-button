'use strict';

import chalk from 'chalk';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
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

            With this release, the attributes`) + chalk.hex('#ffd200').bold(`
          {secondary, tertiary} `) + chalk.hex('#f26135')(`are `) + chalk.hex('#ffd200').bold(`deprecated`) + chalk.hex('#f26135')(`.
        These attributes will be REMOVED with the
      release of `) + chalk.hex('#ffd200').bold(`@aurodesignsystem/auro-button v8.0`) + chalk.hex('#f26135')(`.

╰─────────────────────────────── ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─╯
`)
);
