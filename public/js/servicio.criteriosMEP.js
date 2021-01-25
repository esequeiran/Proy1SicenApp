'use strict';

let listarCriterios= () =>{
    let listaCriterios= [];
    
    let request = $.ajax({ 
      url: "http://localhost:4000/api/listarCriterios",
      method: "GET",
      
      data: {
          
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async : false
  
    });
     
    request.done(function( res ) {
      listaCriterios = res.criterios;
      
  
    });
     
    request.fail(function( jqXHR, textStatus ) {
      
    });  
    return listaCriterios; 
  };
  


  



  let registrarCriterio = (pcriterio, pdescripcion, ppuntaje, pnombreUsuario) =>{
    
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarCriterio",
        method: "POST",
        data: {
            criterio : pcriterio,
            descripcion : pdescripcion,
            puntaje : ppuntaje,
            nombreUsuario : pnombreUsuario               
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType : "json"

    });
    request.done(function( msg ) {
        swal.fire({
            type: 'success',
            title: 'El criterio se ha registrado correctamente',
            text: `El ${pcriterio} se registró con el puntaje ${ppuntaje}`,
            onClose: () => {
              window.location.href = 'listarCriteriosMEP.html';
            }    
        });
      });
       
      request.fail(function( jqXHR, textStatus ) {
        
      });
};


let buscarCriterio = (_id) => {
  let criterio = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscarCriterio/"+ _id,
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
      criterio = res.criterio;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return criterio;
 
};

let actualizarCriterio = (pcriterio, pdescripcion, ppuntaje, p_id, pnombreUsuario) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/actualizarCriterio',
      method : "POST",
      data : {
        criterio : pcriterio,
        descripcion : pdescripcion,
        puntaje : ppuntaje,    
          id : p_id,
          nombreUsuario : pnombreUsuario
      },
      dataType : "json",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
  });
  request.done(function(res){     
     
      swal.fire({
          type : 'success',
          title : 'Criterio actualizado con éxito',
          text : res.msg,
          onClose: () => {
              window.location.href = 'listarCriteriosMEP.html';
            }    
      });

  });

  request.fail(function(res){
      swal.fire({
          type : 'error',
          title : 'Proceso no realizado',
          text : res.msg
      });

  });

};



let eliminarCriterio = (p_id, pnombreUsuario) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/eliminarCriterio',
      method : "POST",
      data : {         
          id : p_id,
          nombreUsuario : pnombreUsuario
      },
      dataType : "json",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
  });
  request.done(function(res){     
     
      swal.fire({
          type : 'success',
          title : 'Criterio eliminado con éxito',
          text : res.msg,
          onClose: () => {
              window.location.href = 'listarCriteriosMEP.html';
            }    
      });

  });

  request.fail(function(res){
      swal.fire({
          type : 'error',
          title : 'Proceso no realizado',
          text : res.msg
      });

  });

};







  

