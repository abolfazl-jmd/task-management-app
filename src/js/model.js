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

getQuote();
