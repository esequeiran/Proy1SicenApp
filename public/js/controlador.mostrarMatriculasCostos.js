'use strict';

const inputBuscar = document.querySelector('#inputBuscar');
 let user = JSON.parse(sessionStorage.getItem("usuario"));
let idUsuarioCE = user._id;

/**************************************************************************************************************/

if (user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
} else {

}

/**************************************************************************************************************/

let matriculas = listarMatriculas(idUsuarioCE);
inputBuscar.addEventListener('keyup', mostrarMatriculas);

/**************************************************************************************************************/

function mostrarMatriculas() {

    const tabla = document.querySelector('#tblMatriculas tbody');
    const filtro = inputBuscar.value;

    tabla.innerHTML = '';
    for (let i = 0; i < matriculas.length; i++) {

        if (matriculas[i]['matricula'].toString().toLowerCase().includes(filtro.toLowerCase())) {

            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = matriculas[i]['matricula'];
            fila.insertCell().innerHTML = matriculas[i]['mensualidad'];
            fila.insertCell().innerHTML = matriculas[i]['moneda'];

            let celdaConfiguracion = fila.insertCell();
            let celdaEliminar = fila.insertCell();

            let botonEditar = document.createElement('a');
            botonEditar.innerHTML = '<i class ="fas fa-edit"></i>';
            botonEditar.href = `editarMatriculas.html?idMatricula=${matriculas[i]['_id']}`;
            botonEditar.style.color = '#2c3e50';
            celdaConfiguracion.appendChild(botonEditar);
            let botonEliminar = document.createElement('button');
            botonEliminar.innerHTML = '<i class ="fas fa-trash-alt"></i>';
            botonEliminar.id = 'btnEliminar';
            botonEliminar.style.background = 'none';
            botonEliminar.style.border = 'none';
            botonEliminar.addEventListener('click', eliminar => {
                eliminarMatriculas(matriculas[i]['_id']);
            });
            celdaEliminar.appendChild(botonEliminar);
        }

    }
}

mostrarMatriculas();

inputBuscar.addEventListener('keyup', mostrarMatriculas);

/**************************************************************************************************************/

let eliminarMatriculas = (p_id) => {
    Swal.fire({
        title: '¿Está seguro que desea eliminar la matrícula?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {
            eliminarMatricula(p_id);
        } else {
        }

    })

}