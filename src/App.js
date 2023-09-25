import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { useState } from 'react';
import NavBar from './components/Navbar.js';
import Calculator from "./pages/CalculatorPage";
import HomePage from "./pages/HomePage";
import ConversionPage from "./pages/CategoryPages/Conversion/ConversionPage";
import KinEnergyEqvSpeedLGPage from "./pages/CategoryPages/KinEnergyEqvSpeedLG/KinEnergyEqvSpeedLGPage";
import VelocityToSpeedConverter from "./pages/CategoryPages/Conversion/FormulaPage/VelocityToSpeedPage";
import SpeedToVelocityPage from "./pages/CategoryPages/Conversion/FormulaPage/SpeedToVelocityPage";
import SpeedSlidingToStop from "./pages/CategoryPages/KinEnergyEqvSpeedLG/FormulaPage/SpeedSlidingToStopPage";
import Footer from "./components/Footer.js";
import VelocitySlidingToStop from "./pages/CategoryPages/KinEnergyEqvSpeedLG/FormulaPage/VelocitySlidingToStopPage";
import GradeAndSuperElevationPage from "./pages/CategoryPages/GradeAndSuperElevation/GradeAndSuperElevationPage";





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
        <Route path = "/VelocityToSpeedPage" element={<VelocityToSpeedConverter toggleState= {toggleState} />}/>
        <Route path = "/KinEnergyEqvSpeedLGPage" element={<KinEnergyEqvSpeedLGPage toggleState= {toggleState} />}/>
        <Route path = "/SpeedSlidingToStopPage" element = {<SpeedSlidingToStop toggleState={toggleState}/>}/>
        <Route path = "/VelocitySlidingtoStopPage" element = {<VelocitySlidingToStop toggleState = {toggleState}/>}/>
        <Route path = "/SpeedToVelocityPage" element={<SpeedToVelocityPage toggleState={toggleState}/>} />
        <Route path = "/GradeAndSuperElevationPage" element={<GradeAndSuperElevationPage toggleState= {toggleState}/>}/>





        </Routes>
        <Footer/>
      </Router>






    </div>
  );
}

export default App;
