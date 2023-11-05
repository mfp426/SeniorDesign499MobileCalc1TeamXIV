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

function SpeedAtImpactPage() {
    const [fields, setFields] = useState({
        lastSpeedData: 0,
        samplesPerSecond: 0,
        dragFactor: 0,
        slipPercentage: 0,
        speedometerAccuracy: 0,
        heavyOrAntiLock: false,
    });

    const navigate = useNavigate();

    const toggledNumericFields = Object.keys(toggleIntFieldDescriptions).map(fieldName => (
        <NumericField
            key={fieldName}
            description={toggleIntFieldDescriptions[fieldName]}
            value={fields[fieldName]}
            onChange={(newValue) => setFields({ ...fields, [fieldName]: newValue })}
            disabled={!fields.heavyOrAntiLock}
        />
    ));

    const numericFields = Object.keys(intFieldDescriptions).map(fieldName => (
        <NumericField
            key={fieldName}
            description={intFieldDescriptions[fieldName]}
            value={fields[fieldName]}
            onChange={(newValue) => setFields({ ...fields, [fieldName]: newValue })}
        />
    ));

    const toggleFields = Object.keys(toggleFieldDescriptions).map(fieldName => (
        <ToggleField
            key={fieldName}
            description={toggleFieldDescriptions[fieldName]}
            value={fields[fieldName]}
            onChange={(newValue) => setFields({ ...fields, [fieldName]: newValue })}
        />
    ));

    // Render the Formula component with the formula name and numeric fields
    return (
        <Formula
            formulaName="Speed at Impact"
            toggleFields={toggleFields}
            numericFields={[...toggledNumericFields, ...numericFields]}
            onCalculate={() => navigate("/EDR/SpeedAtImpact/Results", { state: {fields: fields }})}
        />
    );
}
export default SpeedAtImpactPage;