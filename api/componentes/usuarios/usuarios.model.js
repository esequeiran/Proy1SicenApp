'use strict';

let mongoose = require('mongoose');

let usuarioSchema = new mongoose.Schema(


    {


        //SA

        userType: { puesto: String, required: false },
//PF

        userType: { type: String, required: false },
        nombre: { type: String, required: false },
        segundoNombre: { type: String, required: false },
        apellido: { type: String, required: false },
        segundoApellido: { type: String, required: false },
        identificacion: { type: String, required: false },
        nacionalidad: { type: String, required: false },
        email: { type: String, required: false, unique: true },
        telefono: { type: String, required: false },
        provincia: { type: String, required: false },
        canton: { type: String, required: false },
        distrito: { type: String, required: false },
        contrasenna : { type : String, required : false},
        edades : {type: String, required: false},
        imagenPF: {type: String, required: false},
        estado: {type: String, required: false},
        favoritos: [{ type:mongoose.Schema.ObjectId, ref:"Usuarios" }],
       
//CE

        centroEducativo: { type: String, required: false },
        cedulaJuridica: { type: String, required: false },
        nombreComercial: { type: String, required: false },
        anno: { type: String, required: false },
        genero: { type: String, required: false },
        religion: { type: String, required: false },
        telCE: { type: String, required: false },
        web: { type: String, required: false },

        facebook:{ type: String, required: false },
        twitter:{ type: String, required: false },
        instagram:{ type: String, required: false },

        fax: { type: String, required: false },
        histroia: { type: String, required: false },
        nombreCEP: { type: String, required: false },

        segundoNombreCEP:{ type: String, required: false },
        apellidoCEP:{ type: String, required: false },
        segundoApellidoCEP:{ type: String, required: false },

        departamento: { type: String, required: false },
        telCEP: { type: String, required: false },
        extension: { type: String, required: false },
        numIDCEP: { type: String, required: false },
        emailCEP: { type: String, required: false },
        lat : { type: String, required: false },
        lng : { type: String, required: false },
        privacidad: {type : String, required : false},
        clasificacion : {type : String, required : false},
        tipo : {type : String, required : false},
        grados : {type : String, required : false},
        imagen : {type : String, required : false},
        imagenCEP: {type : String, required : false},
        direccionExacta : {type : String, required : false},
        idiomas : {type : String, required : false},
        servicios : {type : String, required : false},
        descipcionesServicio : {type : String, required : false},
        documentCE : {type : String, required : false},
        responsable: {type : String, required : false},

        


    }
);


module.exports = mongoose.model('Usuarios', usuarioSchema);