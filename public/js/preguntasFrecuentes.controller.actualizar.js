'use strict';

'use strict';

let actualizarPregunta = (ppregunta, prespuesta,pidCE, pid, ppreguntaAnterior, prespuestaAnterior, presponsable) =>{

    Swal.fire({
        title: '¿Está seguro que desea modificar la pregunta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#f9aa33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, modificar'
    }).then((result) => {
        if (result.value && !(ppregunta === '' || prespuesta === '') && (ppregunta != ppreguntaAnterior || prespuesta != prespuestaAnterior) && !validarPregunta(ppregunta)) {
            modificarPregunta(ppregunta, prespuesta, pidCE, pid, presponsable);
            document.getElementById(`${pid}`).contentEditable = false;
            document.getElementById(`${pid}`).classList.remove('modoCambio');

            // document.getElementById(`etiqueta_${pid}`).style.background = 'inherit';
        } else {
            if((ppregunta === '' || prespuesta === '') || !(ppregunta != ppreguntaAnterior || prespuesta != prespuestaAnterior)) {
                swal.fire({
                    title: 'No se produjeron cambios',
                    type: 'info',
                    showConfirmButton: false,
                    timer: 1000
                });
            } else if (validarPregunta(ppregunta)){
                swal.fire({
                    title: 'Lo sentimos',
                    text: 'La pregunta ya existe',
                    type: 'error',
                    showConfirmButton: false,
                    timer: 1000
                });
            }

            document.getElementById(`${pid}`).classList.remove('modoCambio');

            document.getElementById(`${pid}`).contentEditable = false;
            document.getElementById(`pregunta_${pid}`).textContent = ppreguntaAnterior;
            document.getElementById(`respuesta_${pid}`).textContent = prespuestaAnterior;
            // document.getElementById(`etiqueta_${pid}`).style.background = 'inherit';
        }
        // setTimeout('location.reload()', 1500);
    })

};