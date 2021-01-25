'use strict';

$(function(){
    let imagenUrl ='';

    $.cloudinary.config({ cloud_name: 'amejixteam', api_key: '119396934698832'});

    let uploadButton = $('#btnExaminar');

        uploadButton.on('click', function(e){

        cloudinary.openUploadWidget({ cloud_name: 'amejixteam', upload_preset: 'amejixTeam', tags: ['cgal']},
        function(error, result){
            if(error);
                let id = result[0].public_id;
                imagenUrl= "https://res.cloudinary.com/amejixteam/image/upload/" + id;
                document.querySelector('#documentPreview').src = imagenUrl;
            
            
        });
    });
})

function procesoImagen(id) {
    let options = {
        clientHints: true,
    };
    return $.cloudinary.url(id, options);
}