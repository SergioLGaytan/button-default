import { html, css, LitElement } from 'lit';

export class ButtonDefault extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--button-default-text-color, #000);
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 9px 18px;
      font-size: 16px;
      font-weight: 500;
      background: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
      color: #f9f9f9;
    }

    button:hover {
      border-color: #646cff;
    }
  `;

  static properties = {
    customName: { type: String, attribute:'custom-name' },
    buttonText: { type: String, attribute:'button-text'},
  };

  constructor() {
    super();
    this.customName = 'button-click';
    this.buttonText = 'Increment';
  }

  _customEvent(eventName, detail) {
    this.dispatchEvent(new CustomEvent(eventName, {
      composed: true,
      bubbles: true,
      detail
    }));
  };

  render() {
    return html`
      <button 
      @click=${() => this._customEvent(this.customName, true)}>
        ${this.buttonText}
      </button>
    `;
  }
}
