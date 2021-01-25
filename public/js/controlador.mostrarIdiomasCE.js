'use strict';

const buscador = document.querySelector('#inputBuscarCinco');
// let user = JSON.parse(sessionStorage.getItem("usuario"));
// let idUsuarioCE = user._id;

/**************************************************************************************************************/

if (user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
} else {

}

/**************************************************************************************************************/

let idiomas = listarIdiomas(idUsuarioCE); buscador.addEventListener('keyup', mostrarIdiomas);

/**************************************************************************************************************/

function mostrarIdiomas() {

    const tabla = document.querySelector('#tblIdiomas tbody');
    const filtro = buscador.value;

    tabla.innerHTML = '';
    for (let i = 0; i < idiomas.length; i++) {

        if (idiomas[i]['idiomas'].toLowerCase().includes(filtro.toLowerCase())) {

            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = idiomas[i]['idiomas'];
        }

    }
}

mostrarIdiomas();
buscador.addEventListener('keyup', mostrarIdiomas);

/**************************************************************************************************************/

let eliminarIdiomas = (p_id) => {
    Swal.fire({
        title: '¿Está seguro que desea eliminar el idioma?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {
            eliminarIdioma(p_id);
        } else {
        }

    })

}