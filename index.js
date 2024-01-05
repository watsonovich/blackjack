let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el"); // let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  playerName: "Brian",
  playerChips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.playerName + ": $" + player.playerChips;

console.log(cards);

function getRandomCard() {
  const min = 2;
  const max = 11;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game.";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    console.log("Drawing a new card from the deck!");
    let card = getRandomCard();
    console.log(card);
    sum += card;
    cards.push(card);
    renderGame();
  }
}
