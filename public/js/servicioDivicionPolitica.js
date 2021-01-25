'use strict';


let divisionPolitica = (callback) => {

    $.getJSON("divisionPolitica.json", function( data ) {
        callback(data);
    });
}