'use strict'

// let user = JSON.parse(sessionStorage.getItem("usuario"));

const tablaRangos = document.querySelector('#tblRangoCriteriosMEP tbody');
let nombreUsuario = user.centroEducativo;
if(user.userType == 'padreFamilia' || user.userType == 'centroEducativo'){
    window.location.href = 'loSentimos.html';
}

let mostrarRangos = () =>{
    let rangos = listarRangos();
    
    for(let i=0; i<rangos.length; i++){
        let fila = tablaRangos.insertRow();
        fila.insertCell().innerHTML = rangos [i] ['rango'];
        fila.insertCell().innerHTML = rangos [i] ['valorMinimo'];
        fila.insertCell().innerHTML = rangos [i] ['valorMaximo'];
        fila.insertCell().innerHTML = rangos [i] ['estrellas'];
        let celdaConfiguracion = fila.insertCell();
        let celdaEliminar = fila.insertCell();

        let botonEditar = document.createElement('a');
        botonEditar.innerHTML = '<i class="fas fa-edit"></i>';
        botonEditar.href = `actualizarRangosMep.html?idRango=${rangos[i]['_id']}`
        celdaConfiguracion.appendChild(botonEditar);

        
        let botonEliminar = document.createElement('button');
        botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
        botonEliminar.id = 'btnEliminar';  
        botonEliminar.classList.add('botonEliminarCriterios');              
        botonEliminar.addEventListener('click', eliminar =>{
            eliminarRangoControlador(rangos[i]['_id']);
        });
        celdaEliminar.appendChild(botonEliminar);
    }
};

mostrarRangos();


let eliminarRangoControlador=(p_id)=>{
    Swal.fire({
        title: '¿Está seguro que desea eliminar el rango de evaluación?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {    
            eliminarRango(p_id, nombreUsuario);          
        } else {    
        }
      
    })
    
}
