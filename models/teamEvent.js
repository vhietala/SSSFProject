'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
        user: String,
        comment: String
    }
);
const eventSchema = new Schema({
    time: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
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

