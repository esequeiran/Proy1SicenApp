'use strict';

let IdCentro = IdGeneralCE;

let registrarComentario = (puserPhoto, puserName, pstars, pcomment, pIdCentro) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarComentario",
        method: "POST",
        data: {
            userPhoto: puserPhoto,
            userName: puserName,
            stars: pstars,
            comment: pcomment,
            idCE: pIdCentro
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'El comentario se ha registrado correctamente.',
            text: `Se registró correctamente.`,
            onClose: () => {
                window.location.reload();
            }
        });
    });

    request.fail(function (jqXHR, textStatus) {

    });
};

let listaComentariosUser = (idCE) => {
    let listaComentarios = [];
    console.log(listaComentarios);
    let request = $.ajax({
        url: "http://localhost:4000/api/listarComentarioUsuario/" + idCE,
        method: "GET",
        data: {},
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listaComentarios = res.comentario;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaComentarios;
};

let eliminarComentario = (p_id, pnombre) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/eliminarComentario',
        method: "POST",
        data: {
            nombre: pnombre,
            id: p_id
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'Comentario eliminado con éxito',
            text: res.msg,
            onClose: () => {
                window.location.reload();
            }
        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Proceso no realizado',
            text: res.msg
        });

    });

};