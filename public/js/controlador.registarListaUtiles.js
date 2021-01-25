'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));
let nombreUsuario = "";

if(user.userType == "centroEducativo"){
    nombreUsuario = user.centroEducativo;
}else if(user.userType == "superAdministrador"){
    nombreUsuario = user.nombre;
}


const tabla = document.querySelector("#tblArticulos tbody");
const inputFiltro = document.querySelector('#txtFiltro');
const inputNombre = document.querySelector('#inputNombre');
const selectNivel = document.querySelector('#selectNivel');
const botonRegistrar = document.querySelector('#btnRegistrar');
const IdGeneralCE = user._id;
let numeroFilas = 0;
const aListaUtil = document.querySelector('#aListaUtil');



if (user.userType == 'padreFamilia') {
    window.location.href = 'loSentimos.html';
}


if(user.userType == 'superAdministrador'){
    aListaUtil.href = 'listarUtilesOficialesSA.html';
}

if(user.userType == 'centroEducativo'){
    aListaUtil.href = 'listarUtilesPropiosCE.html';
}


let articulos = listarArticulos();

let mostrarArticulos = () => {
    let articulos = listarArticulos(IdGeneralCE);
    let contador = 0;

    let filtro = inputFiltro.value;                
    tabla.innerHTML = '';

    if (articulos !== "No se encontraron artículos escolares registrados") {

        for (let i = 0; i < articulos.length; i++) {

            if(articulos[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {                            

                let fila = tabla.insertRow();
                let stringArticulo = fila.insertCell();
                let stringDescripcion = fila.insertCell();
                let campoCant = fila.insertCell();
                let inputSArticulo = document.createElement('input');
                inputSArticulo.id = "inpArticulo" + contador;
                inputSArticulo.value = articulos[i]['nombre'];
                inputSArticulo.disabled = 'disabled';
                inputSArticulo.type = 'text';
                inputSArticulo.classList.add('inputSArticulo');                
                stringArticulo.appendChild(inputSArticulo);
                let inputSDescripcion = document.createElement('input');
                inputSDescripcion.id = "inpDescripcion" + contador;
                inputSDescripcion.value = articulos[i]['descripcion'];
                inputSDescripcion.type = 'text';
         
                inputSDescripcion.classList.add('inputSDescripcion');
                inputSDescripcion.disabled = 'disabled';
                // inputSDescripcion.classList.add('inputDisabled');                
                stringDescripcion.appendChild(inputSDescripcion);

                let inputCant = document.createElement('input');
                inputCant.id = "inpCant" + contador;
                inputCant.min = "0";
                inputCant.type = "Number";
                inputCant.classList.add('cantidad');
                campoCant.appendChild(inputCant);

                contador = contador + 1;
            }

        }
        numeroFilas = contador;

    } else {
        tabla.innerHTML = "No se encontraron artículos escolares registrados";
    }
};

mostrarArticulos();

inputFiltro.addEventListener('keyup', mostrarArticulos);


let validar = () => {
    let inserto = false;
    let camposCantVacios = 0;

    for(let i = 0; i < numeroFilas; i++){
        let inputCantAuxiliar = document.querySelector('#inpCant' + i);
        
        if (inputCantAuxiliar.value == '' || inputCantAuxiliar.value == "0") {
            camposCantVacios = camposCantVacios + 1;
            if(camposCantVacios == numeroFilas){
               
                let clases = document.getElementsByClassName("cantidad");
                for (let j = 0; j < clases.length; j++) {
                    clases[j].style.border = "2px solid #ED4C67";
                }
                swal.fire({
                    type: 'warning',
                    title: 'La lista de utiles no se registró correctamente',
                    text: 'Para ingresar la lista mínimo un campo de cantidad debe estar lleno o ser distinto de 0'
                });
            } else {
                let clases = document.getElementsByClassName("cantidad");
                for (let j = 0; j < clases.length; j++) {
                    clases[j].style.border = "1px solid gray";
                }
            }
            
        } else { 

            if (selectNivel.value == '' && inputNombre.value == ''){                
                selectNivel.classList.add('errorSelect');
                inputNombre.classList.add('errorInput');
                swal.fire({
                    type: 'warning',
                    title: 'La lista de utiles no se registró correctamente',
                    text: 'Revise los campos resaltado'
                });
            } else {
                selectNivel.classList.remove('errorSelect');
                inputNombre.classList.remove('errorInput');
                obtenerDatos(i);
                inserto = true;
            }
        
        }
    }       
     
    if(inserto){
        inputNombre.value = '';
        selectNivel.value = '';
        
        swal.fire({
            type: 'success',
            title: 'Lista escolar registrada correctamente',
            text: `La lista de útiles se ha registrado para el nivel ${selectNivel.value}`
        });        
    }
};

let obtenerDatos = (piDinamico) => {

        let nombre = document.querySelector('#inpArticulo' + piDinamico).value;
        let descripcion = document.querySelector('#inpDescripcion' + piDinamico).value;
        let cantidad = document.querySelector('#inpCant' + piDinamico).value;
        let nivel = selectNivel.value;
        let idCentroEducativo = IdGeneralCE;
        let nombreLista = inputNombre.value;
        document.querySelector('#inpCant' + piDinamico).value = '';
        registrarUtil(nombre, descripcion, cantidad, nivel, idCentroEducativo, nombreLista, nombreUsuario);
};

botonRegistrar.addEventListener('click', validar);


