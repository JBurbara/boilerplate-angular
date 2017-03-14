'use strict';

const express = require('express');
const Ubicaciones = require('../models/Ubicaciones');

const router = express.Router();

router.post('/', function(req, res){
    Ubicaciones.find({"$or": [
        {
            "marca": {
                "$regex": req
            }
        },{
            "año": {
                "$regex": req
            }
        },{
            "modelo": {
                "$regex": req
            }
        }]}, function(err, Ubicaciones){
            if(err){
                res.status(500).send('Error en la base de datos');
            }
            else{
                if(Ubicaciones != null) {
                    res.status(200).json(Ubicaciones);
                }
                else{
                    res.status(404).send('No se encuentra la Ubicacion');
                }
            }
        });
});

module.exports = router;