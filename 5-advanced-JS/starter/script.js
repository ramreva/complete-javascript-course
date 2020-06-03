/* ----- Objects and Functions -----

Everything is an Object. Well, Almost
Object Inheritance & Prototype Chain

PRIMITIVES - Numbers, Strings, Booleans, Undefined, Null
OBJECTS - Arrays, Functions, Objects, Dates, Wrappers for Numbers, Strings, Booleans etc.
*/

/*

OOP - Concepts

Blueprints (Constructor, Prototype)
to create more Instances.
Instances are Objects as well.

INHERITANCE - when one object gets access to
another objects methods and properties.

Every Object has prototype property.
Which enables inheritance.

null is the final link in the prototype chain.

The prototype property of an object is where we put
methods and properties that we want other objects to
inherit.

The Constructor's prototype property is NOT the
prototype of the Constructor itself, it's the prototype
of ALL intances that are create through it.

When a certain method is called, the search starts // TODO

*/

var currYear = 2020;

// Creating Objects

var john = {
    name: 'John',
    yearOfBirth: 1998,
    job: 'teacher'
};

// Function Constructor
// Cap First Alphabet for function constructor

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// Inheritance in Practice
// adding prototype properties

Person.prototype.calculateAge = function () {
    console.log(currYear - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

// Instantiation
// new operator creates a new empty object
// the function based on constructor is then called
var john = new Person('John', 1987, 'Entrepreneur');
john.calculateAge();
console.log(john.name + ' ' + john.lastName);
var mark = new Person('Mark', 1948, 'Retired Cop');
mark.calculateAge();
console.log(mark.name + ' ' + mark.lastName);

// Object.create method

var personProto = {
  calculateAge: function() {
    console.log(2020 - yearOfBirth);
  }
}

var joe = Object.create(personProto);
joe.name = 'John';
joe.yearOfBirth = 1998;
joe.job = 'teacher';
