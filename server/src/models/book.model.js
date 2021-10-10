const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    booked: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "show",
      required: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
