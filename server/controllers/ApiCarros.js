'use strict';

const express = require('express');
const Carros = require('../models/Carros');

const router = express.Router();

router.post('/', function(req, res){
    Carros.find({"$or": [
        {
            "marca": {
                "$regex": req
            }
        },{
            "modelo": {
                "$regex": req
            }
        },{
            "año": {
                "$regex": req
            }
        }]}, function(err, Carros){
            if(err){
                res.status(500).send('Error en la base de datos');
            }
            else{
                if(Carros != null) {
                    res.status(200).json(Carros);
                }
                else{
                    res.status(404).send('No se encuentra el Carro');
                }
            }
        });
});

module.exports = router;