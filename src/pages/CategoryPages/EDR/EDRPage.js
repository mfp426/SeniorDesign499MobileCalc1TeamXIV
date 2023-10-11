import FormulaList from "../../../components/FormulaList";

function EDRPage(props) {

    const navigationButtons = [
        { route: "/SpeedAtImpactPage", title: "Speed at Impact" },
    ];

    return (
        <FormulaList categoryName={"EDR"} buttons={navigationButtons} />
    );
}

export default EDRPage;