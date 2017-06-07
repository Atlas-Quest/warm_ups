var bob = [3,2,6,11,9,2,6,9,10];
var jimbo = [5,12,9,22,13,7,16,10,11];
var fish = [2,2,4,5,4,3,6,4,1];
var par = [3,4,5,5,3,3,4,3,5];

function totalScores(name) {
  var total = 0;
  for (var i = 0; i < name.length; i++) {
      total += (name[i]);
    }
  return total;
}
