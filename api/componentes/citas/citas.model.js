'use strict';

const mongoose = require('mongoose');

let schemaCitas = new mongoose.Schema(
    {
        fechaHora: {type: Date, required : true, unique: false},
        nombreCentroEducativo: {type: String, required: true, unique: false},
        nombrePadreFamilia: {type: String, required: true, unique: false},
        correoPadreFamilia: {type: String, required: true, unique: false}
    }
);

module.exports = mongoose.model('citas', schemaCitas);