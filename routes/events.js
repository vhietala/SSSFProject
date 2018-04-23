'use strict';

const express = require('express');
const router = express.Router();
const event = require('../models/teamEvent');

/**
 * @api {get} /events Request all events from database
 * @apiName GetEvents
 * @apiGroup Event
 * @apiDescription This one is used to get all events from the database.
 *  it returns a JSON containing the data.
 *
 */
app.get('/', (req, res) => {
  event.find().then(data => {
    console.log(data);
    res.send(data);
  }, err => {
    res.send(err.error.message);
  });
});

/**
 *  @api {get} /events/:param Return events based on search paramater
 *  @apiName GetEvent
 *  @apiGroup Event
 *  @apiDescription This one can be used to search for events based on the title
 *  it returns one item as a JSON.
 *
 */
router.get('/:param', (req, res) => {
  const parameter = req.params.param;
  console.log(parameter);
  event.findOne({'title': parameter}).then(data => {
    console.log(data);
    res.send(data);
  }, err => {
    res.send(err.error.message);
  });
});