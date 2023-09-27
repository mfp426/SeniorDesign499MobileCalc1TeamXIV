import FormulaList from "../../../components/FormulaList";

function GradeAndSuperElevation(props){

    const navigationButtons = [
        { route: "/PercentGradePage", title: "Percent Grade" },
        { route: "/PercentSuperelevationPage", title: "Percent of Superelevation" },
        // Add more buttons as needed
    ];


    return (
        <FormulaList categoryName={"Grade and Superelevation"} buttons={navigationButtons} />
    )
}

export default GradeAndSuperElevation;