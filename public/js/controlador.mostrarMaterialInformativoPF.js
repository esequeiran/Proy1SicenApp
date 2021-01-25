'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));
const tabla = document.querySelector('#tblMaterialInformativo tbody');
const inputFiltro = document.querySelector('#txtFiltro');

let idUsuarioCEmaterial = user._id;

if(user.userType != "centroEducativo") {
    idUsuarioCEmaterial = IdGeneralCE;
} else {
    
}


// if (user.userType == "superAdministrador") {
//     window.location.href = 'loSentimos.html';
// } else {
    
// }

let temas = listarMaterialUsuario(idUsuarioCEmaterial);
mostrarDatosPF();


inputFiltro.addEventListener('keyup', mostrarDatosPF);

function mostrarDatosPF() {

    tabla.innerHTML = '';
    let filtro = inputFiltro.value;

    if (!(typeof temas == 'string')) {
        for (let i = 0; i < temas.length; i++) {

            if (temas[i]['tema'].toLowerCase().includes(filtro.toLowerCase()) || temas[i]['descripcion'].toLowerCase().includes(filtro.toLowerCase())) {
                let fila = tabla.insertRow();

                fila.insertCell().innerHTML = temas[i]['tema'];
                fila.insertCell().innerHTML = temas[i]['descripcion'];
                let imagenTema = fila.insertCell();

                let imagen = document.createElement('img');
                imagen.classList.add('celdaImagen');
                if (temas[i]['file'] || !temas[i]['file'] instanceof HTMLElement) {
                    imagen.src = temas[i]['file'];
                } else {
                    imagen.src = 'img/placeHolderImagen.png';
                }
                imagenTema.appendChild(imagen);
            }
        }
    } else {
        tabla.innerHTML = "No se encontró material informativo registrado";
    }
};

mostrarDatosPF();

inputFiltro.addEventListener('keyup', mostrarDatosPF);