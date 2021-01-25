'use strict';

const sectionCardsTop = document.querySelector('#seccionRankings');
const selectTipoTop = document.querySelector('#selectTipoTop');
const annoTop = new Date().getFullYear();

if(user.userType == 'centroEducativo'){
    window.location.href = 'loSentimos.html';
}

let mostrarDatosTop = () =>{

    let centrosETop = listarCETop(annoTop);    
    for(let  i=0; i<centrosETop.length; i++){
        centrosETop[i]['posicion'] = i+1;
        if(centrosETop[i]['imagen'] ==  'sinImagen'){
            centrosETop[i]['imagen'] = 'img/icons8-user.png';
        }        
    }
    console.log(selectTipoTop.value);

    switch(selectTipoTop.value){
        //top general
        case "1":
            console.log("entró a case 1");
            sectionCardsTop.innerHTML = '';
            if(centrosETop != undefined){
                let longitud1 = centrosETop.length < 10 ? centrosETop.length : 10;
                for(let a=0; a < longitud1; a++){
                    let cardCETop = document.createElement('div');
                    cardCETop.classList.add('cardCETop');
    
                    let divPosicion = document.createElement('div');
                    divPosicion.classList.add('divPosicion');
    
                    let h2Posicion = document.createElement('h2');
                    h2Posicion.classList.add('h2Posicion');
                    h2Posicion.textContent = centrosETop[a]['posicion'];
    
                    let divImagen = document.createElement('div');
                    divImagen.classList.add('divImagen');
    
                    let imagen = document.createElement('img');
                    imagen.classList.add('imagenCE');
                    imagen.src = centrosETop[a]['imagen'];
    
                    let divNombre = document.createElement('div');
                    divNombre.classList.add('divNombre');
    
                    let h2Nombre = document.createElement('h2');
                    h2Nombre.classList.add('h2Nombre');
                    h2Nombre.textContent = centrosETop[a]['nombre'];
    
                    let divEstrellas = document.createElement('div');
                    divEstrellas.classList.add('divEstrellas');
    
                    let h2Estrellas = document.createElement('h2');
                    h2Estrellas.classList.add('h2Estrellas');
                   
                    let h2Estrellas1 = document.createElement('h2');
                    h2Estrellas1.classList.add('h2Estrellas');
                    
                    let h2Estrellas2 = document.createElement('h2');
                    h2Estrellas2.classList.add('h2Estrellas');
                   
                    let h2Estrellas3 = document.createElement('h2');
                    h2Estrellas3.classList.add('h2Estrellas');
                  
                    let h2Estrellas4 = document.createElement('h2');
                    h2Estrellas4.classList.add('h2Estrellas');
                    
                  
                    if(centrosETop[a]['estrellas'] ==  "★☆☆☆☆"){
                        divEstrellas.innerHTML = '';
    
                        h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas1.innerHTML = '<i class="far fa-star"></i>';
                        h2Estrellas2.innerHTML = '<i class="far fa-star"></i>';
                        h2Estrellas3.innerHTML = '<i class="far fa-star"></i>';
                        h2Estrellas4.innerHTML = '<i class="far fa-star"></i>';
                    } if(centrosETop[a]['estrellas'] ==  "★★☆☆☆"){
                        divEstrellas.innerHTML = '';
    
                        h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas1.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas2.innerHTML = '<i class="far fa-star"></i>';
                        h2Estrellas3.innerHTML = '<i class="far fa-star"></i>';
                        h2Estrellas4.innerHTML = '<i class="far fa-star"></i>';
                    } if(centrosETop[a]['estrellas'] ==  "★★★☆☆"){
                        divEstrellas.innerHTML = '';
    
                        h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas1.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas2.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas3.innerHTML = '<i class="far fa-star"></i>';
                        h2Estrellas4.innerHTML = '<i class="far fa-star"></i>';
                    } if(centrosETop[a]['estrellas'] ==  "★★★★☆"){
                        divEstrellas.innerHTML = '';
    
                        h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas1.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas2.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas3.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas4.innerHTML = '<i class="far fa-star"></i>';
                    } if(centrosETop[a]['estrellas'] ==  "★★★★★"){
                        divEstrellas.innerHTML = '';
    
                        h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas1.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas2.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas3.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas4.innerHTML = '<i class="fas fa-star"></i>';
                    }
    
                   
    
                    divPosicion.appendChild(h2Posicion);
                    divImagen.appendChild(imagen);
                    divNombre.appendChild(h2Nombre);
                    divEstrellas.appendChild(h2Estrellas);
                    divEstrellas.appendChild(h2Estrellas1);  
                    divEstrellas.appendChild(h2Estrellas2);
                    divEstrellas.appendChild(h2Estrellas3);
                    divEstrellas.appendChild(h2Estrellas4);       
    
    
                    cardCETop.appendChild(divPosicion);
                    cardCETop.appendChild(divImagen);
                    cardCETop.appendChild(divNombre);
                    cardCETop.appendChild(divEstrellas);
                    sectionCardsTop.appendChild(cardCETop);
    
                }
            }else{
                let cardNingunTop = document.createElement('div');
                cardNingunTop.classList.add('cardCETop');
                let tituloAux = document.createElement('h2');
                tituloAux.classList.add('h2NoTop');
                tituloAux.textContent = "No se encontró top general";
                cardNingunTop.appendChild(tituloAux);
                sectionCardsTop.appendChild(cardNingunTop);
            }
            
           break;
        
        // top
        case "2":
        console.log("entró a case 2");
        sectionCardsTop.innerHTML = '';
            let efiltro = "Escuela, ";
           
            let escuelas = [];
            let c = 0;
          
            for(let b= 0; b< centrosETop.length; b++){
                if(centrosETop[b]['tipo'] == efiltro){
                    escuelas[c] = centrosETop[b];                    
                    c = c + 1;
                }               
            }           
            
            if(escuelas != undefined){
                let longitud2 = escuelas.length < 10 ? escuelas.length : 10;
                
                for(let e=0; e < longitud2; e++){
             
                    let cardCETop = document.createElement('div');
                    cardCETop.classList.add('cardCETop');
    
                    let divPosicion = document.createElement('div');
                    divPosicion.classList.add('divPosicion');
    
                    let h2Posicion = document.createElement('h2');
                    h2Posicion.classList.add('h2Posicion');
                    h2Posicion.textContent = escuelas[e]['posicion'];
                    console.log(escuelas[e]['posicion']);

                    let divImagen = document.createElement('div');
                    divImagen.classList.add('divImagen');
    
                    let imagen = document.createElement('img');
                    imagen.classList.add('imagenCE');
                    imagen.src = escuelas[e]['imagen'];
    
                    let divNombre = document.createElement('div');
                    divNombre.classList.add('divNombre');
    
                    let h2Nombre = document.createElement('h2');
                    h2Nombre.classList.add('h2Nombre');
                    h2Nombre.textContent = escuelas[e]['nombre'];
    
                    let divEstrellas = document.createElement('div');
                    divEstrellas.classList.add('divEstrellas');
    
                let h2Estrellas = document.createElement('h2');
                h2Estrellas.classList.add('h2Estrellas');
                let h2Estrellas1 = document.createElement('h2');
                h2Estrellas1.classList.add('h2Estrellas');
                let h2Estrellas2 = document.createElement('h2');
                h2Estrellas2.classList.add('h2Estrellas');
                let h2Estrellas3 = document.createElement('h2');
                h2Estrellas3.classList.add('h2Estrellas');
                let h2Estrellas4 = document.createElement('h2');
                h2Estrellas4.classList.add('h2Estrellas');
              
                if(escuelas[e]['estrellas'] ==  "★☆☆☆☆"){
                    divEstrellas.innerHTML = '';

                    h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
                    h2Estrellas1.innerHTML = '<i class="far fa-star"></i>';
                    h2Estrellas2.innerHTML = '<i class="far fa-star"></i>';
                    h2Estrellas3.innerHTML = '<i class="far fa-star"></i>';
                    h2Estrellas4.innerHTML = '<i class="far fa-star"></i>';
                } if(escuelas[e]['estrellas'] ==  "★★☆☆☆"){
                    divEstrellas.innerHTML = '';

                    h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
                    h2Estrellas1.innerHTML = '<i class="fas fa-star"></i>';
                    h2Estrellas2.innerHTML = '<i class="far fa-star"></i>';
                    h2Estrellas3.innerHTML = '<i class="far fa-star"></i>';
                    h2Estrellas4.innerHTML = '<i class="far fa-star"></i>';
                } if(escuelas[e]['estrellas'] ==  "★★★☆☆"){
                    divEstrellas.innerHTML = '';

                    h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
                    h2Estrellas1.innerHTML = '<i class="fas fa-star"></i>';
                    h2Estrellas2.innerHTML = '<i class="fas fa-star"></i>';
                    h2Estrellas3.innerHTML = '<i class="far fa-star"></i>';
                    h2Estrellas4.innerHTML = '<i class="far fa-star"></i>';
                } if(escuelas[e]['estrellas'] ==  "★★★★☆"){
                    divEstrellas.innerHTML = '';

                    h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
                    h2Estrellas1.innerHTML = '<i class="fas fa-star"></i>';
                    h2Estrellas2.innerHTML = '<i class="fas fa-star"></i>';
                    h2Estrellas3.innerHTML = '<i class="fas fa-star"></i>';
                    h2Estrellas4.innerHTML = '<i class="far fa-star"></i>';
                } if(escuelas[e]['estrellas'] ==  "★★★★★"){
                    divEstrellas.innerHTML = '';

                    h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
                    h2Estrellas1.innerHTML = '<i class="fas fa-star"></i>';
                    h2Estrellas2.innerHTML = '<i class="fas fa-star"></i>';
                    h2Estrellas3.innerHTML = '<i class="fas fa-star"></i>';
                    h2Estrellas4.innerHTML = '<i class="fas fa-star"></i>';
                }

    
                    divPosicion.appendChild(h2Posicion);
                    divImagen.appendChild(imagen);
                    divNombre.appendChild(h2Nombre);
                    divEstrellas.appendChild(h2Estrellas);
                    divEstrellas.appendChild(h2Estrellas1);  
                    divEstrellas.appendChild(h2Estrellas2);
                    divEstrellas.appendChild(h2Estrellas3);
                    divEstrellas.appendChild(h2Estrellas4);               
    
    
                    cardCETop.appendChild(divPosicion);
                    cardCETop.appendChild(divImagen);
                    cardCETop.appendChild(divNombre);
                    cardCETop.appendChild(divEstrellas);
                    sectionCardsTop.appendChild(cardCETop);

            }

            }else{

                let cardNingunTop = document.createElement('div');
                cardNingunTop.classList.add('cardCETop');
                let tituloAux = document.createElement('h2');
                tituloAux.classList.add('h2NoTop');
                tituloAux.textContent = "No se encontró top de escuelas";
                cardNingunTop.appendChild(tituloAux);
                sectionCardsTop.appendChild(cardNingunTop);


            }
            break;
        
        case "3":
            console.log("entró a case 3");
            sectionCardsTop.innerHTML = '';
            let cfiltro = "Colegio, ";

            let colegios = [];
            let d = 0;

            for(let j= 0; j< centrosETop.length; j++){
                if(centrosETop[j]['tipo'] == cfiltro){                   
                    colegios[d] = centrosETop[j];                    
                    d = d + 1;
                }               
            }

            if(colegios != undefined){
                let longitud3 = colegios.length < 10 ? colegios.length : 10;

                for(let a=0; a < longitud3; a++){     
                    let cardCETop = document.createElement('div');
                    cardCETop.classList.add('cardCETop');

                    let divPosicion = document.createElement('div');
                    divPosicion.classList.add('divPosicion');

                    let h2Posicion = document.createElement('h2');
                    h2Posicion.classList.add('h2Posicion');
                    h2Posicion.textContent = colegios[a]['posicion'];

                    let divImagen = document.createElement('div');
                    divImagen.classList.add('divImagen');

                    let imagen = document.createElement('img');
                    imagen.classList.add('imagenCE');
                    imagen.src = colegios[a]['imagen'];

                    let divNombre = document.createElement('div');
                    divNombre.classList.add('divNombre');

                    let h2Nombre = document.createElement('h2');
                    h2Nombre.classList.add('h2Nombre');
                    h2Nombre.textContent = colegios[a]['nombre'];

                    let divEstrellas = document.createElement('div');
                    divEstrellas.classList.add('divEstrellas');

                    let h2Estrellas = document.createElement('h2');
                    h2Estrellas.classList.add('h2Estrellas');
                    let h2Estrellas1 = document.createElement('h2');
                    h2Estrellas1.classList.add('h2Estrellas');
                    let h2Estrellas2 = document.createElement('h2');
                    h2Estrellas2.classList.add('h2Estrellas');
                    let h2Estrellas3 = document.createElement('h2');
                    h2Estrellas3.classList.add('h2Estrellas');
                    let h2Estrellas4 = document.createElement('h2');
                    h2Estrellas4.classList.add('h2Estrellas');
                
                    if(colegios[a]['estrellas'] ==  "★☆☆☆☆"){
                        divEstrellas.innerHTML = '';

                        h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas1.innerHTML = '<i class="far fa-star"></i>';
                        h2Estrellas2.innerHTML = '<i class="far fa-star"></i>';
                        h2Estrellas3.innerHTML = '<i class="far fa-star"></i>';
                        h2Estrellas4.innerHTML = '<i class="far fa-star"></i>';
                    } if(colegios[a]['estrellas'] ==  "★★☆☆☆"){
                        divEstrellas.innerHTML = '';

                        h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas1.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas2.innerHTML = '<i class="far fa-star"></i>';
                        h2Estrellas3.innerHTML = '<i class="far fa-star"></i>';
                        h2Estrellas4.innerHTML = '<i class="far fa-star"></i>';
                    } if(colegios[a]['estrellas'] ==  "★★★☆☆"){
                        divEstrellas.innerHTML = '';

                        h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas1.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas2.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas3.innerHTML = '<i class="far fa-star"></i>';
                        h2Estrellas4.innerHTML = '<i class="far fa-star"></i>';
                    } if(colegios[a]['estrellas'] ==  "★★★★☆"){
                        divEstrellas.innerHTML = '';

                        h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas1.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas2.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas3.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas4.innerHTML = '<i class="far fa-star"></i>';
                    } if(colegios[a]['estrellas'] ==  "★★★★★"){
                        divEstrellas.innerHTML = '';

                        h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas1.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas2.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas3.innerHTML = '<i class="fas fa-star"></i>';
                        h2Estrellas4.innerHTML = '<i class="fas fa-star"></i>';
                    }

                    divPosicion.appendChild(h2Posicion);
                    divImagen.appendChild(imagen);
                    divNombre.appendChild(h2Nombre);
                    divEstrellas.appendChild(h2Estrellas);
                    divEstrellas.appendChild(h2Estrellas1);  
                    divEstrellas.appendChild(h2Estrellas2);
                    divEstrellas.appendChild(h2Estrellas3);
                    divEstrellas.appendChild(h2Estrellas4);               


                    cardCETop.appendChild(divPosicion);
                    cardCETop.appendChild(divImagen);
                    cardCETop.appendChild(divNombre);
                    cardCETop.appendChild(divEstrellas);
                    sectionCardsTop.appendChild(cardCETop);

                }

            
            }else{

                let cardNingunTop = document.createElement('div');
                cardNingunTop.classList.add('cardCETop');
                let tituloAux = document.createElement('h2');
                tituloAux.classList.add('h2NoTop');
                tituloAux.textContent = "No se encontró top de escuelas";
                cardNingunTop.appendChild(tituloAux);
                sectionCardsTop.appendChild(cardNingunTop);
            }
            break;               
                
        }
        
    }


selectTipoTop.addEventListener('change', mostrarDatosTop);


