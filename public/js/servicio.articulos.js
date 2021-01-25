'use strict';


let listarArticulos = (pIdCentro) =>{
    
  let listaArticulos= [];
  let request = $.ajax({ 
    
    url: "http://localhost:4000/api/listarArticulo",
    method: "POST",
    
    data: {        
        idCE : pIdCentro
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async : false

  });
   
  request.done(function( res ) {
    
      listaArticulos = res.articulos;           

  });
   
  request.fail(function( jqXHR, textStatus ) {
    
  });  
  return listaArticulos; 
};



let registrarArticulo = (pnombre, pdescripcion, pidCentroEducativo, pnombreUsuario) =>{
    
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarArticulo",
        method: "POST",
        data: {
            nombre : pnombre,
            descripcion : pdescripcion,            
            idCE : pidCentroEducativo,
            nombreUsuario : pnombreUsuario
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType : "json"

    });
    request.done(function( msg ) {
        swal.fire({
            type: 'success',
            title: 'Artículo registrado correctamente',
            text: `El artículo escolar ${pnombre} se registró con la descripción ${pdescripcion}`,
            onClose: () => {
                window.location.href = 'listarArticulosPropios.html';
              }    
        });
      });
       
      request.fail(function( jqXHR, textStatus ) {
        
      });
};


let buscarArticulo = (_id) => {
  let articulo = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscarArticulo/"+ _id,
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
      articulo = res.articulo;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return articulo;
 
};

let actualizarArticulo = (pnombre, pdescripcion, pidCentroEducativo, p_id, pnombreUsuario) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/actualizarArticulo',
      method : "POST",
      data : {
          nombre : pnombre,
          descripcion : pdescripcion,            
          idCE : pidCentroEducativo,
          id : p_id,
          nombreUsuario : pnombreUsuario
      },
      dataType : "json",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
  });
  request.done(function(res){     
     
      swal.fire({
          type : 'success',
          title : 'Artículo actualizado con éxito',
          text : res.msg,
          onClose: () => {
              window.location.href = 'listarArticulosPropios.html';
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



let eliminarArticulo = (p_id, pnombreUsuario) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/eliminarArticulo',
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
          title : 'Artículo eliminado con éxito',
          text : res.msg,
          onClose: () => {
              window.location.href = 'listarArticulosPropios.html';
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