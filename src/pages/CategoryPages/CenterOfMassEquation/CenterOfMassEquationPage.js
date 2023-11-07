import ButtonGrid from "../../../components/ButtonGrid";

// Define a functional component for the CenterOfMassEquation
function CenterOfMassEquation() {
    // Define an array of navigation buttons with their corresponding routes and titles
    const navigationButtons = [
        { route: "/COMLongitudinalPage", title: "Distance behind the Front/Rear Axle of COM Location" },
        { route: "/COMLateralPage", title: "Distance of COM from the left/right side of vehicle" },
    ];

    return (
        <ButtonGrid categoryName={"Center of Mass Equations"} buttons={navigationButtons} />
        // Render the ButtonGrid component with the category name and navigation buttons
    )
}

export default CenterOfMassEquation; // Export the CenterOfMassEquation component
