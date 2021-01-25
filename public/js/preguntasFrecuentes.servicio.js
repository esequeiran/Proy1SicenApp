'use strict';

let validarPregunta = (pregunta) =>{
    let lista = [];
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/validarNuevaPregunta/" + pregunta,
            method: "GET",
            data: {},
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json",
            async: false
        }
    );

    request.done(function (res) {
        lista = res.success;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista;
};

let getPreguntasFrecuentes = (idCE) =>{
    let lista = [];
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/centroEducativo/listarPreguntasFrecuentes/" + idCE,
            method: "GET",
            data: {},
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json",
            async: false
        }
    );

    request.done(function (res) {
        lista = res.preguntasFrecuentes;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista;
};



let registrarPreguntaFrecuente = (idCE, ppregunta, prespuesta, presponsable) =>{
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/registrarPreguntaFrecuente",
            method: "POST",
            data: {
                idCE: idCE,
                pregunta: ppregunta,
                respuesta: prespuesta,
                responsable: presponsable
            },
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json"
        }
    );

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'Se registró correctamente la pregunta frecuente',
                text: `La pregunta con su respuesta se ha añadido a su perfil.`,
                showConfirmButton: false,
                timer: 1500
            }
        );
    });

    request.fail(function (jqXHR, textStatus) {

    });
};

let getPregunta = (id) =>{
    let etiqueta = {};
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/obtenerCriterioBusqueda/" + id,
            method: "GET",
            data: {},
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json",
            async: false
        }
    );

    request.done(function (res) {
        etiqueta = Object.assign({}, res.etiqueta);
    });

    request.fail(function (jqXHR, textStatus) {
        console.log('Ocurrió un error');
    });

    return etiqueta;
};


let modificarPregunta = (ppregunta, prespuesta,pidCE, pid, presponsable) =>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/modificarPregunta',
        method : "POST",
        data : {
            id : pid,
            pregunta: ppregunta,
            respuesta: prespuesta,
            idCE: pidCE,
            responsable: presponsable
        },
        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function(res){


        swal.fire({
            type : 'success',
            title : 'Pregunta frecuente actualizada',
            text : res.msg,
            onClose: () => {
                location.reload();
            }
        });

    });

    request.fail(function(res){
        swal.fire({
            type : 'error',
            title : 'No se pudo modificar la pregunta frecuente',
            text : res.msg
        });

    });

};

let deletePregunta = (pid, presponsable) =>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/eliminarPregunta',
        method : "POST",
        data : {
            id : pid,
            responsable: presponsable
        },
        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function(res){


        swal.fire({
            type : 'success',
            title : 'Pregunta frecuente eliminada',
            text : res.msg,
            onClose: () => {
                location.reload();
            }
        });

    });

    request.fail(function(res){
        swal.fire({
            type : 'error',
            title : 'No se pudo eliminar la pregunta frecuente',
            text : res.msg
        });

    });

};
