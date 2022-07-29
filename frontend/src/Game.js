import React from "react";
import { useEffect, useState } from "react";
import Deck from "./deck/deck";
import gameLogic from "./gameLogic";

function Game() {
  const [playerOnesHand, setPlayerOnesHand] = useState(null);
  const [playerTwosHand, setPlayerTwosHand] = useState(null);
  const [winner, setWinner] = useState(null);

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
      setPlayerOnesHand(handOne);
      setPlayerTwosHand(handTwo);
    }
  }

  let startRound = (pot = []) => {
    console.log(playerOnesHand, playerTwosHand)
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
      startRound(currentPot)
    }
    if (round['playerOne']) {
      setPlayerOnesHand([...playerOnesHand, ...pot, ...round['playerOne']])
    }

    if (round['playerTwo']) {
      setPlayerTwosHand([...playerTwosHand, ...pot, ...round['playerTwo']])
    }
  }

  let restart = () => {
    setPlayerOnesHand(null)
    setPlayerTwosHand(null)
    setWinner(null)
  }

  const handleKeypress = e => {
    if (e.keyCode === 13) {
      startRound();
    }
  };

  return (
    <div
      onKeyPress={handleKeypress}
    >
      {!playerOnesHand && !playerTwosHand && (
        <button onClick={() => dealCards()}>Deal</button>
      )}
      {playerOnesHand && playerTwosHand && !winner && (
        <div>
          <p>Player Ones Cards: {playerOnesHand.length}</p>
          <p>Player Twos Cards: {playerTwosHand.length}</p>
          <button onClick={() => startRound()}>Start Round</button>

        </div>
      )
      }
      {winner && (
        <div>
          <h2>{winner}</h2>
          <button onClick={() => restart()}>Restart</button>
        </div>
      )}
    </div >
  );
}

export default Game;
