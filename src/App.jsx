import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import {createContext, useEffect, useState} from 'react';

import './App.css';
import NavBar from './components/Navbar';
import Calculator from "./pages/CalculatorPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ConversionPage from "./pages/CategoryPages/Conversion/ConversionPage";
import KinEnergyEqvSpeedLGPage from "./pages/CategoryPages/KinEnergyEqvSpeedLG/KinEnergyEqvSpeedLGPage";
import SpeedAndVelocityPage from "./pages/CategoryPages/Conversion/FormulaPage/SpeedAndVelocityPage";
import SpeedVelocitySlidingToStop from "./pages/CategoryPages/KinEnergyEqvSpeedLG/FormulaPage/SpeedVelocitySlidingToStopPage";
import GradeAndSuperElevationPage from "./pages/CategoryPages/GradeAndSuperElevation/GradeAndSuperElevationPage";
import PercentGradePage from "./pages/CategoryPages/GradeAndSuperElevation/FormulaPage/PercentGradePage";
import PercentSuperelevationPage from "./pages/CategoryPages/GradeAndSuperElevation/FormulaPage/PercentSuperelevationPage";
import EDRPage from "./pages/CategoryPages/EDR/EDRPage";
import SpeedAtImpactPage from "./pages/CategoryPages/EDR/FormulaPage/SpeedAtImpactPage";
import ConstUniAvgEquationPage from "./pages/CategoryPages/ConstUniAvgEquation/ConstUniAvgEquationPage";
import ConstantDistancePage from "./pages/CategoryPages/ConstUniAvgEquation/FormulaPage/ConstantDistancePage";
import ConstantVelocityPage from "./pages/CategoryPages/ConstUniAvgEquation/FormulaPage/ConstantVelocityPage";
import ConstantTimePage from "./pages/CategoryPages/ConstUniAvgEquation/FormulaPage/ConstantTimePage";
import SlidetoStopDistWithDragPage from "./pages/CategoryPages/ConstUniAvgEquation/FormulaPage/SlidetoStopDistWithDragPage"
import SpeedAtImpactResultsPage from "./pages/CategoryPages/EDR/FormulaPage/SpeedAtImpactResultsPage";
import CenterOfMassEquationPage from "./pages/CategoryPages/CenterOfMassEquation/CenterOfMassEquationPage";
import COMLateralPage from "./pages/CategoryPages/CenterOfMassEquation/FormulaPage/COMLateralPage";
import COMLongitudinalPage from "./pages/CategoryPages/CenterOfMassEquation/FormulaPage/COMLongitudinalPage";
import RadiusCalculationPage from "./pages/CategoryPages/RadiusCalculation/RadiusCalculationPage";
import AcceDeceRatePage from "./pages/CategoryPages/AcceDeceRate/FormulaPage/AcceDeceRatePage.jsx";
import KinEnergyAndWorkPage from "./pages/CategoryPages/KinEnergyAndWork/KinEnergyAndWorkPage.jsx";
import KinEnergyCalPage from "./pages/CategoryPages/KinEnergyAndWork/KinEnergyCalPage.jsx";
import KinEnergyWithMassVelPage from "./pages/CategoryPages/KinEnergyAndWork/FormulaPage/KinEnergyWithMassVelPage.jsx";
import KinEnergyWithWeightSpdOrVelPage from "./pages/CategoryPages/KinEnergyAndWork/FormulaPage/KinEnergyWithWeightSpdOrVelPage.jsx";
import WorkCalPage from "./pages/CategoryPages/KinEnergyAndWork/WorkCalPage.jsx";
import WorkWithForceAndDistPage from "./pages/CategoryPages/KinEnergyAndWork/FormulaPage/WorkWithForceAndDistPage.jsx";
import WorkWithWeightAndDistPage from "./pages/CategoryPages/KinEnergyAndWork/FormulaPage/WorkWithWeightAndDistPage.jsx";
import MphAndFpsDueToKEPage from "./pages/CategoryPages/KinEnergyAndWork/FormulaPage/MphAndFpsDueToKEPage.jsx";

export const carContext = createContext({make: "", model: "", year: "", trim: "", body: "", engine_position: "", engine_cc: "", engine_cyl: "", engine_type: "", engine_valves_per_cyl: "", engine_power_ps: "", engine_power_rpm: "", engine_torque_nm: "", engine_torque_rpm: "" , engine_bore_mm: "", engine_stroke_mm: "", engine_compression: "", engine_fuel: "", top_speed_kph: "", zero_to_100_kph: "", drive: "", transmission_type: "", seats: "", doors: "", weight_kg: "", length_mm: "", width_mm: "", height_mm: "", wheelbase_mm: "", lkm_highway: "", lkm_mixed: "", lkm_city: "", fuel_cap_l: "", sold_in_us: "", cO2: "", make_display: "", longDistFront: "", longDistRear: "", maxVertHeight: "", verticalDistance: "", siderailDist: "", fOverhang: "", rOverhang: "", curbWeight: "", rTrackWidth: "", weightDistribution: "", inserted: ""});


function App() {
    const [car, setCar] = useState({make: "", model: "", year: "", trim: "", body: "", engine_position: "", engine_cc: "", engine_cyl: "", engine_type: "", engine_valves_per_cyl: "", engine_power_ps: "", engine_power_rpm: "", engine_torque_nm: "", engine_torque_rpm: "" , engine_bore_mm: "", engine_stroke_mm: "", engine_compression: "", engine_fuel: "", top_speed_kph: "", zero_to_100_kph: "", drive: "", transmission_type: "", seats: "", doors: "", weight_kg: "", length_mm: "", width_mm: "", height_mm: "", wheelbase_mm: "", lkm_highway: "", lkm_mixed: "", lkm_city: "", fuel_cap_l: "", sold_in_us: "", cO2: "", make_display: "", longDistFront: "", longDistRear: "", maxVertHeight: "", verticalDistance: "", siderailDist: "", fOverhang: "", rOverhang: "", curbWeight: "", rTrackWidth: "", weightDistribution: "", inserted: ""});

    // Log fetched car information to console for debug purposes
    useEffect(() => {
            for (let [key, value] of Object.entries(car)) {
                if (value) {
                    console.log(key + ': ' + value);
                }
            }
            console.log('');
    }, [car]);


    return (
        <div>
            <carContext.Provider value={{car: car, setCar: setCar}}>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Calculator/>} />

                        {/* Main Pages*/}
                        <Route path="/Calculator" element={<Calculator/>} />
                        <Route path="/HomePage" element={<HomePage/>} />
                        <Route path="/SearchPage" element={<SearchPage/>} />

                        {/* Conversion */}
                        <Route path="/Conversions" element={<ConversionPage/>} />
                        <Route path="/Conversions/SpeedAndVelocity" element={<SpeedAndVelocityPage/>} />

                        {/*Kinematic Energy Equivalent */}
                        <Route path="/KinEnergyEqvSpeedLGPage" element={<KinEnergyEqvSpeedLGPage/>} />
                        <Route path="/SpeedVelocitySlidingToStopPage" element={<SpeedVelocitySlidingToStop/>} />

                        {/* Grade and Super elevation */}
                        <Route path="/GradeAndSuperElevationPage" element={<GradeAndSuperElevationPage/>} />
                        <Route path="/PercentGradePage" element={<PercentGradePage/>} />
                        <Route path="/PercentSuperelevationPage" element={<PercentSuperelevationPage/>} />

                        {/* EDR */}
                        <Route path="/EDR" element={<EDRPage/>} />
                        <Route path="/EDR/SpeedAtImpact" element={<SpeedAtImpactPage />} />
                        <Route path="/EDR/SpeedAtImpact/Results" element={<SpeedAtImpactResultsPage />} />

                        {/* Constant Uniform Acceleration Equations */}
                        <Route path="/ConstUniAvgEquationPage" element={<ConstUniAvgEquationPage />} />
                        <Route path="/ConstantVelocityPage" element={<ConstantVelocityPage />} />
                        <Route path="/ConstantTimePage" element={<ConstantTimePage />} />
                        <Route path="/ConstantDistancePage" element={<ConstantDistancePage />} />
                        <Route path="/SlidetoStopDistWithDragPage" element={<SlidetoStopDistWithDragPage />} />

                        {/* Center of Mass Equations */}
                        <Route path="/CenterOfMassEquationPage" element={<CenterOfMassEquationPage />} />
                        <Route path="/COMLateralPage" element={<COMLateralPage />} />
                        <Route path="/COMLongitudinalPage" element={<COMLongitudinalPage />} />

                        {/*Radius Calculation*/}
                        <Route path="/RadiusCalculationPage" element={<RadiusCalculationPage />} />

                        <Route path={"/AcceDeceRatePage"} element={<AcceDeceRatePage />} />

                        {/*Kinetic Energy and Work*/}
                        <Route path={"/KinEnergyAndWorkPage"} element={<KinEnergyAndWorkPage />} />
                        <Route path={"/KinEnergyCalPage"} element={<KinEnergyCalPage />} />
                        <Route path={"/KinEnergyWithMassVelPage"} element={<KinEnergyWithMassVelPage />} />
                        <Route path={"/KinEnergyWithWeightSpdOrVelPage"} element={<KinEnergyWithWeightSpdOrVelPage />} />
                        <Route path={"/WorkCalPage"} element={<WorkCalPage />} />
                        <Route path={"/WorkWithWeightAndDistPage"} element={<WorkWithWeightAndDistPage />} />
                        <Route path={"/WorkWithForceAndDistPage"} element={<WorkWithForceAndDistPage />} />
                        <Route path={"/MphAndFpsDueToKEPage"} element={<MphAndFpsDueToKEPage />} /> 

                    </Routes>
                </Router>
            </carContext.Provider>
        </div>
    );
}

export default App;
