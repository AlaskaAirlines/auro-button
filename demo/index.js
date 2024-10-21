import { AuroButton } from '../src/auro-button.js';

AuroButton.register('custom-button');

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
