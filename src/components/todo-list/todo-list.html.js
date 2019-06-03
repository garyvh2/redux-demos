/**
 * Component Base Elements
 */
import { html } from '@polymer/lit-element';

/**
 * Component Style Importings
 */
import viewStyle from './todo-list.css';

export default function() {
  return html`
    <style>
      ${viewStyle}
    </style>
    <ul>
      ${this.elements.map(element => html`<li>${element}</li>`)}
    </ul>
  `;
}
