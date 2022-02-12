export default class View {
  _data;
  _months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  render(data) {
    this._data = data;

    // Generate Markup
    const markup = this._generateMarkup();

    // Adding the markup to the parent Element
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderErrorMsg(message) {
    this._parentElement.insertAdjacentHTML("afterbegin", message);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
