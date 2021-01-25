'use strict';

let getCitasPF = (correo) =>{
    let lista = [];
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/padreFamilia/listarCitas/" + correo ,
            type: "GET",
            data: {},
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json",
            async: false
        }
    );

    request.done(function (res) {
        lista = res.citas;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista;
};

let getCitasCE = (nombreCE) =>{
    let lista = [];
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/centroEducativo/listarCitas/" + nombreCE ,
            method: "GET",
            data: {},
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json",
            async: false
        }
    );

    request.done(function (res) {
        lista = res.citas;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista;
};

let registrarCita = (pfechaHora, pnombreCE, pnombrePF, pcorreoPF) =>{
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/registrarCita",
            method: "POST",
            data: {
                fechaHora: pfechaHora,
                nombreCentroEducativo: pnombreCE,
                nombrePadreFamilia: pnombrePF,
                correoPadreFamilia: pcorreoPF
            },
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json"
        }
    );

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'Se agendó la cita con éxito',
                text: `Revise su correo.`,
                showConfirmButton: false,
                timer: 1500
            }
        );
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire(
            {
                type: 'error',
                title: 'No se pudo agendar la cita',
                text: ``,
                showConfirmButton: false,
                timer: 1500
            }
        );
    });
};

let eliminarCita = (pid) =>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/padreFamilia/cancelarCita',
        method : "POST",
        data : {
            id : pid
        },
        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function(res){


        swal.fire({
            type : 'success',
            title : 'Cita cancelada',
            text : res.msg,
            onClose: () => {
                location.reload();
            }
        });

    });

    request.fail(function(res){
        swal.fire({
            type : 'error',
            title : 'No se pudo cancelar la cita',
            text : res.msg
        });

    });
};