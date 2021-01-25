'use strict';

let mongoose = require('mongoose');

let stars = new mongoose.Schema(
    {
        photoCE: {type: String, required: false},
        nameCE: {type: String, required: true},
        provinciaCE: {type: String, required: false},
        stars: {type: Number, required: true, unique: false},
        starsProm: {type: Number, required: true, unique: false},
        type: {type: String, required: true},
        idCE: {type: String, required: true, unique: true}
    }
);

module.exports = mongoose.model('StarsPF', stars);