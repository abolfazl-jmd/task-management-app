import "core-js/stable";
import "regenerator-runtime";
import { v4 as uuidv4 } from "uuid";

export const AJAX = async function (url) {
  try {
    const req = await fetch(url);
    const quote = await req.json();

    return quote;
  } catch (err) {
    throw err;
  }
};

// Generating random unique id for tasks;
export const generateID = function () {
  return uuidv4().slice(0, 8);
};
