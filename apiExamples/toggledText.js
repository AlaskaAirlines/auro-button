export function toggledTextExample() {
  const toggledTextElem = document.querySelector('#toggledTextElem');

  // The mouseover and mouseout events are to simulate toggling text for mouse users
  toggledTextElem.addEventListener('mouseover', () => {
    toggledTextElem.iconOnly = false;
  });

  toggledTextElem.addEventListener('mouseout', () => {
    toggledTextElem.iconOnly = true;
  });

  // The focusin and focusout events are to simulate toggling text for keyboard users
  toggledTextElem.addEventListener('focusin', () => {
    toggledTextElem.iconOnly = false;
  });

  toggledTextElem.addEventListener('focusout', () => {
    toggledTextElem.iconOnly = true;
  });
}
