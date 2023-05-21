//Prompt takes input from the user and stores a value in form of string.
let age = prompt("What is your age?")

//parseInt changes the value from string to number.
age = Number.parseInt(age);

if(age<18){
    alert("You can't drive because you are below 18.");
}

else{
    alert("You can drive now because you are above 18.");
}

//By ternary operators
console.log("You can",(age<18 ? "not drive" : "drive"))

