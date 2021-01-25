'use strict';

let mongoose = require('mongoose');

let materialInformativoSchema = new mongoose.Schema(
    {
        tema: {type: String, required: true },
        descripcion: {type: String, required: true },
        file: {type: String, required: false },
        idCE: {type: String, required: true}
    }
);

module.exports = mongoose.model('MaterialesInformativos', materialInformativoSchema);