'use strict';

const mongoose = require('mongoose');

let schemaRegistrarMatriculaCostos = new mongoose.Schema({
    matricula: { type: Number, required: true },
    mensualidad: { type: Number, required: true },
    moneda: { type: String, required: true },
    idCE: { type: String, required: true, unique: true},
});

module.exports = mongoose.model('matriculasCostos', schemaRegistrarMatriculaCostos);
