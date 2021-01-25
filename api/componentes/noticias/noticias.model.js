'use strict';

const mongoose = require('mongoose');

let schemaRegistrarNoticia = new mongoose.Schema(
    {
        tituloNoticia: { type: String, required: true },
        fechaNoticia: { type: String, required: true },
        registrarNoticia: { type: String, required: true },
        idCE: { type: String, required: true },
    }
);

module.exports = mongoose.model('noticias', schemaRegistrarNoticia);