var markers;
var pos;
var you;
var map;
var defaultLoc = {lat: -34.397, lng: 150.644};
var geocoder;
var dest;
var p1;
var p2;

var rend = new google.maps.DirectionsRenderer();




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
    var dists=[];
    for(var i = 0; i < markers.length; i++) {
        console.log(markers[i]);
        console.log(dest);
        dists[i] = distance(markers[i].getPosition(),
                            dest.getPosition());
    }
    var max = 0;
    var maxi = 0;
    for(var i = 0; i < dists.length; i++) {
        if (dists[i] > max) {
            max = dists[i];
            maxi = i;
        }
    }
    var midpoint = markers[maxi];
    console.log(midpoint);

    new google.maps.DirectionsService().route({
        origin: you.getPosition(),
        waypoints: [{location: midpoint.getPosition()}],
        destination: dest.getPosition(),
        provideRouteAlternatives: false,
        travelMode: 'BICYCLING',
        unitSystem: google.maps.UnitSystem.IMPERIAL

    },function(result, status) {draw(result,
                                     status)});

}

function draw(res, stat) {
    console.log("DRAW");

    rend.setMap(map);

    rend.setDirections(res);

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



function distance(x,y) {
    a = Math.pow(x.lat() - y.lat(), 2);
    b = Math.pow(x.lng() - y.lng(), 2);
    return Math.sqrt(a + b);
}
function add() {}
