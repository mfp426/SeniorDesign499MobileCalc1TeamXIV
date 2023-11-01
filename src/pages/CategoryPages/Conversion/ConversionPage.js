import FormulaList from "../../../components/FormulaList";


function Conversion(props) {

    const navigationButtons = [
        { route: "/Conversions/SpeedAndVelocity", title: "Speed and Velocity" },
    ];

    return(
        <FormulaList categoryName={"Conversion"} buttons={navigationButtons} />
    )
}

export default Conversion;
