'use strict';

let listarUsuariosCE = () => {
    let listaCE = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listaCE",
        method: "GET",
        data: {
            
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listaCE = res.usuario;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaCE;
};

let listarUsuariosCEencabezado = (pCE) => {
    let listaCE = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listaCEunico/"+ pCE,
        method: "GET",
        data: {
            
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listaCE = res.usuario;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaCE;  
};