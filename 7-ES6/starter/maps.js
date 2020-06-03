console.log('--- Maps ---');

// Map is a new key value data structure in ES6

const question = new Map();
question.set('question', 'What is latest version of javascript?');

question.set(1,'ES5');
question.set(2,'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer!');
question.set(false, 'Nope! Try Again');

document.getElementById('quest').innerText
    = question.get('question');
let c1 = document.querySelector('.choice1').innerText
    = question.get(1);
let c2 = document.querySelector('.choice2').innerText
    = question.get(2);
let c3 = document.querySelector('.choice3').innerText
    = question.get(3);
let c4 = document.querySelector('.choice4').innerText
    = question.get(4);

// This is interesting - super interesting!

// question.delete(4);

// if (question.has(4)){
//     console.log('question.4 map exists');
// } else {
//     console.log('The question.4 map deleted');
// }

// question.clear();

/* Note - Maps are iterable */

question.forEach((v, k) => {
    console.log(`Key is '${k}', 
    and it's Value is set to '${v}'`)
});

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Key is '${key}', 
    and it's Value is set to '${value}'`
        );
    }
}

// Getting the answer input & storing in a const
const ans = parseInt(prompt('Write the correct answer'));

if (ans !== 3) {
    alert(question.get(false));
} else {
    alert(question.get(true));
}

// Maps are better as we can use anything as keys
// Because maps are iterable
// Can be looped through
// Easy to get the size
// Easy to add and remove data from the map 