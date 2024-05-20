// Strnig:-  String are used to store character values 

let str = "                      Heloo my name is Jignesh. Jignesh is little little poor in study.                           "

// String is works on index number 
// white space is also countable in string 

console.log(str.length)


//  ,methods 
// CharAt()
// replace
// replaceAll
// toUpperCase
// toLowerCase
// trim
// trimEnd
// trimStart
// Conacat
//  sort 
//  reverse


console.log(str.charAt(3))

let rep = str.replaceAll("Jignesh", "Nishant")
console.log(rep)


let str1 = str.trim()

console.log(str1.length)


//  Function :- it is a block of code which is run when our function is calll ..
//  function is reussable 

//  create a function 
function App() {
    console.log("function is running...")
}

// call the function 

App()
App()
App()

//  Parameters :- which variable is declared into the function create parenthesis

// Arguments :-  which value is declared into the function call parenthesis

// function Nishu(a, b = 10) {
//     // a = 10 
//     c = a + b
//     console.log(c)
// }

// Nishu(2)

// Nishu(2,3)
// Nishu(21,3)
// Nishu(2,32)
// Nishu(23,33)


//  Return value function 

function Nishu1(a, b = 10) {
    // a = 10 
    c = a + b
    return c 
}

let data = Nishu1(2)
// console.log(data)

let sum =  60 + data 
console.log(sum)
