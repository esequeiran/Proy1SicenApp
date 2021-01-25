'use strict';
//padre de familia
let listarPFPorSA = (pIdPF) =>{

  let listaPF= [];
  let request = $.ajax({ 
    url: "http://localhost:4000/api/listarPFPorSA",
    method: "POST",
    data: {
        idPF : pIdPF
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async : false
  });
  
  request.done(function( res ) {
    listaPF = res.padreFamilia;
  });
  request.fail(function( jqXHR, textStatus ) {
  });  
  return listaPF; 
};