let listarBitacora = () => {
    let listarBitacoras = [];
console.log('hi');
    let request = $.ajax({
        url: "http://localhost:4000/api/listarBitacora",
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        listarBitacoras = res.bitacora;
      
    });
    
    request.fail(function (jqXHR, textStatus) {
    });

return listarBitacoras;

};
