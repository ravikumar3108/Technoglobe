import React from "react";
import Props from "./Props";
import LoginUser from "./Form/loginUser";

function Home(){

    let x = "jignesh"

    let age = 23

    let name2 = "bhavesh"

    return(
        <>
        <h1>Home</h1>
        <Props name1 = {x} age ={age} name2 = {name2}/>\
        <LoginUser/>
        </>
    )
}

export default Home