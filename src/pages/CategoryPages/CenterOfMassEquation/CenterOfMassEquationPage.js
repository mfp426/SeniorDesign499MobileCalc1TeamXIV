import FormulaList from "../../../components/FormulaList";


function CenterOfMassEquation(props) {

    const navigationButtons = [
        { route: "/COMLongitudinalFrontPage", title: "Distance behind the Front Axle of COM Location" },
        { route: "/COMLongitudinalRearPage", title: "Distance behind the Rear Axle of COM Location" },
        { route: "/COMLateralLeftPage", title: "Distance of COM from the left side of vehicle" },
        { route: "/COMLateralRightPage", title: "Distance of COM from the right side of vehicle" },
        // Add more buttons as needed
    ];

    return(
        <FormulaList categoryName={"Center of Mass Equations"} buttons={navigationButtons} />
    )
}

export default CenterOfMassEquation;