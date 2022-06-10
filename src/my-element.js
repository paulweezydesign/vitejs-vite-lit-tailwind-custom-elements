import { html, css, LitElement } from 'lit';
import viteLogo from '/vite.svg';
import litLogo from './assets/lit.svg';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number },
    };
  }

  constructor() {
    super();

    this.count = 0;
  }
  createRenderRoot() {
    return this; // will render the template without shadow DOM
  }
  render() {
    return html`
    <section class="flex flex-col">
      <div class="flex mx-auto mt-8 w-full items-center justify-center ">
        <a class="mr-12 w-[100px]" href="https://vitejs.dev" target="_blank"
          ><img class="w-[150px]"  src="${viteLogo}" class="logo" alt="Vite logo"
        /></a>
        <a class="ml-28 w-[100px]" href="https://lit.dev" target="_blank"
          ><img class="w-[150px]" src=${litLogo} class="logo" alt="Lit logo"
        /></a>
      </div>
      
      <div class="card mx-auto ">
        <button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mb-2 w-24  " @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      
    </section>
      `;
  }

  _onClick() {
    this.count++;
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      h1 {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #deeppink;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `;
  }
}

window.customElements.define('my-element', MyElement);
