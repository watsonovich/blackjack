const min = 2;
const max = 11;

let firstCard = Math.floor(Math.random() * (max - min + 1)) + min;
let secondCard = Math.floor(Math.random() * (max - min + 1)) + min;

let sum = firstCard + secondCard;

console.log(firstCard, secondCard, sum);

if (sum < 21) {
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  console.log("Congratulations!  You've got Blackjack!");
} else {
  console.log("Your out of the game");
}
