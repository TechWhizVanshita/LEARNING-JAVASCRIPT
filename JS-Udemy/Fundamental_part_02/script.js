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

const virat = {
    firstName: 'Virat',
    lastName: 'Kohli',
    age: 2047-1992,
    job: 'Cricketer',
    friends: ['Anushka','Shikhar','Soumya']
};

console.log(virat);

//Accessing key-value pairs with (.) -> dot notation
console.log(virat.lastName);

//Accessing key-value pairs with [] -> bracket notation
console.log(virat['lastName']);

const nameKey = 'Name';
console.log(virat['first' + nameKey]);
console.log(virat['last' + nameKey]);


//Asking user to chose key-value pair

const interestedIn = prompt('What do you want to know about Virat? Chose between firstName, lastName, age, job and friends?');
console.log(virat[interestedIn]);

//To add key-value pair

virat.location = 'Mumbai';
virat.wife = 'Anushka';

console.log(virat);

//Print 'Virat has 3 friends, and his best friend is called 'Anuskha'

console.log(`${virat.firstName} has ${virat.friends.length} friends, and his best friend is called '${virat.friends[0]}'`);


//Object methods

const uncle ={
    firstName: 'Uncle',
    lastName: 'John',
    birthYear: 1957,
    calcAge: function(){
        return 2023-this.birthYear;
    },
};

console.log(uncle.calcAge());
console.log(uncle['calcAge'](this.birthYear));


//loops

const rohit = [
    'Rohit',
    'Sharma',
    2047-1991,
    'Bowler',
    ['Hardik','Ishan','Rahul']
];

for(let i = 0; i<=(rohit.length-1); i++){
    console.log(rohit[i]);
}