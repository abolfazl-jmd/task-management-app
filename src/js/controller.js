import * as model from "./model.js";
import TabsView from "./Views/TabsView";
import SidebarView from "./Views/SidebarView.js";
import QuoteView from "./Views/QuoteView.js";
import TasksDateView from "./Views/TasksDateView.js";
import { async } from "regenerator-runtime";
import NotesView from "./Views/NotesView.js";

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

const init = function () {
  TabsView.switchTabsHandler();
  // Show sidebar handler
  SidebarView.showSidbarMenu();
  // Quote Handler
  quoteHandler();

  // Notes Hnadler
  NotesView.notesHandler(notesController);
  showRetrievedNotes();
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
