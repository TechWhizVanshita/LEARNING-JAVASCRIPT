//Q - 01

console.log("har\"".length)

//Q - 02

//The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true

// The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 0));
// Expected output: true

// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

const str11 = 'Cats are the best!';

console.log(str11.endsWith('best!'));
// Expected output: true

console.log(str11.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false

//Q -03

let question = "What is your name?"
console.log(question.toLowerCase());

//Q -03
let example = "Please give Rs 1000";
let extract = Number.parseInt(example.slice(15))
console.log(extract)
console.log(typeof extract)

//Q -05
let friend = "Pallavi"
friend[3] = "u" // It does not affect the above string because "strings are immutable" but also it does not show any error
console.log(friend)



