'use strict';

const express = require('express');
const router = express.Router();
const materialApi = require('./material.api');

router.param('idCE', (req, res, next, idCE) => {
    req.body.idCE = idCE;

    next();
});

router.param('_id', function (req, res, next, _id) {
    req.body._id = _id;
    next();
});

router.route('/registrarMaterialInformativo')
    .post(
        function (req, res) {
            materialApi.registrar(req, res);
        }
    );

router.route('/listarMaterialInformativo')
    .get(
        function (req, res) {
            materialApi.listarMaterial(req, res);
        }
    );

router.route('/centroEducativo/listarMaterialUsuario/:idCE')
    .get(
        function (req, res) {
            materialApi.listarMaterialUsuario(req, res);
        }
    );

router.route('/editarMaterial')
    .post(
        function (req, res) {
            materialApi.editar(req, res);
        }
    );

router.route('/buscarMaterial/:_id')
    .get(
        function (req, res) {
            materialApi.buscarMaterial(req, res);
        }
    );

router.route('/eliminarMaterial')
    .post(
        (req, res) => {
            materialApi.eliminar(req, res);
        }
    );

module.exports = router;