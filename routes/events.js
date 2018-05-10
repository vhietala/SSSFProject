'use strict';

const express = require('express');
const router = express.Router();
const TeamEvent = require('../models/teamEvent');
const Sugar = require('sugar');

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
 * @api {get} /events/add Request all events from database
 * @apiName GetEventsAdd
 * @apiGroup Event
 * @apiDescription Request returns a page for adding new events
 *
 */
router.get('/add', (req, res) => {
    res.render('addEvent', {user: req.user});
});


/**
 *  @api {post} /events creates a new TeamEvent
 *  @apiName PostEvent
 *  @apiGroup Event
 *  @apiDescription This is used to create new TeamEvents
 *  uses JSON as input
 *
 */

router.post('/', (req, res) => {
    console.log('this' + (JSON.stringify(req.body)));
    const data = {};
    data.title = req.body.title;
    data.category = req.body.category;
    data.location = req.body.location;
    data.info = req.body.info;
    let newDate = new Sugar.Date.create(req.body.date);
    Sugar.Date.addHours(newDate, req.body.hour);
    Sugar.Date.addMinutes(newDate, req.body.minutes);
    data.date = newDate;
    console.log(newDate);
    try {
        createNewEvent(data).then(resp => {
            res.redirect('/');
        }).then(() => {
        });
    } catch (e) {
        console.log(e);
        res.send('error')
    }
});


/**
 *  @api {get} /events/:param Return events based on search paramater
 *  @apiName GetEvent
 *  @apiGroup Event
 *  @apiDescription This one can be used to search for events based on the id
 *  it returns one item as a JSON.
 *
 */
router.get('/:param', (req, res) => {
    const parameter = req.params.param;
    console.log(parameter);
    TeamEvent.findOne({'id': parameter}).then(data => {
        console.log(data);
        res.send(data);
    });
});

/**
 *  @api {get} /events/join/:param/:userId Return events based on search paramater
 *  @apiName GetEvent
 *  @apiGroup Event
 *  @apiDescription This one can be used to search for events based on the id
 *  it returns one item as a JSON.
 */
router.get('/join/:param/:userId', (req, res) => {
    const eventId = req.params.param;
    const userId = req.params.userId;
    TeamEvent.findOne({'_id': eventId}).then(evt => {
        evt.participants.push(userId);
        res.send(evt);
    }, err => {
        res.send(err.error.message);
    });
});


/**
 *  @api {post} /events/:param Update events based on parameter
 *  @apiName PostEventUpdate
 *  @apiGroup Event
 *  @apiParam {Number} id Events unique ID
 *  @apiDescription This is used to update the event defined in parameter
 */
router.post('/update/:param', (req, res) => {
    console.log(parameter);
    TeamEvent.findOneAndUpdate({'_id': req.params.param}, req.body, {new: true}, (err, data) => {
        if (err) {
            console.log('something went wrong with updating');
            res.send(err);
        }
        res.redirect('/');
    });
});


/**
 *  @api {delete} /events/:param Return events based on search paramater
 *  @apiName DeleteEvent
 *  @apiGroup Event
 *  @apiParam {Number} id Events unique ID
 *  @apiDescription This is used to remove one TeamEvent from the database
 */
router.delete('/:param', (req, res) => {
    TeamEvent.findOne({'_id': req.params.param}).then(data => {
        remove(data);
        console.log(data);
        res.send(data);
    }, err => {
        res.send(err.error.messsage);
    });
});

const createNewEvent = tEvent => {
    console.log('here: ' + JSON.stringify(tEvent));
    return TeamEvent.create(tEvent);
};

module.exports = router;