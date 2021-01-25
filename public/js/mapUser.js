//Original


var marker, lat, lng;
function initMap() {
    var myLatLng = new google.maps.LatLng( user.lat, user.lng ),
        myOptions = {
            zoom: 12,
            center: myLatLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
            },
        map = new google.maps.Map( document.getElementById( 'map' ), myOptions );
        marker = new google.maps.Marker( {position: myLatLng, map: map, draggable: true} );
        google.maps.event.addListener(marker, 'dragend', update);

    marker.setMap( map );
}

function update() {
    var path = marker.getPosition();
    
  lat = path.lat();
  lng = path.lng()

  window.mapLatLng = {
      lat,
      lng
  }
//   alert("Lat: " + lat + "\nLon: " + lng);
}




