'use strict';

const express = require('express');
const router = express.Router();

const apiUtiles = require('./utiles.api');


router.param('_id', function(req, res, next, _id){
    req.body._id = _id;
    next();
});



router.route('/registrarUtil')
.post(
    function(req, res){
        apiUtiles.registrar(req, res);
    }
);

router.route('/listarUtilNivel')
.post(
    function(req, res){
        apiUtiles.listarUtilNivel(req, res);
    }
)

router.route('/listarUtilNivelPropio')
.post(
    function(req, res){
        apiUtiles.listarUtilNivelPropio(req, res);
    }
)


router.route('/listarTodos')
.get(
    function(req, res){
        apiUtiles.listarTodos(req, res);
    }
)
//segunda iteración en adelante

router.route('/actualizarUtil')
.post(
    function(req , res){
        apiUtiles.actualizarUtil(req, res);
    }
);


router.route('/buscarUtilIndividual/:_id')
.get(
    function(req, res){
        apiUtiles.buscarUtilIndividual(req, res);
    }
);


router.route('/eliminarUtil')
    .post(
        (req, res) =>{
            apiUtiles.eliminarUtil(req, res);
        }
    );

    router.route('/eliminarLista')
    .post(
        (req, res) =>{
            apiUtiles.eliminarLista(req, res);
        }
    );

module.exports = router;