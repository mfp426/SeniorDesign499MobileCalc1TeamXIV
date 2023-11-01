import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import ToggleField from "../../../../components/ToggleField";

const intFieldDescriptions = {
    lastSpeedData: "Last Speed Data Point",
    samplesPerSecond: "Samples per Second",
    dragFactor: "Drag Factor / Slowing Rate",
    speedometerAccuracy: "Speedometer Accuracy",
};

const toggleIntFieldDescriptions = {
    slipPercentage: "Slip Percentage",
};

const toggleFieldDescriptions = {
    heavyOrAntiLock: "Heavy or AntiLock",
};

function SpeedAtImpact() {
    const [currFields, setCurrFields] = useState({
        lastSpeedData: null,
        samplesPerSecond: null,
        dragFactor: null,
        slipPercentage: null,
        speedometerAccuracy: null,
        heavyOrAntiLock: false,
    });

    const navigate = useNavigate();

    function handleValueChange(fieldName, newValue) {
        setCurrFields({ ...currFields, [fieldName]: newValue });
    }

    const toggledNumericFields = Object.keys(toggleIntFieldDescriptions).map(fieldName => (
        <NumericField
            key={fieldName}
            description={toggleIntFieldDescriptions[fieldName]}
            value={currFields[fieldName]}
            onChange={(newValue) => handleValueChange(fieldName, newValue)}
            disabled={!currFields.heavyOrAntiLock}
        />
    ));

    // Create the numeric fields for the "Speed at Impact" formula
    const numericFields = Object.keys(intFieldDescriptions).map(fieldName => (
        <NumericField
            key={fieldName}
            description={intFieldDescriptions[fieldName]}
            value={currFields[fieldName]}
            onChange={(newValue) => handleValueChange(fieldName, newValue)}
        />
    ));

    const toggleFields = Object.keys(toggleFieldDescriptions).map(fieldName => (
        <ToggleField
            key={fieldName}
            description={toggleFieldDescriptions[fieldName]}
            value={currFields[fieldName]}
            onChange={(newValue) => handleValueChange(fieldName, newValue)}
        />
    ));

    // Render the Formula component with the formula name and numeric fields
    return (
        <Formula
            formulaName="Speed at Impact"
            toggleFields={toggleFields}
            numericFields={[...toggledNumericFields, ...numericFields]}
            onCalculate={() => navigate("/EDR/SpeedAtImpact/Results", { state: {fields: currFields }})}
        />
    );
}
export default SpeedAtImpact;