'use strict';

const express = require('express');
const router = express.Router();
const starsPFApi = require('./starsPF.api');

router.param('idCE', (req, res, next, idCE) => {
    req.body.idCE = idCE;

    next();
});

router.route('/registrarEvaluacion')
    .post(
        function (req, res) {
            starsPFApi.registrarEvaluacion(req, res);
        }
    );

router.route('/modificarEvaluacionPF')
    .post(
        function (req, res) {
            starsPFApi.modificar(req, res);
        }
    );

router.route('/obtenerEvaluacion/:idCE')
    .get(
        function (req, res) {
            starsPFApi.obtenerEvaluacion(req, res);
        }
    );

router.route('/listarEvaluaciones')
    .get(
        function (req, res) {
            starsPFApi.listarEvaluacion(req, res);
        }
    );

router.route('/centroEducativo/listarEvaluacionesUsuario/:idCE')
    .get(
        function (req, res) {
            starsPFApi.listarEvaluacionUsuario(req, res);
        }
    );

module.exports = router;