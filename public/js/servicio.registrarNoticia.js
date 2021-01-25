'use strict';

let registrarNoticia = (pstringTituloNoticia, pstringRegistrarNoticia, pstringFechaNoticia, pidCentroEducativo, puserName) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrarNoticia",
        method: "POST",
        data: {

            tituloNoticia: pstringTituloNoticia,
            registrarNoticia: pstringRegistrarNoticia,
            fechaNoticia: pstringFechaNoticia,
            idCE: pidCentroEducativo,
            userName: puserName,

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'Su noticia ha sido registrada',
            text: res.msg,
            onClose: () => {
                window.location.href = 'registrarNoticia.html';
            }
        });
    });
    request.fail(function (jqXHR, textStatus) {
    });
};

/**************************************************************************************************************/

let listarNoticias = (idCE) => {
    let listarNoticias = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listarNoticiasCE/" + idCE,
        method: "GET",
        data: {

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });
    request.done(function (msg) {
        listarNoticias = msg.notichas;
    });
    request.fail(function (jqXHR, textStatus) {
    });
    return listarNoticias;
};

/**************************************************************************************************************/

let buscarNoticia = (_id) => {
    let noticia = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscarNoticia/" + _id,
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false,
    });
    request.done(function (res) {
        noticia = res.noticia;
    });
    request.fail(function (jqXHR, textStatus) {
    });
    return noticia;
};

/**************************************************************************************************************/

let editarNoticia = (pstringTituloNoticia, pstringRegistrarNoticia, pstringFechaNoticia, pidCentroEducativo, p_id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/editarNoticia',
        method: "POST",
        data: {

            tituloNoticia: pstringTituloNoticia,
            registrarNoticia: pstringRegistrarNoticia,
            fechaNoticia: pstringFechaNoticia,
            idCE: pidCentroEducativo,
            id: p_id

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'Su noticia ha sido actualizada',
            text: res.msg,
            onClose: () => {
                window.location.href = 'mostrarNoticias.html';
            }
        });
    });
    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Su noticia no ha sido actualizada',
            text: res.msg
        });
    });
};

/**************************************************************************************************************/

let eliminarNoticia = (p_id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/eliminarNoticia',
        method: "POST",
        data: {

            id: p_id

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'Su noticia ha sido eliminada',
            text: res.msg,
            onClose: () => {
                window.location.href = 'mostrarNoticias.html';
            }
        });
    });
    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Su noticia no ha sido eliminada',
            text: res.msg
        });
    });
};