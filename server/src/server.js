const express = require("express");
require("dotenv").config();

const connect = require("./configs/db");
const PORT = process.env.PORT || 2525;

const app = express();
app.use(express.json());

const start = async () => {
  app.listen(PORT, () => {
    await connect();
    console.log("Listening on ", PORT);
  });
};

module.exports = start;
