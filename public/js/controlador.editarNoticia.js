'use strict';

let user = JSON.parse(sessionStorage.getItem("usuario"));
const tabla = document.querySelector('#tblNoticias tbody');
const inputFiltrar = document.querySelector('#inputBuscar');
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

let _id = get_param('idNoticia');

let noticia = buscarNoticia(_id);

let mostrarDatoNoticia = () => {
    inputNoticia.value = noticia[0]['tituloNoticia'];

};