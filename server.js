'use strict';

const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  time: Date,
  category: String,
  title: String,
  details: String,
  coordinates: {
    lat: Number,
    lng: Number,
  },
});

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`).then(() => {
  console.log('Connected successfully.');
  app.use(express.static('public'));
  app.listen(${process.env.APP_PORT});
}, err => {
  console.log('Connection to db failed: ' + err);
});

/**
 * @api {get} /events Get all events
 *
 */
app.get('/events', (req, res) =>{
  res.send('root')
});


/**
 * @api {post} /newEvent post new event
 *
 * @apiParam {formData}
 */
app.post('/newEvent',(req,res)=>{
  res.send('gotcha!');
});
