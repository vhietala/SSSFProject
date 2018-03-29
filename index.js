'use strict';

const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`).then(() => {
  console.log('Connected successfully.');
  app.use(express.static('public'));
  app.listen(3000);
}, err => {
  console.log('Connection to db failed: ' + err);
});

