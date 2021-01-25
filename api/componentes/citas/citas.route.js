'use strict';

const express = require('express');
const router = express.Router();
const apiCitas = require('./citas.api');

router.param('correo',function(req, res, next,correo){
    req.body.correo = correo;

    next();
});

router.param('nombreCE',function(req, res, next,nombreCE){
    req.body.nombreCE = nombreCE;

    next();
});

router.route('/registrarCita')
    .post(
        function (req, res) {
            apiCitas.registrarCita(req, res);
        }
    );

router.route('/padreFamilia/listarCitas/:correo')
    .get(
        function (req, res) {

            apiCitas.listarCitasPF(req, res);
        }
    );

router.route('/centroEducativo/listarCitas/:nombreCE')
    .get(
        function (req, res) {
            apiCitas.listarCitasCE(req, res);
        }
    );

router.route('/padreFamilia/cancelarCita')
    .post(
        (req, res) =>{
            apiCitas.cancelar(req, res);
        }
    );


module.exports = router;