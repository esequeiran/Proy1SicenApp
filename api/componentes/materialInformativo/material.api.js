'use strict';

const materialModel = require('./material.model');
const modeloBitacora = require('../bitacora/bitacora.model');

module.exports.registrar = (req, res) => {
    let nuevoMaterial = new materialModel(
        {
            tema: req.body.tema,
            descripcion: req.body.descripcion,
            file: req.body.file,
            idCE: req.body.idCE
        }
    );

    nuevoMaterial.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `El material informativo no pudo ser registrado ${error}.`
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
                usuario: req.body.nombre,
                tipoDeMovimiento: "Registro de material informativo",
                fecha: diaActual,
            })
            nuevaBitacora.save();
            res.json(
                {
                    success: true,
                    msg: `El material informativo se ha registrado correctamente.`
                }
            );
        }
    });
};

module.exports.listarMaterialUsuario = (req, res) => {
    materialModel.find().then(
        function (material) {

            let listaMaterialesUser = [];

            for (let materialUser of material) {
                if (materialUser.idCE == req.body.idCE) {
                    listaMaterialesUser.push(materialUser);
                }
            }
            console.log(listaMaterialesUser);
            console.log(req.body.idCE);
            if (listaMaterialesUser.length > 0) {
                res.json({
                    success: true,
                    material: listaMaterialesUser
                });
            } else {
                res.json({
                    success: false,
                    material: 'No se encontraron materiales informativos registrados'
                });
            }
        }
    );
};

module.exports.buscarMaterial = function (req, res) {
    materialModel.find({ _id: req.body._id }).then(
        function (material) {
            if (material) {
                res.json({ success: true, material: material });
            } else {
                res.json({ success: false, material: material });
            }
        }

    );
};

module.exports.listarMaterial = (req, res) => {
    materialModel.find().then(
        function (material) {
            if (material.length > 0) {
                res.json({
                    success: true,
                    material: material
                })
            } else {
                res.json({
                    success: false,
                    material: 'No se encontraron materiales informativos registrados'
                })
            }
        }
    )
};

module.exports.listarMaterial = (req, res) => {
    materialModel.find().then(
        function (material) {
            if (material.length > 0) {
                res.json({
                    success: true,
                    material: material
                })
            } else {
                res.json({
                    success: false,
                    material: 'No se encontraron materiales informativos registrados'
                })
            }
        }
    )
};



module.exports.editar = function (req, res) {

    materialModel.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo actualizar el material informativo' });
            } else {
                res.json({ success: true, msg: 'El material informativo se actualizó con éxito' });
            }
        }

    );
}

module.exports.eliminar = function (req, res) {
    materialModel.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar el material informativo' });
            } else {
                res.json({ success: true, msg: 'El material informativo se eliminó con éxito' });
            }
        })
}