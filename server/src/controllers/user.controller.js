const User = require("../models/user.model")

const router= require("express").Router()

router.get("/:id", async (req, res)=>{
  try {
    const user= await User.findById(req.params.id).populate("bookedShows").populate("hostedShows")
    res.status(200).send(user)
  } catch (error) {
      res.status(500).send(error.message)
  }
})

router.get("", async (req, res)=>{
    try {
        const user= await User.find().populate("bookedShows").populate("hostedShows")
        res.status(200).send(user)
      } catch (error) {
          res.status(500).send(error.message)
      }
})

module.exports =router