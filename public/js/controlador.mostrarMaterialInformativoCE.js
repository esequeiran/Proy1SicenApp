'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));
const tabla = document.querySelector('#tblMaterialInformativo tbody');
const inputFiltro = document.querySelector('#txtFiltro');

let idUsuarioCE = user._id;

if (user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
} else {

}


// if (user.userType == "superAdministrador") {
//     window.location.href = 'loSentimos.html';
// } else {

// }

let temas = listarMaterialUsuario(idUsuarioCE);
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

                let aImagen = document.createElement('a');
                aImagen.href = window.location;
                aImagen.download = imagen.src + '.jpeg';

                imagenTema.appendChild(aImagen ,imagen);
                aImagen.appendChild(imagen);

                let celdaConfiguracion = fila.insertCell();
                let celdaEliminar = fila.insertCell();

                let botonEditar = document.createElement('a');
                botonEditar.innerHTML = '<i class="fas fa-edit"></i>';
                botonEditar.href = `editarMaterialInformativo.html?idMaterial=${temas[i]['_id']}`;

                celdaConfiguracion.appendChild(botonEditar);
                let botonEliminar = document.createElement('button');
                botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
                botonEditar.style.color = '#2c3e50';
                botonEliminar.id = 'btnEliminar';

                botonEliminar.classList.add('btnEliminar');
                // botonEliminar.textContent = '<i class="fas fa-trash"></i>';

                botonEliminar.addEventListener('click', eliminar => {
                    eliminarMaterialControlador(temas[i]['_id']);
                });
                celdaEliminar.appendChild(botonEliminar);
            }
        }
    } else {
        tabla.innerHTML = "No se encontró material informativo registrado";
    }
};

mostrarDatosPF();

inputFiltro.addEventListener('keyup', mostrarDatosPF);

let eliminarMaterialControlador = (p_id) => {
    Swal.fire({
        title: '¿Está seguro que desea eliminar el material informativo?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {
            eliminarMaterial(p_id);
        } else {
        }

    })

}