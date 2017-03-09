'use strict'

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const CarrosSchema = mongoose.model('Carros', {
    _id: { type: Number, required: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    año: { type: Number, required: true }
});

module.exports = CarrosSchema;