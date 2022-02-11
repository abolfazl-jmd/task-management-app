import "regenerator-runtime";
import { RES_PER_PAGE, API_URL } from "./config.js";
import { AJAX } from "./helpers.js";

export const state = {
  tasks: {
    tasksList: [],
    resultsPerPage: RES_PER_PAGE,
  },
  movies: [],
  songs: [],
  shoppingList: [],
  notes: "",
};

// Quote AJAX Call
export const getQuote = async function () {
  try {
    const data = await AJAX(API_URL);

    const quote = {
      content: data.content,
      author: data.author,
    };

    // We need to return this
    return quote;
  } catch (err) {
    throw err;
  }
};

// Notes function to save
export const getNotes = function (text) {
  state.notes = text;

  // It should be stored in locale storage
  localStorage.setItem("notes", text);
};

export const retrieveNotes = function () {
  const notesText = localStorage.getItem("notes");

  // Set it as notes
  return notesText;
};
