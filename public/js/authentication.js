
if (!sessionStorage.getItem('usuario')) {
    window.location.href = 'inicioSesion.html';
} else {

    let user = JSON.parse(sessionStorage.getItem("usuario"));

}




let logOutLink = document.querySelector('#logOut')

function logOut() {

    sessionStorage.setItem('tipoDeUsuario', "");
    sessionStorage.setItem('usuario', "");
    window.location.href = 'inicioSesion.html';

}
logOutLink.addEventListener('click', logOut)
