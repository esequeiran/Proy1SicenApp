'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));

const tabla = document.querySelector('#tblUsuarios tbody');
const inputFiltro = document.querySelector('#txtFiltro');

if (user.userType == 'centroEducativo' || user.userType == 'padreFamilia') {
    window.location.href = 'loSentimos.html';
}
// let usuarios = listarSolicitudes();
mostrarDatos();

inputFiltro.addEventListener('keyup', mostrarDatos);

function mostrarDatos() {

    let usuarios = listarSolicitudes();
    let filtro = inputFiltro.value;
    tabla.innerHTML = '';

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i]['centroEducativo'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            // fila.insertCell().innerHTML = usuarios[i]['centroEducativo'];
            let nombre = fila.insertCell();
            fila.insertCell().innerHTML = usuarios[i]['tipo'];
            fila.insertCell().innerHTML = usuarios[i]['provincia'];
            let celdaEstado = fila.insertCell();
            let celdaActualizar = fila.insertCell();


            let cEElementa = document.createElement('a');
            cEElementa.innerHTML = usuarios[i]['centroEducativo'];
            cEElementa.href =
                'profileInfoCE.html?idCE=' + usuarios[i]['_id'] + '&centroEducativo=' + usuarios[i]['centroEducativo'];
            cEElementa.value = usuarios[i]['_id'];
            nombre.appendChild(cEElementa);


            let inputEstado = document.createElement("input");
            inputEstado.value = usuarios[i]['estado'];
            celdaEstado.appendChild(inputEstado);

            let actualizar = document.createElement('a');
            actualizar.classList.add('aActualizarEstado');
            actualizar.innerHTML = '<i class="fas fa-edit"></i>';
            actualizar.href = `#`;
            celdaActualizar.appendChild(actualizar);

            
            let email = usuarios[i]['email'];
            let centroEducativo = usuarios[i]['centroEducativo'];
            let userType = usuarios[i]['userType'];
            let contrasenna = usuarios[i]['contrasenna'];
           
            let id = usuarios[i]['_id'];

            let validarCentroEducativo = () => {
                let error = false;

                if (inputEstado.value == 'Activo' || inputEstado.value == 'Inactivo' || inputEstado.value == 'Pendiente') {
                    inputEstado.classList.remove('errorInput');
                } else {
                    error = true;
                    inputEstado.classList.add('errorInput');
                }

                return error;
            }

            function obtenerDatosCentroEducativo() {

              

                if (!validarCentroEducativo()) {
                    let estado = inputEstado.value;
                    console.log(estado);
                    actualizarEstadoSolicitud(estado, id, centroEducativo, email, userType, contrasenna)

                } else {

                    swal.fire({
                        type: 'warning',
                        title: 'No se pudo actualizar el estado',
                        text: `El estado debe ser "Activo" - "Pendiente" - "Inactivo"`,

                    });
                }

            }

            actualizar.addEventListener('click', obtenerDatosCentroEducativo);


        }
    }
};

