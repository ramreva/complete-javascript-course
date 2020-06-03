/* ----- Loops and Iterations ----- */
// i is a javascript standard for a counter variable.


console.log("-------------------------------");
console.log("------Loops and Iterations-----");
console.log("-------------------------------");

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 0 < 10 true, log i to console, i++
// ...
// i = 10, 10 < 10 false, exit the loop

var john = ['John', 'Smith', 1990, 'Designer', false];

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// While loops
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}

// CONTINUE and BREAK statements

// TODO

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue; {
    console.log(john[i])
  }
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break; {
    console.log(john[i])
  }
}

// Looping backwards

for (var i = john.length - 1; /*start point*/
    i >= 0; /*condition*/
    i-- ) /*increment*/ 
    {
  console.log(john[i]);
}
