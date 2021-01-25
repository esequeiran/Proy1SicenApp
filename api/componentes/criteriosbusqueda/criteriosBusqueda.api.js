'use strict';

const modeloCriteriosBusqueda = require('./criteriosBusqueda.model');
const modeloCriteriosBusquedaCE = require('./criteriosBusqueda.ce.model');
const modeloBitacora = require('../bitacora/bitacora.model');


module.exports.validarEtiqueta = (req, res) =>{

    modeloCriteriosBusqueda.find().sort({pregunta: 'asc'}).then(
        function (criteriosBusqueda) {
            if (criteriosBusqueda.length > 0){
                let existe = false;

                for (let etiqueta of criteriosBusqueda){
                    if (etiqueta.nombre.toLowerCase() == req.body.nombre.toLowerCase()){
                        existe = true;
                    }
                }
                // console.log(preguntasFrecuentes);
                // console.log(req.body.pregunta);
                // console.log(existe);
                if (existe){
                    res.json(
                        {
                            success: true,
                            msg: 'Ya existe la etiqueta'
                        }
                    );
                } else {
                    res.json(
                        {
                            success: false,
                            msg: 'No existe la etiqueta'
                        }
                    );
                }
            } else {
                res.json(
                    {
                        success: false,
                        preguntasFrecuentes: 'No hay preguntas aún'
                    }
                );
            }
        }
    );
};

module.exports.registrarCriterioBusqueda = (req, res) =>{
    let nuevoCriterioBusqueda = new modeloCriteriosBusqueda(
        {
            nombre: req.body.nombre
        }
    );

    nuevoCriterioBusqueda.save(function (error) {
        if (error){
            res.json(
                {
                    success: false,
                    msg: `Falló el registro. Ocurrió el siguiente error: ${error}`
                }
            );
        } else {
            /**************************Bitacora*/
            var diaActual = new Date();
            var dd = diaActual.getDate();
            var mm = diaActual.getMonth();
            var yyyy = diaActual.getFullYear();
            var hora = diaActual.getHours();
            var minutos = diaActual.getMinutes();
            var segundos = diaActual.getSeconds();
            diaActual = `${yyyy}/${mm}/${dd} - ${hora}:${minutos}:${segundos}`;

            let nuevaBitacora = new modeloBitacora({
                usuario: req.body.responsable,
                tipoDeMovimiento: "Registro de criterio de búsqueda",
                fecha: diaActual,
            });
            nuevaBitacora.save();
            /**************************/

            res.json(
                {
                    success: true,
                    msg: `El registro del criterio de búsqueda fue exitoso`
                }
            );
        }
    });
};


module.exports.listarCriteriosBusqueda = (req, res) =>{
    modeloCriteriosBusqueda.find().sort({nombre: 'asc'}).then(
        function (criteriosBusqueda) {
            if (criteriosBusqueda.length > 0){
                res.json(
                    {
                        success: true,
                        criteriosBusqueda: criteriosBusqueda
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        msg: 'No se encontró ningún criterio de búsqueda'
                    }
                );
            }
        }
    );
};


module.exports.getEtiqueta = (req, res) =>{
    // console.log(modeloCriteriosBusqueda.find().then(eti =>{res.json({eti})}));

    modeloCriteriosBusqueda.findOne({_id: req.body.id}).then(
        function (etiqueta) {
            if (etiqueta){
                res.json(
                    {
                        success: true,
                        etiqueta: etiqueta
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        etiqueta: 'No se encontró la etiqueta'
                    }
                );
            }
        }
    );
};

module.exports.actualizar = (req, res) =>{
    modeloCriteriosBusqueda.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar la etiqueta'});
            }else{


                /**************************Bitacora*/
                var diaActual = new Date();
                var dd = diaActual.getDate();
                var mm = diaActual.getMonth();
                var yyyy = diaActual.getFullYear();
                var hora = diaActual.getHours();
                var minutos = diaActual.getMinutes();
                var segundos = diaActual.getSeconds();
                diaActual = `${yyyy}/${mm}/${dd} - ${hora}:${minutos}:${segundos}`;

                let nuevaBitacora = new modeloBitacora({
                    usuario: req.body.responsable,
                    tipoDeMovimiento: "Modificación de criterio de búsqueda",
                    fecha: diaActual,
                });
                nuevaBitacora.save();
                /**************************/

                res.json({success: true , msg : 'La etiqueta se actualizó con éxito'});
            }
        }

    );
};

module.exports.eliminar = (req, res) =>{
    modeloCriteriosBusqueda.findByIdAndDelete(req.body.id,
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo eliminar la etiqueta'});
            }else{

                /**************************Bitacora*/
                var diaActual = new Date();
                var dd = diaActual.getDate();
                var mm = diaActual.getMonth();
                var yyyy = diaActual.getFullYear();
                var hora = diaActual.getHours();
                var minutos = diaActual.getMinutes();
                var segundos = diaActual.getSeconds();
                diaActual = `${yyyy}/${mm}/${dd} - ${hora}:${minutos}:${segundos}`;

                let nuevaBitacora = new modeloBitacora({
                    usuario: req.body.responsable,
                    tipoDeMovimiento: "Eliminación de criterio de búsqueda",
                    fecha: diaActual,
                });
                nuevaBitacora.save();
                /**************************/

                res.json({success: true , msg : 'La etiqueta se eliminó con éxito'});
            }
        }
    );
};


// CE ------------------------------------------------------------------------------------------------------------------

module.exports.marcarCriterioBusquedaCE = (req, res) =>{
    let nuevoCriterioBusquedaCE = new modeloCriteriosBusquedaCE(
        {
            nombre: req.body.nombre,
            idCE: req.body.idCE
        }
    );

    nuevoCriterioBusquedaCE.save(function (error) {
        if (error){
            res.json(
                {
                    success: false,
                    msg: `Falló el registro. Ocurrió el siguiente error: ${error}`
                }
            );
        } else {
            /**************************Bitacora*/
            var diaActual = new Date();
            var dd = diaActual.getDate();
            var mm = diaActual.getMonth();
            var yyyy = diaActual.getFullYear();
            var hora = diaActual.getHours();
            var minutos = diaActual.getMinutes();
            var segundos = diaActual.getSeconds();
            diaActual = `${yyyy}/${mm}/${dd} - ${hora}:${minutos}:${segundos}`;

            let nuevaBitacora = new modeloBitacora({
                usuario: req.body.responsable,
                tipoDeMovimiento: "Registro de criterio de búsqueda de ce",
                fecha: diaActual,
            });
            nuevaBitacora.save();
            /**************************/

            res.json(
                {
                    success: true,
                    msg: `El registro del criterio de búsqueda de centro educativo fue exitoso`
                }
            );
        }
    });
};

module.exports.eliminarCriterioBusquedaCE = (req, res) =>{
    modeloCriteriosBusquedaCE.findByIdAndDelete(req.body.id,
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo eliminar la etiqueta'});
            }else{

                /**************************Bitacora*/
                var diaActual = new Date();
                var dd = diaActual.getDate();
                var mm = diaActual.getMonth();
                var yyyy = diaActual.getFullYear();
                var hora = diaActual.getHours();
                var minutos = diaActual.getMinutes();
                var segundos = diaActual.getSeconds();
                diaActual = `${yyyy}/${mm}/${dd} - ${hora}:${minutos}:${segundos}`;

                let nuevaBitacora = new modeloBitacora({
                    usuario: req.body.responsable,
                    tipoDeMovimiento: "Eliminación de criterio de búsqueda",
                    fecha: diaActual,
                });
                nuevaBitacora.save();
                /**************************/

                res.json({success: true , msg : 'La etiqueta se eliminó con éxito'});
            }
        }
    );
};

module.exports.listarCriteriosBusquedaCE = (req, res) =>{
    modeloCriteriosBusquedaCE.find().sort({nombre: 'asc'}).then(
        criteriosBusqueda => {

            // console.log(req.body.idCE);
            let etiquetasCE = [];

            for (let etiqueta of criteriosBusqueda){
                if (etiqueta.idCE === req.body.idCE){
                    etiquetasCE.push(etiqueta);
                }
            }
            if (etiquetasCE.length > 0) console.log(etiquetasCE);
            if (etiquetasCE.length > 0){
                res.json(
                    {
                        success: true,
                        etiquetasCE: etiquetasCE
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        etiquetasCE: 'No se encontró ningún criterio de búsqueda de ese centro educativo'
                    }
                );
            }
        }
    );
};

module.exports.getEtiquetaCE = (req, res) =>{
    // console.log(modeloCriteriosBusqueda.find().then(eti =>{res.json({eti})}));

    modeloCriteriosBusquedaCE.findOne({_id: req.body.id}).then(
        function (etiqueta) {
            if (etiqueta){
                res.json(
                    {
                        success: true,
                        etiqueta: Object.assign({}, etiqueta)
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        etiqueta: 'No se encontró la etiqueta'
                    }
                );
            }
        }
    );
};

