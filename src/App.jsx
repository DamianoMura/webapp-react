import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css'
import { BrowserRouter, Router, Route, Routes } from "react-router-dom"
import DefaultLayout from "./components/layout_components/DefaultLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Movies from './pages/Movies';
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/movies" element={<Movies/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
          
        

