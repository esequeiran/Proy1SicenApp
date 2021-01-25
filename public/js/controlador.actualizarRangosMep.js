
'use strict';
// let user = JSON.parse(sessionStorage.getItem("usuario"));
const selectRangos= document.querySelector('#selectRangos');
const selectValorMinimo= document.querySelector('#selectValorMinimo');
const selectValorMaximo= document.querySelector('#selectValorMaximo');
const selectEstrellas= document.querySelector('#selectEstrellas');
const botonActualizarRango= document.querySelector('#btnRegistrarRango');
let nombreUsuario = user.centroEducativo;
if(user.userType == 'centroEducativo' || user.userType == 'padreFamilia'){
    window.location.href = 'loSentimos.html';
}

let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);//Toma el parámetro id_inmueble del url y retorna el valor
    return id;
};


let _id = get_param('idRango');
let rango = buscarRango(_id); //se levantan los datos de ese inmueble bajo demanda usando su id
let idObjeto = rango[0]['_id'];

let mostrarDatoRango = () =>{
    selectRangos.value = rango[0]['rango'];
    selectValorMinimo.value = rango[0]['valorMinimo']
    selectValorMaximo.value = rango[0]['valorMaximo']
    selectEstrellas.value = rango[0]['estrellas']
};

if(rango){
    mostrarDatoRango();
}

let validarRango = () =>{
    let error = false;

    if(selectRangos.value == ''){
        error = true;
        selectRangos.classList.add('errorInput');
    }else{
        selectRangos.classList.remove('errorInput');
    }

    if(selectValorMinimo.value == '' || Number(selectValorMinimo.value) > Number(selectValorMaximo.value)){
        error = true;
        selectValorMinimo.classList.add('errorInput');
    }else{
        selectValorMinimo.classList.remove('errorInput');
    }

    if(selectValorMaximo.value == '' || Number(selectValorMaximo.value) < Number(selectValorMinimo.value)){
        error = true;
        selectValorMaximo.classList.add('errorInput');
    }else{
        selectValorMaximo.classList.remove('errorInput');
    }

    if(selectEstrellas.value == ''){
        error = true;
        selectEstrellas.classList.add('errorInput');
    }else{
        selectEstrellas.classList.remove('errorInput');
    }
    
    return error;
    
};

let validarDatosExistentes= () =>{
    let error = false;

    let errorRango = false;
    let errorMinimo = false;
    let errorMaximo = false;
    let rangos = Number(selectRangos.value);
    let minimo = Number(selectValorMinimo.value);
    let maximo = Number(selectValorMaximo.value);
    let rangoAnterior = 0, rangoPosterior = 0;   
    let valorMinimoRangoPosterior = 101;
    let valorMaximoRangoAnterior = 0; 

    let todosRangos = listarRangos();
    rangoAnterior = rangos > 1 ? rangos - 1 : 0;
    rangoPosterior = rangos < 5 ? rangos + 1 : 5;
    console.log(maximo);
    for(let i = 0; i < todosRangos.length; i++){

        if(todosRangos[i] ['_id'] != idObjeto){
            if(todosRangos [i] ['rango'] == selectRangos.value){
                errorRango = true;                              
            }else{
                errorRango = false;                                 
            } 
            console.log("error rango para tipo rango"+errorRango); 
            if(todosRangos [i] ['estrellas'] == selectEstrellas.value){             
                    errorRango = true;                    
            }else{
                errorRango = false;                 
            }
                console.log("error rango para estrellas"+errorRango); 

            if(todosRangos [i] ['rango'] == rangoAnterior ){
                valorMaximoRangoAnterior = todosRangos [i] ['valorMaximo'];
            }
            console.log(rangoPosterior);
            if (todosRangos [i] ['rango'] == rangoPosterior){
                valorMinimoRangoPosterior = todosRangos [i] ['valorMinimo'];
            }    
        }    
    }
    errorMinimo = valorMaximoRangoAnterior < minimo ? false : true;
    console.log(valorMinimoRangoPosterior);
    errorMaximo = valorMinimoRangoPosterior > maximo ? false : true;
    console.log("error minimo "+errorMinimo);
    console.log("error maximo "+errorMaximo);
    console.log("error rango "+errorRango);
    error = (errorRango == false && errorMinimo == false && errorMaximo == false) ? false : true;
    return error;
}


let obtenerDatosRango = () =>{
    if(validarRango() == false ){
        if(validarDatosExistentes() == false ){   
            let rango = Number(selectRangos.value);
            let valorMinimo = Number(selectValorMinimo.value);
            let valorMaximo = Number(selectValorMaximo.value);
            let estrellas = selectEstrellas.value;            

            Swal.fire({
                title: '¿Está seguro que desea actualizar el criterio de evaluación?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, estoy seguro'
              }).then((result) => {
                if (result.value) {
                    actualizarRango(rango, valorMinimo, valorMaximo, estrellas, _id, nombreUsuario);
                }
              })
        }else{
            swal.fire({
                type: 'warning',
                title: 'El rango no se actualizó correctamente',
                text: 'El rango ya existe o el puntaje excede el máximo permitido'
            });
        }        
    }else{
        swal.fire({
            type: 'warning',
            title: 'El rango no se actualizó',
            text: 'Por favor revise los campos resaltados'
        });
    }
};

botonActualizarRango.addEventListener('click', obtenerDatosRango);
