'use strict';

let eliminarEtiqueta = (pid, presponsable) =>{

    Swal.fire({
        title: '¿sEstá seguro que desea eliminar la etiqueta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {

            deleteEtiqueta(pid, presponsable);
            let elementoEliminado = document.getElementById(pid);
            elementoEliminado.parentElement.removeChild(elementoEliminado);
        } else {
            swal.fire({
                title: 'No se eliminó la etiqueta',
                type: 'info',
                showConfirmButton: false,
                timer: 1000
            });
        }
        // setTimeout('location.reload()', 1500);
    })

};