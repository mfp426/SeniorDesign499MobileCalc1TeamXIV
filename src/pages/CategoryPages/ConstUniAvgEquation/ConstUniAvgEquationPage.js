import FormulaList from "../../../components/FormulaList";


function ConstUniAvgEquation(props) {

    const navigationButtons = [
        { route: "/ConstantVelocityPage", title: "Constant Velocity" },
        { route: "/ConstantTimePage", title: "Constant Time" },
        { route: "/ConstantDistancePage", title: "Constant Distance"},
        { route: "/SlidetoStopDistWithDragPage", title: "Slide to Stop Distance(known distance and drag factor)"}
        // Add more buttons as needed
    ];

    return(
        <FormulaList categoryName={"ConstUniAvgEquation"} buttons={navigationButtons} />
    )
}

export default ConstUniAvgEquation;