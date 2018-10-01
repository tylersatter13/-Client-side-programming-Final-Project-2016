var map;
$(document).ready(function(){

    initMap();

});
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 44.942215, lng:-122.976804},
        zoom: 19,
        mapTypeId: google.maps.MapTypeId.SATELLITE

    });

}