var myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
          {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
          {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
          {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
          {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
          {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]

var currentLocation = {lat: 39.478908, long: -124.67}
var results = []

var findItems = function() {
  for (var i = 0; i < myResults.length; i++) {

    myResults[i].location["lat"]
    latitude = myResults[i].location["lat"]
    longitude = myResults[i].location["long"]
    var xDiff = latitude - currentLocation.lat
    var yDiff = longitude - currentLocation.long
    var power = Math.pow(xDiff, 2) + Math.pow(yDiff, 2)

    var distance = Math.sqrt(power)

    // if latitude is greater than the latitude of currentLocation do "too far", of longtitude is greater than longitude of currentLocation do "too far", if latitude is less than the latitude of the currentLocation do "too far", if the longitude is less than the longitude of the currentLocation do "too far"
  }
}
