import "regenerator-runtime";
import { RES_PER_PAGE, API_URL } from "./config.js";
import { AJAX, generateID } from "./helpers.js";

export let state = {
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

// To store our state in the locale storage
const saveDataToLocale = function (data, identifier) {
  // saving the state in locale storage
  const userData = JSON.stringify(data);
  localStorage.setItem(identifier, userData);
};

// retrieve data from state
const retrieveDataFromLocale = function (identifier) {
  const retrievedData = JSON.parse(localStorage.getItem(identifier));

  return retrievedData;
};

state.tasks.tasksList = retrieveDataFromLocale("tasks") || []; // In order to avoid getting error when there is no task at locale

// Notes function to save
export const getNotes = function (text) {
  state.notes = text;

  // It should be stored in locale storage
  localStorage.setItem("notes", text);
};

export const retrieveNotes = function () {
  const notesText = localStorage.getItem("notes");
  console.log(notesText);

  // Set it as notes
  state.notes = notesText;
  return notesText;
};

// Tasks Function to save
export const saveTask = function (taskData) {
  // destructuring the datas
  const { title, category } = taskData;

  // make the taks object
  const task = {
    id: generateID(),
    title,
    category,
  };

  // Pushing the object into the array
  state.tasks.tasksList.unshift(task); // When we loop to show it it needs to be added at the begining of the array so w use unshit

  // Calling locale save func
  saveDataToLocale(state.tasks.tasksList, "tasks");
};
