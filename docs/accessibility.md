# Accessibility

## Text

`auro-button` uses the standard body size text of 16px. 

## Color
The default blue color (`auro-color-ui-default-on-light`) has a contrast ratio of *4.84:1* against white. The color contrast tests pass for AA and AAA levels except for the AAA level on normal text.

### References
[WCAG 2.1 1.4.3] The visual presentation of text and images of text has a contrast ratio of at least *4.5:1*.

[WCAG 2.1 1.4.1] Color is not used as the only visual means of conveying information.

## Interactions 

### Tertiary Button
Although the tertiary button does not have an underline by default, the hover state has an underline. According to WCAG 2.1 1.4.1, color can be used as the only indicator of a link if “the contrast ratio between the link and the surrounding text is at least 3:1 and an additional distinction (e.g., it becomes underlined) is provided when the link is hovered over and receives focus.” User research also indicates that color blind users can differentiate between an underlined tertiary button and normal text. In this case, `auro-button` is differentiated from a hyperlink and adheres to accessibility guidelines.
