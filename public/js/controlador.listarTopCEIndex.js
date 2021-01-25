'use strict';

const sectionCardsTop = document.querySelector('#seccionRankings');
const selectTipoTop = document.querySelector('#selectTipoTop');
const anno = new Date().getFullYear();

let evaluacion = listarEvaluacion();


const tops = document.querySelector('#tops');
const topGeneral = document.querySelector('#topGeneral');
const topColegios = document.querySelector('#topColegios');
const topEscuelas = document.querySelector('#topEscuelas');

let mostrarDatosTop = () =>{

    let centrosETop = listarCETop(anno);    
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
            topGeneral.style.display = 'none';
            topColegios.style.display = 'none';
            topEscuelas.style.display = 'none';
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
        topGeneral.style.display = 'none';
        topColegios.style.display = 'none';
        topEscuelas.style.display = 'none';
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
            topGeneral.style.display = 'none';
            topColegios.style.display = 'none';
            topEscuelas.style.display = 'none';
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
        
            


            case "4":
            sectionCardsTop.innerHTML = '';
         
            topColegios.style.display = 'none';
            topEscuelas.style.display = 'none';

            for (let i = 0; i < 10; i++) {

                let boxCE = document.createElement('div');
                boxCE.classList.add('boxCE');

                let wrapperCE = document.createElement('div');
                wrapperCE.classList.add('wrapperCE');

                let position = document.createElement('p');
                position.classList.add('position');
                position.textContent = i + 1;

                let photoCE = document.createElement('div');
                photoCE.classList.add('photoCE');
                photoCE.style.backgroundImage = `url(${evaluacion[i]['photoCE']})`;

                let nameCE = document.createElement('h4');
                nameCE.classList.add('nameCE');
                nameCE.textContent = evaluacion[i]['nameCE'];

                // let provinciaCE = document.createElement('h4');
                // provinciaCE.classList.add('provinciaCE');
                // provinciaCE.textContent = evaluacion[i]['provinciaCE'];

                let starsRate = document.createElement('div');
                starsRate.classList.add('starsRate');

                let star1;
                let star2;
                let star3;
                let star4;
                let star5;

                let starsCE = Math.round(evaluacion[i]['starsProm']);

                switch (starsCE) {
                    case 0:
                        topGeneral.style.display = 'block';
                        topColegios.style.display = 'none';
                        topEscuelas.style.display = 'none';
                        star1 = document.createElement('i');
                        star1.innerHTML = '<i class="fas fa-star"></i>';
                        star1.classList.add('starColor');

                        star2 = document.createElement('i');
                        star2.innerHTML = '<i class="fa fa-star-o"></i>';
                        star2.classList.add('starColor');

                        star3 = document.createElement('i');
                        star3.innerHTML = '<i class="fa fa-star-o"></i>';
                        star3.classList.add('starColor');

                        star4 = document.createElement('i');
                        star4.innerHTML = '<i class="fa fa-star-o"></i>';
                        star4.classList.add('starColor');

                        star5 = document.createElement('i');
                        star5.innerHTML = '<i class="fa fa-star-o"></i>';
                        star5.classList.add('starColor');
                        break;

                    case 1:
                        star1 = document.createElement('i');
                        star1.innerHTML = '<i class="fas fa-star"></i>';
                        star1.classList.add('starColor');

                        star2 = document.createElement('i');
                        star2.innerHTML = '<i class="fa fa-star-o"></i>';
                        star2.classList.add('starColor');

                        star3 = document.createElement('i');
                        star3.innerHTML = '<i class="fa fa-star-o"></i>';
                        star3.classList.add('starColor');

                        star4 = document.createElement('i');
                        star4.innerHTML = '<i class="fa fa-star-o"></i>';
                        star4.classList.add('starColor');

                        star5 = document.createElement('i');
                        star5.innerHTML = '<i class="fa fa-star-o"></i>';
                        star5.classList.add('starColor');
                        break;

                    case 2:
                        star1 = document.createElement('i');
                        star1.innerHTML = '<i class="fas fa-star"></i>';
                        star1.classList.add('starColor');

                        star2 = document.createElement('i');
                        star2.innerHTML = '<i class="fas fa-star"></i>';
                        star2.classList.add('starColor');

                        star3 = document.createElement('i');
                        star3.innerHTML = '<i class="fa fa-star-o"></i>';
                        star3.classList.add('starColor');

                        star4 = document.createElement('i');
                        star4.innerHTML = '<i class="fa fa-star-o"></i>';
                        star4.classList.add('starColor');

                        star5 = document.createElement('i');
                        star5.innerHTML = '<i class="fa fa-star-o"></i>';
                        star5.classList.add('starColor');
                        break;

                    case 3:
                        star1 = document.createElement('i');
                        star1.innerHTML = '<i class="fas fa-star"></i>';
                        star1.classList.add('starColor');

                        star2 = document.createElement('i');
                        star2.innerHTML = '<i class="fas fa-star"></i>';
                        star2.classList.add('starColor');

                        star3 = document.createElement('i');
                        star3.innerHTML = '<i class="fas fa-star"></i>';
                        star3.classList.add('starColor');

                        star4 = document.createElement('i');
                        star4.innerHTML = '<i class="fa fa-star-o"></i>';
                        star4.classList.add('starColor');

                        star5 = document.createElement('i');
                        star5.innerHTML = '<i class="fa fa-star-o"></i>';
                        star5.classList.add('starColor');
                        break;

                    case 4:
                        star1 = document.createElement('i');
                        star1.innerHTML = '<i class="fas fa-star"></i>';
                        star1.classList.add('starColor');

                        star2 = document.createElement('i');
                        star2.innerHTML = '<i class="fas fa-star"></i>';
                        star2.classList.add('starColor');

                        star3 = document.createElement('i');
                        star3.innerHTML = '<i class="fas fa-star"></i>';
                        star3.classList.add('starColor');

                        star4 = document.createElement('i');
                        star4.innerHTML = '<i class="fas fa-star"></i>';
                        star4.classList.add('starColor');

                        star5 = document.createElement('i');
                        star5.innerHTML = '<i class="fa fa-star-o"></i>';
                        star5.classList.add('starColor');
                        break;

                    case 5:
                        star1 = document.createElement('i');
                        star1.innerHTML = '<i class="fas fa-star"></i>';
                        star1.classList.add('starColor');

                        star2 = document.createElement('i');
                        star2.innerHTML = '<i class="fas fa-star"></i>';
                        star2.classList.add('starColor');

                        star3 = document.createElement('i');
                        star3.innerHTML = '<i class="fas fa-star"></i>';
                        star3.classList.add('starColor');

                        star4 = document.createElement('i');
                        star4.innerHTML = '<i class="fas fa-star"></i>';
                        star4.classList.add('starColor');

                        star5 = document.createElement('i');
                        star5.innerHTML = '<i class="fas fa-star"></i>';
                        star5.classList.add('starColor');
                        break;

                    default:
                        break;
                }

                topGeneral.appendChild(boxCE);
                boxCE.appendChild(wrapperCE);

                wrapperCE.appendChild(position);
                wrapperCE.appendChild(photoCE);
                wrapperCE.appendChild(nameCE);
                // wrapperCE.appendChild(provinciaCE);
                wrapperCE.appendChild(starsRate);

                starsRate.appendChild(star1);
                starsRate.appendChild(star2);
                starsRate.appendChild(star3);
                starsRate.appendChild(star4);
                starsRate.appendChild(star5);

            };

            break;

        case "5":
            sectionCardsTop.innerHTML = '';
            topGeneral.style.display = 'none';
            topColegios.style.display = 'block';
            topEscuelas.style.display = 'none';
            for (let i = 0; i < 10; i++) {

                if (evaluacion[i]['type'] == 'Colegio, ') {
                    let boxCE = document.createElement('div');
                    boxCE.classList.add('boxCE');

                    let wrapperCE = document.createElement('div');
                    wrapperCE.classList.add('wrapperCE');

                    let position = document.createElement('p');
                    position.classList.add('position');
                    position.textContent = i + 1;

                    let photoCE = document.createElement('div');
                    photoCE.classList.add('photoCE');
                    photoCE.style.backgroundImage = `url(${evaluacion[i]['photoCE']})`;

                    let nameCE = document.createElement('h4');
                    nameCE.classList.add('nameCE');
                    nameCE.textContent = evaluacion[i]['nameCE'];

                    // let provinciaCE = document.createElement('h4');
                    // provinciaCE.classList.add('provinciaCE');
                    // provinciaCE.textContent = evaluacion[i]['provinciaCE'];

                    let starsRate = document.createElement('div');
                    starsRate.classList.add('starsRate');

                    let star1;
                    let star2;
                    let star3;
                    let star4;
                    let star5;

                    let starsCE = Math.round(evaluacion[i]['starsProm']);


                    switch (starsCE) {
                        case 0:
                            star1 = document.createElement('i');
                            star1.innerHTML = '<i class="fas fa-star"></i>';
                            star1.classList.add('starColor');

                            star2 = document.createElement('i');
                            star2.innerHTML = '<i class="fa fa-star-o"></i>';
                            star2.classList.add('starColor');

                            star3 = document.createElement('i');
                            star3.innerHTML = '<i class="fa fa-star-o"></i>';
                            star3.classList.add('starColor');

                            star4 = document.createElement('i');
                            star4.innerHTML = '<i class="fa fa-star-o"></i>';
                            star4.classList.add('starColor');

                            star5 = document.createElement('i');
                            star5.innerHTML = '<i class="fa fa-star-o"></i>';
                            star5.classList.add('starColor');
                            break;

                        case 1:
                            star1 = document.createElement('i');
                            star1.innerHTML = '<i class="fas fa-star"></i>';
                            star1.classList.add('starColor');

                            star2 = document.createElement('i');
                            star2.innerHTML = '<i class="fa fa-star-o"></i>';
                            star2.classList.add('starColor');

                            star3 = document.createElement('i');
                            star3.innerHTML = '<i class="fa fa-star-o"></i>';
                            star3.classList.add('starColor');

                            star4 = document.createElement('i');
                            star4.innerHTML = '<i class="fa fa-star-o"></i>';
                            star4.classList.add('starColor');

                            star5 = document.createElement('i');
                            star5.innerHTML = '<i class="fa fa-star-o"></i>';
                            star5.classList.add('starColor');
                            break;

                        case 2:
                            star1 = document.createElement('i');
                            star1.innerHTML = '<i class="fas fa-star"></i>';
                            star1.classList.add('starColor');

                            star2 = document.createElement('i');
                            star2.innerHTML = '<i class="fas fa-star"></i>';
                            star2.classList.add('starColor');

                            star3 = document.createElement('i');
                            star3.innerHTML = '<i class="fa fa-star-o"></i>';
                            star3.classList.add('starColor');

                            star4 = document.createElement('i');
                            star4.innerHTML = '<i class="fa fa-star-o"></i>';
                            star4.classList.add('starColor');

                            star5 = document.createElement('i');
                            star5.innerHTML = '<i class="fa fa-star-o"></i>';
                            star5.classList.add('starColor');
                            break;

                        case 3:
                            star1 = document.createElement('i');
                            star1.innerHTML = '<i class="fas fa-star"></i>';
                            star1.classList.add('starColor');

                            star2 = document.createElement('i');
                            star2.innerHTML = '<i class="fas fa-star"></i>';
                            star2.classList.add('starColor');

                            star3 = document.createElement('i');
                            star3.innerHTML = '<i class="fas fa-star"></i>';
                            star3.classList.add('starColor');

                            star4 = document.createElement('i');
                            star4.innerHTML = '<i class="fa fa-star-o"></i>';
                            star4.classList.add('starColor');

                            star5 = document.createElement('i');
                            star5.innerHTML = '<i class="fa fa-star-o"></i>';
                            star5.classList.add('starColor');
                            break;

                        case 4:
                            star1 = document.createElement('i');
                            star1.innerHTML = '<i class="fas fa-star"></i>';
                            star1.classList.add('starColor');

                            star2 = document.createElement('i');
                            star2.innerHTML = '<i class="fas fa-star"></i>';
                            star2.classList.add('starColor');

                            star3 = document.createElement('i');
                            star3.innerHTML = '<i class="fas fa-star"></i>';
                            star3.classList.add('starColor');

                            star4 = document.createElement('i');
                            star4.innerHTML = '<i class="fas fa-star"></i>';
                            star4.classList.add('starColor');

                            star5 = document.createElement('i');
                            star5.innerHTML = '<i class="fa fa-star-o"></i>';
                            star5.classList.add('starColor');
                            break;

                        case 5:
                            star1 = document.createElement('i');
                            star1.innerHTML = '<i class="fas fa-star"></i>';
                            star1.classList.add('starColor');

                            star2 = document.createElement('i');
                            star2.innerHTML = '<i class="fas fa-star"></i>';
                            star2.classList.add('starColor');

                            star3 = document.createElement('i');
                            star3.innerHTML = '<i class="fas fa-star"></i>';
                            star3.classList.add('starColor');

                            star4 = document.createElement('i');
                            star4.innerHTML = '<i class="fas fa-star"></i>';
                            star4.classList.add('starColor');

                            star5 = document.createElement('i');
                            star5.innerHTML = '<i class="fas fa-star"></i>';
                            star5.classList.add('starColor');
                            break;

                        default:
                            break;
                    }

                    topColegios.appendChild(boxCE);
                    boxCE.appendChild(wrapperCE);

                    wrapperCE.appendChild(position);
                    wrapperCE.appendChild(photoCE);
                    wrapperCE.appendChild(nameCE);
                    // wrapperCE.appendChild(provinciaCE);
                    wrapperCE.appendChild(starsRate);

                    starsRate.appendChild(star1);
                    starsRate.appendChild(star2);
                    starsRate.appendChild(star3);
                    starsRate.appendChild(star4);
                    starsRate.appendChild(star5);
                }

            };

            break;

        case "6":
            sectionCardsTop.innerHTML = '';
         
            topGeneral.style.display = 'none';
            topColegios.style.display = 'none';
            topEscuelas.style.display = 'block';
            for (let i = 0; i < 10; i++) {

                if (evaluacion[i]['type'] == 'Escuela, ') {
                    let boxCE = document.createElement('div');
                    boxCE.classList.add('boxCE');

                    let wrapperCE = document.createElement('div');
                    wrapperCE.classList.add('wrapperCE');

                    let position = document.createElement('p');
                    position.classList.add('position');
                    position.textContent = i + 1;

                    let photoCE = document.createElement('div');
                    photoCE.classList.add('photoCE');
                    photoCE.style.backgroundImage = `url(${evaluacion[i]['photoCE']})`;

                    let nameCE = document.createElement('h4');
                    nameCE.classList.add('nameCE');
                    nameCE.textContent = evaluacion[i]['nameCE'];

                    // let provinciaCE = document.createElement('h4');
                    // provinciaCE.classList.add('provinciaCE');
                    // provinciaCE.textContent = evaluacion[i]['provinciaCE'];

                    let starsRate = document.createElement('div');
                    starsRate.classList.add('starsRate');

                    let star1;
                    let star2;
                    let star3;
                    let star4;
                    let star5;

                    let starsCE = Math.round(evaluacion[i]['starsProm']);


                    switch (starsCE) {
                        case 0:
                            star1 = document.createElement('i');
                            star1.innerHTML = '<i class="fas fa-star"></i>';
                            star1.classList.add('starColor');

                            star2 = document.createElement('i');
                            star2.innerHTML = '<i class="fa fa-star-o"></i>';
                            star2.classList.add('starColor');

                            star3 = document.createElement('i');
                            star3.innerHTML = '<i class="fa fa-star-o"></i>';
                            star3.classList.add('starColor');

                            star4 = document.createElement('i');
                            star4.innerHTML = '<i class="fa fa-star-o"></i>';
                            star4.classList.add('starColor');

                            star5 = document.createElement('i');
                            star5.innerHTML = '<i class="fa fa-star-o"></i>';
                            star5.classList.add('starColor');
                            break;

                        case 1:
                            star1 = document.createElement('i');
                            star1.innerHTML = '<i class="fas fa-star"></i>';
                            star1.classList.add('starColor');

                            star2 = document.createElement('i');
                            star2.innerHTML = '<i class="fa fa-star-o"></i>';
                            star2.classList.add('starColor');

                            star3 = document.createElement('i');
                            star3.innerHTML = '<i class="fa fa-star-o"></i>';
                            star3.classList.add('starColor');

                            star4 = document.createElement('i');
                            star4.innerHTML = '<i class="fa fa-star-o"></i>';
                            star4.classList.add('starColor');

                            star5 = document.createElement('i');
                            star5.innerHTML = '<i class="fa fa-star-o"></i>';
                            star5.classList.add('starColor');
                            break;

                        case 2:
                            star1 = document.createElement('i');
                            star1.innerHTML = '<i class="fas fa-star"></i>';
                            star1.classList.add('starColor');

                            star2 = document.createElement('i');
                            star2.innerHTML = '<i class="fas fa-star"></i>';
                            star2.classList.add('starColor');

                            star3 = document.createElement('i');
                            star3.innerHTML = '<i class="fa fa-star-o"></i>';
                            star3.classList.add('starColor');

                            star4 = document.createElement('i');
                            star4.innerHTML = '<i class="fa fa-star-o"></i>';
                            star4.classList.add('starColor');

                            star5 = document.createElement('i');
                            star5.innerHTML = '<i class="fa fa-star-o"></i>';
                            star5.classList.add('starColor');
                            break;

                        case 3:
                            star1 = document.createElement('i');
                            star1.innerHTML = '<i class="fas fa-star"></i>';
                            star1.classList.add('starColor');

                            star2 = document.createElement('i');
                            star2.innerHTML = '<i class="fas fa-star"></i>';
                            star2.classList.add('starColor');

                            star3 = document.createElement('i');
                            star3.innerHTML = '<i class="fas fa-star"></i>';
                            star3.classList.add('starColor');

                            star4 = document.createElement('i');
                            star4.innerHTML = '<i class="fa fa-star-o"></i>';
                            star4.classList.add('starColor');

                            star5 = document.createElement('i');
                            star5.innerHTML = '<i class="fa fa-star-o"></i>';
                            star5.classList.add('starColor');
                            break;

                        case 4:
                            star1 = document.createElement('i');
                            star1.innerHTML = '<i class="fas fa-star"></i>';
                            star1.classList.add('starColor');

                            star2 = document.createElement('i');
                            star2.innerHTML = '<i class="fas fa-star"></i>';
                            star2.classList.add('starColor');

                            star3 = document.createElement('i');
                            star3.innerHTML = '<i class="fas fa-star"></i>';
                            star3.classList.add('starColor');

                            star4 = document.createElement('i');
                            star4.innerHTML = '<i class="fas fa-star"></i>';
                            star4.classList.add('starColor');

                            star5 = document.createElement('i');
                            star5.innerHTML = '<i class="fa fa-star-o"></i>';
                            star5.classList.add('starColor');
                            break;

                        case 5:
                            star1 = document.createElement('i');
                            star1.innerHTML = '<i class="fas fa-star"></i>';
                            star1.classList.add('starColor');

                            star2 = document.createElement('i');
                            star2.innerHTML = '<i class="fas fa-star"></i>';
                            star2.classList.add('starColor');

                            star3 = document.createElement('i');
                            star3.innerHTML = '<i class="fas fa-star"></i>';
                            star3.classList.add('starColor');

                            star4 = document.createElement('i');
                            star4.innerHTML = '<i class="fas fa-star"></i>';
                            star4.classList.add('starColor');

                            star5 = document.createElement('i');
                            star5.innerHTML = '<i class="fas fa-star"></i>';
                            star5.classList.add('starColor');
                            break;

                        default:
                            break;
                    }

                    topEscuelas.appendChild(boxCE);
                    boxCE.appendChild(wrapperCE);

                    wrapperCE.appendChild(position);
                    wrapperCE.appendChild(photoCE);
                    wrapperCE.appendChild(nameCE);
                    // wrapperCE.appendChild(provinciaCE);
                    wrapperCE.appendChild(starsRate);

                    starsRate.appendChild(star1);
                    starsRate.appendChild(star2);
                    starsRate.appendChild(star3);
                    starsRate.appendChild(star4);
                    starsRate.appendChild(star5);
                }

            };

            break;

        default:
            break;    
        }
        
    }


selectTipoTop.addEventListener('change', mostrarDatosTop);

// *********************************************************************************************




// let mostrarTops = () => {
//     switch (selectTipoTop.value) {
       
//     }
// }

// selectTipoTop.addEventListener('change', mostrarTops);

