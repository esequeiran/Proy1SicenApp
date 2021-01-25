'use strict';

const mongoose = require("mongoose");

let schemaArticulos = new mongoose.Schema(
    {
        nombre : {type: String, required: true},
        descripcion : {type: String, required: true},        
        idCE : {type: String, required: true}
    }
);

module.exports = mongoose.model('Articulos', schemaArticulos);
