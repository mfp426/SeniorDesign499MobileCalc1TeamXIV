import FormulaList from "../../../components/FormulaList";

function EDRPage() {

    const navigationButtons = [
        { route: "/EDR/SpeedAtImpact", title: "Speed at Impact" },
    ];

    return (
        <FormulaList categoryName={"EDR"} buttons={navigationButtons} />
    );
}

export default EDRPage;