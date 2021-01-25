'use strict';

const inputFiltrar = document.querySelector('#txtFiltrar');

let userActual = JSON.parse(sessionStorage.getItem('usuario'));

// const opcionMisCitas = document.querySelector('#opcionMisCitas');

if(userActual.userType === 'superAdministrador'){
    if (location.pathname.split("/").slice(-1) !== 'loSentimos.html')  setTimeout(location.href='loSentimos.html', 0);
}

if(userActual.userType === 'padreFamilia'){
    if (location.pathname.split("/").slice(-1) !== 'misCitasPF.html')  setTimeout(location.href='misCitasPF.html', 0);
}

let nombreDelCentroEducativo = userActual.centroEducativo;

let listaCitas = getCitasCE(nombreDelCentroEducativo);

insertarMensaje(`No se encontró ninguna cita agendada con el centro educativo ${nombreDelCentroEducativo}`);

mostrarCitas();

inputFiltrar.addEventListener('keyup', mostrarCitas);

function mostrarCitas() {

    let tabla = document.querySelector('#tblCitas tbody');

    let busqueda = inputFiltrar.value;

    tabla.innerHTML = '';

    if (listaCitas.length > 0 && !(typeof listaCitas == 'string')){

        if (document.getElementById('error')) eliminarMensaje();

        for (let i = 0; i < listaCitas.length; i++) {
            if (listaCitas[i]['nombrePadreFamilia'].toLowerCase().includes(busqueda.toLowerCase())) {

                if (document.getElementById('error')) eliminarMensaje();

                let fila = tabla.insertRow();

                let fechaHora = fila.insertCell();

                fechaHora.classList.add('fechaHora');

                fechaHora.innerHTML = moment(listaCitas[i]['fechaHora']).format('DD/mm/YY hh:mm a');

                let nombrePF = fila.insertCell();

                nombrePF.classList.add('padre');

                nombrePF.innerHTML = listaCitas[i]['nombrePadreFamilia'];

                let correoPF = fila.insertCell();

                correoPF.classList.add('padre');

                correoPF.innerHTML = listaCitas[i]['correoPadreFamilia'];
            } else {
                if (document.getElementById('error')) eliminarMensaje();
                insertarMensaje(`No se encontró ninguna cita agendada con ${busqueda}`);
            }
        }
    } else {
        if (document.getElementById('error')) eliminarMensaje();
        insertarMensaje(` No se encontró ninguna cita agendada con el centro educativo ${nombreDelCentroEducativo}`);
    }
}


function eliminarMensaje() {
    document.querySelector('.contenido').removeChild(document.getElementById('error'));
}

function insertarMensaje(mensaje) {
    document.getElementById('tblCitas').insertAdjacentHTML('afterend', `<p id="error" id="mensajito"> ${mensaje}</p>`);
}