const Comment = require("../models/comment.model");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const comment = await Comment.create(req.body);

  res.status(201).json({ comment });
});

router.get("/", async (req, res) => {
  const comment = await Comment.find().lean().exec();

  res.status(200).json({ comment });
});

router.patch("/:id", async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    returnOriginal: false,
  })
    .populate("artist")
    .lean()
    .exec();

  res.status(200).json({ comment });
});

router.delete("/:id", async (req, res) => {
  const cancelledComment = await Comment.findAndDelete({
    show: req.params.id,
  })
    .lean()
    .exec();

  res.status(200).json({ cancelledComment });
});

router.get("/:id", async (req, res) => {
  const comment = await Comment.find({ show: req.params.id }).lean().exec();

  res.status(200).json({ comment });
});

module.exports = router;
