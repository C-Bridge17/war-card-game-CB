import React from "react";
import { useEffect, useState } from "react";
import Deck from "./deck/deck";

function Game() {
  const [playerOnesHand, setPlayerOnesHand] = useState(null);
  const [playerTwosHand, setPlayerTwosHand] = useState(null);


  // dealing cards
  // array with all of the cards
  // math.random an index of that array
  // push into the players hand
  // splice from array
  // repeat until the array is empty

  let randomCard = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let dealCards = () => {
    let handOne = []
    let handTwo = []
    let deckCopy = Deck.slice()
    let currentHandToBeDealt = 0

    while (deckCopy.length) {
      let cardIndex = randomCard(0, deckCopy.length - 1)
      let selectedCard = deckCopy.splice(cardIndex, 1);
      if (!currentHandToBeDealt) {
        handOne.push(selectedCard[0])
        currentHandToBeDealt = 1
      } else {
        handTwo.push(selectedCard[0])
        currentHandToBeDealt = 0
      };

    }
    if (handOne.length == handTwo.length) {
      setPlayerOnesHand(handOne)
      setPlayerTwosHand(handTwo)
    }
  }

  return (
    <div>
      {!playerOnesHand && !playerTwosHand && (
        <button onClick={() => dealCards()}>Deal</button>
      )}
      {playerOnesHand && playerTwosHand && (
        <div>

        </div>
      )}
    </div>
  );
}

export default Game;


/*
to play the game
each player places their top card
compare the two cards if one if higher the player with the higher card gets the card
if tied place one card face down and one face up repeat last step
ace is high
*/
