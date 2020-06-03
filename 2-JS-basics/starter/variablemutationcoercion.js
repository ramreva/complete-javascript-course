/*-----------------
Variable Mutation AND Type coercion
*/

var firstName = 'John';
age = 28;

console.log(firstName + ' ' + age);
// age gets auto converted to a string,
// by this process called type-coercion

var job, isMarried; // declaring multiple variables on same line
job = 'Teacher'; // and then assign them later
isMarried = false; // same thing, declaring later

console.log(firstName + ' is a ' + age + ' year old '+job+'. \nIs he married? '+isMarried);

age = 'twenty eight';
job = 'driver';

console.log(firstName + ' is a ' + age + ' year old '+job+'. \nIs he married? '+isMarried);
// alert(firstName + ' is a ' + age + ' year old '+job+'. \nIs he married? '+isMarried);

// var lastName = prompt('What is his lastName?');
// console.log(firstName + ' ' + lastName);
