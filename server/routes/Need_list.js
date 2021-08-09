const express = require("express");
const router = express.Router();
const { Need_list} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get('/', validateToken, async (req, res) => {
      // TODO: Retrieve rows by user to get the actual corresponding value.
      try {
      const needs = await Need_list.findAll({
        where: {
          UserUsername: req.user.username,
        },
      }); // setting budget amount = all the stuff in the budget table
      res.json(needs);
    } catch (err) {
      console.log(err)
      res.json({})
    }
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
router.delete('/:itemname', function(req, res, next) {
  const itemname = req.params.itemname
  Need_list.destroy({
    where: {
      "itemname": itemname,
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