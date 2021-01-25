'use strict';

const inputFiltrar = document.querySelector('#inputBuscar')
 //let user = JSON.parse(sessionStorage.getItem("usuario"));
 let idUsuarioCE = user._id;

/**************************************************************************************************************/

if (user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
} else {

}

/**************************************************************************************************************/

let becas = listarBecas(idUsuarioCE);
inputFiltrar.addEventListener('keyup', mostrarBecas);

/**************************************************************************************************************/

function mostrarBecas() {

    const tabla = document.querySelector('#tblBecas tbody');
    const filtro = inputFiltrar.value;

    tabla.innerHTML = '';
    for (let i = 0; i < becas.length; i++) {

        if (becas[i]['nombreBeca'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = becas[i]['nombreBeca'];
            fila.insertCell().innerHTML = becas[i]['descripcionBeca'];

            let celdaConfiguracion = fila.insertCell();
            let celdaEliminar = fila.insertCell();

            let botonEditar = document.createElement('a');
            botonEditar.innerHTML = '<i class ="fas fa-edit"></i>';
            botonEditar.href = `editarBecas.html?idBeca=${becas[i]['_id']}`;
            botonEditar.style.color = '#2c3e50';

            celdaConfiguracion.appendChild(botonEditar);
            let botonEliminar = document.createElement('button');
            botonEliminar.innerHTML = '<i class ="fas fa-trash-alt"></i>';
            botonEliminar.style.color = '#2c3e50';
            botonEliminar.style.background = 'none';
            botonEliminar.style.border = 'none';
            botonEliminar.id = 'btnEliminar';
            botonEliminar.addEventListener('click', eliminar => {
                eliminarBecas(becas[i]['_id']);
            });
            celdaEliminar.appendChild(botonEliminar);
        }
    }
}

mostrarBecas();

inputFiltrar.addEventListener('keyup', mostrarBecas);

/**************************************************************************************************************/

let eliminarBecas = (p_id) => {
    Swal.fire({
        title: '¿Está seguro que desea eliminar la beca?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {
            eliminarBeca(p_id);
        } else {
        }

    })

}