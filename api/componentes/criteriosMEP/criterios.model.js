'use strict';

const mongoose = require("mongoose");

let schemaCriterios = new mongoose.Schema(
    {
        criterio : {type: Number, required: true, unique: true},
        descripcion: {type: String, required: true},
        puntaje: {type: Number, required: true}
    }
);

module.exports = mongoose.model('Criterios', schemaCriterios);

