console.log('-------------------');
console.log('Coding Challenge 7');
console.log('-------------------');

/*

class Town {
    constructor(name) {
        this.name = name;
    }
}

class Park {
    constructor(name, buildYear, numTrees, parkArea) {
        this.name = name;
        this.buildYear = buildYear;
        this.numTrees = numTrees;
        this.parkArea = parkArea;
    }

    parkAge() {
        let age = new Date().getFullYear() - this.buildYear;
        return age;
    }

    treeDensity() {
        return (this.numTrees / this.parkArea);
    }
}

class Street {
    constructor(name, buildYear, streetLength,) {
        this.name = name;
        this.buildYear = buildYear;
        this.streetLength = streetLength;
    }
}

// parks

const park1 = new Park(
    'Park 1',
    1990,
    1600,
    20000);
const park2 = new Park(
    'Park 2',
    1987,
    2200,
    240000);
const park3 = new Park(
    'Park 3',
    2010,
    900,
    50000);

// streets

const street1 = new Street(
    'Street 1',
    1990,
    2400);
const street2 = new Street(
    'Street 2',
    1987,
    2500);
const street3 = new Street(
    'Street 3',
    2010,
    2700);
const street4 = new Street(
    'Street 4',
    2015,
    2900);

// Average Age of Parks

let avgParkAges = (park1.parkAge() + park2.parkAge() + park3.parkAge())/3;

console.log(avgParkAges);


// Average Length of Town's Streets

let avgStreetLength = ((street1.streetLength + street2.streetLength
    + street3.streetLength + street4.streetLength) / 4);

console.log(avgStreetLength);

*/

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }
    
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density
of ${density} trees per sq.km`)
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear} is a 
        ${classification.get(this.size)} sized street`)
    }
}

// Creating the objects

const allParks = [
    new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.2, 3541),
    new Park('Oak Park', 1990, 7.2, 949),
    ];

const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1,4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('Evergreen Street', 2010, 4),
    new Street('Sunset Boulevard', 1982, 2.5, 5),
];

// Calculating Sum with Array iteration.

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
}

function reportPark(p) {
    console.log(`----- Parks Report -----`);
    //Density
    console.log(p.forEach(el => el.treeDensity()));
    // Average Age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const[totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge}.`);
    // More than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
 // TODO
}

reportPark(allParks);
reportStreets(allStreets);