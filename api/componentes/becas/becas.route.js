'use strict';

const express = require('express');
const router = express.Router();
const apiRegistrarBeca = require('./becas.api');

/**************************************************************************************************************/

router.param('idCE', (req, res, next, idCE) => {
    req.body.idCE = idCE;
    next();
});

/**************************************************************************************************************/

router.param('_id', function (req, res, next, _id) {
    req.body._id = _id;
    next();
});

/**************************************************************************************************************/

router.route('/registrarBeca')
    .post(
        function (req, res) {
            apiRegistrarBeca.registrar(req, res);
        }
    );

/**************************************************************************************************************/

router.route('/listarBecas')
    .get(
        function (req, res) {
            apiRegistrarBeca.listarBecas(req, res);
        }
    );

/**************************************************************************************************************/

router.route('/listarBecasCE/:idCE')
    .get(
        function (req, res) {
            apiRegistrarBeca.listarBecasCE(req, res);
        }
    );

/**************************************************************************************************************/

router.route('/buscarBeca/:_id')
    .get(
        function (req, res) {
            apiRegistrarBeca.buscarBeca(req, res);
        }
    );

/**************************************************************************************************************/

router.route('/editarBeca')
    .post(
        function (req, res) {
            apiRegistrarBeca.editar(req, res);
        }
    );

/**************************************************************************************************************/


router.route('/eliminarBeca')
    .post(
        (req, res) => {
            apiRegistrarBeca.eliminar(req, res);
        }
    );

module.exports = router;