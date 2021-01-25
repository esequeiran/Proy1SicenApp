'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));
let centroEducativoInfo = listarUsuariosCEencabezado(IdGeneralCE);

const infoCE = document.querySelector('#infoCE');

let historia = centroEducativoInfo[0]['histroia'];

let anno = centroEducativoInfo[0]['anno'];

let servicios = centroEducativoInfo[0]['servicios'];

let facebook = centroEducativoInfo[0]['facebook'];
let twitter = centroEducativoInfo[0]['twitter'];
let instagram = centroEducativoInfo[0]['instagram'];

let email =  centroEducativoInfo[0]['email'];
let web = centroEducativoInfo[0]['web'];
let phone = centroEducativoInfo[0]['telCE'];
let fax = centroEducativoInfo[0]['fax'];

let mostrarInfoCE = () => {

    let historiaTitle = document.createElement('h2');
    historiaTitle.classList.add('infoCEh2');
    historiaTitle.textContent = 'Historia:';

    let historiaContent = document.createElement('h3');
    historiaContent.classList.add('infoCEh3');
    historiaContent.textContent = historia;

    let annoTitle = document.createElement('h2');
    annoTitle.classList.add('infoCEh2');
    annoTitle.textContent = 'Año de fundación: ' + anno;

    let serviceTitle = document.createElement('h2');
    serviceTitle.classList.add('infoCEh2');
    serviceTitle.textContent = 'Servicios: ' + servicios;

    let redesTitle = document.createElement('h2');
    redesTitle.classList.add('infoCEh2');
    redesTitle.textContent = 'Historia:';

    let facebookName = document.createElement('h3');
    facebookName.classList.add('infoCEh3');
    facebookName.textContent = facebook;

    let twitterName = document.createElement('h3');
    twitterName.classList.add('infoCEh3');
    twitterName.textContent = twitter;

    let instagramName = document.createElement('h3');
    instagramName.classList.add('infoCEh3');
    instagramName.textContent = instagram;

    let contactTitle = document.createElement('h2');
    contactTitle.classList.add('infoCEh2');
    contactTitle.textContent = 'Contacto';

    let emailName = document.createElement('h3');
    emailName.classList.add('infoCEh3');
    emailName.textContent = 'Correo Electrónico: ' + email;

    let webName = document.createElement('h3');
    webName.classList.add('infoCEh3');
    webName.textContent = 'Web: ' + web;

    let telCEName = document.createElement('h3');
    telCEName.classList.add('infoCEh3');
    telCEName.textContent = 'Teléfono: ' + phone;

    let faxName = document.createElement('h3');
    faxName.classList.add('infoCEh3');
    faxName.textContent = 'Fax: ' + fax;

infoCE.appendChild(historiaTitle);
infoCE.appendChild(historiaContent);
infoCE.appendChild(annoTitle);
infoCE.appendChild(serviceTitle);
infoCE.appendChild(redesTitle);
infoCE.appendChild(facebookName);
infoCE.appendChild(twitterName);
infoCE.appendChild(instagramName);
infoCE.appendChild(contactTitle);
infoCE.appendChild(emailName);
infoCE.appendChild(webName);
infoCE.appendChild(telCEName);
infoCE.appendChild(faxName);
    
};

mostrarInfoCE();