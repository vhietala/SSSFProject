'use strict'
const express = require('express');
const router = express.Router();
const LocalStrategy   = require('passport-local').Strategy;
const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id',(req,res,next)=>{
  res.send('users GET');
})

module.exports = router;
