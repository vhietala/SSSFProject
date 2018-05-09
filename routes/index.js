'use strict';
const express = require('express');
const router = express.Router();
const passport = require('passport');
//const User = require('../models/user');

/*
*GET home page.
* */
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Team name', user: req.user});
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
router.get('/ping', function(req, res) {
  res.status(200).send('pong!');
});

module.exports = router;
