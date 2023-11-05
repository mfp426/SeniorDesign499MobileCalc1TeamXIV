import ButtonGrid from "../../../components/ButtonGrid";


function ConstUniAvgEquation() {

    const navigationButtons = [
        { route: "/ConstantVelocityPage", title: "Constant Velocity" },
        { route: "/ConstantTimePage", title: "Constant Time" },
        { route: "/ConstantDistancePage", title: "Constant Distance"},
        { route: "/SlidetoStopDistWithDragPage", title: "Slide to Stop Distance(known distance and drag factor)"},
        // Add more buttons as needed
    ];

    return(
        <ButtonGrid categoryName={"Constant, Uniform, or Average Kinematic Equations"} buttons={navigationButtons} />
    )
}

export default ConstUniAvgEquation;