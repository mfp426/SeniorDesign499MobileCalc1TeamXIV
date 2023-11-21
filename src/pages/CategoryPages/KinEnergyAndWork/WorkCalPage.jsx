import ButtonGrid from "../../../components/ButtonGrid";


function WorkCal() {

    const navigationButtons = [
        { route: "/WorkWithForceAndDistPage", title: "Work with Distance and Force / Angle" },
        { route: "/WorkWithWeightAndDistPage", title: "Work with Weight and Distance" },
        
    ];

    return(
        <ButtonGrid categoryName={"Kinetic Energy Calculations"} buttons={navigationButtons} />
    )
}

export default WorkCal;
