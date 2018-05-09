'use strict'
const express = require('express');
const router = express.Router();
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const passport = require('passport');

/**
 * @api {get} /users Request current user info
 * @apiName GetUsers
 * @apiGroup Users
 * @apiDescription This is used to get the current user info from the database, response is a JSON
 */
router.get('/', function (req, res, next) {
    User.findOne({'username' : req.user.username}.then(data=>{
        res.send(JSON.stringify(data));
    }));
});

/**
 * @api {get} /users/:param Request a user info based on id
 * @apiName GetUsers
 * @apiGroup Users
 * @apiDescription This is used to get the one user info from the database
 */
router.get('/:id', (req, res, next) => {
    res.send('users GET');
});

/**
 * @api {put/:param} /users Update a user
 * @apiName PutUsersId
 * @apiGroup Users
 * @apiDescription Updating a user with admin privileges
 *
 */
router.put('/id', (req, res, next) => {
    res.send('user put id' + req.params.id);
});

/**
 * @api {put} /users update current user
 * @apiName PutUsers
 * @apiGroup Users
 * @apiDescription Updating current user
 *
 */
router.put('/', (req, res, next) => {
    res.send('user put');
});

/**
 * @api {post} /users Create a user
 * @apiName PostUsers
 * @apiGroup Users
 * @apiDescription registering a new user
 *
 */
router.post('/', (req, res, next) => {
    User.register(new User({username: req.body.username}), req.body.password,
        (err, user) => {
            if (err) {
                return res.render('register', {error: err.message});
            }

            passport.authenticate('local')(req, res, () => {
                req.session.save((err) => {
                    if (err) {
                        return next(err);
                    }
                    res.redirect('/');
                });
            });
        });
});

module.exports = router;
