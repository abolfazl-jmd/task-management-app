import * as model from "./model.js";
import TabsView from "./Views/TabsView";
import SidebarView from "./Views/SidebarView.js";
import QuoteView from "./Views/QuoteView.js";
import TasksDateView from "./Views/TasksDateView.js";
import { async } from "regenerator-runtime";

const quoteHandler = async function () {
  try {
    const data = await model.getQuote();
    QuoteView.render(data);
  } catch (err) {
    QuoteView.renderErrorMsg(err);
  }
};

// Tasks View Handler
// const tasksHandler = function () {
//

const init = function () {
  TabsView.switchTabsHandler();
  // Show sidebar handler
  SidebarView.showSidbarMenu();
  // Quote Handler
  quoteHandler();

  // Tasks Hnadler
  // tasksHandler();
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
