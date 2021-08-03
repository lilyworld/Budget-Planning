const express = require("express");
const router = express.Router();
const { Budget } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { verify } = require("jsonwebtoken");

router.get('/', validateToken, async (req, res) => {
     // TODO: Retrieve rows by user to get the actual corresponding value.
     try {
        const budgetAmount = await Budget.findAll({
          where: {
            UserUsername: req.user.username,
          },
        }); // setting budget amount = all the stuff in the budget table
        res.json(budgetAmount);
      } catch (err) {
        console.log(err)
        res.json({})
      }
});

router.post("/", validateToken, async (req,res) => {
    const budget = req.body;
    const rowData = {
      UserUsername: req.user.username, // get username from access token,
      amount: budget.amount,
    }
    console.log(rowData)
    await Budget.upsert(rowData);     // "upsert" inserts if it doesn't exist, otherwise updates.
    res.json(budget);
});

/** DELETE SPECIFIC SAVING AMOUNT */
router.delete('/:id', function(req, res, next) {
    Budget.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => res.status(200).json("Success!"))
      .catch(err => next(err));
  });

module.exports = router;