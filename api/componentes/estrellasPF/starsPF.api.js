'use strict';

const starsPFModel = require('./starsPF.model');

module.exports.registrarEvaluacion = (req, res) => {
    let nuevaEvaluacionPF = new starsPFModel(
        {
            photoCE: req.body.photoCE,
            nameCE: req.body.nameCE,
            provinciaCE: req.body.provinciaCE,
            stars: req.body.stars,
            starsProm: req.body.starsProm,
            type: req.body.type,
            idCE: req.body.idCE
        }
    );

    nuevaEvaluacionPF.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `La evaluacion no pudo ser registrada ${error}.`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `La evaluacion se ha registrado correctamente.`
                }
            );
        }
    });
};

module.exports.modificar = function (req, res) {
    starsPFModel.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json({
                    success: false, 
                    msg: `No se pudo actualizar la evaluacion ${error}`
                });
            } else {
                res.json({
                    success: true, 
                    msg: 'La evaluacion se actualizó correctamente ' + req.body.stars
                });
            }
        }
    );
};

module.exports.obtenerEvaluacion = (req, res) => {
    starsPFModel.findOne({ idCE: req.body.idCE }).then(
        function (stars) {
            if (stars) {
                res.json({
                    success: true,
                    stars: stars
                })
            } else {
                res.json({
                    success: false,
                    stars: false
                })
            }

        }
    )   
};

module.exports.listarEvaluacion = (req, res) => {
    starsPFModel.find().sort({starsProm: 'desc'}).then(
        function (stars) {
            if (stars.length > 0) {
                res.json({
                    success: true,
                    stars: stars
                })
            } else {
                res.json({
                    success: false,
                    stars: 'No se encontraron evaluaciones registradas.'
                })
            }
        }
    )
};

module.exports.listarEvaluacionUsuario = (req, res) => {
    starsPFModel.find().then(
        function (stars) {

            let listaStarsUser = [];

            for (let starsUser of stars) {
                if (starsUser.idCE == req.body.idCE) {
                    listaStarsUser.push(starsUser);
                }
            }
            console.log(listaStarsUser);
            console.log(req.body.idCE);
            if (listaStarsUser.length > 0) {
                res.json({
                    success: true,
                    stars: listaStarsUser
                });
            } else {
                res.json({
                    success: false,
                    stars: 'No se encontraron evaluaciones para este centro eduacativo.'
                });
            }
        }
    );
};