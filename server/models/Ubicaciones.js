'use strict'

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const UbicacionesSchema = mongoose.model('Ubicaciones', {
    _id: { type: Number, required: true },
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    direccion: { type: String, required: true }
});

module.exports = UbicacionesSchema; 