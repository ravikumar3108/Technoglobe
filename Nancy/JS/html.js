// // // Operators :- 
// // // 1. arithmetic opertaors 
// // // + , - , * , / , 
// // // % = modulus = result(remainder)
// // // ** = expontentaion == power
// // // ++ increment  = +1 
// // // -- decrement = -1 

// // // let num1  = 32
// // // let num2 = 23
// // // console.log(num1%num2)

// // // console.log(num1**2)

// // // // prefix 
// // // // ++x 

// // // let x = 20
// // // let inc = ++x 
// // // console.log("pre",inc)
// // // console.log("inc",x)
// // // document.write(x,"<br>")
// // // document.write(inc)


// // // //  postfix 
// // // // x++ 

// // // let x1 = 20
// // // let inc1 = x1++
// // // console.log("post",inc1)
// // // console.log("inc1",x1)








// // // 2. Assignment operators 
// // //  = 
// // //  += 
// // //  -= 
// // //  *= 
// // //  /=
// // //  %= 
// // //  **=


// // let x = 10
// // let y = 20
// // // let z = x+y
// // x += y
// // console.log(x)









// // // 3. comparision operators 
// // // ==  check value 
// // // === check value and type 
// // // !=  vice-versa value
// // // !== vice-versa value and type 
// // // >  gretaer than 
// // // < less than 
// // // >= greater equal 
// // // <= less equal 

// // // let num1 = 19
// // // let num2 = 30
// // // let num3 = 30
// // // let num4 = "30"

// // // console.log(num1 == num2)  // false 
// // // console.log(num3 == num2) // true 
// // // console.log(num4 == num2)  // true 
// // // console.log(num4 === num2)  // false 

// // // console.log()









// // // 4. logical operators 
// // // ! ==> not 
// // // && ==> and 
// // // || ==> or 


// // // and  
// // // true && true = true
// // // true && false = false
// // // false && true = false
// // // false && false = false

// // // or  
// // // true && true = true
// // // true && false = true
// // // false && true = true
// // // false && false = false

// // let num1 = 19
// // let num2 = 30
// // let num3 = 30
// // let num4 = "30"

// // let and = (num1 == num2) && (num1 === num2)
// // console.log("and",and)

// // let and1 = (num4 == num3) && (num3 == num2)
// // console.log("and1",and1)

// // let and2 = (num4 == num3) || (num3 == num2)
// // console.log("and2",and2)

// // let and4 = !(num4 == num2) || (num1 === num2)  && 
// // console.log("and4",and4)


// // Statements :- if ifelse else 

// // Single condition 
// // if(condition){
// //    code     // 
// // }

// // Default conditoins
// // else{

// // }

// // multiple sconditions
// // else if(){

// // }

// let x = 50

// // if(x == 20){
// //     console.log("x is equal to 20")
// // }
// // else{
// //     console.log("x is not equal to 20")
// // }



// // if (x == 20) {
// //     console.log("x is equal to 20")
// // }


// // else if (x == 10) {
// //     console.log("x is equal to 10")
// // }

// // else if (x == 30) {
// //     console.log("x is equal to 30")
// // }

// // else {
// //     console.log("x is not equal to 20")
// // }


// // Loops :- It is a statement which is run as well as condition is true 

// //  While loop 
// //  do-while loop
// //  for loop 

// // 1. initialise variables 
// // 2 . conditions
// // 3. increment / decrement

// // while(condition){
// //     // code 
// // }



// // do{
// //     // code 
// // }while(condition)

// // for(conditions)
// // {
// // code 
// // }


// // let loop = 0

// // while (loop < 20) {
// //     ++loop
// //     console.log(loop)
// // }

// // do {
// //     loop++
// //     console.log(loop)
// // } while (loop > 20)


// // for(let loop1 = 1; loop1 >20 ; loop++){

// // }


// // 

// // let x =2
// // switch(x){
// //     case 1:
// //         console.log("ghfdsf")
// //         break;

// // }



// //  Functions :-  It is a block of code which is run when our function is call

// // Syntax 

// function Fun1() {
//     //  code 
//     console.log("Function is run")
// }

// //  Call the function 
// Fun1()


// //  Parameters :- which is declare into the function name parenthesis 

// // and Arguments :- which is declare into the function call parenthesis


// function Para() {
//     let a = 10
//     let b = 30
//     console.log(a + b)
// }

// Para()

// function Para(a, b, c = 20) {
//     console.log(a + b)
//     console.log(a + 30)
// }

// Para(20, 40)

// //  default parameters 


// function Para(a, b, c = 20) {
//     let x = a + b + c
//     return x
// }

// let pp = Para(20, 40, 40)

// let ee = pp + 300
// console.log(ee)   



//  Dom :- (Document object model)
// with the help of we can access , change , append , style remove 

//  Access the elemnts
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()

document.getElementById("head").innerHTML = "This is heading"
document.getElementsByClassName("para")[1].innerHTML = "This is Para2"
document.getElementsByClassName("para")[1].style.color = "red"
document.getElementsByClassName("para")[1].style.color = "red"
document.getElementsByClassName("para")[1].style.color = "red"
document.getElementsByClassName("para")[1].style.color = "red"
let div = document.getElementById("div")
let h1 = document.createElement("h1")
let p = document.createElement("p")
div.appendChild(h1)
div.appendChild(p)
document.getElementsByTagName("h1")[1].innerHTML = "heading"
div.removeChild(p)










