'use strict';

const inputBuscar = document.querySelector('#inputBuscar');
// let user = JSON.parse(sessionStorage.getItem('usuario'));
const inputIdioma = document.querySelector('#inputIdioma');
const botonRegistrarIdioma = document.querySelector('#botonRegistrarIdioma');
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


let _id = get_param('idIdioma');
let idioma = buscarIdioma(_id);

console.log(idioma);

let mostrarDatoIdioma = () => {
    inputIdioma.value = idioma[0]['idiomas'];

};

if (idioma) {
    mostrarDatoIdioma();
}

/**************************************************************************************************************/

let validar = () => {
    let error = false;

    if (inputIdioma.value == '') {
        error = true;
        inputIdioma.classList.add('errorInput');
    } else {
        inputIdioma.classList.remove('errorInput');
    }

    return error;
}

/**************************************************************************************************************/

let jalarDatosIdiomas = () => {
    if (validar() == false) {

        let parametrosIdioma = inputIdioma.value;
        let idCentroEducativo = idCE;

        Swal.fire({
            title: '¿Está seguro que desea actualizar el idioma?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
        }).then((result) => {
            if (result.value) {
                editarIdioma(parametrosIdioma, idCentroEducativo, _id);
            }
        })
    } else {
        swal.fire({
            type: 'warning',
            title: 'El idioma no ha sido actualizado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

botonRegistrarIdioma.addEventListener('click', jalarDatosIdiomas);

