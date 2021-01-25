'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));
const tabla = document.querySelector('#tblReportePF tbody');
const head = document.querySelector('#idHead');
const btnImprimir = document.querySelector('#btnImprimir');
const printHeader = document.querySelector('#printHeader');
const printDiv = document.querySelector('#printDiv');
// const printCssHide = document.querySelector('#printCssHide');
// const filtroPrint = document.querySelector('#filtroPrint');
const divImprimir = document.querySelector('#divImprimir');

let idUsuarioCE = user._id;
let date = new Date();
let anno = date.getFullYear();

if (user.userType == "superAdministrador" || user.userType == "padreFamilia") {
    window.location.href = 'loSentimos.html';
}

let ranking = listarEvaluacionUsuario(idUsuarioCE);
// mostrarDatos();

function mostrarDatos() {

    tabla.innerHTML = '';

    if (!(typeof ranking == 'string')) {
        for (let i = 0; i < ranking.length; i++) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = ranking[i]['nameCE'];
            fila.insertCell().innerHTML = ranking[i]['stars'];
            fila.insertCell().innerHTML = ranking[i]['starsProm'];
            fila.insertCell().innerHTML = anno;
        }
    } else {
        tabla.innerHTML = "Este centro educativo no ha sido evaluado por ningún padre de familia";
    }
};

mostrarDatos();

let funcionImprimir = () => {
    let link = document.createElement('link');

    link.rel = 'stylesheet';
    link.media = 'print';
    link.type = 'text/css';
    head.appendChild(link);

    printHeader.style.display = 'none';
    printDiv.style.display = 'none';
    // printCssHide.style.display = 'none';
    // filtroPrint.style.display = 'none';
    divImprimir.style.display = 'none';

    javascript: window.print();

    printHeader.removeAttribute("style");
    printDiv.removeAttribute("style");
    // printCssHide.removeAttribute("style");
    // filtroPrint.removeAttribute("style");
    divImprimir.removeAttribute("style");

    onClose: () => {
        window.location.href = 'reporteRankingPF.html';
    }



}

btnImprimir.addEventListener('click', funcionImprimir);
