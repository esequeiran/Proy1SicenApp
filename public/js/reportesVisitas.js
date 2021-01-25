'use strict';

let idUsuario;

if (user.userType === 'padreFamilia') {
  window.location = 'loSentimos.html'
} else if (user.userType === 'superAdministrador') {
  idUsuario = IdGeneralCE;
}

// let visitas = obtenerVisita(user._id);
// let fechasVisitasUMT = visitas.fechas;


// function datos (){
//   for (let i = 0; i < visitas.length; i++) {
    
//   }
// };

// console.log('visitas.fechas: ' + visitas.fechas);
// console.log('FechasUMT: ' + fechasVisitasUMT);
// console.log('Fechas UTC: ' + fechasVisitas);

// new Morris.Line({

//   element: 'myfirstchart',


//   data: [
//     { Fecha: '12 de Abril de 2019', Visitas: visitas.fechas[0] },
//     { Fecha: '13 de Abril de 2019', Visitas: visitas.fechas[1] },
//     { Fecha: '14 de Abril de 2019', Visitas: visitas.fechas[2] },
//     { Fecha: '15 de Abril de 2019', Visitas: visitas.fechas[20] }
//   ],

//   xkey: 'Fecha',

//   ykeys: ['Visitas'],

//   labels: ['Visitas'],

//   resize: true,
//   lineWidth: 2,
//   lineColors: ['#F9AA33']
// });

// ********************************* FIN DEL GRAFICO *********************************
// let user = JSON.parse(sessionStorage.getItem("usuario"));
const tabla = document.querySelector('#tblStandard tbody');
const btnImprimir = document.querySelector('#btnImprimir');
const head = document.querySelector('#idHead');

const printHeader = document.querySelector('#printHeader');
const printDiv = document.querySelector('#printDiv');
// const printCssHide = document.querySelector('#printCssHide');
// const filtroPrint = document.querySelector('#filtroPrint');
const divImprimir = document.querySelector('#divImprimir');

if (user.userType == "superAdministrador" || user.userType == "padreFamilia") {
    window.location.href = 'loSentimos.html';
}

let idUsuarioCE = user._id;
let visitas = listarVisitasUser(idUsuarioCE);

let date = new Date();
let anno = date.getFullYear();
let monthDate = visitas[0]['fechas'];
let fechaEntera = monthDate[0];
fechaEntera = new Date;
let month = fechaEntera.getUTCMonth();

// mostrarDatos();

function mostrarDatos() {

    tabla.innerHTML = '';

    if (!(typeof visitas == 'string')) {
        for (let i = 0; i < visitas.length; i++) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = month+1;
            fila.insertCell().innerHTML = anno;
            fila.insertCell().innerHTML = visitas[0]['fechas'].length;
        }
    } else {
        tabla.innerHTML = "Este centro educativo no ha sido evaluado por ningún padre de familia";
    }
};

mostrarDatos();

let funcionImprimir = () =>{
    let link = document.createElement('link');
    
    link.rel = 'stylesheet';
    link.media = 'print';
    link.type = 'text/css';
    head.appendChild(link);

printHeader.style.display = 'none'; 
printDiv.style.display = 'none';
divImprimir.style.display = 'none';

   javascript:window.print();

printHeader.removeAttribute("style");
printDiv.removeAttribute("style");
divImprimir.removeAttribute("style");

   onClose: () => {
    window.location.href = 'reporteVisitas.html';
  }   
  

  
}

btnImprimir.addEventListener('click', funcionImprimir);