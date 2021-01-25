'use strict';

const mongoose = require('mongoose');

let esquemaPreguntasFrecuentes = new mongoose.Schema(
    {
        idCE: {type: String, required: true},
        pregunta: {type : String, required : true},
        respuesta:  {type : String, required : true}
    }
);

module.exports = mongoose.model('Preguntas Frecuente', esquemaPreguntasFrecuentes);