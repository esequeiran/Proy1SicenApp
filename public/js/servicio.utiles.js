'use strict';


let listarUtilesNivel = (pnivel, pIdCentro) =>{
    
  let listaUtiles= [];
  let request = $.ajax({ 
    
    url: "http://localhost:4000/api/listarUtilNivel",
    method: "POST",
    
    data: {
        nivel : pnivel,
        idCE : pIdCentro
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async : false

  });
   
  request.done(function( res ) {
    
      listaUtiles = res.utiles;
    
    
    

  });
   
  request.fail(function( jqXHR, textStatus ) {
    
  });  
  return listaUtiles; 
};


let listarUtilesNivelPropio = (pnivel, pIdCentro, pidFiltro) =>{
    
  let listaUtiles= [];
  let request = $.ajax({ 
    
    url: "http://localhost:4000/api/listarUtilNivelPropio",
    method: "POST",
    
    data: {
        nivel : pnivel,
        idCE : pIdCentro,
        nombreLista : pidFiltro
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async : false

  });
   
  request.done(function( res ) {
    
      listaUtiles = res.utiles;
    
    
    

  });
   
  request.fail(function( jqXHR, textStatus ) {
    
  });  
  return listaUtiles; 
};




let listarTodos= () =>{
    
    let listaUtiles= [];
    let request = $.ajax({ 
      
      url: "http://localhost:4000/api/listarTodos",
      method: "GET",
      
      data: {
          
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async : false
  
    });
     
    request.done(function( res ) {
      listaUtiles = res.utiles;
      
  
    });
     
    request.fail(function( jqXHR, textStatus ) {
      
    });  
    return listaUtiles; 
  };



let registrarUtil = (pnombre, pdescripcion, pcantidad, pnivel, pidCentroEducativo, pnombreLista, pnombreUsuario) =>{
    
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarUtil",
        method: "POST",
        data: {
            nombre : pnombre,
            descripcion : pdescripcion,
            cantidad : pcantidad,
            nivel : pnivel,
            idCE : pidCentroEducativo,
            nombreLista: pnombreLista,
            nombreUsuario : pnombreUsuario
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType : "json"

    });
    request.done(function( msg ) {
        // swal.fire({
        //     type: 'success',
        //     title: 'Util registrado correctamente',
        //     text: `El util escolar ${pnombre} se registró con la descripción ${pdescripcion}, la cantidad del útil fue ${pcantidad} y el nivel escolar es ${pnivel}`
        // });
      });
       
      request.fail(function( jqXHR, textStatus ) {
        
      });
};
//buscar, modificar, eliminar


let buscarUtilIndividual = (_id) => {
  let utiles = [];

  let request = $.ajax({
    
    url: "http://localhost:4000/api/buscarUtilIndividual/" + _id,

    method: "GET",
    data: {
      
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
      utiles = res.utiles;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return utiles;
 
};



let actualizarUtil = (pcantidad, p_id, pnombreUsuario) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/actualizarUtil',
      method : "POST",
      data : {       
        cantidad : pcantidad,        
        id : p_id,
        nombreUsuario : pnombreUsuario
      },
      dataType : "json",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
  });
  request.done(function(res){     
     
      swal.fire({
          type : 'success',
          title : 'Útil actualizado con éxito',
          text : res.msg,
          onClose: () => {
              window.location.href = 'listarUtilesOficialesSA.html';
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

let actualizarUtilCE = (pcantidad, p_id, pnombreUsuario) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/actualizarUtil',
      method : "POST",
      data : {       
        cantidad : pcantidad,        
        id : p_id,
        nombreUsuario : pnombreUsuario
      },
      dataType : "json",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
  });
  request.done(function(res){     
     
      swal.fire({
          type : 'success',
          title : 'Útil actualizado con éxito',
          text : res.msg,
          onClose: () => {
              window.location.href = 'listarUtilesPropiosCE.html';
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


let eliminarUtil = (p_id, pnombreUsuario) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/eliminarUtil',
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
          title : 'Útil eliminado con éxito',
          text : res.msg,
          onClose: () => {
              window.location.href = 'listarUtilesOficialesSA.html';
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


let eliminarLista = (pnombreLista, pnombreUsuario) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/eliminarLista',
      method : "POST",
      data : {         
        nombreLista: pnombreLista,
        nombreUsuario : pnombreUsuario
      },
      dataType : "json",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
  });
  request.done(function(res){     
     
      swal.fire({
          type : 'success',
          title : 'Lista eliminada con éxito',
          text : res.msg,
          onClose: () => {
              window.location.href = 'listarUtilesOficialesSA.html';
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


