'use strict'
// let user = JSON.parse(sessionStorage.getItem("usuario"));
const tablaCriterios = document.querySelector('#tblCriteriosMEP tbody');
let nombreUsuario = user.centroEducativo;
if(user.userType == 'centroEducativo' || user.userType == 'padreFamilia'){
    window.location.href = 'loSentimos.html';
}

let mostrarCriterios = () => {
    let criterios = listarCriterios();
    
    for(let i=0; i<criterios.length; i++){
        let fila = tablaCriterios.insertRow();
        fila.insertCell().innerHTML = criterios [i] ['criterio'];
        fila.insertCell().innerHTML = criterios [i] ['descripcion'];
        fila.insertCell().innerHTML = criterios [i] ['puntaje']; 
        let celdaConfiguracion = fila.insertCell();
        let celdaEliminar = fila.insertCell();

        let botonEditar = document.createElement('a');
        botonEditar.innerHTML = '<i class="fas fa-edit"></i>';
        botonEditar.href = `actualizarCriteriosMep.html?idCriterio=${criterios[i]['_id']}`
        celdaConfiguracion.appendChild(botonEditar);

        let botonEliminar = document.createElement('button');
        botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
        botonEliminar.id = 'btnEliminar'; 
        botonEliminar.classList.add('botonEliminarCriterios');
        botonEliminar.addEventListener('click', eliminar =>{
            eliminarCriterioControlador(criterios[i]['_id']);
        });
        celdaEliminar.appendChild(botonEliminar);


    }
};

mostrarCriterios();


let eliminarCriterioControlador=(p_id)=>{
    Swal.fire({
        title: '¿Está seguro que desea eliminar el criterio de evaluación?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {    
            eliminarCriterio(p_id, nombreUsuario);          
        } else {    
        }
      
    })
    
}

