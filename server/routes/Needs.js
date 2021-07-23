const express = require("express");
const router = express.Router();
const { Needs } = require("../models");

router.get('/', async (req, res) => {
    const listOfNeeds = await Needs.findAll();
    res.json(listOfNeeds);
});

router.post("/", async (req,res) => {
    const needs = req.body;
    await Needs.create(needs);
    res.json(needs);
})

module.exports = router;