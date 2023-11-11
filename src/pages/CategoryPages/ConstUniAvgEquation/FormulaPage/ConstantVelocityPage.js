import { useState } from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";

// Field descriptions for the numeric input fields
const fieldDescriptions = {
    distance: { description: "Distance:", placeholderText: "Enter distance in feet" },
    time: { description: "Time:", placeholderText: "Enter time in seconds" },
}

// Define a functional component for ConstantVelocity
function ConstantVelocity() {
    // State for input fields and calculated velocity
    const [fields, setFields] = useState({
        distance: null,
        time: null,
    });
    const [velocity, setVelocity] = useState(null);

    // Function to calculate constant velocity
    const calculateVelocity = () => {
        if (fields.distance === null || fields.time === null) {
            alert("Please fill out all fields.");
        } else {
            const vel = fields.distance / fields.time;
            setVelocity(vel);
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
                formulaName={"Constant Velocity"}
                numericFields={numericFields}
                onCalculate={calculateVelocity}
            />
            {velocity !== null && <p>Calculated Constant Velocity: {round(velocity)}</p>}
        </div>
    );
}

export default ConstantVelocity;
