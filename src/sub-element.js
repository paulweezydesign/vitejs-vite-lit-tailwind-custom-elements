import { html, css, LitElement } from 'lit';

export class SubElement extends LitElement {
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: { type: String },

      constructor() {
        super();
        this.docsHint = 'Click on the Vite and Lit logos to learn more';
      }
      createRenderRoot() {
        return this; // will render the template without shadow DOM
      }
      render() {
        return html`
        <p class="text-center text-xl text-white/90">${this.docsHint}</p>


        `;
      }

window.customElements.define('sub-element', SubElement);