'use strict';
const express = require('express');
const router = express.Router();
const passport = require('passport');
//const User = require('../models/user');
const TeamEvent = require('../models/teamEvent');
const moment = require('moment');

/*
*GET home page.
* */
router.get('/', (req, res, next) => {
    const today =moment().startOf('day');
    //const events = TeamEvent.find(/*{'date' : {$gte: today.toDate()}}*/);
    TeamEvent.find().then(data=>{
        res.render('index', {title: process.env.TEAMNAME, user: req.user, events: data});
    });
});
/*
*
 */
router.get('/register', (req, res) => {
    res.render('register', {});
});

/*
*
 */
router.get('/login', (req, res) => {
    res.render('login', {user: req.user});
});
/*
*
 */
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.redirect('/');
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});
/*
*
 */
router.get('/ping', function (req, res) {
    res.status(200).send('pong!');
});

module.exports = router;
