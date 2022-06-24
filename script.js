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
// selecting the different sections for each player
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

// selecting the paragraph element that displays the final  score for each player
const score0Element = document.querySelector("#score--0");
// when selecting elements using their respective ID names ,we can alternatively use the  getElementById() method
const score1Element = document.getElementById("score--1");

// selecting the paragraph element with that displays the current score of each individual element
const player0Currentscore = document.getElementById("current--0");
const player1Currentscore = document.getElementById("current--1");

// selecting the image element that displays the rolled dice value
const diceImageElement = document.querySelector(".dice");

// selecting the roll the dice button
const rollDiceBtn = document.querySelector(".btn--roll");

// selecting the new game button
const newGameBtn = document.querySelector(".btn--new");

// selecting the 'hold current score' button
const holdCurrentScoreBtn = document.querySelector(".btn--hold");

// ------------STARTING CONDITIONS------------
// selecting the elements with the score and setting it back to zero at the start of the game
// score0Element.textContent = 0;
// score1Element.textContent = 0;

// let scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// // a variable that stores the state of the game
// let playing = true;
let playing;
let scores;
let currentScore;
let activePlayer;

// ------------STARTING CONDITIONS------------
// selecting the elements with the score and setting it back to zero at the start of the game
const initializeGame = function () {
  // the respective cumulative scores of each individual player will be stored in this array
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  // a variable that stores the state of the game
  playing = true;

  // setting all the score values to zero at the begining of the game
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  player0Currentscore.textContent = 0;
  player1Currentscore.textContent = 0;

  // hiding the rolled dice image
  // we are adding the css class 'hidden' that is styled to set the display to none
  diceImageElement.classList.add("hidden");

  // nobody is the winner at the begining of the game so removing these classes will get rid of the corresponding css style
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");

  // starting with player 1 as the active player
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
// calling this function to initialize starting conditions for the game
initializeGame();

// function that switches the active player
const switchPlayer = function () {
  //setting the currentscore back to zero when a player rolls a 1 ie,this is before we switch to a different player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //   switch to next player using a ternary operator if rolled a one
  activePlayer = activePlayer === 0 ? 1 : 0;

  // setting the currentscore back to zero
  currentScore = 0;

  // adding or removing css classes allows us to manipulate their respective css styles by activating or deactivating them depending on wether a style is present or not
  // the toggle()method will add the class if it does not exist on the element;and if the class exists,it will remove it
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//implementing rolling dice functinality
rollDiceBtn.addEventListener("click", function () {
  // first we start off by checking wether if the players can stil play
  // in short,this event handler will only be triggered if the players can still play ,ie nobody has won and playing === true
  if (playing) {
    // 1.generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2.display dice image
    diceImageElement.classList.remove("hidden");
    //   dynamically updating the image of the rolled dice number by changing the src attribute of the image element depending on the rolled dice value
    diceImageElement.src = `dice-${dice}.png`;
    //   3.check if a player has rolled a 1;if true,switch to the next player
    if (dice !== 1) {
      //   add the rolled dice number to the current score
      // currentscore = currentscore + dice
      currentScore += dice;
      // select the score element dynamically based on who is the  current active player
      // we are choosing the ID name dynamically using a template literal
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // //setting the currentscore back to zero when a player rolls a 1 ie,this is before we switch to a different player
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // //   switch to next player using a ternary operator if rolled a one
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // currentScore = 0;
      // // the toggle()method will add the class if it does not exist on the element;and if the class exists,it will remove it
      // player0El.classList.toggle("player--active");
      // player1El.classList.toggle("player--active");

      // simplified the functionality into a function
      // switching the active player whenever the player rolls a one
      switchPlayer();
    }
  }
});

holdCurrentScoreBtn.addEventListener("click", function () {
  // first we start off by checking wether if the players can stil play
  // in short,this event handler will only be triggered if the players can still play ,ie nobody has won and playing === true
  // we only want this event andler to work if the players can still play
  if (playing) {
    // 1.add current score to active player's score
    scores[activePlayer] += currentScore; //this is same as score[1]=score[1] + current score

    // updating the displayed  active player's cummulative score when they decide to hold their score
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2.check if score >=100 /this checks if the active player has won
    if (scores[activePlayer] >= 50) {
      //finish the game
      playing = false;

      // removes the displayed dice image as soon as the active player wins the game
      diceImageElement.classList.add("hidden");

      // adding the player--winner class enabling us to style the  respective winner's side with the class' corresponding css styles
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      // removing the player--active class and it's corresponding css styles from the winning active player
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //if the player holds the score and it is bellow 100,we  switch to the next player
      switchPlayer();
    }
  }
});

// reload game when the new game button is pressed
newGameBtn.addEventListener("click", initializeGame);
