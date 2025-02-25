import { toggledTextExample } from "../apiExamples/toggledText";
import { roundedRightAlignExample } from "../apiExamples/roundedRightAlign";

import '../src/registered.js';

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    toggledTextExample();
    roundedRightAlignExample();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
