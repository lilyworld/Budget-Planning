const express = require("express");
const router = express.Router();
const { Need_amount } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get('/', validateToken, async (req, res) => {
  // TODO: Retrieve rows by user to get the actual corresponding value.
  try {
     const need_amount = await Need_amount.findAll({
       where: {
         UserUsername: req.user.username,
       },
     }); 
     res.json(need_amount);
   } catch (err) {
     console.log(err)
     res.json({})
   }
});

router.post("/", validateToken, async (req,res) => {
    const need = req.body;
    const rowData = {
      UserUsername: req.user.username, // get username from access token,
      amount: need.amount,
      percent: need.percent
    }
    console.log(rowData)
    await Need_amount.upsert(rowData);     // "upsert" inserts if it doesn't exist, otherwise updates.
    res.json(need);
});


/** DELETE SPECIFIC SAVING AMOUNT */
router.delete('/:id', function(req, res, next) {
    Need_amount.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => res.status(200).json("Success!"))
      .catch(err => next(err));
  });

module.exports = router;