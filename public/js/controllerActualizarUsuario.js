'use strict'
// let user = JSON.parse(sessionStorage.getItem("usuario"));



//La funcion siguiente permite mostrar el formulario respectivo de cada tipo de usuario
const selectUser = user.userType;

function ocultar() {

    if (user.userType == "padreFamilia") {
        document.querySelector('#registroPadreFamilia').style.display = 'block';
        document.querySelector('#registroCentroEducativo').style.display = 'none';


    } else if (user.userType == "centroEducativo") {
        document.querySelector('#registroCentroEducativo').style.display = 'block';
        document.querySelector('#registroPadreFamilia').style.display = 'none';

    }

    else if (user.userType == "superAdministrador") {
        document.querySelector('#registroSA').style.display = 'block';
        document.querySelector('#registroPadreFamilia').style.display = 'none';

    }
}

//Esto activa la funcion al haber un campio en el select
ocultar();





//La funcion siguiente permite que se actualicen los selects dependiendo de la selccion anterior
function setDivisionPolitica(data) {

    function setProvincias(idSelectProvincia, idSelectCanton, idSelectDistrito) {

        let provincia;
        let htmlProvincias;
        htmlProvincias += "<option value=''>" + 'Provincia' + "</option>";
        for (var i = 0; i < data.provincias.length; i++) {
            // htmlProvincias += "<option value='" + data.provincias[i].title + "'>" + data.provincias[i].title + "</option>";
            htmlProvincias += `<option value="${data.provincias[i].title}" ${data.provincias[i].title == user.provincia ? 'selected' : ''}>` + data.provincias[i].title + "</option>";

        }
        const selectProvincias = document.querySelector('#' + idSelectProvincia);
        selectProvincias.innerHTML = htmlProvincias;
        selectProvincias.addEventListener('change', setCantones);
        setCantones();

        function setCantones() {
            provincia = data.provincias.find(function (current, index, arr) {
                return current.title === selectProvincias.options[selectProvincias.selectedIndex].value;
            });
            let htmlCantones;
            for (var i = 0; i < provincia.cantones.length; i++) {
                // htmlCantones += "<option value='" + provincia.cantones[i].title + "'>" + provincia.cantones[i].title + "</option>";
                htmlCantones += `<option value="${provincia.cantones[i].title}" ${provincia.cantones[i].title == user.canton ? 'selected' : ''}>` + provincia.cantones[i].title + "</option>";

            }
            const selectCantones = document.querySelector('#' + idSelectCanton);
            selectCantones.innerHTML = htmlCantones;
            selectCantones.addEventListener('change', setDistritos);
            setDistritos();

            function setDistritos() {
                const canton = provincia.cantones.find(function (current, index, arr) {
                    return current.title === selectCantones.options[selectCantones.selectedIndex].value;
                });

                let htmlDistritos;
                for (var i = 0; i < canton.distritos.length; i++) {
                    // htmlDistritos += "<option value'" + canton.distritos[i].title + "'>" + canton.distritos[i].title + "</option>";
                    htmlDistritos += `<option value="${canton.distritos[i].title}" ${canton.distritos[i].title == user.distrito ? 'selected' : ''}>` + canton.distritos[i].title + "</option>";

                }
                const selectDistritos = document.querySelector('#' + idSelectDistrito);
                selectDistritos.innerHTML = htmlDistritos;
            }
        }
    }

    setProvincias("selectProvincias", "selectCantones", "selectDistritos")
    setProvincias("selectProvinciasCE", "selectCantonesCE", "selectDistritosCE")
    setProvincias("selectProvinciasSA", "selectCantonesSA", "selectDistritosSA")
}
divisionPolitica(setDivisionPolitica)


//Los siguiente permite hacer un input nuevo por cada la cantidad de hijos seleccionada
const selectCantidadHijos = document.querySelector('#cantHijos');
selectCantidadHijos.addEventListener('change', setEdadHijos);

function setEdadHijos() {

    var newDiv = document.querySelector('.edadHijos');
    newDiv.innerHTML = '';

    for (var i = 0; i < Number(selectCantidadHijos.options[selectCantidadHijos.selectedIndex].value); i++) {

        var newSecondDiv = document.createElement('div');
        newSecondDiv.style.display = 'block';

        var newLabel = document.createElement("label");
        newLabel.innerHTML = "Edad hijo " + Number(i + 1);

        var newInput = document.createElement("input");
        newInput.classList.add('input_hijo');
        newInput.type = 'Number';

        newSecondDiv.appendChild(newLabel);
        newSecondDiv.appendChild(newInput);

        newDiv.appendChild(newSecondDiv);

    }
}

//Los siguiente permite hacer inputs nuevos por cada vez que se hace click en el boton de servicios adicionales

const buttonAgregarServicio = document.querySelector('#agregarServicios')
buttonAgregarServicio.addEventListener('click', setServicios);

function setServicios() {

    var newDiv = document.querySelector('.serviciosAdicionales');



    var newSecondDiv = document.createElement('div');
    newSecondDiv.style.display = 'block';

    var newLabel = document.createElement("label");
    newLabel.innerHTML = "Servicio adicional ";

    var newInput = document.createElement("input");
    newInput.classList.add('nombreServicio');

    var newThirdDiv = document.createElement('div');
    newThirdDiv.style.display = 'block';

    var newLabelDescripcion = document.createElement("label");
    newLabelDescripcion.innerHTML = "Descripcion: ";

    var newInputDescripcion = document.createElement("input");
    newInputDescripcion.classList.add('descripcionServicio');

    newSecondDiv.appendChild(newLabel);
    newSecondDiv.appendChild(newInput);

    newThirdDiv.appendChild(newLabelDescripcion);
    newThirdDiv.appendChild(newInputDescripcion);

    newDiv.appendChild(newSecondDiv);
    newDiv.appendChild(newThirdDiv);

    newDiv.style.height = '200px';
    newDiv.style.overflow = 'auto';

}


//Lo siguiente permite hacer inputs nuevos por cada vez que se hace click en el boton de idiomas

const buttonAgregarIdioma = document.querySelector('#agregarIdioma')
buttonAgregarIdioma.addEventListener('click', setIdiomas);

function setIdiomas() {

    var newDiv = document.querySelector('.divIdiomasOfrecidos');



    var newSecondDiv = document.createElement('div');
    newSecondDiv.style.display = 'block';

    var newLabel = document.createElement("label");
    newLabel.innerHTML = "Idioma ";

    var newInput = document.createElement("input");
    newInput.classList.add('idiomas');

    newSecondDiv.appendChild(newLabel);
    newSecondDiv.appendChild(newInput);


    newDiv.appendChild(newSecondDiv);


    newDiv.style.height = '150px';
    newDiv.style.overflow = 'auto';

}


// Agragar niveles educativos
let checkBoxEscuela = document.getElementById('checkBoxEscuela');
checkBoxEscuela.addEventListener('change', mostrarNivelesEscuela);

function mostrarNivelesEscuela() {

    var newDiv = document.querySelector('.divNivelesEscuela');
    newDiv.innerHTML = '';
    newDiv.style.marginBottom = "0px"

    if (checkBoxEscuela.checked) {
        for (var i = 0; i < 6; i++) {

            var newSecondDiv = document.createElement('div');
            newSecondDiv.style.marginBottom = "0px";

            var newLabel = document.createElement('label');
            newLabel.innerHTML = "Grado " + (i + 1);
            newLabel.style.fontSize = "small"


            var newCheckbox = document.createElement('input');
            newCheckbox.type = 'checkbox';
            newCheckbox.classList.add('gradoEducativo');
            newCheckbox.value = (i + 1)

            let gradosUsuario = user.grados.split(', ');

            for (let i = 0; i < gradosUsuario.length; i++) {
                if (gradosUsuario.indexOf(newCheckbox.value) > -1) {
                    newCheckbox.checked = true;
                }
            }



            newSecondDiv.appendChild(newCheckbox);
            newSecondDiv.appendChild(newLabel)
            newDiv.appendChild(newSecondDiv)
        }

    }
}


let checkBoxColegio = document.getElementById('checkBoxColegio');
checkBoxColegio.addEventListener('change', mostrarNivelesColegio);

function mostrarNivelesColegio() {

    var newDiv = document.querySelector('.divNivelesColegio');
    newDiv.innerHTML = '';
    newDiv.style.marginBottom = "0px"

    if (checkBoxColegio.checked) {

        for (var i = 6; i < 12; i++) {

            var newSecondDiv = document.createElement('div');
            newSecondDiv.style.marginBottom = "0px";

            var newLabel = document.createElement('label');
            newLabel.innerHTML = "Grado " + (i + 1);
            newLabel.style.fontSize = "small"


            var newCheckbox = document.createElement('input');
            newCheckbox.type = 'checkbox';
            newCheckbox.classList.add('gradoEducativo');
            newCheckbox.value = (i + 1)

            let gradosUsuario = user.grados.split(', ');

            for (let i = 0; i < gradosUsuario.length; i++) {
                if (gradosUsuario.indexOf(newCheckbox.value) > -1) {
                    newCheckbox.checked = true;
                }
            }


            newSecondDiv.appendChild(newCheckbox);
            newSecondDiv.appendChild(newLabel)
            newDiv.appendChild(newSecondDiv)

        }
    }
}


//La siguiente funcion generea una contraseña aleatoria
function passwordGen() {
    let alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    let mayuscula = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    let minuscula = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    let numeros = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    let code;
    for (let i = 0; i < 6; i++) {
        let a = mayuscula[Math.floor(Math.random() * mayuscula.length)];
        let b = minuscula[Math.floor(Math.random() * minuscula.length)];
        let c = numeros[Math.floor(Math.random() * numeros.length)];
        let d = alpha[Math.floor(Math.random() * alpha.length)];
        let e = alpha[Math.floor(Math.random() * alpha.length)];
        let f = alpha[Math.floor(Math.random() * alpha.length)];
        let g = alpha[Math.floor(Math.random() * alpha.length)];
        let h = alpha[Math.floor(Math.random() * alpha.length)];

        if (i == 5) {
            code = a + b + c + d + e + f;
        }

    }
    return code;
};

//DATOS PADRE FAMILIA

const inputNombre = document.querySelector('#txtNombre')
inputNombre.value = user.nombre;

const inputSegundoNombre = document.querySelector('#txtSegundoNombre')
inputSegundoNombre.value = user.segundoNombre;

const inputApellido = document.querySelector('#txtApellido')
inputApellido.value = user.apellido;

const inputSegundoApellido = document.querySelector('#txtSegundoApellido')
inputSegundoApellido.value = user.segundoApellido;

const inputIdentificacion = document.querySelector('#numID')
inputIdentificacion.value = user.identificacion;

const inputNacionalidad = document.querySelector('#txtNacionalidad')
inputNacionalidad.value = user.nacionalidad;

const inputEmail = document.querySelector('#txtEmail')
inputEmail.value = user.email;


const inputTel = document.querySelector('#txtTelefono')
inputTel.value = user.telefono;

if (user.userType == "padreFamilia"){

    let arregloEdades = user.edades.split(", ");


    // let divServicios = document.querySelector('#divServicios');
    // divServicios.innerHTML = '';
    let divEdades = document.querySelector('#divEdades');
    divEdades.innerHTML = '';

    for (let i = 0; i < arregloEdades.length - 1; i++) {
   
        var newDiv = document.createElement('div');
        newDiv.style.display = 'block';

        var newLabel = document.createElement("label");
        newLabel.innerHTML = "Edad hijo " + Number(i + 1);


        var newInput = document.createElement("input");
        newInput.classList.add('input_hijo');
        newInput.type = 'Number';
        newInput.value = arregloEdades[i];



        newDiv.appendChild(newLabel);
        newDiv.appendChild(newInput);



        divEdades.appendChild(newDiv);

    }

    // var newSecondDiv = document.createElement('div');
    // newSecondDiv.style.display = 'block';

    // var newLabel = document.createElement("label");
    // newLabel.innerHTML = "Edad hijo " + Number(i + 1);

    // var newInput = document.createElement("input");
    // newInput.classList.add('input_hijo');
    // newInput.type = 'Number';

    // newSecondDiv.appendChild(newLabel);
    // newSecondDiv.appendChild(newInput);

    // newDiv.appendChild(newSecondDiv);


}


const selectProvincia = document.querySelector('#selectProvincias')


const selectCanton = document.querySelector('#selectCantones')
const selectDistrito = document.querySelector('#selectDistritos')


const btnRegistroFam = document.querySelector('#btnRegistrarPadreFamilia')

const contrasennaGenerada = passwordGen()
const fotoRegistroPF = document.querySelector('#imagePreviewPF');






//DATOS CENTRO EDUCATIVO

const inputCentroEducativo = document.querySelector('#txtInstitución')
inputCentroEducativo.value = user.centroEducativo;

const inputCedulaJuridica = document.querySelector('#txtCedulaJuridica')
inputCedulaJuridica.value = user.cedulaJuridica;


const inputNombreComercial = document.querySelector('#txtComercial')
inputNombreComercial.value = user.nombreComercial;

const inputAnno = document.querySelector('#txtAnno')
inputAnno.value = user.anno;

const inputHistoria = document.querySelector('#txt_historia')
inputHistoria.value = user.histroia;

//no se usar el checkbox inst
//no se usar el checkbox clasi

const inputTelCE = document.querySelector('#txtTelefonoCE')
inputTelCE.value = user.telCE;
const inputEmailCE = document.querySelector('#txtEmailCE')
inputEmailCE.value = user.email;
const inputWeb = document.querySelector('#txtSitioWeb')
inputWeb.value = user.web;

const inputFacebook = document.querySelector('#textFacebook')
inputFacebook.value = user.facebook;

const inputTwitter = document.querySelector('#textTwitter')
inputTwitter.value = user.twitter;

const inputInstagram = document.querySelector('#textInstagram')
inputInstagram.value = user.instagram;

const inputFax = document.querySelector('#txtFAx')
inputFax.value = user.fax;

const inputNombreCEP = document.querySelector('#txtnombreCEP')
inputNombreCEP.value = user.nombreCEP;

const inputSegundoNombreCEP = document.querySelector('#textSegundoNombreCEP')
inputSegundoNombreCEP.value = user.segundoNombreCEP;

const inputApellidoCEP = document.querySelector('#textApellidoCEP')
inputApellidoCEP.value = user.apellidoCEP;

const inputSegundoApellidoCEP = document.querySelector('#textSegundoApellidoCEP')
inputSegundoApellidoCEP.value = user.inputSegundoApellidoCEP;

const inputDepartament = document.querySelector('#txtdepartamento')
inputDepartament.value = user.departamento;

const inputTelefonoCEP = document.querySelector('#txtTelefonoCEP')
inputTelefonoCEP.value = user.telCEP;

const inputExtension = document.querySelector('#txtExtension')
inputExtension.value = user.extension;

const inputNumIDCEP = document.querySelector('#txtNumIDCEP')
inputNumIDCEP.value = user.numIDCEP;

const inputEmailCEP = document.querySelector('#txtEmailCEP')
inputEmailCEP.value = user.emailCEP;

const inputDireccionExacta = document.querySelector('#textDireccionExacta')
inputDireccionExacta.value = user.direccionExacta;

const selectProvinciaCE = document.querySelector('#selectProvinciasCE')
const selectCantonCE = document.querySelector('#selectCantonesCE')
const selectDistritoCE = document.querySelector('#selectDistritosCE')

//Como actualizo el select con el dato de la provincia
selectProvinciaCE.value = user.provincia;


const fieldsetTipo = document.querySelector('#fieldsetTipo');

const imagengPF = document.querySelector('#imagePreviewPF');
imagengPF.src = user.imagenPF;

let arregloTipo = document.getElementsByClassName('checkboxTipo');
console.log(arregloTipo)

if (user.userType == "centroEducativo") {
    let nivelEducacion = user.tipo.split(", ");
    console.log(nivelEducacion)

    for (let i = 0; i < arregloTipo.length; i++) {

        if (nivelEducacion.indexOf(arregloTipo[i].value) > -1) {
            arregloTipo[i].checked = true;
            mostrarNivelesEscuela();
            mostrarNivelesColegio();
        }
    }

}

const btnRegistrarCentroEducativo = document.querySelector('#btnRegistrarCentroEducativo')

const fieldsetGenero = document.querySelector('#fieldsetGenero');
const fieldsetPrivacidad = document.querySelector('#fieldsetPrivacidad');
const fieldsetReligion = document.querySelector('#fieldsetReligion');
const fieldsetClasificacion = document.querySelector('#fieldsetClasificacion');
//Intento de mostrar clasificaion

if (user.userType == "centroEducativo") {
    let clasificacionUser = user.clasificacion.split(', ')
    let opcionesClasificacion = document.querySelectorAll('input[name="radioClasificacion"]');
    console.log(Array.from(opcionesClasificacion).map((i) => i.value));

    for (let i = 0; i < opcionesClasificacion.length; i++) {
        if (clasificacionUser.indexOf(opcionesClasificacion[i].value) > -1) {
            opcionesClasificacion[i].checked = true;
        }
    }
}

if (user.userType == "centroEducativo") {
    let generoUser = user.genero.split(', ')
    let opcionesGenero = document.querySelectorAll('input[name="rbt_sexo"]');
    console.log(Array.from(opcionesGenero).map((i) => i.value));

    for(let i = 0; i < opcionesGenero.length; i++){
        if(generoUser.indexOf(opcionesGenero[i].value) > -1){
            opcionesGenero[i].checked = true;
        }
    }

}

if (user.userType == "centroEducativo"){
    let religionUser = user.religion.split(', ');
    let opcionesReligion = document.querySelectorAll('input[name="rbt_religion"]');
    
    for(let i = 0; i < opcionesReligion.length; i++){
        if(religionUser.indexOf(opcionesReligion[i].value) > -1 ){
            opcionesReligion[i].checked = true;
        }
    }
}

if (user.userType == "centroEducativo"){
    let privacidadUser = user.privacidad.split(', ');
    let opcionesPrivacidad = document.querySelectorAll('input[name="rbt_privacidad"]');

    for(let i =0; i<opcionesPrivacidad.length; i++){
        if(privacidadUser.indexOf(opcionesPrivacidad[i].value) > -1){
            opcionesPrivacidad[i].checked = true;
        }
    }
}

if (user.userType == "centroEducativo"){

    let arregloServicios = user.servicios.split(", ");
    let arregloDescripcionesServicios = user.descipcionesServicio.split(", ");

    let divServicios = document.querySelector('#divServicios');
    divServicios.innerHTML = '';

    for (let i = 0; i < arregloServicios.length - 1; i++) {
   
        var newDiv = document.createElement('div');
        newDiv.style.display = 'block';

        var newLabel = document.createElement("label");
        newLabel.innerHTML = "Servicio adicional ";


        var newInput = document.createElement("input");
        newInput.classList.add('nombreServicio');
        newInput.value = arregloServicios[i];

        var newDivDescripciones = document.createElement('div');
        newDivDescripciones.style.display = 'block';


        var newLabelDescripciones = document.createElement("label");
        newLabelDescripciones.innerHTML = "Descripcion ";

        var newInputDescripcion = document.createElement("input");
        newInputDescripcion.classList.add('descripcionServicio');
        newInputDescripcion.value =arregloDescripcionesServicios[i];


        newDiv.appendChild(newLabel);
        newDiv.appendChild(newInput);

        newDivDescripciones.appendChild(newLabelDescripciones);
        newDivDescripciones.appendChild(newInputDescripcion);


        divServicios.appendChild(newDiv);
        divServicios.appendChild(newDivDescripciones);
    }


}






// let clasificacionSeleccionada = document.querySelector('#fieldsetClasificacion input[type=radio]:checked')


const fieldsetIdiomas = document.querySelector('#fieldsetIdiomas');
const fotoRegistroCE = document.querySelector('#imagePreview');
fotoRegistroCE.src = user.imagen;
const fotoRegistroCEP = document.querySelector('#imagePreviewCEP');
fotoRegistroCEP.src = user.imagenCEP;

const documentoCE = document.querySelector('#documentPreview');
documentoCE.src = user.documentCE;



let validarPadreFamilia = () => {
    let error = false;

    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('errorInput');
    } else {
        inputNombre.classList.remove('errorInput');
    }


    if (inputApellido.value == '') {
        error = true;
        inputApellido.classList.add('errorInput');
    } else {
        inputApellido.classList.remove('errorInput');
    }



    if (inputIdentificacion.value == '') {
        error = true;
        inputIdentificacion.classList.add('errorInput');
    } else {
        inputIdentificacion.classList.remove('errorInput');
    }

    if (inputNacionalidad.value == '') {
        error = true;
        inputNacionalidad.classList.add('errorInput');
    } else {
        inputNacionalidad.classList.remove('errorInput');
    }


    if (inputEmail.value == '') {
        error = true;
        inputEmail.classList.add('errorInput');
    } else {
        inputEmail.classList.remove('errorInput');
    }



    if (selectProvincia == '') {
        error = true;
        selectProvincia.classList.add('errorInput');
    } else {
        selectProvincia.classList.remove('errorInput');
    }





    return error;
}


function obtenerDatosPadreFamilia() {

    if (!validarPadreFamilia()) {

        let userType = "padreFamilia"
        let nombre = inputNombre.value;
        let segundoNombre = inputSegundoNombre.value
        let apellido = inputApellido.value;
        let segundoApellido = inputSegundoApellido.value
        let identificacion = inputIdentificacion.value
        let nacionalidad = inputNacionalidad.value
        let email = inputEmail.value
        let telefono = inputTel.value
        let provincia = selectProvincia.value
        let canton = selectCanton.value
        let distrito = selectDistrito.value
        let contrasenna = contrasennaGenerada
        const inputsEdades = document.querySelectorAll('.input_hijo');
        let estado = "Activo";

        let edades = "";
        for (let i = 0; i < inputsEdades.length; i++) {

            edades += inputsEdades[i].value + ', ';
        }

        let imagenPF = fotoRegistroPF.src;

        let id = user._id;

        actualizarPF(userType,
            nombre,
            segundoNombre,
            apellido,
            segundoApellido,
            identificacion,
            nacionalidad,
            email,
            telefono,
            provincia,
            canton,
            distrito,
            edades,
            imagenPF,
            estado,
            id
        )

        console.log('console.log(`La información fue enviada correctamente`);')

    } else {

        console.log(`La información no fue enviada correctamente`);

        swal.fire({
            type: 'warning',
            title: 'La informacion no fue enviada correctamente',
            text: `Porfavor revisar los campos`,

        });

    }

}

btnRegistroFam.addEventListener('click', obtenerDatosPadreFamilia);



let validarCentroEducativo = () => {
    let error = false;
    let generoSeleccionado = document.querySelector('#fieldsetGenero input[type=radio]:checked');
    let privacidadSeleccionada = document.querySelector('#fieldsetPrivacidad input[type=radio]:checked');
    let religionSeleccionada = document.querySelector('#fieldsetReligion input[type=radio]:checked');
    let clasificacionSeleccionada = document.querySelector('#fieldsetClasificacion input[type=radio]:checked')
    let tipoSeleccionado = document.querySelector('#fieldsetTipo input[type=checkbox]:checked')




    if (inputDireccionExacta.value == '') {
        error = true;
        inputDireccionExacta.classList.add('errorInput');
    } else {
        inputDireccionExacta.classList.remove('errorInput');
    }



    if (inputCentroEducativo.value == '') {
        error = true;
        inputCentroEducativo.classList.add('errorInput');
    } else {
        inputCentroEducativo.classList.remove('errorInput');
    }


    if (inputCedulaJuridica.value == '') {
        error = true;
        inputCedulaJuridica.classList.add('errorInput');
    } else {
        inputCedulaJuridica.classList.remove('errorInput');
    }


    if (inputAnno.value < 0 || inputAnno.value == "") {
        error = true;
        inputAnno.classList.add('errorInput');
    } else {
        inputAnno.classList.remove('errorInput');
    }



    if (inputEmailCE.value == '') {
        error = true;
        inputEmailCE.classList.add('errorInput');
    } else {
        inputEmailCE.classList.remove('errorInput');
    }

    // faltan fieldsets


    if (inputHistoria.value == '') {
        error = true;
        inputHistoria.classList.add('errorInput');
    } else {
        inputHistoria.classList.remove('errorInput');
    }


    if (generoSeleccionado == null) {
        error = true;
        fieldsetGenero.classList.add('errorInput');
    } else {
        fieldsetGenero.classList.remove('errorInput');
    }

    if (privacidadSeleccionada == null) {
        error = true;
        fieldsetPrivacidad.classList.add('errorInput');
    } else {
        fieldsetPrivacidad.classList.remove('errorInput');
    }

    if (religionSeleccionada == null) {
        error = true;
        fieldsetReligion.classList.add('errorInput');
    } else {
        fieldsetReligion.classList.remove('errorInput');
    }

    if (clasificacionSeleccionada == null) {
        error = true;
        fieldsetClasificacion.classList.add('errorInput');
    } else {
        fieldsetClasificacion.classList.remove('errorInput');
    }



    if (tipoSeleccionado == null) {
        error = true;
        fieldsetTipo.classList.add('errorInput');
    } else {
        fieldsetTipo.classList.remove('errorInput');
    }

    if (inputNombreCEP.value == '') {
        error = true;
        inputNombreCEP.classList.add('errorInput');
    } else {
        inputNombreCEP.classList.remove('errorInput');
    }


    if (inputApellidoCEP.value == '') {
        error = true;
        inputApellidoCEP.classList.add('errorInput');
    } else {
        inputApellidoCEP.classList.remove('errorInput');
    }


    if (inputDepartament.value == '') {
        error = true;
        inputDepartament.classList.add('errorInput');
    } else {
        inputDepartament.classList.remove('errorInput');
    }


    if (inputTelefonoCEP.value == '') {
        error = true;
        inputTelefonoCEP.classList.add('errorInput');
    } else {
        inputTelefonoCEP.classList.remove('errorInput');
    }


    if (inputExtension.value == '') {
        error = true;
        inputExtension.classList.add('errorInput');
    } else {
        inputExtension.classList.remove('errorInput');
    }


    if (inputNumIDCEP.value == '') {
        error = true;
        inputNumIDCEP.classList.add('errorInput');
    } else {
        inputNumIDCEP.classList.remove('errorInput');
    }


    if (inputEmailCEP.value == '') {
        error = true;
        inputEmailCEP.classList.add('errorInput');
    } else {
        inputEmailCEP.classList.remove('errorInput');
    }

    if (inputNombreComercial.value == '') {
        error = true;
        inputNombreComercial.classList.add('errorInput');
    } else {
        inputNombreComercial.classList.remove('errorInput');
    }

    if (inputTelCE.value == '') {
        error = true;
        inputTelCE.classList.add('errorInput');
    } else {
        inputTelCE.classList.remove('errorInput');
    }



    return error;
}




function obtenerDatosCentroEducativo() {



    if (!validarCentroEducativo()) {

        let userType = "centroEducativo"
        let centroEducativo = inputCentroEducativo.value;
        let cedulaJuridica = inputCedulaJuridica.value
        let nombreComercial = inputNombreComercial.value;
        let anno = inputAnno.value
        let genero = document.querySelector('#fieldsetGenero input[type=radio]:checked').value;
        let religion = document.querySelector('#fieldsetReligion input[type=radio]:checked').value;
        let email = inputEmailCE.value
        let telCE = inputTelCE.value
        let web = inputWeb.value
        let facebook = inputFacebook.value
        let twitter = inputTwitter.value
        let instagram = inputInstagram.value
        let fax = inputFax.value
        let histroia = inputHistoria.value
        let provincia = selectProvinciaCE.value
        let canton = selectCantonCE.value
        let distrito = selectDistritoCE.value
        let nombreCEP = inputNombreCEP.value
        let segundoNombreCEP = inputSegundoNombreCEP.value
        let apellidoCEP = inputApellidoCEP.value
        let segundoApellidoCEP = inputSegundoApellidoCEP.value

        let departamento = inputDepartament.value
        let telCEP = inputTelefonoCEP.value
        let extension = inputExtension.value
        let numIDCEP = inputNumIDCEP.value
        let emailCEP = inputEmailCEP.value
        let contrasenna = contrasennaGenerada
        let privacidad = document.querySelector('#fieldsetPrivacidad input[type=radio]:checked').value;
        let clasificacion = document.querySelector('#fieldsetClasificacion input[type=radio]:checked').value;
        let estado = "Activo";




        //Lo siguiente permite obtener los datos selccionads del checkList tipo de institucion
        let arregloTipo = document.getElementsByClassName('checkboxTipo');
        let tipo = "";
        for (let i = 0; i < arregloTipo.length; i++) {

            if (arregloTipo[i].checked === true) {
                tipo += arregloTipo[i].value + ', ';
            }
        }




        //Lo siguiente permite obtener los datos selccionads del checkList de grados
        let arregloGrados = document.getElementsByClassName('gradoEducativo');

        let grados = "";
        for (let i = 0; i < arregloGrados.length; i++) {

            if (arregloGrados[i].checked === true) {
                grados += arregloGrados[i].value + ', ';
            }
        }

        let imagen = fotoRegistroCE.src;
        let imagenCEP = fotoRegistroCEP.src;



        let direccionExacta = inputDireccionExacta.value;


        // Lo siguiente permite guardar los datos de los servicios adicionales y sus descripciones en arreglos
        const inputsServicios = document.querySelectorAll('.nombreServicio');

        let servicios = "";
        for (let i = 0; i < inputsServicios.length; i++) {

            servicios += inputsServicios[i].value + ', ';
        }

        const inputsDescripcionServicios = document.querySelectorAll('.descripcionServicio');

        let descipcionesServicio = "";
        for (let i = 0; i < inputsDescripcionServicios.length; i++) {

            descipcionesServicio += inputsDescripcionServicios[i].value + ', ';
        }

        // Lo siguiente permite guardar los datos de los idiomas
        const inputsIdioma = document.querySelectorAll('.idiomas');

        let idiomas = "";
        for (let i = 0; i < inputsIdioma.length; i++) {

            idiomas += inputsIdioma[i].value + ', ';
        }



        let documentCE = documentoCE.src;
        let id = user._id;

        actualizarCE(userType,
            centroEducativo,
            cedulaJuridica,
            nombreComercial,
            anno,
            genero,
            religion,
            email,
            telCE,
            web,
            facebook,
            twitter,
            instagram,
            fax,
            histroia,
            provincia,
            canton,
            distrito,
            nombreCEP,
            segundoNombreCEP,
            apellidoCEP,
            segundoApellidoCEP,
            departamento,
            telCEP,
            extension,
            numIDCEP,
            emailCEP,
            window.mapLatLng.lat,
            window.mapLatLng.lng,
            privacidad,
            clasificacion,
            tipo,
            grados,
            imagen,
            imagenCEP,
            direccionExacta,
            idiomas,
            servicios,
            descipcionesServicio,
            documentCE,
            id


        )

        console.log('La información fue enviada correctamente')

    } else {

        console.log(`La información no fue enviada correctamente`);

        swal.fire({
            type: 'warning',
            title: 'La informacion no fue enviada correctamente',
            text: `Porfavor revisar los campos`,

        });

    }

}

btnRegistrarCentroEducativo.addEventListener('click', obtenerDatosCentroEducativo);



/******************SA */

//DATOS SA
const inputNombreSA = document.querySelector('#txtNombreSA')
inputNombreSA.value = user.nombre;

const inputSegundoNombreSA = document.querySelector('#txtSegundoNombreSA')
inputSegundoNombreSA.value = user.segundoNombre;

const inputApellidoSA = document.querySelector('#txtApellidoSA')
inputApellidoSA.value = user.apellido;

const inputSegundoApellidoSA = document.querySelector('#txtSegundoApellidoSA')
inputSegundoApellidoSA.value = user.segundoApellido;

const inputIdentificacionSA = document.querySelector('#numIDSA')
inputIdentificacionSA.value = user.identificacion;

const inputNacionalidadSA = document.querySelector('#txtNacionalidadSA')
inputNacionalidadSA.value = user.nacionalidad;

const inputEmailSA = document.querySelector('#txtEmailSA')
inputEmailSA.value = user.email;

const inputPuestoSA = document.querySelector('#textPuestoSA');
inputPuestoSA.value = user.puesto;

const inputTelSA = document.querySelector('#txtTelefonoSA')
inputTelSA.value = user.telefono;

const imagenSA = document.querySelector('#imagePreviewSA');
imagenSA.src = user.imagenPF;


const buttonActualizarSA = document.querySelector('#buttonActualizarSA');

const selectProvinciaSA = document.querySelector('#selectProvinciasSA')
const selectCantonSA = document.querySelector('#selectCantonesSA')
const selectDistritoSA = document.querySelector('#selectDistritoSA')


// selectProvinciaSA.value = user.provincia;
// selectCantonSA.value = user.canton;
// selectDistritoSA.value = user.distrito;



let validarSA = () => {
    let error = false;

    if (inputNombreSA.value == '') {
        error = true;
        inputNombreSA.classList.add('errorInput');
    } else {
        inputNombreSA.classList.remove('errorInput');
    }


    if (inputApellidoSA.value == '') {
        error = true;
        inputApellidoSA.classList.add('errorInput');
    } else {
        inputApellidoSA.classList.remove('errorInput');
    }



    if (inputIdentificacionSA.value == '') {
        error = true;
        inputIdentificacionSA.classList.add('errorInput');
    } else {
        inputIdentificacionSA.classList.remove('errorInput');
    }

    if (inputNacionalidadSA.value == '') {
        error = true;
        inputNacionalidadSA.classList.add('errorInput');
    } else {
        inputNacionalidadSA.classList.remove('errorInput');
    }


    if (inputEmailSA.value == '') {
        error = true;
        inputEmailSA.classList.add('errorInput');
    } else {
        inputEmailSA.classList.remove('errorInput');
    }


    if (inputPuestoSA.value == '') {
        error = true;
        inputPuestoSA.classList.add('errorInput');
    } else {
        inputPuestoSA.classList.remove('errorInput');
    }




    return error;
}



function obtenerDatosSA() {

    if (!validarSA()) {

        let userType = "superAdministrador"
        let nombre = inputNombreSA.value;
        let segundoNombre = inputSegundoNombreSA.value
        let apellido = inputApellidoSA.value;
        let segundoApellido = inputSegundoApellidoSA.value
        let identificacion = inputIdentificacionSA.value
        let nacionalidad = inputNacionalidadSA.value
        let email = inputEmailSA.value
        let telefono = inputTelSA.value
        let puesto = inputPuestoSA.value


        let estado = "Activo";

        let imagenSARegistrar = imagenSA.src;

        let id = user._id;

        let provincia = selectProvinciaSA.value;
        let canton = selectCantonSA.value;
        let distrito = selectProvinciaSA.value;



        actualizarSA(userType,
            nombre,
            segundoNombre,
            apellido,
            segundoApellido,
            identificacion,
            nacionalidad,
            email,
            telefono,
            imagenSARegistrar,
            estado,
            id,
            puesto,
            provincia,
            canton,
            distrito
        )

        console.log('console.log(`La información fue enviada correctamente`);')

    } else {

        console.log(`La información no fue enviada correctamente`);

        swal.fire({
            type: 'warning',
            title: 'La informacion no fue enviada correctamente',
            text: `Porfavor revisar los campos`,

        });

    }

}

buttonActualizarSA.addEventListener('click', obtenerDatosSA);




