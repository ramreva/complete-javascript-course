/* ----- Lecture: Classes ----- */

// ES5

var Person5 = function(name, yob, job) {
    this.name = name;
    this.yob = yob;
    this.job = job;
}

Person5.prototype.calcAge =
    function() {
        var age = new Date().getFullYear() - this.yob;
        console.log(age);
    }

var john5 = new Person5('John', 1987, 'Coder');

// ES6

class Person6 {
    constructor (name, yob, job) {
        this.name = name;
        this.yob = yob;
        this.job = job;
    }

    calculateAge () {
        var age = new Date().getFullYear() - this.yob;
        console.log(age);
    }

    static greeting() {
        console.log('Hey, there!');
    }
}

const john6 = new Person6('John',
    1990,
    'teacher');

john6.calculateAge(); // 30
Person6.greeting(); // Hey, there!

// Note - Class definitions are not hoisted.
// Note - We can only add methods to Classes.
// Note - We cannot add properties to Classes.

/* ----- Classes with Subclasses ----- */

// ES5

/*

var Athlete5 = function(name, yob, job, olympicGames, medals) {
    Person5.call(this, name, yob, job)
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);
var johnAthlete5 = new Athlete5('John', 1990, 'Swimmer', 3, 10);

johnAthlete5.calcAge(); // 30

Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

*/

// Doing the above with ES6 Method

/*

class Person6 {
    constructor (name,yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

*/

// Creating Subclasses with extends

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super (name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1998, 'swimmer', 3, 10);

johnAthlete6.wonMedal(); // 10++ = 11
johnAthlete6.calculateAge(); // 22

