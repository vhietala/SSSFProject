'use strict';

const express = require('express');
const router = express.Router();


/**
 *  @api {get} /event/:param Return events based on search paramater
 *  @apiName GetEvent
 *  @apiGroup Event
 *  @apiDescription This one can be used to search for events based on the title
 *  it returns one item as a JSON.
 *
 */
router.get('/event/:param', (req, res) => {
  const parameter = req.params.param;
  console.log(parameter);
  Evnt.findOne({'title': parameter}).then(data => {
    console.log(data);
    res.send(data);
  }, err => {
    res.send(err.error.message);
  });
});