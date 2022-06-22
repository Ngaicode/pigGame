"use strict";
const apiData = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: "25",
};
// deconstructing the apiData object
const { url, type, id } = apiData;

const apiUrl = `${url}${type}/${id}`;

// fetching data from the  APi about a specific pokemon
fetch(apiUrl)
  .then((data) => {
    if (data.ok) {
      return data.json();
    }
    throw new Error("Response not ok.");
  })
  .then((pokemon) => generateHtml(pokemon))
  .catch((error) => console.error("Error:", error));

// a function that displays the fetched pokemon data on the html
const generateHtml = (data) => {
  console.log(data);
  const html = `
        <div class="name">${data.name}</div>
        <img src=${data.sprites.front_default}>
        <div class="details">
            <span>Height: ${data.height}</span>
            <span>Weight: ${data.weight}</span>
        </div>
    `;
  const pokemonDiv = document.querySelector(".pokemon");
  pokemonDiv.innerHTML = html;
};
