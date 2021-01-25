'use strict';

let mongoose = require('mongoose');

let visitasSchema = new mongoose.Schema(
    {
        fechas: {type: [Date], required: true, unique: false},
        idCE: {type: String, required: true, unique: true}
    }
);

module.exports = mongoose.model('Visitas', visitasSchema);