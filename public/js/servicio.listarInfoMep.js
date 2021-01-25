'use strict';


let listarInfoMEP = () =>{
  let infoGeneralMEP = [];
  let request = $.ajax({ 
    url: "http://localhost:4000/api/listarInfoMEP",
    method: "GET",
    data: {
       
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async : false
  });
  
  request.done(function( res ) {
    infoGeneralMEP = res.usuario;
  });
  request.fail(function( jqXHR, textStatus ) {
  });  
  return infoGeneralMEP; 
};

let listarInfoPersonalPF = (_id) =>{
  let infoGeneralPF = [];
  let request = $.ajax({ 
    url: "http://localhost:4000/api/listarInfoPF/"+_id,
    method: "GET",
    data: {
       
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async : false
  });
  
  request.done(function( res ) {
    infoGeneralPF = res.infoPF;
  });
  request.fail(function( jqXHR, textStatus ) {
  });  
  return infoGeneralPF; 
};

