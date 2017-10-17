import { Geolocation } from './geolocation.class';
import { GMaps } from './gmaps.class';

let gmap = null;

window.addEventListener('load', function () {
    Geolocation.getLocation().then(position => {
        console.log(position);
        document.getElementById("coordinates").innerText = `
            ${position.coords.latitude}, ${position.coords.longitude}
        `;
        
        gmap = new GMaps(position.coords, document.getElementById("gmap"));
        gmap.getMap().then(map => {            
            clickMap(position); // Initializes click event on the map 

            let marker = gmap.createMarker(position.coords.latitude, position.coords.longitude, "red");
            clickMarker(marker); // Initializes click event on the marker 

            let autocomplete = gmap.getAutocomplete(document.getElementById("search"));
            changeAutocomplete(autocomplete); // Initializes place_changed event on the autocomplete 
        });

    }).catch(error => {
        console.error(error);
    });
});

function clickMap(position) {
    let map = gmap.map; // The map should be already loaded

    google.maps.event.addListener(map, 'click', event => {
        map.panTo(event.latLng); 
        let marker = gmap.createMarker(event.latLng.lat(), event.latLng.lng(), "green");           
        clickMarker(marker);
        var dist = google.maps.geometry.spherical.computeDistanceBetween(
            new google.maps.LatLng(position.coords.latitude, position.coords.longitude), // Our position
            event.latLng // This position
        );
        document.getElementById("coordinates").innerText = "Created a marker at lat: " + event.latLng.lat() +
            ", lng: " + event.latLng.lng() + "\n" +
            "Distance from you: " + (Math.round(dist)/1000) + "km";
                            
    });
}

function clickMarker(marker) {
    google.maps.event.addListener(marker, 'click', event => {
        gmap.showInfoWindow(marker, "Marker at lat: " + event.latLng.lat().toFixed(6) +
                                    ", lng: " + event.latLng.lng().toFixed(6));
    });
}

function changeAutocomplete(autocomplete) {
    let map = gmap.map; // The map should be already loaded

    google.maps.event.addListener(autocomplete, 'place_changed', event => {
        let place = autocomplete.getPlace();
        if (!place.geometry) return;
        
        map.panTo(place.geometry.location);
        gmap.createMarker(place.geometry.location.lat(), place.geometry.location.lng(), "blue");
        document.getElementById("coordinates").innerText = place.formatted_address;
    }); 
}