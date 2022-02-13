import View from "./View.js";

class TasksFilterView extends View {
  _parentElement = document.querySelector(".filter__options");
  _filterText = document.querySelector(".filter__text");

  addFilterHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const option = e.target.closest(".options");

      // getting the dta value of the option
      const filterValue = +option.dataset.value;

      // pass the value to handler
      handler(filterValue);
    });
  }
}

export default new TasksFilterView();
