'use strict';

// let user = JSON.parse(sessionStorage.getItem('usuario'));

const inputNombreBeca = document.querySelector('#inputNombreBeca');
const inputDescripcionBeca = document.querySelector('#inputDescripcionBeca');
const botonRegistrarBeca = document.querySelector('#btnRegistrarBeca');
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
        let userName = user.nombre += " " + user.apellido;

        registrarBeca(stringNombreBeca, stringDescripcionBeca, idCentroEducativo, userName);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La becas no fue registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

botonRegistrarBeca.addEventListener('click', obtener_datos);