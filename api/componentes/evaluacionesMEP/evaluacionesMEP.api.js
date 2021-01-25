'use strict';

const modeloCE = require('../usuarios/usuarios.model');
const modeloEvaluacionesCE = require('./evaluacionesMEP.model');
const modeloBitacora = require('../bitacora/bitacora.model');

 
 module.exports.registrarEvaluacionMEP = (req, res) =>{
    let nuevaEvaluacion = new modeloEvaluacionesCE({

        nombre : req.body.nombre,
        total : req.body.total,
        estrellas : req.body.estrellas,
        anno : req.body.anno,
        idCE: req.body.idCE,
        tipo: req.body.tipo,
        imagen: req.body.imagen,
        posicion: req.body.posicion
        
    });
        nuevaEvaluacion.save(function (error){
            if (error) {
                res.json({
                    success: false,
                    msg: `No se pudo registrar la evaluación, ocurrió el siguiente error ${error}`
                });
            }else{


                var diaActual = new Date();
                var dd = diaActual.getDate();
                var mm = diaActual.getMonth();
                var yyyy = diaActual.getFullYear();
                var hora = diaActual.getHours();
                var minutos = diaActual.getMinutes();
                var segundos = diaActual.getSeconds();
                diaActual = `${yyyy}/${mm}/${dd} - ${hora}:${minutos}:${segundos}`;
    
                let nuevaBitacora = new modeloBitacora({
                    usuario: req.body.nombreUsuario,
                    tipoDeMovimiento: "Registro de evaluación de un centro educativo",
                    fecha: diaActual,
                })
                nuevaBitacora.save();




                res.json({
                    success: true,
                    msg: `La evaluación se ha registrado correctamente`
                });
            }

        });
  
}



module.exports.listarCEEvaluados = (req, res)=>{        
    modeloEvaluacionesCE.find({anno: req.body.anno, idCE: req.body.idCE}).then(
        function(centrosEducativosEvaluados){
            if(centrosEducativosEvaluados.length >0){
                res.json(
                    {
                        success: true,
                        centrosEducativosEvaluados: centrosEducativosEvaluados
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        centrosEducativosEvaluados: 'No se encontraron centros educativos registrados'
                    }
                )
            }
        }
    )
}; 




module.exports.listarCE = (req, res)=>{        
    modeloCE.find({userType: 'centroEducativo'}).then(
        function(centrosEducativos){
            if(centrosEducativos.length >0){
                res.json(
                    {
                        success: true,
                        centrosEducativos: centrosEducativos
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        centrosEducativos: 'No se encontraron centros educativos registrados'
                    }
                )
            }
        }
    )
}; 



module.exports.listarCEEvaluadosTop = (req, res)=>{        
    modeloEvaluacionesCE.find({anno: req.body.anno}).sort({total: -1}).then(
        function(centrosEducativosEvaluados){
            if(centrosEducativosEvaluados.length >0){
                res.json(
                    {
                        success: true,
                        centrosEducativosEvaluados: centrosEducativosEvaluados
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        centrosEducativosEvaluados: 'No se encontraron centros educativos registrados'
                    }
                )
            }
        }
    )
}; 



module.exports.listarTodosCEEvaluados = (req, res) => {
    modeloEvaluacionesCE.find().then(
        function (centrosEducativos){
            if(centrosEducativos.length > 0){
                res.json({
                    success: true,
                    centrosEducativos: centrosEducativos
                    
                })
            } else {
                res.json({
                    success: false,
                    centrosEducativos: `No se encontraron centros evaluados`
                })
            }
        }
    )
}




module.exports.listarEvaluacionCE = (req, res)=>{        
    modeloEvaluacionesCE.find({idCE: req.body.id}).sort({anno: -1}).then(
        function(centroEducativoEvaluado){
            if(centroEducativoEvaluado.length >0){
                res.json(
                    {
                        success: true,
                        centroEducativoEvaluado: centroEducativoEvaluado
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        centroEducativoEvaluado: 'No se encontraron evaluaciones para el centro educativo'
                    }
                )
            }
        }
    )
}; 




module.exports.listarEstrellasCE = (req, res)=>{        
    modeloEvaluacionesCE.find({anno: req.body.anno, idCE: req.body.idCE}).then(
        function(estrellasCE){
            if(estrellasCE.length >0){
                res.json(
                    {
                        success: true,
                        estrellasCE: estrellasCE
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        estrellasCE: 'No se encontró evaluación para el presente año'
                    }
                )
            }
        }
    )
}; 



