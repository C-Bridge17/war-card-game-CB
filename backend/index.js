const express = require("express");
const { Player } = require('./db/models');
const player = require("./db/models/player");

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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
