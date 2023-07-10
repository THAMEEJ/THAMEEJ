
import Contact from "./components/Contact";
import Home from "./components/Home";
import Services from "./components/Services"
import Navbars from "./components/Navbars";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";




function App() {
  return (
    
    <Router>  
      <Navbars/>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/contact" element={<Contact/> } />
        <Route path="/services" element={ <Services/>  } />
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
