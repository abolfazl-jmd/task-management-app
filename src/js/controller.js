import * as model from "./model.js";
import TabsView from "./Views/TabsView";
import SidebarView from "./Views/SidebarView.js";
import QuoteView from "./Views/QuoteView.js";
import TasksDateView from "./Views/TasksDateView.js";
import { async } from "regenerator-runtime";
import NotesView from "./Views/NotesView.js";
import TasksView from "./Views/TasksView.js";
import PaginationView from "./Views/PaginationView.js";

const quoteHandler = async function () {
  try {
    const data = await model.getQuote();
    QuoteView.render(data);
  } catch (err) {
    QuoteView.renderErrorMsg(err);
  }
};

// Notes Hnadler
const notesController = function (text) {
  model.getNotes(text);
};

// Retrieve Notes Handler
const showRetrievedNotes = function () {
  NotesView.showNotesHandler(model.retrieveNotes());
};

// Tasks Controller function
const tasksController = function (data) {
  model.saveTask(data);
  // page
  TasksView.render(model.getTasksPage());

  // Rendering pagintion
  PaginationView.render(model.state.tasks);
};

// Tasks mark complete controller
const taskDeleteController = function (id) {
  model.removeTask(id);

  // we should rerender the tasks
  TasksView.render(model.getTasksPage());
};

// pagination controller
const paginationController = function (gotoPageNum) {
  // 1. new results should be rerendered again
  TasksView.render(model.getTasksPage(gotoPageNum));

  // 2. pagination data should be updated again
  PaginationView.render(model.state.tasks);
};

const init = function () {
  TabsView.switchTabsHandler();
  // Show sidebar handler
  SidebarView.showSidbarMenu();
  // Quote Handler
  quoteHandler();

  // Notes Hnadler
  NotesView.notesHandler(notesController);
  showRetrievedNotes();

  // Tasks Handler
  TasksView.recieveTaskData(tasksController);
  TasksView.render(model.getTasksPage());
  TasksView.taskDeleteHandler(taskDeleteController);

  // Pagnation control handler
  PaginationView.addPageHandler(paginationController);
  PaginationView.render(model.state.tasks);
};

init();

const options = document.querySelectorAll(".options");

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    console.log(e.target.dataset.value);
  });
});

const moviesCreateBtn = document.querySelector(".movies__btn--create");
const moviesForm = document.querySelector(".form");
const moviesCloseBtn = document.querySelector(".btn--close");

moviesCreateBtn.addEventListener("click", () => {
  moviesForm.classList.add("open");
});

moviesCloseBtn.addEventListener("click", () => {
  moviesForm.classList.remove("open");
});
