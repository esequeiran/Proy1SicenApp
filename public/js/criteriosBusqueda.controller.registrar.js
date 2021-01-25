'use strict';

const inputEtiqueta = document.querySelector('#txtNombreEtiqueta');
const btnAgregar = document.querySelector('#btnAgregar');

// inputEtiqueta.classList.add('chips');
//
// inputEtiqueta.classList.add('chips-autocomplete');
// inputEtiqueta.classList.add('chips-placeholder');

let validar = () =>{

    let error = false;

    if (inputEtiqueta.value === '' || validarEtiqueta(inputEtiqueta.value)){
        error = true;
        inputEtiqueta.classList.add('errorInput');
    } else {
        inputEtiqueta.classList.remove('errorInput');
    }

    return error;
};

let agregar = () =>{

    if (!validar()){
        let nombre = inputEtiqueta.value;

        inputEtiqueta.value = '';

        registrarCriterioBusqueda(nombre, responsable);

        setTimeout("location.reload()", 1500);
    } else {

        swal.fire(
            {
                type: 'warning',
                title: 'Registro fallido de la etiqueta',
                text: 'Asegúrese de haber llenado el campo o que la etiqueta no exista'
            }
        );
    }
};

btnAgregar.addEventListener('click', agregar);