'use strict';

let nombrePerfil = document.querySelector('.userInfo h4');

let usuario = JSON.parse(sessionStorage.getItem('usuario'));

let fotoPerfil = document.querySelector('.userPhoto');

let imagen = document.createElement('img');

window.onload = function() {
    let nombre = '';
    if (usuario.userType === 'padreFamilia' || usuario.userType === 'superAdministrador') {
        nombre += usuario.nombre;
        if (usuario.segundoNombre) {
            nombre += " " + usuario.segundoNombre;
        }
        nombre += " " + usuario.apellido;

        if (usuario.segundoApellido) {
            nombre += " " + usuario.segundoApellido;
        }

        // if (usuario.userType === 'padreFamilia' ){
            imagen.src = usuario.imagenPF;
        // } else {
        //     imagen.src = usuario.imagenSA;
        // }

    } else {
        nombre = usuario.centroEducativo;
        imagen.src = usuario.imagen;
    }
    if (imagen.src === window.location.href){
        imagen.src = 'img/icons8-user.png'
    }
    fotoPerfil.style.backgroundImage = `url(${imagen.src})`;

    nombrePerfil.innerHTML = nombre;
};