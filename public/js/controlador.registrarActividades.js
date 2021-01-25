'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));
let nombreUsuario = user.centroEducativo;
if(user.userType == 'padreFamilia' || user.userType == 'superAdministrador'){
    window.location.href = 'loSentimos.html';
};

const inputActividad = document.querySelector('#txtActividad');
const inputDescripcion = document.querySelector('#txtDescripcion');
const inputFecha = document.querySelector('#inputFecha');
const imagenActividad = document.querySelector('#imgActividades');
const botonAgregar = document.querySelector('#btnAgregar');
const botonRegistrar = document.querySelector('#btnRegistrar');
const idCE = user._id;


//Agregar atributo de día actual máximo disponible para actividades
var diaActual = new Date();
var dd = diaActual.getDate();
var mm = diaActual.getMonth()+1; //January is 0!
var yyyy = diaActual.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    diaActual = yyyy+'-'+mm+'-'+dd;
    inputFecha.setAttribute("max", diaActual);



let validar = () =>{
    let error = false;

    if(inputActividad.value == ''){
        error = true;
        inputActividad.classList.add('errorInput');
    }else{
        inputActividad.classList.remove('errorInput');
    }

    if(inputDescripcion.value == ''){
        error = true;
        inputDescripcion.classList.add('errorInput');
    }else{
        inputDescripcion.classList.remove('errorInput');
    }

    if(inputFecha.value == ''){
        inputFecha.classList.add('errorInput');        
    }else{
        inputFecha.classList.remove('errorInput');
    }
    return error;

};

    let stringImgActividades = "";
    
    let j = 0;
function obtenerImagenVarias(){
    let sectionImgActividades = document.querySelector('.sctImagenes');
   
        if(imagenActividad.src === 'http://localhost:3000/public/img/upload.png'){            
            swal.fire({
                type: 'warning',
                title: 'No ha subido una imagen',
                text: 'Por favor suba una imagen'
            });
        }else{
            stringImgActividades = stringImgActividades == "" ? imagenActividad.src : stringImgActividades + "," + imagenActividad.src;        
            let nuevoImg = document.createElement('img');
            nuevoImg.style.display = 'inline-block';
            nuevoImg.classList.add('imageActividadAgregada');
            nuevoImg.src = imagenActividad.src;
            sectionImgActividades.appendChild(nuevoImg);
            imagenActividad.src = 'img/upload.png';
            j = j + 1; 
        }       
    
}

botonAgregar.addEventListener('click', obtenerImagenVarias);



function obtenerDatosActividad(){
    if(validar() == false){
        let actividad = inputActividad.value;
        let descripcion = inputDescripcion.value;
        let fecha = inputFecha.value;

        let fechaOrdenada = fecha.split("-");
        let dia = fechaOrdenada[2];
        let mes = fechaOrdenada[1];
        let ano = fechaOrdenada[0];
        
        let fechaCorrecta = dia+"/"+mes+"/"+ano;

        let idCentroEducativo = idCE;

        inputActividad.value = '';
        inputDescripcion.value = '';
        inputFecha.value = '';
        
        registrarActividad(actividad, descripcion, fechaCorrecta, stringImgActividades, idCentroEducativo, nombreUsuario);

    }else{
        swal.fire({
            type: 'warning',
            title: 'La actividad no se registró correctamente',
            text: 'Por favor revise los campos resaltados'
        });
    }
}

botonRegistrar.addEventListener('click', obtenerDatosActividad);

