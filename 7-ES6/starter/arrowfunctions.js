console.log('Arrow Functions');

const years = [1990, 1989, 1982, 1937];

// ES5

var ages5 = years.map(function(el){
    return 2020 - el;
})

console.log(ages5);

// ES6

let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => 
`Age element ${index + 1}: ${2020 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});

console.log(ages6);

// Advanced arrow functions
// Arrow functions do not have a native
// they just use the this of the function they are in
// Lexical 'this' keyword

// ES5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         var self = this;
//         document.querySelector('.green').
//         addEventListener('click', function(){
//             var str = 'This box number ' + 
//             self.position + 
//             '. It is ' + 
//             self.color;
//             alert(str);
//         });
//     }
// }

// box5.clickMe();

// ES6 

var box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').
        addEventListener('click', 
        () => {
            var str = 'This box number ' + 
            this.position + 
            '. It is ' + 
            this.color;
            
            alert(str);
        });
    }
}

box6.clickMe();


function Person(name){
    this.name = name;
}

Person.prototype.myFriends5 = 
    function (friends) {
        var arr = friends.map(function(el){
            return this.name + ' is friends with ' + el;
        }.bind(this));
        console.log(arr);
    }

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6

Person.prototype.myFriends6 = 
    function (friends)
    {
        var arr = friends.map(el => 
        `${this.name} is friends with ${el}.`);
        console.log(arr);
    }

    var friends = ['Bane', 'Jone', 'Mike'];
    new Person('Joe').myFriends6(friends);

// Destructuring

// ES5 

var anthony = ['Anthony', 26];
var name = anthony[0];
var age = anthony[1];

// ES6

const [nom, jahre] = ['Jean', 26]
console.log(nom);
console.log(jahre);

const obj = {
    fn: 'Jimmy',
    ln: 'Falon'
};

const {fn, ln} = obj;
console.log(obj.fn);
console.log(obj.ln);

