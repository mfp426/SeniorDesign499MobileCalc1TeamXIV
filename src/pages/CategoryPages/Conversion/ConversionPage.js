import FormulaList from "../../../components/FormulaList";


function Conversion(props) {

    const navigationButtons = [
        { route: "/SpeedToVelocityPage", title: "Speed to Velocity" },
        { route: "/VelocityToSpeedPage", title: "Velocity to Speed" },
        // Add more buttons as needed
    ];

    return(
        <FormulaList categoryName={"Conversion"} buttons={navigationButtons} />
    )
}

export default Conversion;
