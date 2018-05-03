'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
        user: String,
        comment: String
    }
);

const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});
const timeSchema = new Schema({
    hour: Number,
    minutes: Number
});

const eventSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    time: timeSchema,
    location: GeoSchema,
    category: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    info: String,
    comments: commentSchema,
});

const TeamEvent = mongoose.model('teamEvent', eventSchema);

module.exports = TeamEvent;

