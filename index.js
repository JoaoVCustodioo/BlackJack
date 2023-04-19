let cardsArray = [];

let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cards = document.getElementById("card-el");

let playerObj = {
  name: "você",
  chips: 0,
};

let player = document.getElementById("player-el");
player.textContent = playerObj.name + " : $" + playerObj.chips;

function startGame() {
  isAlive = true;
  let firstCard = Math.floor(Math.random() * 13 + 1);
  let secondCard = Math.floor(Math.random() * 13 + 1);
  cardsArray = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cards.textContent = "Cards: ";

  for (let i = 0; i < cardsArray.length; i++) {
    cards.textContent += cardsArray[i] + " - ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "do you want to draw another card?";
  } else if (sum === 21) {
    message = "you won!";
    hasBlackJack = true;
  } else {
    message = "you just loose, looser! pls restart the game";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive == true && hasBlackJack == false) {
    let card = Math.floor(Math.random() * 13) + 1;

    sum += card;
    cardsArray.push(card);

    renderGame();
  }
}
