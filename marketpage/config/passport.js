const passport = require('passport')
const LocalStrategy = require("passport-local").Strategy
const User = require('../models/user')

// Needed for passport to work correctly
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) =>{
    User.findById(id, (err,user)) =>{
        done(err, user);
    }
  
});

passport.use(new LocalStrategy(
    function ({username:"email"}, (email, password, done) {
        // Query db for a user with entered username
        db.User.findOne({
            where: {
                username: "email"
            }
        }).then(dbUser => {
            // If username does not match any user in db
            if (!dbUser) {
                return done(null, false, { message: "Incorrect username or password." })
            }
            // If password does not match username in db
            else if (!dbUser.validPassword(password)) {
                return done(null, false, { message: "Incorrect username or password." })
            }
            // Otherwise, return the user from db
            return done(null, dbUser)

        })
    }
));

module.exports = passport;

