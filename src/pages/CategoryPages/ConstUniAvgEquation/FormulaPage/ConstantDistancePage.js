import { useState } from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";

// Field descriptions for the numeric input fields
const fieldDescriptions = {
    velocity: { description: "The velocity of the object in feet per second.", placeholderText: "Enter velocity in fps" },
    time: { description: "The time traveled in seconds.", placeholderText: "Enter time in seconds" },
}

// Define a functional component for ConstantDistancePage
function ConstantDistancePage() {
    // State for input fields and calculated distance
    const [fields, setFields] = useState({
        velocity: null,
        time: null,
    });
    const [distance, setDistance] = useState(null);

    // Function to calculate the constant distance
    const calculateDistance = () => {
        if (fields.velocity === null || fields.time === null) {
            alert("Please fill out all fields.");
        } else {
            const dist = fields.velocity * fields.time;
            setDistance(dist);
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
                formulaName={"Constant Distance"}
                numericFields={numericFields}
                onCalculate={calculateDistance}
            />
            {distance !== null && <p>Calculated Constant Distance: {distance}</p>}
        </div>
    );
}

export default ConstantDistancePage;
