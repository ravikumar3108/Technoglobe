import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./Components/Register/Register"
import Login from "./Components/Register/loginax"




function App(){
  return(
    <>
    <BrowserRouter>

    <Register/>
    <Login/>
 
    </BrowserRouter>
    </>
  )
}

export default App