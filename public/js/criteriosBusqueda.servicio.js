'use strict';

let validarEtiqueta = (nombre) =>{
    let lista = [];
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/validarEtiqueta/" + nombre,
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

let getCriteriosBusqueda = () =>{
    let lista = [];
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/listarCriteriosBusqueda",
            method: "GET",
            data: {},
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json",
            async: false
        }
    );

    request.done(function (res) {
        lista = res.criteriosBusqueda;
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire(
            {
                type: 'warning',
                title: 'Error',
                text: `No se encontraron las etiquetas`,
                showConfirmButton: true,
                timer: 1500
            }
        );
    });

    return lista;
};


let getCriterioBusqueda = (id) =>{
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

let modificarEtiqueta = (pnombre, pid, presponsable) =>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/administrador/modificarEtiqueta',
        method : "POST",
        data : {
            nombre : pnombre,
            id : pid,
            responsable: presponsable
        },
        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function(res){


        swal.fire({
            type : 'success',
            title : 'Etiqueta de búsqueda actualizada',
            text : res.msg,
            onClose: () => {
                location.reload();
            }
        });

    });

    request.fail(function(res){
        swal.fire({
            type : 'error',
            title : 'No se pudo modificar la etiqueta',
            text : res.msg
        });

    });

};


let deleteEtiqueta = (pid, presponsable) =>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/administrador/eliminarEtiqueta',
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
            title : 'Etiqueta de búsqueda eliminada',
            text : res.msg,
            onClose: () => {
                location.reload();
            }
        });

    });

    request.fail(function(res){
        swal.fire({
            type : 'error',
            title : 'No se pudo eliminar la etiqueta',
            text : res.msg
        });

    });

};

let registrarCriterioBusqueda = (pnombre, presponsable) =>{
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/administrador/registrarCriterioBusqueda",
            method: "POST",
            data: {
                nombre : pnombre,
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
                title: 'Se registró correctamente el criterio de búsqueda',
                text: `El criterio de búsqueda se ha añadido a las opciones de etiquetas de búsqueda.`,
                showConfirmButton: false,
                timer: 1500
            }
        );
    });

    request.fail(function (jqXHR, textStatus) {

    });
};

let marcarCriterioBusqueda = (pnombre, pidCE, presponsable) =>{
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/centroEducativo/marcarCriterioBusqueda",
            method: "POST",
            data: {
                nombre : pnombre,
                idCE: pidCE,
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
                title: 'Se registró correctamente el criterio de búsqueda',
                text: `El criterio de búsqueda se ha añadido a las opciones de etiquetas de búsqueda.`,
                showConfirmButton: false,
                timer: 1500
            }
        );
    });

    request.fail(function (jqXHR, textStatus) {

    });
};


let desmarcarEtiqueta = (id, presponsable) =>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/centroEducativo/desmarcarEtiqueta',
        method : "POST",
        data : {
            id : id,
            responsable: presponsable
        },
        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function(res){


        swal.fire({
            type : 'success',
            title : 'Etiqueta de búsqueda eliminada',
            text : res.msg,
            onClose: () => {
                location.reload();
            }
        });

    });

    request.fail(function(res){
        swal.fire({
            type : 'error',
            title : 'No se pudo desmarcar la etiqueta',
            text : res.msg
        });

    });

};

let getCriteriosBusquedaMarcados = (idCE) =>{
    let lista = [];
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/centroEducativo/listarCriteriosBusqueda/" + idCE,
            method: "GET",
            data: {},
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json",
            async: false
        }
    );

    request.done(function (res) {
        lista = res.etiquetasCE;
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire(
            {
                type: 'error',
                title: 'Error',
                text: `No se pudieron obtener los criterios de búsqueda de este centro educativo`,
                showConfirmButton: true,
                timer: 1500
            }
        );
    });

    return lista;
};

let getCriterioBusquedaCE = (idCE, nombre) =>{
    let etiqueta = '';
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/obtenerCriterioBusqueda/" + idCE + "&nombre/" +nombre,
            method: "GET",
            data: {},
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json",
            async: false
        }
    );

    request.done(function (res) {
        etiqueta = Object.assign({}, res.etiquetasCE);
    });

    request.fail(function (jqXHR, textStatus) {
        console.log('Ocurrió un error');
    });

    return etiqueta;
};