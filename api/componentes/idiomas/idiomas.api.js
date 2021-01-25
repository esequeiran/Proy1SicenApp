'use strict';

const modeloIdiomas = require('./idiomas.model');
const modeloBitacora = require('../bitacora/bitacora.model');

module.exports.registrar = (req, res) => {
    let nuevoIdioma = new modeloIdiomas(
        {
            idiomas: req.body.idiomas,
            idCE: req.body.idCE,
            userName: req.body.userName,
        }
    );

    nuevoIdioma.save(function (error) {
        if (error) {
            res.json(
                {
                    succes: false,
                    msg: `No se pudo registrar su idioma, ocurrió el siguiente error ${error}`,
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
                tipoDeMovimiento: "Registro de idioma",
                fecha: diaActual,
            })
            nuevaBitacora.save();

            res.json(
                {
                    succes: true,
                    msg: `Su idioma ha sido registrado`,
                }
            );
        }
    });
}

/**************************************************************************************************************/

module.exports.listar = (req, res) => {

    modeloIdiomas.find().then(
        function (registrarIdiomas) {

            if (registrarIdiomas.length > 0) {
                res.json(
                    {
                        success: true,
                        idiomas: registrarIdiomas,
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        idiomas: "No se encontraron idiomas",
                    }
                )
            }
        }
    )

};

/**************************************************************************************************************/

module.exports.buscarIdioma = function (req, res) {
    modeloIdiomas.find({ _id: req.body._id }).then(
        function (idioma) {
            if (idioma) {
                res.json({ success: true, idioma: idioma });
            } else {
                res.json({ success: false, idioma: idioma });
            }
        }

    );

};

/**************************************************************************************************************/

module.exports.listarIdiomasCE = (req, res) => {
    modeloIdiomas.find().then(
        idiomasListadasCE => {
            let arregloIdiomas = [];

            for (let idiomitas of idiomasListadasCE) {
                if (idiomitas.idCE == req.body.idCE) {
                    arregloIdiomas.push(idiomitas);
                }
            }
            console.log(arregloIdiomas);
            console.log(req.body.idCE);

            if (arregloIdiomas.length > 0) {
                res.json(
                    {
                        success: true,
                        idiomas: arregloIdiomas,
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        idiomas: "No se encontraron idiomas"
                    }
                )
            }
        }
    )
};

/**************************************************************************************************************/

module.exports.editar = function (req, res) {

    modeloIdiomas.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo actualizar su idioma' });
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
                    tipoDeMovimiento: "Editación de idioma",
                    fecha: diaActual,
                })
                nuevaBitacora.save();
                res.json({ success: true, msg: 'Su idioma ha sido actualizado' });
            }
        }

    );

}

/**************************************************************************************************************/

module.exports.eliminar = function (req, res) {
    modeloIdiomas.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar su idioma' });
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
                    tipoDeMovimiento: "Eliminación de idioma",
                    fecha: diaActual,
                })
                nuevaBitacora.save();
                res.json({ success: true, msg: 'Su idioma ha sido eliminado' });
            }
        })
}