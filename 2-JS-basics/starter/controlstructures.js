/*---------------------
Boolean Logic
*/

console.log('Good, the file loads right!');

// AND (&&) true is ALL are true
// OR (||) true if ONE is true
// NOT (!) inverts true/false value


var firstName = "John";
var age = 26;

if (age<=12) {
  console.log(firstName + " is a boy.");
} else if (age<=18 && age>=13){
  console.log(firstName + " is a teenager.");
} else if (age>=18 && age<=30){
  console.log(firstName + " is an young adult.");
} else {
  console.log(firstName + " is an adult.");
}

switch (true) {
  case age<=12:
    console.log(firstName + ' is a boy!');
    break;
  case age<=18 && age >=13:
    console.log(firstName + ' is a teenager!');
    break;
  case age>=18 && age<=30:
    console.log(firstName + ' is an young adult!');
    break;
  case age>30:
      console.log(firstName + ' is an adult!');
      break;
  default:
    console.log(firstName + ' is something else!!');
}

/*------------------
Ternary Operator and Switch Statements
*/

var firstName = 'John';
var age = 17;
age >= 18 ? drinksWhat(`beer`)
: drinksWhat(`juice`);

function drinksWhat(d){
  console.log(`${firstName} drinks ${d}`);
}

// another way to achieve the same end, using TERNARY operators

var drink = age >=18 ? 'beer':'juice';
console.log(firstName + ' drinks ' + drink);


/* SWITCH Statements*/

var job = 'cop';
switch (job) {
  case 'teacher':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives kids to school.');
    break;
  case 'designer':
    console.log(firstName + ' designs websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}
