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
import KinEnergyEqvSpeedLGPage from "./components/CategoryPages/KinEnergyEqvSpeedLG/KinEnergyEqvSpeedLGPage";
import VelocityToSpeedConverter from "./components/CategoryPages/Conversion/FormulaPage/VelocityToSpeedPage";
import SpeedToVelocityPage from "./components/CategoryPages/Conversion/FormulaPage/SpeedToVelocityPage";
import SpeedSlidingToStop from "./components/CategoryPages/KinEnergyEqvSpeedLG/FormulaPage/SpeedSlidingToStopPage";
import Footer from "./components/Footer.js";
import VelocitySlidingToStop from "./components/CategoryPages/KinEnergyEqvSpeedLG/FormulaPage/VelocitySlidingToStopPage";
import GradeAndSuperElevationPage from "./components/CategoryPages/GradeAndSuperElevation/GradeAndSuperElevationPage";





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
