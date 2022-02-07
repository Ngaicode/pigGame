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
const player0Currentscore = document.getElementById("current--0");
const player1Currentscore = document.getElementById("current--1");
const diceImageElement = document.querySelector(".dice");
const rollDiceBtn = document.querySelector(".btn--roll");
const newGameBtn = document.querySelector(".btn--new");
const HoldCurrentScoreBtn = document.querySelector(".btn--hold");

// ------------STARTING CONDITIONS------------
// selecting the elements with the score and setting it back to zero at the start of the game
score0Element.textContent = 0;
score1Element.textContent = 0;

let currentScore = 0;

// hiding the dice image at the begining of the game
diceImageElement.classList.add("hidden");

//implementing rolling dice functinality
rollDiceBtn.addEventListener("click", function () {
  // 1.generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2.display dice
  diceImageElement.classList.remove("hidden");
  //   dynamically updating the image of the rolled dice number
  diceImageElement.src = `dice-${dice}.png`;
  //   3.check if a player has rolled a 1;if true,switch to the next player
  if (dice !== 1) {
    //   add the rolled dice to the current score
    currentScore += dice;
    player0Currentscore.textContent = currentScore; //change this later
  } else {
    //   switch to next player if rolled a one
  }
});
