// apiScript.js
const API_URL = "https://icanhazdadjoke.com/";

const fetchJoke = () => {
  const myObject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };
  fetch(API_URL, myObject)
    .then((aulas) => aulas.json())
    .then((palestra) => document.querySelector('#jokeContainer').innerText = palestra.joke);
};


window.onload = () => fetchJoke();
