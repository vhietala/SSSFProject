'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username is required']},
    password: {
        type: String,
        required: [true, 'password is required']},
    name: String,
    number: Number,
    email: String,
    phone: String,
    type: String
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('user', userSchema);

module.exports = User;