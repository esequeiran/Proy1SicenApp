'use strict';

const inputFiltrar = document.querySelector('#inputBuscar');
// let user = JSON.parse(sessionStorage.getItem('usuario'));
const inputTituloNoticia = document.querySelector('#inputTituloNoticia');
const inputRegistrarNoticia = document.querySelector('#inputRegistrarNoticia');
const inputFechaNoticia = document.querySelector('#inputFechaNoticia');
const botonRegistrarNoticia = document.querySelector('#btnRegistrarNoticia');
const idCE = user._id;

/**************************************************************************************************************/

if (user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
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

console.log(noticia);

let mostrarDatoNoticia = () => {
    inputTituloNoticia.value = noticia[0]['tituloNoticia'];
    inputFechaNoticia.value = noticia[0]['fechaNoticia'];
    inputRegistrarNoticia.value = noticia[0]['registrarNoticia'];

};

if (noticia) {
    mostrarDatoNoticia();
}

/**************************************************************************************************************/

let validar = () => {
    let error = false;

    if (inputTituloNoticia.value == '') {
        error = true;
        inputTituloNoticia.classList.add('errorInput');
    } else {
        inputTituloNoticia.classList.remove('errorInput');
    }

    if (inputFechaNoticia.value == '') {
        error = true;
        inputFechaNoticia.classList.add('errorInput');
    } else {
        inputFechaNoticia.classList.remove('errorInput');
    }

    if (inputRegistrarNoticia.value == '') {
        error = true;
        inputRegistrarNoticia.classList.add('errorInput');
    } else {
        inputRegistrarNoticia.classList.remove('errorInput');
    }
    return error;
};

/**************************************************************************************************************/

let obtener_datos = () => {

    if (validar() == false) {

        let stringTituloNoticia = inputTituloNoticia.value;
        let stringRegistrarNoticia = inputRegistrarNoticia.value;
        let stringFechaNoticia = inputFechaNoticia.value;
        let idCentroEducativo = idCE;

        Swal.fire({
            title: '¿Está seguro que desea actualizar la noticia?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
        }).then((result) => {
            if (result.value) {
                editarNoticia(stringTituloNoticia, stringRegistrarNoticia, stringFechaNoticia, idCentroEducativo, _id);
            }
        })
    } else {
        swal.fire({
            type: 'warning',
            title: 'La beca no ha sido actualizada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

botonRegistrarNoticia.addEventListener('click', obtener_datos);