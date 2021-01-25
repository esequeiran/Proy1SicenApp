'use strict';

const buscadorcito = document.querySelector('#inputBuscarUno');
// let user = JSON.parse(sessionStorage.getItem("usuario"));
// let idUsuarioCE = user._id;

/**************************************************************************************************************/

if (user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
} else {

}

/**************************************************************************************************************/

let noticias = listarNoticias(idUsuarioCE);
buscadorcito.addEventListener('keyup', mostrarNoticias);

/**************************************************************************************************************/

function mostrarNoticias() {

    const tabla = document.querySelector('#tblNoticias tbody');
    const filtro = buscadorcito.value;

    tabla.innerHTML = '';
    for (let i = 0; i < noticias.length; i++) {

        if (noticias[i]['tituloNoticia'].toLowerCase().includes(filtro.toLowerCase())) {

            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = noticias[i]['tituloNoticia'];
            fila.insertCell().innerHTML = noticias[i]['fechaNoticia'];
            fila.insertCell().innerHTML = noticias[i]['registrarNoticia'];
        }

    }
}
mostrarNoticias();

buscadorcito.addEventListener('keyup', mostrarNoticias);

/**************************************************************************************************************/

let eliminarNoticias = (p_id) => {
    Swal.fire({
        title: '¿Está seguro que desea eliminar la noticia?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {
            eliminarNoticia(p_id);
        } else {
        }

    })

}