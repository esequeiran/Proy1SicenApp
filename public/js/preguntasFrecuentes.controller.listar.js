'use strict';

// const opcionVer = document.querySelector('#opcionVer');
const opcionVerPF = document.querySelector('#aPreguntasPF');
const opcionVerCE = document.querySelector('#aPreguntasCE');

// window.onunload = () =>{
//     showPanel(8, '#fff');
// };

let inputFiltrar = document.querySelector('#txtFiltrar');

let elUsuario = JSON.parse(sessionStorage.getItem('usuario'));


if (elUsuario.userType === 'padreFamilia') {
    inputFiltrar = document.querySelector('#txtFiltrarPF');
}

window.onunload = () =>{
    inputFiltrar.value = '';
};
let idCentroEducativo;

if (location.pathname.split("/").slice(-1) == 'profileInfoCE.html'){
    if (elUsuario.userType == 'padreFamilia' ) {//OCULTAR
        document.getElementById('preguntasFrecuentesCE&Admin').style.display = 'none';
    } else {
        document.getElementById('preguntasFrecuentesPF').style.display = 'none';
    }
} else {
    // alert('Salió mal');

    if (elUsuario.userType == 'padreFamilia' && location.pathname.split("/").slice(-1) != 'preguntasFrecuentesCE&Admin.html') {//REDIRECCIONAMIENTO
        if (location.pathname.split("/").slice(-1) != 'loSentimos.html') location.href='loSentimos.html';

        if (opcionVerPF)  opcionVerPF.href = 'preguntasFrecuentesPF.html?idCE='+IdGeneralCE;
    } else if (elUsuario.userType == 'centroEducativo') {
        if (location.pathname.split("/").slice(-1) != 'preguntasFrecuentesCE&Admin.html') location.href='preguntasFrecuentesCE&Admin.html';

        if (opcionVerCE) opcionVerCE.href = 'preguntasFrecuentesCE&Admin.html?idCE='+IdGeneralCE;
    }
}

if (elUsuario.userType == 'padreFamilia' || elUsuario.userType == 'superAdministrador' ){
    idCentroEducativo = IdGeneralCE;
}else {
    idCentroEducativo = elUsuario._id;
}

let responsable;

if(elUsuario.userType == 'centroEducativo'){
    responsable = elUsuario.centroEducativo;
} else {
    responsable = elUsuario.nombre + ' ' + elUsuario.segundoNombre + ' ' + elUsuario.apellido + ' ' + elUsuario.segundoApellido;
}

let listaPreguntasFrecuentes = getPreguntasFrecuentes(idCentroEducativo);

//
console.log(listaPreguntasFrecuentes.length);

insertarMensaje(`No se encontró ninguna pregunta frecuente relacionada con este centro educativo`);

mostrarPreguntasFrecuentes();

inputFiltrar.addEventListener('keyup', mostrarPreguntasFrecuentes);

function mostrarPreguntasFrecuentes() {

    let tabla;

    if (elUsuario.userType === 'padreFamilia'){
        tabla = document.querySelector('#tblPreguntasFrecuentesPF tbody');
    } else {
        tabla = document.querySelector('#tblPreguntasFrecuentes tbody');
    }

    let busqueda = inputFiltrar.value;

    tabla.innerHTML = '';

    if (listaPreguntasFrecuentes.length > 0 && !(typeof listaPreguntasFrecuentes == 'string')){

        if (document.getElementById('error')) eliminarMensaje();

        for (let i = 0; i < listaPreguntasFrecuentes.length; i++) {

            if (listaPreguntasFrecuentes[i]['pregunta'].toLowerCase().includes(busqueda.toLowerCase())){

                if (document.getElementById('error')) eliminarMensaje();

                let pregunta = tabla.insertRow();

                pregunta.id = listaPreguntasFrecuentes[i]['_id'];

                let laPregunta = document.createElement('p');
                laPregunta.textContent = listaPreguntasFrecuentes[i]['pregunta'];
                laPregunta.id = `pregunta_${listaPreguntasFrecuentes[i]['_id']}`;
                pregunta.classList.add('pregunta');

                pregunta.appendChild(laPregunta);

                let contenidoP = pregunta.textContent;

                pregunta.insertAdjacentHTML('beforeend',`<p class="respuesta" id="respuesta_${pregunta.id}">${listaPreguntasFrecuentes[i]['respuesta']}</p>` );

                let contenidoR = document.getElementById(`respuesta_${pregunta.id}`).textContent;

                if (elUsuario.userType === 'superAdministrador' || elUsuario.userType === 'centroEducativo'){

                    pregunta.insertAdjacentHTML('beforeend', `<div class="awesome_images opciones" id="opciones_${pregunta.id}"></i><i class="fas fa-edit modificar" id="modificar_${pregunta.id}"></i><i class="fas fa-trash-alt eliminar" id="eliminar_${pregunta.id}"></i></div>`);


                    pregunta.addEventListener('mouseover', mostrar =>{

                        document.getElementById(`opciones_${pregunta.id}`).style.display = 'inline-block';
                        document.getElementById(`opciones_${pregunta.id}`).style.color = 'white';

                        let botonModificar = document.getElementById(`modificar_${pregunta.id}`);
                        let botonEliminar = document.getElementById(`eliminar_${pregunta.id}`);
                        let z = 2;
                        botonModificar.addEventListener('click', activarCampoTexto =>{
                            if (z % 2 === 0) {
                                pregunta.contentEditable = true;
                                pregunta.classList.add('modoCambio');
                                pregunta.style.setProperty('selection', 'background-color: #EDF0F5');
                                pregunta.selected = true;
                                $(`#${pregunta.id}`).keypress(function(e) {
                                    var keycode = (e.keyCode ? e.keyCode : e.which);
                                    console.log(keycode);
                                    if (keycode == '13') {
                                        actualizarPregunta(laPregunta.textContent, document.getElementById(`respuesta_${pregunta.id}`).textContent,listaPreguntasFrecuentes[i]['idCE'], listaPreguntasFrecuentes[i]['_id'], contenidoP, contenidoR, responsable);
                                        e.preventDefault();
                                        return false;
                                    }
                                });
                            }
                            z++;
                        });
                        botonEliminar.addEventListener('click', eliminar =>{
                            eliminarPregunta(pregunta.id, responsable);
                        });
                    });

                    pregunta.addEventListener('mouseleave', retornar =>{
                        document.getElementById(`opciones_${pregunta.id}`).style.display  = 'none';
                        // document.getElementById(`${listaPreguntasFrecuentes[i]['_id']}`).style.backgroundColor = '#EDF0F5';

                    });
                } else {
                    for(let i of document.querySelectorAll('.respuesta')){
                        i.style.maxWidth = '600px';
                        i.style.paddingLeft = '20px';
                    }
                    for(let i of document.querySelectorAll('.pregunta')){
                        i.style.maxWidth = '600px';
                    }
                }

            } else{
                if (document.getElementById('error')) eliminarMensaje();
                if ($('#tblPreguntasFrecuentesPF tr').length === 0) insertarMensaje(`No se encontró la pregunta ${busqueda}`);
            }
        }
    } else {
        if (document.getElementById('error')) eliminarMensaje();
        insertarMensaje(`No se encontró ninguna pregunta frecuente relacionada con este centro educativo`);
    }

}

function eliminarMensaje() {
    let columna;
    if (elUsuario.userType === 'padreFamilia'){
        columna = document.querySelector('.center');
    } else {
        columna = document.querySelector('.right');

    }
    columna.removeChild(document.getElementById('error'));
}

function insertarMensaje(mensaje) {
    let tablita;

    if (elUsuario.userType === 'padreFamilia'){
        tablita = document.getElementById('tblPreguntasFrecuentesPF');
    } else {
        tablita = document.getElementById('tblPreguntasFrecuentes');
    }
    tablita.insertAdjacentHTML('afterend', `<p id="error" id="mensajito"> ${mensaje}</p>`);
}