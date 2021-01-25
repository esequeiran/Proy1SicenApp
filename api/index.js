'use strict';

/**
 * Exportamos todas las dependencias necesarias para establecer la conexión
 */
const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      morgan =  require('morgan'),
      mongoose = require('mongoose');

/**
 * Se definen las variables necesarias para la conexión con MongoDB
 */
let db = mongoose.connection,


    dburl = 'mongodb://isaac:amejix@proyecto-shard-00-00-bm9ze.mongodb.net:27017,proyecto-shard-00-01-bm9ze.mongodb.net:27017,proyecto-shard-00-02-bm9ze.mongodb.net:27017/sicen?ssl=true&replicaSet=proyecto-shard-0&authSource=admin&retryWrites=true',
   
    port = 4000;
//el front-end y back-end deben estar en puertos diferentes
/**
 * Se le indica que cree un servidor extra dentro del puerto 4000 y escuche los cambios que se le hagan a esos archivos
 */
let server = app.listen(port,_server());

/**
 * Se define la conexión con Mongoose, enviándole como parámetro la url de la base de datos
 */
mongoose.connect(dburl, { useNewUrlParser: true });

/**
 * Si la conexión falla, imprime en consola el error
 */
db.on('error', console.error.bind(console, 'Error de conexión con la base de datos: '));

/**
 * Si la conexión es exitosa nos imprime en la consola que se ha establecido conexión con Mongo
 */
db.once('open', function () {
  console.log('Base de datos conectada correctamente');
});

/**
 * Le indicamos a express que envíe las respuestas a la carpeta "public"
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Le indicamos a la aplicación que el formato de los datos va a ser JSON
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use( function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const usuarios = require('./componentes/usuarios/usuarios.route');
/* se da acceso externo a las ruta inicializandolas, ponga los accesos aqui 
*/
app.use('/api', usuarios);

const bitacora = require('./componentes/bitacora/bitacora.route');
app.use('/api', bitacora);



const utiles = require('./componentes/utiles/utiles.route');
app.use('/api', utiles);

const criterios = require('./componentes/criteriosMEP/criterios.route');
app.use('/api', criterios);

const rangos = require('./componentes/rangosMEP/rangos.route');
app.use('/api', rangos);

const actividades = require('./componentes/actividadesCentroEducativo/actividades.route');
app.use('/api', actividades);

const centrosEUbicacion = require('./componentes/centrosEducativosUbicacion/centrosEducativosUbicacion.route');
app.use('/api', centrosEUbicacion);

// const prueba = require('./componentes/prueba/prueba.route');
// app.use('/api', prueba);

const materialInformativo = require('./componentes/materialInformativo/material.route');
app.use('/api', materialInformativo);

const preguntasFrecuentes = require('./componentes/preguntasfrecuentes/preguntasFrecuentes.route');
app.use('/api', preguntasFrecuentes);

const criteriosBusqueda = require('./componentes/criteriosbusqueda/criteriosBusqueda.route');
app.use('/api', criteriosBusqueda);

const citas = require('./componentes/citas/citas.route');
app.use('/api', citas);

const becas = require('./componentes/becas/becas.route');
app.use('/api', becas);

const noticias = require('./componentes/noticias/noticias.route');
app.use('/api', noticias);

const matriculaCostos = require('./componentes/matriculasCostos/matriculaCostos.route');
app.use('/api', matriculaCostos);

const articulos = require('./componentes/articulos/articulos.route');
app.use('/api', articulos);

const idiomas = require('./componentes/idiomas/idiomas.route');
app.use('/api', idiomas);

const CEperfil = require('./componentes/CEperfil/CEperfil.route');
app.use('/api', CEperfil);

const comentarios = require('./componentes/comentarios/comentarios.route');
app.use('/api', comentarios);

const evaluacionesMEP = require('./componentes/evaluacionesMEP/evaluacionesMEP.route');
app.use('/api', evaluacionesMEP);

const visitas = require('./componentes/visitas/visitas.route');
app.use('/api', visitas);

const starsPF = require('./componentes/estrellasPF/starsPF.route');
app.use('/api', starsPF);

// Se guarda todo lo que se ha realizado
module.exports = app;

function _server(){
  console.log('Back-end corriendo en el puerto ' + port);
};