/**
 * Helper Importings
 */
import { LitElement, html } from '@polymer/lit-element';

import './src/components/todo-add/todo-add';
import './src/components/todo-list/todo-list';

/**
* Element Definition
*/
class AppMain extends LitElement {
  /**
   * Invoked on each update to perform rendering tasks. This method must return
   * a lit-html TemplateResult. Setting properties inside this method will *not*
   * trigger the element to update.
   * @returns {TemplateResult} Must return a lit-html TemplateResult.
   */
  render() {
    return html`
      <todo-add></todo-add>
      <todo-list></todo-list>
    `;
  }
}
customElements.define('app-main', AppMain);
