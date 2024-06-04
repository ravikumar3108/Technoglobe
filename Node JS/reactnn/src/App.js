import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./Components/Register/Register"
import Login from "./Components/Register/loginax"
import Home from "./Components/Register/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App   