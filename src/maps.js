var markers;
var pos;
var you;
var map;
var defaultLoc = {lat: -34.397, lng: 150.644};
var geocoder;
var dest;
var midpoint;
var p1;
var p2;
var json;
var rend;
var dists;







function initMap() {
    rend = new google.maps.DirectionsRenderer();


    map = new google.maps.Map(document.getElementById('map'), {
          center: defaultLoc,
          zoom: 17
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
            position: {lat: 33.776687, lng: -84.396275},
            map: map
        }),
        new google.maps.Marker({
            position: {lat: 33.776890, lng: -84.396896},
            map: map
        }),
        new google.maps.Marker({
            position: {lat: 33.777005, lng: -84.396781},
            map: map
        }),
        new google.maps.Marker({
            position: {lat: 33.776767, lng: -84.396271},
            map: map
        }),
        new google.maps.Marker({
            position: {lat: 33.776638, lng: -84.396313},
            map: map
        }),
        new google.maps.Marker({
            position: {lat: 33.776489, lng: -84.396267},
            map: map
        }),
        new google.maps.Marker({
            position: {lat: 33.776272, lng: -84.395696},
            map: map
        }),
        new google.maps.Marker({
            position: {lat: 33.775941, lng: -84.395703},
            map: map
        }),
        new google.maps.Marker({
            position: {lat: 33.775940, lng: -84.395603},
            map: map
        }),
        new google.maps.Marker({
            position: {lat: 33.775859, lng: -84.395431},
            map: map
        }),
        new google.maps.Marker({
            position: {lat: 33.775991, lng: -84.395431},
            map: map
        }),
        new google.maps.Marker({
            position: {lat: 33.776808, lng: -84.395546},
            map: map
        }),


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
    dists=[];
    setTimeout(closest, 1000);
}
function closest() {
    for(var i = 0; i < markers.length; i++) {

        dists[i] = getDistance(markers[i].getPosition(),
                            dest.getPosition());
    }
    console.log(dists);
    var min = dists[0];
    var mini = 0;
    for(var i = 1; i < dists.length; i++) {
        if (dists[i] < min) {
            min = dists[i];
            mini = i;
        }
    }
    midpoint = markers[mini];
    console.log(you);
    console.log(dest);
    console.log(midpoint);
    dists = [];

    setTimeout(getRoute, 1000);
}
function getRoute() {

    new google.maps.DirectionsService().route({
        origin: you.getPosition(),
        waypoints: [{location: midpoint.getPosition()}],
        destination: dest.getPosition(),
        provideRouteAlternatives: false,
        travelMode: 'WALKING',
        unitSystem: google.maps.UnitSystem.IMPERIAL

    },function(result, status) {draw(result,
                                     status)});
}



function draw(res, stat) {

    console.log("DRAW");

    rend.setMap(null);
    rend.setDirections(null);

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




var rad = function(x) {
  return x * Math.PI / 180;
};

var getDistance = function(p1, p2) {
  return google.maps.geometry.spherical.computeDistanceBetween(p1, p2);

};
function add() {}

function toRadians(d) {
    return d*Math.PI/180
}
