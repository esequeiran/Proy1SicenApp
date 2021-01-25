'use strict';

const modeloPreguntasFrecuentes = require('./preguntasFrecuentes.model');
const modeloBitacora = require('../bitacora/bitacora.model');


module.exports.validarNuevaPregunta = (req, res) =>{

    modeloPreguntasFrecuentes.find().sort({pregunta: 'asc'}).then(
        function (preguntasFrecuentes) {
            if (preguntasFrecuentes.length > 0){
                let existe = false;

                for (let preguntaFrecuente of preguntasFrecuentes){
                    if (preguntaFrecuente.pregunta.toLowerCase() == req.body.pregunta.toLowerCase()){
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
                            msg: 'Ya existe la pregunta'
                        }
                    );
                } else {
                    res.json(
                        {
                            success: false,
                            msg: 'No existe la pregunta'
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

module.exports.registrarPreguntaFrecuente = (req, res) =>{
    let nuevaPreguntaFrecuente = new modeloPreguntasFrecuentes(
        {
            idCE: req.body.idCE,
            pregunta: req.body.pregunta,
            respuesta: req.body.respuesta
        }
    );

    nuevaPreguntaFrecuente.save(function (error) {
        if (error){
            res.json(
                {
                    success: false,
                    msg: `No se registró la pregunta frecuente. Ocurrió el siguiente error: ${error}`
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
                tipoDeMovimiento: "Registro de pregunta frecuente",
                fecha: diaActual,
            });
            nuevaBitacora.save();
            /**************************/

            res.json(
                {
                    success: true,
                    msg: `Se registró la pregunta frecuente exitosamente`
                }
            );
        }
    });
};

module.exports.listarPreguntasFrecuentes = (req, res) =>{
    modeloPreguntasFrecuentes.find().sort({pregunta: 'asc'}).then(
        preguntasFrecuentes =>{

            let preguntasFrecuentesCE = [];

            for (let pregFrec of preguntasFrecuentes){
                if (pregFrec.idCE === req.body.idCE){
                    preguntasFrecuentesCE.push(pregFrec);
                }
            }

            // console.log("Id del centro recibido: " + req.body.idCE);
            // console.log(preguntasFrecuentesCE);

            if (preguntasFrecuentesCE.length > 0 && req.body.idCE !== undefined){

                res.json(
                    {
                        success: true,
                        preguntasFrecuentes: preguntasFrecuentesCE
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        preguntasFrecuentes: 'No se encontraron preguntas frecuentes'
                    }
                );
            }
        }
    );
};

module.exports.getPregunta = (req, res) =>{
    console.log(req.body.id);
    modeloPreguntasFrecuentes.findOne({_id: req.body.id}).then(
        pregunta =>{
            if (pregunta){
                res.json(
                    {
                        success: true,
                        pregunta: pregunta
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        pregunta: 'No se encontró la pregunta'
                    }
                );
            }
        }
    );
};

module.exports.actualizar = (req, res) =>{
    modeloPreguntasFrecuentes.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar la pregunta'});
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
                    tipoDeMovimiento: "Modificación de pregunta frecuente",
                    fecha: diaActual,
                });
                nuevaBitacora.save();
                /**************************/

                res.json({success: true , msg : 'La pregunta se actualizó con éxito'});
            }
        }

    );
};

module.exports.eliminar = (req, res) =>{
    modeloPreguntasFrecuentes.findByIdAndDelete(req.body.id,
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo eliminar la pregunta'});
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
                    tipoDeMovimiento: "Eliminación de pregunta frecuente",
                    fecha: diaActual,
                });
                nuevaBitacora.save();
                /**************************/

                res.json({success: true , msg : 'La pregunta se eliminó con éxito'});
            }
        }
    );
};
