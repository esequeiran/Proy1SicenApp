'use strict';

const express = require('express');
const router = express.Router();

const apiEvaluacionMEP = require('./evaluacionesMEP.api');
const apiCriterios = require('../criteriosMEP/criterios.api');
const apiRangos = require('../rangosMEP/rangos.api');

router.param('anno', function(req, res, next, anno){
    req.body.anno = anno;
    next();
});

router.param('id', function(req, res, next, id){
    req.body.id = id;
    next();
});


router.route('/listarCE')
    .get(
    function(req, res){
        apiEvaluacionMEP.listarCE(req, res);
    });

router.route('/listarCriteriosEvaluacion')
    .get(
    function(req, res){
        apiCriterios.listarLosCriterios(req, res);
    }
);

router.route('/listarRangosEvaluacion')
.get(
    function(req, res){
        apiRangos.listarLosRangos(req, res);
    }
)

router.route('/registrarEvaluacionMEP')
.post(
    function(req, res){
        apiEvaluacionMEP.registrarEvaluacionMEP(req, res);
    }
)


router.route('/listarCEEvaluados')
.post(
    function(req, res){
        apiEvaluacionMEP.listarCEEvaluados(req, res);
    }
)

router.route('/listarCEEvaluadosTop/:anno')
.get(
    function(req, res){
        apiEvaluacionMEP.listarCEEvaluadosTop(req, res);
    }
)



router.route('/listarTodosCEEvaluados')
.get(
    function(req, res){
        apiEvaluacionMEP.listarTodosCEEvaluados(req, res);
    }
)

router.route('/listarMiEvaluacion/:id')
.get(
    function(req, res){
        apiEvaluacionMEP.listarEvaluacionCE(req, res);
    }
)



router.route('/listarEstrellasPropias')
.post(
    function(req, res){
        apiEvaluacionMEP.listarEstrellasCE(req, res);
    }
)


module.exports = router;
