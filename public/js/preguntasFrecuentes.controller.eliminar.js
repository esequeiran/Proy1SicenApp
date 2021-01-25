'use strict';

let eliminarPregunta = (pid, presponsable) =>{

    Swal.fire({
        title: '¿Está seguro que desea eliminar la pregunta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {

            deletePregunta(pid, presponsable);
            let elementoEliminado = document.getElementById(pid);
            elementoEliminado.parentElement.removeChild(elementoEliminado);
        } else {
            swal.fire({
                title: 'No se eliminó la pregunta',
                type: 'info',
                showConfirmButton: false,
                timer: 1000
            });
        }
        // setTimeout('location.reload()', 1500);
    })

};