'use strict';
const express = require('express');
const router = express.Router();
const passport = require('passport');
//const User = require('../models/user');
const TeamEvent = require('../models/teamEvent');
const moment = require('moment');
const Sugar = require('sugar');

/**
 * @api {get} / Request the main index page
 * @apiName GetIndex
 * @apiGroup Index
 * @apiDescription Requests the main index page from the server
 */
router.get('/', (req, res, next) => {
    const today = Sugar.Date.create(moment().startOf('day'));
    console.log('today: '+today);
    TeamEvent.find().where('date').gte(today).then(data=>{
        data.sort((a,b)=>{
            return a.date > b.date;
        });
        data.sort();
        data.reverse();
        res.render('index', {title: process.env.TEAMNAME, user: req.user, events: data});
    });
});
/**
 * @api {get} /register Request the register page
 * @apiName GetRegister
 * @apiGroup Index
 * @apiDescription Request the register page from the server
 *
 */
router.get('/register', (req, res) => {
    res.render('register', {});
});

/**
 * @api {get} /login Get login page
 * @apiName GetLogin
 * @apiGroup Index
 * @apiDescription Request the login page from the server
 *
 */
router.get('/login', (req, res) => {
    res.render('login', {user: req.user});
});
/**
 * @api {post} /login
 * @apiName PostLogin
 * @apiGroup Index
 * @apiDescription used to login to the server
 *
 */
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.redirect('/');
});
/**
 * @api {get} /logout
 * @apiName GetLogout
 * @apiGroup Index
 * @apiDescription Log out from the server
 *
 */
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});
/**
 * @api {get} /ping Request all events from database
 * @apiName GetPing
 * @apiGroup Index
 * @apiDescription Responds a ping with a pong
 *
 */
router.get('/ping', function (req, res) {
    res.status(200).send('pong!');
});

module.exports = router;
