'use strict';

// let user = JSON.parse(sessionStorage.getItem('usuario'));

const inputIdioma = document.querySelector('#inputIdioma');
const botonRegistrarIdioma = document.querySelector('#botonRegistrarIdioma');
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
        let userName = user.nombre += " " + user.apellido;

        registrarIdiomas(parametrosIdioma, idCentroEducativo, userName);
    } else {
        swal.fire({
            type: 'warning',
            title: 'Formulario incompleto',
            text: 'Por favor revise los campos resaltados',
        });
    }
}


botonRegistrarIdioma.addEventListener('click', jalarDatosIdiomas);