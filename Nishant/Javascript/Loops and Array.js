// Loops :- it is a statement which is run as well as our condition is true 

// For looop
//  while loop
// do-while loop

// intailaise 
// condition 
// incremsnt / decremement == exit 

let x = 0

// while(x < 20){
//     console.log(x)
//     x++
// }


do {
    console.log(x)
    x++
} while (x > 20)


//  for loop 
for (let z = 1; z < 10; z++) {
    console.log(z)
}


//  Array :- 

let arr = ["nishant", "bhavesh", "jignesh", 2, 4, 57]
console.log(arr)


// Acess value 
//  Array works on index number  0,1,2,3,........
console.log(arr[2])

// Array length 
console.log(arr.length)

// Methods 
// pop = remove last value of our array 
// push = add last value of our array 
//  shift =  remove first value of our array 
//  unshift =  add first value of our array 
// slice = return a new array into the existing array 
// splice = 3 Argumnets 
// 1. index number
//  remove items 
//  add values  

// Conacat 


let c = arr.pop()
arr.push("heloo")
console.log(arr)


let sl = arr.slice(0, 3)
console.log(sl)

let slp = arr.splice(2, 4,"chameli","chintu","rupa")
console.log(arr)

let arr2 = [1,2,4,5,7,8,0,]
let arr3 = arr.concat(arr2)
console.log(arr3)

// sort 
//  reverse 
