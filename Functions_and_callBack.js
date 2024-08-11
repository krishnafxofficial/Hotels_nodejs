// Question 1
// Create a function using the "function" keyword that takes a String as an arguments 
// returns the number of vowels in the string.
// const countVowels = require("./utils.js")

// function krishna(){
//   console.log("Krishna: Yippie we have counted the vowels in string"); 
// }

// countVowels("abc", krishna);

// countVowels("abc",function krishna(){
//   console.log("Krishna: Yippie we have counted the vowels in string"); 
// } )

// countVowels("abc", () =>{\
//   console.log("Krishna: Yippie we have counted the vowels in string");
// });

// File system and OS(Open source) liberaries.
var fs = require("fs");
var os = require("os");

var user  = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile("greeting.txt" , 'Hi ' + user.username +'!\n', () =>{
  console.log('File is created');
} )