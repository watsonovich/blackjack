const min = 2;
const max = 11;

let firstCard = Math.floor(Math.random() * (max - min + 1)) + min;
let secondCard = Math.floor(Math.random() * (max - min + 1)) + min;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

console.log(firstCard, secondCard, sum);

if (sum < 21) {
  message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
  message = "Congratulations!  You've got Blackjack! 🥳";
  hasBlackJack = true;
} else {
  message = "Your out of the game 😭";
  isAlive = false;
}

console.log(message);
