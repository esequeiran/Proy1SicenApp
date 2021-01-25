'use strict';

const modeloBeca = require('./registrarBeca.model');

module.exports.registrar = (req, res) => {

    let nuevaBeca = new modeloBeca(
        {
            nombreBeca: req.body.nombreBeca,
            descripcionBeca: req.body.descripcionBeca,
            idCE : req.body.idCE,
        }
    );
    nuevaBeca.save(function (error) {
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

module.exports.listarBecas = (req, res) => {

    modeloBeca.find().then(
        function (registrarBeca) {

            if (registrarBeca.length > 0) {
                res.json(
                    {
                        success: true,
                        registrarBeca: registrarBeca,
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        registrarBeca: "No se encontraron becas"
                    }
                )
            }
        }
    )

};