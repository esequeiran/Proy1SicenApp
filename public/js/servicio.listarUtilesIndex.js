'use strict';


let listarUtilesNivel = (pnivel, pidCE) =>{

    let listaUtiles= [];
    let request = $.ajax({

        url: "http://localhost:4000/api/listarUtilNivel",
        method: "POST",

        data: {
            nivel : pnivel,
            idCE: pidCE
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async : false

    });

    request.done(function( res ) {

        listaUtiles = res.utiles;




    });

    request.fail(function( jqXHR, textStatus ) {

    });
    return listaUtiles;
};







