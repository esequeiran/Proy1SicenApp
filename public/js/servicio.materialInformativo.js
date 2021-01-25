'use strict';

let registrarMaterialInformativo = (pnombre, ptema, pdescripcion, pfile, pIdCentro) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarMaterialInformativo",
        method: "POST",
        data: {
            nombre: pnombre,
            tema: ptema,
            descripcion: pdescripcion,
            file: pfile,
            idCE: pIdCentro
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'El tema se ha registrado correctamente.',
            text: `Se registró correctamente.`,
            onClose: () => {
                window.location.href = 'mostrarMaterialInformativo.html';
              }   
        });
    });

    request.fail(function (jqXHR, textStatus) {

    });
};

let buscarMaterial = (_id) => {
    let material = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscarMaterial/" + _id,
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        material = res.material;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return material;

};

let listarMaterialUsuario = (idCE) => {
    let listaMaterialUser = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/centroEducativo/listarMaterialUsuario/" + idCE,
        method: "GET",
        data: {},
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listaMaterialUser = res.material;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaMaterialUser;
};

let listarMaterial = () => {
    let listaMaterial = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listarMaterialInformativo",
        method: "GET",
        data: {},
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listaMaterial = res.material;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaMaterial;
};

let editarMaterial = (ptema, pdescripcion, pfile, pIdCentro, p_id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/editarMaterial',
        method: "POST",
        data: {
            tema: ptema,
            descripcion: pdescripcion,
            file: pfile,
            idCE: pIdCentro,
            id: p_id
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'Material informativo actualizado con éxito',
            text: res.msg,
            onClose: () => {
                window.location.href = 'mostrarMaterialInformativo.html';
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

let eliminarMaterial = (p_id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/eliminarMaterial',
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
            title: 'Material eliminado con éxito',
            text: res.msg,
            onClose: () => {
                window.location.href = 'mostrarMaterialInformativo.html';
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