/*----- Functions -----*/

console.log('Functions javascript file is loading this line as a tester');

function calculateAge(birthYear){
  return 2020 - birthYear;
}

function calculateAverage(x, y, z){
  return (x+y+z)/3;
}

// calling the above function

var ageJohn = calculateAge(1990);
console.log(ageJohn);


var johnTeamAverage = calculateAverage(89,120,103);
var mikeTeamAverage = calculateAverage(116,94,123);
var maryTeamAverage = calculateAverage(96,133,104);

console.log(johnTeamAverage);
console.log(mikeTeamAverage);
console.log(maryTeamAverage);

// functions dont always have to return something

// Exercise to calcuate the retirement age

function yearsUntilRetirement(year, firstName){
  var age = calculateAge(year);
  var retirement = 60 - age;

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.');
  }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1960, 'Mike');
yearsUntilRetirement(1969, 'Jane');

// Function expressions and function declarations
// Function expression
//function whatDoYouDo(){}
// function declaration
// // TODO:

// a function statement doesnt have to return a result, or produce immediate value
// a function expression needs to return a result (produce immediate value)

var whatDoYouDo = function(job, firstName){
  switch(job){
    case 'teacher':
      return firstName + ' teaches kids how to code.' // a return finishes the function at the occurence point
    case 'driver':
      return firstName + ' drives kids to school.'
    case 'designer':
      return firstName + ' designs the school website.'
    default:
      return firstName + ' does something else.'
  }
}

console.log(whatDoYouDo('teacher', 'John'));
