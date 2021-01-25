'use strict';

const express = require('express');
const router = express.Router();
const apiRegistrarNoticia = require('./noticias.api');

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

router.route('/registrarNoticia')
    .post(
        function (req, res) {
            apiRegistrarNoticia.registrar(req, res);
        }
    );
/**************************************************************************************************************/

router.route('/listarNoticias')
    .post(
        function (req, res) {
            apiRegistrarNoticia.listar(req, res);
        }
    );

/**************************************************************************************************************/

router.route('/listarNoticiasCE/:idCE')
    .get(
        function (req, res) {
            apiRegistrarNoticia.listarNoticiasCE(req, res);
        }
    );

/**************************************************************************************************************/

router.route('/buscarNoticia/:_id')
    .get(
        function (req, res) {
            apiRegistrarNoticia.buscarNoticia(req, res);
        }
    );

/**************************************************************************************************************/
router.route('/editarNoticia')
    .post(
        function (req, res) {
            apiRegistrarNoticia.editar(req, res);
        }
    );

/**************************************************************************************************************/


router.route('/eliminarNoticia')
    .post(
        (req, res) => {
            apiRegistrarNoticia.eliminar(req, res);
        }
    );

module.exports = router;