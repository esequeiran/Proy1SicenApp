'use strict';
const modeloRango = require('../rangosMEP/rangos.model');
const modeloBitacora = require('../bitacora/bitacora.model');


module.exports.registrarElRango = (req, res) =>{
    let nuevoRango = new modeloRango({

        rango : req.body.rango,
        valorMinimo : req.body.valorMinimo,
        valorMaximo : req.body.valorMaximo,
        estrellas : req.body.estrellas
        
    });

    nuevoRango.save(function(error){
        if(error){
            res.json({
                success: false,
                msg: `No se pudo registrar el rango, ocurrió el siguiente error ${error}`
            }
            );
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
                tipoDeMovimiento: "Registro de rango",
                fecha: diaActual,
            })
            nuevaBitacora.save();


            res.json({
                success : true,
                msg : `El rango se ha registrado correctamente`
            });
        }

    });
}


module.exports.listarLosRangos = (req, res)=>{
    
    modeloRango.find().sort({rango: 'asc'}).then(
        function(rangos){
            if(rangos.length >0){
                res.json(
                    {
                        success: true,
                        rangos: rangos
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        rangos: 'No se encontraron rangos registrados'
                    }
                )
            }
        }
    )
}; 


module.exports.buscarRango = function (req, res){
    modeloRango.find({_id : req.body._id}).then(
        function(rango){
            if(rango){
                res.json({success: true, rango : rango});
            }else{
                res.json({success: false, rango : rango});
            }
        }

    );

};


module.exports.actualizar = function(req, res){
   
    modeloRango.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar el rango'});
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
                    tipoDeMovimiento: "Actualización de rango",
                    fecha: diaActual,
                })
                nuevaBitacora.save();



                res.json({success: true , msg : 'El rango se actualizó con éxito'});
            }
        }
    
    );
}

module.exports.eliminar = function(req, res){
    modeloRango.findByIdAndDelete(req.body.id,
        function(error){
            if(error){
                res.json({success : false , msg : 'No se pudo eliminar el rango'});
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
                    tipoDeMovimiento: "Eliminación de rango",
                    fecha: diaActual,
                })
                nuevaBitacora.save();


                res.json({success: true , msg : 'El rango se eliminó con éxito'});
            }
        })
}

