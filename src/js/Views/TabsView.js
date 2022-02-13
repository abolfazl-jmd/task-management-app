import "core-js/stable";
import View from "./View.js";

class TabsView extends View {
  _parentElement = document.querySelector(".tabs__wrapper");

  switchTabsHandler() {
    const sections = document.querySelectorAll(".section");

    this._parentElement.addEventListener("click", (e) => {
      const clicked = e.target.closest(".tab");

      if (!clicked) return;

      sections.forEach((section) => {
        section.classList.add("hidden");

        if (clicked.dataset.value === section.dataset.value)
          section.classList.remove("hidden");
      });
    });
  }
}

export default new TabsView();
