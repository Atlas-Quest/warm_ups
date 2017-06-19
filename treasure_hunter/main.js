// var map1 = ["A","A","X","A","A"]; //this works, but multidemensional arrays don't work because the if statement is trying to find X in array #0 and isn't accessing the other arrays within it.
var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];
var foundItems = [];
var index = map1.indexOf('X');

function treasureFinder(){
  for (var i = 0; i < map1.length; i++) {
    foundItems.push(index);
    index = map1.indexOf('X', ++index);
  }
}



// function treasureFinder() {
//   if (index != -1) {
//     foundItems.push(index);
//     index = map1.indexOf('X', ++index);
//   }
// }


// forEach
// indexOf
// some
