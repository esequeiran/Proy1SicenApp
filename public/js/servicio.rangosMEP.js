'use strict';

let listarRangos= () =>{
   
    let listaRangos= [];
    let request = $.ajax({ 
      url: "http://localhost:4000/api/listarRangos",
      method: "GET",
      data: {
          
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async : false
  
    });
     
    request.done(function( res ) {
      listaRangos = res.rangos;
    
  
    });
     
    request.fail(function( jqXHR, textStatus ) {
      
    });  
    return listaRangos; 
  };


  let registrarRango = (prango, pvalorMinimo, pvalorMaximo, pestrellas, pnombreUsuario) =>{
    
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarRango",
        method: "POST",
        data: {
            rango : prango,
            valorMinimo : pvalorMinimo,
            valorMaximo : pvalorMaximo,
            estrellas : pestrellas,
            nombreUsuario : pnombreUsuario
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType : "json"

    });
    request.done(function( msg ) {
        swal.fire({
            type: 'success',
            title: 'El rango se ha registrado correctamente',
            text: `El ${prango} se registró con la cantidad de estrellas de ${pestrellas}.`,
            onClose: () => {
              window.location.href = 'listarRangosMEP.html';
            }    
        });
      });
       
      request.fail(function( jqXHR, textStatus ) {
        
      });
};



let buscarRango = (_id) => {
  let rango = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscarRango/"+ _id,
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
      rango = res.rango;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return rango;
 
};

let actualizarRango = (prango, pvalorMinimo, pvalorMaximo, pestrellas, p_id, pnombreUsuario) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/actualizarRango',
      method : "POST",
      data : {
        rango : prango,
        valorMinimo : pvalorMinimo,
        valorMaximo : pvalorMaximo,
        estrellas : pestrellas,   
        id : p_id,
        nombreUsuario : pnombreUsuario
      },
      dataType : "json",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
  });
  request.done(function(res){     
     
      swal.fire({
          type : 'success',
          title : 'Rango actualizado con éxito',
          text : res.msg,
          onClose: () => {
              window.location.href = 'listarRangosMEP.html';
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



let eliminarRango = (p_id, pnombreUsuario) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/eliminarRango',
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
          title : 'Rango eliminado con éxito',
          text : res.msg,
          onClose: () => {
              window.location.href = 'listarRangosMEP.html';
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