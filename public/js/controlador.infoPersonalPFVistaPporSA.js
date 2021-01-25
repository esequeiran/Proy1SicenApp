"use strict"
//padre de familia
let user = JSON.parse(sessionStorage.getItem("usuario"));

if(user.userType == 'padreFamilia' || user.userType == 'centroEducativo'){
    window.location.href = 'loSentimos.html';
}

function ocultar() {
    console.log(user.userType);
    if(user.userType == "superAdministrador"){
        document.querySelector('#padreFamilia').style.display = 'block';
       
    }
}
ocultar();


  
function padreFamilia(){
        let infoPF = listarPFPorSA(IdGeneralCE);
        console.log(infoPF);
        let spanNombre = document.getElementById('spanNombre');
        let spanSegundoNombre = document.getElementById('spanSegundoNombre');
        let spanApellido = document.getElementById('spanApellido');
        let spanNumID = document.getElementById('spanSegundoApellido');
        let spanSegundoApellido = document.getElementById('spanNumID');
        let spanNacionalidad = document.getElementById('spanNacionalidad');
        let spanEmail = document.getElementById('spanEmail');
        let spanTelefono = document.getElementById('spanTelefono');
        let spanProvincia = document.getElementById('spanProvincia');
        let spanCanton = document.getElementById('spanCanton');
        let spanDistrito = document.getElementById('spanDistrito');
        let spanHijos = document.getElementById('spanHijos');
        let imagenPF = document.getElementById('imagenPF');
    
    
        //PF
    
        spanNombre.innerHTML = infoPF [0] ['nombre']; 
        spanSegundoNombre.innerHTML = infoPF [0] ['segundoNombre'];
        spanApellido.innerHTML = infoPF [0] ['apellido'];
        spanNumID.innerHTML =  infoPF [0] ['segundoApellido'];
        spanSegundoApellido.innerHTML = infoPF [0] ['identificacion'];
        spanNacionalidad.innerHTML = infoPF [0] ['nacionalidad'];
        spanEmail.innerHTML = infoPF [0] ['email'];
        spanTelefono.innerHTML =  infoPF [0] ['telefono'];
        spanProvincia.innerHTML = infoPF [0] ['provincia'];
        spanCanton.innerHTML = infoPF [0] ['canton'];
        spanDistrito.innerHTML = infoPF [0] ['distrito'];
        imagenPF.src = infoPF [0] ['imagenPF'];
    
    
            let arregloEdades = infoPF [0] ['edades'].split(", ");
            spanHijos.innerHTML = arregloEdades.length - 1;
    
            let divEdadHijos = document.querySelector('#divEdadHijos');
            divEdadHijos.innerHTML = '';
    
            for (let i = 0; i < arregloEdades.length - 1; i++) {
                var newDiv = document.createElement('div');
                newDiv.style.display = 'block';
    
                var newLabel = document.createElement("label");
                newLabel.innerHTML = "Edad hijo " + Number(i + 1);
    
                var newSpan = document.createElement("span");
                newSpan.innerHTML = " " + arregloEdades[i];
    
                newDiv.appendChild(newLabel);
                newDiv.appendChild(newSpan);
    
                divEdadHijos.appendChild(newDiv);
            }
    
        //  imagenPF.src = user.imagen;
    }

padreFamilia();