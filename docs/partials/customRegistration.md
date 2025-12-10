```js
// Import the class only
import { AuroButton } from '@aurodesignsystem/auro-button/class';

// Register with a custom name if desired
AuroButton.register('custom-button');
```

This will create a new custom element `<custom-button>` that behaves exactly like `<auro-button>`, allowing both to coexist on the same page without interfering with each other.