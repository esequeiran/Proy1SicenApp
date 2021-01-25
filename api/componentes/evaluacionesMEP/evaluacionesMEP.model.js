'use strict';

const mongoose = require("mongoose");

let schemaEvaluacionMEP = new mongoose.Schema(
    {
        nombre: {type: String, required: true},
        total : {type: Number, required: true},
        estrellas: {type: String, required: true},       
        anno: {type: Number, required: true},
        idCE: {type: String, required: true},
        tipo: {type: String, required: true},
        imagen: {type: String, required: true},
        posicion: {type: Number, required: false}
    }
);

module.exports = mongoose.model('EvaluacionesMEP', schemaEvaluacionMEP);

