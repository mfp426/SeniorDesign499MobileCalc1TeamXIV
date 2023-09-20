import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { useState } from 'react';
import NavBar from './components/Navbar.js';
import Calculator from "./components/Calculator";
import HomePage from "./components/HomePage";
import ConversionPage from "./components/CategoryPages/Conversion/ConversionPage";
import SpeedToVelocityPage from "./components/CategoryPages/Conversion/FormulaPage/SpeedToVelocityPage";
import Footer from "./components/Footer.js";







function App() {

    const [toggle, setToggle] = useState(true);

    const toggleState = () => setToggle(!toggle);




  return (
    <div className="mainContainer">

      <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<HomePage toggleState={toggleState}/>} />
        <Route path = "/Calculator" element={<Calculator toggleState={toggleState}/>} />
        <Route path = "/HomePage" element={<HomePage toggleState={toggleState}/>} />
        <Route path = "/ConversionPage" element={<ConversionPage toggleState={toggleState}/>} />


        <Route path = "/SpeedToVelocityPage" element={<SpeedToVelocityPage toggleState={toggleState}/>} />






        </Routes>
        <Footer/>
      </Router>






    </div>
  );
}

export default App;
