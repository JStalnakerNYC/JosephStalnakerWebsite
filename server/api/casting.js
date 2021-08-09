const router = require("express").Router();
const {
  models: { Casting },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const castings = await Casting.findAll();
    res.send(castings);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const casting = await Casting.findByPk(req.params.id);
    res.send(casting);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
