import React from "react";
import { useState, useEffect } from "react";
import Game from "./Game";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
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
      .then((data) => setData(data));
    console.log(data)
  }, []);

  return (
    <div>
      <h1>War</h1>
      {!startRound && (
        <div>
          <button onClick={() => getDeck()}>Play</button>
        </div>
      )}
      {!leaderBoard && (
        <button onClick={() => setLeaderBoard(true)}>Leaderboard</button>
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
            {data && data.map(player => (
              <tbody>
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
        <Game></Game>
      )}
    </div>
  );
}

export default App;
