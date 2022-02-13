import View from "./View.js";

class NotesView extends View {
  _parentElement = document.querySelector(".notes");

  notesHandler(handler) {
    this._parentElement.addEventListener("keydown", function (e) {
      handler(e.target.value);
    });
  }

  showNotesHandler(notes) {
    this._parentElement.innerText = notes;
  }
}

export default new NotesView();
