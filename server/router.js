'use strict'

const path = require('path');

const ApiCarros = require('./controllers/ApiCarros');
const ApiPiezas = require('./controllers/ApiPiezas');
const ApiUbicaciones = require('./controllers/ApiUbicaciones');

module.exports = function (server, root) {
    const publicFolder = path.join(root, '/client');

    server.get('/', function(req, res) {
    	res.sendFile(path.join(publicFolder, 'index.html'));
    });
    server.use('/api/carros', ApiCarros);
    server.use('/api/piezas', ApiPiezas);
    server.use('/api/ubicaciones', ApiUbicaciones);
};