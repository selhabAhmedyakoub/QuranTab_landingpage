import { labelElements, sectionElements } from './elements.js';
import { clickLabelEvent, observeElements } from './utils.js';

labelElements.forEach((item) => clickLabelEvent(item));
observeElements(sectionElements);
// or
// labelElements.forEach(clickLabelEvent);
