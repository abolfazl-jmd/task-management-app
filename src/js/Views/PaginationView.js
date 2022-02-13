import "core-js/stable";
import View from "./View.js";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination__wrapper");

  addPageHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".page");

      //   gaurd Clause
      if (!btn) return;

      const gotoPageNum = +btn.dataset.togo;

      handler(gotoPageNum);
    });
  }

  _generateMarkup() {
    // Store the page
    const curPage = this._data.page;

    // We need to know how many pages we have
    const numPages = Math.ceil(
      this._data.tasksList.length / this._data.resultsPerPage
    );

    //? We should render the HTML based on the num of pages

    // page 1 and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
        <div class="page previous__page invisible"></div>
        <div data-togo=${curPage + 1} class="page next__page">
            <p class="next">page ${curPage + 1}</p>
            <i class="fas fa-arrow-right pagination--icon"></i>
        </div>
        `;
    }

    // If last page
    if (curPage === numPages && numPages > 1) {
      return `
        <div data-togo=${curPage - 1}  class="page previous__page">
            <i class="fas fa-arrow-left pagination--icon"></i>
            <p class="previous">page ${curPage - 1}</p>
        </div>
        <div class="page next__page invisible"></div>
        `;
    }

    // other pages
    if (curPage < numPages) {
      return `
        <div data-togo=${curPage - 1}  class="page previous__page">
            <i class="fas fa-arrow-left pagination--icon"></i>
            <p class="previous">page ${curPage - 1}</p>
        </div>
        <div data-togo=${curPage + 1}  class="page next__page">
            <p class="next">page ${curPage + 1}</p>
            <i class="fas fa-arrow-right pagination--icon"></i>
        </div>
        `;
    }

    // only page 1 and not other pages
    return "";
  }
}

export default new PaginationView();
