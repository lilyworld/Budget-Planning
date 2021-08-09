const express = require("express");
const router = express.Router();
const {Want_list} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get('/', validateToken, async (req, res) => {
     // TODO: Retrieve rows by user to get the actual corresponding value.
     try {
      const wants = await Want_list.findAll({
        where: {
          UserUsername: req.user.username,
        },
      }); // setting budget amount = all the stuff in the budget table
      res.json(wants);
    } catch (err) {
      console.log(err)
      res.json({})
    }
});

/**ADD ITEMS **/
router.post("/", validateToken, async (req,res) => {
    const wants = req.body;
    const UserUsername = req.user.username;
    wants.UserUsername = UserUsername;
    await Want_list.create(wants);
    res.json(wants);
})

/** DELETE SPECIFIC ITEM */
router.delete('/:itemname', function(req, res, next) {
  const itemname = req.params.itemname
  Want_list.destroy({
    where: {
      "itemname": itemname,
    }
  })
      .then(() => res.status(200).json("Deleted a item!"))
      .catch(err => next(err));
  });
  
module.exports = router;