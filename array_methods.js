//Array methods

//toString()
let num = [1, 2, 3, 4, 5];
let a = num.toString() //It changes num from an array to string.

console.log(a)
console.log(typeof a)

//join()
let c = num.join("_") //join all the array elements using a seperator
console.log(c)

//pop()
let d = num.pop() //removes last element from the array and return only popped value
console.log(d) 
console.log(num)//expected output: [1,2,3,4]

//push()
let e = num.push(5) //add the element at the end of array and returns new array lengtn
console.log(num)//expected output : 5 because now array is [1,2,3,4,5]

//shift()
let f = num.shift()
console.log(f)//removes first element and returns it
console.log(num)//expected output: [2,3,4,5]

//unshift()
let g = num.unshift(1)
console.log(g)//add element in the starting and returns new array length
console.log(num) //expected output: [1,2,3,4,5]

//delete()
let friend = ["Sakshi","Sunaina","Shreya","Shivani","Shivam"]

delete friend[1]//delete is an operator, returns value in true/false
console.log(friend) //expected output: ['Sakshi',empty,'Shreya','Shivani','Shivam']

//concat()

let num1 = [1,2,3,4,5,6,7,8,9,10]
let num2 = [11,12,13,14,15,16,17,18,19,20]

console.log(num1.concat(num2));

//sort()
//to print numbers in ascending order we use compare function in sort

let compare = (a,b) => {
    return a - b;
}
let num3 = [3,6,9,12,15,21,27]
console.log(num3.sort(compare)) //expected output: [12, 15, 21, 27, 3, 6, 9]

//after applying compare function expected output:
// [3,6,9,12,15,21,27]

//reverse()
console.log(num3.reverse()) //expected output : [27, 21, 15, 12, 9, 6, 3]

//splice and slice()

//splice used to insert new items in a array
//splice returs deleted items from an array
let num4 = [34,36,37,32,31,35,40]
num4.splice (1,2,21,20) // It means num4.splice (index number, how many numbers from there? , value of numbers after removing previous one)

console.log(num4)
// Expected output :  [34, 21, 20, 32, 31, 35, 40]

//slice()

let num5 = [2,4,6,8,10,12,14,16]
//starting from index number 3 upto end of the array.
num5.slice(3)  //expected output:  [8, 10, 12, 14, 16]

//It leaves the last index number value and starts from the index number 5.
num5.slice(5,8);  //expected output : [12, 14, 16]










