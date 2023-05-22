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

