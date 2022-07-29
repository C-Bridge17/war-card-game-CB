import React from "react";
import { useEffect, useState } from "react";
import Deck from "./deck/deck";
import gameLogic from "./gameLogic";

function Game() {
  const [playerOnesCard, setPlayerOnesCard] = useState(null);
  const [playerTwosCard, setPlayerTwosCard] = useState(null);
  const [winner, setWinner] = useState(null)
  const [timer, setTimer] = useState(500)


  let playerOnesHand = [];
  let playerTwosHand = [];

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
      playerOnesHand = handOne;
      playerTwosHand = handTwo;
    }
  }

  let startGame = (pot = []) => {
    setTimeout(() => {
      let currentPot = []
      if (!playerOnesHand.length) {
        setWinner('Player Two Wins')
        return;
      }

      if (!playerTwosHand.length) {
        setWinner('Player One Wins')
        return;
      }

      let playerOne = playerOnesHand.shift()
      let playerTwo = playerTwosHand.shift()

      let round = gameLogic(playerOne, playerTwo);

      if (round['tied']) {
        let faceDownOne = playerOnesHand.shift()
        let faceDownTwo = playerTwosHand.shift()
        currentPot = [...pot, ...round['tied'], faceDownOne, faceDownTwo]
      }
      if (round['playerOne']) {
        console.log('here')
        playerOnesHand = [...playerOnesHand, ...pot, ...round['playerOne']]
      }

      if (round['playerTwo']) {
        playerTwosHand = [...playerTwosHand, ...pot, ...round['playerTwo']]
      }

      return roundReplayer(currentPot)
    }, timer)

  }

  let roundReplayer = (currentPot) => {
    return startGame(currentPot)
  }


  return (
    <div>
      <button onClick={() => dealCards()}>Deal</button>

      {playerOnesHand && playerTwosHand && (
        <div>
          <p>Player Ones Cards: {playerOnesHand.length}</p>
          <p>Player Twos Cards: {playerTwosHand.length}</p>
          <button onClick={() => startGame()}>Start Game</button>
          {winner}
        </div>
      )
      }
    </div >
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
