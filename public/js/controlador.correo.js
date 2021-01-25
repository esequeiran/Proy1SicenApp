'use strict';
let correoUser = user.correo;
let sendMail = enviarCorreo(correoUser);

const btnInfoP = document.querySelector('#btnInfoP');

btnInfoP.addEventListener('click', enviarCorreo);