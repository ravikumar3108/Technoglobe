// Operators :- 
// 1. arithmetic opertaors 
// + , - , * , / , 
// % = modulus = result(remainder)
// ** = expontentaion == power
// ++ increment  = +1 
// -- decrement = -1 

// let num1  = 32
// let num2 = 23
// console.log(num1%num2)

// console.log(num1**2)

// // prefix 
// // ++x 

// let x = 20
// let inc = ++x 
// console.log("pre",inc)
// console.log("inc",x)
// document.write(x,"<br>")
// document.write(inc)


// //  postfix 
// // x++ 

// let x1 = 20
// let inc1 = x1++
// console.log("post",inc1)
// console.log("inc1",x1)








// 2. Assignment operators 
//  = 
//  += 
//  -= 
//  *= 
//  /=
//  %= 
//  **=


let x = 10
let y = 20
// let z = x+y
x += y
console.log(x)









// 3. comparision operators 
// ==  check value 
// === check value and type 
// !=  vice-versa value
// !== vice-versa value and type 
// >  gretaer than 
// < less than 
// >= greater equal 
// <= less equal 

// let num1 = 19
// let num2 = 30
// let num3 = 30
// let num4 = "30"

// console.log(num1 == num2)  // false 
// console.log(num3 == num2) // true 
// console.log(num4 == num2)  // true 
// console.log(num4 === num2)  // false 

// console.log()









// 4. logical operators 
// ! ==> not 
// && ==> and 
// || ==> or 


// and  
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// or  
// true && true = true
// true && false = true
// false && true = true
// false && false = false

let num1 = 19
let num2 = 30
let num3 = 30
let num4 = "30"

let and = (num1 == num2) && (num1 === num2)
console.log("and",and)

let and1 = (num4 == num3) && (num3 == num2)
console.log("and1",and1)

let and2 = (num4 == num3) || (num3 == num2)
console.log("and2",and2)

let and4 = !(num4 == num2) || (num1 === num2)  && 
console.log("and4",and4)




