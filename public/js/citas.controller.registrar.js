'use strict';

const inputFecha = document.querySelector('#fechaCita');
const inputHora = document.querySelector('#horaCita');
const btnAgendar = document.querySelector('#btnAgendar');
const lblERRFecha = document.querySelector('#lblERRFecha');
const lblERRHora = document.querySelector('#lblERRHora');

let daUser = JSON.parse(sessionStorage.getItem('usuario'));

if (location.pathname.split("/").slice(-1) == 'profileInfoCE.html' && daUser.userType == 'superAdministrador'){
    let form  = document.getElementById('frmAgendar');
    form.innerHTML = '';
    form.insertAdjacentHTML('beforeend', `<div class="errorUser">Solo los padres de familia pueden agendar cita.</div>`);
}

 if(daUser.daUserType === 'centroEducativo' || NombreGeneralCE == ''){
    if (location.pathname.split("/").slice(-1) !== 'loSentimos.html')  setTimeout(location.href='loSentimos.html', 0);
}

/*IMPORTANTE

    * Falta obtener el nombre y el correo del padre de familia que ha iniciado sesión
    * Falta obtener el nombre del centro educativo con el que se está agendando la cita
    * POR ESTOS MOTIVOS, EL NOMBRE DEL CENTRO EDUCARTIVO Y EL CORREO Y NOMBRE DEL PADRE ESTÁN QUEMADOS

 */

let validarCita = () =>{
    let error = false;

    let fechaHoraIngresada =  new Date(inputFecha.value + ' ' + inputHora.value);

    let diasDiferencia = new moment(fechaHoraIngresada).diff(new Date(), 'days');
    let esDiaHabil;

    switch(fechaHoraIngresada.getDay()){
        case 0:
            console.log("Domingo");
            esDiaHabil = false;
            break;
        case 6:
            console.log("Sábado");
            esDiaHabil = false;
            break;
        default:
            esDiaHabil = true;
    }

    // let fechaHoraIngresada =  new Date(inputFecha.value + ' ' + inputHora.value);
    //
    // fechaHoraIngresada.getFullYear() - new Date().getFullYear() < 2

    // console.log(inputFecha.value === '');
    // console.log(fechaHoraIngresada < new Date());
    // console.log(diasDiferencia, ' dias de diferencia');
    // console.log(!esDiaHabil);

    if (inputFecha.value === ''
        || (fechaHoraIngresada < new Date()
        || diasDiferencia > 365
        || !esDiaHabil)){
        error = true;
        lblERRFecha.classList.add('mensajeError');
    } else {
        lblERRFecha.classList.remove('mensajeError');
    }

    if (inputHora.value === ''
        || fechaHoraIngresada.getHours() < 8 || fechaHoraIngresada.getHours() > 16){
        error = true;
        lblERRHora.classList.add('mensajeError');
    } else {
        lblERRHora.classList.remove('mensajeError');
    }

    return error;
};

let agendar = () =>{

    if (!validarCita()){
        let nombrePF = daUser.nombre;
        let correoPF = daUser.email;

        //////////////// QUEMADO

        let nombreCE = NombreGeneralCE;

        //////////////// QUEMADO

        let fechaHora = new Date(inputFecha.value + ' ' + inputHora.value);

        registrarCita(fechaHora, nombreCE, nombrePF, correoPF);

        // swal.fire(
        //     {
        //         type: 'success',
        //         title: 'Se agendó la cita con éxito',
        //         text: `Revise su correo.`,
        //         showConfirmButton: false,
        //         timer: 1500
        //     }
        // );
    } else {
        swal.fire(
            {
                type: 'warning',
                title: 'No se pudo agendar la cita',
                text: `Revise que la fecha sea mayor a hoy, no sea para dentro de dos años en adelante y que 
                la hora esté entre las 8 a.m y las 4 p.m.`,
                showConfirmButton: true
            }
        );
    }
};

btnAgendar.addEventListener('click', agendar);

