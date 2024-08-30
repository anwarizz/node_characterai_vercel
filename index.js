const express = require("express");
const cors = require("cors");
const CharacterAI = require("./node_characterai");
const characterAI = new CharacterAI();
const app = express();
const port = 3000;

// paste token here
const CHARACTER_AI_TOKEN = "";
const CHARACTER_ID = "";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/test", async (req, res) => {
  res.send("Bot is online!!");
  if (!characterAI.isAuthenticated()) {
    await characterAI.authenticateWithToken(CHARACTER_AI_TOKEN);
  }
});

app.post("/api/dialogue", async (req, res) => {
  const { userMsg } = req.body;
  try {
    if (!characterAI.isAuthenticated()) {
      await characterAI.authenticateWithToken(CHARACTER_AI_TOKEN);
    }
    const chat = await characterAI.createOrContinueChat(CHARACTER_ID);
    const response = await chat.sendAndAwaitResponse(userMsg, true);
    res
      .status(201)
      .json({ message: "Success", status: 201, content: response.text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "User post error", error: err.message });
  }
});

app.listen(port, async () => {
  console.log(`Listening on Port ${port}`);
});

module.exports = app;
