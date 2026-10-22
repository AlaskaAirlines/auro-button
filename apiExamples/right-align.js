export function roundedRightAlignExample() {
  const rightAlignElem = document.querySelector("#rightAlignElem");

  // Track hover and focus separately so the label stays visible while either is active
  let isHovered = false;
  let hasFocus = false;

  const updateShape = () => {
    rightAlignElem.shape = isHovered || hasFocus ? "pill" : "circle";
  };

  // The mouseover and mouseout events are to simulate toggling text for mouse users
  rightAlignElem.addEventListener("mouseover", () => {
    isHovered = true;
    updateShape();
  });

  rightAlignElem.addEventListener("mouseout", () => {
    isHovered = false;
    updateShape();
  });

  // The focusin and focusout events are to simulate toggling text for keyboard users
  rightAlignElem.addEventListener("focusin", () => {
    hasFocus = true;
    updateShape();
  });

  rightAlignElem.addEventListener("focusout", () => {
    hasFocus = false;
    updateShape();
  });
}
