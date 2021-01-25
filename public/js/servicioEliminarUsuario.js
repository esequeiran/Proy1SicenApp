'use strict';


let eliminarUsuario = (nombre, id) =>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/eliminar',
        method : "POST",
        data : {
            nombre : nombre,
            id : id
        },
        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (res) {
        swal.fire({
            type: 'success',
            title: 'Eliminar',
            text: res.msg,
            onClose: () =>{
                location.reload();
            }
        });
     });

}