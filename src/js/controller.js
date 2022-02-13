import * as model from "./model.js";
import TabsView from "./Views/TabsView";
import SidebarView from "./Views/SidebarView.js";
import QuoteView from "./Views/QuoteView.js";
import TasksDateView from "./Views/TasksDateView.js";
import { async } from "regenerator-runtime";
import NotesView from "./Views/NotesView.js";
import TasksView from "./Views/TasksView.js";
import PaginationView from "./Views/PaginationView.js";
import MoviesView from "./Views/MoviesView.js";

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

// MOVIES CONTROLLER
const moviesController = function (data) {
  model.createMovie(data);

  // rendering when created
  MoviesView.render(model.state.movies);
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

  // movies control handler
  MoviesView.addMovieHandler(moviesController);
  MoviesView.render(model.state.movies);
};

init();

const options = document.querySelectorAll(".options");

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    console.log(e.target.dataset.value);
  });
});
