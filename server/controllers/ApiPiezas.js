'use strict';

const express = require('express');
const Piezas = require('../models/Piezas');

const router = express.Router();

router.post('/', function(req, res){
    Piezas.find({"$or": [
        {
            "nombre": {
                "$regex": req
            }
        },{
            "ubicacion": {
                "$regex": req
            }
        },{
            "carro": {
                "$regex": req
            }
        }]}, function(err, Piezas){
            if(err){
                res.status(500).send('Error en la base de datos');
            }
            else{
                if(Piezas != null) {
                    res.status(200).json(Piezas);
                }
                else{
                    res.status(404).send('No se encuentra la Pieza');
                }
            }
        });
});

module.exports = router;