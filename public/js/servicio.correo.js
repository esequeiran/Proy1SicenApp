'use strict';

let enviarCorreo = (correo) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/enviarCorreo",
        method: "POST",
        data: {
            correo: correo
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        // async: false
    });

    request.done(function (res) {
        swal.fire({
            type: 'success',
            title: 'El correo se ha enviado correctamente.',
        });
    });

    request.fail(function (jqXHR, textStatus) {

    });
};

