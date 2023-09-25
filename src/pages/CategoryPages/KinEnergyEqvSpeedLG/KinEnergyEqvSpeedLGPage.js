import FormulaList from "../../../components/FormulaList";

function KinEnergyEqvSpeedLG(props) {

    const navigationButtons = [
        { route: "/SpeedSlidingToStopPage", title: "Speed Sliding to Stop" },
        { route: "/VelocitySlidingToStopPage", title: "Velocity Sliding to Stop" },
        // Add more buttons as needed
    ];
    
    return (
        <FormulaList categoryName={"Kinetic Energy Equivalent"} buttons = {navigationButtons} />
    )
}

export default KinEnergyEqvSpeedLG;