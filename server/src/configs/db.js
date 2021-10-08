const mongoose = require("mongoose");
require("dotenv").config();

const MongoURL = process.env.MONGO_URL || "http://localhost:27017/";

const connect = () => mongoose.connect(MongoURL);

module.exports = connect;
