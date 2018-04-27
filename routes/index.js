'use strict';
const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Team name', user: req.user});
});

router.get('/register', (req, res) => {
  res.render('register', {});
});

router.post('/register', (req, res, next) => {
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

router.get('/login', (req, res) => {
  res.render('login', {user: req.user});
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.redirect('/');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/ping', function(req, res) {
  res.status(200).send('pong!');
});

module.exports = router;
