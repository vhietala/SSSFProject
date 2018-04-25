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



app.use(express.static('public'));





