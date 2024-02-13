/* eslint-disable max-lines */
/* eslint-disable max-statements */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable lit/attribute-value-entities */
/* eslint-disable one-var */
/* eslint-disable no-undef */
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import { AuroButton } from '../src/auro-button.js';
import { registerComponent } from '../index.js';
import '../index.js';

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

  it('successfully registers custom component', async () => {
    registerComponent('test-button');

    expect(typeof customElements.get('test-button')).to.equal(typeof AuroButton);
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

  it('default slot is not in DOM when iconOnly attribute is present', async () => {
    const el = await fixture(html`
      <auro-button rounded iconOnly>
        <auro-icon customColor category="interface" name="arrow-up" slot="icon"></auro-icon>
      </auro-button>
    `);

    const slotElement = el.querySelector('slot:not([name])');

    expect(slotElement).to.equal(null);
  });
});
