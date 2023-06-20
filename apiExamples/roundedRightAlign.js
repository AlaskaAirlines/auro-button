export function roundedRightAlignExample() {
  const rightAlignElem = document.querySelector('#rightAlignElem');

  // The mouseover and mouseout events are to simulate toggling text for mouse users
  rightAlignElem.addEventListener('mouseover', () => {
    rightAlignElem.iconOnly = false;
  });

  rightAlignElem.addEventListener('mouseout', () => {
    rightAlignElem.iconOnly = true;
  });

  // The focusin and focusout events are to simulate toggling text for keyboard users
  rightAlignElem.addEventListener('focusin', () => {
    rightAlignElem.iconOnly = false;
  });

  rightAlignElem.addEventListener('focusout', () => {
    rightAlignElem.iconOnly = true;
  });
}
