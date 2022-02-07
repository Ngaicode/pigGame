"use strict";

// reinforcing knowledge is one of the most important thing that you can do to learn

// AS ALWAYS ,WE START BY SELECTING THE ELEMENTS THAT WE WANT TO USE AND STORE THEM IN VARIABLES SO WE CAN EASILY USE THEM LATER
// selecting the elements with the score and setting it back to zero
// const score = document.querySelectorAll(".score");
// for (let i = 0; i < score.length; i++) {
//   score[i].textContent = 0;
// }

// AS ALWAYS ,WE START BY SELECTING THE ELEMENTS THAT WE WANT TO USE AND STORE THEM IN VARIABLES SO WE CAN EASILY USE THEM LATER
//  alternate syntax
const score0Element = document.querySelector("#score--0");
// when selecting elements using their respective ID names ,we can alternatively use the  getElementById() method
const score1Element = document.getElementById("score--1");
const diceImageElement = document.querySelector(".dice");

// ------------STARTING CONDITIONS------------
// selecting the elements with the score and setting it back to zero at the start of the game
score0Element.textContent = 0;
score1Element.textContent = 0;

// hiding the dice image at the begining of the game
diceImageElement.classList.add("hidden");
