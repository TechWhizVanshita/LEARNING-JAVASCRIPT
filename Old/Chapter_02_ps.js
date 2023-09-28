// Q-01
let age = prompt("What is your age?")

age = Number.parseInt(age)

if(age<=10 && age>=20){
    alert("The age of user is lie between 10 and 20")
}

else{
    alert("The age is not matching the given criteria.")
}

//Q-02
const expr = 'Mangoes';
switch (expr) {
    case 'Apples' :
        console.log('Apples are $2.5 a pound.');
        break;
    
    case 'Cucumbers' :
        console.log('Cucumbers are $1.39 a pound.');
        break;
    default :
    console.log(`Sorry, we are out of ${expr}.`);
}

//Q-03
let x = prompt("Enter a number ");

if(x%2==0 && x%3==0){
    alert("The given number is divisible by 2 and 3.");
}

else{
    alert("The number is not divsible by 2 and 3.");
}

//Q-04
let y = prompt("Enter a number ");

if(y%2==0 || y%3==0){
    alert("The given number is divisible by 2 or 3.");
}

else{
    alert("The number is not divsible by 2 or 3.");
}

