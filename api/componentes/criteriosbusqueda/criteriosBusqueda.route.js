'use strict';

const express = require('express');

const router = express.Router();

const apiCriteriosBusqueda = require('./criteriosBusqueda.api');

router.param('nombre', (req, res, next, nombre) =>{
    req.body.nombre = nombre;

    next();
});

router.param('id', (req, res, next, id) =>{
    req.body.id = id;

    next();
});

router.param('idCE', (req, res, next, idCE) =>{
    req.body.idCE = idCE;

    next();
});

router.route('/validarEtiqueta/:nombre')
    .get(
        function (req, res) {
            apiCriteriosBusqueda.validarEtiqueta(req, res);
        }
    );

router.route('/administrador/registrarCriterioBusqueda')
    .post(
        function (req, res) {
            apiCriteriosBusqueda.registrarCriterioBusqueda(req, res);
        }
    );

router.route('/listarCriteriosBusqueda')
    .get(
        function (req, res) {
            apiCriteriosBusqueda.listarCriteriosBusqueda(req, res);
        }
    );

router.route('/obtenerCriterioBusqueda/:id')
    .get(
        (req, res) =>{
            apiCriteriosBusqueda.getEtiqueta(req, res);
        }
    );

router.route('/administrador/modificarEtiqueta')
    .post(
        (req, res) =>{
            apiCriteriosBusqueda.actualizar(req, res);
        }
    );
router.route('/administrador/eliminarEtiqueta')
    .post(
        (req, res) =>{
            apiCriteriosBusqueda.eliminar(req, res);
        }
    );

router.route('/centroEducativo/marcarCriterioBusqueda')
    .post(
        function (req, res) {
            apiCriteriosBusqueda.marcarCriterioBusquedaCE(req, res);
        }
    );

router.route('/centroEducativo/desmarcarEtiqueta')
    .post(
        (req, res) =>{
            apiCriteriosBusqueda.eliminarCriterioBusquedaCE(req, res);
        }
    );

router.route('/centroEducativo/listarCriteriosBusqueda/:idCE')
    .get(
        function (req, res) {
            apiCriteriosBusqueda.listarCriteriosBusquedaCE(req, res);
        }
    );

router.route('centroEducativo/obtenerCriterioBusqueda/:idCE&nombre/:nombre')
    .get(
        (req, res) =>{
            apiCriteriosBusqueda.getEtiqueta(req, res);
        }
    );
module.exports = router;