'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));

const tablaArticulos = document.querySelector("#tblArticulos tbody");
const inputFiltroArticulos = document.querySelector('#txtFiltroArticulos');
// const IdGeneralCE = user._id;


let articulos = listarArticulos(); 

let mostrarArticulos = () =>{  
       
        let articulos = listarArticulos(IdGeneralCE);
        
        let filtro = inputFiltroArticulos.value;                
        tablaArticulos.innerHTML = '';

    if (articulos !== "No se encontraron artículos escolares registrados") {
        
        for (let i = 0; i < articulos.length; i++) {
            if(articulos[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {
                
                let fila = tablaArticulos.insertRow();
                fila.insertCell().innerHTML = articulos[i]['nombre'];
                fila.insertCell().innerHTML = articulos[i]['descripcion'];                
            }
        };

    }else{
        tablaArticulos.innerHTML = "No se encontraron artículos escolares registrados";
    }
          
};

mostrarArticulos();

inputFiltroArticulos.addEventListener('keyup', mostrarArticulos);









