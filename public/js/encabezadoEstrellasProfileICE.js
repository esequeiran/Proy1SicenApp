'use strict';

const divEstrellas = document.querySelector('.stars');

// const idCentroE = user._id;
const annoActual = new Date().getFullYear();
let estrellas = listarEstrellasPropias(annoActual, IdGeneralCE); 




let mostrarEstrellas = () =>{
                 
        let h2Estrellas = document.createElement('h2');
        h2Estrellas.classList.add('estrellas');
        
        let h2Estrellas1 = document.createElement('h2');
        h2Estrellas1.classList.add('estrellas');
        
        let h2Estrellas2 = document.createElement('h2');
        h2Estrellas2.classList.add('estrellas');
        
        let h2Estrellas3 = document.createElement('h2');
        h2Estrellas3.classList.add('estrellas');
        
        let h2Estrellas4 = document.createElement('h2');
        h2Estrellas4.classList.add('estrellas');
        
        
        if(estrellas[0]['estrellas'] ==  "★☆☆☆☆"){
            divEstrellas.innerHTML = '';

            h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
            h2Estrellas1.innerHTML = '<i class="far fa-star"></i>';
            h2Estrellas2.innerHTML = '<i class="far fa-star"></i>';
            h2Estrellas3.innerHTML = '<i class="far fa-star"></i>';
            h2Estrellas4.innerHTML = '<i class="far fa-star"></i>';
        } if(estrellas[0]['estrellas'] ==  "★★☆☆☆"){
            divEstrellas.innerHTML = '';

            h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
            h2Estrellas1.innerHTML = '<i class="fas fa-star"></i>';
            h2Estrellas2.innerHTML = '<i class="far fa-star"></i>';
            h2Estrellas3.innerHTML = '<i class="far fa-star"></i>';
            h2Estrellas4.innerHTML = '<i class="far fa-star"></i>';
        } if(estrellas[0]['estrellas'] ==  "★★★☆☆"){
            divEstrellas.innerHTML = '';

            h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
            h2Estrellas1.innerHTML = '<i class="fas fa-star"></i>';
            h2Estrellas2.innerHTML = '<i class="fas fa-star"></i>';
            h2Estrellas3.innerHTML = '<i class="far fa-star"></i>';
            h2Estrellas4.innerHTML = '<i class="far fa-star"></i>';
        } if(estrellas[0]['estrellas'] ==  "★★★★☆"){
            divEstrellas.innerHTML = '';

            h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
            h2Estrellas1.innerHTML = '<i class="fas fa-star"></i>';
            h2Estrellas2.innerHTML = '<i class="fas fa-star"></i>';
            h2Estrellas3.innerHTML = '<i class="fas fa-star"></i>';
            h2Estrellas4.innerHTML = '<i class="far fa-star"></i>';
        } if(estrellas[0]['estrellas'] ==  "★★★★★"){
            divEstrellas.innerHTML = '';

            h2Estrellas.innerHTML = '<i class="fas fa-star"></i>';
            h2Estrellas1.innerHTML = '<i class="fas fa-star"></i>';
            h2Estrellas2.innerHTML = '<i class="fas fa-star"></i>';
            h2Estrellas3.innerHTML = '<i class="fas fa-star"></i>';
            h2Estrellas4.innerHTML = '<i class="fas fa-star"></i>';
        }

        divEstrellas.appendChild(h2Estrellas);
        divEstrellas.appendChild(h2Estrellas1);  
        divEstrellas.appendChild(h2Estrellas2);
        divEstrellas.appendChild(h2Estrellas3);
        divEstrellas.appendChild(h2Estrellas4);      

    }

if(estrellas){
    mostrarEstrellas();
}
    


