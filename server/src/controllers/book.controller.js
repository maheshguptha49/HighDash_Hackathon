const Show = require("../models/show.model");
const User = require("../models/user.model");
const Book = require("../models/book.model");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const show = await Book.create(req.body);
  const {bookedShows}= await User.findById(req.body.user)
  console.log(bookedShows,req.body)
  for(let i=0; i<bookedShows.length; i++){
    if(req.body.booked===bookedShows[i]?.toString()) return res.status(201).json({message:"already booked fellow"})
 }

  const userAdd = await User.findByIdAndUpdate(
    req.body.user,
    {
      $push: { bookedShows: req.body.booked },
    },
    { returnOriginal: false }
  );
  const showAdd = await Show.findByIdAndUpdate(
    req.body.booked,
    {
      $push: { bookedUsers: req.body.user },
    },
    { returnOriginal: false }
  );
  res.status(201).json({ show, userAdd, showAdd });
});

router.get("/", async (req, res) => {
  const show = await Book.find(req.body)
    .populate("user")
    .populate("booked")
    .lean()
    .exec();

  res.status(200).json({ show });
});

router.patch("/:id", async (req, res) => {
  const show = await Book.findByIdAndUpdate(req.params.id, req.body, {
    returnOriginal: false,
  })
    .populate("user")
    .populate("booked")
    .lean()
    .exec();

  res.status(200).json({ show });
});

router.delete("/:id", async (req, res) => {
  const cancelBooking = await Book.findByIdAndDelete(req.params.id)
    .lean()
    .exec();

  res.status(200).json({ cancelBooking });
});

router.get("/:id", async (req, res) => {
  const show = await Book.findById(req.params.id)
    .populate("user")
    .populate("booked")
    .lean()
    .exec();

  res.status(200).json({ show });
});

module.exports = router;
