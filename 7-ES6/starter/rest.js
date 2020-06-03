/* REST Parameters : Lecture */
console.log('--------------------------');
console.log('REST Parameters : Lecture');
console.log('--------------------------');
// passing arbitrary number of arguments into a function,
// and use those arguments in the function

/**********************

// ES5 Method

function isFullAge5() {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur){
        console.log((2016 - cur) >= 18);
    })
}

isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6 Method

function isFullAge6(...years) {
    return years.forEach(cur => {
        if (cur >= 2016) {
            console.log('This one is still unborn!');
        } else {
            console.log(2016 - cur);
        }
    });
}

isFullAge6(1990, 1999, 1965, 2020, 1987);

*****************/

// ES6 Method

function isFullAge6(limitAge, ...years) {
    return years.forEach(cur => {
        if ((2020-cur) <= limitAge) {
            console.log(cur + ': No drinks for you!');
        } else {
            console.log(cur + ': Drink up!');
        }
    });
}

isFullAge6(21, 1999, 1965, 2020, 1987);