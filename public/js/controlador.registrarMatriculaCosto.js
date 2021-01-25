'use strict';

// let user = JSON.parse(sessionStorage.getItem('usuario'));

const inputMatricula = document.querySelector('#inputPrecioMatricula');
const inputMensualidad = document.querySelector('#inputPrecioMensualidad');
const inputfieldsetPrecio = document.querySelector('#fieldsetPrecio');
const botonRegistrarMatricula = document.querySelector('#btnRegistrarMatricula');
const idCE = user._id;

/**************************************************************************************************************/

if (user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
    opcionRegistrar.style.display = 'none';
    if (location.pathname.split("/").slice(-1) != 'loSentimos.html') setTimeout(location.href = 'loSentimos.html?idCE=' + IdGeneralCE, 0);
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

        let numberPrecioMatricula = inputMatricula.value;
        let numberPrecioMensualidad = inputMensualidad.value;
        let fieldsetnumberPrecioMatricula = document.querySelector('#fieldsetPrecio input[type=radio]:checked').value;
        let idCentroEducativo = idCE;
        let userName = user.nombre += " " + user.apellido;

        registrarMatricula(numberPrecioMatricula, numberPrecioMensualidad, fieldsetnumberPrecioMatricula, idCentroEducativo, userName);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La matrícula no fue registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

botonRegistrarMatricula.addEventListener('click', obtener_datos);