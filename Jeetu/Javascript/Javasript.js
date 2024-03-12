
//  Array :- Array is used to store multiple values 
// Array works on index number 


let arr = [1, 2, 45, 7, 4]

// length 
console.log(arr.length)

// Access the elemnts 
let acc = arr[1]  // [1] stands for index number 
console.log(acc)

// change the arryas values

arr[2] = "Jeetu"
console.log(arr)


//  pop = Remove our last value of our array 
// push = Add on a value in last of our array 

arr.pop()
console.log(arr)

arr.push("Somendar")
console.log(arr)


//  shift 
//  unshift 


//  splice method = 
// 3 arguments 
// 1. index number 
// 2. remove items
// 3. Add values 

let spl = arr.splice(1, 0, 10, 4, 5, 6)
console.log(arr)

// slice method = give a new array 
let sl = arr.slice(2, 6)
console.log(sl)

// delete 

delete arr[3]
console.log(arr)


//  Concat :- Combine multiples array 

let arr2 = ["somendar", "jettu"]
let arr3 = ["dhruv", "priyanshu", "dev"]

let con = arr2.concat(arr3, arr)
console.log(con)


// Sort :-
// Reverse :-

//  sting :- String are used to store Our character values
//  string works on index number 
// string also countable the white spaces 

//  String methods :-

let str = "                                    hii my name is ravi. ravi "
//  Aceesss our string []
// length
//  replace() => 2 parameters = first Exist in your sting  , second = replace by second value 
//  replaceAll()
// toUpperCase()
// toLowerCase()
// concat() 
// slice() 
// trim()
// trimStart()
// trimEnd()
// charAt()


//  Functions :- it is a  block of code which is run when our functiion is call 
// Function are re-usable 

//  create a function 
// function Fun1() {
//     console.log("function is call ")
// }

// //  call the function = by the name 
// Fun1()

// function Fun2() {
//     a = 60
//     b = 50
//     c = a + b
//     console.log(c)
// }

// Fun2()
// Fun2()
// Fun2()
// Fun2()

// // Parameters = it is defined into the Function name parenthesis
// //  Arguments =  ,it is defined into the function calling parenthesis


// function Fin3(a, b) {
//     c = a + b
//     return (c)
// }

// let add = Fin3(20, 40)
// console.log(add)
// let add1 = Fin3(100, 40)
// console.log(add1)
// let add2 = Fin3(200, 40)
// console.log(add2)
// let add3 = Fin3(20, 400)
// console.log(add3)
// let add4 = Fin3(20, 408)
// console.log(add4)


// // default parameters 
// function Def(a, b = 39) {
//     z = a * b
//     return z
// }

// let def = Def(3, 8)
// console.log(def)


// function Def(a) {
//     z = 10 * b
//     return z
// }

// let def1 = Def(3)
// console.log(def1)


// a = 20
// b = 30
// function defa(a,b){
//     x = a+b
//     return x 
// }


// let defa1 = defa(a,b,)
// console.log(defa1)


// function defa(a){
//     x = a+b
//     return x 
// }



// Dom - Document Object Model 

//  With the help of we can access , change, append , remove , createElements 
//  with the help of we can apply style properties 

//  Access the dom elements
// getElementsById()
// getElementsByClassNmae()
// getElementsByTagName()
// querySelector()
// querySelectorAll() 


document.getElementById("div").innerHTML = "This is my div"
document.getElementsByClassName("cl")[0].innerHTML =  "Heloo this is my class"

let p = document.createElement("p")
let div = document.getElementById("div") 

div.appendChild(p)

// removeAttribute 
let cr = p.setAttribute("id","para")

div.style.backgroundColor = "red"
div.style.backgroundColor = "red"
div.style.backgroundColor = "red" 
div.style.backgroundColor = "red"
div.removeChild(p)



