'use strict';
// all the code in this file simply works to fetch data from the pokemon API available at pokeapi.co
const apiData = {
  url: 'https://pokeapi.co/api/v2/',
  type: 'pokemon',
  //   if you change the ID,it'll change the pokemon displayed
  id: '25',
};
// deconstructing the apiData object
// when destructuring objects ,the variable names that we use have to be similar to the property  name of the value that we want
const { url, type, id } = apiData;

const apiUrl = `${url}${type}/${id}`;

// fetching data from the  APi about a specific pokemon
// the then method accepts a callback function as an  argument,the callack function simply contains the logic that is to be run on the logic recieved from the resolved promise
fetch(apiUrl)
  .then((data) => {
    if (data.ok) {
      return data.json();
    }
    throw new Error('Response not ok.');
  })
  .then((pokemon) => generateHtml(pokemon))
  .catch((error) => console.error('Error:', error));

// a function that displays the fetched pokemon data on the html
function generateHtml(data){
  console.log(data);
  const html = `
        <div class="name">${data.name}</div>
        <img src=${data.sprites.front_default}>
        <div class="details">
            <span>Height: ${data.height}</span>
            <span>Weight: ${data.weight}</span>
        </div>
    `;
  const pokemonDiv = document.querySelector('.pokemon');
  pokemonDiv.innerHTML = html;
};
