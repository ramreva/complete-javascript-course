/*----- Objects & Properties -----*/
// Objects have key value pairs
// Can be used to group together values that belong together, but in no particular order
// this is where it differs from Arrays
console.log('-----------------------------------');
console.log('------ Objects & Properties -------');
console.log('-----------------------------------');

// Object Literal Method for creating objects

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
}

// New Object Syntax method of creating objects

var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Doe';
jane.birthYear = '1991';
jane.family = ['John', 'Mark', 'Bob', 'Emily'];
jane.job = 'professor';
jane.isMarried = false;

console.log(jane);

console.log(john);
console.log(john.firstName); // dot notation retrieval
console.log(john['lastName']); // by passing a match string

// Mutating values work just like with Arrays

john.job = 'designer';
john.isMarried = true;

console.log(john);


// Objects and Methods
// An object can also have functions/methods

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function(){
    this.age = 2020 - this.birthYear; // Yayy.. the first 'this' in this course
  }
}

john.calcAge();
console.log(john);
