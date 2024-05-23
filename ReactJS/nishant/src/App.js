//  Create a function component 
// export our components
// import our function components
// Call the function component 

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Conatct from "./components/Conatct"


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
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App





