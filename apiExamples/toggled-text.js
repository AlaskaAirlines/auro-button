export function toggledTextExample() {
  const toggledTextElem = document.querySelector("#toggledTextElem");

  // Track hover and focus separately so the label stays visible while either is active
  let isHovered = false;
  let hasFocus = false;

  const updateShape = () => {
    toggledTextElem.shape = isHovered || hasFocus ? "pill" : "circle";
  };

  // The mouseover and mouseout events are to simulate toggling text for mouse users
  toggledTextElem.addEventListener("mouseover", () => {
    isHovered = true;
    updateShape();
  });

  toggledTextElem.addEventListener("mouseout", () => {
    isHovered = false;
    updateShape();
  });

  // The focusin and focusout events are to simulate toggling text for keyboard users
  toggledTextElem.addEventListener("focusin", () => {
    hasFocus = true;
    updateShape();
  });

  toggledTextElem.addEventListener("focusout", () => {
    hasFocus = false;
    updateShape();
  });
}
