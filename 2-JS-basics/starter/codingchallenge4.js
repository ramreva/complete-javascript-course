/*----------- Coding Challenge 4 --------*/

/*
Let's remember the first coding challenge where Mark
and John compared their BMIs. Let's now implement the same functionality
with objects and methods.

1. For each of them, create an object with properties for their
full name, mass, and height.
2. Then, add a method to each object to calculate the BMI.
Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI,
together with the full name and the respective BMI.
Don't forget they might have the same BMI.

Note: BMI = mass / height^2 (mass in kg and height in meter)
*/

var mark = new Object();
var john = new Object();

function calcBMI(mass, height) {
  return (mass/(height^2));
}

mark.fullName = "Mark";
mark.mass = 72; // kilograms
mark.height = 1.78; // meters
mark.bmi = calcBMI(mark.mass, mark.height);

john.fullName = "John";
john.mass = 74; // kilograms
john.height = 1.76; // meters
john.bmi = calcBMI(john.mass, john.height);

if (mark.bmi > john.bmi) {
  console.log(" - Mark\'s BMI is higher. \n -- His BMI is: " + mark.bmi);
} else {
  console.log(" - John\'s BMI is higher. \n -- His BMI is: " + john.bmi);
}
