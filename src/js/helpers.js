import "regenerator-runtime";

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
