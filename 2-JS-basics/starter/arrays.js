/*------------Arrays----------*/
console.log('----------------------------------------');
console.log('-----Arrays JS File Console outputs-----');
console.log('----------------------------------------');

// Arrays are a collection of variables, that can be any datatypes
// or combinations of datatypes

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

for (var i = 0; i < names.length; i++) {
  console.log(names[i] + ' is at array index ' + i);
}

names[1] = 'Ben'; // example of array data mutation
names[4] = 'Mary'; // example of addition of data to an array, by index

console.log(names);
console.log(names.length);

var john = ['John', 'Smith', 1990, 'teacher', 'false'];

john.push('blue'); // adds to the last position
console.log(john);
john.unshift('Mr.'); // adds to the first position
console.log(john);
john.pop(); // deletes the last position
console.log(john);
john.pop(); // deletes the last position, again
console.log(john);
john.shift(); // deletes the first position
console.log(john);

console.log(john.indexOf(1990)); // should return index if found
console.log(john.indexOf(23)); // should return -1 when not found

// -1 indexOf checks are a good way to find if an element exists in the array
console.log(john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer');
