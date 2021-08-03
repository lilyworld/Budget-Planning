const express = require("express");
const router = express.Router();
const {Want_list} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get('/', async (req, res) => {
    const listOfWants = await Want_list.findAll();
    res.json(listOfWants);
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
router.delete('/:id', validateToken, function(req, res, next) {
    Want_list.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => res.status(200).json("Deleted a item!"))
      .catch(err => next(err));
  });
  
module.exports = router;