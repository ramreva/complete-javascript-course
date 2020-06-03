/* Primitives Vs Objects */

console.log('Primitives Vs Objects');

// Case Primitives
var a = 23;
var b = a;
a = 46;
console.log(a); // 46
console.log(b); // 23

// Case Objects
var obj1 = {
  name: 'John',
  age: 28
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30

// functions

var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);


/* Passing functions as arguments */

var years = [1990, 1965, 1987, 2005, 1998];

function arrayCalc(arr, fn){
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2020 - el;
}

function isFullAge(el) {
  return (el >= 18)
}

function maxHeartRate(el) {
  if (el >=18 && el <=81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);
var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

// Functions Returning Another Function



// Immediately Invoked Function Expressions




// Closures
