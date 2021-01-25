'use strict';

let user = JSON.parse(sessionStorage.getItem("usuario"));
const tabla = document.querySelector('#tblMatriculas tbody');
const inputBuscar = document.querySelector('#inputBuscar');
let idUsuarioCE = user._id;

/**************************************************************************************************************/

if (user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
} else {

}


if (user.userType == "superAdministrador") {
    window.location.href = 'loSentimos.html';
} else {

}

/**************************************************************************************************************/

let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);
    return id;
};

let _id = get_param('idMatricula');

let matricula = buscarMatricula(_id);

let mostrarDatoMatricula = () => {
    inputMatricula.value = matricula[0]['matricula'];
    inputMensualidad.value = matricula[0]['mensualidad'];
    inputfieldsetPrecio.value = matricula[0]['moneda'];

};