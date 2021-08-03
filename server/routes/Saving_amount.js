const express = require("express");
const router = express.Router();
const { Saving_amount } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get('/', validateToken, async (req, res) => {
  // TODO: Retrieve rows by user to get the actual corresponding value.
  try {
     const saving = await Saving_amount.findAll({
       where: {
         UserUsername: req.user.username,
       },
     }); // setting budget amount = all the stuff in the budget table
     res.json(saving);
   } catch (err) {
     console.log(err)
     res.json({})
   }
});

router.post("/", validateToken, async (req,res) => {
    const saving = req.body;
    const rowData = {
      UserUsername: req.user.username, // get username from access token,
      amount: saving.amount,
      percent: saving.percent
    }
    console.log(rowData)
    await Saving_amount.upsert(rowData);     // "upsert" inserts if it doesn't exist, otherwise updates.
    res.json(saving);
});


/** DELETE SPECIFIC SAVING AMOUNT */
router.delete('/:id', function(req, res, next) {
    Saving_amount.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => res.status(200).json("Success!"))
      .catch(err => next(err));
  });

module.exports = router;