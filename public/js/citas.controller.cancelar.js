'use strict';

let cancelarCita = (pid) =>{

    Swal.fire({
        title: '¿Está seguro que desea cancelar la cita?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, cancelar',
        cancelButtonText: 'Mejor no'
    }).then((result) => {
        if (result.value) {
            eliminarCita(pid);
            let elementoEliminado = document.getElementById(pid);
            elementoEliminado.parentElement.removeChild(elementoEliminado);
        } else {
            swal.fire({
                title: 'No se canceló la cita',
                type: 'info',
                showConfirmButton: false,
                timer: 1000
            });
        }
        // setTimeout('location.reload()', 1500);
    })

};