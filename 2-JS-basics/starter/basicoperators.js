/*-----------------
Basic Operators
*/

let now, yearJohn, yearMark;
ageJohn = 28;
ageMark = 33;
now = 2020;
console.log(now);

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);

// Logical Operators

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof Operator

console.log(typeof johnOlder);
console.log(typeof x);

/* ---------------------
Operator Precedence */

// var now = 2018;
// var yearJohn = 1989;
var fullAge = 18;

var isFullAge = (now - yearJohn) >= fullAge;
console.log(isFullAge);

// Multiple Assignments

x = (1 + 2) * 6 - 4;

// More Operators

x = x * 2;
x *= 2;
console.log(x);

x++;
console.log(x);
x--;
console.log(x);
