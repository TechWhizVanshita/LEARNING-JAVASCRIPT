const marks = [90 , 76 , "Vanshita" , 57 , 89 , 67]

console.log(marks)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[6])// It will be undefined because value on 6 index number is not present in the marks array.

//we can change and add values in array.
//It means "arrays are mutable and it can be changed" and "strings are immutable, it can't be changed."

console.log(typeof marks)//Arrays are objects

//Quick Quiz
//Print an array using for loop

let friend = ["Tanu","Nandini","Janvi","Chandni","Mahima"]
console.log(friend)
for(let i = 0; i<friend.length ; i++){
    console.log(friend[i]);
}

