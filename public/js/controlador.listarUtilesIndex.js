'use strict';


const selectNivel = document.querySelector("#selectNivel");
const tabla = document.querySelector("#tblUtiles tbody");
const inputFiltro = document.querySelector("#txtFiltro");

let mostrarUtiles = () =>{
    let nivel = selectNivel.value;
    let idSA = "5c9947ace0fb7a30848f605a";

    if (validar() == false){
        let utiles = listarUtilesNivel(nivel, idSA);
        let filtro = inputFiltro.value;
        tabla.innerHTML = '';
        
        if(utiles !== "No se encontraron útiles escolares registrados"){
            for(let i=0; i<utiles.length; i++){
                if(utiles[i]['nombreLista'].toLowerCase().includes(filtro.toLowerCase()) || utiles[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
                    let fila = tabla.insertRow();
                    fila.insertCell().innerHTML = utiles [i]  ['nombreLista'];
                    fila.insertCell().innerHTML = utiles [i]  ['nombre'];
                    fila.insertCell().innerHTML = utiles [i]  ['descripcion'];
                    fila.insertCell().innerHTML = utiles [i]  ['cantidad'];
                }      
            }
        }else{                
            tabla.innerHTML = 'No existen útiles registrados para este nivel';  
        }  
    }
    
  
};

let validar = () => {
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
inputFiltro.addEventListener('keyup', mostrarUtiles);





