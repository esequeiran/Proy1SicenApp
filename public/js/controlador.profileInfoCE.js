"use strict";

let usuarioLogeado = JSON.parse(sessionStorage.getItem("usuario"));

'use strict';
const aInfoCE = document.querySelector('#aInfoCE');
const aMatricula = document.querySelector('#aMatricula');
const aBecas = document.querySelector('#aBecas');
const aCitas = document.querySelector('#aAgendarCita');
const aMaterialInformativo = document.querySelector('#aMaterialInformativo');
const aNoticias = document.querySelector('#aNoticias');
const aActividades = document.querySelector('#aActividades');
const aUtiles = document.querySelector('#aUtiles');
const aPreguntasFrecuentes = document.querySelector('#aPreguntasFrecuentes');
// const = document.querySelector('#aEtiquetas');                          
const volver = document.querySelector('#volver');

// let agregarParametroUrl = (pParametro) => {
//
// };

let agregarVariosParametroUrl = (pParametro, ...args) => {
    let masParametros = '';
    let i = 0;
    for (let arg of args) {
        if (i === 0) masParametros += '&centroEducativo=' + arg;
        i++;
    }
    aCitas.href = 'citas.html?idCE=' + pParametro + masParametros;
    aInfoCE.href = 'informacionPersonalCEVistaOtroUsuario.html?idCE=' + pParametro + masParametros;
    aMatricula.href = 'mostrarMatriculaCostos.html?idCE=' + pParametro + masParametros;
    aBecas.href = 'mostrarBecas.html?idCE=' + pParametro + masParametros;
    aIdiomas.href = 'mostrarIdiomas.html?idCE=' + pParametro + masParametros;
    aMaterialInformativo.href = 'mostrarMaterialInformativo.html?idCE=' + pParametro + masParametros;
    aNoticias.href = 'mostrarNoticias.html?idCE=' + pParametro + masParametros;
    aActividades.href = 'listarActividades.html?idCE=' + pParametro + masParametros;
    aUtiles.href = 'listarUtiles.html?idCE=' + pParametro + masParametros;
    aPreguntasFrecuentes.href = 'preguntasFrecuentesPF.html?idCE=' + pParametro + masParametros;
};

// agregarParametroUrl(IdGeneralCE);
agregarVariosParametroUrl(IdGeneralCE, NombreGeneralCE);

function ocultar() {
    console.log(usuarioLogeado.userType);
    if (usuarioLogeado.userType == "padreFamilia") {
        document.querySelector('#menuCitasEnCE').style.display = 'block';

    } else if (usuarioLogeado.userType == "superAdministrador") {
        document.querySelector('#menuCitasEnCE').style.display = 'none';
        document.querySelector('#aCitas').style.display = 'none';

    } else {
        volver.style.display = 'none';
    }
}

ocultar();

