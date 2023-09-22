// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit";
import styleCss from "./theme-switcher-style-css.js";

/**
 * @attr {Array} themes - This accepts an array of JSON object outlining the themes to support.
 */

/* eslint-disable max-statements, one-var, no-magic-numbers */
export class AuroThemeSwitcher extends LitElement {

  constructor() {
    super();
    this.themes = [
      {
        label: 'Auro',
        url: 'https://cdn.jsdelivr.net/npm/@alaskaairux/design-tokens@latest/dist/tokens/CSSCustomProperties.css'
      },
      {
        label: 'Auro Dark',
        url: 'AURO DARK URL'
      },
      {
        label: 'JetStream',
        url: 'JETSTREAM URL'
      },
      {
        label: 'JetStream Dark',
        url: 'JETSTREAM DARK URL'
      }
    ];

    this.disableApply = true;
    this.currentTheme = [];
    this.newTheme = [];
    this.loadedThemes = [];
  }

  static get styles() {
    return [styleCss];
  }

  static get properties() {
    return {
      themes:        {
        type: Array
      },
      currentTheme: {
        type: Array
      },
      newTheme: {
        type: Array
      },
      disableApply: {
        type: Boolean,
        reflect: true
      }
    };
  }

  getLoadedThemes() {
    this.loadedThemes = [];
    const stylesheets = document.styleSheets;

    this.themes.forEach(theme => {
      for (let i = 0; i < stylesheets.length; i++) {
        if (stylesheets[i].href === theme.url) {
          this.loadedThemes.push(theme);
        }
      }
    })
  }

  unloadThemes() {
    this.themes.forEach(theme => {
      try{
        const loadedTheme = document.querySelector(`link[rel=stylesheet][href='${theme.url}']`);
        loadedTheme.parentNode.removeChild(loadedTheme);
      }catch(err){}

    })
  }

  loadSelectedthemes() {
    const head = document.getElementsByTagName("head")[0];
    this.currentTheme = this.newTheme;


    this.currentTheme.forEach(theme => {
      let themeObj = JSON.parse(theme);
      let link = document.createElement("link");

      link.setAttribute('theme', themeObj.label);
      link.rel = "stylesheet";
      link.href = themeObj.url;

      head.appendChild(link);
    })
  }

  handleCheckboxSelection(evt) {
    if (evt.target.checked) {
      const themeIndex = this.newTheme.indexOf(evt.target.value);

      if (themeIndex === -1) {
        this.newTheme.push(evt.target.value);
      }
    } else {
      const themeIndex = this.newTheme.indexOf(evt.target.value);

      if (themeIndex > -1) {
        this.newTheme.splice(themeIndex, 1);
      }
    }

    this.requestUpdate();
    this.handleApplyBtnState();
  }

  handleApplyBtnState() {
    this.getLoadedThemes();

    if (JSON.stringify(this.loadedThemes) !== JSON.stringify(this.newTheme)) {
      this.disableApply = false;
    } else {
      this.disableApply = true;
    }
  }

  applyThemes() {
    this.disableApply = true;

    // this.dropdown.hide();
    this.toggleThemeSwitcher();
    this.unloadThemes();
    this.loadSelectedthemes();
  }

  markLoadedthemes() {
    this.loadedThemes.forEach(theme => {
      const checkboxes = this.shadowRoot.querySelector('auro-dialog').querySelectorAll('auro-checkbox'); // .querySelector(selector); //#${theme.label}]

      checkboxes.forEach(checkbox => {
        if (checkbox.id === theme.label) {
          checkbox.setAttribute('checked', true);

          this.newTheme.push(checkbox.getAttribute('value'));
          this.currentTheme.push(checkbox.getAttribute('value'));
        }

        this.requestUpdate();
      })
    })
  }

  toggleThemeSwitcher() {
    console.warn('toggleThemeSwitcher()');

    let dialog = this.shadowRoot.querySelector('#auroThemeSwitcherDialog');

    // console.warn(dialog)

    // const html = document.querySelector('html');

    dialog.hasAttribute('open')
    ? dialog.removeAttribute("open")
    : (dialog.removeAttribute("open"),
      dialog.setAttribute("open", true))
  }

  toggleInterruption = (elName) => {
    let interruption = document.querySelector(elName);
    // const html = document.querySelector('html');

    interruption.hasAttribute('open')
    ? interruption.removeAttribute("open")
    : (interruption.removeAttribute("open"),
      interruption.setAttribute("open", true))
  }

  firstUpdated() {
    this.dropdown = this.shadowRoot.querySelector('#auroThemeSelector');

    this.getLoadedThemes();
    this.markLoadedthemes();
  }

  render() {
    return html`
      <div>
        <auro-button class="themeSwitcherLaunchBtn" aria-label="Theme Switcher" variant="tertiary" slim @click="${this.toggleThemeSwitcher}">
          <auro-icon category="interface" name="settings"></auro-icon>
        </auro-button>
        <auro-dialog id="auroThemeSwitcherDialog">
          <span slot="header">Theme Switcher</span>
          <div slot="content">
            <div class="selector">
              <span slot="legend">
                Choose which themes to apply:
              </span>
              <auro-checkbox-group required>
                ${this.themes.map((theme) => html`
                <auro-checkbox
                  value="${JSON.stringify(theme)}"
                  name="${theme.label}"
                  id="${theme.label}"
                  @auroCheckbox-input="${this.handleCheckboxSelection}">
                  ${theme.label}
                </auro-checkbox>
                `
                )}
              </auro-checkbox-group>
            </div>
            ${this.disableApply ? undefined : html`
              <div slot="footer" className="auro_containedButtons">
                <div class="applicator">
                  ${this.newTheme.length === 0 ? html`
                    <p>
                      No themes are selected. Clicking the APPLY buttton will render the page with no theme styles.
                    </p>
                  ` : html`
                    <p>
                      Clicking the APPLY button will remove all current themes and apply the selected themes in the following order:
                    </p>
                    <ol>
                      ${this.newTheme.map((theme) => html`<li>${JSON.parse(theme).label}</li>`)}
                    </ol>
                  `}

                  <auro-button
                    @click="${this.applyThemes}"
                    ?disabled="${this.disableApply}">
                    APPLY
                  </auro-button>
                </div>
              </div>
            `}
          </div>
        </auro-dialog>
      </div>
    `;
  }
}

// default internal definition
if (!customElements.get("auro-themeswitcher")) {
  customElements.define("auro-themeswitcher", AuroThemeSwitcher);
}
