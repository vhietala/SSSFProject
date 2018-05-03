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


const eventSchema = new Schema({
    date: {
        type: Date,
        //required: true,
    },
    //hour: Number,
    //minutes: Number,
    //location: GeoSchema,
    //category: {
       // type: String,
    //},
    title: {
        type: String,
        required: true,
    },
    info: String,
    participants: [ {type: String, uniqueItems: true}],
    comments: commentSchema,
});

const TeamEvent = mongoose.model('teamEvent', eventSchema);

module.exports = TeamEvent;

