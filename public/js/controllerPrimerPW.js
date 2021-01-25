
'use strict'
let user = JSON.parse(sessionStorage.getItem("usuario"));




let id = user._id;
let currentPW = user.contrasenna;
sessionStorage.setItem('usuario', null);

const inputPW = document.querySelector('#txtPW');
const inputconfrimPW = document.querySelector('#txtConfrimPW');
const btnCambiaPW = document.querySelector('#buttonCambiarPW');
var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

function obtenerDatos(){

    let contrasenna = inputPW.value;

  
    if (!validar()) {
        actualizarPW(id, contrasenna, function(res) {
            console.log(id)
            console.log(currentPW)

            if (res.success) {
                window.location.href = 'inicioSesion.html';
            } 
        });
    }else {
        swal.fire({
            type: 'warning',
                title: 'No se pudo actualizar la contraseña',
                text: `La contraseña debe ser de ocho digitos, contener un caracter especial, una mayúscula y una minúscula`,
        });
    }
}

var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

function validar() {
    let contrasenna = inputPW.value;
    let confirmPW = inputconfrimPW.value;
    console.log(contrasenna)
    console.log(confirmPW)

    let error = false;

    if (contrasenna == '' || contrasenna.length < 8) {
        error = true;
        inputPW.classList.add('errorInput')
    } else {
        inputPW.classList.remove('errorInput')
    }

    if (confirmPW == '' || confirmPW.length < 8) {
        error = true;
        inputconfrimPW.classList.add('errorInput')
    } else {
        inputconfrimPW.classList.remove('errorInput')
    }
    if (confirmPW != contrasenna) {
        error = true;
        inputconfrimPW.classList.add('errorInput')
    } else {
        inputconfrimPW.classList.remove('errorInput')
    }

    if (!strongRegex.test(contrasenna)) {
        error = true;
        inputPW.classList.add('errorInput')
    } else {
        inputPW.classList.remove('errorInput')
    }

    if (!strongRegex.test(confirmPW)) {
        error = true;
        inputconfrimPW.classList.add('errorInput')
    } else {
        inputconfrimPW.classList.remove('errorInput')
    }



    return error;
}

btnCambiaPW.addEventListener('click', obtenerDatos);