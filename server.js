'use strict';

const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyParser = require('body-parser');

const https = require('https');
const fs = require('fs-extra');
const http = require('http');

const sslkey = fs.readFileSync('ssl-key.pem');
const sslcert = fs.readFileSync('ssl-cert.pem');

// moment
const moment = require('moment');
moment.locale('fi');

mongoose.connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`).
    then(() => {
      console.log('Connected successfully.');
      http.createServer((req, res) => {
        res.writeHead(301, {
          'Location': `https://${process.env.APP_HOST}:${process.env.APP_PORT}` +
          req.url,
        });
        res.end();
      }).listen(8080);
      const options = {
        key: sslkey,
        cert: sslcert,
      };
      https.createServer(options, app).listen(process.env.APP_PORT);
    }, err => {
      console.log('Connection to db failed: ' + err);
    });

const eventSchema = new Schema({
  date: Date,
  category: String,
  title: String,
});

const Evnt = mongoose.model('Evnt', eventSchema);

app.use(express.static('public'));





/**
 * @api {post} /event post new event
 * @apiName PostEvent
 * @apiGroup Event
 * @apiDescription This is used to post a new event to the database
 * it redirects to main page if successful, if not it sends an error message
 *
 */
app.post('/event', bodyParser.urlencoded({extended: true}), (req, res) => {
  // console.log(req.body);
  Evnt.create({
    title: req.body.title,
    category: req.body.category,
    date: req.body.date,
  }).then(c => {
    res.redirect('/');
  }, err => {
    console.log(err.error.message);
  });
});

