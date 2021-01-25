
$(function() {
    let imagenUrl = '';
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'sicen', api_key: '727912144655554'});

    // Upload button
    let uploadButton = $('#butonSubirImagen');
    let buttonCEP = $('#fotoCEP')
    let buttonPF = $('#fotoPF')
    let buttonDocumento = $('#buttonAgregarDocumento')
    let buttonSA = $('#fotoSA')
    // Upload button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'sicen', upload_preset: 'sicenAmejix', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
             console.log(id);
            imagenUrl = 'https://res.cloudinary.com/sicen/image/upload/' + id ;
            document.querySelector('#imagePreview').src = imagenUrl;
          console.log(imagenUrl);
        });
    });


    buttonCEP.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'sicen', upload_preset: 'sicenAmejix', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
             console.log(id);
            imagenUrl = 'https://res.cloudinary.com/sicen/image/upload/' + id ;
            document.querySelector('#imagePreviewCEP').src = imagenUrl;
          console.log(imagenUrl);
        });
    })


    buttonPF.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'sicen', upload_preset: 'sicenAmejix', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
             console.log(id);
            imagenUrl = 'https://res.cloudinary.com/sicen/image/upload/' + id ;
            document.querySelector('#imagePreviewPF').src = imagenUrl;
          console.log(imagenUrl);
        });
    })

    buttonSA.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'sicen', upload_preset: 'sicenAmejix', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
             console.log(id);
            imagenUrl = 'https://res.cloudinary.com/sicen/image/upload/' + id ;
            document.querySelector('#imagePreviewSA').src = imagenUrl;
          console.log(imagenUrl);
        });
    })

    
    buttonDocumento.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'sicen', upload_preset: 'sicenAmejix', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
             console.log(id);
            imagenUrl = 'https://res.cloudinary.com/sicen/image/upload/' + id ;
            document.querySelector('#documentPreview').src = imagenUrl;
          console.log(imagenUrl);
        });
    })

    
})



function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}