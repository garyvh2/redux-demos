/**
 * Helper Importings
 */
import { LitElement, html } from '@polymer/lit-element';

/**
 * Component Importings
 */
import template from './todo-add.html';
import { store } from '../../../app.store';
import { add } from '../../@redux/actions';

/**
 * Element Definition
 */
class TodoAdd extends LitElement {
  /**
   * Returns a binded version of the component template
   */
  get template() {
    return template.bind(this)();
  }

  get inputValue() {
    return (this.shadowRoot.querySelector("input")||{}).value || "";
  }

  /**
   * Invoked on each update to perform rendering tasks. This method must return
   * a lit-html TemplateResult. Setting properties inside this method will *not*
   * trigger the element to update.
   * @returns {TemplateResult} Must return a lit-html TemplateResult.
   */
  render() {
    return html`
      ${this.template}
    `;
  }

  add() {
    store.dispatch(add(this.inputValue));
  }
}
customElements.define('todo-add', TodoAdd);
