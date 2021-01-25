'use strict';

const idPropio = user._id;
const tablaEvaluacion = document.querySelector('#tblRankingCeMEP tbody');
const botonImprimir = document.querySelector('#botonImprimir');
const head = document.querySelector('#idHead');
const printHeader = document.querySelector('#printHeader');
const printDiv = document.querySelector('#printDiv');
// const printCssHide = document.querySelector('#printCssHide');
// const filtroPrint = document.querySelector('#filtroPrint');
const divImprimir = document.querySelector('#divImprimir');
    

let misDatos = listarMiEvaluacion(idPropio);
console.log(misDatos);

let mostrarMisDatos = () =>{

    for(let a = 0; a<misDatos.length; a++){       
                
            let fila = tablaEvaluacion.insertRow();
            fila.insertCell().innerHTML = misDatos[a]['nombre'];
            fila.insertCell().innerHTML = misDatos[a]['total'];
            fila.insertCell().innerHTML = misDatos[a]['estrellas'];
            fila.insertCell().innerHTML = misDatos[a]['anno'];
           
    }       
    
}

if(misDatos != 'No se encontraron evaluaciones para el centro educativo'){
    mostrarMisDatos();
}else{
    tablaEvaluacion.innerHTML = "No se encontraron evaluaciones";
    tablaEvaluacion.style.fontSize = '25px';
}


let funcionImprimir = () =>{
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

   javascript:window.print();

printHeader.removeAttribute("style");
printDiv.removeAttribute("style");
// printCssHide.removeAttribute("style");
// filtroPrint.removeAttribute("style");
divImprimir.removeAttribute("style");

   onClose: () => {
    window.location.href = 'rankingStarsMEPSolicitudCE.html';
  }   
  

  
}

botonImprimir.addEventListener('click', funcionImprimir);



