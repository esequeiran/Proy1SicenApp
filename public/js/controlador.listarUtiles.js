'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));

const selectNivel = document.querySelector("#selectNivel");
const tablaUtiles = document.querySelector("#tblUtilesPICE tbody");
const inputFiltroUtiles = document.querySelector("#txtFiltroUtiles");

if(user.userType == 'centroEducativo'){
    window.location.href = 'loSentimos.html';
}



let utiles = listarUtilesNivel(); 

let mostrarUtiles = () =>{  
     
    let nivel = selectNivel.value;
    if (validarSelectUtiles() == false){
        let utiles = listarUtilesNivel(nivel, IdGeneralCE);  
        let filtro = inputFiltroUtiles.value;  
        tablaUtiles.innerHTML = '';
        
        if(utiles !== "No se encontraron útiles escolares registrados"){
            for(let i=0; i<utiles.length; i++){
                if(utiles[i]['nombreLista'].toLowerCase().includes(filtro.toLowerCase()) || utiles[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
                    let fila = tablaUtiles.insertRow();
                    fila.insertCell().innerHTML = utiles [i]  ['nombreLista'];
                    fila.insertCell().innerHTML = utiles [i]  ['nombre'];
                    fila.insertCell().innerHTML = utiles [i]  ['descripcion'];
                    fila.insertCell().innerHTML = utiles [i]  ['cantidad'];
                }      
            }
        }else{                
            tablaUtiles.innerHTML = 'No existen útiles registrados para este nivel';  
        }  
    }
   
};

let validarSelectUtiles = () => {
    let error = false;

    if(selectNivel.value == ''){
        error = true;
        selectNivel.classList.add('errorSelect');
    }
    else{
        selectNivel.classList.remove('errorSelect');
    }

    return error;
}

selectNivel.addEventListener('change', mostrarUtiles);
inputFiltroUtiles.addEventListener('keyup', mostrarUtiles);




