'use strict';

const LocalStrategy = require('passport-local').Strategy;

const User = require('../app/models/user');

module.exports(passport => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });


    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        (req, email, password, done) => {

            process.nextTick(() => {

                User.findOne({'local.email': email}, (err, user) => {
                    // if there are any errors, return the error
                    if (err)
                        return done(err);

                    // check to see if theres already a user with that email
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {

                        // if there is no user with that email
                        // create the user
                        const newUser = new User();

                        // set the user's local credentials
                        newUser.local.email = email;
                        newUser.local.password = newUser.generateHash(password);

                        // save the user
                        newUser.save((err) => {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });
            });
        }));
});