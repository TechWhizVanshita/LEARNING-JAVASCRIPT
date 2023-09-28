//Q -01

// let arr = [1,2,3,4,5,6,7,8]

// let num = prompt("Enter a number ")
// num = Number.parseInt(num)

// arr.push(num)
// console.log(arr)

//Q -02

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let num;
do {
    num = prompt("Enter a number ")
    num = Number.parseInt(num)

    arr.push(num)
} while (num != 0);
console.log(arr)

// Q -03

let arr1 =[20,45,34,10,30,70,100,40]
let m = arr1.filter((x) =>{
    return x % 10 == 0
})
console.log(m);

//Q -04

let arr2 = [2,3,4,5,6,7,8,9,10]
let arr3 =[];
for (let i = 0; i<arr2.length ; i++){
     arr3.push(arr2[i] * arr2[i]);
}
console.log(arr3);

//Q -05

 let arr4 = [1,2,3,4,5,6,7,8]
 let n = arr4.reduce((x,y)=>{
   return x * y;
 })
 console.log(n);
 


