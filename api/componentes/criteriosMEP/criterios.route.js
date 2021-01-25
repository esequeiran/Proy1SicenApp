'use strict';

const express = require('express');
const router = express.Router();
const apiCriterios = require('./criterios.api');

router.param('_id', function(req, res, next, _id){
    req.body._id = _id;
    next();
});


router.route('/registrarCriterio')
    .post(
    function(req, res){
        apiCriterios.registrarElCriterio(req, res);
    }
);

router.route('/actualizarCriterio')
.post(
    function(req , res){
        apiCriterios.actualizar(req, res);
    }
);

router.route('/listarCriterios')
    .get(
    function(req, res){
        apiCriterios.listarLosCriterios(req, res);
    }
);


router.route('/buscarCriterio/:_id')
.get(
    function(req, res){
        apiCriterios.buscarCriterio(req, res);
    }
);


router.route('/eliminarCriterio')
    .post(
        (req, res) =>{
            apiCriterios.eliminar(req, res);
        }
    );

module.exports = router;