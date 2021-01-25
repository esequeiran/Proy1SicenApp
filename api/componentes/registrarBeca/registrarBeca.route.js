'use strict';

const express = require('express');
const router = express.Router();
const apiRegistrarBeca = require('./registrarBeca.api');

router.route('/registrar_beca')
    .post(
        function (req, res) {
            apiRegistrarBeca.registrar(req, res);
        }
    );

router.route('/listar_becas')
    .get(
        function (req, res) {
            apiRegistrarBeca.listarBecas(req, res);
        }
    );

module.exports = router;