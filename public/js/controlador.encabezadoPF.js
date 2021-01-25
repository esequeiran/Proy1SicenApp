'use strict';
const sectionInfoPF = document.querySelector('#sectionInfoPF');

let padreFamilia = listarUsuariosPFencabezado(IdGeneralCE);
let mostrarDatosPF = () => {
    

    console.log(padreFamilia);

    let foto = document.querySelector('.photoPF');
    let nombre = document.querySelector('.infoPFAdentro h2');
    let direccion = document.querySelector('.infoPFAdentro h3');

    foto.src = padreFamilia[0]['imagenPF'];
    nombre.textContent = padreFamilia[0]['nombre'];
    direccion.textContent = padreFamilia[0]['canton'];

    if (foto.src == ''){
        foto.src = 'img/icons8-user.png'
    }
    foto.style.backgroundImage = `url(${foto.src})`;

};

mostrarDatosPF();


let mostrarInfoPersonalPF= () =>{

    sectionInfoPF.innerHTML = '';

    let spanNombrePF = document.createElement('h2');
    spanNombrePF.classList.add('h2');
    spanNombrePF.textContent = padreFamilia [0] ['nombre'] ;

    // // let spanSegundoNombrePF = document.createElement('h3');
    // spanSegundoNombrePF.classList.add('h3');
    // spanSegundoNombrePF.textContent  =infoPersonalPF [0] ['segundoNombre'];

    let spanApellidoPf = document.createElement('h3');
    spanApellidoPf.classList.add('h3');
    spanApellidoPf.textContent = padreFamilia [0] ['apellido'];

    // let spanSegundoApellidoPF = document.createElement('h3');
    // spanSegundoApellidoPF.classList.add('h3');
    // spanSegundoApellidoPF.textContent = infoPersonalPF [0] ['segundoApellido'];

    let spanEmailPF = document.createElement('h3');
    spanEmailPF.classList.add('h3');
    spanEmailPF.textContent = padreFamilia [0] ['email'];

    let spanTelefonoPF = document.createElement('h3');
    spanTelefonoPF.classList.add('h3');
    spanTelefonoPF.textContent = padreFamilia [0] ['telefono'];

    let spanProvinciaPF = document.createElement('h3');
    spanProvinciaPF.classList.add('h3');
    spanProvinciaPF.textContent = padreFamilia [0] ['provincia'];
    
   
        
    let cardInfoMEP = document.createElement('div');
        cardInfoMEP.classList.add('cardInfoMep');
    let columnaIzq = document.createElement('div');
        columnaIzq.classList.add('colIzq');
    let columnaDer = document.createElement('div');
        columnaDer.classList.add('colDer');
    
        let divImagen = document.createElement('div');
        let imagenPF = document.createElement('img');
        imagenPF.classList.add('img');


        if(padreFamilia[0]['imagenPF'] ==  ''){
            imagenPF.src = 'img/icons8-user.png';
        }else{
            imagenPF.src = padreFamilia [0] ['imagenPF'];
        }        
        
       
       

        columnaIzq.appendChild(spanNombrePF);
        // columnaIzq.appendChild(spanSegundoNombrePF);
        columnaIzq.appendChild(spanApellidoPf);
        // columnaIzq.appendChild(spanSegundoApellidoPF);
        columnaIzq.appendChild(spanEmailPF);
        columnaIzq.appendChild(spanTelefonoPF);
        columnaIzq.appendChild(spanProvinciaPF);
        cardInfoMEP.appendChild(columnaIzq);
        divImagen.appendChild(imagenPF);
        columnaDer.appendChild(divImagen);
        cardInfoMEP.appendChild(columnaDer);
        sectionInfoPF.appendChild(cardInfoMEP);
    

}

mostrarInfoPersonalPF();

