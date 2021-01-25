'use strict';

let idCE;

if (user.userType === 'centroEducativo') {
    idCE = user._id;
} else {
    idCE = IdGeneralCE;
}

let visita = obtenerVisita(idCE);

// let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
let fechaActual  = new Date();
// fechaActual = new Date(fechaActual.getFullYear() + '-' + fechaActual.getMonth() + '-' + fechaActual.getDate());

let zeroFill = (numero) =>{
    if (numero < 10){
        return "0" + numero;
    } else {
        return numero;
    }
};

fechaActual =
    fechaActual.getFullYear() + "-" +
    zeroFill(fechaActual.getMonth()) + "-" +
    zeroFill(fechaActual.getDate()) +
    "T" +  zeroFill(fechaActual.getHours()) + ":" +
    zeroFill(fechaActual.getMinutes()) + ":" +
    "00.000Z";

console.log(fechaActual);
let contadorVisitas = () => {

    let fechas = [];
    fechas.push(fechaActual);

    if (visita === false) {

        registrarVisita(fechas, idCE);
        // modificarFechaVisita(visita._id, fechas, idCE);
    } else {
        // let fechas = [];
        visita.fechas.push(fechaActual);
        // console.log(visita.fechas);
        modificarFechaVisita(visita);
    }
   // console.log(obtenerVisita(idCE).fechas);
};

window.onload = () => {
    contadorVisitas();
};



