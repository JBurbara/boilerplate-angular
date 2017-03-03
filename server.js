'use strict';

const path = require('path');

const bodyParse = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const config = require('./config.json');
const router = require('./server/router');

const server = express();
const publicFolder = path.join(__dirname, 'client');

server.use(bodyParser.json());
server.use(bodyParser.json({ type: 'application/vnd.api+json' }));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(methodOverride('X-HTTP-Method-Override'));
server.use(express.static(publicFolder));

router(server, __dirname);

server.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.send(err.message);
	console.error(err);
});

mongoose.connect(config.database.url)
    .then(() => server.listen(config.url))
    .then(() => console.log(`Server started at port ${config.port}`));