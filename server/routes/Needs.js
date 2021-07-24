const express = require("express");
const router = express.Router();
const { Needs } = require("../models");

router.get('/', async (req, res) => {
    const listOfNeeds = await Needs.findAll();
    res.json(listOfNeeds);
});


/**ADD NEW ITEMS */
router.post("/", async (req,res) => {
    const needs = req.body;
    await Needs.create(needs);
    res.json(needs);
})

/** DELETE SPECIFIC ITEM */
router.delete('/:id', function(req, res, next) {
    Needs.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => res.status(200).json("Deleted a item!"))
      .catch(err => next(err));
  });
  
  /** EDIT SPECIFIC ITEM **/
  
//   router.put('/:id', ash(async(req, res) => {
//     await Needs.update(req.body,
//           { where: {id: req.params.id} }
//     );
//     let needs = await Needs.findByPk(req.params.id);
//     res.status(201).json(needs);
//   }));
  
// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;