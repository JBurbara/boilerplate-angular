'use strict'

const path = require('path');

const ApiSearch = require('./controllers/ApiSearch');

module.exports = function (server, root) {
    const publicFolder = path.join(root, '/client');

    server.get('/', function(req, res) {
    	res.sendFile(path.join(publicFolder, 'index.html'));
    });
    server.use('/api/search', ApiSearch);
};