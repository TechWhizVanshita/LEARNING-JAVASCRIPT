const marks = {
    harry : 98,
    rohan : 70,
    aakash : 7
}

//Q-01
for(let i = 0; i<Object.keys(marks).length ; i++){
    console.log("The marks of "+ Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

//Q-02
for(let a in marks){
    console.log("Marks of " + a + " are " + marks[a]+".")
}

//Q-03
let n = prompt("Enter a number ")
for(let i = 1; i<=n ; i++){
    console.log("Try again!")
}

//Q-04
function meanOfFiveNum(a,b,c,d,e){
    return ((a+b+c+d+e)/5);
}

console.log("Mean of five number is ",meanOfFiveNum(2,4,6,8,10));

 