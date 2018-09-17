//import { GoogleMaps } from 'aurelia-google-maps';
//import { inject } from 'aurelia-framework';
import * as L from 'leaflet';

//@inject(GoogleMaps)
export class Location {

    attached() {

        //var map = L.map('mapid').setView([51.505, -0.09], 13);

        //L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        //}).addTo(map);

        //L.marker([51.5, -0.09]).addTo(map)
        //    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        //    .openPopup();



        var mymap = L.map('mapid').setView([59.7251, 10.8646], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(mymap);

        //L.marker([59.7251, 10.8646]).addTo(mymap)
        //    .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

        L.circle([59.7251, 10.8646], 200, {
            color: 'orange',
            fillColor: '#ff3',
            fillOpacity: 0.5
        }).addTo(mymap).bindPopup("Aurelia er sist lokalisert i dette området.");

        L.polygon([
            [59.7251, 10.8646],
            [59.7251, 10.8646],
            [59.7251, 10.8646]
        ]).addTo(mymap).bindPopup("I am a polygon.");


        var popup = L.popup();

        //function onMapClick(e) {
        //    popup
        //        .setLatLng(e.latlng)
        //        .setContent("You clicked the map at " + e.latlng.toString())
        //        .openOn(mymap);
        //}

        //mymap.on('click', onMapClick);

    }

    //constructor(google: GoogleMaps) {
    //    //googleMaps.
    //    let gmap = googleMaps;

    //    // https://github.com/Vheissu/aurelia-google-maps
    //    this.myMap(google);
    //}

    //myMap(google: GoogleMaps) {
    //    var myCenter = new google.map.latitude(41.878114, -87.629798);
    //    var mapProp = { center: myCenter, zoom: 12, scrollwheel: false, draggable: false, mapTypeId: google.map.MapTypeId.ROADMAP };

    //    var map = new google.map.Map(document.getElementById("googleMap"), mapProp);
    //    var marker = new google.map.Marker({ position: myCenter });

    //    marker.setMap(map);
    //}
    
}
