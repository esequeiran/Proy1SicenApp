'use strict';

const tabla = document.querySelector('#tableBitacora');

if (user.userType == 'centroEducativo' || user.userType == 'padreFamilia') {
    window.location.href = 'loSentimos.html';
}

let mostrarDatos = () => {


    let bitacoras = listarBitacora();
console.log(bitacoras)



    for (let i = 0; i< bitacoras.length; i++) {
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = bitacoras[i]['usuario'];
        fila.insertCell().innerHTML = bitacoras[i]['tipoDeMovimiento'];
        fila.insertCell().innerHTML = bitacoras[i]['fecha'];
   
    };

};



mostrarDatos();


//No se encontraron movimientos