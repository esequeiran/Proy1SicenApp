'use strict';

const inputBuscar = document.querySelector('#inputBuscar');
// let user = JSON.parse(sessionStorage.getItem('usuario'));
const inputMatricula = document.querySelector('#inputPrecioMatricula');
const inputMensualidad = document.querySelector('#inputPrecioMensualidad');
const inputfieldsetPrecio = document.querySelector('#fieldsetPrecio');
const botonRegistrarMatricula = document.querySelector('#btnRegistrarMatricula');
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

let _id = get_param('idMatricula');
let matricula = buscarMatricula(_id);

console.log(matricula);

let mostrarDatoMatricula = () => {
    inputMatricula.value = matricula[0]['matricula'];
    inputMensualidad.value = matricula[0]['mensualidad'];
    inputfieldsetPrecio.value = matricula[0]['moneda'];

};

if (matricula) {
    mostrarDatoMatricula();
}

/**************************************************************************************************************/
let validar = () => {
    let error = false;

    let monedaSeleccionada = document.querySelector('#fieldsetPrecio input[type=radio]:checked');

    if (inputMatricula.value == '') {
        error = true;
        inputMatricula.classList.add('errorInput');
    } else {
        inputMatricula.classList.remove('errorInput');
    }

    if (inputMensualidad.value == '') {
        error = true;
        inputMensualidad.classList.add('errorInput');
    } else {
        inputMensualidad.classList.remove('errorInput');
    }

    if (monedaSeleccionada == null) {
        error = true;
        inputfieldsetPrecio.classList.add('errorInput');
    } else {
        inputfieldsetPrecio.classList.remove('errorInput');
    }


    return error;
};

/**************************************************************************************************************/

let obtener_datos = () => {

    if (validar() == false) {

        let stringNombreMatricula = inputMatricula.value;
        let stringPrecioMatricula = inputMensualidad.value;
        let fieldsetnumberPrecioMatricula = document.querySelector('#fieldsetPrecio input[type=radio]:checked').value;
        let idCentroEducativo = idCE;

        Swal.fire({
            title: '¿Está seguro que desea actualizar la matrícula?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
        }).then((result) => {
            if (result.value) {
                editarMatricula(stringNombreMatricula, stringPrecioMatricula, fieldsetnumberPrecioMatricula, idCentroEducativo, _id);
            }
        })
    } else {
        swal.fire({
            type: 'warning',
            title: 'La matrícula no ha sido actualizada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

botonRegistrarMatricula.addEventListener('click', obtener_datos);
