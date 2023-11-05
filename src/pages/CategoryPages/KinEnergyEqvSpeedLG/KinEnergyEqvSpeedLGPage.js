import ButtonGrid from "../../../components/ButtonGrid";

function KinEnergyEqvSpeedLG() {

    const navigationButtons = [
        { route: "/SpeedVelocitySlidingToStopPage", title: "Speed / Velocity Sliding to Stop" },

        // Add more buttons as needed
    ];
    
    return (
        <ButtonGrid categoryName={"Kinetic Energy Equivalent"} buttons = {navigationButtons} />
    )
}

export default KinEnergyEqvSpeedLG;