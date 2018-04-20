'use strict';

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  time: Date,
  location: string,
  category: String,
  title: String,
});

