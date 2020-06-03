console.log('-------Arrays-------');

// let boxes;
// boxes = document.querySelectorAll('.box');
//
// // ES5
//
// //var boxesArr5 =
// //Array.prototype.slice.call(boxes);
// //boxesArr5.forEach(function(cur){
// //  cur.style.backgroundColor = 'dodgerblue';
// //});
//
// // ES6
// let boxesArr6;
// boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => {
// cur.style.backgroundColor = 'dodgerblue';
// });
//
// // note the from method above
//
// // Loops
//
// // ES6
// for (const element of boxesArr6) {
//   if (element.className.includes('blue')) {
//     continue;
//   }
//   element.textContent = 'Changed to Blue!';
// }
//
// // Finding elements in an Array
//
// // ES5
//
// var ages = [12, 17, 19, 21, 11];
//
// var full = ages.map(function(cur){
//   return cur >=18;
// });
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);
//
// // ES6
//
// console.log(ages.findIndex(cur => cur >= 18));
//
// console.log(ages.find(cur => cur > 18));

// Spread operator

console.log('This is when WebStorm usage began profusely!');

function addFourAges(a, b, c, d){
   return a + b + c + d;
}
var sum1 = addFourAges(12, 30, 12, 21);
console.log(sum1);

// ES5

var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
// spread operator
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
console.log(h);

const boxes = document.querySelectorAll('.box');
console.log(boxes);

const all = [h, ...boxes];
console.log(all);

Array.from(all).forEach(cur => cur.style.color = "purple");