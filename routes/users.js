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
    console.log(req.user.username);
    User.findOne({'username': req.user.username}).then(data => {
        console.log(JSON.stringify(data));
        res.send(JSON.stringify(data));
    });
});

/**
 * @api {get} /users/edit Request user edit page
 * @apiName GetUsersEdit
 * @apiGroup Users
 * @apiDescription This redirects to user editing page
 */
router.get('/edit', function (req, res, next) {

    res.render('editUser', {user: req.user});

});

/**
 * @api {get} /users/:param Request a user info based on id
 * @apiName GetUsers
 * @apiGroup Users
 *  @apiParam {Number} id Users unique ID
 * @apiDescription This is used to get the one user info from the database
 */
router.get('/:id', (req, res, next) => {
    User.find({'id': req.params.id}).then(data => {
        res.send(JSON.stringify(data));
    });
});

/**
 * @api {post} /users/update/:param Update a user
 * @apiName PutUsersId
 * @apiGroup Users
 * @apiParam {Number} id Users unique ID
 * @apiDescription Updating a user with admin privileges
 *
 */
router.post('/update:id', (req, res, next) => {
    User.findOneAndUpdate({'_id': req.params.id},req.body, {new:true},(err,data)=>{
        if(err){
            console.log('something went wrong when updating');
            res.send(err);
        }
        res.redirect('/');
    });
});

/**
 * @api {post} /users/update update current user
 * @apiName PostUsersUpdate
 * @apiGroup Users
 * @apiDescription Updating current user
 *
 */
router.post('/update', (req, res, next) => {
    console.log(req.body);
    User.findOneAndUpdate({'_id': req.user.id},req.body, {new:true},(err,data)=>{
        if(err){
            console.log('something went wrong when updating');
            res.send(err);
        }
        res.redirect('/');
    });
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
