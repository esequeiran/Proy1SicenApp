'use strict';

const express = require('express');
const router = express.Router();
const apiRangos = require('./rangos.api');

router.param('_id', function(req, res, next, _id){
    req.body._id = _id;
    next();
});

router.route('/registrarRango')
.post(
    function(req, res){
        apiRangos.registrarElRango(req, res);
    }
)

router.route('/listarRangos')
.get(
    function(req, res){
        apiRangos.listarLosRangos(req, res);
    }
)

router.route('/actualizarRango')
.post(
    function(req , res){
        apiRangos.actualizar(req, res);
    }
);

router.route('/buscarRango/:_id')
.get(
    function(req, res){
        apiRangos.buscarRango(req, res);
    }
);


router.route('/eliminarRango')
    .post(
        (req, res) =>{
            apiRangos.eliminar(req, res);
        }
    );

module.exports = router;