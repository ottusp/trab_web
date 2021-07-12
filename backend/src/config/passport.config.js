const LocalStrategy = require('passport-local');
const UserController = require('../controllers/User.controller');
const User = require('../models/User');

module.exports = function (passport) {
    passport.serializeUser(function(user, done){
        done(null, {
            id: user._id,
        });
    });
 
    passport.deserializeUser(function(obj, done){
        User.findById(obj.id, function(err,user){
            done(err, user);    
        });
    });

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        (email, password, done) => {
            UserController.verify(email, password, (err, user) => {
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