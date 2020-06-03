console.log('----------------------------');
console.log('-----Default Parameters-----');
console.log('----------------------------');

function Person(name,nationality,yob){

    name === undefined ? name = 'Dave' : name;
    nationality === undefined ? nationality = 'China' : nationality;
    yob === undefined ? yob = 1987 : yob;

    this.name = name;
    this.nationality = nationality;
    this.yob = yob;
}

var john = new Person('John', 'Israel' );
var emily = new Person('Emily', 'Spain', 1990);

// ES6
// Specifying default values right at the declaration
function Civilian(fn, ln, yob, nat='Indian') {
    this.fn = fn;
    this.ln = ln;
    this.yob = yob;
    this.nat = nat;
}

let jane = new Civilian('Jane', 'Dough', 1990);
console.log(jane);