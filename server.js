if(process.env.NODE_ENV !== 'production') { // if in-development 
    require('dotenv').config() // then require the dotenv, load all enviornment variables into process.env
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt') // library for encrypting the password to keep it safe and secure
const passport = require('passport') // auth library
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const iPassport = require('./passport-config')
iPassport( // function for finding the user by email
    passport, 
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET, // store your private key into .env
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/', checkAuth, (req, res) => { 
    res.render('index.ejs', {name: req.user.name})
})

app.get('/login', checkNotAuth, (req, res) => {
    res.render('login.ejs')
})

app.post('/login', checkNotAuth, passport.authenticate('local', {
    successRedirect: '/', // Redirects you to the home page
    failureRedirect: '/login', // if login fails redirect back to /login page
    failureFlash: true // flash a message if login fails
}))

app.get('/register', checkNotAuth, (req, res) => {
    res.render('register.ejs')
})

app.post('/register', checkNotAuth, async (req, res) => {
    try{
        const hPassword = await bcrypt.hash(req.body.password, 10) // encrypting password, number of times = 10 
        users.push({ // pushing data onto user
            id: Date.now().toString(), 
            name: req.body.name,
            email: req.body.email,
            password: hPassword
        })
        res.redirect('/login') // redirect to login page
    } catch { // redirects to register page if 
        res.redirect('/register')
    }
    console.log(users) // log in console to see if it works
})

app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})

function checkAuth(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}

function checkNotAuth(req, res, next) {
    if(req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

app.listen(3000)