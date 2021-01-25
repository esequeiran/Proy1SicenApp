'use strict';

const modeloBitacora = require('./bitacora.model');



module.exports.registrarBitacora = (req, res) => {


    let nuevaBitacora = new modeloBitacora(

        {

            usuario: {},
            tipoDeMovimiento: {},
            fecha: {}
        }

    );

    nuevaBitacora.save(function (error){
        if (error) {
            res.json({

                success: false,
                msj: 'movimiento no se pudo registrar en bitacora' + erro,
            })
        } else {

            res.json(
                {

                    success: true,
                    msj: 'Se registro el movimiento en la bitacora'

                }
            )
        }
    })
}

module.exports.listarBitacora = (req, res) => {
    modeloBitacora.find().sort({fecha: 'desc'}).then(
        function(bitacora) {
            if (bitacora.length > 0) {
                res.json({
                    success: true,
                    bitacora: bitacora
                   
                })
            } else {
                res.json({
                    success: false,
                    bitacora: 'No se encontraron movimientos.'
                })
            }
        }
    )
}





     