'use strict';

// let user = JSON.parse(sessionStorage.getItem('usuario'));

const inputTituloNoticia = document.querySelector('#inputTituloNoticia');
const inputRegistrarNoticia = document.querySelector('#inputRegistrarNoticia');
const inputFechaNoticia = document.querySelector('#inputFechaNoticia');
const botonRegistrarNoticia = document.querySelector('#btnRegistrarNoticia');
const idCE = user._id;

/**************************************************************************************************************/

if(user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
    opcionRegistrar.style.display = 'none';
    if (location.pathname.split("/").slice(-1) != 'loSentimos.html') setTimeout(location.href='loSentimos.html?idCE='+IdGeneralCE, 0);
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
        let userName = user.nombre += " " + user.apellido;


        registrarNoticia(stringTituloNoticia, stringRegistrarNoticia, stringFechaNoticia, idCentroEducativo, userName);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La becas no fue registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

botonRegistrarNoticia.addEventListener('click', obtener_datos);