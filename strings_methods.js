let name = "Vanshita"

//Some string methods 

console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(3,7))
 // It will not include the value of 7th index number
 // Expected output - shit


console.log(name.slice(3)) 
// It will include string from 3 to end.
// Expected output - shita

console.log(name.replace("nshita","ani"))
// It will replace name from vanshita to vaani

// Concatenate the string
let friend = "Drishti"

console.log(name.concat(" is a friend of ",friend))

let name1 = "     Pushpa      "
console.log(name1)
console.log(name1.trim()) // It will trim the white spaces from the name1 variable.

let friends = "Raman" + "Shivika" + "Harry"
//It ignores the '+' sign from the indexing.

console.log(friends[9])
console.log(friends[5])
console.log(friends[7])
console.log(friends[3])
console.log(friends[4])
console.log(friends[6])

console.log(friends)
//Expected output - RamanShivikaHarry

//Quick quiz
//Use a for loop to print a string

let brother="Vivek"

for(let i = 0; i<brother.length ; i++)
{
    console.log(brother[i])
}
