/* eslint-disable max-lines */
/* eslint-disable max-statements */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable lit/attribute-value-entities */
/* eslint-disable one-var */
/* eslint-disable no-undef */

import { useAccessibleIt } from "@aurodesignsystem/auro-library/scripts/test-plugin/iterateWithA11Check.mjs";
import sinon from 'sinon';
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import { AuroButton } from '../src/auro-button.js';
import '../index.js';

useAccessibleIt();

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
    AuroButton.register('custom-button');

    expect(typeof customElements.get('custom-button')).to.equal(typeof AuroButton);
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
    expect(el.hasAttribute('ondark')).to.be.true;
  });

  it('tests setting secondary', async () => {
    const el = await fixture(html`
      <auro-button variant="secondary">Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');
    const classList = button.getAttribute('class').split(' ');

    expect(classList.includes('util_insetLg--squish')).to.be.true;
    expect(classList.includes('auro-button')).to.be.true;
    expect(el.getAttribute("variant")).to.equal('secondary');
  });

  it('tests setting secondary ondark', async () => {
    const el = await fixture(html`
      <auro-button variant="secondary" ondark>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');
    const classList = button.getAttribute('class').split(' ');

    expect(classList.includes('util_insetLg--squish')).to.be.true;
    expect(classList.includes('auro-button')).to.be.true;
    expect(el.hasAttribute('ondark')).to.be.true;
    expect(el.getAttribute("variant")).to.equal('secondary');
  });

  it('tests setting tertiary', async () => {
    const el = await fixture(html`
      <auro-button variant="tertiary">Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');
    const classList = button.getAttribute('class').split(' ');

    expect(classList.includes('util_insetLg--squish')).to.be.true;
    expect(classList.includes('auro-button')).to.be.true;
    expect(el.getAttribute("variant")).to.equal('tertiary');
  });

  it('tests setting tertiary ondark', async () => {
    const el = await fixture(html`
      <auro-button variant="tertiary" ondark>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');
    const classList = button.getAttribute('class').split(' ');

    expect(classList.includes('util_insetLg--squish')).to.be.true;
    expect(classList.includes('auro-button')).to.be.true;
    expect(el.hasAttribute('ondark')).to.be.true;
    expect(el.getAttribute("variant")).to.equal('tertiary');
  });

  it('tests setting arialabel', async () => {
    const el = await fixture(html`
      <auro-button arialabel='label'>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    expect(button.getAttribute('aria-label')).to.equal('label');
  });

  it('tests that button in loading state has proper aria-label', async () => {
    const el = await fixture(html`
      <auro-button loading>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    expect(button.getAttribute('aria-label')).to.equal(el.loadingText);
  });

  it('tests setting custom loading text on button in loading state', async () => {
    const el = await fixture(html`
      <auro-button loading loadingText="cargando">Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector('button');

    expect(button.getAttribute('aria-label')).to.equal(el.loadingText);
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

  it(`auro-button has various ARIA attrs properly set on <a> node`, async () => {
    const el = await fixture(html`
      <div>
        <auro-button tIndex="-1" ariahidden="true">Click Me!</auro-button>
        <auro-button arialabel="This is a button">Click Me!</auro-button>
        <auro-button ariaexpanded="true">Click Me!</auro-button>
      </div>
    `);

    expect(el.children[0].shadowRoot.querySelector('button')).to.have.attribute('tabindex', '-1');
    expect(el.children[0].shadowRoot.querySelector('button')).to.have.attribute('aria-hidden', 'true');
    expect(el.children[1].shadowRoot.querySelector('button')).to.have.attribute('aria-label', 'This is a button');
    expect(el.children[2].shadowRoot.querySelector('button')).to.have.attribute('aria-expanded', 'true');

  });

  it('auro-button custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-button"));

    expect(el).to.be.true;
  });

  it('default slot is not in DOM with circle shape', async () => {
    const el = await fixture(html`
      <auro-button shape="circle" arialabel="Up">
        <auro-icon customColor category="interface" name="arrow-up" slot="icon"></auro-icon>
        Text
      </auro-button>
    `);

    const slotElement = el.querySelector('slot:not([name])');

    expect(slotElement).to.not.exist;
  });

  it('handles form awareness with type="submit"', async () => {
    const el = await fixture(html`
      <form id="test-form">
        <auro-button type="submit">Submit</auro-button>
      </form>
    `);

    const mockSubmit = sinon.spy();

    const auroButton = el.querySelector('auro-button')
    // innerButton is used because the test suite does not handle clicks the same way a browser does
    const innerButton = el.querySelector('auro-button').shadowRoot.querySelector('button');
    expect(auroButton.form).not.to.be.null;
    expect(innerButton.getAttribute('type')).to.equal('submit');

    el.addEventListener('submit', (e) => {
      e.preventDefault();

      mockSubmit();
    });

    innerButton.click();
    await elementUpdated(el);

    expect(mockSubmit.calledOnce).to.be.true;
  })

  it('handles type=button inside of a form (does not submit)', async () => {
    const el = await fixture(html`
      <form id="test-form">
        <auro-button type="button">Button</auro-button>
      </form>
    `);

    const mockSubmit = sinon.spy();

    const auroButton = el.querySelector('auro-button')
    // innerButton is used because the test suite does not handle clicks the same way a browser does
    const innerButton = el.querySelector('auro-button').shadowRoot.querySelector('button');
    expect(auroButton.form).not.to.be.null;
    expect(innerButton.getAttribute('type')).to.equal('button');

    el.addEventListener('submit', (e) => {
      e.preventDefault();

      mockSubmit();
    })

    innerButton.click();
    await elementUpdated(el);

    expect(mockSubmit.calledOnce).to.be.false;
  })

  it('does not handle form association when not inside a form', async () => {
    const el = await fixture(html`
      <auro-button type="submit">Submit</auro-button>
    `);

    expect(el.form).to.be.null;
  })
});
