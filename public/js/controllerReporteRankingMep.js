// 'use strict';



const tabla = document.querySelector('#tblUsuarios tbody');
const inputFiltro = document.querySelector('#txtFiltro');

const buttonPrint = document.querySelector('#buttonPrint');
buttonPrint.addEventListener('click', imprimir)

function imprimir() {

    window.print();
}




if (user.userType == 'centroEducativo' || user.userType == 'padreFamilia') {
    window.location.href = 'loSentimos.html';
}


// // let usuarios = listarUsuariosCE();
let centrosEducativos = listarTodosCEEvaluados();
mostrarDatos();

inputFiltro.addEventListener('keyup', mostrarDatos);


console.log(centrosEducativos)

function mostrarDatos() {

  
    // let usuarios = listarUsuariosCE();

    let filtro = inputFiltro.value;
    tabla.innerHTML = '';

    for (let i = 0; i < centrosEducativos.length; i++) {

        if (centrosEducativos[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {
           
            let fila = tabla.insertRow();

            // let nombre = fila.insertCell();
            
            let nombre = fila.insertCell();
            // fila.insertCell().innerHTML = centrosEducativos[i]['nombre'];
            fila.insertCell().innerHTML = centrosEducativos[i]['tipo'];
            fila.insertCell().innerHTML = centrosEducativos[i]['estrellas'];
            fila.insertCell().innerHTML = centrosEducativos[i]['total']
            fila.insertCell().innerHTML = centrosEducativos[i]['anno']

            let cEElementa = document.createElement('a');
            cEElementa.innerHTML = centrosEducativos[i]['nombre'];
            // cEElementa.href =
            //     'profileInfoCE.html?idCE=' + usuarios[i]['_id'] + '&centroEducativo=' + usuarios[i]['centroEducativo'];
            cEElementa.href =
                'profileInfoCE.html?idCE=' + centrosEducativos[i]['idCE'] + '&nombre=' + centrosEducativos[i]['nombre'];
            cEElementa.value = centrosEducativos[i]['idCE'];
            nombre.appendChild(cEElementa);



    

        }
    }

}
