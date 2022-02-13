import "core-js/stable";
import View from "./View.js";

class QuoteView extends View {
  _parentElement = document.querySelector(".quote__container");

  _generateMarkup() {
    return `
        <p class="quote__mark">
            <i class="fas fa-quote-left quote__icon quote--left"></i>
            <p class="quote">${this._data.content}</p>
            <p class="quote__author">${this._data.author}</p>
            <i class="fas fa-quote-right quote__icon quote--right"></i>
        </p>
    `;
  }
}

export default new QuoteView();
