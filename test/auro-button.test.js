import { aIt } from "@aurodesignsystem/auro-library/scripts/test-plugin/iterateWithA11Check.mjs";
/* eslint-disable max-lines */
/* eslint-disable max-statements */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable lit/attribute-value-entities */
/* eslint-disable one-var */
/* eslint-disable no-undef */
import sinon from 'sinon';
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import { AuroButton } from '../src/auro-button.js';
import '../index.js';

describe('auro-button', () => {
  aIt('tests instantiating the element with default properties works', async () => {
    const el = await fixture(html`
      <auro-button>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');
    const classList = button.getAttribute('class').split(' ');

    await expect(button).to.not.be.null;
    await expect(button.getAttribute('aria-label')).to.be.null;
    await expect(button.getAttribute('aria-labelledby')).to.be.null;
    await expect(button.getAttribute('autofocus')).to.be.null;
    await expect(button.getAttribute('disabled')).to.be.null;
    await expect(button.getAttribute('formnovalidate')).to.be.null;
    await expect(button.getAttribute('id')).to.be.null;
    await expect(button.getAttribute('value')).to.be.null;
    await expect(classList.includes('util_insetLg--squish')).to.be.true;
    await expect(classList.includes('auro-button')).to.be.true;
  });

  aIt('successfully registers custom component', async () => {
    AuroButton.register('custom-button');

    await expect(typeof customElements.get('custom-button')).to.equal(typeof AuroButton);
  });

  aIt('tests setting autofocus', async () => {
    const el = await fixture(html`
      <auro-button autofocus>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    await expect(button.getAttribute('autofocus')).to.equal('');
  });

  aIt('tests setting disabled', async () => {
    const el = await fixture(html`
      <auro-button disabled>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    await expect(button.getAttribute('disabled')).to.equal('');
  });

  aIt('tests setting ondark', async () => {
    const el = await fixture(html`
      <auro-button ondark>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');
    const classList = button.getAttribute('class').split(' ');

    await expect(classList.includes('util_insetLg--squish')).to.be.true;
    await expect(classList.includes('auro-button')).to.be.true;
    await expect(el.hasAttribute('ondark')).to.be.true;
  });

  aIt('tests setting secondary', async () => {
    const el = await fixture(html`
      <auro-button secondary>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');
    const classList = button.getAttribute('class').split(' ');

    await expect(classList.includes('util_insetLg--squish')).to.be.true;
    await expect(classList.includes('auro-button')).to.be.true;
    await expect(el.hasAttribute('secondary')).to.be.true;
  });

  aIt('tests setting secondary ondark', async () => {
    const el = await fixture(html`
      <auro-button secondary ondark>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');
    const classList = button.getAttribute('class').split(' ');

    await expect(classList.includes('util_insetLg--squish')).to.be.true;
    await expect(classList.includes('auro-button')).to.be.true;
    await expect(el.hasAttribute('ondark')).to.be.true;
    await expect(el.hasAttribute('secondary')).to.be.true;
  });

  aIt('tests setting tertiary', async () => {
    const el = await fixture(html`
      <auro-button tertiary>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');
    const classList = button.getAttribute('class').split(' ');

    await expect(classList.includes('util_insetLg--squish')).to.be.true;
    await expect(classList.includes('auro-button')).to.be.true;
    await expect(el.hasAttribute('tertiary')).to.be.true;
  });

  aIt('tests setting tertiary ondark', async () => {
    const el = await fixture(html`
      <auro-button tertiary ondark>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');
    const classList = button.getAttribute('class').split(' ');

    await expect(classList.includes('util_insetLg--squish')).to.be.true;
    await expect(classList.includes('auro-button')).to.be.true;
    await expect(el.hasAttribute('ondark')).to.be.true;
    await expect(el.hasAttribute('tertiary')).to.be.true;
  });

  aIt('tests setting arialabel', async () => {
    const el = await fixture(html`
      <auro-button arialabel='label'>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    await expect(button.getAttribute('aria-label')).to.equal('label');
  });

  aIt('tests that button in loading state has proper aria-label', async () => {
    const el = await fixture(html`
      <auro-button loading>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    await expect(button.getAttribute('aria-label')).to.equal(el.loadingText);
  });

  aIt('tests setting custom loading text on button in loading state', async () => {
    const el = await fixture(html`
      <auro-button loading loadingText="cargando">Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    await expect(button.getAttribute('aria-label')).to.equal(el.loadingText);
  });

  aIt('tests setting arialabelledby', async () => {
    const el = await fixture(html`
      <auro-button arialabelledby='me'>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    await expect(button.getAttribute('aria-labelledby')).to.equal('me');
  });

  aIt('tests setting title', async () => {
    const el = await fixture(html`
      <auro-button title='me'>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    await expect(button.getAttribute('title')).to.equal('me');
  });

  aIt('tests setting type', async () => {
    const el = await fixture(html`
      <auro-button type='me'>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    await expect(button.getAttribute('type')).to.equal('me');
  });

  aIt('tests setting value', async () => {
    const el = await fixture(html`
      <auro-button value='me'>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    await expect(button.getAttribute('value')).to.equal('me');
  });

  aIt('tests setting focus', async () => {
    const el = await fixture(html`
      <auro-button>Click Me!</auro-button>
    `);

    el.focus();
    await expect(document.activeElement === el).to.be.true;
  });

  aIt('auro-button is accessible', async () => {
    const el = await fixture(html`
      <auro-button>Click Me!</auro-button>
    `);

    await expect(el).to.be.accessible();
  });

  aIt('auro-button custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-button"));

    await expect(el).to.be.true;
  });

  aIt('default slot is not in DOM when iconOnly attribute is present', async () => {
    const el = await fixture(html`
      <auro-button rounded iconOnly>
        <auro-icon customColor category="interface" name="arrow-up" slot="icon"></auro-icon>
      </auro-button>
    `);

    const slotElement = el.querySelector('slot:not([name])');

    await expect(slotElement).to.equal(null);
  });

  aIt('handles form awareness with type="submit"', async () => {
    const el = await fixture(html`
      <form id="test-form">
        <auro-button type="submit">Submit</auro-button>
      </form>
    `);

    const mockSubmit = sinon.spy();

    const auroButton = el.querySelector('auro-button')
    // innerButton is used because the test suite does not handle clicks the same way a browser does
    const innerButton = el.querySelector('auro-button').shadowRoot.querySelector('button');
    await expect(auroButton.form).not.to.be.null;
    await expect(innerButton.getAttribute('type')).to.equal('submit');

    el.addEventListener('submit', (e) => {
      e.preventDefault();

      mockSubmit();
    });

    innerButton.click();
    await elementUpdated(el);

    await expect(mockSubmit.calledOnce).to.be.true;
  })

  aIt('handles type=button inside of a form (does not submit)', async () => {
    const el = await fixture(html`
      <form id="test-form">
        <auro-button type="button">Button</auro-button>
      </form>
    `);

    const mockSubmit = sinon.spy();

    const auroButton = el.querySelector('auro-button')
    // innerButton is used because the test suite does not handle clicks the same way a browser does
    const innerButton = el.querySelector('auro-button').shadowRoot.querySelector('button');
    await expect(auroButton.form).not.to.be.null;
    await expect(innerButton.getAttribute('type')).to.equal('button');

    el.addEventListener('submit', (e) => {
      e.preventDefault();

      mockSubmaIt();
    })

    innerButton.click();
    await elementUpdated(el);

    await expect(mockSubmit.calledOnce).to.be.false;
  })

  aIt('does not handle form association when not inside a form', async () => {
    const el = await fixture(html`
      <auro-button type="submit">Submit</auro-button>
    `);

    const innerButton = el.shadowRoot.querySelector('button');
    await expect(el.form).to.be.null;
    await expect(innerButton.getAttribute('type')).to.equal('submit');

    innerButton.click();
    await elementUpdated(el);
  })
});
