'use strict';

const modeloRegistrarNoticia = require('./noticias.model');
const modeloBitacora = require('../bitacora/bitacora.model');

module.exports.registrar = (req, res) => {

    let nuevaNoticia = new modeloRegistrarNoticia(
        {
            tituloNoticia: req.body.tituloNoticia,
            fechaNoticia: req.body.fechaNoticia,
            registrarNoticia: req.body.registrarNoticia,
            idCE: req.body.idCE,
            userName: req.body.userName,
        }
    );

    nuevaNoticia.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar su noticia, ocurrió el sigiente error ${error}`
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
                tipoDeMovimiento: "Registro de noticia",
                fecha: diaActual,
            })
            nuevaBitacora.save();
            res.json(
                {
                    success: true,
                    msg: `Su noticia ha sido registrada`
                }
            );
        }

    });

};

/**************************************************************************************************************/

module.exports.listarNoticiasCE = (req, res) => {
    modeloRegistrarNoticia.find().then(
        noticiasListadasCE => {
            let arregloNoticias = [];

            for (let noticia of noticiasListadasCE) {
                if (noticia.idCE == req.body.idCE) {
                    arregloNoticias.push(noticia);
                }
            }

            // console.log(arregloNoticias);
            // console.log(req.body.idCE);

            if (arregloNoticias.length > 0) {
                res.json(
                    {
                        success: true,
                        notichas: arregloNoticias,

                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        notichas: "No se encontraron noticias",
                    }
                )
            }
        }
    )
};

/**************************************************************************************************************/

module.exports.buscarNoticia = function (req, res) {
    modeloRegistrarNoticia.find({ _id: req.body._id }).then(
        function (noticia) {
            if (noticia) {
                res.json({ success: true, noticia: noticia });
            } else {
                res.json({ success: false, noticia: noticia });
            }
        }

    );

};

/**************************************************************************************************************/

module.exports.editar = function (req, res) {

    modeloRegistrarNoticia.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo actualizar su noticia' });
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
                    tipoDeMovimiento: "Editación de noticia",
                    fecha: diaActual,
                })
                nuevaBitacora.save();
                res.json({ success: true, msg: 'Su noticia ha sido actualizada' });
            }
        }

    );
}

/**************************************************************************************************************/

module.exports.eliminar = function (req, res) {
    modeloRegistrarNoticia.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar su noticia' });
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
                    tipoDeMovimiento: "Eliminación de noticia",
                    fecha: diaActual,
                })
                nuevaBitacora.save();
                res.json({ success: true, msg: 'Su noticia ha sido eliminada' });
            }
        })
}