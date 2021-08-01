const express = require("express");
const router = express.Router();
const { Savings } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get('/', async (req, res) => {
    const listOfSavings = await Savings.findAll();
    res.json(listOfSavings);
});

router.post("/", validateToken, async (req,res) => {
    const savings = req.body;
    await Savings.create(savings);
    res.json(savings);
});

/** DELETE SPECIFIC SAVING AMOUNT */
router.delete('/:id', function(req, res, next) {
    Savings.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => res.status(200).json("Success!"))
      .catch(err => next(err));
  });

module.exports = router;