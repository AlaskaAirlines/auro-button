export function roundedRightAlignExample() {
  const rightAlignElem = document.querySelector('#rightAlignElem');

  // The mouseover and mouseout events are to simulate toggling text for mouse users
  rightAlignElem.addEventListener('mouseover', () => {
    rightAlignElem.shape = "pill";
  });

  rightAlignElem.addEventListener('mouseout', () => {
    rightAlignElem.shape = "circle";
  });

  // The focusin and focusout events are to simulate toggling text for keyboard users
  rightAlignElem.addEventListener('focusin', () => {
    rightAlignElem.shape = "pill";
  });

  rightAlignElem.addEventListener('focusout', () => {
    rightAlignElem.shape = "circle";
  });
}
