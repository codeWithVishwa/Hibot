import Navbar from "./components/Navbar"
import "./index.css"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Events from "./pages/Events"


const App=()=>{
  return(
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Events/>
    <Contact/>
    
    </>
    
  
  )
}

export default App