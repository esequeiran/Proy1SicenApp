

let agregarFavorito = (userEmail, emailCE) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/favoritar",
        method: "POST",
        data: {

            userEmail: userEmail,
            emailCE: emailCE


        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (res) {
        let resType;
        if (res.success) {
            resType = 'success';
        } else {
            resType = 'warning';
        }


        swal.fire({
            type: resType,
            title: res.msg,
       
            showConfirmButton: true,
            onClose: () => {

            }
        });

    });

    request.fail(function (jqXHR, textStatus) {

    });
};






let desfavoritar = (userEmail, emailCE) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/desfavoritar",
        method: "POST",
        data: {

            userEmail: userEmail,
            emailCE: emailCE


        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (res) {
        let resType;
        if (res.success) {
            resType = 'success';
            location.reload();
        } else {
            resType = 'warning';
        }


        swal.fire({
            type: resType,
            title: res.msj,
            showConfirmButton: true,
            onClose: () => {

            }
        });

    });

    request.fail(function (jqXHR, textStatus) {

    });
};

let listarMisFavoritos = (email, callback) => {
    let listaFavoritos = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/favoritos",
        method: "GET",
        data: {

            email: email,

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (res) {
        listaFavoritos = res.favoritos;
        callback(listaFavoritos);
    });
    
    request.fail(function (jqXHR, textStatus) {
        
    });
    
};