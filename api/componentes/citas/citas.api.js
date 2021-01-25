'use strict';

const modeloCitas = require('./citas.model');
const nodeMailer = require('nodemailer');
const modeloBitacora = require('../bitacora/bitacora.model');


const transporter = nodeMailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: 'amejixteam@gmail.com',
            pass: 'amejixunidos'
        }
    }
);

module.exports.registrarCita = (req, res) =>{
    let nuevaCita = new modeloCitas(
        {
            fechaHora: req.body.fechaHora,
            nombreCentroEducativo: req.body.nombreCentroEducativo,
            nombrePadreFamilia: req.body.nombrePadreFamilia,
            correoPadreFamilia: req.body.correoPadreFamilia
        }
    );

    nuevaCita.save(function (error) {
        if (error){
            res.json(
                {
                    success: false,
                    msg: `No se pudo agendar la cita. Ocurrió el siguiente error: ${error}`
                }
            );
        } else {
            let mailOptions = {
                from: 'amejixteam@gmail.com',
                to: nuevaCita.correoPadreFamilia,
                subject: 'Se ha agendado su cita',
                html: `<html LANG="ES">
                    <head>
                        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
                        <style>
                            h1{
                                display: inline-block;
                                font-size: 40px;
                                text-align: left;
                                margin-left: 50px;
                                 color: #f9aa33;
                            }
                            h2{
                                text-align: center;
                                font-size: 30px;
                                margin-bottom: 50px;
                                color: #232f34;
                            }
                            .wrapper{
                                background : #81ecec;
                                font-family: 'Roboto', sans-serif;
                            }
                            .container{
                                margin: 0 auto;
                                background: #fff;
                                width: 80%;
                                text-align: left;
                                padding: 10px;
                            }
                            a{
                                text-align: center;
                                text-decoration: none;
                                padding: 20px;
                                background: #f9aa33;
                                color: #344955;
                                font-size: 22px;
                                display: inline-block;
                                margin-left: 500px;
                            }
                            
                            a:hover{
                                background: #ffbe76;
                                cursor: pointer;
                                transition: all 300ms ease;
}                              
                            p{
                                font-size: 22px;
                                color: #344955;
                                text-align: left;
                            }
                            span{
                                color: #344955;
                            }
                        </style>
                    </head>
                    <body>
                      <div class="container">
                        <h1>Ha agendado su cita con ${nuevaCita.nombreCentroEducativo}</h1>
                      <h2><i>Donde encuentra el centro educativo que más le conviene</i></h2>
                      
                      <p>Saludos ${nuevaCita.nombrePadreFamilia}. Le agradecemos por escoger utilizar los servicios de SICEN</p>
                      <p>Se ha agendado su cita con el centro educativo ${nuevaCita.nombreCentroEducativo}</p>
                      <p>La cita es en la fecha ${nuevaCita.fechaHora.toLocaleDateString()} a las ${nuevaCita.fechaHora.toLocaleTimeString()}</p>
                       <!--<p>Para ver su lista de citas agendadas visite:<p>
                        <a href="http://localhost:3000/public/misCitasPF.html" class="boton"><span>Mis citas agendadas</span></a>-->
                      </div>
                      
                    </body>
                    
                  </html>`
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if(error){
                    console.log(error);
                } else {
                    console.log('El correo fue enviado con éxito. ' + info.response);
                }
            });


            /**************************Bitacora*/
            var diaActual = new Date();
            var dd = diaActual.getDate();
            var mm = diaActual.getMonth();
            var yyyy = diaActual.getFullYear();
            var hora = diaActual.getHours();
            var minutos = diaActual.getMinutes();
            var segundos = diaActual.getSeconds();
            diaActual = `${yyyy}/${mm}/${dd} - ${hora}:${minutos}:${segundos}`;

            let nuevaBitacora = new modeloBitacora({
                usuario: req.body.nombre,
                tipoDeMovimiento: "Agendación de cita",
                fecha: diaActual,
            });
            nuevaBitacora.save();
            /**************************/

            res.json(
                {
                    success: true,
                    msg: 'Se agendó la cita con éxito.'
                }
            );
        }
    });
};

module.exports.listarCitasPF = (req, res) =>{

    modeloCitas.find().sort({fecha: 'asc'}).then(
        citas =>{

            let citasPF = [];

            for (let cita of citas){

                if (cita.correoPadreFamilia === req.body.correo){
                    citasPF.push(cita);
                }
            }

            if (citasPF.length > 0 && req.body.correo !== undefined){

                res.json(
                    {
                        success: true,
                        citas: citasPF
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        citas: 'No se encontró ninguna cita'
                    }
                );
            }
        }
    );
};

module.exports.listarCitasCE = (req, res) =>{
    modeloCitas.find().sort({fecha: 'asc'}).then(
        citas =>{

            let citasCE = [];

            for (let cita of citas){
                if (cita.nombreCentroEducativo === req.body.nombreCE || cita.centroEducativo === req.body.nombreCE ){

                    citasCE.push(cita);
                }
            }

            if (citasCE.length > 0 && req.body.nombreCE !== undefined){

                res.json(
                    {
                        success: true,
                        citas: citasCE
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        citas: 'No se encontró ninguna cita'
                    }
                );
            }
        }
    );
};

module.exports.cancelar = (req, res) =>{
    modeloCitas.findOneAndDelete(req.body.id, error =>{
        if (error){
            res.json({success: false, msg : 'No se pudo cancelar la cita'});
        } else {


            /**************************Bitacora*/
            var diaActual = new Date();
            var dd = diaActual.getDate();
            var mm = diaActual.getMonth();
            var yyyy = diaActual.getFullYear();
            var hora = diaActual.getHours();
            var minutos = diaActual.getMinutes();
            var segundos = diaActual.getSeconds();
            diaActual = `${yyyy}/${mm}/${dd} - ${hora}:${minutos}:${segundos}`;

            let nuevaBitacora = new modeloBitacora({
                usuario: req.body.nombre,
                tipoDeMovimiento: "Cancelación de cita exitosa",
                fecha: diaActual,
            });
            nuevaBitacora.save();
            /**************************/

            res.json({success: true, msg : 'Se canceló la cita con éxito'});
        }
    });
};