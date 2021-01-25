'use strict';

// let user = JSON.parse(sessionStorage.getItem('usuario'));
const inputFiltrar = document.querySelector('#inputBuscar');
const inputNombreBeca = document.querySelector('#inputNombreBeca');
const inputDescripcionBeca = document.querySelector('#inputDescripcionBeca');
const botonRegistrarBeca = document.querySelector('#btnRegistrarBeca');
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


let _id = get_param('idBeca');
let beca = buscarBeca(_id);

console.log(beca);

let mostrarDatoBeca = () => {
    inputNombreBeca.value = beca[0]['nombreBeca'];
    inputDescripcionBeca.value = beca[0]['descripcionBeca'];

};

if (beca) {
    mostrarDatoBeca();
}

/**************************************************************************************************************/

let validar = () => {
    let error = false;
    if (inputNombreBeca.value == '') {
        error = true;
        inputNombreBeca.classList.add('errorInput');
    } else {
        inputNombreBeca.classList.remove('errorInput');
    }

    if (inputDescripcionBeca.value == '') {
        error = true;
        inputDescripcionBeca.classList.add('errorInput');
    } else {
        inputDescripcionBeca.classList.remove('errorInput');
    }

    return error;
};

/**************************************************************************************************************/

let obtener_datos = () => {
    if (validar() == false) {

        let stringNombreBeca = inputNombreBeca.value;
        let stringDescripcionBeca = inputDescripcionBeca.value;
        let idCentroEducativo = idCE;

        Swal.fire({
            title: '¿Está seguro que desea actualizar la beca?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
        }).then((result) => {
            if (result.value) {
                editarBeca(stringNombreBeca, stringDescripcionBeca, idCentroEducativo, _id);
            }
        })
    } else {
        swal.fire({
            type: 'warning',
            title: 'La beca no ha sido actualizado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

botonRegistrarBeca.addEventListener('click', obtener_datos);