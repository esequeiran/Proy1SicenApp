'use strict';
// let user = JSON.parse(sessionStorage.getItem("usuario"));
let nombreUsuario = user.centroEducativo;
const inputNombre = document.querySelector('#txtNombre');
const inputDescripcion = document.querySelector('#txtDescripcion');
const botonActualizar = document.querySelector('#btnRegistrar');
const idCE = user._id;

if(user.userType == 'padreFamilia'){
    window.location.href = 'loSentimos.html';
}

let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);//Toma el parámetro id_inmueble del url y retorna el valor
    return id;
};


let _id = get_param('idArticulo');

let articulo = buscarArticulo(_id); //se levantan los datos de ese inmueble bajo demanda usando su id

let mostrarDatoArticulo = () =>{
    inputNombre.value = articulo[0]['nombre'];
    inputDescripcion.value = articulo[0]['descripcion']; 
    
};

if(articulo){
    mostrarDatoArticulo();
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

let obtenerDatosArticulo = () =>{
    if(validar() == false){
        let nombre = inputNombre.value;
        let descripcion = inputDescripcion.value;
        let idCentroEducativo = idCE;
        Swal.fire({
            title: '¿Está seguro que desea actualizar el artículo?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
          }).then((result) => {
            if (result.value) {
                actualizarArticulo(nombre, descripcion, idCentroEducativo, _id, nombreUsuario);
            }
          })
    }else{
        swal.fire({
            type: 'warning',
            title: 'El artículo no se actualizó',
            text: 'Por favor revise los campos resaltados'
        });
    }
   
    
        
    
};

botonActualizar.addEventListener('click', obtenerDatosArticulo);