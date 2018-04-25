'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    time: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
});

const TeamEvent = mongoose.model('teamEvent', eventSchema);

module.exports = TeamEvent;
