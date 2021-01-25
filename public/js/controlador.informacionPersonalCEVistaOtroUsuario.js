"use strict"

let user = JSON.parse(sessionStorage.getItem("usuario"));

if(user.userType == 'centroEducativo'){
    window.location.href = 'loSentimos.html';
}

function ocultar() {
    console.log(user.userType);
    if (user.userType == "padreFamilia") {
        document.querySelector('#centroEducativo').style.display = 'block';
        document.querySelector('#personalACargo').style.display = 'none';

    }else if(user.userType == "superAdministrador"){
        document.querySelector('#centroEducativo').style.display = 'block';
        
    }
}
ocultar();



function mostrarCentroEducativo (){

    let infoCE = listarCEPorOtroUsuario(IdGeneralCE);
  
    let spanInstitucion = document.getElementById('spanInstitución');
    let spanCedulaJuridica = document.getElementById('spanCedulaJuridica');
    let spanComercial = document.getElementById('spanComercial');
    let spanAnno = document.getElementById('spanAnno');
    let spanTipoInst = document.getElementById('spanTipoInst');
    let spanClasificacion = document.getElementById('spanClasificacion');
    let spanGrados = document.getElementById('spanGrados');
    let spanPrivacidad = document.getElementById('spanPrivacidad');
    let spanGenero = document.getElementById('spanGenero');
    let spanReligion = document.getElementById('spanReligion');
    let spanTelefonoCE = document.getElementById('spanTelefonoCE');
    //ambos usuarios comparten la misma variable de email
    // let spanEmailCE = document.getElementById('spanEmailCE');
    let spanSitioWeb = document.getElementById('spanSitioWeb');
    let spanFacebook = document.getElementById('spanFacebook')
    let spanTwitter = document.getElementById('spanTwitter')
    let spanInstagram = document.getElementById('spanInstagram')
    let spanFax = document.getElementById('spanFax');
    let spanHistoria = document.getElementById('spanHistoria');
    let textArea = document.getElementById('textAreaDireccionExacta')

    let spanProvinciaCE = document.getElementById('spanProvinciaCE');
    let spanNombreCEP = document.getElementById('spanNombreCEP');
    let spanSegundoNombreCEP = document.getElementById('spanSegundoNombreCEP');
    let spanApellidoCEP = document.getElementById('spanApellidoCEP');
    let spanSegundoApellidoCEP = document.getElementById('spanSegundoApellidoCEP')
    let spanDepartamento = document.getElementById('spanDepartamento');
    let spanTelefonoCEP = document.getElementById('spanTelefonoCEP');
    let spanExtension = document.getElementById('spanExtension');
    let spanNumIDCEP = document.getElementById('spanNumIDCEP');
    let spanEmailCEP = document.getElementById('spanEmailCEP');
    let imagenCE = document.getElementById('imagenCE');
    let imagenCEP = document.getElementById('imagenCEP');
    let spanEmailCE = document.getElementById('spanEmailCE');
    let spanServicios = document.getElementById('spanServicios');

    //CE
    spanInstitucion.innerHTML = infoCE [0] ['centroEducativo'];
    spanCedulaJuridica.innerHTML = infoCE [0] ['cedulaJuridica'];
    spanComercial.innerHTML = infoCE [0] ['nombreComercial'];
    spanAnno.innerHTML = infoCE [0] ['anno'];
    spanTipoInst.innerHTML = infoCE [0] ['tipo'];
    spanClasificacion.innerHTML = infoCE [0] ['clasificacion'];
    spanGrados.innerHTML = infoCE [0] ['grados'];
    spanPrivacidad.innerHTML = infoCE [0] ['privacidad'];
    spanGenero.innerHTML = infoCE [0] ['genero'];
    spanReligion.innerHTML = infoCE [0] ['religion'];
    spanTelefonoCE.innerHTML = infoCE [0] ['telCE'];
    spanSitioWeb.innerHTML = infoCE [0] ['web'];
    spanFacebook.innerHTML = infoCE [0] ['facebook'];
    spanTwitter.innerHTML = infoCE [0] ['twitter'];
    spanInstagram.innerHTML = infoCE [0] ['instagram'];

    spanFax.innerHTML = infoCE [0] ['fax'];
    spanHistoria.innerHTML = infoCE [0] ['histroia'];
    textArea.innerHTML = infoCE [0] ['direccionExacta'];
    spanProvinciaCE.innerHTML = infoCE [0] ['provincia'];
    spanCantonCE.innerHTML = infoCE [0] ['canton'];
    spanDistritoCE.innerHTML = infoCE [0] ['distrito'];
    spanNombreCEP.innerHTML = infoCE [0] ['nombreCEP'];
    spanSegundoNombreCEP.innerHTML = infoCE [0] ['segundoNombreCEP'];
    spanApellidoCEP.innerHTML = infoCE [0] ['apellidoCEP'];
    spanSegundoApellidoCEP.innerHTML = infoCE [0] ['segundoApellidoCEP'];
    spanDepartamento.innerHTML = infoCE [0] ['departamento'];
    spanTelefonoCEP.innerHTML = infoCE [0] ['telCEP'];
    spanExtension.innerHTML = infoCE [0] ['extension'];
    spanNumIDCEP.innerHTML = infoCE [0] ['numIDCEP'];
    spanEmailCEP.innerHTML = infoCE [0] ['emailCEP'];
    imagenCE.src = infoCE [0] ['imagen'];
    imagenCEP.src = infoCE [0] ['imagenCEP'];
    spanEmailCE.innerHTML = infoCE [0] ['email'];

    //let spanActividades = doucment.getElementById('spanActividades')
       
    let arregloServicios = infoCE [0] ['servicios'].split(", ");
    let arregloDescripcionesServicios = infoCE [0] ['descipcionesServicio'].split(", ");

    let divServicios = document.querySelector('#divServicios');
    divServicios.innerHTML = '';

    for (let i = 0; i < arregloServicios.length - 1; i++) {
   
        var newDiv = document.createElement('div');
        var newLabel = document.createElement("label");
        newLabel.innerHTML = "Servicio " + Number(i + 1);

        var newSpan = document.createElement("span");
        newSpan.innerHTML = " " + arregloServicios[i];
        var newDivDescripciones = document.createElement('div');
        newDivDescripciones.style.display = 'block';

        var newLabelDescripciones = document.createElement("label");
        newLabelDescripciones.innerHTML = "Descripcion ";

        var newSpanDescripciones = document.createElement("span");
        newSpanDescripciones.innerHTML = " " + arregloDescripcionesServicios[i];
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newSpan);
        newDivDescripciones.appendChild(newLabelDescripciones);
        newDivDescripciones.appendChild(newSpanDescripciones);
        divServicios.appendChild(newDiv);
        divServicios.appendChild(newDivDescripciones);
    }
}
mostrarCentroEducativo();

let infoCE = listarCEPorOtroUsuario(IdGeneralCE);

const latCE = infoCE [0] ['lat'];
const lngCE= infoCE [0] ['lng'];


