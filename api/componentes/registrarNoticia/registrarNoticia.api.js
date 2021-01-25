'use strict';

const modeloRegistrarNoticia = require('./registrarNoticia.model');

module.exports.registrar = (req, res) => {

    let nuevaNoticia = new modeloRegistrarNoticia(
        {
            tituloNoticia: req.body.tituloNoticia,
            fechaNoticia: req.body.fechaNoticia,
            registrarNoticia: req.body.registrarNoticia,
            idCE : req.body.idCE,
        }
    );

    nuevaNoticia.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar su beca, ocurrió el sigiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Su beca ha sido registrada`
                }
            );
        }

    });

};

module.exports.listarNoticias = (req, res) => {

    modeloRegistrarNoticia.find().then(
        function (registrarNoticia) {

            if (registrarNoticia.length > 0) {
                res.json(
                    {
                        success: true,
                        registrarNoticia: registrarNoticia,
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        registrarNoticia: "No se encontraron noticias"
                    }
                )
            }
        }
    )

};