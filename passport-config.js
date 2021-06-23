const LocalStrategy = require('passport-local').Strategy // creating a strategy for using passport in local machine
const bcrypt = require('bcrypt')

function initialize(passport, getUserByEmail, getUserbyId) {
    const auth = async (email, password, done) => {
        const user = getUserByEmail(email)
        if(user == null) {
            return done(null, false, {message: 'No User'})
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, {message: 'Incorrect Password'})
            }
        } catch(e) { 
            return done(e)
        }
    }

    passport.use(new LocalStrategy({usernameField: 'email'}, auth))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserbyId(id)) 
    })
}

module.exports = initialize