let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let winField = document.getElementById("win");
let playedCards = [];
let cardsField = document.getElementById("cards");
let info = document.getElementById("info");
// let cardNumber = document.getElementById("card");
// let setCard = document.getElementById("set_card");
let rel = document.getElementById("reload");
let realCards = document.getElementById("real_cards");
let playedCardsField = document.getElementById("played_cards");

// cardNumber.value = 0;
info.innerHTML = "Бери карту!";
let isGame = true;
let turn = 1;
let number = 0;

function generateCards(cards, cardsF, show) {
  cardsF.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    cardsF.innerHTML += `<div id="rc_${cards[i]}" class="card">${
      show ? cards[i] : ""
    }</div>`;
  }
}

function shuffle(arr) {
  let rand, temp;
  for (let i = 0; i < arr.length; i++) {
    rand = Math.floor(Math.random() * (i + 1));
    temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

shuffle(cards);
cardsField.innerHTML = cards;

// alert(cards);

function showCards(cards) {
  return cards.join(", ");
}

function removeCard(card) {
  playedCards.push(card);
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] == card) number = i;
  }
  cards.splice(number, 1);
  cardsField.innerHTML = cards;
  generateCards(cards, realCards, false);

  generateCards(playedCards, playedCardsField, true);
  addEventCardList();
}

function checkWin(who, card) {
  info.innerHTML = who + " взял " + card;
  if (card == "Q") {
    if (who == "I ") {
      winField.classList.add("red");
    }
    winField.innerHTML = who + " победил";
    winField.classList.add("up");
    stop();
    fly();
    return true;
  }
  return false;
}

function stop() {
  let card_elements = document.getElementsByClassName("card");
  for (let i = 0; i < card_elements.length; i++) {
    // card_elements[i].onclick = play.bind(this, cards);
    card_elements[i].removeEventListener("click", play);
  }
  isGame = false;
}

function fly() {
  let card_elements = document.getElementsByClassName("card");
  for (let i = 0; i < card_elements.length; i++) {
    card_elements[i].classList.add("rotate");
  }
}

function myMove(elId) {
  let b = false;
  let card = elId.substr(3);
  if (checkWin("Ты ", card)) {
    b = true;
  } else {
    setTimeout(removeCard.bind(null, card), 1000);
  }
  return b;
}

function computerMove() {
  isGame = false;
  let b = false;
  number = Math.floor(Math.random() * cards.length);
  let card = cards[number];
  if (checkWin("Я ", card)) {
    b = true;
  }
  setTimeout(removeCard.bind(null, card), 1000);
  isGame = true;
  return b;
}

function newPlay() {
  location.reload();
  return false;
}

// function play(cards) {
//   //   function checkWin(who, card) {
//   //     alert(card);
//   //     if (card == "Q") {
//   //       alert(who + " win");
//   //       return true;
//   //     }
//   //     return false;
//   //   }
//   //   let card;
//   //   while (cards.length) {
//   //     if (turn % 2 != 0) {
//   //       number = +prompt("Take the card! 0-" + cards.length);
//   //       if (isNaN(number) || (number > cards.length && number < 0)) return;
//   //       let card = cards[number];
//   //       if (checkWin("You ", card)) return;
//   //     } else {
//   //       number = Math.floor(Math.random(cards.length) + 1);
//   //       let card = cards[number];
//   //       if (checkWin("I ", card)) return;
//   //     }
//   //     cards.splice(number, 1);
//   //     alert(cards);
//   //     turn++;
//   //   }
//   try {
//     if (myMove()) return;
//     setTimeout(computerMove, 2000);
//   } catch (ex) {
//     info.innerHTML = ex.message;
//     myMove();
//   }
// }
function play(event) {
  if (!isGame) return;
  let el = event.target;
  let elId = el.id;
  try {
    if (myMove(elId)) return;
    setTimeout(computerMove, 2000);
  } catch (ex) {
    info.innerHTML = ex.message;
  }
}

function addEventCardList() {
  let card_elements = document.getElementsByClassName("card");

  for (let i = 0; i < card_elements.length; i++) {
    card_elements[i].addEventListener("click", play);
  }
}

// setCard.addEventListener("click", play.bind(this, cards));
rel.addEventListener("click", newPlay);

// play(cards);
// generateCards(cards, realCards, true);

window.onload = function () {
  generateCards(cards, realCards);
  addEventCardList();
  rel.addEventListener("click", newPlay);
};
