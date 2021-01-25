'use strict';

const mongoose = require("mongoose");

let schemaUtiles = new mongoose.Schema(
    {
        nombre : {type: String, required: true},
        descripcion : {type: String, required: true},
        cantidad : {type: Number, required: true},
        nivel : {type: String, required: true},
        idCE : {type: String, required: true},
        nombreLista : {type: String, required: true}
    }
);

module.exports = mongoose.model('Utiles', schemaUtiles);
