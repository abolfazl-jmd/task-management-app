import View from "./View.js";
import image from "../../../assets/images/shopping-bg.svg";

class ShoppingListView extends View {
  _parentElement = document.querySelector(".lists__wrapper");
  _shoppingForm = document.querySelector(".shopping__form");
  _shoppingCreatBtn = document.querySelector(".shopping__btn--create");
  _shoppingCloseBtn = document.querySelector(".shoping__close--btn");

  constructor() {
    super();
    this._openShoppingForm();
    this._closeShoppingForm();
  }

  _openShoppingForm() {
    this._shoppingCreatBtn.addEventListener("click", () => {
      this._shoppingForm.classList.add("open");
    });
  }

  _closeShoppingForm() {
    this._shoppingCloseBtn.addEventListener("click", () => {
      this._shoppingForm.classList.remove("open");
    });
  }

  addShoppingHnadler(handler) {
    this._shoppingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // closing the form
      this.classList.remove("open");
      //   getting data
      const shoppingItem = [...new FormData(this)];
      const item = Object.fromEntries(shoppingItem);

      // empty the input
      document.querySelector(".shopping--input").value = "";
      //pass data to handler
      handler(item);
    });
  }

  _generateMarkup() {
    return this._data.map((shoppingItem) => {
      return `
        <div class="list">
            <div class="list__image">
                <img src=${image} alt="shopping" class="list__img">
            </div>
            <div class="list__details">
                <h3 class="list__title">${shoppingItem.item}</h3>
            </div>
        </div>
        `;
    });
  }
}

export default new ShoppingListView();
