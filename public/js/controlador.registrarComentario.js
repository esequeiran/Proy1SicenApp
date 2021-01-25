'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));
let centroEducativo = listarUsuariosCEencabezado(IdGeneralCE);

let photoCE = centroEducativo[0]['imagen'];
let nameCE = centroEducativo[0]['centroEducativo'];
let provinciaCE = centroEducativo[0]['provincia'];
let type = centroEducativo[0]['tipo'];

const ratings = document.querySelector('.starrr')
const inputComentario = document.querySelector('#inputComentario');
const btnEnviarComment = document.querySelector('#send');
let value = 0;
let evaluacion = obtenerEvaluacion(IdGeneralCE);
let listaComentarios = listaComentariosUser(IdGeneralCE);

if (photoCE == '') {
    photoCE = 'img/icons8-user.png';
}

$('.starrr').starrr({
    rating: 0,
    change: function (e, valor) {
        value = valor;
    }
});

let validarComments = () => {
    let error = false;

    if (value === 0) {
        error = true;
        ratings.classList.add('errorInput');
    } else {
        ratings.classList.remove('errorInput');
    }

    if (inputComentario.value == '') {
        error = true;
        inputComentario.classList.add('errorInput');
    } else {
        inputComentario.classList.remove('errorInput');
    }

    return error;
};

let obtenerDatos = () => {
    if (validarComments() == false) {
        let userPhoto = user.imagenPF;
        console.log(userPhoto);
        if (userPhoto == '') {
            userPhoto = 'img/icons8-user.png';
        }
        let userName = user.nombre += " " + user.apellido;
        // stars

        let stars = value;

        let comment = inputComentario.value;
        let idCentroEducativo = IdGeneralCE;

        registrarComentario(userPhoto, userName, stars, comment, idCentroEducativo);

        console.log('Evaluacion:' + evaluacion);
        if (evaluacion === false) {
            let starsTotal = stars;
            let starsProm = 0;
            registrarEvaluacion(photoCE, nameCE, provinciaCE, starsTotal, starsProm, type, idCE);
        } else {
            let id = evaluacion._id;
            let starsTotal = stars + evaluacion.stars;
            let starsProm = starsTotal / listaComentarios.length;
            if (starsProm < 5) {
                starsProm = 5
            }
            modificarEvaluacion(id, photoCE, nameCE, provinciaCE, starsTotal, starsProm, type, IdGeneralCE);
        }

    } else {
        swal.fire({
            type: 'warning',
            title: 'El comentario no se ha registrado correctamente.',
            text: 'Por favor revise los campos resaltados.'
        });
    }
};

btnEnviarComment.addEventListener('click', obtenerDatos);

