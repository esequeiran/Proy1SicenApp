'use strict'

const express = require('express');
const router = express.Router();
const apiRegistrarIdiomas = require('./idiomas.api');

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

router.route('/registrarIdiomas')
    .post(
        function (req, res) {
            apiRegistrarIdiomas.registrar(req, res);
        }
    );

/**************************************************************************************************************/

router.route('/listarIdiomas')
    .get(
        function (req, res) {
            apiRegistrarIdiomas.listar(req, res);
        }
    );

/**************************************************************************************************************/

router.route('/listarIdiomasCE/:idCE')
    .get(
        function (req, res) {
            apiRegistrarIdiomas.listarIdiomasCE(req, res);
        }
    );

/**************************************************************************************************************/

router.route('/buscarIdioma/:_id')
    .get(
        function (req, res) {
            apiRegistrarIdiomas.buscarIdioma(req, res);
        }
    );

/**************************************************************************************************************/

router.route('/editarIdioma')
    .post(
        function (req, res) {
            apiRegistrarIdiomas.editar(req, res);
        }
    );
/**************************************************************************************************************/

router.route('/eliminarIdioma')
    .post(
        (req, res) => {
            apiRegistrarIdiomas.eliminar(req, res);
        }
    );

module.exports = router;