import "core-js/stable";
import View from "./View.js";
import image from "../../../assets/images/movie-bg-2.jpg";

class MoviesView extends View {
  _parentElement = document.querySelector(".movies__wrapper");
  _moviesForm = document.querySelector(".movies__from");
  _moviesCreateBtn = document.querySelector(".movies__btn--create");
  _moviesCloseBtn = document.querySelector(".btn--close");

  constructor() {
    super();
    this._openMoviesForm();
    this._closeMoviesForm();
  }

  _openMoviesForm() {
    this._moviesCreateBtn.addEventListener("click", () => {
      this._moviesForm.classList.add("open");
    });
  }

  _closeMoviesForm() {
    this._moviesCloseBtn.addEventListener("click", () => {
      this._moviesForm.classList.remove("open");
    });
  }

  addMovieHandler(handler) {
    this._moviesForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Closing the form
      this.classList.remove("open");

      // 2.Getting the data
      const dataArr = [...new FormData(this)];
      const movieData = Object.fromEntries(dataArr);
      handler(movieData);
    });
  }

  _generateMarkup() {
    return this._data.map((movie) => {
      return `
    <div class="movies">
        <div class="movies__picture">
            <img src=${image} alt="Movie cover" class="movies__img">
        </div>
            <div class="movies__details">
            <h1 class="movies__title">${movie.title}</h1>
            <p class="movies__director">${movie.director}</p>
            <p class="movies__year">${movie.year}</p>
        </div>
    </div>
        `;
    });
  }
}

export default new MoviesView();
