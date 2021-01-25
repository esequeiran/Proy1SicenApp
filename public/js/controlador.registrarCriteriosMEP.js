'use strict';
// let user = JSON.parse(sessionStorage.getItem("usuario"));
let nombreUsuario = user.superAdministrador;
const selectCriterio = document.querySelector('#selectCriterio');
const inputDescripcion = document.querySelector('#txtDescripcion');
const selectPuntaje= document.querySelector('#selectPuntaje');
const botonRegistrarCriterio= document.querySelector('#btnRegistrarCriterio');

if(user.userType == 'centroEducativo' || user.userType == 'padreFamilia'){
    window.location.href = 'loSentimos.html';
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
        if(todosCriterios [i] ['criterio'] == Number(selectCriterio.value)){
            errorCriterio = true;
        }
        sumaPuntaje = sumaPuntaje + todosCriterios [i] ['puntaje'];
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

            selectCriterio.value = '';
            inputDescripcion.value = '';
            selectPuntaje.value = '';
    
            registrarCriterio(criterio, descripcion, puntaje, nombreUsuario);
        }else{
            swal.fire({
                type: 'warning',
                title: 'El criterio no se registró correctamente',
                text: 'El criterio ya existe o el puntaje excede el máximo permitido'
            });
        }
        
    }else{
        swal.fire({
            type: 'warning',
            title: 'El criterio no se registró correctamente',
            text: 'Por favor revise los campos resaltados'
        });
    }
};

botonRegistrarCriterio.addEventListener('click', obtenerDatosCriterio);



