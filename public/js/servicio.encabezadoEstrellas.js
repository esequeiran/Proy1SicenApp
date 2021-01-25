'use strict';

let listarEstrellasPropias= (panno, pidCE) =>{
    let listaEstrellas= [];    
    let request = $.ajax({ 
      url: "http://localhost:4000/api/listarEstrellasPropias",
      type: "POST",    
      data: {      
        anno: panno,
        idCE: pidCE
          
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async : false
  
    });
     
    request.done(function( res ) {
        listaEstrellas = res.estrellasCE;      
  
    });
     
    request.fail(function( jqXHR, textStatus ) {
      
    });  
    return listaEstrellas; 
  };