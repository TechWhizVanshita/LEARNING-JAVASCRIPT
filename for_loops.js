 //For loops
 //Program to find first n natural numbers
 let sum = 0;
 let n = prompt("Enter the value of n ");
 n = Number.parseInt(n)
 for(let i = 0; i <= n; i++){
    sum += (i)
 }
 console.log("Sum of first " + n + " natural numbers is " + sum)

 let obj = {
    Kashish : 90,
    Kunal : 49,
    Kritika : 85,
    Rupal : 65
 }

 //For in loop
 for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a] + ".")
 }

 //For of loop
 for (let b of "Vanshita") {
    console.log(b)
 }
