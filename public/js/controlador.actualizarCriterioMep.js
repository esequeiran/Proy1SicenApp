'use strict';
// let user = JSON.parse(sessionStorage.getItem("usuario"));
let nombreUsuario = user.centroEducativo;
const selectCriterio = document.querySelector('#selectCriterio');
const inputDescripcion = document.querySelector('#txtDescripcion');
const selectPuntaje= document.querySelector('#selectPuntaje');
const botonActualizarCriterio= document.querySelector('#btnRegistrarCriterio');

if(user.userType == 'centroEducativo' || user.userType == 'padreFamilia'){
    window.location.href = 'loSentimos.html';
}
let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);//Toma el parámetro id_inmueble del url y retorna el valor
    return id;
};


let _id = get_param('idCriterio');

let criterio = buscarCriterio(_id); //se levantan los datos de ese inmueble bajo demanda usando su id

let idCriterioP = criterio[0]['_id'];

let mostrarDatoCriterio = () =>{
    selectCriterio.value = criterio[0]['criterio'];
    inputDescripcion.value = criterio[0]['descripcion'];
    selectPuntaje.value = criterio[0]['puntaje']; 
    
};

if(criterio){
    mostrarDatoCriterio();
}

let validarCriterio = () =>{
    let error = false;

    if(selectCriterio.value == ''){
        error = true;
        selectCriterio.classList.add('errorInput');
    }else{
        selectCriterio.classList.remove('errorInput');
    }

    if(inputDescripcion.value == ''){
        error = true;
        inputDescripcion.classList.add('errorInput');
    }else{
        inputDescripcion.classList.remove('errorInput');
    }

    if(selectPuntaje.value == ''){
        error = true;
        selectPuntaje.classList.add('errorInput');
    }else{
        selectPuntaje.classList.remove('errorInput');
    }

    return error;
    
};

let validarDatosExistentes= () =>{
    let error = false;
    let errorCriterio = false;

    let todosCriterios = listarCriterios();
    let sumaPuntaje = Number(selectPuntaje.value);
    
    for(let i = 0; i < todosCriterios.length; i++){
        if(todosCriterios [i] ['_id'] != idCriterioP){
            if(todosCriterios [i] ['criterio'] == Number(selectCriterio.value)){
                errorCriterio = true;
            }else{
                errorCriterio = false;
            }
            sumaPuntaje = sumaPuntaje + todosCriterios [i] ['puntaje'];
        }        
    }
    
    error = (errorCriterio == false && sumaPuntaje <= 100) ? false : true;
    return error;
}


let obtenerDatosCriterio = () =>{
    if(validarCriterio() == false ){
        if(validarDatosExistentes() == false ){            
            let criterio = Number(selectCriterio.value);
            let descripcion = inputDescripcion.value;
            let puntaje = Number(selectPuntaje.value);
            Swal.fire({
                title: '¿Está seguro que desea actualizar el criterio de evaluación?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, estoy seguro'
              }).then((result) => {
                if (result.value) {
                    actualizarCriterio(criterio, descripcion, puntaje, _id, nombreUsuario);
                }
              })
        }else{
            swal.fire({
                type: 'warning',
                title: 'El criterio no se actualizó correctamente',
                text: 'El criterio ya existe o el puntaje excede el máximo permitido'
            });
        }        
    }else{
        swal.fire({
            type: 'warning',
            title: 'El criterio no se actualizó',
            text: 'Por favor revise los campos resaltados'
        });
    }
};

botonActualizarCriterio.addEventListener('click', obtenerDatosCriterio);

