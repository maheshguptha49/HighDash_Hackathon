const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connect = require("./configs/db");
const PORT = process.env.PORT || 2525;

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1278961",
  key: "88357217eb7831ebfe53",
  secret: "17b7c9acd5e07f49c5c6",
  cluster: "ap2",
  useTLS: true,
});

const { register, login } = require("./controllers/auth.controller");
const showController = require("./controllers/show.controller");
const bookController = require("./controllers/book.controller");
const userController= require("./controllers/user.controller")
const commentController = require("./controllers/comment.controller");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/register", register);
app.post("/api/login", login);

app.use("/api/show", showController);
app.use("/api/book", bookController);

app.use("/api/storeComment", commentController);
app.post("/api/message", (req, res) => {
  const payload = req.body;
  pusher.trigger("real-chat", "message", payload);
  res.send(payload);
});
app.use("/api/users",userController)
const start = () => {
  app.listen(PORT, async () => {
    await connect();
    console.log("Listening on ", PORT);
  });
};

module.exports = start;
