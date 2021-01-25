'use strict';

const CEperfilModel = require('../usuarios/usuarios.model');

module.exports.buscarCE = function (req, res) {
    CEperfilModel.find({ _id: req.body._id }).then(
        function (usuario) {
            if (usuario) {
                res.json({ success: true, usuario: usuario });
            } else {
                res.json({ success: false, usuario: usuario });
            }
        }

    );

};

module.exports.buscarPF = function (req, res) {
    CEperfilModel.find({ _id: req.body._id }).then(
        function (usuario) {
            if (usuario) {
                res.json({ success: true, usuario: usuario });
            } else {
                res.json({ success: false, usuario: usuario });
            }
        }

    );

};

