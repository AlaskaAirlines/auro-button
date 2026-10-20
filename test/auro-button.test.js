/* eslint-disable max-lines */
/* eslint-disable max-statements */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable lit/attribute-value-entities */
/* eslint-disable one-var */
/* eslint-disable no-undef */

import { useAccessibleIt } from "@aurodesignsystem/auro-library/scripts/test-plugin/iterateWithA11Check.mjs";
import { elementUpdated, expect, fixture, html } from "@open-wc/testing";
import sinon from "sinon";
import "../src/registered";

useAccessibleIt();

describe("auro-button", () => {
  it("tests instantiating the element with default properties works", async () => {
    const el = await fixture(html`
      <auro-button>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");
    const classList = button.getAttribute("class").split(" ");

    expect(button).to.not.be.null;
    expect(button.getAttribute("aria-label")).to.be.null;
    expect(button.getAttribute("aria-labelledby")).to.be.null;
    expect(button.getAttribute("autofocus")).to.be.null;
    expect(button.getAttribute("disabled")).to.be.null;
    expect(button.getAttribute("formnovalidate")).to.be.null;
    expect(button.getAttribute("id")).to.be.null;
    expect(button.getAttribute("value")).to.be.null;
    expect(classList.includes("auro-button")).to.be.true;
  });

  it("tests setting autofocus", async () => {
    const el = await fixture(html`
      <auro-button autofocus>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");

    expect(button.getAttribute("autofocus")).to.equal("");
  });

  it("tests setting disabled", async () => {
    const el = await fixture(html`
      <auro-button disabled>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");

    expect(button.getAttribute("disabled")).to.equal("");
  });

  it("tests setting inverse appearance", async () => {
    const el = await fixture(html`
      <auro-button appearance="inverse">Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");
    const classList = button.getAttribute("class").split(" ");

    expect(classList.includes("auro-button")).to.be.true;
    expect(el.getAttribute("appearance")).to.equal("inverse");
  });

  it("tests setting secondary", async () => {
    const el = await fixture(html`
      <auro-button variant="secondary">Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");
    const classList = button.getAttribute("class").split(" ");

    expect(classList.includes("auro-button")).to.be.true;
    expect(el.getAttribute("variant")).to.equal("secondary");
  });

  it("tests setting secondary inverse appearance", async () => {
    const el = await fixture(html`
      <auro-button variant="secondary" appearance="inverse">Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");
    const classList = button.getAttribute("class").split(" ");

    expect(classList.includes("auro-button")).to.be.true;
    expect(el.getAttribute("appearance")).to.equal("inverse");
    expect(el.getAttribute("variant")).to.equal("secondary");
  });

  it("tests setting tertiary", async () => {
    const el = await fixture(html`
      <auro-button variant="tertiary">Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");
    const classList = button.getAttribute("class").split(" ");

    expect(classList.includes("auro-button")).to.be.true;
    expect(el.getAttribute("variant")).to.equal("tertiary");
  });

  it("tests setting tertiary inverse appearance", async () => {
    const el = await fixture(html`
      <auro-button variant="tertiary" appearance="inverse">Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");
    const classList = button.getAttribute("class").split(" ");

    expect(classList.includes("auro-button")).to.be.true;
    expect(el.getAttribute("appearance")).to.equal("inverse");
    expect(el.getAttribute("variant")).to.equal("tertiary");
  });

  it("tests setting aria-label via attribute", async () => {
    const el = await fixture(html`
      <auro-button aria-label='label'>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");

    expect(button.getAttribute("aria-label")).to.equal("label");
  });

  it("tests setting aria-label via slot", async () => {
    const el = await fixture(html`
      <auro-button>
        <span slot="ariaLabel">label</span>
        Click Me!
      </auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");

    expect(button.getAttribute("aria-label")).to.equal("label");
  });

  it("tests that button in loading state has proper aria-label", async () => {
    const el = await fixture(html`
      <auro-button loading>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");

    expect(button.getAttribute("aria-label")).to.equal("Loading...");
  });

  it("tests setting custom loading text on button in loading state via attribute", async () => {
    const el = await fixture(html`
      <auro-button loading loadingText="cargando">Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");

    expect(button.getAttribute("aria-label")).to.equal(el.loadingText);
  });

  it("tests setting custom loading text on button in loading state via slot", async () => {
    const el = await fixture(html`
      <auro-button loading>
        <span slot="ariaLabel.loading">Cargando...</span>
      </auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");

    expect(button.getAttribute("aria-label")).to.equal("Cargando...");
  });

  it("tests setting aria-labelledby", async () => {
    const el = await fixture(html`
      <auro-button aria-labelledby='me'>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");

    expect(button.getAttribute("aria-labelledby")).to.equal("me");
  });

  it("tests setting title", async () => {
    const el = await fixture(html`
      <auro-button title='me'>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");

    expect(button.getAttribute("title")).to.equal("me");
  });

  it("tests setting type", async () => {
    const el = await fixture(html`
      <auro-button type='me'>Click Me!</auro-button>
    `);

    const root = el.shadowRoot;
    const button = root.querySelector("button");

    expect(button.getAttribute("type")).to.equal("me");
  });

  it("tests setting focus", async () => {
    const el = await fixture(html`
      <auro-button>Click Me!</auro-button>
    `);

    el.focus();
    expect(document.activeElement === el).to.be.true;
  });

  it("focuses the inner anchor when buttonHref is set", async () => {
    const el = await fixture(html`
      <auro-button buttonhref="/destination">Go</auro-button>
    `);

    el.focus();
    expect(el.shadowRoot.activeElement).to.equal(
      el.shadowRoot.querySelector("a"),
    );
  });

  it("does not throw or take focus when static is set", async () => {
    const el = await fixture(html`
      <auro-button static>Static Button</auro-button>
    `);

    expect(() => el.focus()).to.not.throw();
    expect(document.activeElement === el).to.be.false;
  });

  it("renders a static span that can't take focus, even when tIndex is set", async () => {
    const el = await fixture(html`
      <auro-button static tIndex="0">Static Button</auro-button>
    `);

    const span = el.shadowRoot.querySelector("span");

    expect(span.hasAttribute("tabindex")).to.be.false;

    span.focus();

    expect(el.shadowRoot.activeElement).to.be.null;
  });

  it("does not throw when focused before it first renders", () => {
    const el = document.createElement("auro-button");

    expect(() => el.focus()).to.not.throw();
  });

  it("auro-button has various ARIA attrs properly set on <a> node", async () => {
    const el = await fixture(html`
      <div>
        <auro-button tIndex="-1" aria-hidden="true">Click Me!</auro-button>
        <auro-button aria-label="This is a button">Click Me!</auro-button>
        <auro-button aria-expanded="true">Click Me!</auro-button>
      </div>
    `);

    expect(el.children[0].shadowRoot.querySelector("button")).to.have.attribute(
      "tabindex",
      "-1",
    );
    expect(el.children[0].shadowRoot.querySelector("button")).to.have.attribute(
      "aria-hidden",
      "true",
    );
    expect(el.children[1].shadowRoot.querySelector("button")).to.have.attribute(
      "aria-label",
      "This is a button",
    );
    expect(el.children[2].shadowRoot.querySelector("button")).to.have.attribute(
      "aria-expanded",
      "true",
    );
  });

  it("auro-button custom element is defined", async () => {
    const el = await Boolean(customElements.get("auro-button"));

    expect(el).to.be.true;
  });

  it('handles form awareness with type="submit"', async () => {
    const el = await fixture(html`
      <form id="test-form">
        <auro-button type="submit">Submit</auro-button>
      </form>
    `);

    const mockSubmit = sinon.spy();

    const auroButton = el.querySelector("auro-button");
    // innerButton is used because the test suite does not handle clicks the same way a browser does
    const innerButton = el
      .querySelector("auro-button")
      .shadowRoot.querySelector("button");
    expect(auroButton.form).not.to.be.null;
    expect(innerButton.getAttribute("type")).to.equal("submit");

    el.addEventListener("submit", (e) => {
      e.preventDefault();

      mockSubmit();
    });

    innerButton.click();
    await elementUpdated(el);

    expect(mockSubmit.calledOnce).to.be.true;
  });

  it("handles type=button inside of a form (does not submit)", async () => {
    const el = await fixture(html`
      <form id="test-form">
        <auro-button type="button">Button</auro-button>
      </form>
    `);

    const mockSubmit = sinon.spy();

    const auroButton = el.querySelector("auro-button");
    // innerButton is used because the test suite does not handle clicks the same way a browser does
    const innerButton = el
      .querySelector("auro-button")
      .shadowRoot.querySelector("button");
    expect(auroButton.form).not.to.be.null;
    expect(innerButton.getAttribute("type")).to.equal("button");

    el.addEventListener("submit", (e) => {
      e.preventDefault();

      mockSubmit();
    });

    innerButton.click();
    await elementUpdated(el);

    expect(mockSubmit.calledOnce).to.be.false;
  });

  it("does not handle form association when not inside a form", async () => {
    const el = await fixture(html`
      <auro-button type="submit">Submit</auro-button>
    `);

    expect(el.form).to.be.null;
  });

  it("if static attribute is set", async () => {
    const el = await fixture(html`
      <auro-button static>Static Button</auro-button>
    `);

    const root = el.shadowRoot;
    const span = root.querySelector("span");

    expect(span).to.not.be.null;
    expect(root.querySelector("button")).to.be.null;
    expect(el.hasAttribute("static")).to.be.true;
  });

  it("renders an anchor with the link part when buttonHref is set", async () => {
    const el = await fixture(html`
      <auro-button buttonhref="/destination">Go</auro-button>
    `);

    const root = el.shadowRoot;
    const anchor = root.querySelector("a");

    expect(anchor).to.not.be.null;
    expect(root.querySelector("button")).to.be.null;
    expect(anchor.getAttribute("href")).to.equal("/destination");
    expect(anchor.getAttribute("part")).to.equal("link");
  });

  it("binds buttonTarget and buttonRel onto the rendered anchor", async () => {
    const el = await fixture(html`
      <auro-button
        buttonhref="https://example.com"
        buttontarget="_blank"
        buttonrel="noopener noreferrer"
      >
        Go
      </auro-button>
    `);

    const anchor = el.shadowRoot.querySelector("a");

    expect(anchor.getAttribute("target")).to.equal("_blank");
    expect(anchor.getAttribute("rel")).to.equal("noopener noreferrer");
  });

  it("toggles data-hover on the host across pointerenter/pointerleave", async () => {
    const el = await fixture(html`
      <auro-button>Click Me!</auro-button>
    `);

    const button = el.shadowRoot.querySelector("button");

    expect(el.hasAttribute("data-hover")).to.be.false;

    button.dispatchEvent(new PointerEvent("pointerenter"));
    expect(el.hasAttribute("data-hover")).to.be.true;

    button.dispatchEvent(new PointerEvent("pointerleave"));
    expect(el.hasAttribute("data-hover")).to.be.false;
  });

  it("toggles data-active on the host across pointerdown/pointerup", async () => {
    const el = await fixture(html`
      <auro-button>Click Me!</auro-button>
    `);

    const button = el.shadowRoot.querySelector("button");

    expect(el.hasAttribute("data-active")).to.be.false;

    button.dispatchEvent(new PointerEvent("pointerdown"));
    expect(el.hasAttribute("data-active")).to.be.true;

    button.dispatchEvent(new PointerEvent("pointerup"));
    expect(el.hasAttribute("data-active")).to.be.false;
  });

  it("clears data-active on the host when the button blurs", async () => {
    const el = await fixture(html`
      <auro-button>Click Me!</auro-button>
    `);

    const button = el.shadowRoot.querySelector("button");

    button.dispatchEvent(new PointerEvent("pointerdown"));
    expect(el.hasAttribute("data-active")).to.be.true;

    button.dispatchEvent(new FocusEvent("blur"));
    expect(el.hasAttribute("data-active")).to.be.false;
  });

  describe("when the rendered element is replaced after first render", () => {
    const expectWrapperState = (el, tagName) => {
      const inner = el.shadowRoot.querySelector(".wrapper");

      expect(inner.tagName).to.equal(tagName);
      expect(inner.classList.contains("shape-rounded-md")).to.be.true;
      expect(inner.getAttribute("aria-describedby")).to.equal("hint");
      expect(inner.getAttribute("aria-label")).to.equal("Submit order");
      expect(el.wrapper).to.equal(inner);
    };

    it("keeps the shape class and ARIA attributes when static is set", async () => {
      const el = await fixture(html`
        <auro-button aria-describedby="hint" aria-label="Submit order">Submit</auro-button>
      `);

      el.setAttribute("static", "");
      await elementUpdated(el);

      expectWrapperState(el, "SPAN");
    });

    it("keeps the shape class and ARIA attributes when buttonhref is set", async () => {
      const el = await fixture(html`
        <auro-button aria-describedby="hint" aria-label="Submit order">Submit</auro-button>
      `);

      el.setAttribute("buttonhref", "/somewhere");
      await elementUpdated(el);

      expectWrapperState(el, "A");
    });

    it("keeps the shape class and ARIA attributes when static is removed again", async () => {
      const el = await fixture(html`
        <auro-button static aria-describedby="hint" aria-label="Submit order">Submit</auro-button>
      `);

      el.removeAttribute("static");
      await elementUpdated(el);

      expectWrapperState(el, "BUTTON");
    });

    it("moves ARIA attributes set after the swap onto the new element", async () => {
      const el = await fixture(html`
        <auro-button>Submit</auro-button>
      `);

      el.setAttribute("static", "");
      await elementUpdated(el);

      el.setAttribute("aria-describedby", "hint");
      await elementUpdated(el);

      const inner = el.shadowRoot.querySelector(".wrapper");
      expect(inner.getAttribute("aria-describedby")).to.equal("hint");
      expect(el.hasAttribute("aria-describedby")).to.be.false;
    });
  });

  describe("when the ariaLabel slot content changes", () => {
    // Let pending renders finish, so they can't pick up the change by accident
    const settle = async (el) => {
      await el.updateComplete;
      await new Promise((resolve) => setTimeout(resolve));
      await el.updateComplete;
    };

    it("updates the accessible name when the slotted element is replaced", async () => {
      const el = await fixture(html`
        <auro-button shape="circle"><span slot="ariaLabel">Add to favorites</span>+</auro-button>
      `);
      await settle(el);

      const next = document.createElement("span");
      next.slot = "ariaLabel";
      next.textContent = "Remove from favorites";
      el.querySelector('[slot="ariaLabel"]').replaceWith(next);
      await settle(el);

      expect(
        el.shadowRoot.querySelector("button").getAttribute("aria-label"),
      ).to.equal("Remove from favorites");
    });

    it("updates the accessible name when the slotted element's text changes", async () => {
      const el = await fixture(html`
        <auro-button shape="circle"><span slot="ariaLabel">Add to favorites</span>+</auro-button>
      `);
      await settle(el);

      el.querySelector('[slot="ariaLabel"]').textContent =
        "Remove from favorites";
      await settle(el);

      expect(
        el.shadowRoot.querySelector("button").getAttribute("aria-label"),
      ).to.equal("Remove from favorites");
    });

    it("updates the loading accessible name when its slotted text changes", async () => {
      const el = await fixture(html`
        <auro-button loading><span slot="ariaLabel.loading">Saving</span>Save</auro-button>
      `);
      await settle(el);

      el.querySelector('[slot="ariaLabel.loading"]').firstChild.data =
        "Saving your changes";
      await settle(el);

      expect(
        el.shadowRoot.querySelector("button").getAttribute("aria-label"),
      ).to.equal("Saving your changes");
    });
  });

  it("keeps moving ARIA attributes to the inner button after being removed and re-inserted", async () => {
    const parent = await fixture(html`
      <div>
        <auro-button aria-label="Submit order">Submit</auro-button>
      </div>
    `);
    const el = parent.querySelector("auro-button");

    parent.removeChild(el);
    parent.appendChild(el);

    el.setAttribute("aria-expanded", "true");
    el.variant = "secondary";
    await elementUpdated(el);

    const button = el.shadowRoot.querySelector("button");
    expect(button.getAttribute("aria-expanded")).to.equal("true");
    expect(button.getAttribute("aria-label")).to.equal("Submit order");
    expect(el.hasAttribute("aria-expanded")).to.be.false;
  });

  describe("icon-only shapes with text", () => {
    it("displays text in a circle shape when no icon is slotted", async () => {
      const el = await fixture(html`
        <auro-button shape="circle">1</auro-button>
      `);

      const textSlot = el.shadowRoot.querySelector(".textSlot");
      const fontSize = Number.parseFloat(getComputedStyle(textSlot).fontSize);

      expect(textSlot.classList.contains("heading-sm")).to.be.true;
      expect(fontSize).to.be.greaterThan(0);
    });

    it("displays text in a square shape when no icon is slotted", async () => {
      const el = await fixture(html`
        <auro-button shape="square">1</auro-button>
      `);

      const textSlot = el.shadowRoot.querySelector(".textSlot");
      const fontSize = Number.parseFloat(getComputedStyle(textSlot).fontSize);

      expect(textSlot.classList.contains("heading-sm")).to.be.true;
      expect(fontSize).to.be.greaterThan(0);
    });

    it("uses the icon-only font size for each size", async () => {
      const el = await fixture(html`
        <auro-button shape="circle" size="xl">1</auro-button>
      `);

      const textSlot = el.shadowRoot.querySelector(".textSlot");

      expect(textSlot.classList.contains("heading-lg")).to.be.true;
    });

    it("does not display bare text in a circle shape when an icon is slotted", async () => {
      const el = await fixture(html`
        <auro-button shape="circle">
          <auro-icon category="interface" name="plus-lg"></auro-icon>
          Add
        </auro-button>
      `);

      const textSlot = el.shadowRoot.querySelector(".textSlot");

      expect(textSlot.className.includes("heading-")).to.be.false;
      expect(getComputedStyle(textSlot).fontSize).to.equal("0px");
    });

    it("visually hides wrapped text in a circle shape when an icon is slotted", async () => {
      const el = await fixture(html`
        <auro-button shape="circle">
          <span slot="ariaLabel">arrow-up</span>
          <span id="wrappedText">Text is now shown!</span>
          <auro-icon category="interface" name="arrow-up"></auro-icon>
        </auro-button>
      `);

      const textSlot = el.shadowRoot.querySelector(".textSlot");
      const wrappedText = el.querySelector("#wrappedText");

      expect(textSlot.className.includes("heading-")).to.be.false;
      expect(getComputedStyle(wrappedText).width).to.equal("1px");
      expect(getComputedStyle(wrappedText).position).to.equal("absolute");
    });

    it("updates text display when slotted content swaps between an icon and text", async () => {
      const el = await fixture(html`
        <auro-button shape="circle">
          <span slot="ariaLabel">Add item</span>
          <auro-icon category="interface" name="plus-lg"></auro-icon>
        </auro-button>
      `);

      const textSlot = el.shadowRoot.querySelector(".textSlot");
      expect(textSlot.className.includes("heading-")).to.be.false;

      const icon = el.querySelector("auro-icon");
      icon.replaceWith(document.createTextNode("1"));
      await new Promise((resolve) =>
        el.shadowRoot
          .querySelector(".textSlot slot")
          .addEventListener("slotchange", resolve, { once: true }),
      );
      await elementUpdated(el);
      expect(textSlot.classList.contains("heading-sm")).to.be.true;

      const count = [...el.childNodes].find(
        (node) => node.nodeType === Node.TEXT_NODE && node.data === "1",
      );
      count.replaceWith(icon);
      await new Promise((resolve) =>
        el.shadowRoot
          .querySelector(".textSlot slot")
          .addEventListener("slotchange", resolve, { once: true }),
      );
      await elementUpdated(el);
      expect(textSlot.className.includes("heading-")).to.be.false;
    });

    it("keeps the standard font size for oblong shapes", async () => {
      const el = await fixture(html`
        <auro-button shape="rounded">Click Me!</auro-button>
      `);

      const textSlot = el.shadowRoot.querySelector(".textSlot");

      expect(textSlot.classList.contains("body-default")).to.be.true;
    });
  });

  describe("icon-only shapes with a slotted svg", () => {
    it("displays a slotted svg in a circle shape at the icon size", async () => {
      const el = await fixture(html`
        <auro-button shape="circle" size="xl">
          <span slot="ariaLabel">Add item</span>
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
            <path d="M11 5h2v14h-2zM5 11h14v2H5z" />
          </svg>
        </auro-button>
      `);

      const svg = el.querySelector("svg");
      const textSlot = el.shadowRoot.querySelector(".textSlot");

      expect(getComputedStyle(svg).position).to.not.equal("absolute");
      expect(getComputedStyle(svg).width).to.equal("36px");
      expect(getComputedStyle(svg).height).to.equal("36px");
      expect(textSlot.className.includes("heading-")).to.be.false;
    });

    it("displays a slotted svg in a square shape at the icon size", async () => {
      const el = await fixture(html`
        <auro-button shape="square">
          <span slot="ariaLabel">Add item</span>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24">
            <path d="M11 5h2v14h-2zM5 11h14v2H5z" />
          </svg>
        </auro-button>
      `);

      const svg = el.querySelector("svg");

      expect(getComputedStyle(svg).position).to.not.equal("absolute");
      expect(getComputedStyle(svg).width).to.equal("24px");
      expect(getComputedStyle(svg).height).to.equal("24px");
    });

    it("fills a slotted svg with the button text color", async () => {
      const el = await fixture(html`
        <auro-button shape="circle" variant="secondary">
          <span slot="ariaLabel">Add item</span>
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
            <path d="M11 5h2v14h-2zM5 11h14v2H5z" />
          </svg>
        </auro-button>
      `);

      const svg = el.querySelector("svg");
      const button = el.shadowRoot.querySelector(".auro-button");
      const enabledColor = getComputedStyle(button).color;

      expect(getComputedStyle(svg).fill).to.equal(enabledColor);

      el.disabled = true;
      await elementUpdated(el);

      const disabledColor = getComputedStyle(button).color;

      expect(disabledColor).to.not.equal(enabledColor);
      expect(getComputedStyle(svg).fill).to.equal(disabledColor);
    });

    it("visually hides wrapped text alongside a slotted svg", async () => {
      const el = await fixture(html`
        <auro-button shape="circle">
          <span slot="ariaLabel">Add item</span>
          <span id="wrappedText">Add</span>
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
            <path d="M11 5h2v14h-2zM5 11h14v2H5z" />
          </svg>
        </auro-button>
      `);

      const wrappedText = el.querySelector("#wrappedText");

      expect(getComputedStyle(wrappedText).width).to.equal("1px");
      expect(getComputedStyle(wrappedText).position).to.equal("absolute");
    });

    it("keeps the svg's own size in oblong shapes", async () => {
      const el = await fixture(html`
        <auro-button shape="rounded">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24">
            <path d="M11 5h2v14h-2zM5 11h14v2H5z" />
          </svg>
          Add
        </auro-button>
      `);

      const svg = el.querySelector("svg");

      expect(getComputedStyle(svg).width).to.equal("16px");
    });
  });
});
