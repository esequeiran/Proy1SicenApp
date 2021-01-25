'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));
let nombreUsuario = "";

if(user.userType == "centroEducativo"){
    nombreUsuario = user.centroEducativo;
}else if(user.userType == "superAdministrador"){
    nombreUsuario = user.nombre;
}


const inputNombre = document.querySelector('#txtNombre');
const inputDescripcion = document.querySelector('#txtDescripcion');
const botonRegistrar = document.querySelector('#btnRegistrar');
const idCE = user._id;


if(user.userType == 'padreFamilia'){
    window.location.href = 'loSentimos.html';
}

let validar = () =>{
    let error = false;

    if(inputNombre.value == ''){
        error = true;
        inputNombre.classList.add('errorInput');
    }else{
        inputNombre.classList.remove('errorInput');
    }

    if(inputDescripcion.value == ''){
        error = true;
        inputDescripcion.classList.add('errorInput');
    }else{
        inputDescripcion.classList.remove('errorInput');
    }  

    return error;
   
    
};

let obtenerDatos = () =>{
    if(validar() == false){
        let nombre = inputNombre.value;
        let descripcion = inputDescripcion.value;        
        let idCentroEducativo = idCE;

        inputNombre.value = '';
        inputDescripcion.value = '';

        registrarArticulo(nombre, descripcion, idCentroEducativo, nombreUsuario);
        
    }else{
        swal.fire({
            type: 'warning',
            title: 'El artículo no se registró correctamente',
            text: 'Por favor revise los campos resaltados'
        });
    }
};

botonRegistrar.addEventListener('click', obtenerDatos);

