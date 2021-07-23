const express = require("express");
const router = express.Router();
const {Users} = require("../models");
const bcrypt = require("bcrypt");

router.get('/', async (req, res) => {
    const listOfUsers = await Users.findAll();
    res.json(listOfUsers);
});

router.post("/", async (req,res) => {
    const {username, email, password} = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username:username,
            email:email,
            password: hash,
        })
        res.json("SUCCESS");
    })
});

router.post("/login", async(req, res) => {
    const{email, password} = req.body;
    const user = await Users.findOne({where : {email:email}});
    if(!user) res.json({error: "User Doesn't Exist"});
    bcrypt.compare(password, user.password).then((match) =>{
        if (!match) res.json({error: "Wrong username and password combination"});
        res.json("You Logged In");
    });
});

module.exports = router;