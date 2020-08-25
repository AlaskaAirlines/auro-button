/* eslint-disable max-lines */
/* eslint-disable max-statements */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable lit/attribute-value-entities */
/* eslint-disable one-var */
/* eslint-disable no-undef */
import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-button.js';

describe('auro-button', () => {
  it('tests instantiating the element with default properties works', async () => {
    const el = await fixture(html`
      <auro-button>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');
    const classList = button.getAttribute('class').split(' ');

    expect(button).to.not.be.null;
    expect(button.getAttribute('aria-label')).to.be.null;
    expect(button.getAttribute('aria-labelledby')).to.be.null;
    expect(button.getAttribute('autofocus')).to.be.null;
    expect(button.getAttribute('disabled')).to.be.null;
    expect(button.getAttribute('formnovalidate')).to.be.null;
    expect(button.getAttribute('id')).to.be.null;
    expect(button.getAttribute('value')).to.be.null;
    expect(classList.includes('util_insetLg--squish')).to.be.true;
    expect(classList.includes('auro-button')).to.be.true;
  });

  it('tests setting autofocus', async () => {
    const el = await fixture(html`
      <auro-button autofocus>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    expect(button.getAttribute('autofocus')).to.equal('');
  });

  it('tests setting disabled', async () => {
    const el = await fixture(html`
      <auro-button disabled>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    expect(button.getAttribute('disabled')).to.equal('');
  });

  it('tests setting ondark', async () => {
    const el = await fixture(html`
      <auro-button ondark>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');
    const classList = button.getAttribute('class').split(' ');

    expect(classList.includes('util_insetLg--squish')).to.be.true;
    expect(classList.includes('auro-button')).to.be.true;
    expect(classList.includes('auro-buttonOndark')).to.be.true;
  });

  it('tests setting secondary', async () => {
    const el = await fixture(html`
      <auro-button secondary>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');
    const classList = button.getAttribute('class').split(' ');

    expect(classList.includes('util_insetLg--squish')).to.be.true;
    expect(classList.includes('auro-button')).to.be.true;
    expect(classList.includes('auro-button--secondary')).to.be.true;
  });

  it('tests setting secondary ondark', async () => {
    const el = await fixture(html`
      <auro-button secondary ondark>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');
    const classList = button.getAttribute('class').split(' ');

    expect(classList.includes('util_insetLg--squish')).to.be.true;
    expect(classList.includes('auro-button')).to.be.true;
    expect(classList.includes('auro-button--secondary')).to.be.true;
    expect(classList.includes('auro-buttonOndark--secondary')).to.be.true;
    expect(classList.includes('auro-buttonOndark')).to.be.true;
  });

  it('tests setting tertiary', async () => {
    const el = await fixture(html`
      <auro-button tertiary>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');
    const classList = button.getAttribute('class').split(' ');

    expect(classList.includes('util_insetLg--squish')).to.be.true;
    expect(classList.includes('auro-button')).to.be.true;
    expect(classList.includes('auro-button--tertiary')).to.be.true;
  });

  it('tests setting tertiary ondark', async () => {
    const el = await fixture(html`
      <auro-button tertiary ondark>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');
    const classList = button.getAttribute('class').split(' ');

    expect(classList.includes('util_insetLg--squish')).to.be.true;
    expect(classList.includes('auro-button')).to.be.true;
    expect(classList.includes('auro-button--tertiary')).to.be.true;
    expect(classList.includes('auro-buttonOndark--tertiary')).to.be.true;
    expect(classList.includes('auro-buttonOndark')).to.be.true;
  });

  it('tests setting arialabel', async () => {
    const el = await fixture(html`
      <auro-button arialabel='label'>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    expect(button.getAttribute('aria-label')).to.equal('label');
  });

  it('tests setting arialabelledby', async () => {
    const el = await fixture(html`
      <auro-button arialabelledby='me'>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    expect(button.getAttribute('aria-labelledby')).to.equal('me');
  });

  it('tests setting id', async () => {
    const el = await fixture(html`
      <auro-button id='me'>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    expect(button.getAttribute('id')).to.equal('me');
  });

  it('tests setting title', async () => {
    const el = await fixture(html`
      <auro-button title='me'>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    expect(button.getAttribute('title')).to.equal('me');
  });

  it('tests setting type', async () => {
    const el = await fixture(html`
      <auro-button type='me'>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    expect(button.getAttribute('type')).to.equal('me');
  });

  it('tests setting value', async () => {
    const el = await fixture(html`
      <auro-button value='me'>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    expect(button.getAttribute('value')).to.equal('me');
  });

  it('tests setting svgIconLeft', async () => {
    const svg = '<svg viewBox="0 0 24 24" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style="width: var(--auro-size-lg); height: var(--auro-size-lg); fill: currentColor" class="ico_squareLarge"><title>Left indicator</title><desc>Directional indicator; left</desc><path fill-rule="evenodd" d="M14.3946049,6.34544498 L14.4787233,6.41806313 C14.7449899,6.6843297 14.7691959,7.10099338 14.5513415,7.39460487 L14.4787233,7.4787233 L10.0093932,11.9483932 L14.4787233,16.4180631 C14.7449899,16.6843297 14.7691959,17.1009934 14.5513415,17.3946049 L14.4787233,17.4787233 C14.2124567,17.7449899 13.7957931,17.7691959 13.5021816,17.5513415 L13.4180631,17.4787233 L8.5945,12.6555 C8.20397571,12.2649757 8.20397571,11.6318107 8.5945,11.2412864 L13.4180631,6.41806313 C13.6843297,6.15179657 14.1009934,6.12759052 14.3946049,6.34544498 Z"></path></svg>'
    const el = await fixture(html`
      <auro-button svgIconLeft=${svg}>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const svgEl = root.querySelector('svg');

    expect(svgEl).to.not.be.null;
  });

  it('tests setting svgIconRight', async () => {
    const svg = '<svg viewBox="0 0 24 24" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style="width: var(--auro-size-lg); height: var(--auro-size-lg); fill: currentColor" class="ico_squareLarge"><title>Left indicator</title><desc>Directional indicator; left</desc><path fill-rule="evenodd" d="M14.3946049,6.34544498 L14.4787233,6.41806313 C14.7449899,6.6843297 14.7691959,7.10099338 14.5513415,7.39460487 L14.4787233,7.4787233 L10.0093932,11.9483932 L14.4787233,16.4180631 C14.7449899,16.6843297 14.7691959,17.1009934 14.5513415,17.3946049 L14.4787233,17.4787233 C14.2124567,17.7449899 13.7957931,17.7691959 13.5021816,17.5513415 L13.4180631,17.4787233 L8.5945,12.6555 C8.20397571,12.2649757 8.20397571,11.6318107 8.5945,11.2412864 L13.4180631,6.41806313 C13.6843297,6.15179657 14.1009934,6.12759052 14.3946049,6.34544498 Z"></path></svg>'
    const el = await fixture(html`
      <auro-button svgIconRight=${svg}>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const svgEl = root.querySelector('svg');

    expect(svgEl).to.not.be.null;
  });

  it('tests setting focus', async () => {
    const el = await fixture(html`
      <auro-button>Click Me!</auro-button>
    `);

    el.focus();
    expect(document.activeElement === el).to.be.true;
  });

  it('auro-button is accessible', async () => {
    const el = await fixture(html`
      <auro-button>Click Me!</auro-button>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-button custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-button"));

    await expect(el).to.be.true;
  });
});
