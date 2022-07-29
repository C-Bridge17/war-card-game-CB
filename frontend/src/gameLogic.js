const gameLogic = (playerOne, playerTwo) => {
  let cardOne = playerOne[0];
  let cardTwo = playerTwo[0];

  let cardLetterToNumber = {
    'T': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
  }
  if (cardLetterToNumber[cardOne]) cardOne = cardLetterToNumber[cardOne];
  if (cardLetterToNumber[cardTwo]) cardTwo = cardLetterToNumber[cardTwo];

  if (cardOne === cardTwo) return { 'tied': [playerOne, playerTwo] };
  if (cardOne > cardTwo) return { 'playerOne': [playerOne, playerTwo] };
  if (cardOne < cardTwo) return { 'playerTwo': [playerTwo, playerOne] };
}


export default gameLogic
