'use strict';

const nodemailer = require("nodemailer");
const modelo_usuario = require('./usuarios.model');
const modeloBitacora = require('../bitacora/bitacora.model');


function correoPF(pemail, pnombre, pcontrasena) {
    //se define el correo que se va utilizar para enviar el email
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 4000,
        secure: false,
        auth: {
            user: 'sicen.amejix@gmail.com',
            pass: 'amejix12345'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    //se redacta el email

    let email = pemail;
    let nombre = pnombre;
    let contrasenna = pcontrasena;


    let mailOptions = {
        from: 'sicen.amejix@gmail.com',
        to: email,
        subject: 'Bienvenido a Sicen - Verificación',
        html: `<html>

    <head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    </head>
    
    <body style="font-family: 'Montserrat', sans-serif; background-size: cover; ">
        <main style="background: #4a6572; width:100%; height: 100%;">
            <div style="background: #4a6572; max-width: 700px; padding: 10px; margin:0 auto; border-collapse: collapse;">
    
                <div style="color: #fff; margin: 4% 10% 2%; font-family: sans-serif;">
    
                    <h2 style="color: #fff; margin: 0 0 7px; font-size: 40px; margin: 0 auto; text-align: center; padding-bottom: 30px">
                        Sicen
                    </h2>
    
                    <p style="margin: 2px; font-size: 22px; padding-left: 20px; color: #fff;">
                        Saludos ${nombre}, se ha registrado exitosamente a la aplicación Sicen del Ministerio de Educación.
                    </p>
    
                    <ul style="font-size: 18px; color: #fff; margin: 10px 0; padding-left: 50px;">
                        <ul style="padding: 10px;">Su nombre de usuario es: ${email}</ul>
                        <ul style="padding: 10px;">Su codigo de verificacíon es: ${contrasenna}</ul>
                    </ul>
                    
                    <div style="width: 100%; text-align: center; padding-top: 20px;">
                        <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #f9aa33"
                            href="pendiente.html">Ingresar a Sicen</a>
                    </div>
                </div>
            </div>
    
    
        </main>
    </body>
    
    </html>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

function correoCE(pemail, pcentroEducativo, pcontrasena, pestado) {
    //se define el correo que se va utilizar para enviar el email
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 4000,
        secure: false,
        auth: {
            user: 'sicen.amejix@gmail.com',
            pass: 'amejix12345'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    //se redacta el email

    let email = pemail;
    let centroEducativo = pcentroEducativo;
    let contrasenna = pcontrasena;
    let estado = pestado;

    if (estado == "Activo") {

        let mailOptions = {
            from: 'sicen.amejix@gmail.com',
            to: email,
            subject: 'Registro de centro educativo',
            html: `<html>

        <head>
            <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        </head>
        
        <body style="font-family: 'Montserrat', sans-serif; background-size: cover; ">
            <main style="background: #4a6572; width:100%; height: 100%;">
                <div style="background: #4a6572; max-width: 700px; padding: 10px; margin:0 auto; border-collapse: collapse;">
        
                    <div style="color: #fff; margin: 4% 10% 2%; font-family: sans-serif;">
        
                        <h2 style="color: #fff; margin: 0 0 7px; font-size: 40px; margin: 0 auto; text-align: center; padding-bottom: 30px">
                            Sicen
                        </h2>
        
                        <p style="margin: 2px; font-size: 22px; padding-left: 20px; color: #fff;">
                            Saludos ${centroEducativo}, se ha registrado su cuenta exitosamente a la aplicación Sicen del Ministerio de Educación.
                        </p>
        
                        <ul style="font-size: 18px; color: #fff; margin: 10px 0; padding-left: 50px;">
                            <ul style="padding: 10px;">El usuario del centro es: ${email}</ul>
                            <ul style="padding: 10px;">Su codigo de verificacíon es: ${contrasenna}</ul>
                        </ul>
                        
                   
                    </div>
                </div>
        
        
            </main>
        </body>
        
        </html>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    } else {
        let mailOptions = {
            from: 'sicen.amejix@gmail.com',
            to: email,
            subject: 'Registro de centro educativo',
            html: `<html>

        <head>
            <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        </head>
        
        <body style="font-family: 'Montserrat', sans-serif; background-size: cover; ">
            <main style="background: #4a6572; width:100%; height: 100%;">
                <div style="background: #4a6572; max-width: 700px; padding: 10px; margin:0 auto; border-collapse: collapse;">
        
                    <div style="color: #fff; margin: 4% 10% 2%; font-family: sans-serif;">
        
                        <h2 style="color: #fff; margin: 0 0 7px; font-size: 40px; margin: 0 auto; text-align: center; padding-bottom: 30px">
                            Sicen
                        </h2>
        
                        <p style="margin: 2px; font-size: 22px; padding-left: 20px; color: #fff;">
                            Saludos ${centroEducativo}, se ha registrado exitosamente a la aplicación Sicen del Ministerio de Educación.
                            Su cuenta esta siendo revisada por el personal de Sicen. Prontamente recibirá un correo con el resultado de la revisión.
                        </p>
        
                        <ul style="font-size: 18px; color: #fff; margin: 10px 0; padding-left: 50px;">

                        </ul>
                        
                   
                    </div>
                </div>
        
        
            </main>
        </body>
        
        </html>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

}

function correoCEActivacion(pemail, pcentroEducativo, pcontrasena, pestado) {
    //se define el correo que se va utilizar para enviar el email
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 4000,
        secure: false,
        auth: {
            user: 'sicen.amejix@gmail.com',
            pass: 'amejix12345'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    //se redacta el email

    let email = pemail;
    let centroEducativo = pcentroEducativo;
    let contrasenna = pcontrasena;
    let estado = pestado;

    if (estado == "Activo") {

        let mailOptions = {
            from: 'sicen.amejix@gmail.com',
            to: email,
            subject: 'Registro de centro educativo',
            html: `<html>

        <head>
            <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        </head>
        
        <body style="font-family: 'Montserrat', sans-serif; background-size: cover; ">
            <main style="background: #4a6572; width:100%; height: 100%;">
                <div style="background: #4a6572; max-width: 700px; padding: 10px; margin:0 auto; border-collapse: collapse;">
        
                    <div style="color: #fff; margin: 4% 10% 2%; font-family: sans-serif;">
        
                        <h2 style="color: #fff; margin: 0 0 7px; font-size: 40px; margin: 0 auto; text-align: center; padding-bottom: 30px">
                            Sicen
                        </h2>
        
                        <p style="margin: 2px; font-size: 22px; padding-left: 20px; color: #fff;">
                            Saludos ${centroEducativo}, se ha aprobado su cuenta. Bienvenido a Sicen.
                        </p>
        
                        <ul style="font-size: 18px; color: #fff; margin: 10px 0; padding-left: 50px;">
                            <ul style="padding: 10px;">El usuario del centro es: ${email}</ul>
                            <ul style="padding: 10px;">Su codigo de verificacíon es: ${contrasenna}</ul>
                        </ul>
                        
                   
                    </div>
                </div>
        
        
            </main>
        </body>
        
        </html>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    } else if (estado == "Inactivo") {
        let mailOptions = {
            from: 'sicen.amejix@gmail.com',
            to: email,
            subject: 'Registro de centro educativo',
            html: `<html>

        <head>
            <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        </head>
        
        <body style="font-family: 'Montserrat', sans-serif; background-size: cover; ">
            <main style="background: #4a6572; width:100%; height: 100%;">
                <div style="background: #4a6572; max-width: 700px; padding: 10px; margin:0 auto; border-collapse: collapse;">
        
                    <div style="color: #fff; margin: 4% 10% 2%; font-family: sans-serif;">
        
                        <h2 style="color: #fff; margin: 0 0 7px; font-size: 40px; margin: 0 auto; text-align: center; padding-bottom: 30px">
                            Sicen
                        </h2>
        
                        <p style="margin: 2px; font-size: 22px; padding-left: 20px; color: #fff;">
                            Saludos ${centroEducativo}, su cuenta ahora esta en estado de inactividad.
                            En caso de haber enviado una solicitud, esta no fue aceptada.
                        </p>
        
                        <ul style="font-size: 18px; color: #fff; margin: 10px 0; padding-left: 50px;">

                        </ul>
                        
                   
                    </div>
                </div>
        
        
            </main>
        </body>
        
        </html>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

}


/************************** Actualizar Usuario**************************/

module.exports.actualizar = function (req, res) {
    console.log('api')
    console.log(req.body.id)
    modelo_usuario.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo actualizar el usuario' })
            } else {

                /**************************Bitacora/**************************/
                if (req.body.userType == 'padreFamilia' || req.body.userType == 'superAdimistrador') {

                    var diaActual = new Date();
                    var dd = diaActual.getDate();
                    var mm = diaActual.getMonth();
                    var yyyy = diaActual.getFullYear();
                    var hora = diaActual.getHours();
                    var minutos = diaActual.getMinutes();
                    var segundos = diaActual.getSeconds();


                    diaActual = `${yyyy}/${mm}/${dd} - ${hora}:${minutos}:${segundos}`;

                    let nuevaBitacora = new modeloBitacora({
                        usuario: req.body.nombre,
                        tipoDeMovimiento: "Modificación de información usuario",
                        fecha: diaActual,
                    })
                    nuevaBitacora.save();

                } else if (req.body.userType == 'centroEducativo') {

                    var diaActual = new Date();
                    var dd = diaActual.getDate();
                    var mm = diaActual.getMonth();
                    var yyyy = diaActual.getFullYear();
                    var hora = diaActual.getHours();
                    var minutos = diaActual.getMinutes();
                    var segundos = diaActual.getSeconds();


                    diaActual = `${yyyy}/${mm}/${dd} - ${hora}:${minutos}:${segundos}`;


                    let nuevaBitacora = new modeloBitacora({
                        usuario: req.body.centroEducativo,
                        tipoDeMovimiento: "Modificación de información centro educativo",
                        fecha: diaActual,

                    })
                    nuevaBitacora.save();
                }


                /**************************Fin Bitacora**************************/

                /**************************Correo CE**************************/

                if (req.body.userType == 'centroEducativo' && req.body.estado == 'Activo') {

                    correoCEActivacion(req.body.email, req.body.centroEducativo, req.body.contrasenna, req.body.estado);

                } else if (req.body.userType == 'centroEducativo' && req.body.estado == 'Inactivo') {

                    correoCEActivacion(req.body.email, req.body.centroEducativo, req.body.contrasenna, req.body.estado);

                };


                /**************************Fin Correo CE**************************/

                res.json({ success: true, msg: 'Se actualizó el usuario' })
            }
        }
    )

}
/************************************************************************/



module.exports.registrar = (req, res) => {


    let nuevo_usuario = new modelo_usuario(

        {


            userType: req.body.userType,

            //SA:
            puesto: req.body.puesto,

            //PF

            nombre: req.body.nombre,
            segundoNombre: req.body.segundoNombre,
            apellido: req.body.apellido,
            segundoApellido: req.body.gundoApellido,
            identificacion: req.body.identificacion,
            nacionalidad: req.body.nacionalidad,
            email: req.body.email,
            telefono: req.body.telefono,
            provincia: req.body.provincia,
            canton: req.body.canton,
            distrito: req.body.distrito,
            contrasenna: req.body.contrasenna,
            edades: req.body.edades,
            imagenPF: req.body.imagenPF,

            //CE
            centroEducativo: req.body.centroEducativo,
            cedulaJuridica: req.body.cedulaJuridica,
            nombreComercial: req.body.nombreComercial,
            anno: req.body.anno,
            genero: req.body.genero,
            religion: req.body.religion,
            telCE: req.body.telCE,
            web: req.body.web,
            facebook: req.body.facebook,
            twitter: req.body.twitter,
            instagram: req.body.instagram,
            fax: req.body.fax,
            histroia: req.body.histroia,

            nombreCEP: req.body.nombreCEP,
            segundoNombreCEP: req.body.segundoNombreCEP,
            apellidoCEP: req.body.apellidoCEP,
            segundoApellidoCEP: req.body.segundoApellidoCEP,

            departamento: req.body.departamento,
            telCEP: req.body.telCEP,
            extension: req.body.extension,
            numIDCEP: req.body.numIDCEP,
            emailCEP: req.body.emailCEP,
            lat: req.body.lat,
            lng: req.body.lng,
            privacidad: req.body.privacidad,
            clasificacion: req.body.clasificacion,
            tipo: req.body.tipo,
            grados: req.body.grados,
            imagen: req.body.imagen,
            imagenCEP: req.body.imagenCEP,
            direccionExacta: req.body.direccionExacta,
            idiomas: req.body.idiomas,
            servicios: req.body.servicios,
            descipcionesServicio: req.body.descipcionesServicio,
            documentCE: req.body.documentCE,
            estado: req.body.estado,
            responsable: req.body.responsable

        }
    );

    nuevo_usuario.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msj: 'No se pudo registrar el usuario: ' + error,
                }
            )
        } else {

            /* En caso de que se logre registrar el usuario, le enviaremos un corre electronico
            -- Tendra su contrasenna momentaria
            
            */


            switch (req.body.userType) {
                case 'padreFamilia':
                    correoPF(req.body.email, req.body.nombre, req.body.contrasenna)
                    break;
                case 'centroEducativo':
                    console
                    correoCE(req.body.email, req.body.centroEducativo, req.body.contrasenna, req.body.estado)
                    break;
                default:
                // code block
            }

            /**************************Bitacora/**************************/
            if (req.body.userType == 'padreFamilia') {

                var diaActual = new Date();
                var dd = diaActual.getDate();
                var mm = diaActual.getMonth();
                var yyyy = diaActual.getFullYear();
                var hora = diaActual.getHours();
                var minutos = diaActual.getMinutes();
                var segundos = diaActual.getSeconds();


                diaActual = `${yyyy}/${mm}/${dd} - ${hora}:${minutos}:${segundos}`;

                let nuevaBitacora = new modeloBitacora({
                    usuario: req.body.nombre,
                    tipoDeMovimiento: "Creación de usuario",
                    fecha: diaActual,
                })
                nuevaBitacora.save();

            } else if (req.body.userType == 'centroEducativo') {

                var diaActual = new Date();
                var dd = diaActual.getDate();
                var mm = diaActual.getMonth();
                var yyyy = diaActual.getFullYear();
                var hora = diaActual.getHours();
                var minutos = diaActual.getMinutes();
                var segundos = diaActual.getSeconds();


                diaActual = `${yyyy}/${mm}/${dd} - ${hora}:${minutos}:${segundos}`;


                let nuevaBitacora = new modeloBitacora({
                    usuario: req.body.centroEducativo,
                    tipoDeMovimiento: "Creación de centro educativo",
                    fecha: diaActual,

                })
                nuevaBitacora.save();
            }

            /**************************Fin Bitacora**************************/




            res.json(
                {
                    success: true,
                    msj: 'Se registro el usuario correctamente'

                }
            )
        }
    });

};


module.exports.validar = (req, res) => {

    modelo_usuario.findOne({ email: req.body.email }).then(
        function (usuario) {
            if (usuario) {
                if (usuario.contrasenna == req.body.contrasenna) {
                    console.log("contraseña correcta");
                    res.json({
                        success: true,
                        usuario: usuario
                    })
                } else {
                    res.json({
                        success: false,
                        msg: 'La contraseña no es válida'
                    })
                }
            } else {
                res.json({
                    success: false,
                    msg: 'El usuario no exitste'
                })
            }
        }


    )

}

module.exports.favoritar = (req, res) => {

    modelo_usuario.findOne({ email: req.body.userEmail }).then(
        function (usuario) {
            if (usuario) {
                modelo_usuario.findOne({ email: req.body.emailCE }).then(
                    function (centro) {
                        if (centro) {
                            usuario.favoritos.push(centro._id);
                            usuario.save();
                            res.json({
                                success: true,
                                msg: 'Se ha agregado a la lista de favoritos'
                            });
                        } else {
                            res.json({
                                success: false,
                                msg: 'El centro no exitste'
                            })
                        }
                    }
                );
            } else {
                res.json({
                    success: false,
                    msg: 'El usuario no exitste'
                })
            }
        }


    )

}

module.exports.desfavoritar = (req, res) => {

    modelo_usuario.findOne({ email: req.body.userEmail }).then(
        function (usuario) {
            if (usuario) {
                modelo_usuario.findOne({ email: req.body.emailCE }).then(
                    function (centro) {
                        if (centro) {
                            // usuario.favoritos = usuario.favoritos.filter(fav => fav._id !== centro._id);
                          
                           usuario.favoritos.remove(centro._id);
                            // usuario.favoritos = usuario.favoritos.filter(favoritos => favoritos._id !== centro._id);
                            usuario.save();
                            res.json({
                                success: true,
                                msg: 'Éxito! Se ha elminado el favorito'
                            });
                        } else {
                            res.json({
                                success: false,
                                msg: 'El centro no exitste'
                            })
                        }
                    }
                );
            } else {
                res.json({
                    success: false,
                    msg: 'El usuario no exitste'
                })
            }
        }


    )

}

module.exports.favoritos = (req, res) => {
    console.log(req.query.email);
    modelo_usuario.findOne({ email: decodeURI(req.query.email) }).populate('favoritos').exec(
        function (err, usuario) {
            if (usuario) {
                res.json({
                    success: true,
                    favoritos: usuario.favoritos
                })
            } else {
                res.json({
                    success: false,
                    msg: 'El usuario no exitste'
                })
            }
        }


    )

}

/************************** Lista CE Pendiente/Notificaciones SA**************************/
module.exports.solicitudes = (req, res) => {
    modelo_usuario.find({ estado: 'Pendiente' }).then(
        function (usuario) {
            if (usuario.length > 0) {
                res.json({
                    success: true,
                    usuario: usuario
                })
            } else {
                res.json({
                    success: false,
                    usuario: 'No se encontraron centros educativos.'
                })
            }
        }
    );
}
/************************************************************************/

/************************** Eliminar Usuario*************************/
module.exports.eliminarUsuario = function (req, res) {

    modelo_usuario.findByIdAndDelete({ _id: req.body.id },
        function (error) {
            if (error) {
                res.json({
                    success: false,
                    msg: 'No se pudo eliminar el usuario'
                })
            } else {



                /**************************Bitacora*/
                var diaActual = new Date();
                var dd = diaActual.getDate();
                var mm = diaActual.getMonth();
                var yyyy = diaActual.getFullYear();
                var hora = diaActual.getHours();
                var minutos = diaActual.getMinutes();
                var segundos = diaActual.getSeconds();
                diaActual = `${yyyy}/${mm}/${dd} - ${hora}:${minutos}:${segundos}`;

                let nuevaBitacora = new modeloBitacora({
                    usuario: req.body.nombre,
                    tipoDeMovimiento: "Eliminación de usuario",
                    fecha: diaActual,
                })
                nuevaBitacora.save();
                /**************************/


                res.json({
                    success: true,
                    msg: 'Se eliminó el usuario'
                })
            }
        }
    )

}


/************************************************************************/




//Api de alejandro listar usuarios


module.exports.listarCE = (req, res) => {
    modelo_usuario.find({ userType: 'centroEducativo' }).then(
        function (usuario) {
            if (usuario.length > 0) {
                res.json({
                    success: true,
                    usuario: usuario
                })
            } else {
                res.json({
                    success: false,
                    usuario: 'No se encontraron centros educativos.'
                })
            }
        }
    );
}

module.exports.listarPFs = (req, res) => {
    modelo_usuario.find({ userType: 'padreFamilia' }).then(
        function (usuario) {
            if (usuario.length > 0) {
                res.json({
                    success: true,
                    usuario: usuario
                })
            } else {
                res.json({
                    success: false,
                    usuario: 'No se encontraron padres de familia.'
                })
            }
        }
    );
}

module.exports.listarCEOusuario = (req, res) => {
    modelo_usuario.find({ userType: 'centroEducativo', _id: req.body.idCE }).then(
        function (centrosEducativos) {
            if (centrosEducativos.length > 0) {
                res.json({
                    success: true,
                    centrosEducativos: centrosEducativos
                })
            } else {
                res.json({
                    success: false,
                    centrosEducativos: 'No se encontraron centros educativos.'
                })
            }
        }
    );
}

module.exports.listarPFPorSA = (req, res) => {
    modelo_usuario.find({ userType: 'padreFamilia', _id: req.body.idPF }).then(
        function (padreFamilia) {
            if (padreFamilia.length > 0) {
                res.json({
                    success: true,
                    padreFamilia: padreFamilia
                })
            } else {
                res.json({
                    success: false,
                    padreFamilia: 'No se encontraron centros educativos.'
                })
            }
        }
    );
}

module.exports.listarMEP = (req, res) => {
    modelo_usuario.find({ userType: 'superAdministrador' }).then(
        function (usuario) {
            if (usuario.length > 0) {
                res.json({
                    success: true,
                    usuario: usuario
                })
            } else {
                res.json({
                    success: false,
                    usuario: 'No hay informacion del Ministerio de Educación Pública.'
                })
            }
        }
    );
}

module.exports.enviarCorreo = (req, res) => {
    modelo_usuario.find({ userType: 'superAdministrador' }).then(
        function (usuario) {
            if (usuario.length > 0) {
                res.json({
                    success: true,
                    usuario: usuario
                })
            } else {
                res.json({
                    success: false,
                    usuario: 'No se encontraron centros educativos.'
                })
            }
        }
    );
}

// COMENTADA PORQUE DABA ERROR A LISTAR PADRES DE FAMILIA

// module.exports.listarPF = (req, res) => {
//     modelo_usuario.find({ _id: req.body._id}).then(
//         function (infoPF) {
//             if (infoPF.length > 0) {
//                 res.json({
//                     success: true,
//                     infoPF: infoPF
//                 })
//             } else {
//                 res.json({
//                     success: false,
//                     infoPF: 'No se encontró padre de familia.'
//                 })
//             }
//         }
//     );
// }
