'use strict';

const modeloMatriculas = require('./matriculaCostos.model');
const modeloBitacora = require('../bitacora/bitacora.model');

module.exports.registrar = (req, res) => {
    let nuevaMatricula = new modeloMatriculas(
        {
            matricula: req.body.matricula,
            mensualidad: req.body.mensualidad,
            moneda: req.body.moneda,
            idCE: req.body.idCE,
            userName: req.body.userName,
        }
    );


    nuevaMatricula.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `Su matrícula no pudo ser registrada, ocurrió el sigiente error ${error}`
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
                tipoDeMovimiento: "Registro de matrícula",
                fecha: diaActual,
            })
            nuevaBitacora.save();
            res.json(
                {
                    success: true,
                    msg: `Su matrícula ha sido registrada`
                }
            );
        }

    });

};

/**************************************************************************************************************/

module.exports.validarCostosMatricula = () => {
    modeloMatriculas.findOne({ idCE: req.body.idCE }).then(
        usuario => {
            if (usuario) {
                respuesta.json(
                    {
                        tieneInfo: true,
                        info: usuario
                    }
                );
            } else {
                res.json(
                    {
                        tieneInfo: false
                    }
                );
            }
        }
    );
};

/**************************************************************************************************************/

module.exports.listar = (req, res) => {

    modeloMatriculas.find().then(
        function (registrarMatricula) {

            if (registrarMatricula.length > 0) {
                res.json(
                    {
                        success: true,
                        matriculas: registrarMatricula,
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        matriculas: "No se encontraron matrículas",
                    }
                )
            }
        }
    )

};

/**************************************************************************************************************/

module.exports.buscarMatricula = function (req, res) {
    modeloMatriculas.find({ _id: req.body._id }).then(
        function (matricula) {
            if (matricula) {
                res.json({ success: true, matricula: matricula });
            } else {
                res.json({ success: false, matricula: matricula });
            }
        }

    );

};

/**************************************************************************************************************/

module.exports.listarMatriculasCE = (req, res) => {
    modeloMatriculas.find().then(
        matriculasListadasCE => {
            let arregloMatriculas = [];

            for (let matriculitas of matriculasListadasCE) {
                if (matriculitas.idCE == req.body.idCE) {
                    arregloMatriculas.push(matriculitas);
                }
            }

            console.log(arregloMatriculas);
            console.log(req.body.idCE);

            if (arregloMatriculas.length > 0) {
                res.json(
                    {
                        success: true,
                        matriculas: arregloMatriculas,

                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        matriculas: "No se encontraron matrículas",
                    }
                )
            }
        }
    )
};

/**************************************************************************************************************/

module.exports.editar = function (req, res) {

    modeloMatriculas.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'Su matrícula no ha sido eliminada' });
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
                    tipoDeMovimiento: "Editación de matrícula",
                    fecha: diaActual,
                })
                nuevaBitacora.save();
                res.json({ success: true, msg: 'Su matrícula ha sido eliminada' });
            }
        }

    );

}

/**************************************************************************************************************/

module.exports.eliminar = function (req, res) {
    modeloMatriculas.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'Su matrícula no ha sido eliminada' });
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
                    tipoDeMovimiento: "Eliminación de matrícula",
                    fecha: diaActual,
                })
                nuevaBitacora.save();
                res.json({ success: true, msg: 'Su matrícula ha sido eliminada' });
            }
        })
}