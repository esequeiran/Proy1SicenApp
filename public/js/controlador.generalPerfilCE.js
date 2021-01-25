'use strict';

const aActividades = document.querySelector('#aActividades');
const aUtiles = document.querySelector('#aUtiles');


let agregarParametroUrl = (pParametro) => {  
        aActividades.href ='listarActividades.html?idCE=' + pParametro;    
        aUtiles.href ='listarUtiles.html?idCE=' + pParametro;   
       
};
agregarParametroUrl(IdGeneralCE);