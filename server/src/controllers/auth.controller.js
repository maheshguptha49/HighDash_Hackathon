const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
require("dotenv").config();

const newToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_KEY);
};

const register = async (req, res) => {
  try {
    let email = req.body.email;
    let user = await User.findOne({ email: email }).lean().exec();
    if (user) {
      return res.status(401).json({
        status: "failed",
        message: "account already exists please login",
      });
    } else {
      user = await User.create(req.body);
      const token = newToken(user);
      res.status(201).json({ token, user });
    }
  } catch (err) {
    return res.status(401).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
};

const login = async (req, res) => {
  try {
    const main = {
      email: req.body.email,
      password: req.body.password,
    };
    let userAvailable = await User.findOne({ email: main.email }).exec();
    if (!userAvailable) {
      return res.status(401).json({
        status: "failed",
        message: "account doesnt exists please register",
      });
    }
    const match = await userAvailable.checkPassword(req.body.password);
    if (!match) {
      return res.status(401).json({
        status: "failed",
        message: "Email or Password is wrong",
      });
    }
    const token = newToken(userAvailable);
    let user = await User.findOneAndUpdate(
      { email: main.email },
      { returnOriginal: false }
    )
      .lean()
      .exec();
    res.status(201).json({ token, user });
  } catch (err) {
    return res.status(401).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
};

module.exports = {
  register,
  login,
};
