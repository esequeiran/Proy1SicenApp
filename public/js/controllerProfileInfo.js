"use strict";

// if (user == undefined) {
//     let user = JSON.parse(sessionStorage.getItem("usuario"));
// }

let user = JSON.parse(sessionStorage.getItem("usuario"));
let userLog = JSON.parse(sessionStorage.getItem("usuario"));

if (user.estado != "Activo"){
    sessionStorage.setItem('usuario', null);
    window.location.href = 'loSentimosEstadoNoPermitido.html';
}

function ocultar() {
    console.log(userLog.userType);
    if (userLog.userType == "padreFamilia") {
        document.querySelector('#menuAdministrativo').style.display = 'none';
        document.querySelector('#menuInformativo').style.display = 'none';
        // document.querySelector('#menuReportes').style.display = 'none';
        document.querySelector('#aRegistrarCE').style.display = 'none';
        document.querySelector('#verPadres').style.display = 'none';
        document.querySelector('#aPreguntasCE').style.display = 'none';
        document.querySelector('#reportesSA').style.display = 'none';
        document.querySelector('#adminCE').style.display = 'none';
        // document.querySelector('#aEliminarCE').style.display = 'none';
        // document.querySelector('#aActivarDesCE').style.display = 'none'; 
        // document.querySelector('#adminCE').style.display = 'none';
        // document.querySelector('#adminPF').style.display = 'none';
        document.querySelector('#reportesCE').style.display = 'none';
        document.querySelector('#aEvaluarCE').style.display = 'none';


    } else if (userLog.userType == "centroEducativo") {
        document.querySelector('#menuAdministrativo').style.display = 'none';
        document.querySelector('#menuInfoCE').style.display = 'none';
        // document.querySelector('#aHijos').style.display = 'none';
        document.querySelector('#menuCitasPF').style.display = 'none';
        document.querySelector('#verPadres').style.display = 'none';
        document.querySelector('#aPreguntasPF').style.display = 'none';
        document.querySelector('#reportesSA').style.display = 'none';


    } else if (userLog.userType == "superAdministrador") {
        document.querySelector('#menuInformativo').style.display = 'none';
        document.querySelector('#menuCitasPF').style.display = 'none';
        document.querySelector('#aFavoritos').style.display = 'none';
        document.querySelector('#aCEcercanos').style.display = 'none';
        document.querySelector('#verInfoMep').style.display = 'none';
        document.querySelector('#reportesCE').style.display = 'none';
    }

}

ocultar();

let mostrarDatosCE = () => {
    let centroEducativo = listarUsuariosCEencabezado(IdGeneralCE);

    console.log(centroEducativo);

    let foto = document.querySelector('.photoCE');
    let nombre = document.querySelector('.info h2');
    let direccion = document.querySelector('.info h3');

    foto.src = centroEducativo[0]['imagen'];
    nombre.textContent = centroEducativo[0]['centroEducativo'];
    direccion.textContent = centroEducativo[0]['direccionExacta'];

    if (foto.src === ''){
        foto.src = 'img/icons8-user.png'
    }
    foto.style.backgroundImage = `url(${foto .src})`;

};

mostrarDatosCE();

// switch (user.userType) {
//     case "padreFamilia":
//         padreFamilia();
//         break;
//     case "superAdministrador":
//         superAdministrador();
//         break;
//     case "centroEducativo":
//         centroEducativo();
//         break;
//     default:
//         break;


// }

// function padreFamilia(){
//     //PF
//     let spanNombre = document.getElementById('spanNombre');
//     let spanSegundoNombre = document.getElementById('spanSegundoNombre');
//     let spanApellido = document.getElementById('spanApellido');
//     let spanNumID = document.getElementById('spanSegundoApellido');
//     let spanSegundoApellido = document.getElementById('spanNumID');
//     let spanNacionalidad = document.getElementById('spanNacionalidad');
//     let spanEmail = document.getElementById('spanEmail');
//     let spanTelefono = document.getElementById('spanTelefono');
//     let spanProvincia = document.getElementById('spanProvincia');
//     let spanCanton = document.getElementById('spanCanton');
//     let spanDistrito = document.getElementById('spanDistrito');
//     let spanHijos = document.getElementById('spanHijos');
//     let imagenPF = document.getElementById('imagenPF');


//     //PF

//     spanNombre.innerHTML = user.nombre;
//     spanSegundoNombre.innerHTML = user.segundoNombre;
//     spanApellido.innerHTML = user.apellido;
//     spanNumID.innerHTML = user.segundoApellido;
//     spanSegundoApellido.innerHTML = user.identificacion;
//     spanNacionalidad.innerHTML = user.nacionalidad;
//     spanEmail.innerHTML = user.email;
//     spanTelefono.innerHTML = user.telefono;
//     spanProvincia.innerHTML = user.provincia;
//     spanCanton.innerHTML = user.canton;
//     spanDistrito.innerHTML = user.distrito;
//     imagenPF.src = user.imagenPF;




//         let arregloEdades = user.edades.split(", ");
//         spanHijos.innerHTML = arregloEdades.length - 1;

//         let divEdadHijos = document.querySelector('#divEdadHijos');
//         divEdadHijos.innerHTML = '';

//         for (let i = 0; i < arregloEdades.length - 1; i++) {
//             var newDiv = document.createElement('div');
//             newDiv.style.display = 'block';


//             var newLabel = document.createElement("label");
//             newLabel.innerHTML = "Edad hijo " + Number(i + 1);


//             var newSpan = document.createElement("span");
//             newSpan.innerHTML = " " + arregloEdades[i];


//             newDiv.appendChild(newLabel);
//             newDiv.appendChild(newSpan);

//             divEdadHijos.appendChild(newDiv);
//         }



//     //  imagenPF.src = user.imagen;
// }

// function superAdministrador(){
//     let spanNombreSA = document.getElementById('spanNombreSA');
//     let spanSegundoNombreSA = document.getElementById('spanSegundoNombreSA');
//     let spanApellidoSA = document.getElementById('spanApellidoSA');
//     let spanSegundoApellidoSA = document.getElementById('spanSegundoApellidoSA');
//     let spanNumIDSA = document.getElementById('spanNumIDSA');
//     let spanNacionalidadSA = document.getElementById('spanNacionalidadSA');
//     let spanEmailSA = document.getElementById('spanEmailSA');
//     let spanTelefonoSA = document.getElementById('spanTelefonoSA');
//     let spanPuestoMEPSA = document.getElementById('spanPuestoMEPSA');    
//     let imagenSA = document.getElementById('imagenSA');


//     spanNombreSA.innerHTML = user.nombre;
//     spanSegundoNombreSA.innerHTML = user.segundoNombre;
//     spanApellidoSA.innerHTML = user.apellido;
//     spanSegundoApellidoSA.innerHTML = user.segundoApellido;
//     spanNumIDSA.innerHTML = user.identificacion;
//     spanNacionalidadSA.innerHTML = user.nacionalidad;
//     spanEmailSA.innerHTML = user.email;
//     spanTelefonoSA.innerHTML = user.telefono;
//     spanPuestoMEPSA.innerHTML = user.puesto;
//     imagenSA.innerHTML = user.imagenSA;

// }

// function centroEducativo(){


//     //CE
//     let spanInstitución = document.getElementById('spanInstitución');
//     let spanCedulaJuridica = document.getElementById('spanCedulaJuridica');
//     let spanComercial = document.getElementById('spanComercial');
//     let spanAnno = document.getElementById('spanAnno');
//     let spanTipoInst = document.getElementById('spanTipoInst');
//     let spanClasificacion = document.getElementById('spanClasificacion');
//     let spanGrados = document.getElementById('spanGrados');
//     let spanPrivacidad = document.getElementById('spanPrivacidad');
//     let spanGenero = document.getElementById('spanGenero');
//     let spanReligion = document.getElementById('spanReligion');
//     let spanTelefonoCE = document.getElementById('spanTelefonoCE');
//     //ambos usuarios comparten la misma variable de email
//     // let spanEmailCE = document.getElementById('spanEmailCE');
//     let spanSitioWeb = document.getElementById('spanSitioWeb');


//     let spanFacebook = document.getElementById('spanFacebook')
//     let spanTwitter = document.getElementById('spanTwitter')
//     let spanInstagram = document.getElementById('spanInstagram')


//     let spanFax = document.getElementById('spanFax');
//     let spanHistoria = document.getElementById('spanHistoria');
//     let textArea = document.getElementById('textAreaDireccionExacta')

//     let spanProvinciaCE = document.getElementById('spanProvinciaCE');
//     let spanNombreCEP = document.getElementById('spanNombreCEP');
//     let spanSegundoNombreCEP = document.getElementById('spanSegundoNombreCEP');
//     let spanApellidoCEP = document.getElementById('spanApellidoCEP');
//     let spanSegundoApellidoCEP = document.getElementById('spanSegundoApellidoCEP')
//     let spanDepartamento = document.getElementById('spanDepartamento');
//     let spanTelefonoCEP = document.getElementById('spanTelefonoCEP');
//     let spanExtension = document.getElementById('spanExtension');
//     let spanNumIDCEP = document.getElementById('spanNumIDCEP');
//     let spanEmailCEP = document.getElementById('spanEmailCEP');
//     let imagenCE = document.getElementById('imagenCE');
//     let imagenCEP = document.getElementById('imagenCEP');
//     let spanEmailCE = document.getElementById('spanEmailCE');
//     let spanServicios = document.getElementById('spanServicios');

//     //CE
//     spanInstitución.innerHTML = user.centroEducativo;
//     spanCedulaJuridica.innerHTML = user.cedulaJuridica;
//     spanComercial.innerHTML = user.nombreComercial;
//     spanAnno.innerHTML = user.anno;
//     spanTipoInst.innerHTML = user.tipo;
//     spanClasificacion.innerHTML = user.clasificacion;
//     spanGrados.innerHTML = user.grados;
//     spanPrivacidad.innerHTML = user.privacidad;
//     spanGenero.innerHTML = user.genero;
//     spanReligion.innerHTML = user.religion;
//     spanTelefonoCE.innerHTML = user.telCE;
//     spanSitioWeb.innerHTML = user.web;
//     spanFacebook.innerHTML = user.facebook;
//     spanTwitter.innerHTML = user.twitter;
//     spanInstagram.innerHTML = user.instagram;

//     spanFax.innerHTML = user.fax;
//     spanHistoria.innerHTML = user.histroia;
//     textArea.innerHTML = user.direccionExacta;
//     spanProvinciaCE.innerHTML = user.provincia;
//     spanCantonCE.innerHTML = user.canton;
//     spanDistritoCE.innerHTML = user.distrito;
//     spanNombreCEP.innerHTML = user.nombreCEP;
//     spanSegundoNombreCEP.innerHTML = user.segundoNombreCEP;
//     spanApellidoCEP.innerHTML = user.apellidoCEP;
//     spanSegundoApellidoCEP.innerHTML = user.segundoApellidoCEP;
//     spanDepartamento.innerHTML = user.departamento;
//     spanTelefonoCEP.innerHTML = user.telCEP;
//     spanExtension.innerHTML = user.extension;
//     spanNumIDCEP.innerHTML = user.numIDCEP;
//     spanEmailCEP.innerHTML = user.emailCEP;
//     imagenCE.src = user.imagen;
//     imagenCEP.src = user.imagenCEP;
//     spanEmailCE.innerHTML = user.email;

//     //let spanActividades = doucment.getElementById('spanActividades')

//     let arregloServicios = user.servicios.split(", ");
//     let arregloDescripcionesServicios = user.descipcionesServicio.split(", ");

//     let divServicios = document.querySelector('#divServicios');
//     divServicios.innerHTML = '';

//     for (let i = 0; i < arregloServicios.length - 1; i++) {

//         var newDiv = document.createElement('div');
//         newDiv.style.display = 'block';

//         var newLabel = document.createElement("label");
//         newLabel.innerHTML = "Servicio " + Number(i + 1);


//         var newSpan = document.createElement("span");
//         newSpan.innerHTML = " " + arregloServicios[i];


//         var newDivDescripciones = document.createElement('div');
//         newDivDescripciones.style.display = 'block';

//         var newLabelDescripciones = document.createElement("label");
//         newLabelDescripciones.innerHTML = "Descripcion ";

//         var newSpanDescripciones = document.createElement("span");
//         newSpanDescripciones.innerHTML = " " + arregloDescripcionesServicios[i];



//         newDiv.appendChild(newLabel);
//         newDiv.appendChild(newSpan);

//         newDivDescripciones.appendChild(newLabelDescripciones);
//         newDivDescripciones.appendChild(newSpanDescripciones);


//         divServicios.appendChild(newDiv);
//         divServicios.appendChild(newDivDescripciones);
//     }
// }












