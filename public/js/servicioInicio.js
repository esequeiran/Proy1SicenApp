'use strict';


let validarCredenciales = (email, contrasenna, callback) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/validarCredenciales",
        method: "POST",
        data: {

            email: email,
            contrasenna: contrasenna
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (res) {
        callback(res);
        sessionStorage.setItem('conectado', res.success);
        if (res.usuario) {
            sessionStorage.setItem('tipoDeUsuario', res.usuario.userType);
            sessionStorage.setItem('usuario', JSON.stringify(res.usuario));


            console.log(res.usuario)
        }
    });



    request.fail(function (res) {
        callback(res);
    });
}
