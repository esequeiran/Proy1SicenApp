'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));

const tabla = document.querySelector('#tblUsuarios tbody');
const inputFiltro = document.querySelector('#txtFiltro');


// let usuarios = listarUsuariosPF();
mostrarDatos();

inputFiltro.addEventListener('keyup', mostrarDatos);

function mostrarDatos() {

    listarMisFavoritos(user.email, function (usuarios) {

        let filtro = inputFiltro.value;
        tabla.innerHTML = '';

        for (let i = 0; i < usuarios.length; i++) {

            if (usuarios[i]['centroEducativo'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();



            let nombre = fila.insertCell();
            let celdaDesfavoritar = fila.insertCell();

            let remover = document.createElement('a');
            remover.innerHTML = '<i class="fas fa-trash-alt"></i>';
            remover.href = `#`;
            celdaDesfavoritar.appendChild(remover);


            let cEElementa = document.createElement('a');
            cEElementa.innerHTML = usuarios[i]['centroEducativo'];
            cEElementa.href = 'profileInfoCE.html?idCE=' + usuarios[i]['_id'] + '&centroEducativo=' + usuarios[i]['centroEducativo'];
            cEElementa.value = usuarios[i]['_id'];
            nombre.appendChild(cEElementa);


            let emailCE = usuarios[i]['email'];

            function removerFavorito() {

                Swal.fire({
                    title: '¿Está seguro que desea eliminar al centro de la lista?',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#dddddd',
                    confirmButtonText: 'Sí, eliminar',
                  
                        
                    
                }).then(result => {
                    if (result.value) {
                        desfavoritar(user.email, emailCE);
                       
                    } else {

                    }
                });


            }

            remover.addEventListener('click', function () {
                removerFavorito();

            }

            )



            }
        }
    });
}






