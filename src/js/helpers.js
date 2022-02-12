import "regenerator-runtime";
import { v4 as uuidv4 } from "uuid";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
