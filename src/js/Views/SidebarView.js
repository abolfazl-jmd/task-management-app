import View from "./View.js";

class SidebarView extends View {
  _parentElement = document.querySelector(".sidebar");

  showSidbarMenu() {
    const menuIcon = document.querySelector(".menu__icon");

    menuIcon.addEventListener("click", () => {
      this._parentElement.classList.toggle("close");
    });
  }
}

export default new SidebarView();
