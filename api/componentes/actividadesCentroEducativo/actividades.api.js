'use strict'

const modeloActividad = require('./actividades.model');
const modeloBitacora = require('../bitacora/bitacora.model');

module.exports.registrar = (req, res) =>{
    
    let nuevaActividad = new modeloActividad({

        actividad : req.body.actividad,
        descripcion : req.body.descripcion,
        fecha : req.body.fecha,
        imagen : req.body.imagen,
        idCE : req.body.idCE

    });
    

    nuevaActividad.save(function (error){
        if(error){
            res.json({
                success: false,
                msg: `No se pudo registrar la actividad, ocurrió el siguiente error ${error}`
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
                tipoDeMovimiento: "Registro de actividad",
                fecha: diaActual,
            })
            nuevaBitacora.save();


            res.json({

                success: true,
                msg: `La actividad se ha registrado correctamente`
            });
        }
    });
}

module.exports.listarActividades = (req, res)=>{
    
    modeloActividad.find({idCE: req.body.idCE}).then(
        function(actividades){
            if(actividades.length >0){
                res.json(
                    {
                        success: true,
                        actividades: actividades
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        actividades: 'No se encontraron actividades registradas'
                    }
                )
            }
        }
    )
}; 


module.exports.buscarActividad = function (req, res){
    modeloActividad.find({_id : req.body._id}).then(
        function(actividad){
            if(actividad){
                res.json({success: true, actividad : actividad});
            }else{
                res.json({success: false, actividad : actividad});
            }
        }

    );

};


module.exports.actualizar = function(req, res){
   
    modeloActividad.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar la actividad'});
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
                    tipoDeMovimiento: "Actualización de actividad",
                    fecha: diaActual,
                })
                nuevaBitacora.save();


                res.json({success: true , msg : 'La actividad se actualizó con éxito'});
            }
        }
    
    );
}

module.exports.eliminar = function(req, res){
    modeloActividad.findByIdAndDelete(req.body.id,
        function(error){
            if(error){
                res.json({success : false , msg : 'No se pudo eliminar la actividad'});
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
                    tipoDeMovimiento: "Eliminación de actividad",
                    fecha: diaActual,
                })
                nuevaBitacora.save();


                res.json({success: true , msg : 'La actividad se eliminó con éxito'});
            }
        })
}

