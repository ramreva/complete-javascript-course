/*-------------------
Coding challenge 1
*/

/* Mark and John are trying to compare their BMI, which is calculated using the formula:
BMI = mass / height^2
mass in kg and height in meter

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMI's
3. Create a Boolean variable containing information about
whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3.
5. Print format: "Is Mark's BMI higher than John's? true"

*/

var markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI;
var isMarkThicker;

markMass = 65;
markHeight = 1.4;
johnMass = 67;
johnHeight = 1.6;
markBMI = markMass / (markHeight^2);
johnBMI = johnMass / (johnHeight^2);

console.log(markBMI);
console.log(johnBMI);

isMarkThicker = markBMI > johnBMI;

//console.log("Is Mark\'s BMI higher than John\'s? \n" + isMarkThicker);
//alert("Is Mark\'s BMI higher than John\'s? \n" + isMarkThicker);

if (markBMI > johnBMI) {
  console.log("Mark\'s BMI is higher than John\'s");
} else {
  console.log("Mark\'s BMI is lower than John\'s");
}
