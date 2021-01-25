'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));
const conectado = sessionStorage.getItem('conectado');
const tipo_usuario = user.userType;
const cantonUsuario =user.canton;

if(user.userType == 'centroEducativo' || user.userType == 'superAdministrador'){
    window.location.href = 'loSentimos.html';
}

        // let centrosEUbicacion = listarCEUbicacion(cantonUsuario);
// for (let i = 0; i < centrosEUbicacion.length; i++) {

    const tablaCEUbicacion = document.querySelector('#tblCentrosCercanos tbody');
    const inputFiltro = document.querySelector('#txtFiltro');

    mostrarcentrosEUbicacion();

    inputFiltro.addEventListener('keyup', mostrarcentrosEUbicacion);
    function mostrarcentrosEUbicacion() {
        let centrosEUbicacion = listarCEUbicacion(cantonUsuario);

        let filtro = inputFiltro.value;
        tablaCEUbicacion.innerHTML = '';
        // centrosEUbicacion [i] ['canton']

        for (let i = 0; i < centrosEUbicacion.length; i++) {
            // if (cantonUsuario == centrosEUbicacion[i]['canton']) {
                if (centrosEUbicacion[i]['centroEducativo'].toLowerCase().includes(filtro.toLowerCase())) {
                    let fila = tablaCEUbicacion.insertRow();
                    let centroEducativo = fila.insertCell();
                    
                    fila.insertCell().innerHTML = centrosEUbicacion[i]['canton'];
                    let imagenCE = fila.insertCell();

                    let cEElementa = document.createElement('a');
                    cEElementa.innerHTML= centrosEUbicacion[i] ['centroEducativo'];
                    cEElementa.href =
                    'profileInfoCE.html?idCE=' + centrosEUbicacion [i] ['_id'] + '&centroEducativo=' + centrosEUbicacion [i] ['centroEducativo'];
                    cEElementa.value = centrosEUbicacion [i] ['_id'];            
                    centroEducativo.appendChild(cEElementa);

                    let imagen = document.createElement('img');
                    imagen.classList.add('celdaImagen');
                    if (centrosEUbicacion[i]['imagen']) {
                        imagen.src = centrosEUbicacion[i]['imagen'];
                    } else {
                        imagen.src = 'img/userPlaceholder.png';
                    }
                    imagenCE.appendChild(imagen);



                    
            // fila.insertCell().innerHTML = usuarios[i]['centroEducativo'];
        

                // }
            };
        }

    }
// }   
      



