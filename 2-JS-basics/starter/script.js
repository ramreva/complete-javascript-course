console.log("Hello, World!!!");

let firstName = `John`;
console.log(firstName);

// 'string' `template string`

var lastName = 'Smith';
console.log(lastName);

var fullName = `${firstName} ${lastName}`;
// this is the usage with template string

console.log(fullName);

// Datatype in JavaScript
// Five different Datatype

/*
Number - floating point numbers
String - a sequence of characters
Boolean - true or false
Undefined - doesn't have a value yet, automatically assigned to any variable
Null - 'non-existent'
*/

//Dynamic typing - data types are automatically assigned to Variables

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// variables can't start with numbers
// but can start with underscore or dollar sign
// variable names can't be reserved keywords, like 'function', 'if' etc

var _3years = 3;
var $years = 4;

console.log(_3years + $years);

// this is a single line comment

/*
& this is
multi-line
commenting
*/
