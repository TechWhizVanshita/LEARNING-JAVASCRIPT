// var a = 45;
// var a = "o"; 
// now var's value is o because var defined globally.

let b = "Vanshita";
const fruit="Papaya";
fruit = "Mango"; // Throws an error because constant cannot be changed

b = 9;
let c = null;
let d = undefined;
{
    let b = "Jhansi";
    console.log(b)
}

console.log(b);