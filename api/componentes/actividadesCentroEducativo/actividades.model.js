'use strict';

const mongoose = require("mongoose");

let schemaActividades = new mongoose.Schema(
    {
        actividad : {type: String, required:true},
        descripcion: {type: String, required: true},
        fecha : {type: String, required: true},
        imagen: {type: String, required: false},
        idCE : {type: String, required: true}
    }
);

module.exports = mongoose.model('Actividades', schemaActividades);



