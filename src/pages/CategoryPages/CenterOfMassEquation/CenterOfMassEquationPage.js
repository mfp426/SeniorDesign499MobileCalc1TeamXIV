import FormulaList from "../../../components/FormulaList";


function CenterOfMassEquation() {

    const navigationButtons = [
        { route: "/COMLongitudinalPage", title: "Distance behind the Front/Rear Axle of COM Location" },
        { route: "/COMLateralPage", title: "Distance of COM from the left/right side of vehicle" },
    ];

    return(
        <FormulaList categoryName={"Center of Mass Equations"} buttons={navigationButtons} />
    )
}

export default CenterOfMassEquation;