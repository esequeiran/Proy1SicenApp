'use strict';

let listarUsuariosPFencabezado = (pPF) => {
    let listaPF = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listaPFunico/"+ pPF,
        method: "GET",
        data: {
            
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listaPF = res.usuario;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaPF;  
};