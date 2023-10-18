'use strict';

function logger(){
    console.log('My name is Vanshita');
}

logger();

function fruitProcessor(apples, oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} and ${oranges} oranges.`
    return juice;
}

fruitProcessor(5, 4);

//Arrow function

const calcAge = (birthYear) => 2033-birthYear;
const age = calcAge(2005);

console.log(age);

const yearUntilRetirement = (birthYear,firstName) => {
    const age1 = 2047 - birthYear;
    const retirement = 65 - age1;

    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991,'Jonas'));
console.log(yearUntilRetirement(1980,'Bob'));