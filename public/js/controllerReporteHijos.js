'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));

const buttonPrint = document.querySelector('#buttonPrint');
buttonPrint.addEventListener('click', imprimir)

function imprimir() {

    window.print();
}



const tabla = document.querySelector('#tblUsuarios tbody');
const inputFiltro = document.querySelector('#txtFiltro');

if (user.userType == 'centroEducativo' || user.userType == 'padreFamilia') {
    window.location.href = 'loSentimos.html';
}
// let usuarios = listarUsuariosPF();
mostrarDatos();

inputFiltro.addEventListener('keyup', mostrarDatos);

function mostrarDatos() {

    let usuarios = listarUsuariosPF();
    console.log(usuarios);
    let filtro = inputFiltro.value;
    tabla.innerHTML = '';

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();
            let nombre = fila.insertCell();

            let celdaHijos = fila.insertCell();


            fila.insertCell().innerHTML = usuarios[i]['provincia'];


            let cEElementa = document.createElement('a');
            cEElementa.innerHTML = usuarios[i]['nombre'];
            cEElementa.href = 'profileInfoPF.html?idCE=' + usuarios[i]['_id'];
            cEElementa.value = usuarios[i]['_id'];
            nombre.appendChild(cEElementa);


            /*************** */
            let hijos = document.createElement('div');
            hijos.classList = "divHijos"

            let edades = usuarios[i].edades;
            let arregloEdades = edades.split(", ")
            console.log(arregloEdades);


            for (let i = 0; i < arregloEdades.length - 1; i++) {
                var newDiv = document.createElement('div');
                newDiv.style.display = 'block';


                var newLabel = document.createElement("label");
                newLabel.innerHTML = "Edad hijo " + Number(i + 1) + ":";



                var newSpan = document.createElement("span");
                newSpan.innerHTML = " " + arregloEdades[i];


                newDiv.appendChild(newLabel);
                newDiv.appendChild(newSpan);
                newDiv.style.padding = "5px 0px 5px 0px";

                hijos.appendChild(newDiv);
            }

            if (hijos.innerHTML == "") {
                hijos.innerHTML = "No hay hijos registrados"
            }



            celdaHijos.appendChild(hijos);



            /*************** */







        }
    }
};

