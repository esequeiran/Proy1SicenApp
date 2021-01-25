'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));

const tabla = document.querySelector('#tblUsuarios tbody');
const inputFiltro = document.querySelector('#txtFiltro');
const sltEtiquetas = document.querySelector('#sltEtiquetas');
const tablaEtiquetas = document.querySelector('#tblEtiquetasSeleccionadas tbody');
let contador = 0;
let etiquetasSeleeccionadas = [];
let fila = tablaEtiquetas.insertRow();
let cargas = 0;
let carga1arr = [];
let etiquetasCarga1 = [];
tablaEtiquetas.insertAdjacentHTML('beforebegin', `<p id="cargando">Cargando...</p>`)
let cargando = document.getElementById('cargando');

if(user.userType == 'centroEducativo'){
    window.location.href = 'loSentimos.html';
}

function comparar(arr1,arr2){

    return arr1.filter(x => arr2.includes(x));
}

mostrarDatos();

inputFiltro.addEventListener('keyup', mostrarDatos);

let etiquetas = getCriteriosBusqueda();

let cargarEtiquetas = () =>{

    if (typeof etiquetas != 'string') {
        for (let i = 0; i < etiquetas.length; i++){
            // tablaEtiquetas.insertAdjacentHTML('beforeend', `<option value="${i}">${etiquetas[i]['nombre']}</option>`)
            let option = document.createElement("option");
            option.text = `${etiquetas[i]['nombre']}`;
            option.value = `${etiquetas[i]['nombre']}`;
            sltEtiquetas.add(option);
        }
    }

};

cargarEtiquetas();


function arrayRemove(arr, value) {

    return arr.filter(function(ele){
        return ele != value;
    });

}

let agregarEtiquetas = () =>{

    if (contador%3 == 0) fila = tablaEtiquetas.insertRow();

    contador++;

    let opcionSeleccionada = sltEtiquetas.options[sltEtiquetas.selectedIndex];

    if (!(etiquetasSeleeccionadas.includes(opcionSeleccionada.value))){
        let etiqueta = fila.insertCell();
        etiqueta.id = opcionSeleccionada.textContent + '_seleccionada';
        console.log( document.querySelector(`#${etiqueta.id}`));


        etiqueta.textContent = opcionSeleccionada.textContent;
        let awesome = document.createElement('div');
        let basurero = document.createElement('i');
        awesome.classList.add('awesome_images');
        basurero.classList.add('fas');
        basurero.classList.add('fa-trash-alt');
        document.querySelector(`#${etiqueta.id}`).appendChild(awesome);
        awesome.appendChild(basurero);
        basurero.addEventListener('click', ev => {
            document.getElementById(etiqueta.id).parentNode.removeChild(document.getElementById(etiqueta.id));
            contador--;
            etiquetasSeleeccionadas = arrayRemove(etiquetasSeleeccionadas, etiqueta.textContent);
        });
        basurero.addEventListener('click', mostrarDatos);

        etiquetasSeleeccionadas.push(etiqueta.textContent);
    } else {
        contador--;
        swal.fire(
            {
                timer: 1500,
                title: 'Opción no válida',
                type: 'warning'
            }
        );
    }
};

sltEtiquetas.addEventListener('change', agregarEtiquetas);
sltEtiquetas.addEventListener('change', mostrarDatos);


function recorrer (usuarios){

    if (cargas == 0) cargando.style.visibility = 'visible';

    let filtro = inputFiltro.value;
    tabla.innerHTML = '';

    for (let i = 0; i < usuarios.length; i++) {
        // if (i > usuarios.length) {
        //     break;
        // }

        let etiquetasUsuarioObj = [];
        if (cargas === 0) {
            etiquetasUsuarioObj = getCriteriosBusquedaMarcados(usuarios[i]['_id']);
            etiquetasCarga1.push(etiquetasUsuarioObj);
        } else{
            etiquetasUsuarioObj = etiquetasCarga1[i];
        }
        usuarios[i] = Object.assign(usuarios[i], {etiquetas: etiquetasCarga1[i]});

        let etiquetasUsuario = [];

        let mostrar = false;

        if (!etiquetasUsuarioObj[0][0]) {
            for (let etiquetaU of Array.from(etiquetasUsuarioObj)) {
                etiquetasUsuario.push(etiquetaU['nombre']);
            }

            if (comparar(etiquetasUsuario, etiquetasSeleeccionadas).length == etiquetasSeleeccionadas.length) {
                mostrar = true;
                console.log(usuarios[i]['centroEducativo'] + " tiene la etiqueta");
            }
        }

        if (etiquetasUsuario.length > 0) {
            console.log(etiquetasUsuario);
        }
        if (mostrar) console.log(mostrar);
        // console.log(etiquetasUsuario.some(r=> etiquetasSeleeccionadas.includes(r)));
        let incluyeFiltro = usuarios[i]['centroEducativo'].toLowerCase().includes(filtro.toLowerCase());
        if (incluyeFiltro
        // comparar(etiquetasUsuario, etiquetasSeleeccionadas).length > 0
        // etiquetasUsuario.length > 0
        ) {
            if (mostrar || etiquetasSeleeccionadas.length == 0){
                let fila = tabla.insertRow();

                // fila.insertCell().innerHTML = usuarios[i]['centroEducativo'];
                let nombre = fila.insertCell();
                fila.insertCell().innerHTML = usuarios[i]['telCE'];
                fila.insertCell().innerHTML = usuarios[i]['tipo'];
                fila.insertCell().innerHTML = usuarios[i]['provincia'];


                let cEElementa = document.createElement('a');
                cEElementa.innerHTML= usuarios[i] ['centroEducativo'];
                cEElementa.href =
                    'profileInfoCE.html?idCE=' + usuarios [i] ['_id'] + '&centroEducativo=' + usuarios [i] ['centroEducativo'];
                cEElementa.value =  usuarios [i] ['_id'];

                nombre.appendChild(cEElementa);
            }

        }
        carga1arr.push(usuarios[i]);
    }
    if (cargas == 0) cargando.style.visibility = 'hidden';
}

function mostrarDatos() {
    console.log(etiquetasSeleeccionadas);

    if (cargas === 0){
        let usuarios = listarUsuariosCE();
        recorrer(usuarios);
        cargas++;
    } else {
        recorrer(carga1arr);
    }

}


// de EVELYN
// 'use strict'

// const tablaPrueba = document.querySelector('#tblPrueba tbody');

// let mostrarPrueba = () =>{
//     let pruebaUtiles = listarCEducativos();
    
//     for(let i=0; i<pruebaUtiles.length; i++){

//         let fila = tablaPrueba.insertRow();

//         let nombre = fila.insertCell();
//         // let idPrueba = fila.insertCell();

//         let cEElementa = document.createElement('a');
//         cEElementa.innerHTML= usuarios[i] ['centroEducativo'];
//         cEElementa.href = 'perfilCentroPrueba.html?idCE=' + usuarios [i] ['_id'];        
//         cEElementa.value =  usuarios [i] ['_id'];
//         nombre.appendChild(cEElementa);
        


//         // let prueba = document.createElement('input');
//         // prueba.value = pruebaUtiles [i] ['_id'];
//         // idPrueba.appendChild(prueba);        
//         // prueba.classList.add('prueba');
//         // prueba.id = 'inputIDprueba';
        

         
//     }
// };

// mostrarPrueba();