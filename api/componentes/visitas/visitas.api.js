'use strict';

const visitasModel = require('./visitas.model');

module.exports.registrarVisita = (req, res) => {
    console.log(req.body.fechas);
    let nuevaVisita = new visitasModel(
        {
            fechas: req.body.fechas.split(","),
            idCE: req.body.idCE
        }
    );

    nuevaVisita.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `La visita no pudo ser registrada ${error}.`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `La visita se ha registrado correctamente.`
                }
            );
        }
    });
};


module.exports.modificar = function (req, res) {
    req.body.fechas = req.body.fechas.split(",");
    // console.log("FECHAS  ============  " + req.body.fechas);
    // console.log("ID CE  ============  " + req.body.idCE);
    // console.log("ID VISITA  ============  " + req.body.id);

    visitasModel.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json({ success: false, msg: `No se pudo actualizar la visita ${error}` });
            } else {
                res.json({ success: true, msg: 'La visita se actualizó correctamente ' + req.body.fechas });
            }
        }
    );
};

module.exports.obtenerVisita = (req, res) => {
    visitasModel.findOne({ idCE: req.body.idCE }).then(
        function (visita) {
            if (visita) {
                res.json({
                    success: true,
                    visita: visita
                })
            } else {
                res.json({
                    success: false,
                    visita: false
                })
            }

        }
    )
};

module.exports.listarVisitasUser = (req, res) => {
    visitasModel.find().then(
        function (visita) {

            let listaVisitasUser = [];

            for (let visitasUser of visita) {
                if (visitasUser.idCE == req.body.idCE) {
                    listaVisitasUser.push(visitasUser);
                }
            }
            console.log(listaVisitasUser);
            console.log(req.body.idCE);
            if (listaVisitasUser.length > 0) {
                res.json({
                    success: true,
                    visita: listaVisitasUser
                });
            } else {
                res.json({
                    success: false,
                    visita: 'No se encontraron visitas registradas'
                });
            }
        }
    );
};