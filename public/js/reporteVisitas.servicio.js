'use strict';

let registrarVisita = (fechas, idCE) => {
    let listaCE = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarVisita",
        method: "POST",
        data: {
            fechas: `${fechas}`,
            idCE: idCE
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        // async: false
    });

    request.done(function (res) {
        listaCE = res.usuario;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaCE;
};


let modificarFechaVisita = (pvisita) => {
    console.log("Fechas recibidas: " + pvisita.fechas);

    let request = $.ajax({
        url: "http://localhost:4000/api/modificarFecha",
        method: "POST",
        data: {
            id: pvisita._id,
            fechas: `${pvisita.fechas}`,
            idCE: pvisita.idCE
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        // async: false
    });

    request.done(function (res) {

    });

    request.fail(function (jqXHR, textStatus) {

    });
};

let obtenerVisita = (idCE) => {
    let objetoVisita;
    let request = $.ajax({
        url: "http://localhost:4000/api/obtenerVisita/" + idCE,
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        objetoVisita = res.visita;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return objetoVisita;
};

let listarVisitasUser = (idCE) => {
    let listaVisitasUser = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/centroEducativo/listarVisitasUser/" + idCE,
        method: "GET",
        data: {},
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listaVisitasUser = res.visita;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaVisitasUser;
};