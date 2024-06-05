//  Create a function component 
// export our components
// import our function components
// Call the function component 

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Conatct from "./components/Conatct"
import "./App.css"
import Cont from "./components/Cont"


function App() {
  return (
    //  JSX fragemnts ;- 
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Conatct />} />
          <Route path="/" element={<About />} />
          <Route path="/cont" element={<Cont />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App





