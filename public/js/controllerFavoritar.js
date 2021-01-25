let centroEducativoAFavoritar = listarUsuariosCEencabezado(IdGeneralCE);

let emailCE = centroEducativoAFavoritar[0]['email'];


let favoritar = document.getElementById('favoritar');
// let desFavoritar = document.getElementById('desfavoritar');

favoritar.addEventListener('click', function(){
    agregarFavorito(user.email, emailCE);
    
}

)

 