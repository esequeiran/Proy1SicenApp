'use strict';

const express = require('express');
const router = express.Router();
const apiActividades = require('./actividades.api');

router.param('_id', function(req, res, next, _id){
    req.body._id = _id;
    next();
});

router.route('/registrarActividad')
    .post(
    function(req, res){
        apiActividades.registrar(req, res);
    }
);

router.route('/listarActividades')
    .post(
    function(req, res){
        apiActividades.listarActividades(req, res);
    }
);



router.route('/buscarActividad/:_id')
.get(
    function(req, res){
        apiActividades.buscarActividad(req, res);
    }
);

router.route('/actualizarActividad')
.post(
    function(req , res){
        apiActividades.actualizar(req, res);
    }
);


router.route('/eliminarActividad')
    .post(
        (req, res) =>{
            apiActividades.eliminar(req, res);
        }
    );

module.exports = router;