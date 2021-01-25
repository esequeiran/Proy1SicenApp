'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));

const tabla = document.querySelector('#tblUsuarios tbody');
const inputFiltro = document.querySelector('#txtFiltro');
let ya = new Date();

if(user.userType == 'centroEducativo' || user.userType == 'padreFamilia' ){
    window.location.href = 'loSentimos.html';
}

let visitas = [];

let usuarios = listarUsuariosCE();

let visitasUsuarios = [];

let esIndefinido = (variable) =>{
    return  variable === undefined || variable === null;
};

let visitasEsteMes = [];

let agregarVisitas = () =>{
    let visitasUsuario;

    for (let i = 0; i < usuarios.length; i++){
        visitasUsuario = obtenerVisita(usuarios[i]._id);
        if (visitasUsuario === false) {
            visitasUsuario = Object.assign({}, {
                visitas: {idCE: usuarios[i]['_id'], fechas: []}
            });
            visitasUsuarios.push(visitasUsuario.visitas.fechas);

        } else {
            visitasUsuarios.push(visitasUsuario.fechas);
        }

        usuarios[i] = Object.assign(usuarios[i],  {visitas: visitasUsuario});
        // console.log(visitasUsuarios[i].length);
    }
    // console.log(visitasUsuarios);
};

agregarVisitas();

mostrarDatos();



inputFiltro.addEventListener('keyup', mostrarDatos);

function mostrarDatos() {


    let filtro = inputFiltro.value;
    tabla.innerHTML = '';
    // console.log(visitasUsuarios.length);
    for (let i = 0; i < usuarios.length; i++) {

        // console.log(usuarios[i].visitas);
        // let tmpVisitas = visitasUsuarios[i].length;
        // console.log(tmpVisitas);


        if (usuarios[i]['centroEducativo'].toLowerCase().includes(filtro.toLowerCase())
        ) {

            let fila = tabla.insertRow();

            // let cantidadVisitas;
            // if (esIndefinido(visitaCE)) cantidadVisitas = visitaCE.fechas.length;
            // else cantidadVisitas = 0;
            //
            // console.log(cantidadVisitas);
            let nombre = fila.insertCell();
            // nombre.textContent = usuarios[i]['centroEducativo'];
            let anio = fila.insertCell();
            anio.textContent = ya.getUTCMonth();
            let mes = fila.insertCell();
            mes.textContent = ya.getFullYear();
            let visitas = fila.insertCell();
            visitas.textContent = visitasUsuarios[i].length;


            let cEElementa = document.createElement('a');
            cEElementa.innerHTML= usuarios[i] ['centroEducativo'];
            cEElementa.href =
                'profileInfoCE.html?idCE=' + usuarios [i] ['_id'] + '&centroEducativo=' + usuarios [i] ['centroEducativo'];
            cEElementa.value =  usuarios [i] ['_id'];

            nombre.appendChild(cEElementa);
        }
    }
}