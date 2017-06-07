prompt('Enter a word');

function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');

  // var len = str.length;
  // // //
  // // // for (var i = 0; i < len/2; i++) {
  // // //   if (str[i] !== str[len - 1 - i]) {
  // // //     return false;
  // // //   }
  // // }
  // // return true;
}

if (palindrome !== true) {
  console.log("Is a Palindrome");
}
  else if (palindrome === false) {
    console.log(Prompt("Is not a Palindrome"));
}
