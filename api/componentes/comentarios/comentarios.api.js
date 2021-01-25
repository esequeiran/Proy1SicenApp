'use strict';

const comentariosModel = require('./comentarios.model');
const modeloBitacora = require('../bitacora/bitacora.model');

module.exports.registrar = (req, res) => {
    let nuevoComentario = new comentariosModel(
        {
            userPhoto: req.body.userPhoto,
            userName: req.body.userName,
            stars: req.body.stars,
            comment: req.body.comment,
            idCE: req.body.idCE
        }
    );

    nuevoComentario.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `El comentario no pudo ser registrado ${error}.`
                }
            );
        } else {
            var diaActual = new Date();
            var dd = diaActual.getDate();
            var mm = diaActual.getMonth();
            var yyyy = diaActual.getFullYear();
            var hora = diaActual.getHours();
            var minutos = diaActual.getMinutes();
            var segundos = diaActual.getSeconds();


            diaActual = `${yyyy}/${mm}/${dd} - ${hora}:${minutos}:${segundos}`;

            let nuevaBitacora = new modeloBitacora({
                usuario: req.body.userName,
                tipoDeMovimiento: "Registro de comentario",
                fecha: diaActual,
            })
            nuevaBitacora.save();
            res.json(
                {
                    success: true,
                    msg: `El comentario se ha registrado correctamente.`
                }
            );
        }
    });
};

module.exports.listarComentarioUsuario = (req, res) => {
    comentariosModel.find({idCE: req.body.idCE}).then(
        function (comentario) {


            if (comentario.length > 0) {
                res.json({
                    success: true,
                    comentario: comentario
                });
            } else {
                res.json({
                    success: false,
                    comentario: 'No se encontraron comentarios registrados'
                });
            }
        }
    );
};

module.exports.eliminar = function (req, res) {
    comentariosModel.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar el comentario' });
            } else {
                var diaActual = new Date();
                var dd = diaActual.getDate();
                var mm = diaActual.getMonth();
                var yyyy = diaActual.getFullYear();
                var hora = diaActual.getHours();
                var minutos = diaActual.getMinutes();
                var segundos = diaActual.getSeconds();
    
    
                diaActual = `${yyyy}/${mm}/${dd} - ${hora}:${minutos}:${segundos}`;
    
                let nuevaBitacora = new modeloBitacora({
                    usuario: req.body.nombre,
                    tipoDeMovimiento: "Eliminación de comentario",
                    fecha: diaActual,
                })
                nuevaBitacora.save();
                res.json({ success: true, msg: 'El comentario se eliminó con éxito' });
            }
        })
}