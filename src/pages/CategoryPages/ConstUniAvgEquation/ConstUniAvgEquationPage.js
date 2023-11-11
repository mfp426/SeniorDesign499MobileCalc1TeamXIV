import ButtonGrid from "../../../components/ButtonGrid";

// Define a functional component for ConstUniAvgEquation
function ConstUniAvgEquation() {
    // Define an array of navigation buttons with their corresponding routes and titles
    const navigationButtons = [
        { route: "/ConstantVelocityPage", title: "Constant Velocity" },
        { route: "/ConstantTimePage", title: "Constant Time" },
        { route: "/ConstantDistancePage", title: "Constant Distance" },
        { route: "/SlidetoStopDistWithDragPage", title: "Slide to Stop Distance (known distance and drag factor)" },
        // Add more buttons as needed
    ];

    return (
        <ButtonGrid categoryName={"Constant, Uniform, or Average Kinematic Equations"} buttons={navigationButtons} />
        // Render the ButtonGrid component with the category name and navigation buttons
    );
}

export default ConstUniAvgEquation; // Export the ConstUniAvgEquation component
