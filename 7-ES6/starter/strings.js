console.log('-----Lecture: Strings-----');

let firstName = 'John';
let lastName = 'Smith';
const yearofBirth = 1990;
function calAge(year){
    return 2020 - year;
}



// ES5

console.log('This is '+ firstName + ' ' + lastName + '. He was born in '+ yearofBirth + '. He is ' + calAge(yearofBirth) + ' years old');

// ES6
// TEMPLATE LITERALS

console.log(`This is ${firstName} ${lastName}. 
He was born in ${yearofBirth}. 
He is ${calAge(yearofBirth)} years old.`);

// STRING METHODS

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.startsWith('j'));
console.log(n.startsWith('N'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));

