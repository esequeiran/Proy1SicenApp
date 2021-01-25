'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));

const inputTema = document.querySelector('#inputTema');
const text = document.querySelector('#descripcion');
const pdf = document.querySelector('#documentPreview');
const btnActualizar = document.querySelector('#btnGuardar');
const idCE = user._id;

if(user.userType == 'padreFamilia' || user.userType == 'superAdministrador'){
    window.location.href = 'loSentimos.html';
}

let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);//Toma el parámetro id_inmueble del url y retorna el valor
    return id;
};


let _id = get_param('idMaterial');

let material = buscarMaterial(_id); 

console.log(material);

let mostrarDatoMaterial = () =>{
    inputTema.value = material[0]['tema'];
    text.value = material[0]['descripcion'];
    pdf.src = material[0]['file'];
    
};

if(material){
    mostrarDatoMaterial();
}

let validar = () => {
    let error = false;

    if (inputTema.value == '') {
        error = true;
        inputTema.classList.add('errorInput');
    } else {
        inputTema.classList.remove('errorInput');
    }

    if (text.value == '') {
        error = true;
        text.classList.add('errorInput');
    } else {
        text.classList.remove('errorInput');
    }

    return error;
};

let obtenerDatosMaterial = () =>{
    if(validar() == false){
        let tema = inputTema.value;
        let descripcion = text.value;
        let file = pdf.src;

        let idCentroEducativo = idCE;
        Swal.fire({
            title: '¿Está seguro que desea actualizar el material informativo?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
          }).then((result) => {
            if (result.value) {
                editarMaterial(tema, descripcion, file, idCentroEducativo, _id);
            }
          })
    }else{
        swal.fire({
            type: 'warning',
            title: 'El material informativo no se actualizó',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

btnActualizar.addEventListener('click', obtenerDatosMaterial);