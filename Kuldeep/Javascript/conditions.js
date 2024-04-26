// conditions:- it is a statement which is run when our condition is true



//  Syntax of Condition 
// if(condition){

// }
// else if(condition){

// }
//  default statement
// else{

// }


// let x = 10

// if (x == 10) {
//     console.log("constion is true")
// } else {
//     alert("Something Wrong")
// }


// let y = 20

// if (y == 11) {
//     console.log("y is equal to 11")
// }
// else if (y < 10) {
//     console.log("y is greater than 10")
// }
// else if (y == 20) {
//     console.log("y is smaller than 10")
// }
// else {
//     alert("Something Wrong")
// }


// // Switch Statement :- 

// let st = 6

// switch (st) {
//     case 1:
//         console.log("Case 1")
//         break;
//     case 2:
//         console.log("Case 2")
//         break;
//     case 3:
//         console.log("Case 3")
//         break;
//     case 4:
//         console.log("Case 4")
//         break;
//     default:
//         console.log("default")
// }


//  Loops :- it is a statement which is run when our condition as well as true .
//  while loop 
//  do-while 
//  for loop 

// 1. initialise 
// 2 . Condtion 
// 3. increment / decremeent


// let x = 1

// while (x >= 20) {
//     console.log(x)
//     x++
// }


//  One time run as well as your condtion is false 
// do {
//     console.log(x)
//     x++
// } while (x > 10)



//  for loop:- 
// for (let y = 0; y < 20; y++) {
//     console.log(y)
// }


//  Array :-  Array is used to store multiple values

// array works on index number  0,1,2,3

let arr = ["Kuldeep", "ravi", "dev", "somendar", "shiv"]

console.log(arr)

//  Access the values 

let acc = arr[0]
console.log(acc)

// length 
console.log(arr.length)

//  methods 

// pop()  = which is used to remove last value of our array 
//  push() =  which is used to add last value of our array 
//  shift() = which is used to remove first value of our array 
// unshift() = which is used to add last first of our array 

arr.pop()
console.log(arr)
arr.push("PAwan")
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift("hii")
console.log(arr)


// splice()  = which is used to 
//  value add , remove 
// 3. arguments ==== 1. index number , 2.remove item 3. add values
// slice() = cut an existing array into new array 

arr.splice(2, 2, 1, 3, 4, 6)
console.log(arr)

//  concat()  = which is used to add multiples array 

let arr1 = [1, 2, 3, 4, 6, 87, 9, 0, 98]
let arr2 = ["a", "b", "e", "t"]

let arr3 = arr1.concat(arr2, arr)
console.log(arr3)

// delete 

delete arr1[3]

console.log(arr1)

//  reverse() = reverse our array
//  sort()  = arrange alphabetically orders



//  String :- String works on index number 
//  String also count white spaces 

// replace() => 2 parameters = first Exist in your sting  , second = replace by second value 
// //  replaceAll()
// // toUpperCase()
// // toLowerCase()
// // concat() 
// // slice() 
// // trim()
// // trimStart()
// // trimEnd()
// // charAt()


let c = "               my name is ravi.my              name is Ravi.my name is ravi                         "


 let newstr = c.replaceAll("ravi", "kuldeep")

console.log(newstr)

let up = c.toUpperCase()
console.log(up)

console.log(c.length)
let st = c.trim()

console.log(st.length)
