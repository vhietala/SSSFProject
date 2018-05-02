'use strict'
const express = require('express');
const router = express.Router();
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

/**
 * @api {get} /users Request all events from database
 * @apiName GetUsers
 * @apiGroup Users
 * @apiDescription This is used to get the current user info from the database, response is a JSON
 */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
/**
 * @api {get} /users Request all events from database
 * @apiName GetUsers
 * @apiGroup Users
 * @apiDescription This is used to get the current user info from the database
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
 * @api {put} /users Request all events from database
 * @apiName PutUsers
 * @apiGroup Users
 * @apiDescription Updating current user
 *
 */
router.put('/', (req, res, next) => {
    res.send('user put');
});

module.exports = router;
