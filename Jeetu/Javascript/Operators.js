// 1. Arithmetic Opertaors 
// 2.Assigment Opertaors
// 3. Comparision Operators
// 4. Logical Opertaors 


// 1. Arithmetic Opertaors 

    // +  add 
    // - substract 
    // * multiply
    // / divide 
    // %  modulus = remainder 
    // ** expontation = power 
    //  ++ increment 
    //  -- decremement 



// let num1 = 30
// let num2 = 29

// let add = num1+num2
// console.log(add)


// let y = 13
// let z = 3

// let a = y % z 
// console.log("Moduls = " , a)

// let p = y ** z
// console.log(p)


// let inc = 10 
// // prefix 

// let i = ++inc
// console.log(i)

// //  postfix 
// let pi = inc++
// console.log(pi)
// console.log(inc)


// Assignment Operator 
//   =equal to 
//  += 
//  -= 
//  *=
//  /= 
//  %= 
//  **= 





let num1 = 10

let d = num1 += 10 
console.log("value of d", d)
console.log("value of num1", num1)

// Comparision operator == works on bollean values 

// == equal value 
//  === equal value and type 
// != 
//  !==
//  <  
//  > 
//  <=
//  >= 

// let n1 = 10
// let n2 = 30
// let n3 = "30"
// let n4 = "10"

// // 
// let dp = n1 == n4
// let dp1 = n1 === n4
// console.log(dp)
// console.log(dp1)

// logical operators 
 
//  ||  or 
//  &&  and 
//  !   not 

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



let n1 = 10
let n2 = 30
let n3 = "30"
let n4 = "10"

// 
let dp = (n1 == n4) && (n2 != n3) ||  !(n4 < n2) 
// let dp1 = n1 === n4
console.log(dp)
// console.log(dp1)

//  if , else statment :- it is a statement which is run when our condition is true 

//  synatax of our statement
// if(condition){
    // code 
// }

//  default condition 
// else{
//     // code 
// }

//  multiple condiion 

// else if (condition){
    //  code 
// }



let x = 20

if (x == 10){
    document.write("x is equal to 10")
}

else if(x == 20){
    document.write("x is not equal to 10","<br>")
}

else if(x != 20){
    document.write("x is not equal to 10")
}

else{
    document.write("defalt consition </br>")
}


// Switch Statement :- 

// 
let g = 2

switch (g){
    case 1 :
         console.log("case1 ","")
         break;
    case 2 :
         console.log("case2")
         break;
    case 3 :
         console.log("case3")
         break;
    case 4 :
         console.log("case4")
         break;
   default :
        console.log("default")
}
let x3 = 10
document.write(x3)








