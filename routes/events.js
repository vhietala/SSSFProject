'use strict';

const express = require('express');
const router = express.Router();
const TeamEvent = require('../models/teamEvent');

/**
 * @api {get} /events Request all events from database
 * @apiName GetEvents
 * @apiGroup Event
 * @apiDescription This one is used to get all events from the database.
 *  it returns a JSON containing the data.
 *
 */
router.get('/', (req, res) => {
  TeamEvent.find().then(data => {
    console.log(data);
    res.send(data);
  }, err => {
    res.send(err.error.message);
  });
});


/**
 *  @api {post} /events creates a new TeamEvent
 *  @apiName PostEvent
 *  @apiGroup Event
 *  @apiDescription This is used to create new TeamEvents
 *  uses JSON as input
 *
 */

router.post('/',(req,res)=>{
    console.log(JSON.stringify(req.body));
    createNewEvent(req.body).then(resp=>{
        res(resp);
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
  TeamEvent.findOne({'title': parameter}).then(data => {
    console.log(data);
    res.send(data);
  }, err => {
    res.send(err.error.message);
  });
});


/**
 *  @api {put} /events/:param Update events based on parameter
 *  @apiName PutEvent
 *  @apiGroup Event
 *  @apiDescription This is used to update the event defined in parameter
 */
router.put('/:param', (req, res) => {
    console.log(parameter);
    TeamEvent.findOneAndUpdate({'_id': req.params.param}).then(() => {
        console.log("original: "+data);
        TeamEvent.findOne({_id: req.params.param}).then(data=>{
            console.log("updated: "+data);
            res.send(data);
        });
    }, err => {
        res.send(err.error.message);
    });
});


/**
 *  @api {delete} /events/:param Return events based on search paramater
 *  @apiName DeleteEvent
 *  @apiGroup Event
 *  @apiDescription This is used to remove one TeamEvent from the database
 */
router.get('/:param', (req, res) => {
    const parameter = req.params.param;
    console.log(parameter);
    TeamEvent.findOneAndRemove({'title': parameter}).then(data => {
        remove(data);
        console.log(data);
        res.send(data);
    }, err => {
        res.send(err.error.messsage);
    });
});

const createNewEvent=(tEvent)=>{
  return TeamEvent.create(tEvent);
};

module.exports = router;