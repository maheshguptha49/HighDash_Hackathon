const Show = require("../models/show.model");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const show = await Show.create(req.body);

  res.status(201).json({ show });
});

router.get("/", async (req, res) => {
  const show = await Show.find().populate("artist").lean().exec();

  res.status(200).json({ show });
});

router.patch("/:id", async (req, res) => {
  const show = await Show.findByIdAndUpdate(req.params.id, req.body, {
    returnOriginal: false,
  })
    .populate("artist")
    .lean()
    .exec();

  res.status(200).json({ show });
});

router.delete("/:id", async (req, res) => {
  const cancelledShow = await Show.findByIdAndDelete(req.params.id)
    .lean()
    .exec();

  res.status(200).json({ cancelledShow });
});

router.get("/:id", async (req, res) => {
  const show = await Show.findById(req.params.id)
    .populate("artist")
    .lean()
    .exec();

  res.status(200).json({ show });
});

module.exports = router;
