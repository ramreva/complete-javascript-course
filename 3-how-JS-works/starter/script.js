///////////////////////////////////////
// Lecture: Hoisting

// Case of Hositing with function declaration
calculateAge(1990);

function calculateAge(year) {
  console.log(2020 - year);
}

// Case of hoisting with function expressions

// retirement(1990); // doesn't work

var retirement = function(year) {
  console.log(65 - (2020 - year));
}

// retirement(1990); // works

// Variables

console.log(age); // will return undefined
var age = 23;
console.log(age); // will return variable value

function foo() {
  console.log(age); // global scope varaible unavailable here
  var age = 65;
  console.log(age); // function scope age variable is returned
}

foo(); // returns value from foo function execution context
console.log(age); // returns value from global execution context






///////////////////////////////////////
// Lecture: Scoping


// First scoping example
// Lexical Scoping

var a = 'Hello! ';
first();

function first() {
    var b = 'Hi! ';
    second();

    function second() {
        var c = 'Hey! ';
        console.log(a + b + c);
    }
}




// Example to show the difference between execution stack and scope chain


// var a = 'Hello!';
// first();
//
// function first() {
//     var b = 'Hi!';
//     second();
//
//     function second() {
//         var c = 'Hey!';
//         third();
//     }
// }
//
// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }





///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

// this variable is only assigned value when a object is called

var john = {
  name: 'John',
  birthYear: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2020 - this.birthYear);

    function innerFunction() {
      console.log(this); // this is a this rule! Interesting.
    }
    innerFunction();
  }
}

john.calculateAge();


var mike = {
  name: 'Mike',
  birthYear: 1984
}

// method borrowing

mike.calculateAge = john.calculateAge;
mike.calculateAge();
