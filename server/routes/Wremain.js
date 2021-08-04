const express = require("express");
const router = express.Router();
const { Wremain } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get('/', validateToken, async (req, res) => {
  // TODO: Retrieve rows by user to get the actual corresponding value.
  try {
     const want_amount = await Wremain.findAll({
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
      amount: want.amount
    }
    console.log(rowData)
    await Wremain.upsert(rowData);     // "upsert" inserts if it doesn't exist, otherwise updates.
    res.json(want);
});


module.exports = router;