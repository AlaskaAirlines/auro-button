# ::part()

While `::part()` and `::theme()` are part of the same draft, `::part()` landed in [Chrome 73](https://www.chromestatus.com/features/5763933658939392).

For more information on this newly released feature, see [::part and ::theme, an ::explainer](https://meowni.ca/posts/part-theme-explainer/).

## Browser support

This feature is highly experimental and not available in all browsers.

| Browser | Support | Release version |
|---|---|---|
| Chrome | Shipped | 73 |
| Edge | [Public support][1] | n/a |
| Firefox | [Public support][1] | n/a |
| Safari | [Public support][1] | n/a |
| Internet Explorer | n/a | n/a |

[1]: https://github.com/w3c/csswg-drafts/issues/2368

## Component support

\<ods-button> currently supports this feature using the attributes of `part="button--modifier"` and `part="dots--modifier"`. To use this feature, adding the following selector(s) to the CSS for the project:

```css
ods-button::part(button--modifier) {
  ...
}

ods-button::part(dots--modifier) {
  ...
}
```

Using this method would give the developer full access to the scope of the button writing any CSS necessary to address customization needs within the scope of project.
