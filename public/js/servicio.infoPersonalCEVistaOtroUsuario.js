'use strict';

let listarCEPorOtroUsuario = (pIdCentro) =>{
  console.log(pIdCentro);
  let listaCE= [];
  console.log(pIdCentro);
  let request = $.ajax({ 
    url: "http://localhost:4000/api/listarCEPorOU",
    method: "POST",
    data: {
        idCE : pIdCentro
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async : false
  });
  
  request.done(function( res ) {
    listaCE = res.centrosEducativos;
  });
  request.fail(function( jqXHR, textStatus ) {
  });  
  return listaCE; 
};

