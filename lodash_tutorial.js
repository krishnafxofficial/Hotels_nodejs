// function add(a,b){
//     return a+b;
// }
// var result = add(3,5);
// console.log(result);

// Arrow function
// var add = (a,b) => {return a+b;}
// var result = add(444,5);
// console.log(result);
// (function(){
//     console.log("Krishna is added");
// })();

// Callback function
// function callBack(){
//     console.log("Krishna is calling callback function");
// }
// const add = function(a,b,callBack){//It is not necessary that we write only callBack here,we can write anything else. 
//         var result = a + b;
//         console.log("Result : " + result);// Here Main function is completed
//        callBack();
// }
//  //add(3,4,callBack);

  /*add(3,4,function(){
     console.log("add completed");
  })*/

//     add(2,3,() => console.log("add completed"));

// Import files in Node js
// const notes = require('./notes.js');
// console.log('server file is available');

// var age  = notes.age;

// var result = notes.addNumber(age+18,10)
// console.log(age);
// console.log("Result is now : " + result);

// Lodash package in Node js
var _ = require('lodash');  /* (In the place of underscore(_) if we using another
  words exam.=>(var krishna), its not found error but using underscore(_) is a rule )*/

var data = ["person","person",1,2,1,2,"2"];
var filter = _.uniq(data);
console.log(filter);

// Another example
var dataName = _.isString("Krishna ");
console.log(dataName);
