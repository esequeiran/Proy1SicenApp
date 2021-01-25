'use strict';

const mongoose = require('mongoose');

let schemaCriteriosBusquedaCE = new mongoose.Schema(
    {
        nombre: {type: String, required: true, unique: false},
        idCE: {type: String, required: true, unique: false}
    }
);

module.exports = mongoose.model('criteriosBusquedasMarcados', schemaCriteriosBusquedaCE);