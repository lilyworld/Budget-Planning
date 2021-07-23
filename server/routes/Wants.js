const express = require("express");
const router = express.Router();
const {Wants} = require("../models");

router.get('/', async (req, res) => {
    const listOfWants = await Wants.findAll();
    res.json(listOfWants);
});

router.post("/", async (req,res) => {
    const wants = req.body;
    await Wants.create(wants);
    res.json(wants);
})

module.exports = router;