'use strict';

let actualizarEtiqueta = (pnombre, pid, pnombreAnterior, presponsable) =>{
    console.log(presponsable);
    Swal.fire({
        title: '¿Está seguro que desea modificar la etiqueta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#f9aa33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, modificar'
    }).then((result) => {
        if (result.value && !(validarEtiqueta(pnombre)) && !(pnombre === pnombreAnterior) && !(pnombre === '')) {
            modificarEtiqueta(pnombre, pid, presponsable);
            document.getElementById(`etiqueta_${pid}`).contentEditable = false;
            document.getElementById(`etiqueta_${pid}`).classList.remove('modoCambio');

            // document.getElementById(`etiqueta_${pid}`).style.background = 'inherit';
        } else {
            if (pnombre === pnombreAnterior || pnombre === '' || pnombre === pnombreAnterior || !(result.value)){
                swal.fire({
                    title: 'No se produjeron cambios',
                    type: 'info',
                    showConfirmButton: false,
                    timer: 1000
                });
            } else if (validarEtiqueta(pnombre)){
                swal.fire({
                    title: 'Lo sentimos',
                    text: 'La pregunta ya existe',
                    type: 'error',
                    showConfirmButton: false,
                    timer: 1000
                });
            }
            document.getElementById(`etiqueta_${pid}`).classList.remove('modoCambio');

            document.getElementById(`etiqueta_${pid}`).textContent = pnombreAnterior;
            document.getElementById(`etiqueta_${pid}`).contentEditable = false;
            // document.getElementById(`etiqueta_${pid}`).style.background = 'inherit';
        }
        // setTimeout('location.reload()', 1500);
    })

};