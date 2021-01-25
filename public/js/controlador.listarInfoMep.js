"use strict"

    let sectionInfoMep = document.querySelector('#sectionInfo');

    function mostrarDatosSA (){
    let infoMEP = listarInfoMEP();
 
    sectionInfoMep.innerHTML = '';

    let spanNombreSA = document.createElement('h2');
    spanNombreSA.classList.add('h2');
    spanNombreSA.textContent = infoMEP [0] ['nombre']+" "+infoMEP [0] ['segundoNombre']+" "+infoMEP [0] ['apellido']+" "+infoMEP [0] ['segundoApellido'] ;
    // let spanSegundoNombreSA = document.createElement('h3');
    // spanSegundoNombreSA.classList.add('h3');
    // spanSegundoNombreSA.textContent  =infoMEP [0] ['segundoNombre'];
    // let spanApellidoSA = document.createElement('h3');
    // spanApellidoSA.classList.add('h3');
    // spanApellidoSA.textContent = infoMEP [0] ['apellido'];
    // let spanSegundoApellidoSA = document.createElement('h3');
    // spanSegundoApellidoSA.classList.add('h3');
    // spanSegundoApellidoSA.textContent = infoMEP [0] ['segundoApellido'];
    let spanEmailSA = document.createElement('h3');
    spanEmailSA.classList.add('h3');
    spanEmailSA.textContent = "Correo: "+infoMEP [0] ['email'];
    let spanTelefonoSA = document.createElement('h3');
    spanTelefonoSA.classList.add('h3');
    spanTelefonoSA.textContent = "Teléfono: "+infoMEP [0] ['telefono'];
    let spanPuestoMEPSA = document. createElement('h3');
    spanPuestoMEPSA.classList.add('h3');
    spanPuestoMEPSA.textContent = "Puesto: "+infoMEP [0] ['puesto'];    
   
        
    let cardInfoMEP = document.createElement('div');
        cardInfoMEP.classList.add('cardInfoMep');
    let columnaIzq = document.createElement('div');
        columnaIzq.classList.add('colIzq');
    let columnaDer = document.createElement('div');
        columnaDer.classList.add('colDer');
    
        let divImagen = document.createElement('div');
        let imagenSA = document.createElement('img');
        imagenSA.classList.add('img');
        imagenSA.src = infoMEP [0] ['imagenPF'];
       

        columnaIzq.appendChild(spanNombreSA);
        // columnaIzq.appendChild(spanSegundoNombreSA);
        // columnaIzq.appendChild(spanApellidoSA);
        // columnaIzq.appendChild(spanSegundoApellidoSA);
        columnaIzq.appendChild(spanEmailSA);
        columnaIzq.appendChild(spanTelefonoSA);
        columnaIzq.appendChild(spanPuestoMEPSA);
        cardInfoMEP.appendChild(columnaIzq);
        divImagen.appendChild(imagenSA);
        columnaDer.appendChild(divImagen);
        cardInfoMEP.appendChild(columnaDer);
        sectionInfoMep.appendChild(cardInfoMEP);
    

    
    
    
    
    
   
      
    
}
mostrarDatosSA();











