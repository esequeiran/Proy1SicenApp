'use strict';

const mongoose = require("mongoose");

let schemaRangos = new mongoose.Schema({
    rango : {type : Number, required: true, unique: true},
    valorMinimo : {type: Number, required: true, unique: true},
    valorMaximo : {type: Number, required: true, unique: true},
    estrellas : {type: String, required: true, unique: true}
   
});

module.exports = mongoose.model('Rangos', schemaRangos);