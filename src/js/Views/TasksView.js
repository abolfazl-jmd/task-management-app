import View from "./View.js";
import "core-js";

class TasksView extends View {
  _parentElement = document.querySelector(".tasks");
  _tasksForm = document.querySelector(".task__form");
  _message = "There is no task. Please add one.";

  constructor() {
    super();
    this._taskMarkCompleteHandler();
  }

  recieveTaskData(handler) {
    this._tasksForm.addEventListener("submit", function (e) {
      // Prevent default reload
      e.preventDefault();

      // Get data
      const taskDataArr = [...new FormData(this)];
      const taskData = Object.fromEntries(taskDataArr);
      handler(taskData);
    });
  }

  _generateDate() {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();

    return `${this._months[month]} ${day}, ${year}`;
  }

  _generateMarkup() {
    // check if there is a workout
    if (this._data.length < 1) return "";
    else {
      return this._data
        .map((task) => {
          return `
          <div class="task" data-id=${task.id} >
            <span class="background"></span>
            <div class="task__date">${this._generateDate()}</div>
            <div class="task__details">
              <h3 class="task__title">${task.title}</h3>
              <span class="task__category">${task.category}</span>
            </div>
            <div class="task__actions">
              <i class="fas fa-check-square icon icon--check"></i>
              <i class="fas fa-trash icon icon--trash"></i>
            </div>
          </div>
      `;
        })
        .join("");
    }
  }

  _taskMarkCompleteHandler() {
    this._parentElement.addEventListener("click", function (e) {
      const clicked = e.target.closest(".icon--check");

      // Guard clause
      if (!clicked) return;

      // add Event listener to the icon
      clicked.addEventListener("click", function (e) {
        const task = e.target.closest(".task");

        // Adding the task done class
        task.classList.toggle("complete");
      });
    });
  }

  taskDeleteHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const clicked = e.target.closest(".icon--trash");

      // Guard clause
      if (!clicked) return;

      // add Event listener to the icon
      clicked.addEventListener("click", function (e) {
        const task = e.target.closest(".task");

        const taskID = task.dataset.id;
        // handler function
        handler(taskID);
      });
    });
  }
}

export default new TasksView();
