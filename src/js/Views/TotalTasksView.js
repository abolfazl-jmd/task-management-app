import "core-js/stable";
import View from "./View.js";

class TotalTasksView extends View {
  _parentElement = document.querySelector(".total__tasks");

  _generateMarkup() {
    return `<span class="tasks__num flex">${this._data}</span>`;
  }
}

export default new TotalTasksView();
