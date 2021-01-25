'use strict';

const modeloCEUbicacion = require('../usuarios/usuarios.model');



module.exports.listarCEUbicacion = (req, res)=>{
        
    modeloCEUbicacion.find({userType: 'centroEducativo', canton: req.body.canton}).then(
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

