'use strict';

const express = require('express');

const router = express.Router();

const apiPreguntasFrecuentes = require('./preguntasFrecuentes.api');

router.param('idCE', (req, res, next, idCE) =>{
    req.body.idCE = idCE;

    next();
});

router.param('pregunta', (req, res, next, pregunta) =>{
    req.body.pregunta = pregunta;

    next();
});

router.param('id', (req, res, next, id) =>{
    req.body.id = id;

    next();
});

router.route('/validarNuevaPregunta/:pregunta')
    .get(
        function (req, res) {
            apiPreguntasFrecuentes.validarNuevaPregunta(req, res);
        }
    );

router.route('/registrarPreguntaFrecuente')
    .post(
        function (req, res) {
            apiPreguntasFrecuentes.registrarPreguntaFrecuente(req, res);
        }
    );

router.route('/centroEducativo/listarPreguntasFrecuentes/:idCE')
    .get(
        function (req, res) {
            apiPreguntasFrecuentes.listarPreguntasFrecuentes(req, res);
        }
    );

router.route('/modificarPregunta')
    .post(
        (req, res) =>{
            apiPreguntasFrecuentes.actualizar(req, res);
        }
    );

router.route('/eliminarPregunta')
    .post(
        (req, res) =>{
            apiPreguntasFrecuentes.eliminar(req, res);
        }
    );

// router.route('/padreFamilia/listarPreguntasFrecuentes')
//     .get(
//         function (req, res) {
//             apiPreguntasFrecuentes.listarPreguntasFrecuentesPF(req, res)
//         }
//     );

module.exports = router;