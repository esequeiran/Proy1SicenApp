'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));

const tabla = document.querySelector("#tblArticulos tbody");
const inputFiltro = document.querySelector('#txtFiltro');
const IdGeneralCE = user._id;
let nombreUsuario = user.centroEducativo;

if(user.userType == 'padreFamilia'){
    window.location.href = 'loSentimos.html';
}

// let articulos = listarArticulos(); 

let mostrarArticulos = () =>{  
       
        let articulos = listarArticulos(IdGeneralCE);
        
        let filtro = inputFiltro.value;                
        tabla.innerHTML = '';

    if (articulos !== "No se encontraron artículos escolares registrados") {
        
        for (let i = 0; i < articulos.length; i++) {
            if(articulos[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {
                

                let fila = tabla.insertRow();
                fila.insertCell().innerHTML = articulos[i]['nombre'];
                fila.insertCell().innerHTML = articulos[i]['descripcion'];
                let celdaConfiguracion = fila.insertCell();
                let celdaEliminar = fila.insertCell();
                let botonEditar = document.createElement('a');
                // botonEditar.textContent = 'Editar';
                botonEditar.innerHTML = '<i class="fas fa-edit"></i>';
                botonEditar.href = `actualizarArticulos.html?idArticulo=${articulos[i]['_id']}`
                celdaConfiguracion.appendChild(botonEditar);
                let botonEliminar = document.createElement('button');  
                // botonEliminar.textContent = 'Eliminar';
                botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';    
                botonEliminar.id = 'btnEliminar'; 
                botonEliminar.classList.add('botonEliminarArticulos');
                      
                botonEliminar.addEventListener('click', eliminar =>{
                    eliminarArticuloControlador(articulos[i]['_id']);
                });
                
                celdaEliminar.appendChild(botonEliminar);
            }

        };

    }else{
        tabla.innerHTML = "No se encontraron artículos escolares registrados";
    }
          
};


mostrarArticulos();

inputFiltro.addEventListener('keyup', mostrarArticulos);

let eliminarArticuloControlador=(p_id)=>{
    Swal.fire({
        title: '¿Está seguro que desea eliminar el artículo escolar?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {    
            eliminarArticulo(p_id, nombreUsuario);          
        } else {    
        }
      
    })
    
}







