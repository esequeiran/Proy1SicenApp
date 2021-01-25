'use strict';

let registrarBeca = (pstringNombreBeca, pstringDescripcionBeca, pidCentroEducativo, puserName) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrarBeca",
        method: "POST",
        data: {

            nombreBeca: pstringNombreBeca,
            descripcionBeca: pstringDescripcionBeca,
            idCE: pidCentroEducativo,
            userName: puserName,

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });

    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'Su beca ha sido registrada',
            text: res.msg,
            onClose: () => {
                window.location.href = 'registrarBeca.html';
            }
        });
    });

    request.fail(function (jqXHR, textStatus) {

    });

};

/**************************************************************************************************************/

let listarBecas = (idCE) => {
    let listaBecas = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listarBecasCE/" + idCE,
        method: "GET",
        data: {

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });

    request.done(function (msg) {
        listaBecas = msg.becas;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return listaBecas;
};

/**************************************************************************************************************/

let buscarBeca = (_id) => {
    let beca = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscarBeca/" + _id,
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false,
    });
    request.done(function (res) {
        beca = res.beca;

    });
    request.fail(function (jqXHR, textStatus) {
    });
    return beca;

};

/**************************************************************************************************************/

let editarBeca = (pstringNombreBeca, pstringDescripcionBeca, pidCentroEducativo, p_id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/editarBeca',
        method: "POST",
        data: {

            nombreBeca: pstringNombreBeca,
            descripcionBeca: pstringDescripcionBeca,
            idCE: pidCentroEducativo,
            id: p_id,

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'Su beca ha sido actualizada',
            text: res.msg,
            onClose: () => {
                window.location.href = 'mostrarBecas.html';
            }
        });

    });
    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Su beca no ha sido actualizada',
            text: res.msg
        });
    });
};

/**************************************************************************************************************/

let eliminarBeca = (p_id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/eliminarBeca',
        method: "POST",
        data: {

            id: p_id,

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'Su beca ha sido eliminada',
            text: res.msg,
            onClose: () => {
                window.location.href = 'mostrarBecas.html';
            }
        });
    });
    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Su beca no ha sido eliminada',
            text: res.msg
        });
    });
};