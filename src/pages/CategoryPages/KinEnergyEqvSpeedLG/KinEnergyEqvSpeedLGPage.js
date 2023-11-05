import FormulaList from "../../../components/FormulaList";

function KinEnergyEqvSpeedLG() {

    const navigationButtons = [
        { route: "/SpeedVelocitySlidingToStopPage", title: "Speed / Velocity Sliding to Stop" },

        // Add more buttons as needed
    ];
    
    return (
        <FormulaList categoryName={"Kinetic Energy Equivalent"} buttons = {navigationButtons} />
    )
}

export default KinEnergyEqvSpeedLG;