const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, minLength: 6 },
    artist: { type: Boolean, required: false },
    place: { type: String, required: false },
    dob: { type: String, required: false },
    gender: { type: String, required: false },
    profile: { type: String, required: false },
    bio: { type: String, required: false },
    mobile: { type: String, required: false },
    following: [
      { type: mongoose.Schema.Types.ObjectId, ref: "user", required: false },
    ],
    hostedShows: [
      { type: mongoose.Schema.Types.ObjectId, ref: "show", required: false },
    ],
    bookedShows: [
      { type: mongoose.Schema.Types.ObjectId, ref: "show", required: false },
    ],
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  next();
});

userSchema.methods.checkPassword = function (password) {
  const hash = this.password;
  return bcrypt.compareSync(password, hash);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
