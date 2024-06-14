import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./Components/Register/Register"
import Login from "./Components/Register/loginax"
import Home from "./Components/Register/Home"
import AdminForm from "./Components/Register/AdminForm"
import Navbar from "./Components/Utility/Navbar"
import Products from "./Components/Register/Products"

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/admin" element={<AdminForm/>}/>
          <Route path="/product" element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App   