// var map = {A: 8, X: 8};
//
// function makeFakeMap() {
//   if (map.A === 8) {
//
//   }
//   console.log(map['A']);
//   console.log(map['X']);
// }
//
// makeFakeMap();

var mapMaker = {};
var makeFakeMap = function(n1,n2) {
  var rand = Math.random();
  var pos1 = Math.round( rand * n1);
  var pos2 = Math.round( rand * n2);
  mapMaker.finalArr = [];
  //make rows
  for (var rInd = 0 < n1 ; rInd++) {
    var arrName = 'arr' + rInd
    mapMaker.arrName = [];
    //make columns for this rows
    for ( var cInd = 0 ; cInd < n2 ; cInd++) {
      if (( cInd === pos2 ) && ( rInd === pos1 ) ) {
        mapMaker.arrName.push('X')
      } else {
        mapMaker.arrName.push('A')
      }
    }
    map.finalArr.push(mapMaker.arrName);
  }
  for (var ind = 0 ; ind < mapMaker.finalArr.length ; ind++) {
    console.log(mapMaker.finalArr[ind]);
  }
}
