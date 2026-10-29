# PR 445 — replies

PR: fix: use the disabled text color on disabled primary buttons AB#1672236
URL: https://github.com/AlaskaAirlines/auro-button/pull/445
Generated: 2026-10-29

## jason-capsule42

### src/styles/color.scss:50 — Respond

Reviewer: jason-capsule42
Comment: "This needs to be updated so that this token is applied as the default but when appearance === inverse it needs to use the other token from the ticket."
Link: https://github.com/AlaskaAirlines/auro-button/pull/445#discussion_r4415754905

Drafted reply:
> The inverse case is already covered. `:host([appearance="inverse"][disabled])` (and the `ondark` alias) at line 191 sets `--ds-auro-button-text-color` to `--ds-basic-color-texticon-inverse-disabled`. That selector is more specific than `:host([disabled])`, so inverse buttons keep the inverse token. This line only fills in the default case. Note that the token in the ticket comment (`texticon-disabled-inverse`) doesn't exist in design-tokens 9.4.1; `texticon-inverse-disabled` is the one that ships.

### test/auro-button.test.js:644 — Respond

Reviewer: jason-capsule42
Comment: "Should we really have an actual unit test for every combination of token applied via state or property throughout the component library? ..."
Link: https://github.com/AlaskaAirlines/auro-button/pull/445#discussion_r4415775690

Drafted reply:
> Agreed. Nothing else in the suite tests state-to-token mapping, so I've removed it. This belongs in visual regression once we have it here.
