'use strict'

//Falta selects por provincia
//falta generar un correo
//genre un captcha
// el correo es para padres de familia
// para los centros educativos se envia una notificacion al admi
// hay que agregar ubicacion
//agregar fotos
//agragar email a centro educativo


//La funcion siguiente permite que se actualicen los selects dependiendo de la selccion anterior
function setDivisionPolitica(data) {

    function setProvincias(idSelectProvincia, idSelectCanton, idSelectDistrito) {

        let provincia;
        let htmlProvincias;
        for (var i = 0; i < data.provincias.length; i++) {
            htmlProvincias += "<option value='" + data.provincias[i].title + "'>" + data.provincias[i].title + "</option>";
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
                htmlCantones += "<option value='" + provincia.cantones[i].title + "'>" + provincia.cantones[i].title + "</option>";
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
                    htmlDistritos += "<option value'" + canton.distritos[i].title + "'>" + canton.distritos[i].title + "</option>";
                }
                const selectDistritos = document.querySelector('#' + idSelectDistrito);
                selectDistritos.innerHTML = htmlDistritos;
            }
        }
    }

    setProvincias("selectProvincias", "selectCantones", "selectDistritos")
    setProvincias("selectProvinciasCE", "selectCantonesCE", "selectDistritosCE")
}
divisionPolitica(setDivisionPolitica)


//Edad de hijos
const selectCantidadHijos = document.querySelector('#cantHijos');
selectCantidadHijos.addEventListener('change', setEdadHijos);

function setEdadHijos() {

  

    var newDiv = document.querySelector('.edadHijos');
    newDiv.innerHTML = '';

    for (var i = 0; i < Number(selectCantidadHijos.options[selectCantidadHijos.selectedIndex].value); i++) {

            var newSecondDiv = document.createElement('div');
            newSecondDiv.style.display = 'block';

   
            var newLabel = document.createElement("label");
            newLabel.innerHTML = "Edad hijo " + Number(i+1);
          

            var newInput = document.createElement("input");
            newInput.classList.add('input_hijo');
          
        
            newSecondDiv.appendChild(newLabel);
            newSecondDiv.appendChild(newInput);

            newDiv.appendChild(newSecondDiv);
        
    }



}




//La funcion siguiente permite mostrar el formulario respectivo de cada tipo de usuario
const selectUser = document.querySelector('#selectUser')

function ocultar() {
    console.log(this.value);
    if (this.value == "padreFamilia") {
        document.querySelector('#registroPadreFamilia').style.display = 'block';
        document.querySelector('#registroCentroEducativo').style.display = 'none';


    } else if (this.value == "centroEducativo") {
        document.querySelector('#registroCentroEducativo').style.display = 'block';
        document.querySelector('#registroPadreFamilia').style.display = 'none';

    }

}

//Esto activa la funcion al haber un campio en el select
selectUser.addEventListener('change', ocultar);


//La siguiente funcion generea una contraseña aleatoria
function passwordGen() {
    let alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    let mayuscula = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    let minuscula = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    let numeros = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    let code;
    for (let i = 0; i < 8; i++) {
        let a = mayuscula[Math.floor(Math.random() * mayuscula.length)];
        let b = minuscula[Math.floor(Math.random() * minuscula.length)];
        let c = numeros[Math.floor(Math.random() * numeros.length)];
        let d = alpha[Math.floor(Math.random() * alpha.length)];
        let e = alpha[Math.floor(Math.random() * alpha.length)];
        let f = alpha[Math.floor(Math.random() * alpha.length)];
        let g = alpha[Math.floor(Math.random() * alpha.length)];
        let h = alpha[Math.floor(Math.random() * alpha.length)];

        if (i == 7) {
            code = a + b + c + d + e + f + g + h;

        }

    }
    return code;
};

//DATOS PADRE FAMILIA

const inputNombre = document.querySelector('#txtNombre')
const inputSegundoNombre = document.querySelector('#txtSegundoNombre')
const inputApellido = document.querySelector('#txtApellido')
const inputSegundoApellido = document.querySelector('#txtSegundoApellido')
const inputIdentificacion = document.querySelector('#numID')
const inputNacionalidad = document.querySelector('#txtNacionalidad')
const inputEmail = document.querySelector('#txtEmail')
const inputTel = document.querySelector('#txtTelefono')
const selectProvincia = document.querySelector('#selectProvincias')
const selectCanton = document.querySelector('#selectCantones')
const selectDistrito = document.querySelector('#selectDistritos')
const btnRegistroFam = document.querySelector('#btnRegistrarPadreFamilia')

const contrasennaGenerada = passwordGen()


//DATOS CENTRO EDUCATIVO

const inputCentroEducativo = document.querySelector('#txtInstitución')
const inputCedulaJuridica = document.querySelector('#txtCedulaJuridica')
const inputNombreComercial = document.querySelector('#txtComercial')
const inputAnno = document.querySelector('#txtAnno')
//no se usar el checkbox inst
//no se usar el checkbox clasi

const inputTelCE = document.querySelector('#txtTelefonoCE')
const inputEmailCE = document.querySelector('#txtEmailCE')
const inputWeb = document.querySelector('#txtSitioWeb')
const inputFax = document.querySelector('#txtFAx')
const inputHistoria = document.querySelector('#txt_historia')
const selectProvinciaCE = document.querySelector('#selectProvinciasCE')
const selectCantonCE = document.querySelector('#selectCantonesCE')
const selectDistritoCE = document.querySelector('#selectDistritosCE')
const inputNombreCEP = document.querySelector('#txtnombreCEP')
const inputDepartament = document.querySelector('#txtdepartamento')
const inputTelefonoCEP = document.querySelector('#txtTelefonoCEP')
const inputExtension = document.querySelector('#txtExtension')
const inputNumIDCEP = document.querySelector('#txtNumIDCEP')
const inputEmailCEP = document.querySelector('#txtEmailCEP')
const btnRegistrarCent = document.querySelector('#btnRegistrarCentroEducativo')

const fieldsetGenero = document.querySelector('#fieldsetGenero');
const fieldsetPrivacidad = document.querySelector('#fieldsetPrivacidad');
const fieldsetReligion = document.querySelector('#fieldsetReligion');
const fieldsetClasificacion = document.querySelector('#fieldsetClasificacion');
const fieldsetTipo = document.querySelector('#fieldsetTipo');


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

        let edades ="";
        for(let i = 0; i<inputsEdades.length; i++){

         edades += inputsEdades[i].value + ', ';
        }

        console.log(contrasenna)
        registrarPadreFamilia(userType,
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
            contrasenna,
            edades
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
    // let tipoSeleccionado = document.querySelector('#fieldsetTipo input[type=checkbox]:checked')

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



    if (inputNombreComercial.value == '') {
        error = true;
        inputNombreComercial.classList.add('errorInput');
    } else {
        inputNombreComercial.classList.remove('errorInput');
    }


    if (inputAnno.value == '') {
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

   
    if(generoSeleccionado == null){
        error = true;
        fieldsetGenero.classList.add('errorInput');
    } else {
        fieldsetGenero.classList.remove('errorInput');
    }

    if(privacidadSeleccionada == null){
        error = true;
        fieldsetPrivacidad.classList.add('errorInput');
    } else {
        fieldsetPrivacidad.classList.remove('errorInput');
    }

    if(religionSeleccionada == null){
        error = true;
        fieldsetReligion.classList.add('errorInput');
    } else {
        fieldsetReligion.classList.remove('errorInput');
    }

    if(clasificacionSeleccionada == null){
        error = true;
        fieldsetClasificacion.classList.add('errorInput');
    } else {
        fieldsetClasificacion.classList.remove('errorInput');
    }

    // if(tipoSeleccionado == null){
    //     error = true;
    //     fieldsetTipo.classList.add('errorInput');
    // } else {
    //     fieldsetTipo.classList.remove('errorInput');
    // }




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
        let fax = inputFax.value
        let histroia = inputHistoria.value
        let provincia = selectProvinciaCE.value
        let canton = selectCantonCE.value
        let distrito = selectDistritoCE.value
        let nombreCEP = inputNombreCEP.value
        let departamento = inputDepartament.value
        let telCEP = inputTelefonoCEP.value
        let extension = inputExtension.value
        let numIDCEP = inputNumIDCEP.value
        let emailCEP = inputEmailCEP.value
        let contrasenna = contrasennaGenerada
        let privacidad = document.querySelector('#fieldsetPrivacidad input[type=radio]:checked').value;
        let clasificacion = document.querySelector('#fieldsetClasificacion input[type=radio]:checked').value;
        // let arregloTipo = document.querySelectorAll('.checkboxTipo input[type=checkbox]:checked').value;
        
        // const inputsEdades = document.querySelectorAll('.input_hijo');

        // let tipo ="";
        // for(let i = 0; i<arregloTipo.length; i++){

        //     tipo += arregloTipo[i].value + ', ';
        // }


        registrarCentroEducativo(userType,
            centroEducativo,
            cedulaJuridica,
            nombreComercial,
            anno,
            genero,
            religion,
            email,
            telCE,
            web,
            fax,
            histroia,
            provincia,
            canton,
            distrito,
            nombreCEP,
            departamento,
            telCEP,
            extension,
            numIDCEP,
            emailCEP,
            window.mapLatLng.lat,
            window.mapLatLng.lng,
            contrasenna,
            privacidad,
            clasificacion,
            // tipo
           

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

btnRegistrarCent.addEventListener('click', obtenerDatosCentroEducativo);


