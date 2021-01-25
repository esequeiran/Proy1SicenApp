'use strict';

let registrarPadreFamilia = (userType, nombre, segundoNombre, apellido, segundoApellido, identificacion, nacionalidad, email, telefono, provincia, canton, distrito, contrasenna, edades, imagenPF, estado) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_usuario",
        method: "POST",
        data: {
            userType: userType,
            nombre: nombre,
            segundoNombre: segundoNombre,
            apellido: apellido,
            segundoApellido: segundoApellido,
            identificacion: identificacion,
            nacionalidad: nacionalidad,
            email: email,
            telefono: telefono,
            provincia: provincia,
            canton: canton,
            distrito: distrito,
            contrasenna: contrasenna,
            edades: edades,
            imagenPF: imagenPF,
            estado: estado,

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (res) {
        let resType;
        if (res.success) {
            resType = 'success';
        } else {
            resType = 'warning';
        }


        swal.fire({
            type: resType,
            title: res.msj,
            showConfirmButton: true,
            onClose: () => {
                window.location.href = 'index.html';
            }
            

        });

       


    });



    request.fail(function (jqXHR, textStatus) {

    });




};

let registrarCentroEducativo = (userType, centroEducativo, cedulaJuridica, nombreComercial, anno, genero, religion, email, telCE, web, facebook, twitter, instagram, fax, histroia, provincia, canton, distrito, nombreCEP, segundoNombreCEP, apellidoCEP, segundoApellidoCEP, departamento, telCEP, extension, numIDCEP, emailCEP, lat, lng, contrasenna, privacidad, clasificacion, tipo, grados, imagen, imagenCEP, direccionExacta, idiomas, servicios, descipcionesServicio, documentCE, estado, responsable) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_usuario",
        method: "POST",
        data: {

            userType: userType,
            centroEducativo: centroEducativo,
            cedulaJuridica: cedulaJuridica,
            nombreComercial: nombreComercial,
            anno: anno,
            genero: genero,
            religion: religion,
            telCE: telCE,
            web: web,
            facebook: facebook,
            twitter: twitter,
            instagram: instagram,
            fax: fax,
            histroia: histroia,
            provincia: provincia,
            canton: canton,
            distrito: distrito,
            nombreCEP: nombreCEP,
            segundoNombreCEP: segundoNombreCEP,
            apellidoCEP: apellidoCEP,
            segundoApellidoCEP: segundoApellidoCEP,
            departamento: departamento,
            telCEP: telCEP,
            extension: extension,
            numIDCEP: numIDCEP,
            email: email,
            emailCEP: emailCEP,
            lat: lat,
            lng: lng,
            contrasenna: contrasenna,
            privacidad: privacidad,
            clasificacion: clasificacion,
            tipo: tipo,
            grados: grados,
            imagen: imagen,
            imagenCEP: imagenCEP,
            direccionExacta: direccionExacta,
            idiomas: idiomas,
            servicios: servicios,
            descipcionesServicio: descipcionesServicio,
            documentCE: documentCE,
            estado: estado,
            responsable: responsable

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (res) {
        let resType;
        if (res.success) {
            resType = 'success';
        } else {
            resType = 'warning';
        }


        swal.fire({

            type: resType,
            title: res.msj,
            showConfirmButton: true,
            onClose: () => {
                window.location.href = 'http://localhost:3000/public/userProfileInfo.html';
            }
            // type: resType,
            // title: res.msj,

        });

     
    });



    request.fail(function (jqXHR, textStatus) {

    });




};

let actualizarPF = (userType, nombre, segundoNombre, apellido, segundoApellido, identificacion, nacionalidad, email, telefono, provincia, canton, distrito, edades, imagenPF, estado, id) => {
    let request = $.ajax({

        url: "http://localhost:4000/api/actualizar",
        method: "POST",
        data: {
            userType: userType,
            nombre: nombre,
            segundoNombre: segundoNombre,
            apellido: apellido,
            segundoApellido: segundoApellido,
            identificacion: identificacion,
            nacionalidad: nacionalidad,
            email: email,
            telefono: telefono,
            provincia: provincia,
            canton: canton,
            distrito: distrito,
            edades: edades,
            imagenPF: imagenPF,
            estado: estado,
            id: id
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

        validarCredenciales(user.email, user.contrasenna, function(res) {
           console.log('hello')
            if (res.success) {


                swal.fire({
                    type: 'success',
                    title: 'Éxito',
                    text: res.msg,
                    showConfirmButton: true,
                    onClose: () => {
                        window.location.href = 'userProfileInfo.html';
                    }
        
                });



            } else {
                swal.fire({
                    type: 'warning',
                    title: res.msg,
                });
            }
        });





};

let actualizarCE = (userType, centroEducativo, cedulaJuridica, nombreComercial, anno, genero, religion, email, telCE, web, facebook, twitter, instagram, fax, histroia, provincia, canton, distrito, nombreCEP, segundoNombreCEP, apellidoCEP, segundoApellidoCEP, departamento, telCEP, extension, numIDCEP, emailCEP, lat, lng, privacidad, clasificacion, tipo, grados, imagen, imagenCEP, direccionExacta, idiomas, servicios, descipcionesServicio, documentCE, id) => {
    let request = $.ajax({

        url: "http://localhost:4000/api/actualizar",
        method: "POST",
        data: {
            userType: userType,
            centroEducativo: centroEducativo,
            cedulaJuridica: cedulaJuridica,
            nombreComercial: nombreComercial,
            anno: anno,
            genero: genero,
            religion: religion,
            telCE: telCE,
            web: web,
            facebook: facebook,
            twitter: twitter,
            instagram: instagram,
            fax: fax,
            histroia: histroia,
            provincia: provincia,
            canton: canton,
            distrito: distrito,
            nombreCEP: nombreCEP,
            segundoNombreCEP: segundoNombreCEP,
            apellidoCEP: apellidoCEP,
            segundoApellidoCEP: segundoApellidoCEP,
            departamento: departamento,
            telCEP: telCEP,
            extension: extension,
            numIDCEP: numIDCEP,
            email: email,
            emailCEP: emailCEP,
            lat: lat,
            lng: lng,
            privacidad: privacidad,
            clasificacion: clasificacion,
            tipo: tipo,
            grados: grados,
            imagen: imagen,
            imagenCEP: imagenCEP,
            direccionExacta: direccionExacta,
            idiomas: idiomas,
            servicios: servicios,
            descipcionesServicio: descipcionesServicio,
            documentCE: documentCE,

            id: id
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (res) {
        // swal.fire({
        //     type: 'success',
        //     title: 'exito',
        //     text: res.msg

        // });

        validarCredenciales(user.email, user.contrasenna, function(res) {
           console.log('hello')
            if (res.success) {
         

                swal.fire({
                    type: 'success',
                    title: 'Éxito',
                    text: res.msg,
                    showConfirmButton: true,
                    onClose: () => {
                        window.location.href = 'userProfileInfo.html';
                    }
        
                });


                
            } else {
                swal.fire({
                    type: 'warning',
                    title: res.msg,
                });
            }
        });
    });



};

let actualizarSA = (userType, nombre, segundoNombre, apellido, segundoApellido, identificacion, nacionalidad, email, telefono, imagenPF, estado, id, puesto, provincia, canton, distrito) => {
    let request = $.ajax({

        url: "http://localhost:4000/api/actualizar",
        method: "POST",
        data: {
            userType: userType,
            nombre: nombre,
            segundoNombre: segundoNombre,
            apellido: apellido,
            segundoApellido: segundoApellido,
            identificacion: identificacion,
            nacionalidad: nacionalidad,
            email: email,
            telefono: telefono,
            imagenPF: imagenPF,
            estado: estado,
            id: id,
            puesto: puesto,
            provincia: provincia,
            canton: canton,
            distrito: distrito
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"


        
    });

    request.done(function (res) {
 

        validarCredenciales(user.email, user.contrasenna, function(res) {
           console.log('hello')
            if (res.success) {
         

                swal.fire({
                    type: 'success',
                    title: 'Éxito',
                    text: res.msg,
                    showConfirmButton: true,
                    onClose: () => {
                        window.location.href = 'userProfileInfo.html';
                    }
        
                });


                
            } else {
                swal.fire({
                    type: 'warning',
                    title: res.msg,
                });
            }
        });
    });



};

let actualizarPW = (id, contrasenna, callback) => {
    let request = $.ajax({

        url: "http://localhost:4000/api/actualizar",
        method: "POST",
        data: {

            id: id,
            contrasenna : contrasenna

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"

    });

    request.done(function (res) {
        swal.fire({
            type: 'success',
            title: 'exito',
            text: res.msg
        });
        callback(res);
    });
}