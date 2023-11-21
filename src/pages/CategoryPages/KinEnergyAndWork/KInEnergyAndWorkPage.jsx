import ButtonGrid from "../../../components/ButtonGrid";


function KinEnergyAndWork() {

    const navigationButtons = [
        { route: "/KinEnergyCalPage", title: "Kinetic Energy Calculation" },
        { route: "/WorkCalPage", title: "Work Calculation" },
        { route: "/Conversions/SpeedAndVelocity", title: "Speed / Velocity based on Kinetic Energy" },
    ];

    return(
        <ButtonGrid categoryName={"Kinetic Energy and Work"} buttons={navigationButtons} />
    )
}

export default KinEnergyAndWork;
