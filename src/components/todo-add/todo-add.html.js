/**
 * Component Base Elements
 */
import { html } from '@polymer/lit-element';

/**
 * Component Style Importings
 */
import viewStyle from './todo-add.css';

export default function() {
  return html`
    <style>
      ${viewStyle}
    </style>
    <input type="text">
    <button @click="${this.add}">ADD</button>
  `;
}
