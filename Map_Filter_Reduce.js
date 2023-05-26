//map()
let ar = [89 , 56, 45]

let a = ar.map ((value ,index ,array) =>{
    console.log(value ,index ,array)
    return value + 1
} )

console.log(a)
/*Expected output: 
89 0 [89 ,56 ,45]
56 1 [89 ,56 ,45]
45 2 [89 ,56 ,45] */

//filter ()

let ar2 = [43,23,12,56,21,89,1,4,6,9,7] 
let b = ar2.filter ((b) => {
    return b>10
})

console.log (b)
//expected output : [43, 23, 12, 56, 21, 89]

//reduce ()
let ar3 = [1,2, 4, 5, 3,8]
let c = ar3.reduce ((c1,c2) => {
    return (c1 + c2);
})

console.log(c)

//expected output : 23

/* First it performs 
1 + 2 = 3, 3 + 4 = 7, 7 + 5 = 12, 12 + 3 = 15, 15 + 8 = 23 */