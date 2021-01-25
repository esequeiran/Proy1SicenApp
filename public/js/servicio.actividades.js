'use strict';

let listarActividades= (pIdCentro) =>{
    let listaActividades= [];
    
    let request = $.ajax({ 
      url: "http://localhost:4000/api/listarActividades",
      method: "POST",      
      data: {
          idCE: pIdCentro
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async : false
  
    });
     
    request.done(function( res ) {
      listaActividades = res.actividades;
      
  
    });
     
    request.fail(function( jqXHR, textStatus ) {
      
    });  
    return listaActividades; 
  };
  





let registrarActividad = (pactividad, pdescripcion, pfecha, parregloImgAct, pidCentroEducativo, pnombreUsuario) =>{
    
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarActividad",
        method: "POST",
        data: {
            actividad : pactividad,
            descripcion : pdescripcion,
            fecha : pfecha,
            imagen : parregloImgAct,
            idCE : pidCentroEducativo,
            nombreUsuario : pnombreUsuario           
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType : "json"

    });
    request.done(function( msg ) {
        swal.fire({
            type: 'success',
            title: 'La actividad se ha registrado correctamente',
            text: `La actividad ${pactividad} se registró con la descripción ${pdescripcion}`,
            onClose: () => {
                window.location.href = 'listarActividadesPropiasCE.html';
              }    
        });
      });
       
      request.fail(function( jqXHR, textStatus ) {
          
      });
};

let eliminarActividad = (p_id, pnombreUsuario) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/eliminarActividad',
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
          title : 'Actividad eliminada con éxito',
          text : res.msg,
          onClose: () => {
              window.location.href = 'listarActividadesPropiasCE.html';
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


let buscarActividad = (_id) => {
  let actividad = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscarActividad/"+ _id,
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
      actividad = res.actividad;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return actividad;
 
};

let actualizarActividad = (pactividad, pdescripcion, pfecha, parregloImgAct, pidCentroEducativo, p_id, pnombreUsuario) =>{


  let request = $.ajax({
      url : 'http://localhost:4000/api/actualizarActividad',
      method : "POST",
      data : {
        actividad : pactividad,
        descripcion : pdescripcion,
        fecha : pfecha,
        imagen : parregloImgAct,
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
          title : 'Actividad actualizada con éxito',
          text : res.msg,
          onClose: () => {
              window.location.href = 'listarActividadesPropiasCE.html';
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



