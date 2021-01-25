'use strict';

const mongoose = require('mongoose');

let schemaCriteriosBusqueda = new mongoose.Schema(
    {
        nombre: {type: String, required: true, unique: true}
    }
);

module.exports = mongoose.model('criteriosBusquedas', schemaCriteriosBusqueda);