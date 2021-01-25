'use strict';

const express = require('express');
const router = express.Router();
const api_usuarios = require('./usuarios.api');


router.param('_id', function(req, res, next, _id){
    req.body._id = _id;
    next();
});



router.route('/registrar_usuario')
    .post(
        function (req, res) {
            api_usuarios.registrar(req, res);
        }
    );

router.route('/actualizar')
    .post(
        function (req, res) {
            api_usuarios.actualizar(req, res);
        }
    );

router.route('/eliminar')
    .post(
        function (req, res) {
            api_usuarios.eliminarUsuario(req, res);
        }
    );
    


router.route('/validarCredenciales')
    .post(
        function (req, res) {
            api_usuarios.validar (req, res);
        }
    );

    router.route('/listaCE')
    .get(
        function (req, res) {
            api_usuarios.listarCE(req, res);
        }
    );

    router.route('/listaPF')
    .get(
        function (req, res) {
            api_usuarios.listarPFs(req, res);
        }
    );
    // router.route('/listaPF')
    // .get(
    //     function (req, res) {
    //         api_usuarios.listarPF(req, res);
    //     }
    // );

    router.route('/solicitudes')
    .get(
        function (req, res) {
            api_usuarios.solicitudes(req, res);
        }
    );    

router.route('/listarCEPorOU')
    .post(
        function (req, res){
            api_usuarios.listarCEOusuario(req, res);
        }
    );

router.route('/favoritar')
    .post(
        function (req, res){
            api_usuarios.favoritar(req, res);
        }
    );

router.route('/desfavoritar')
    .post(
        function (req, res){
            api_usuarios.desfavoritar(req, res);
        }
    );

router.route('/favoritos')
    .get(
        function (req, res){
            api_usuarios.favoritos(req, res);
        }
    );

router.route('/listarPFPorSA')
    .post(
        function (req, res){
            api_usuarios.listarPFPorSA(req, res);
        }
);

router.route('/listarInfoMEP')
    .get(
        function (req, res){
            api_usuarios.listarMEP(req, res);
        }
);

router.route('/listarInfoPF/:_id')
    .get(
        function (req, res){
            api_usuarios.listarPF(req, res);
        }
);

module.exports = router;