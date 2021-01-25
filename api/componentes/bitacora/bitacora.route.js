'use strict';

const express = require('express');
const router = express.Router();
const apiBitacora = require('./bitacora.api');


router.route('/registrarBitacora')
    .post(
        function (req, res) {
            apiBitacora.registrarBitacora(req, res);
        }
    );


router.route('/listarBitacora')
    .get(
        function (req, res) {
            apiBitacora.listarBitacora(req, res);
        }
    );

module.exports = router;