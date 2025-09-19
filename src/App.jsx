import { BrowserRouter, Router, Route, Routes } from "react-router-dom"
import DefaultLayout from "./components/layout_components/DefaultLayout"
import Home from "./pages/Home"
import About from "./pages/About"
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
          
        

