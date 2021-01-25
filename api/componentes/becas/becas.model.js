'use strict';

const mongoose = require('mongoose');

let schemaRegistrarBeca = new mongoose.Schema(
    {
        nombreBeca: { type: String, required: true },
        descripcionBeca: { type: String, required: true },
        idCE: { type: String, required: true },
    }

);

module.exports = mongoose.model('becas', schemaRegistrarBeca);