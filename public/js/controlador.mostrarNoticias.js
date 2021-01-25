'use strict';

const buscadorcito = document.querySelector('#inputBuscar');
// let user = JSON.parse(sessionStorage.getItem("usuario"));
let idUsuarioCE = user._id;

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

            let celdaConfiguracion = fila.insertCell();
            let celdaEliminar = fila.insertCell();

            let botonEditar = document.createElement('a');
            botonEditar.innerHTML = '<i class ="fas fa-edit"></i>';
            botonEditar.href = `editarNoticias.html?idNoticia=${noticias[i]['_id']}`;
            botonEditar.style.color = '#2c3e50';
            celdaConfiguracion.appendChild(botonEditar);
            let botonEliminar = document.createElement('button');
            botonEliminar.innerHTML = '<i class ="fas fa-trash-alt"></i>';
            botonEliminar.id = 'btnEliminar';
            botonEliminar.style.background = 'none';
            botonEliminar.style.border = 'none';
            botonEliminar.addEventListener('click', eliminar => {
                eliminarNoticias(noticias[i]['_id']);
            });
            celdaEliminar.appendChild(botonEliminar);
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