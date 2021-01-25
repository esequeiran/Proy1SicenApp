'use strict';
// let user = JSON.parse(sessionStorage.getItem("usuario"));
let nombreUsuario = user.centroEducativo;
const inputActividad = document.querySelector('#txtActividad');
const inputDescripcion = document.querySelector('#txtDescripcion');
const inputFecha = document.querySelector('#inputFecha');
const imagenActividad = document.querySelector('#imgActividades');
const botonAgregar = document.querySelector('#btnAgregar');

const botonActualizar = document.querySelector('#btnRegistrar');
const idCE = user._id;

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

if(user.userType == 'padreFamilia'){
    window.location.href = 'loSentimos.html';
}

let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);//Toma el parámetro id_inmueble del url y retorna el valor
    return id;
};

let _id = get_param('idActividad');

let actividad = buscarActividad(_id); 
let stringImgActividades = "";    

let mostrarDatoArticulo = () =>{
    inputActividad.value = actividad[0]['actividad'];
    inputDescripcion.value = actividad[0]['descripcion'];    
    let arregloFecha = [];
    arregloFecha = actividad[0]['fecha'].split("/");    
    let diaActividad = arregloFecha[2]+'-'+arregloFecha[1]+'-'+arregloFecha[0];
    inputFecha.value = diaActividad;

    if (actividad[0]['imagen']) {
        let stringImg = actividad[0]['imagen'];
        let arregloImg = stringImg.split(",");
        let sectionImgActividades = document.querySelector('.sctImagenes');

        for(let v = 0; v<arregloImg.length; v++){
            let divImagenesTrash = document.createElement('div');
            divImagenesTrash.classList.add('divImagenesTrash');
            divImagenesTrash.id = 'divImgTrash' + v;
            
           
            let nuevoImg = document.createElement('img');
            nuevoImg.style.display = 'inline-block';            
            nuevoImg.classList.add('imageActividadAgregada');
            nuevoImg.src = arregloImg[v];

            stringImgActividades = stringImgActividades == "" ? nuevoImg.src : stringImgActividades + "," + nuevoImg.src;   
   
            let arregloImagenes = [];
            arregloImagenes = stringImgActividades.split(',');

            let botonEliminar = document.createElement('button');
            botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
            botonEliminar.id = 'btnEliminar';                       
            botonEliminar.addEventListener('click', eliminar =>{             
                
                eliminarFotoActividad(divImagenesTrash.id);
                    
                if(arregloImagenes.length == 1 && 0 == v  ){
                    
                    stringImgActividades = stringImgActividades.replace(arregloImg[v],"");
                    console.log('entró acá');

                }
                else if(0 == v){
                    stringImgActividades = stringImgActividades.replace(arregloImg[v]+",","");
                    console.log(stringImgActividades);
                    arregloImagenes = stringImgActividades.split(',');
                }else{
                    stringImgActividades = stringImgActividades.replace(","+arregloImg[v],"");      
                    console.log(stringImgActividades); 
                    arregloImagenes = stringImgActividades.split(',');            
                }

            });

            divImagenesTrash.appendChild(nuevoImg);
            divImagenesTrash.appendChild(botonEliminar);

            sectionImgActividades.appendChild(divImagenesTrash);          
        }        
    }    
    // else {
    //         imagen.src = 'img/upload.png';
    //         imagenActividad.appendChild(imagen);
    //     }    
};

if(actividad){
    mostrarDatoArticulo();
}

let eliminarFotoActividad = (pidElementoImagen) => {
    let foto = document.querySelector('#'+pidElementoImagen+'');
    foto.parentNode.removeChild(foto);
}


let j = 0;
function obtenerImagenVarias(){
    let sectionImgActividades = document.querySelector('.sctImagenes');
    let divImagenesAgregadas = document.createElement('div');
    divImagenesAgregadas.classList.add('divImagenesTrash');
    let nuevoImg = document.createElement('img');
    nuevoImg.style.display = 'inline-block';
    nuevoImg.classList.add('imageActividadAgregada');
    nuevoImg.src = imagenActividad.src;
    divImagenesAgregadas.appendChild(nuevoImg);
    
    sectionImgActividades.appendChild(divImagenesAgregadas);

    stringImgActividades = stringImgActividades == "" ? nuevoImg.src : stringImgActividades + "," + nuevoImg.src; 
    
    // imagenActividad.src = 'img/upload.png';
    j = j + 1; 
       
}
botonAgregar.addEventListener('click', obtenerImagenVarias);


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

let obtenerDatosActividad = () =>{
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
        
        Swal.fire({
            title: '¿Está seguro que desea actualizar la actividad?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
        }).then((result) => {
            if (result.value) {               
                actualizarActividad(actividad, descripcion, fechaCorrecta, stringImgActividades, idCentroEducativo, _id, nombreUsuario);
            }
        })
    }else{
        swal.fire({
            type: 'warning',
            title: 'La actividad no se actualizó',
            text: 'Por favor revise los campos resaltados'
        });
    }       
    
};

botonActualizar.addEventListener('click', obtenerDatosActividad);