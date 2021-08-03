const express = require("express");
const router = express.Router();
const { Want_amount } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get('/', validateToken, async (req, res) => {
  // TODO: Retrieve rows by user to get the actual corresponding value.
  try {
     const want_amount = await Want_amount.findAll({
       where: {
         UserUsername: req.user.username,
       },
     }); 
     res.json(want_amount);
   } catch (err) {
     console.log(err)
     res.json({})
   }
});

router.post("/", validateToken, async (req,res) => {
    const want = req.body;
    const rowData = {
      UserUsername: req.user.username, // get username from access token,
      amount: want.amount,
      percent: want.percent
    }
    console.log(rowData)
    await want_amount.upsert(rowData);     // "upsert" inserts if it doesn't exist, otherwise updates.
    res.json(want);
});


/** DELETE SPECIFIC SAVING AMOUNT */
router.delete('/:id', function(req, res, next) {
    Want_amount.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => res.status(200).json("Success!"))
      .catch(err => next(err));
  });

module.exports = router;