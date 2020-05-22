# ODS Button API

| Attribute | Type | Description |
|----|----|----|
| arialabel | string | Populates the `aria-label` attribute that is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. If there is visible text labeling the element, use `aria-labelledby` instead. |
| arialabelledby | string | Populates the `aria-labelledby` attribute that establishes relationships between objects and their label(s), and its value should be one or more element IDs, which refer to elements that have the text needed for labeling. List multiple element IDs in a space delimited fashion. |
| autofocus | boolean | This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it |
| buttontype | string | Type of button defines the visual styling. <br/>Option(s): `primary`, `secondary`. Default value is `primary`. |
| condensed | boolean | Reduces left/right padding to fit button in condensed spaces |
| disabled | boolean | If set to true button will become disabled and not allow for interactions. <br/>Default value is `false`. |
| flowtype | string | Sets display type to represent the flow options. Options: `complete`
| form | string | The form element that the button is associated with (its form owner). The value of the attribute must be the id attribute of a `<form>` element in the same document |
| formaction | string | Specifies the URL of the file that will process the input control when the form is submitted. The formaction attribute overrides the `action` attribute of the `<form>` element |
| formenctype| string | If the button is a submit button, this attribute specifies the type of content that is used to submit the form to the server. |
| formmethod | string | If the button is a submit button, this attribute specifies the HTTP method that the browser uses to submit the form. |
| formnovalidate | boolean | If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner. |
| formtarget | string | If the button is a submit button, this attribute is a name or keyword indicating where to display the response that is received after submitting the form. Options: `_self`, `_blank`, `_parent`, `_top:` |
| id | string | Set the unique ID of an element. |
| isactive | boolean | If set to true button will appear in active state. <br/>Default value is `false`. |
| name | string | The name of the button, which is submitted with the form data. |
| responsive | boolean | Sets the UI of the button to be responsive within its given container. |
| reverse | boolean | Required to be paired with `responsive`, but sets the placement in the reverse direction of natural content. |
| svgIconLeft | string | Pass in SVG string for icon to appear on the LEFT |
| svgIconRight | string | Pass in SVG string for icon to appear on the RIGHT |
| title | string | Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element. |
| theme | string | Sets theme of element; option: `classic` |
| type | string | The type of the button. Possible values are: `submit`, `reset`, `button` |
| value | string | Defines the value associated with the button which is submitted with the form data. |
