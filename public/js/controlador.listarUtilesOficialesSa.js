'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));
const selectNivel = document.querySelector("#selectNivel");
const tabla = document.querySelector("#tblUtiles tbody");
const inputFiltro = document.querySelector("#txtFiltro");
const tablaNombreLista = document.querySelector("#tablaNombreListaU tbody");
const radioButtonTodos = document.querySelector('#tablaNombreListaU tbody tr td');
// const divDelBoton = document.querySelector('#idDivBoton');
const divDelBotonActualizar = document.querySelector('#idDivBotonActualizar');
const  IdUs = user._id;
let nombreUsuario = user.centroEducativo;
if(user.userType == 'padreFamilia' || user.userType == 'centroEducativo'){
    window.location.href = 'loSentimos.html';
}
let mostrarListas = () => {
    let nivel = selectNivel.value;
    
    document.querySelector('#tblUtiles').style.display = 'none';
    // if (validar() == false){
        let utiles = listarUtilesNivel(nivel, IdUs);
        
        tabla.innerHTML = '';
        tablaNombreLista.innerHTML = '';
        
        if(utiles !== "No se encontraron útiles escolares registrados"){
            let aux = '';
            for(let i=0; i<utiles.length; i++){
                //listar el nombre de la lista                
                if(utiles[i]['nombreLista'] != aux){
                    let fila = tablaNombreLista.insertRow();
                    fila.insertCell().innerHTML = utiles[i]['nombreLista'];                
                    let celdaRadioButton = fila.insertCell();
                    let celdaEliminarLista = fila.insertCell();
    
                    let radioButton = document.createElement('input');
                    radioButton.type = 'radio';
                    radioButton.name = 'radiobNombreLista';
                    radioButton.id = 'radiobtn'+i;
                    radioButton.value = utiles[i]['nombreLista'];
                    radioButton.addEventListener('change', mandarFiltro=>{
                        mostrarUtiles(utiles[i]['nombreLista']);                 
                    
                    });

                   

                    let botonEliminarLaLista = document.createElement('button');
                    botonEliminarLaLista.type = 'button';
                    botonEliminarLaLista.id = 'btnEliminarLista';
                    botonEliminarLaLista.innerHTML = '<i class="fas fa-trash-alt"></i>';
                    botonEliminarLaLista.addEventListener('click', eliminar =>{
                        eliminarListaControlador(utiles[i]['nombreLista']);}); 
                    celdaEliminarLista.appendChild(botonEliminarLaLista);
                    celdaRadioButton.appendChild(radioButton);
                    aux = utiles[i]['nombreLista'];
                }                 
               
            }
           
        }else{                
            tablaNombreLista.innerHTML = 'No existen útiles registrados para este nivel';  
        }  
    // }
    
}
mostrarListas();

let mostrarUtiles = (pfiltro) =>{
    let nivel = selectNivel.value;
    
    let contador = 0;
        let utiles = listarUtilesNivel(nivel, IdUs);        
        tabla.innerHTML = '';        

        document.querySelector('#tablaNombreListaU').style.display = 'none';
        document.querySelector('#tblUtiles').style.display = 'table';

        for(let a = 0; a<utiles.length; a++){
            if(utiles[a]['nombreLista'].toLowerCase().includes(pfiltro.toLowerCase())){
                let fila = tabla.insertRow();
                fila.insertCell().innerHTML = utiles [a]  ['nombreLista'];
                fila.insertCell().innerHTML = utiles [a]  ['nombre'];
                fila.insertCell().innerHTML = utiles [a]  ['descripcion'];
                let campoCantidadCell  = fila.insertCell();                
                let celdaConfiguracion = fila.insertCell();
                let celdaEliminar = fila.insertCell();
                
                let inputCantidad = document.createElement('input');
                inputCantidad.id = "inpCant" + contador;
                inputCantidad.type = 'Number';
                inputCantidad.min = "0";
                inputCantidad.value = utiles [a]  ['cantidad']; 
                inputCantidad.disabled = 'disabled';
               
                campoCantidadCell.appendChild(inputCantidad);

                

                let botonEditar = document.createElement('a');
                botonEditar.innerHTML = '<i class="fas fa-edit"></i>';
                
                // botonEditar.href = `actualizarListaUtiles.html?idLista=${utiles[a]['nombreLista']}&nivel=${utiles[a]['nivel']}`;

                botonEditar.addEventListener('click', actualizar =>{
                    actualizarUtilIndividual(utiles[a]['_id'], inputCantidad.id)                    
                }) 
                
                celdaConfiguracion.appendChild(botonEditar);
                 
                let botonEliminar = document.createElement('button');
                botonEliminar.type = 'button';                  
                botonEliminar.id = 'btnEliminarLista';              
                botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
                botonEliminar.addEventListener('click', eliminar =>{
                    eliminarUtilControlador(utiles[a]['_id'])}) ;
                celdaEliminar.appendChild(botonEliminar);
                    contador = contador + 1;
            }      
        }
     
        
    
}//fin funcion

  




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



let validarRadio = () =>{
    let error = false;
    let listaSeleccionada = document.querySelector('#radioButtonTodos input[type=radio]:checked');
    if(listaSeleccionada == null){
        error = true;
    }else{
        error = false;
    }
    return error;

}


let eliminarListaControlador=(pnombreLista1)=>{
    console.log(pnombreLista1);
    Swal.fire({
        title: '¿Está seguro que desea eliminar la lista escolar?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {    
            eliminarLista(pnombreLista1, nombreUsuario);          
        } else {    
        }      
    }) 
}


let actualizarUtilIndividual = (_id, idCampoCantidad) =>{
    let listaUtiles = buscarUtilIndividual(_id);    
    let mostrarDatosListaUtile = () =>{          
      document.querySelector(`#${idCampoCantidad}`).value = listaUtiles [0]  ['cantidad'];
      document.querySelector(`#${idCampoCantidad}`).disabled = false;
    };
    let valorCantidad = listaUtiles [0]  ['cantidad'];
    if(listaUtiles){
        mostrarDatosListaUtile();
    }   
    console.log(idCampoCantidad);
    let botonActualizar = document.createElement('button');
    botonActualizar.type = 'button';
    botonActualizar.id = 'botonActualizar';
    botonActualizar.textContent = 'Actualizar';
    botonActualizar.addEventListener('click', funcionLlamarFunciones=>{        
        obtenerDatosArticulo(_id, idCampoCantidad, valorCantidad); 
        
    }); 
    divDelBotonActualizar.appendChild(botonActualizar);
    
}

let obtenerDatosArticulo = (p_id, pidCampoCantidad, pvalorCantidad) =>{
    if(validarCampoCantidad(pidCampoCantidad, pvalorCantidad) == false){
        let cantidad = document.querySelector(`#${pidCampoCantidad}`).value;
        
        Swal.fire({
            title: '¿Está seguro que desea actualizar el útil escolar?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
          }).then((result) => {
            if (result.value) {
                actualizarUtil(cantidad, p_id, nombreUsuario);
            }
          })
    }else{
        swal.fire({
            type: 'warning',
            title: 'El util no se actualizó',
            text: 'Por favor revise los campos resaltados'
        });
    }  
};



let eliminarUtilControlador=(p_id)=>{
    
    Swal.fire({
        title: '¿Está seguro que desea eliminar la el útil escolar de la lista?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {    
            eliminarUtil(p_id, nombreUsuario);          
        } else {    
        }
      
    })
    
    
}



selectNivel.addEventListener('change', mostrarListas);

let validarCampoCantidad = (idDelCampoCantidad, pvalorCantidad) => {
    let error = false;
     let inputCantAuxiliar = document.querySelector(`#${idDelCampoCantidad}`);
                
        if (inputCantAuxiliar.value == '' || inputCantAuxiliar.value == "0" || inputCantAuxiliar == pvalorCantidad) {  
            inputCantAuxiliar.style.border = "2px solid #ED4C67";      
       error = true;
    }else{
        error = false;
    }     
     
  return error;
};









