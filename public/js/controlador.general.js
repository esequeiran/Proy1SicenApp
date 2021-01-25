'use strict';

let getParameterByName = (name) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};
const IdGeneralCE = getParameterByName('idCE');
const NombreGeneralCE = getParameterByName('centroEducativo');