'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));
// let centroEducativo = listarUsuariosCEencabezado(IdGeneralCE);

// const tablaComentarios = document.querySelector('#tblComentarios tbody');
let comentarios = listaComentariosUser(IdGeneralCE);

const cajaComentarios = document.querySelector('#cajaComentarios');
const registrarComentarios = document.querySelector('#registrarComentarioDiv');

console.log(comentarios);

let mostrarComentarios = () => {

    for (let i = 0; i < comentarios.length; i++) {


        let commentInfo = document.createElement('div');
        commentInfo.classList.add('commentInfo');

        let userPic = document.createElement('div');
        userPic.classList.add('userPic');

        if (comentarios[i]['userPhoto'] === '') {
            comentarios[i]['userPhoto'] = 'img/icons8-user.png'
        }

        userPic.style.backgroundImage = `url(${comentarios[i]['userPhoto']})`;

        let userName = document.createElement('h3');
        userName.classList.add('userName');
        userName.textContent = comentarios[i]['userName'];

        let starsRate = document.createElement('div');
        // starsRate.textContent = comentarios[i]['stars'];
        starsRate.classList.add('starrr');

        let star1;
        let star2;
        let star3;
        let star4;
        let star5;

        switch (comentarios[i]['stars']) {

            case 1:
                star1 = document.createElement('i');
                star1.innerHTML = '<i class="fas fa-star"></i>';
                star1.classList.add('starColor');

                star2 = document.createElement('i');
                star2.innerHTML = '<i class="fa fa-star-o"></i>';
                star2.classList.add('starColor');

                star3 = document.createElement('i');
                star3.innerHTML = '<i class="fa fa-star-o"></i>';
                star3.classList.add('starColor');

                star4 = document.createElement('i');
                star4.innerHTML = '<i class="fa fa-star-o"></i>';
                star4.classList.add('starColor');

                star5 = document.createElement('i');
                star5.innerHTML = '<i class="fa fa-star-o"></i>';
                star5.classList.add('starColor');
                break;

            case 2:
                star1 = document.createElement('i');
                star1.innerHTML = '<i class="fas fa-star"></i>';
                star1.classList.add('starColor');

                star2 = document.createElement('i');
                star2.innerHTML = '<i class="fas fa-star"></i>';
                star2.classList.add('starColor');

                star3 = document.createElement('i');
                star3.innerHTML = '<i class="fa fa-star-o"></i>';
                star3.classList.add('starColor');

                star4 = document.createElement('i');
                star4.innerHTML = '<i class="fa fa-star-o"></i>';
                star4.classList.add('starColor');

                star5 = document.createElement('i');
                star5.innerHTML = '<i class="fa fa-star-o"></i>';
                star5.classList.add('starColor');
                break;

            case 3:
                star1 = document.createElement('i');
                star1.innerHTML = '<i class="fas fa-star"></i>';
                star1.classList.add('starColor');

                star2 = document.createElement('i');
                star2.innerHTML = '<i class="fas fa-star"></i>';
                star2.classList.add('starColor');

                star3 = document.createElement('i');
                star3.innerHTML = '<i class="fas fa-star"></i>';
                star3.classList.add('starColor');

                star4 = document.createElement('i');
                star4.innerHTML = '<i class="fa fa-star-o"></i>';
                star4.classList.add('starColor');

                star5 = document.createElement('i');
                star5.innerHTML = '<i class="fa fa-star-o"></i>';
                star5.classList.add('starColor');
                break;

            case 4:
                star1 = document.createElement('i');
                star1.innerHTML = '<i class="fas fa-star"></i>';
                star1.classList.add('starColor');

                star2 = document.createElement('i');
                star2.innerHTML = '<i class="fas fa-star"></i>';
                star2.classList.add('starColor');

                star3 = document.createElement('i');
                star3.innerHTML = '<i class="fas fa-star"></i>';
                star3.classList.add('starColor');

                star4 = document.createElement('i');
                star4.innerHTML = '<i class="fas fa-star"></i>';
                star4.classList.add('starColor');

                star5 = document.createElement('i');
                star5.innerHTML = '<i class="fa fa-star-o"></i>';
                star5.classList.add('starColor');
                break;

            case 5:
                star1 = document.createElement('i');
                star1.innerHTML = '<i class="fas fa-star"></i>';
                star1.classList.add('starColor');

                star2 = document.createElement('i');
                star2.innerHTML = '<i class="fas fa-star"></i>';
                star2.classList.add('starColor');

                star3 = document.createElement('i');
                star3.innerHTML = '<i class="fas fa-star"></i>';
                star3.classList.add('starColor');

                star4 = document.createElement('i');
                star4.innerHTML = '<i class="fas fa-star"></i>';
                star4.classList.add('starColor');

                star5 = document.createElement('i');
                star5.innerHTML = '<i class="fas fa-star"></i>';
                star5.classList.add('starColor');
                break;

            default:
                break;
        }

        let comment = document.createElement('p');
        comment.classList.add('comment');
        comment.textContent = comentarios[i]['comment'];

        if (user.userType == "superAdministrador") {
            registrarComentarios.style.display = 'none';

            let botonEliminar = document.createElement('button');
            botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
            botonEliminar.id = 'btnEliminar';
            botonEliminar.classList.add('btnEliminar');

            botonEliminar.addEventListener('click', eliminar => {
                eliminarComentarios(comentarios[i]['_id']);
            });
            comment.appendChild(botonEliminar);
        }

        commentInfo.appendChild(userPic);
        commentInfo.appendChild(userName);
        starsRate.appendChild(star1);
        starsRate.appendChild(star2);
        starsRate.appendChild(star3);
        starsRate.appendChild(star4);
        starsRate.appendChild(star5);


        cajaComentarios.appendChild(commentInfo);
        cajaComentarios.appendChild(starsRate);
        cajaComentarios.appendChild(comment);
    };
};

mostrarComentarios();


let eliminarComentarios = (p_id, nombre) => {
    swal.fire({
        title: '¿Está seguro que desea eliminar el comentario?',
        type: 'warning',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {

            eliminarComentario(p_id, nombre);
        } else {
        }

    })

};