import React, { useState } from "react";
import Formula from "../../../../components/Formula";
import ToggleField from "../../../../components/ToggleField";
import { round } from "../../../../utils/Conversions";
import { getNumericFields } from "../../../../utils/FieldCreator";

// Toggle field description
const toggleFieldDescriptions = {
    isRear: "Front / Rear",
}

// Field descriptions for the front side
const frontFieldDescriptions = {
    axle_weight: { description: "Weight of front axle", placeholderText: "Enter weight in pounds" },
    wheelbase_width: { description: "Wheelbase - distance between front and rear axle", placeholderText: "Enter the distance in inches" },
    weight: { description: "Total weight of the vehicle", placeholderText: "Enter weight in pounds" },
}

// Field descriptions for the rear side
const rearFieldDescriptions = {
    axle_weight: { description: "Weight of rear axle", placeholderText: "Enter weight in pounds" },
    wheelbase_width: { description: "Wheelbase - distance between front and rear axle", placeholderText: "Enter the distance in inches" },
    weight: { description: "Total weight of the vehicle", placeholderText: "Enter weight in pounds" },
}

// Define a functional component for COMLongitudinalPage
function COMLongitudinalPage() {
    const [comdist, setCOMdist] = useState(null);

    const [fields, setFields] = useState({
        axle_weight: null,
        wheelbase_width: null,
        weight: null,
        isRear: false,
    });

    // Function to calculate the distance behind the axle of COM
    const calculateDistance = () => {
        if (fields.axle_weight === null || fields.wheelbase_width === null || fields.weight === null) {
            alert("Please fill out all fields.");
        } else {
            const dist = fields.axle_weight * fields.wheelbase_width / fields.weight;
            setCOMdist(dist);
        }
    };

    // Function to handle changes in numeric fields
    const handleValueChange = (fieldName, newValue) => {
        setFields({ ...fields, [fieldName]: newValue });
    }

    // Create toggle fields based on toggleFieldDescriptions
    const toggleFields = Object.keys(toggleFieldDescriptions).map(fieldName => (
        <ToggleField
            key={fieldName}
            description={toggleFieldDescriptions[fieldName]}
            value={fields[fieldName]}
            onChange={(newValue) => setFields({ ...fields, [fieldName]: newValue })}
        />
    ));

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Distance behind the Front/Rear Axle of COM Location"}
                toggleFields={toggleFields}
                numericFields={fields.isRear ? getNumericFields(fields, rearFieldDescriptions, handleValueChange) : getNumericFields(fields, frontFieldDescriptions, handleValueChange)}
                onCalculate={calculateDistance}
            />
            {comdist !== null && (
                <p>Calculated Distance behind the {fields.isRear ? "Rear" : "Front"} Axle of COM Location: {round(comdist)}</p>
            )}
        </div>
    );
}

export default COMLongitudinalPage;
