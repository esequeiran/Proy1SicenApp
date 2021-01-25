'use strict';

let mongoose = require('mongoose');

let bitacoraSchema = new mongoose.Schema({

    usuario:{type: String, required: false},
    tipoDeMovimiento:{type: String, required: false},
    fecha:{type: String, required: false}
    // fecha:{type : Date, default: Date.now, required: false}


})


module.exports = mongoose.model('Bitacoras', bitacoraSchema);


 
