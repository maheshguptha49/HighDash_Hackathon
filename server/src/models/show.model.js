const mongoose = require("mongoose");

const showSchema = mongoose.Schema(
  {
    show: { type: String, required: true },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    date: { type: String, required: true },
    time: { type: String, required: true },
    category: { type: String, required: true },
    imageURL: { type: String, required: false },
    place: { type: String, required: false },
    price: { type: Number, required: true },
    about: { type: String, required: false },
    interested: [
      { type: mongoose.Schema.Types.ObjectId, ref: "user", required: false },
    ],
    bookedUsers: [
      { type: mongoose.Schema.Types.ObjectId, ref: "user", required: false },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Show = mongoose.model("show", showSchema);

module.exports = Show;
