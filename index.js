#!/usr/bin/env node
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/avl');

const app = express();
const router = require('./router');

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
router(app);

const port = process.env.PORT || 3091;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
