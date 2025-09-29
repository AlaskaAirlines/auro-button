import { roundedRightAlignExample } from "../apiExamples/roundedRightAlign";
import { toggledTextExample } from "../apiExamples/toggledText";

import "../src/registered";

export function initExamples(initCount) {
  // biome-ignore lint: no-unused-vars
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
