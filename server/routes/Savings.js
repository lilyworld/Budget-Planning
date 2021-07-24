const express = require("express");
const router = express.Router();
const { Savings } = require("../models");

router.get('/', async (req, res) => {
    const listOfSavings = await Savings.findAll();
    res.json(listOfSavings);
});

router.post("/", async (req,res) => {
    const savings = req.body;
    await Savings.create(savings);
    res.json(savings);
})

module.exports = router;