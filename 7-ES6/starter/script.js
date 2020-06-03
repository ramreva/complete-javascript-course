/* ES6 */

// let and const
// Blocks and IIFEs
// Strings
// Arrow Functions
// Destructuring
// Arrays
// Spread Operator
// Rest and Default Parameters
// Maps
// Classes and Subclasses
// Promises
// Native modules

// Variable declarations with let and const

// ES5 way
 var name5 = 'Jane Smith';
 var age5 = 23;
 name5 = 'Jane Miller';
 console.log(name5);

// ES6 way
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);

// function scoping and block scoping

// ES5
function driversLicence(passedTest){
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;
  }
  console.log(firstName + ' born in ' +
  yearOfBirth + ' is allowed to drive a car');
}

driversLicence(true);

// ES6

function driversLicence(passedTest){
  if (passedTest) {
    let firstName = 'John';
    const yearOfBirth = 1990;
  }
  // console.log(firstName + ' born in ' + yearOfBirth +
  // ' is allowed to drive a car');
// the above DOESN'T work cos the variable in this case are
// block scoped
}

driversLicence(true);

function driversLicence(passedTest) {
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
  }
  console.log(firstName + ', born in ' + 
  yearOfBirth + 'is allowed to drive a car');
}

driversLicence(true);






let i = 23;
for (let i = 0; i < 5; i++){
  console.log(i); // return the increments of the for loop
  // cos the i here is block scoped
}

console.log(i); // return 23

var x = 23;
for (var x = 0; x < 5; x++){
  console.log(x); // return the increments of the for loop
  // cos the x here is function scoped
}

console.log(x); // return 5


/* Lecture: Blocks and IIFEs and data privacy */

// ES6

{
  const a = 1;
  let b = 2;
  var c = 3333333333;
}

// console.log(a+b);
console.log(c);

// ES5

(function () {
  var c = 'something';
  console.log('Print' + ' ' + c);
})();

// console.log(c);