var markers;
var pos;
var you;
var map;
var defaultLoc = {lat: -34.397, lng: 150.644};
var geocoder;
var dest;
console.log(dest);



function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
          center: defaultLoc,
          zoom: 10
        });
    you = new google.maps.Marker({
        map: map,
        position: defaultLoc,
        label: "!"

    });
    dest = new google.maps.Marker({
        map: null      ,
        position: defaultLoc,
        label: "?"
    });

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            you.setPosition(pos);


            map.setCenter(pos);
          }, function() {
            handleLocationError(true, you, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, you, map.getCenter());
        }
    geocoder = new google.maps.Geocoder();






    markers = [
        new google.maps.Marker({
            position: {lat: 33, lng: -83},
            map: map,
            title: "hi"
        })
    ];
    for(var i = 0; i < markers.length; i++) {

        markers[i].addListener("click",
                               function(m) {

                                   console.log(findRack(m).getTitle());
                               });
    }


}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('adrBox').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            dest.setMap(null);
            dest = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location,
                label: "?"
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function out(num,score,name) {

    console.log(num);
    console.log("score: " + markers[num].score
                + " name: " + markers[num].name);
}

function Bikerack(up, score) {
    console.log("created");
    this.latlong = latlong;
    this.score = score;
    this.name = name;
    this.self = new google.maps.Marker({
        position: this.latlong,
        map: map
    })
}

function findRack(loc) {
    var dists = [];
    for(var i = 0; i < markers.length; i++) {
        dists[i] = distance(loc.latLng,markers[i].getPosition())

    }
    var max = 0;
    for(var i = 0; i < dists.length; i++) {
        if(dists[i] > max) {max = i;}


    }
    return markers[max];
}

function distance(x,y) {
    a = Math.pow(x.lat() - y.lat(), 2);
    b = Math.pow(x.lng() - y.lng(), 2);
    return Math.sqrt(a + b);
}
function add() {}
