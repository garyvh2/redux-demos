/**
 * Helper Importings
 */
import { LitElement, html } from '@polymer/lit-element';

/**
 * Component Importings
 */
import template from './todo-list.html';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../app.store';
import { todoSelector } from '../../@redux/selectors';

/**
 * Element Definition
 */
class TodoList extends connect(store)(LitElement) {
  /**
   * Returns a binded version of the component template
   */
  get template() {
    return template.bind(this)();
  }

  /**
   * Returns a memoized version of all properties, including those inherited
   * from super classes. Properties not in object format are converted to
   * at least {type}.
   *
   * @return {Object} Object containing properties for this class
   * @protected
   */
  static get properties() {
    return { elements: { type: Array } };
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

  stateChanged(state) {
    this.elements = todoSelector(state);
  }
}
customElements.define('todo-list', TodoList);
