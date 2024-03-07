
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






