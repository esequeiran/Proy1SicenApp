'use strict';

let user = JSON.parse(sessionStorage.getItem("usuario"));

const inputTema = document.querySelector('#inputTema');
const text = document.querySelector('#descripcion');
const file = document.querySelector('#documentPreview');
const btnGuardar = document.querySelector('#btnGuardar');
const idCE = user._id;

if(user.userType == 'padreFamilia' || user.userType == 'superAdministrador'){
    window.location.href = 'loSentimos.html';
}

let mostrarDatos = () => {
    
};