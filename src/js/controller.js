const menuIcon = document.querySelector(".menu__icon");
const sideBar = document.querySelector(".sidebar");

menuIcon.addEventListener("click", () => {
  sideBar.classList.toggle("close");
});

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

const sidebar = document.querySelector(".tabs__wrapper");
const sections = document.querySelectorAll(".section");

sidebar.addEventListener("click", (e) => {
  const clicked = e.target.closest(".tab");
  console.log(clicked);

  sections.forEach((section) => {
    section.classList.add("hidden");

    if (clicked.dataset.value === section.dataset.value)
      section.classList.remove("hidden");
  });
});

// Tasks form show up
const showUpBtn = document.querySelector(".form__show");
const taskForm = document.querySelector(".tasks__form");
const showUpIcon = document.querySelector(".show__icon");

showUpBtn.addEventListener("click", () => {
  taskForm.classList.toggle("taskformopen");
  // showUpIcon.className = "fas fa-arrow-down icon";
});
