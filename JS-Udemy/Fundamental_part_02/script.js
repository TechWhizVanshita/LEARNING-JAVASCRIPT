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

//Function calling other functions

const cutPieces = function(fruit){
    return fruit * 4;
}

const fruitProcessor = function(apples,oranges){

    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

    return juice;
}


console.log(fruitProcessor(2,3))


//Reviewing functions

const calcAge3 = function(birthYear){
    return 2047-birthYear;
}

const yearUntilRetirement1 = function(birthYear,firstName){
    const age2 = calcAge3(birthYear);
    const retirement = 65-age2;

    if(retirement>0){
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    }

    else{
       console.log(`${firstName} has already retired.`);
    }
}

console.log(yearUntilRetirement1(2005,'Vanshita'));

//Array methods


//Add elements
const persons = ['Sita','Ram','Kokila','Dashrath','Parth'];
const newPerson = persons.push('Siya');

console.log(persons);
console.log(newPerson); //Returns length of new array

persons.unshift('Vansh');//adds at the starting of the array
console.log(persons);

//Remove elements

persons.pop(); //Removes last element from the array

const popped = persons.pop();
console.log(popped);
console.log(persons);

persons.shift(); //Removes first element from the array
console.log(persons);

//indexOf() -> returns the index number of the array

console.log(persons.indexOf('Kokila')); //return index number 2

//includes() -> returns boolean value = true/false

console.log(persons.includes('Ram'));
console.log(persons.includes('Dashrath'));
console.log(persons.includes('Damini'));

//objects(key-value pairs)






