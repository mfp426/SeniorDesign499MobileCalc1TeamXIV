import React, { useState } from "react";
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";

// Field descriptions for the numeric input fields
const fieldDescriptions = {
    speed: { description: "Speed of Vehicle", placeholderText: "Enter speed in mph" },
    coefficient: { description: "Coefficient of Friction", placeholderText: "Enter the coefficient of friction" },
}

// Define a functional component for SlidetoStopWithDragPage
function SlidetoStopWithDragPage() {
    // State for input fields and calculated distance
    const [fields, setFields] = useState({
        speed: null,
        coefficient: null,
    });
    const [distance, setDistance] = useState(null);

    // Function to calculate slide to stop distance
    const calculateDistance = () => {
        if (fields.speed === null || fields.coefficient === null) {
            alert("Please fill out all fields.");
        } else {
            const calculatedDistance = (fields.speed ** 2) / (30 * fields.coefficient);
            setDistance(calculatedDistance);
        }
    };

    // Create numeric input fields based on fieldDescriptions
    const numericFields = Object.keys(fieldDescriptions).map(fieldName => (
        <NumericField
            key={fieldName}
            description={fieldDescriptions[fieldName].description}
            value={fields[fieldName]}
            onChange={(newValue) => setFields({ ...fields, [fieldName]: newValue })}
            placeholderText={fieldDescriptions[fieldName].placeholderText}
        />
    ));

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Slide to Stop Distance with known Distance and Drag Factor"}
                numericFields={numericFields}
                onCalculate={calculateDistance}
            />
            {distance !== null && <p>Calculated Slide to Stop Distance: {round(distance)} feet</p>}
        </div>
    );
}

export default SlidetoStopWithDragPage;
