import "regenerator-runtime";
import { RES_PER_PAGE, API_URL } from "./config.js";
import { AJAX, generateID } from "./helpers.js";

export let state = {
  tasks: {
    tasksList: [],
    resultsPerPage: RES_PER_PAGE,
    page: 1,
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

// Function to remove a task from tasksList
export const removeTask = function (id) {
  console.log(id);
  // 1. Find the task
  const taskIndex = state.tasks.tasksList.findIndex((task) => task.id === id);
  // 2. Remove the item
  state.tasks.tasksList.splice(taskIndex, 1);

  // 3. Save to locale the new tasksList
  // Calling locale save func
  saveDataToLocale(state.tasks.tasksList, "tasks");
};

// Pagination page function
export const getTasksPage = function (page = state.tasks.page) {
  state.tasks.page = page;
  const start = (page - 1) * state.tasks.resultsPerPage;
  const end = page * state.tasks.resultsPerPage; // 1 * 4 = 4

  return state.tasks.tasksList.slice(start, end);
};

// Create Movies Function
export const createMovie = function (movieData) {
  const { title, director, year } = movieData;

  const movie = {
    title,
    director,
    year,
  };

  state.movies.unshift(movie);

  // saving the movies to locale
  saveDataToLocale(state.movies, "movies");
};

state.movies = retrieveDataFromLocale("movies") || []; // In order to avoid getting error when there is no movie at locale

// Create shopping item
export const createShoppingItem = function (shopItem) {
  const { item } = shopItem;

  const shoppingItem = {
    item,
  };

  // pushing the item to state
  state.shoppingList.unshift(shoppingItem);

  // save to locale
  saveDataToLocale(state.shoppingList, "shoppingList");
};

state.shoppingList = retrieveDataFromLocale("shoppingList") || []; // In order to avoid getting error when there is no item at locale
