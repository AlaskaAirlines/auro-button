# \<ods-button>

Orion Design System Button element, clickable elements used to perform an action.

\<ods-button> is a wrapper for a standard \<button> element. The content of a button is to be passed in via the `string` attribute. See below for examples of use. 

## Element \<ods-button>

```
class OdsButton extends LitElement
```

### Styling:

There are no styling modification options for this element.

### Button use cases

The \<ods-button> element should be used in situations where users may:

* submit a form
* begin a new task
* trigger a new UI element to appear on the page
* specify a new or next step in a process

### Buttons are not Hyperlinks 

In cases were the action of the button would not fit the criteria above, it is most likely a Hyperlink. In that situation it is recommended that the \<ods-hyperlink> element be used with options of `role=button` configuration for visual appearance over functional use. 

### Responsive state:

The \<ods-button> element will respond without context settings as expected. Within context of another component, set `context` flag to `true` and \<ods-button> will adapt to contextual shape.

### Properties:

| Attribute | value type | Description |
|----|----|----|
| string | string | Value entered as string will be displayed as string value within the button element |
| context | boolean | Context defines responsiveness of element. Set to true, element will always be 100% and respond to parent context shape. <br/>Default value is `false`. |
| type | string | Type of button defines the visual styling. <br/>Option(s): `primary`, `secondary`. Default value is `primary`.  |
| disabled | boolean | If set to true button will become disabled and not allow for interactions. <br/>Default value is `false`.  |
| active | boolean | If set to true button will appear in active state. <br/>Default value is `false`. |

### API Code Examples

Default button

```
<ods-button string="hello world"></ods-button>
```

Default button with disabled state set to `true`

```
<ods-button disabled="true" string="hello world"></ods-button>
```

Default button with active state set to `true`

```
<ods-button active="true" string="hello world"></ods-button>
```

Secondary button

```
<ods-button type="secondary" string="hello world"></ods-button>
```

Secondary button with disabled state set to `true`

```
<ods-button type="secondary" disabled="true" string="hello world"></ods-button>
```

Secondary button with active state set to `true`

```
<ods-button active="true" type="secondary" string="hello world"></ods-button>
```

#### Contextual button

A special case scenario for responsiveness. The \<ods-button> element is built to handle responsive situations when it is the only element within a block. If the \<ods-button> element is used within context of another element, then it's the responsibility of the parent element to dictate the responsiveness of the \<ods-element>. 

In this scenario, simply set the `context` of the element to be `true`. 

```
<ods-button string="Default state; context true" context="true"></ods-button>
```

## Install instructions 

The use of any ODS Element or Component has a prerequisite requirement of the ODS [Design Tokens](https://itsals.visualstudio.com/Orion%20Design%20System/_packaging?_a=package&feed=as.com-npm&package=%40alaskaair%2Forion-design-tokens&protocolType=Npm&version=0.4.1419099). See repository and API information [here](https://itsals.visualstudio.com/Orion%20Design%20System/_git/designTokens?_a=readme). Install dependency from [npm artifacts repository](https://itsals.visualstudio.com/Orion%20Design%20System/_packaging?_a=package&feed=as.com-npm&package=%40alaskaair%2Fods-button&protocolType=Npm&version=0.1.1411490)

**Define component dependency**

```
import "@alaskaair/ods-button/ods-button";
```

**Reference component in HTML**

```
<ods-button string="hello world" />
```

### CSS, Custom Properties and fallbacks

ODS Web Components use CSS Custom Properties to define core UI properties of each element or component. Where CSS Custom Properties are not supported, fallback properties are generated.

When installing a ODS Web Component, all CSS needed for the component is included with the npm package. No additional builds or processing is needed at the project level. 

## Accessibility (lighthouse report 2.19.18)

| Test | Result | 
|----|----|
| [aria-*] attributes match their roles | √ |
| [aria-*] attributes have valid values | √ |
| [aria-*] attributes are valid and not misspelled | √ |
| Buttons have an accessible name | √ |
| Background and foreground colors have a sufficient contrast ratio | √ |
| Document has a \<title> element | √ |
| [id] attributes on the page are unique | √ |
| <html> element has a [lang] attribute | √ |
| <html> element has a valid value for its [lang] attribute | √ |
| [user-scalable="no"] is not used in the <meta name="viewport"> element and the [maximum-scale] attribute is not less than 5. | √ |
