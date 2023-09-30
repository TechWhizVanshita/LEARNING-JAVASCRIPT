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