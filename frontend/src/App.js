import React from "react";
import { useState, useEffect } from "react";
import Game from "./Game";
import "./App.css";

function App() {
  const [players, setPlayers] = useState(null);
  const [startRound, setStartRound] = useState(false);
  const [leaderBoard, setLeaderBoard] = useState(false);


  let getDeck = function () {
    fetch('/start')
      .then((res) => res.json())
      .then((data) => setStartRound(data.message))
    if (leaderBoard) setLeaderBoard(false)
  }

  useEffect(() => {
    fetch("/wins")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, [])


  let getLeaderboard = () => {
    setLeaderBoard(true)
  };

  let addToLeaderBoard = (name) => {

    let winner;
    let loser;

    if (players[0].name === name) {
      winner = players[0]
      loser = players[1]
    } else {
      winner = players[1]
      loser = players[0]
    }

    fetch(`/wins/${winner.id}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(winner)
    })
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }

  return (
    <div>
      <h1>War</h1>
      {!startRound && (
        <div>
          <button onClick={() => getDeck()}>Play</button>
        </div>
      )}
      {!leaderBoard && (
        <button onClick={() => getLeaderboard()}>Leaderboard</button>
      )}
      {leaderBoard && (

        <div>
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>Wins</th>
                <th>loses</th>
              </tr>
            </thead>
            {players && players.map((player, index) => (
              <tbody key={index}>
                <tr>
                  <td>{player.name}</td>
                  <td>{player.wins}</td>
                  <td>{player.loses}</td>
                </tr>
              </tbody>
            ))}
          </table>
          <button onClick={() => setLeaderBoard(false)}>Hide</button>
        </div>
      )}
      {startRound && (
        <Game addToLeaderBoard={addToLeaderBoard}></Game>
      )}
    </div>
  );
}

export default App;
