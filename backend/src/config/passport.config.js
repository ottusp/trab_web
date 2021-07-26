const LocalStrategy = require('passport-local');
const UserController = require('../controllers/User.controller');
const User = require('../models/User');

// Passport setup
module.exports = function (passport) {
    // Serializes the user using its id
    passport.serializeUser(function(user, done){
        done(null, {
            id: user._id,
        });
    });
    
    // Deserializes the user, getting its info from the database (mongodb)
    passport.deserializeUser(function(obj, done){
        User.findById(obj.id, function(err,user){
            done(err, user);    
        });
    });

    // Sets up passport local strategy (using email and password to authenticate the user)
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        (email, password, done) => {
            // Checks if the the password sent in request matches with the password stored in the database for the user related to that email
            UserController.verifyLogin(email, password, (err, user) => {
                if (err) {
                    console.log(err);
                    return done(err, null);
                }

                else if (!user) {
                    return done(null, null);
                }

                else {
                    return done(null, user); 
                }
            });
        }
    ));
}