export function toggledTextExample() {
  const toggledTextElem = document.querySelector("#toggledTextElem");

  // The mouseover and mouseout events are to simulate toggling text for mouse users
  toggledTextElem.addEventListener("mouseover", () => {
    toggledTextElem.shape = "pill";
  });

  toggledTextElem.addEventListener("mouseout", () => {
    toggledTextElem.shape = "circle";
  });

  // The focusin and focusout events are to simulate toggling text for keyboard users
  toggledTextElem.addEventListener("focusin", () => {
    toggledTextElem.shape = "pill";
  });

  toggledTextElem.addEventListener("focusout", () => {
    toggledTextElem.shape = "circle";
  });
}
