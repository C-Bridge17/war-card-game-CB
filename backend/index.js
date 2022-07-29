const express = require("express");
const { Player } = require('./models');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/start", (req, res) => {
  res.json({ message: "true" });
});

app.get('/wins', async (req, res) => {
  const player = await Player.findAll({
    order: [["wins", 'desc']]
  })
  return res.json(player)
})

app.put('/wins/:id(\\d+)', async (req, res) => {
  const player = await Player.findByPk(req.params.id)
  console.log(player.wins)
  const numberOfWins = player.wins += 1
  const update = await player.update({ wins: numberOfWins })

  const updated = await Player.findAll({
    order: [["wins", 'desc']]
  })
  return res.json(updated)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
