import React from "react";
import FormulaList from "../components/FormulaList";

const buttons = [
    { route: "/Conversions", title: "Conversion" },
    { route: "/KinEnergyEqvSpeedLGPage", title: "Kinetic Energy Equivalent Speed Loss/Gain" },
    { route: "/GradeAndSuperElevationPage", title: "Grade and Superelevation" },
    { route: "/EDR", title: "EDR" },
    { route: "/ConstUniAvgEquationPage", title: "Constant, Uniform, or Average Kinematic Equations" },
    { route: "/CenterOfMassEquationPage", title: "Center of Mass Equations" },
]

function CalculatorPage() {
    return (
        <FormulaList categoryName={"Categories"} buttons={buttons} />
    );
}
export default CalculatorPage;
