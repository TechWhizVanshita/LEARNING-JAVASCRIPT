 let num = [2 ,3 ,5 ,7 ,6 ,9]


/*for (let i = 0; i<num.length ; i++)
  {
    console.log(num[i])
  }
*/

 //forEach loop

// calls a function , once for each array element
 num.forEach ((element) => {
    console.log(element*element);
 })

 //Array.from 

 // to convert object/string into an array
 let name1 = "Vanshita"

 let arr = Array.from(name1)
 console.log(arr)

 //for_ _ _of loop

 let num1 = [2 ,9 ,6 ,7 ,5 ,4 ,10]
 for(let item of num1){
    console.log(item)

/*expected output:
    21
    93
    65
    7
    55
    43
    10 */
 }

 //for_ _ _ in loop

 let num2 = [21 ,93 ,65 ,7 ,55 ,43 ,10]
 for(let i in num2){
    console.log(i);
    console.log(num2[i]);

    /*expected output: 
    0
     21
    1
     93
    2
     65
    3
     7
    4
     55
    5
     43
    6 
     10*/
 }










