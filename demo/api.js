import { toggledTextExample } from "../apiExamples/toggledText";
import { roundedRightAlignExample } from "../apiExamples/roundedRightAlign";

export function initButtonApiExamples(initCount) {
  initCount = initCount || 0;

  try {
    toggledTextExample();
    roundedRightAlignExample();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initButtonApiExamples(initCount + 1);
      }, 100);
    }
  }
}
