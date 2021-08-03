const express = require("express");
const router = express.Router();
const {Users} = require("../models");
const bcrypt = require("bcrypt");
const {sign} = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddleware");

//Can see all of datas in users api, but not really use it in this project, just for testing in postman
router.get('/', async (req, res) => {
    const listOfUsers = await Users.findAll();
    res.json(listOfUsers);
});

router.post("/", async (req,res) => {
    const {username, email, password} = req.body;
    //for data security, even in the backend, password is not visible with bcrypt
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
        if (!match) res.json({error: "Password is incorrect!"});
        //the accessToken will be invalid in 1 hour, the random string created for accessToken will carry user's email, username and id.
        const accessToken = sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60), email: user.email, username:user.username }, "important");
        res.json({ token: accessToken, email: email, username:user.username });
    });
});

// /** DELETE SPECIFIC USERS */
// router.delete('/:id', function(req, res, next) {
//     Users.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(() => res.status(200).json("Deleted a user!"))
//       .catch(err => next(err));
//   });
  
router.get("/auth", validateToken, (req, res) => {
    res.json(req.user);
});



module.exports = router;