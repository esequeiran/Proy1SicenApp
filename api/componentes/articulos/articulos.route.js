'use strict';

const express = require('express');
const router = express.Router();
const apiArticulos = require('./articulos.api');

router.param('_id', function(req, res, next, _id){
    req.body._id = _id;
    next();
});



router.route('/registrarArticulo')
.post(
    function(req, res){
        apiArticulos.registrar(req, res);
    }
);

router.route('/actualizarArticulo')
.post(
    function(req , res){
        apiArticulos.actualizar(req, res);
    }
);

router.route('/listarArticulo')
.post(
    function(req, res){
        apiArticulos.listarArticulo(req, res);
    }
);



router.route('/buscarArticulo/:_id')
.get(
    function(req, res){
        apiArticulos.buscarArticulo(req, res);
    }
);


router.route('/eliminarArticulo')
    .post(
        (req, res) =>{
            apiArticulos.eliminar(req, res);
        }
    );

module.exports = router;