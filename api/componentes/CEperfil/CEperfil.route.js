'use strict';

const express = require('express');
const router = express.Router();
const CEperfil = require('./CEperfil.api');

router.param('_id', function (req, res, next, _id) {
    req.body._id = _id;
    next();
});

router.route('/listaCEunico/:_id')
    .get(
        function (req, res) {
            CEperfil.buscarCE(req, res);
        }
    );


    router.route('/listaPFunico/:_id')
    .get(
        function (req, res) {
            CEperfil.buscarPF(req, res);
        }
    );

module.exports = router;