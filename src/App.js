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
import SpeedAndVelocityPage from "./pages/CategoryPages/Conversion/FormulaPage/SpeedAndVelocityPage";
import SpeedSlidingToStop from "./pages/CategoryPages/KinEnergyEqvSpeedLG/FormulaPage/SpeedSlidingToStopPage";
import Footer from "./components/Footer.js";
import VelocitySlidingToStop from "./pages/CategoryPages/KinEnergyEqvSpeedLG/FormulaPage/VelocitySlidingToStopPage";
import GradeAndSuperElevationPage from "./pages/CategoryPages/GradeAndSuperElevation/GradeAndSuperElevationPage";
import PercentGradePage from "./pages/CategoryPages/GradeAndSuperElevation/FormulaPage/PercentGradePage";
import PercentSuperelevationPage from "./pages/CategoryPages/GradeAndSuperElevation/FormulaPage/PercentSuperelevationPage";
import EDRPage from "./pages/CategoryPages/EDR/EDRPage";
import SpeedAtImpactPage from "./pages/CategoryPages/EDR/FormulaPage/SpeedAtImpactPage";
import ConstUniAvgEquationPage from "./pages/CategoryPages/ConstUniAvgEquation/ConstUniAvgEquationPage";
import ConstantDistancePage from "./pages/CategoryPages/ConstUniAvgEquation/FormulaPage/ConstantDistancePage";
import ConstantVelocityPage from "./pages/CategoryPages/ConstUniAvgEquation/FormulaPage/ConstantVelocityPage";
import ConstantTimePage from "./pages/CategoryPages/ConstUniAvgEquation/FormulaPage/ConstantTimePage";
import SlidetoStopDistWithDragPage from "./pages/CategoryPages/ConstUniAvgEquation/FormulaPage/SlidetoStopDistWithDragPage.js"
import SpeedAtImpactResultsPage from "./pages/CategoryPages/EDR/FormulaPage/SpeedAtImpactResultsPage";
import CenterOfMassEquationPage from "./pages/CategoryPages/CenterOfMassEquation/CenterOfMassEquationPage";
import COMLateralLeftPage from "./pages/CategoryPages/CenterOfMassEquation/FormulaPage/COMLateralLeftPage";
import COMLateralRightPage from "./pages/CategoryPages/CenterOfMassEquation/FormulaPage/COMLateralRightPage";
import COMLongitudinalFrontPage from "./pages/CategoryPages/CenterOfMassEquation/FormulaPage/COMLongitudinalFrontPage";
import COMLongitudinalRearPage from "./pages/CategoryPages/CenterOfMassEquation/FormulaPage/COMLongitudinalRearPage";

function App() {

    const [toggle, setToggle] = useState(true);

    const toggleState = () => setToggle(!toggle);




  return (
    <div className="mainContainer">

      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage toggleState={toggleState}/>} />
          {/* Main Pages*/}
          <Route path = "/Calculator" element={<Calculator toggleState={toggleState}/>} />
          <Route path = "/HomePage" element={<HomePage toggleState={toggleState}/>} />
          {/* Conversion */}
          <Route path = "/Conversions" element={<ConversionPage toggleState={toggleState}/>} />
          <Route path = "/Conversions/SpeedAndVelocity" element={<SpeedAndVelocityPage toggleState={toggleState}/>} />
          {/*Kinematic Energy Equivalent */}
          <Route path = "/KinEnergyEqvSpeedLGPage" element={<KinEnergyEqvSpeedLGPage toggleState= {toggleState} />}/>
          <Route path = "/SpeedSlidingToStopPage" element = {<SpeedSlidingToStop toggleState={toggleState}/>}/>
          <Route path = "/VelocitySlidingtoStopPage" element = {<VelocitySlidingToStop toggleState = {toggleState}/>}/>
          {/* Grade and Super elevation */}
          <Route path = "/GradeAndSuperElevationPage" element={<GradeAndSuperElevationPage toggleState= {toggleState}/>}/>
          <Route path = "/PercentGradePage" element={<PercentGradePage toggleState={toggleState}/>}/>
          <Route path = "/PercentSuperelevationPage" element={<PercentSuperelevationPage toggleState={toggleState}/>}/>
          {/* EDR */}
          <Route path = "/EDR" element={<EDRPage toggleState={toggleState}/>}/>
          <Route path = "/EDR/SpeedAtImpact" element={<SpeedAtImpactPage/>}/>
          <Route path ="/EDR/SpeedAtImpact/Results" element={<SpeedAtImpactResultsPage/>} />
          {/* Constant Uniform Acceleration Equations */}
          <Route path = "/ConstUniAvgEquationPage" element={<ConstUniAvgEquationPage/>}/>
          <Route path = "/ConstantVelocityPage" element = {<ConstantVelocityPage/>}/>
          <Route path = "/ConstantTimePage" element = {<ConstantTimePage/>}/>
          <Route path = "/ConstantDistancePage" element={<ConstantDistancePage/>}/>
          <Route path = "/SlidetoStopDistWithDragPage" element ={<SlidetoStopDistWithDragPage/>}/>
          {/* Center of Mass Equations */}
          <Route path = "/CenterOfMassEquationPage" element ={<CenterOfMassEquationPage/>}/>
          <Route path = "/COMLateralLeftPage" element ={<COMLateralLeftPage/>}/>
          <Route path = "/COMLateralRightPage" element ={<COMLateralRightPage/>}/>
          <Route path = "/COMLongitudinalFrontPage" element ={<COMLongitudinalFrontPage/>}/>
          <Route path = "/COMLongitudinalRearPage" element ={<COMLongitudinalRearPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
