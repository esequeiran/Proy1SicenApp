'use strict';

if (user.userType == 'padreFamilia'){
    document.getElementById('sltEtiquetasDiv').style.visibility = 'hidden';
}

let diUser = JSON.parse(sessionStorage.getItem("usuario"));

const sltEtiquetas = document.querySelector('#sltEtiquetas');
const tablaEtiquetas = document.querySelector('#tblEtiquetasSeleccionadas tbody');
let contador = 0;
let etiquetasSeleeccionadas = [];
let fila = tablaEtiquetas.insertRow();

let etiquetas = getCriteriosBusqueda();

// let idCentroEducativo;

if (user.userType == 'padreFamilia' || user.userType == 'superAdministrador' ){
    idCentroEducativo = IdGeneralCE;

}else {
    idCentroEducativo = diUser._id;
}


let desmarcarEtiquetaCE = (pid, presponsable) =>{

    Swal.fire({
        title: '¿Está seguro que desea desmarcar la etiqueta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {

            desmarcarEtiqueta(pid, presponsable);
            let elementoEliminado = document.getElementById(`${pid}`);
            elementoEliminado.parentNode.removeChild(elementoEliminado);
        } else {
            swal.fire({
                title: 'No se eliminó la etiqueta',
                type: 'info',
                showConfirmButton: false,
                timer: 1000
            });
        }
        // setTimeout('location.reload()', 1500);
    })

};

let etiquetasCE = getCriteriosBusquedaMarcados(idCentroEducativo);

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
    if (typeof etiquetasCE != 'string') {
        for (let j = 0; j < etiquetasCE.length; j++) {

            if (contador%3 == 0 && j > 0) fila = tablaEtiquetas.insertRow();


            contador++;

            let nombreEtiqueta = fila.insertCell();
            nombreEtiqueta.textContent = etiquetasCE[j]['nombre'];
            nombreEtiqueta.id = `${etiquetasCE[j]['_id']}`;
            if (user.userType != "padreFamilia") {

                document.getElementById(`${nombreEtiqueta.id}`).insertAdjacentHTML('beforeend', `<div class="awesome_images" id="awsm_${nombreEtiqueta.id}"><i class="fas fa-trash-alt" id="eliminar_${nombreEtiqueta.id}"></i></div>`);
                document.getElementById(`awsm_${nombreEtiqueta.id}`).addEventListener('click', ev => {
                    desmarcarEtiquetaCE(nombreEtiqueta.id, responsable);
                });
            }
            etiquetasSeleeccionadas.push(nombreEtiqueta.textContent);
        }
    }
};

cargarEtiquetas();


let agregarEtiquetas = () =>{

    if (contador%3 == 0) fila = tablaEtiquetas.insertRow();

    contador++;

    let opcionSeleccionada = sltEtiquetas.options[sltEtiquetas.selectedIndex];
    opcionSeleccionada.id = sltEtiquetas.options[sltEtiquetas.selectedIndex].id;
    console.log(opcionSeleccionada.id);
    if (!(etiquetasSeleeccionadas.includes(opcionSeleccionada.value))) {
        let etiqueta = fila.insertCell();
        etiqueta.id = opcionSeleccionada.textContent + '_seleccionada';
        console.log(document.querySelector(`#${etiqueta.id}`));
        etiqueta.textContent = opcionSeleccionada.textContent;
        if (user.userType != "padreFamilia") {

            document.querySelector(`#${etiqueta.id}`).insertAdjacentHTML('beforeend', `<div class="awesome_images" id="awsm_${etiqueta.id}"><i class="fas fa-trash-alt" id="eliminar_${etiqueta.id}"></i></div>`);
            document.getElementById(`awsm_${etiqueta.id}`).addEventListener('click', ev => {
                desmarcarEtiquetaCE(opcionSeleccionada.id, responsable);
            });
        }
        // let awesome = document.createElement('div');
        // let basurero = document.createElement('i');
        // awesome.classList.add('awesome_images');
        // basurero.classList.add('fas');
        // basurero.classList.add('fa-trash-alt');
        // document.querySelector(`#${etiqueta.id}`).appendChild(awesome);
        // awesome.appendChild(basurero);
        marcarCriterioBusqueda(etiqueta.textContent, idCentroEducativo, responsable);
        etiquetasSeleeccionadas.push(etiqueta.textContent);
    } else {
        contador--;
        // fila.deleteCell();
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