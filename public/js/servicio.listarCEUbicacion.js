'use strict';



let listarCEUbicacion= (pcantonUsuario) =>{
    let listaCEUbicacion= [];    
    let request = $.ajax({ 
      url: "http://localhost:4000/api/listarCEUbicacion",
      type: "POST",
      
      data: {
        canton : pcantonUsuario
          
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async : false
  
    });
     
    request.done(function( res ) {
        listaCEUbicacion = res.centrosEducativos;
      
  
    });
     
    request.fail(function( jqXHR, textStatus ) {
      
    });  
    return listaCEUbicacion; 
  };