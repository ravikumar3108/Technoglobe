
// Dom :- Document object model with thw help of we can acess , change , delete and append our html elememts 

// Acessss = 

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()


document.getElementById("head").innerHTML = "Hii my name is Nishant" 
document.getElementsByClassName("p")[2].innerHTML = "Hii my name is Nishant 2" 


let div = document.getElementById("div")

let p = document.createElement("p")

div.appendChild(p)
div.removeChild(p)