'use strict';

let user = JSON.parse(sessionStorage.getItem("usuario"));
const tabla = document.querySelector('#tblBecas tbody');
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
    let id = url.searchParams.get(param);//Toma el parámetro id_inmueble del url y retorna el valor
    return id;
};

let _id = get_param('idBeca');

let beca = buscarBeca(_id);

let mostrarDatoBeca = () => {
    inputBeca.value = beca[0]['nombreBeca'];
    inputDescripcionBeca.value = beca[0]['descripcionBeca'];

};