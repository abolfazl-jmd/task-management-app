"use strict";

import View from "./View.js";

class TasksDateView extends View {
  _parentEleemnt = document.querySelector(".tasks__container");

  constructor() {
    super();
    this._generateTime();
    this._showForm();
  }

  _generateTime() {
    const time = new Date();
    const month = time.getMonth();
    const year = time.getFullYear();

    // Month arrays
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    // setting the text
    const tasksDate = document.querySelector(".task__header--date");
    tasksDate.textContent = `${months[month]}, ${year}`;
  }

  _showForm() {
    // Tasks form show up
    const showUpBtn = document.querySelector(".form__show");
    const taskForm = document.querySelector(".tasks__form");
    const showUpIcon = document.querySelector(".show__icon");

    showUpBtn.addEventListener("click", () => {
      taskForm.classList.toggle("taskformopen");

      //   Changing the arrow
      taskForm.className.includes("taskformopen")
        ? (showUpIcon.className = "fas fa-arrow-down icon")
        : (showUpIcon.className = "fas fa-arrow-up icon");
    });
  }
}

export default new TasksDateView();
