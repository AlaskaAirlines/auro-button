import { deprecatedProseToFieldPlugin } from '@aurodesignsystem/auro-library/scripts/build/deprecatedProseToFieldPlugin.mjs';

export default {
  globs: ['src/**/*.js'],
  litelement: true,
  plugins: [deprecatedProseToFieldPlugin()]
};
