const express = require("express");
const router = express.Router();
const {Wants} = require("../models");

router.get('/', async (req, res) => {
    const listOfWants = await Wants.findAll();
    res.json(listOfWants);
});

/**ADD ITEMS **/
router.post("/", async (req,res) => {
    const wants = req.body;
    await Wants.create(wants);
    res.json(wants);
})

/** DELETE SPECIFIC ITEM */
router.delete('/:id', function(req, res, next) {
    Wants.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => res.status(200).json("Deleted a item!"))
      .catch(err => next(err));
  });
  
module.exports = router;