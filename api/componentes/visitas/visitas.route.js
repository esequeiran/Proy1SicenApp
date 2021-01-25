'use strict';

const express = require('express');
const router = express.Router();
const visitasApi = require('./visitas.api');

router.param('idCE', (req, res, next, idCE) => {
    req.body.idCE = idCE;

    next();
});

router.route('/registrarVisita')
    .post(
        function (req, res) {
            visitasApi.registrarVisita(req, res);
        }
    );

router.route('/modificarFecha')
    .post(
        function (req, res) {
            visitasApi.modificar(req, res);
        }
    );

router.route('/obtenerVisita/:idCE')
    .get(
        function (req, res) {
            visitasApi.obtenerVisita(req, res);
        }
    );

router.route('/centroEducativo/listarVisitasUser/:idCE')
    .get(
        function (req, res) {
            visitasApi.listarVisitasUser(req, res);
        }
    );

module.exports = router;