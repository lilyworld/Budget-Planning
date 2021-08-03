const express = require("express");
const router = express.Router();
const { Need_list} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get('/', async (req, res) => {
    let listOfNeeds = await Need_list.findAll();
    res.json(listOfNeeds);
});


/**ADD NEW ITEMS */
router.post("/", validateToken, async (req,res) => {
    const needs = req.body;
    const UserUsername = req.user.username;
    needs.UserUsername = UserUsername;
    await Need_list.create(needs);
    res.json(needs);
})

/** DELETE SPECIFIC ITEM */
router.delete("/:id", async (req, res) => {
    const id= req.params.id
    Need_list.destroy({
      where: {
        id: id
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